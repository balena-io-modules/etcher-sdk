import { EventEmitter } from 'events';
import { ReadResult, WriteResult } from 'file-disk';

import { NotCapable } from '../errors';
import { SparseWriteStream } from '../sparse-write-stream';

import { Metadata } from './metadata';

export class SourceDestinationFs {
	// Adapts a SourceDestination to an fs like interface (so it can be used in udif for example)
	constructor(private source: SourceDestination) {
	}

	open(path: string, options: any, callback: (error: Error | null, fd?: number) => void) {
		callback(null, 1);
	}

	close(fd: number, callback: (error: Error | null) => void) {
		callback(null);
	}

	fstat(fd: number, callback: (error: Error | null, stats?: { size: number }) => void) {
		this.source.getMetadata()
		.then((metadata) => {
			if (metadata.size === undefined) {
				callback(new Error('No size'));
				return;
			}
			callback(null, { size: metadata.size });
		})
		.catch(callback);
	}

	read(
		fd: number,
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
		callback: (error: Error | null, bytesRead?: number, buffer?: Buffer) => void,
	) {
		this.source.read(buffer, bufferOffset, length, sourceOffset)
		.then((res: ReadResult) => {
			callback(null, res.bytesRead, res.buffer);
		})
		.catch(callback);
	}

	// TODO: add write if it is needed
}

export class SourceDestination extends EventEmitter {
	async canRead(): Promise<boolean> {
		return false;
	}

	async canWrite(): Promise<boolean> {
		return false;
	}

	async canCreateReadStream(): Promise<boolean> {
		return false;
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		return false;
	}

	async canCreateWriteStream(): Promise<boolean> {
		return false;
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return false;
	}

	async getMetadata(): Promise<Metadata> {
		throw new NotCapable();
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		throw new NotCapable();
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		throw new NotCapable();
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		throw new NotCapable();
	}

	async createSparseReadStream(): Promise<NodeJS.ReadableStream> {
		throw new NotCapable();
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		throw new NotCapable();
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		throw new NotCapable();
	}

	async open(): Promise<void> {
	}

	async close(): Promise<void> {
	}
}
