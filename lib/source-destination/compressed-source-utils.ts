import { createGzipFromParts } from 'gzip-stream';
import { RawDeflatePart } from './raw-deflate-zip-stream';

export const createGzipStreamFromParts = (parts: RawDeflatePart[]) => {
	if (parts.length !== 1) {
		throw new Error(
			'Using gzip is only supported for sources with a single part',
		);
	}
	return createGzipFromParts(parts[0].parts);
};
