import { Chunk } from 'blockmap';
import { ReadResult, WriteResult } from 'file-disk';
import { constants, write as fswrite } from 'fs';
import * as fs from 'fs';
import { basename } from 'path';
import { Writable } from 'stream';

import { Metadata } from './metadata';
import { makeClassEmitProgressEvents } from './progress';
import { SourceDestination } from './source-destination';

import { PROGRESS_EMISSION_INTERVAL } from '../constants';
import { BlockReadStream } from '../block-read-stream';
import { close, stat, open, read, write } from '../fs';
import { SparseWriteStream } from '../sparse-write-stream';

export class FileSparseWriteStream extends Writable implements SparseWriteStream {
	private position: number;
	private bytesWritten = 0;

	constructor(private fd: number) {
		super({ objectMode: true });
	}

	private async __write(chunk: Chunk, enc: string): Promise<void> {
		try {
			this.position = chunk.position;
			await write(this.fd, chunk.buffer, 0, chunk.length, chunk.position);
			this.position += chunk.length;
			this.bytesWritten += chunk.length;
		} catch (error) {
			this.emit('error', error);
		}
	}

	//_write(chunk: Chunk, enc: string, callback?: (err?: Error | void) => void): void {
	_write(chunk: Chunk, enc: string, callback?: any): void {
		this.__write(chunk, enc).then(callback);
	}
}

// With node 6 types, typescript complains that "'WriteStream' only refers to a type, but is being used as a value here." which is not true.
// @ts-ignore
export const ProgressWriteStream = makeClassEmitProgressEvents(fs.WriteStream, 'bytesWritten', 'bytesWritten', PROGRESS_EMISSION_INTERVAL);
export const ProgressFileSparseWriteStream = makeClassEmitProgressEvents(FileSparseWriteStream, 'bytesWritten', 'position', PROGRESS_EMISSION_INTERVAL);

export class File extends SourceDestination {
	private fd: number;

	constructor(private path: string, private flags: File.OpenFlags) {
		super();
	}

	private _canRead() {
		return (
			(this.flags === File.OpenFlags.Read) ||
			(this.flags === File.OpenFlags.ReadWrite) ||
			(this.flags === File.OpenFlags.WriteDevice)
		);
	}

	private _canWrite() {
		return (
			(this.flags === File.OpenFlags.ReadWrite) ||
			(this.flags === File.OpenFlags.WriteDevice)
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

	async getMetadata(): Promise<Metadata> {
		return {
			size: (await stat(this.path)).size,
			name: basename(this.path),
		};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await read(this.fd, buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		return await write(this.fd, buffer, bufferOffset, length, fileOffset);
	}

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		return new BlockReadStream(this.fd, 0, end, 1024 * 1024);  // TODO: constant
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		// The ignore is here because types for WriteStream believe the constructor only takes one parameter.
		// @ts-ignore
		const stream = new ProgressWriteStream('', { fd: this.fd, autoClose: false, start: 0, highWaterMark: 1024 * 1024 });  // TODO: constant
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		const stream = new ProgressFileSparseWriteStream(this.fd);
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	protected async _open(): Promise<void> {
		await super._open();
		this.fd = await open(this.path, this.flags);
	}

	protected async _close(): Promise<void> {
		await super._close();
		await close(this.fd);
	}
}

export namespace File {
	export enum OpenFlags {
		Read = constants.O_RDONLY,
		ReadWrite = constants.O_RDWR | constants.O_CREAT,
		WriteDevice = constants.O_RDWR | constants.O_NONBLOCK | constants.O_SYNC,
	}
}
