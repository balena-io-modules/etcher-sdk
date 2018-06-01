declare module 'blockmap' {

	import { Readable, Transform } from 'stream';

	export class Chunk {
		buffer: Buffer;
		position: number;
		length: number;
	}

	export class FilterStream extends Transform {
		blockMap: Blockmap;
		blocksRead: number;
		bytesRead: number;
	}

	export class Range {
		start: number;
		end: number;
		checksum?: string;
	}

	export class ReadRange {
		constructor(range: Range, blockSize: number);
	}

	export class ReadStream extends Readable {
		blockMap: Blockmap;
		blocksRead: number;
		bytesRead: number;
		constructor(filename: string, blockmap: Blockmap, options: any);
	}

	export class Blockmap {
		imageSize: number;
		blockSize: number;
		blockCount: number;
		mappedBlockCount: number;
		ranges: Range[];
	}

	export function createFilterStream(blockmap: Blockmap, options?: { verify?: boolean, generateChecksums?: boolean }): FilterStream;
}
