declare module 'lzma-native' {
	import { Transform } from 'stream';

	function createDecompressor(options?: { memlimit: number }): Transform;

	function parseFileIndex(
		options: {
			fileSize: number;
			read: (
				count: number,
				offset: number,
				cb: (err: Error | null, buffer?: Buffer) => any,
			) => void;
		},
		callback: (
			error: Error | null,
			metadata: { uncompressedSize: number },
		) => void,
	): void;
}
