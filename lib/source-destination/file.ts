import { Chunk, createFilterStream, FilterStream } from 'blockmap';
import { Disposer, resolve } from 'bluebird';
import { ReadResult, WriteResult } from 'file-disk';
import { constants, createReadStream, createWriteStream } from 'fs';
import { Writable } from 'stream';
import { Stream as HashStream } from 'xxhash';

import { close, stat, open, read, write } from '../fs';
import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';
import { SparseWriteStream } from '../sparse-write-stream';

export class FileSparseWriteStream extends Writable implements SparseWriteStream {
	private position: number;
	private bytes = 0;
	private timeSpentWriting = 0;

	constructor(private fd: number) {
		super({ objectMode: true });
	}

	private emitProgress(): void {
		this.emit('progress', {
			bytes: this.bytes,
			position: this.position,
			time: this.timeSpentWriting,
		});
	}

	private async __write(chunk: Chunk, enc: string): Promise<void> {
		try {
			if (this.position !== chunk.position) {
				this.position = chunk.position;
				this.emitProgress();
			}
			const start = Date.now();
			await write(this.fd, chunk.buffer, 0, chunk.length, chunk.position);
			const end = Date.now();
			this.timeSpentWriting += end - start;
			this.position += chunk.length;
			this.bytes += chunk.length;
			this.emitProgress();
		} catch (error) {
			this.emit('error', error);
		}
	}

	_write(chunk: Chunk, enc: string, callback?: (err?: Error | void) => void): void {
		this.__write(chunk, enc).then(callback, callback);
	}
}

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
		};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await read(this.fd, buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		return await write(this.fd, buffer, bufferOffset, length, fileOffset);
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return createReadStream('', { fd: this.fd, autoClose: false, start: 0, highWaterMark: 1024 * 1024 });
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		return createWriteStream('', { fd: this.fd, autoClose: false, start: 0 });
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		return new FileSparseWriteStream(this.fd);
	}

	async open(): Promise<void> {
		await super.open();
		this.fd = await open(this.path, this.flags);
	}

	async close(): Promise<void> {
		await super.close();
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

