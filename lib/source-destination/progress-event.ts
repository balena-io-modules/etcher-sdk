import { EventEmitter } from 'events';

import { SourceDestination } from './source-destination';

export interface ProgressEvent {
	position: number;    // position in the image
	size: number;        // total size of the image
	bytes: number;       // number of bytes written
	totalBytes: number;  // number of bytes to write, may be smaller than size
}

export async function makeStreamEmitProgressEvents<T extends EventEmitter>(stream: T, source: SourceDestination): Promise<T> {
	const metadata = await source.getMetadata();
	const size = metadata.size;
	let totalBytes = (metadata.blockmappedSize === undefined) ? metadata.size : metadata.blockmappedSize;
	let bytes = 0;
	if (totalBytes === undefined) {
		totalBytes = size;
	}
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
		stream.emit('progress', { position, size, bytes, totalBytes });
	});
	return stream;
}
