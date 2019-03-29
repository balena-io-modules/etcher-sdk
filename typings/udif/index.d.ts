declare module 'udif' {
	import { Readable } from 'readable-stream';

	// Not the same as ../lib/sparse-stream/sparse-read-stream/SparseReadStream
	// (no 'blocks' attribute)
	export class SparseReadStream extends Readable {}

	export class Image {
		public resourceFork: {
			blkx: Array<{
				map: {
					sectorNumber: number;
					blocks: Array<{
						sectorNumber: number;
						sectorCount: number;
						type: number;
					}>;
					checksum: {
						type: number;
						value: string;
					};
				};
			}>;
		};
		constructor(path: string, options: { fs: any });
		public getUncompressedSize(): number;
		public createReadStream(): NodeJS.ReadableStream;
		public createSparseReadStream(): SparseReadStream;
		public open(cb: any): void;
		public close(cb: any): void;
	}

	export const CHECKSUM_TYPE: { [key: string]: number };
	export const SECTOR_SIZE: number;
	export const BLOCK: { [key: string]: number };
}
