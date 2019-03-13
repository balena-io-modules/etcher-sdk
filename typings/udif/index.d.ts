declare module 'udif' {
	import { FilterStream } from 'blockmap';

	export class Image {
		public resourceFork: any;
		constructor(path: string, options: { fs: any });
		public getUncompressedSize(): number;
		public createReadStream(): NodeJS.ReadableStream;
		public createSparseReadStream(): FilterStream;
		public open(cb: any): void;
		public close(cb: any): void;
	}

	export const SECTOR_SIZE: number;
	export const BLOCK: { [key: string]: number };
}
