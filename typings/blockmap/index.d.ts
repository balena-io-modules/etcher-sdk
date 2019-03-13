declare module 'blockmap' {
	import { Readable, Transform } from 'stream';

	class BlockMap {
		public imageSize: number;
		public blockSize: number;
		public blockCount: number;
		public mappedBlockCount: number;
	}

	namespace BlockMap {
		export class Chunk {
			public buffer: Buffer;
			public position: number;
			public length: number;
		}

		export class FilterStream extends Transform {
			public blockMap: BlockMap;
			public blocksRead: number;
			public bytesRead: number;
		}

		export class Range {
			public start: number;
			public end: number;
			public checksum?: string;
		}

		export class ReadRange {
			constructor(range: Range, blockSize: number);
		}

		export class ReadStream extends Readable {
			public blockMap: BlockMap;
			public blocksRead: number;
			public bytesRead: number;
			constructor(filename: string, blockmap: BlockMap, options: any);
			public destroy(): void;
		}

		export function createFilterStream(
			blockmap: BlockMap,
			options?: { verify?: boolean; generateChecksums?: boolean },
		): FilterStream;

		export function parse(
			data: string,
			options?: { verify: boolean },
		): BlockMap;
	}

	export = BlockMap;
}
