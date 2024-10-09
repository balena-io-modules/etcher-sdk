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

import { ReadResult, WriteResult } from 'file-disk';
import { constants, promises as fs, WriteStream } from 'fs';
import { basename } from 'path';

import { Metadata } from './metadata';
import { makeClassEmitProgressEvents } from './progress';
import {
	CreateReadStreamOptions,
	SourceDestination,
} from './source-destination';

import { BlockReadStream, ProgressBlockReadStream } from '../block-read-stream';
import { RETRY_BASE_TIMEOUT } from '../constants';
import { retryOnTransientError } from '../errors';
import {
	ProgressSparseWriteStream,
	SparseWriteStream,
} from '../sparse-stream/sparse-write-stream';

export const ProgressWriteStream = makeClassEmitProgressEvents(
	WriteStream,
	'bytesWritten',
	'bytesWritten',
);

const READ_TRIES = 5;
const readEndMarker = Buffer.from(`not the correct data ${Math.random()}`);

export class File extends SourceDestination {
	public readonly path: string;
	public oWrite: boolean;
	protected fileHandle: fs.FileHandle;

	constructor({ path, write = false }: { path: string; write?: boolean }) {
		super();
		this.path = path;
		this.oWrite = write;
	}

	protected getOpenFlags() {
		return this.oWrite
			? // tslint:disable-next-line:no-bitwise
			  constants.O_CREAT | constants.O_RDWR
			: constants.O_RDONLY;
	}

	public async canRead(): Promise<boolean> {
		return true;
	}

	public async canWrite(): Promise<boolean> {
		return this.oWrite;
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public canCreateWriteStream(): Promise<boolean> {
		return this.canWrite();
	}

	public canCreateSparseWriteStream(): Promise<boolean> {
		return this.canWrite();
	}

	protected async _getMetadata(): Promise<Metadata> {
		return {
			size: (await fs.stat(this.path)).size,
			name: basename(this.path),
		};
	}

	public async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		// In very rare occasions (happened on Linux with node 12 reading from a block device: O_DIRECT + O_SYNC into an aligned buffer),
		// the read does not read the whole required length (up to 4KiB can be missing at the end of 1MiB reads).
		// This was checked by filling the buffer with a specific pattern before reading and looking for this pattern
		// in the buffer after the read.
		// To mitigate this, we write a specific marker at the end of the buffer before reading and retry the read if
		// it is still there after reading.
		let result;
		let tries = READ_TRIES;
		const markerPosition = bufferOffset + length - readEndMarker.length;
		if (length >= readEndMarker.length) {
			readEndMarker.copy(buffer, markerPosition);
		}
		do {
			if (tries < READ_TRIES) {
				console.warn('Incomplete read', {
					path: this.path,
					bufferOffset,
					length,
					sourceOffset,
					bufferLength: buffer.length,
				});
			}
			result = await this.fileHandle.read(
				buffer,
				bufferOffset,
				length,
				sourceOffset,
			);
			tries -= 1;
		} while (
			tries > 0 &&
			length >= readEndMarker.length &&
			result.bytesRead === length &&
			readEndMarker.compare(
				buffer,
				markerPosition,
				markerPosition + readEndMarker.length,
			) === 0
		);
		return result;
	}

	public write(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		return this.fileHandle.write(buffer, bufferOffset, length, fileOffset);
	}

	public async createReadStream({
		emitProgress = false,
		start = 0,
		end,
		alignment,
		numBuffers,
	}: CreateReadStreamOptions = {}): Promise<NodeJS.ReadableStream> {
		await this.open();
		const metadata = await this.getMetadata();
		if (metadata.size! !== 0) {
			// workaround for special files like /dev/zero or /dev/random
			const lastByte = metadata.size! - 1;
			end = end === undefined ? lastByte : Math.min(end, lastByte);
		}
		if (emitProgress) {
			return new ProgressBlockReadStream({
				source: this,
				alignment,
				start,
				end,
				numBuffers,
			});
		} else {
			return new BlockReadStream({
				source: this,
				alignment,
				start,
				end,
				numBuffers,
			});
		}
	}

	public async createWriteStream({
		highWaterMark,
	}: { highWaterMark?: number } = {}): Promise<NodeJS.WritableStream> {
		// TODO: use SourceDestinationFs (implement write) when node 14 becomes LTS
		// @ts-expect-error: @types/node is wrong about fs.WriteStream constructor: it takes 2 arguments, the first one is the file path
		const stream = new ProgressWriteStream(null, {
			fd: this.fileHandle.fd,
			autoClose: false,
			highWaterMark,
		});
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	public async createSparseWriteStream({
		highWaterMark,
	}: { highWaterMark?: number } = {}): Promise<SparseWriteStream> {
		const stream = new ProgressSparseWriteStream({
			destination: this,
			highWaterMark,
		});
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	protected async _open(): Promise<void> {
		await retryOnTransientError(
			async () => {
				this.fileHandle = await fs.open(this.path, this.getOpenFlags());
			},
			150,
			RETRY_BASE_TIMEOUT,
		);
	}

	protected async _close(): Promise<void> {
		await this.fileHandle.close();
	}
}
