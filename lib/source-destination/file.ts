import { Chunk, createFilterStream, FilterStream } from 'blockmap';
import { Disposer, resolve } from 'bluebird';
import { ReadResult, WriteResult } from 'file-disk';
import { constants, createReadStream, createWriteStream } from 'fs';
import { Writable } from 'stream';

import { close, fstat, open, read, write } from '../fs';
import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';
import { SparseWriteStream } from './sparse-write-stream';

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

export enum OpenFlags {
	Read = constants.O_RDONLY,
	Write = constants.O_WRONLY,
	WriteDevice = constants.O_RDWR | constants.O_NONBLOCK | constants.O_SYNC,
}

export class File extends SourceDestination {
	constructor(private fd: number, private flags: OpenFlags) {
		super();
	}

	private _canRead() {
		return ((this.flags === OpenFlags.Read) || (this.flags === OpenFlags.WriteDevice));
	}

	private _canWrite() {
		return ((this.flags === OpenFlags.Write) || (this.flags === OpenFlags.WriteDevice));
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
		const stat = await fstat(this.fd);
		return {
			size: stat.size,
		};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await read(this.fd, buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		return await write(this.fd, buffer, bufferOffset, length, fileOffset);
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return createReadStream('', { fd: this.fd, autoClose: false });
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		return createWriteStream('', { fd: this.fd, autoClose: false });
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		return new FileSparseWriteStream(this.fd);
	}

	static async fromPath(path: string, flags: OpenFlags): Promise<Disposer<File>> {
		const fd = await open(path, flags);
		return resolve(new File(fd, flags))
		.disposer(async () => {
			await close(fd);
		});
	}
}
