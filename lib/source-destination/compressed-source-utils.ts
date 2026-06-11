import { createGzipFromParts } from 'gzip-stream';
import { RawDeflatePart } from './raw-deflate-zip-stream';
import { Readable } from 'node:stream';

export const createGzipStreamFromParts = (parts: RawDeflatePart[]) => {
	if (parts.length !== 1) {
		throw new Error(
			'Using gzip is only supported for sources with a single part',
		);
	}
	return createGzipFromParts(parts[0].parts);
};

export const cleanupParts = function (
	partsByImage: RawDeflatePart[],
	error?: Error,
) {
	for (const part of partsByImage) {
		for (const { stream } of part.parts) {
			if (stream instanceof Readable && !stream.destroyed) {
				stream.destroy(error);
			}
		}
	}
};
