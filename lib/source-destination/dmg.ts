import { FilterStream } from 'blockmap';
import { Disposer, resolve } from 'bluebird';
import { ReadResult } from 'file-disk';
import { Stats } from 'fs';
import { Image as UDIFImage } from 'udif';
import { promisify } from 'util';

import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';

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

export class DmgSource extends SourceDestination {
	private constructor(private image: any, private source: SourceDestination) {
		super();
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return this.image.createReadStream();
	}

	async createSparseReadStream(): Promise<FilterStream> {
		return this.image.createSparseReadStream();
	}

	async getMetadata(): Promise<Metadata> {
		const compressedSize = (await this.source.getMetadata()).size;
		return {
			compressedSize,
			size: this.image.getUncompressedSize(),
		};
	}

	static async fromSource(source: SourceDestination): Promise<Disposer<DmgSource>> {
		const image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
		await promisify(image.open).bind(image)();
		return resolve(new DmgSource(image, source))
		.disposer(async () => {
			await promisify(image.close).bind(image)();
		});
	}
}
