declare module 'blockmap' {

	import { Transform } from 'stream';

	export class Chunk {
		buffer: Buffer;
		position: number;
		length: number;
	}

	export class FilterStream extends Transform {
		blockMap: Blockmap;
		bytesRead: number;
	}

	export class Blockmap {
		imageSize: number;
	}

	export function createFilterStream(blockmap: Blockmap, options?: { verify?: boolean }): FilterStream;
}
