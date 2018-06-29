declare module 'blockmap' {

	import { Readable, Transform } from 'stream';

	class BlockMap {
		imageSize: number;
		blockSize: number;
		blockCount: number;
		mappedBlockCount: number;
	}

	namespace BlockMap {
		export class Chunk {
			buffer: Buffer;
			position: number;
			length: number;
		}

		export class FilterStream extends Transform {
			blockMap: BlockMap;
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
			blockMap: BlockMap;
			blocksRead: number;
			bytesRead: number;
			constructor(filename: string, blockmap: BlockMap, options: any);
			destroy(): void;
		}

		export function createFilterStream(blockmap: BlockMap, options?: { verify?: boolean, generateChecksums?: boolean }): FilterStream;

		export function parse(data: string): BlockMap;
	}

	export = BlockMap;
}
