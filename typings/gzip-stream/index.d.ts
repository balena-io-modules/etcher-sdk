declare module 'gzip-stream' {
	import { PassThrough } from 'stream';

	export interface DeflatePartStreamMetadata {
		crc: number;
		len: number;
		zLen: number;
		digest?: string;
	}

	export interface DeflatePartStream extends PassThrough {
		metadata: () => DeflatePartStreamMetadata;
	}

	export interface GzipStream extends NodeJS.ReadableStream {
		zLen: number;
	}

	export function createDeflatePart(): DeflatePartStream;

	export function createGzipFromParts(
		parts: Array<{
			stream: NodeJS.ReadableStream | Buffer;
			len: number;
			zLen: number;
			digest?: string;
		}>,
	): GzipStream;

	export const DEFLATE_END: Buffer;
}
