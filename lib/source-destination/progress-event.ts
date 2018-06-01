import { EventEmitter } from 'events';

import { SourceDestination } from './source-destination';

export interface ProgressEvent {
	position: number;    // position in the image
	bytes: number;       // number of bytes written
}

export async function makeStreamEmitProgressEvents<T extends NodeJS.ReadableStream>(stream: T, source: SourceDestination): Promise<T> {
	const metadata = await source.getMetadata();
	let bytes = 0;
	stream.on('data', (data: Buffer | { buffer: Buffer, position: number }) => {
		let position: number;
		if (Buffer.isBuffer(data)) {
			// Regular read stream
			bytes += data.length;
			position = bytes;
		} else {
			// Sparse read stream
			bytes += data.buffer.length;
			position = data.position + data.buffer.length;
		}
		stream.emit('progress', { position, bytes });
	});
	return stream;
}
