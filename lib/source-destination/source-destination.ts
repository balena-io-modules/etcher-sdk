import { FilterStream } from 'blockmap';
import { ReadResult, WriteResult } from 'file-disk';

import { NotCapable } from '../errors';
import { Metadata } from './metadata';
import { SparseWriteStream } from './sparse-write-stream';

export class SourceDestination {
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
		return {};
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

	async createSparseReadStream(): Promise<FilterStream> {  // TODO: replace FilterStream with SparseReadStream
		throw new NotCapable();
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		throw new NotCapable();
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		throw new NotCapable();
	}
}
