import {
	createGzipFromParts,
	getGzipSizeFromParts as $getGzipSizeFromParts,
} from './raw-deflate-gzip-stream';
import { RawDeflatePart } from './raw-deflate-zip-stream';
import { Stream } from 'node:stream';
import type { ImagePartInfo } from './compressed-source-types';

export const createGzipStreamFromParts = (parts: RawDeflatePart[]) => {
	if (parts.length !== 1) {
		throw new Error(
			'Using gzip is only supported for sources with a single part',
		);
	}
	return createGzipFromParts(parts[0].parts);
};

export const getGzipSizeFromParts = (parts: ImagePartInfo[]) => {
	if (parts.length !== 1) {
		throw new Error(
			'Using gzip is only supported for sources with a single part',
		);
	}
	return $getGzipSizeFromParts(parts[0].parts);
};

export const cleanupParts = function (partsByImage: RawDeflatePart[]) {
	for (const part of partsByImage) {
		for (const { stream } of part.parts) {
			if (stream instanceof Stream && !stream.destroyed) {
				stream.destroy();
			}
		}
	}
};
