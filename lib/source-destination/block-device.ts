/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getAlignedBuffer, O_EXLOCK, setF_NOCACHE } from '@ronomon/direct-io';
import { Drive as DrivelistDrive } from 'drivelist';
import { ReadResult, WriteResult } from 'file-disk';
import { constants } from 'fs';
import { platform } from 'os';

import {
	BlockWriteStream,
	ProgressBlockWriteStream,
} from '../block-write-stream';
import { DEFAULT_ALIGNMENT } from '../constants';
import { clean } from '../diskpart';
import { getUnmountDisk } from '../lazy';
import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import {
	ProgressSparseWriteStream,
	SparseWriteStream,
} from '../sparse-stream/sparse-write-stream';
import { delay, fromCallback } from '../utils';
import { File } from './file';
import { Metadata } from './metadata';

/**
 * @summary Time, in milliseconds, to wait before unmounting on success
 */
const UNMOUNT_ON_SUCCESS_TIMEOUT_MS = 2000;
const WIN32_FIRST_BYTES_TO_KEEP = 64 * 1024;

export class BlockDevice extends File implements AdapterSourceDestination {
	private drive: DrivelistDrive;
	private unmountOnSuccess: boolean;
	public oDirect: boolean;
	public emitsProgress = false;
	private keepOriginal = false
	public readonly alignment: number;

	constructor({
		drive,
		unmountOnSuccess = false,
		write = false,
		direct = true,
		keepOriginal = false
	}: {
		drive: DrivelistDrive;
		unmountOnSuccess?: boolean;
		write?: boolean;
		direct?: boolean;
		keepOriginal?: boolean
	}) {
		super({ path: drive.raw, write });
		this.drive = drive;
		this.unmountOnSuccess = unmountOnSuccess;
		this.oDirect = direct;
		this.keepOriginal = keepOriginal; // skip clean of drive before write
		// alignment must be at most 4k
		this.alignment = Math.min(
			drive.blockSize || DEFAULT_ALIGNMENT,
			4 * 1024 ** 2,
		);
	}

	public getAlignment() {
		if (this.oDirect) {
			return this.alignment;
		}
	}

	protected getOpenFlags() {
		// tslint:disable:no-bitwise
		let flags = this.oWrite ? constants.O_RDWR : constants.O_RDONLY;
		if (this.oDirect) {
			flags |= constants.O_DIRECT;
		}
		if (this.oWrite) {
			const plat = platform();
			if (plat === 'linux') {
				flags |= constants.O_EXCL;
			} else if (plat === 'darwin') {
				flags |= O_EXLOCK;
			}
			// TODO: use O_EXCLOCK on windows too (getting EBUSY errors with it)
		}
		// tslint:enable:no-bitwise
		return flags;
	}

	get isSystem(): boolean {
		return this.drive.isSystem;
	}

	get raw(): string {
		return this.drive.raw;
	}

	get device(): string {
		return this.drive.device;
	}

	get devicePath(): string | null {
		return this.drive.devicePath;
	}

	get description(): string {
		return this.drive.description;
	}

	get mountpoints() {
		return this.drive.mountpoints;
	}

	get size(): number | null {
		return this.drive.size;
	}

	protected async _getMetadata(): Promise<Metadata> {
		return {
			size: this.drive.size || undefined,
			name: this.drive.device,
		};
	}

	public async canWrite(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	public async canCreateWriteStream(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	public async canCreateSparseWriteStream(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	public async createWriteStream({
		highWaterMark,
		startOffset,
	}: { highWaterMark?: number, startOffset?: number } = {}): Promise<BlockWriteStream> {
		const stream = new ProgressBlockWriteStream({
			destination: this,
			delayFirstBuffer: platform() === 'win32',
			highWaterMark,
			startOffset
		});
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	public async createSparseWriteStream({
		highWaterMark,
	}: { highWaterMark?: number } = {}): Promise<SparseWriteStream> {
		const stream = new ProgressSparseWriteStream({
			destination: this,
			firstBytesToKeep: platform() === 'win32' ? WIN32_FIRST_BYTES_TO_KEEP : 0,
			highWaterMark,
		});
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	protected async _open(): Promise<void> {
		const plat = platform();
		if (this.oWrite) {
			if (plat !== 'win32') {
				const unmountDisk = getUnmountDisk();
				await unmountDisk(this.drive.device);
			}
			// diskpart clean on windows
			if (!this.keepOriginal) {
				await clean(this.drive.device);
			}
		}
		await super._open();
		if (plat === 'darwin') {
			await fromCallback((cb) => {
				setF_NOCACHE(this.fileHandle.fd, 1, cb);
			});
		}
	}

	protected async _close(): Promise<void> {
		await super._close();
		// Closing a file descriptor on a drive containing mountable
		// partitions causes macOS to mount the drive. If we try to
		// unmount too quickly, then the drive might get re-mounted
		// right afterwards.
		if (this.unmountOnSuccess) {
			await delay(UNMOUNT_ON_SUCCESS_TIMEOUT_MS);
			const unmountDisk = getUnmountDisk();
			await unmountDisk(this.drive.device);
		}
	}

	private offsetIsAligned(offset: number): boolean {
		return offset % this.alignment === 0;
	}

	private alignOffsetBefore(offset: number): number {
		return Math.floor(offset / this.alignment) * this.alignment;
	}

	private alignOffsetAfter(offset: number): number {
		return Math.ceil(offset / this.alignment) * this.alignment;
	}

	private async alignedRead(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		const start = this.alignOffsetBefore(sourceOffset);
		const end = this.alignOffsetAfter(sourceOffset + length);
		const alignedBuffer = getAlignedBuffer(end - start, this.alignment);
		const { bytesRead } = await super.read(
			alignedBuffer,
			0,
			alignedBuffer.length,
			start,
		);
		const offset = sourceOffset - start;
		alignedBuffer.copy(buffer, bufferOffset, offset, offset + length);
		return { buffer, bytesRead: Math.min(length, bytesRead - offset) };
	}

	public read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		if (!(this.offsetIsAligned(sourceOffset) && this.offsetIsAligned(length))) {
			return this.alignedRead(buffer, bufferOffset, length, sourceOffset);
		} else {
			return super.read(buffer, bufferOffset, length, sourceOffset);
		}
	}

	private async alignedWrite(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		const start = this.alignOffsetBefore(fileOffset);
		const end = this.alignOffsetAfter(fileOffset + length);
		const alignedBuffer = getAlignedBuffer(end - start, this.alignment);
		await super.read(alignedBuffer, 0, alignedBuffer.length, start);
		const offset = fileOffset - start;
		buffer.copy(alignedBuffer, offset, bufferOffset, length);
		await super.write(alignedBuffer, 0, alignedBuffer.length, start);
		return { buffer, bytesWritten: length };
	}

	public write(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		if (!(this.offsetIsAligned(fileOffset) && this.offsetIsAligned(length))) {
			return this.alignedWrite(buffer, bufferOffset, length, fileOffset);
		} else {
			return super.write(buffer, bufferOffset, length, fileOffset);
		}
	}
}
