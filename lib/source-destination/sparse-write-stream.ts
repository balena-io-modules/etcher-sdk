import { Chunk } from 'blockmap';

export interface SparseWriteStream extends NodeJS.WritableStream {
	_write(chunk: Chunk, enc: string, callback: (err?: Error | void) => void): void;
	on(event: 'progress', listener: (data: ProgressEvent) => void): this;
	on(event: string, listener: (data: any) => void): this;
}
