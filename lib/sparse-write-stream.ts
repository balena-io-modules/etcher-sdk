import { Chunk } from 'blockmap';

export interface SparseWriteStream extends NodeJS.WritableStream {
	_write(chunk: Chunk, enc: string, callback: (err?: Error | void) => void): void;
}
