declare module 'udif' {
	import { FilterStream } from 'blockmap';

	export class Image {
		resourceFork: any;
		constructor(path: string, options: { fs: any });
		getUncompressedSize(): number;
		createReadStream(): NodeJS.ReadableStream;
		createSparseReadStream(): FilterStream;
		open(cb: any): void;
		close(cb: any): void;
	}

	export const SECTOR_SIZE: number;
	export const BLOCK: { [key: string]: number };
}
