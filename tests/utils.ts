import { createDeflatePart } from 'gzip-stream';
import { Readable, Writable } from 'stream';
import { pipeline } from 'stream/promises';

/** Compress data with DeflatePartStream and return the buffer + metadata. */
export async function makeDeflatePart(
	data: Buffer,
): Promise<{ buf: Buffer; crc: number; len: number; zLen: number }> {
	const deflate = createDeflatePart();
	const chunks: Buffer[] = [];
	await pipeline(
		Readable.from([data]),
		deflate,
		new Writable({
			write(chunk: Buffer, _enc, cb) {
				chunks.push(chunk);
				cb();
			},
		}),
	);
	return { buf: Buffer.concat(chunks), ...deflate.metadata() };
}

export function sumImageJSONLenFields(
	imageJSON: Record<string, { parts: Array<{ len: number }> }>,
): number {
	return Object.values(imageJSON)
		.flatMap((img) => img.parts)
		.reduce((sum, part) => sum + part.len, 0);
}

export async function countBytes(
	readable: NodeJS.ReadableStream,
): Promise<number> {
	let n = 0;
	await pipeline(
		readable,
		new Writable({
			write(chunk: Buffer, _enc, cb) {
				n += chunk.length;
				cb();
			},
		}),
	);
	return n;
}
