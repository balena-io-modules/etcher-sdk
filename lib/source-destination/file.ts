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
// Can't use "import { constants, ReadStream, WriteStream } from 'fs';"
// as ReadStream and WriteStream are defined as interfaces in @types/node
// and are not imported in the generated js. They are classes, not interfaces.
import * as fs from 'fs';
import { basename } from 'path';

import { Metadata } from './metadata';
import { makeClassEmitProgressEvents } from './progress';
import { SourceDestination } from './source-destination';

import { PROGRESS_EMISSION_INTERVAL } from '../constants';
import { close, stat, open, read, write } from '../fs';
import {
	DestinationSparseWriteStream,
	ProgressDestinationSparseWriteStream,
} from '../destination-sparse-write-stream';
import { BlockReadStream, ProgressBlockReadStream } from '../block-read-stream';

export const ProgressWriteStream = makeClassEmitProgressEvents(
	// type definitions for node 6 export fs.WriteStream as an interface, but it's a class.
	// @ts-ignore
	fs.WriteStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
);

export class File extends SourceDestination {
	protected fd: number;
	public blockSize = 512;

	constructor(private path: string, private flags: File.OpenFlags) {
		super();
	}

	private _canRead() {
		return (
			this.flags === File.OpenFlags.Read ||
			this.flags === File.OpenFlags.ReadWrite ||
			this.flags === File.OpenFlags.WriteDevice
		);
	}

	private _canWrite() {
		return (
			this.flags === File.OpenFlags.ReadWrite ||
			this.flags === File.OpenFlags.WriteDevice
		);
	}

	async canRead(): Promise<boolean> {
		return this._canRead();
	}

	async canWrite(): Promise<boolean> {
		return this._canWrite();
	}

	async canCreateReadStream(): Promise<boolean> {
		return this._canRead();
	}

	async canCreateWriteStream(): Promise<boolean> {
		return this._canWrite();
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return this._canWrite();
	}

	async _getMetadata(): Promise<Metadata> {
		return {
			size: (await stat(this.path)).size,
			name: basename(this.path),
		};
	}

	async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		return await read(this.fd, buffer, bufferOffset, length, sourceOffset);
	}

	async write(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		return await write(this.fd, buffer, bufferOffset, length, fileOffset);
	}

	async createReadStream(
		emitProgress = false,
		start = 0,
		end?: number,
	): Promise<NodeJS.ReadableStream> {
		if (emitProgress) {
			return new ProgressBlockReadStream(this, start, end);
		} else {
			return new BlockReadStream(this, start, end);
		}
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		const stream = new ProgressWriteStream(null, {
			fd: this.fd,
			autoClose: false,
		});
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	async createSparseWriteStream(): Promise<DestinationSparseWriteStream> {
		const stream = new ProgressDestinationSparseWriteStream(this);
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	protected async _open(): Promise<void> {
		this.fd = await open(this.path, this.flags);
	}

	protected async _close(): Promise<void> {
		await close(this.fd);
	}
}

export namespace File {
	export enum OpenFlags {
		Read = fs.constants.O_RDONLY,
		ReadWrite = fs.constants.O_RDWR | fs.constants.O_CREAT,
		WriteDevice = fs.constants.O_RDWR |
			fs.constants.O_NONBLOCK |
			fs.constants.O_SYNC,
	}
}
