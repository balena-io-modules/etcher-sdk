declare module 'udif' {

	import { FilterStream } from 'blockmap';

	export class Image {
		constructor(path: string, options?: any);
		getUncompressedSize(): number;
		createReadStream(): NodeJS.ReadableStream;
		createSparseReadStream(): FilterStream;
		open(cb: any): void;
		close(cb: any): void;
	}
}
