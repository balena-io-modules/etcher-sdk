import { Chunk } from 'blockmap';
import { delay } from 'bluebird';
import { ReadResult, WriteResult } from 'file-disk';
import { constants, write as fswrite } from 'fs';
import { basename } from 'path';
import { Writable } from 'readable-stream';

import { Metadata } from './metadata';
import { makeClassEmitProgressEvents } from './progress';
import { SourceDestination } from './source-destination';

import { PROGRESS_EMISSION_INTERVAL } from '../constants';
import { BlockReadStream } from '../block-read-stream';
import { ProgressBlockWriteStream } from '../block-write-stream';
import { isTransientError } from '../errors';
import { close, stat, open, read, write } from '../fs';
import { SparseWriteStream } from '../sparse-write-stream';

const RETRY_BASE_TIMEOUT = 100;

export class FileSparseWriteStream extends Writable implements SparseWriteStream {
	// TODO: this should write the first sectors last like block-write-stream
	// or we should open the block devices with the correct flags on Windows
	private position: number;
	private bytesWritten = 0;

	constructor(private fd: number, private maxRetries = 5) {
		super({ objectMode: true });
	}

	private async __write(chunk: Chunk, enc: string): Promise<void> {
		let retries = 0;
		while (true) {
			try {
				this.position = chunk.position;
				await write(this.fd, chunk.buffer, 0, chunk.buffer.length, chunk.position);
				this.position += chunk.buffer.length;
				this.bytesWritten += chunk.buffer.length;
				return;
			} catch (error) {
				if (isTransientError(error)) {
					if (retries < this.maxRetries) {
						retries += 1;
						await delay(RETRY_BASE_TIMEOUT * retries);
						continue;
					}
					error.code = 'EUNPLUGGED';
				}
				//this.emit('error', error);
				throw error;
			}
		}
	}

	_write(chunk: Chunk, enc: string, callback?: any): void {
		this.__write(chunk, enc).then(callback, callback);
	}
}

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

	async _getMetadata(): Promise<Metadata> {
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

	async _createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
		return new BlockReadStream(this.fd, start, end, 1024 * 1024);  // TODO: constant
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		const stream = new ProgressBlockWriteStream(this.fd);
		stream.on('finish', stream.emit.bind(stream, 'done'));
		return stream;
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		const stream = new ProgressFileSparseWriteStream(this.fd);
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
		Read = constants.O_RDONLY,
		ReadWrite = constants.O_RDWR | constants.O_CREAT,
		WriteDevice = constants.O_RDWR | constants.O_NONBLOCK | constants.O_SYNC,
	}
}
