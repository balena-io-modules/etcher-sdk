import { EventEmitter } from 'events';
import { arch } from 'process';
import { Stream as HashStream } from 'xxhash';

import { SourceDestination } from './source-destination/source-destination';
import { streamToBuffer } from './utils';

// Seed value 0x45544348 = ASCII "ETCH"
const SEED = 0x45544348;
const BITS = (arch === 'x64' || arch === 'aarch64') ? 64 : 32;

export class VerificationError extends Error { // TODO: move to errors
}

export const createHasher = () => {
	return new HashStream(SEED, BITS);
};

export const createVerifier = async (destination: SourceDestination, checksum: string, size: number): Promise<EventEmitter> => {
	// This could be a method of SourceDestination.
	// The returned EventEmitter emits 3 kinds of events:
	// * progress: data is the percentage of completion;
	// * error: data is an Error that happened while reading or a VerificationError (checksum mismatch);
	// * success: no data, the verification is complete and the checksums match.
	const hasher = createHasher();
	let position = 0;
	const stream = await destination.createReadStream();
	const emitter = new EventEmitter();
	stream.on('data', (data) => {
		position += data.length;
		emitter.emit('progress', position / size);
	});
	stream.on('error', emitter.emit.bind(emitter, 'error'));
	hasher.on('error', emitter.emit.bind(emitter, 'error'));
	hasher.on('finish', async () => {
		const streamChecksum = (await streamToBuffer(hasher)).toString('hex');
		// TODO: debug
		console.log('finish', position, streamChecksum);

		if (streamChecksum === checksum) {
			emitter.emit('success');
		} else {
			emitter.emit(
				'error',
				new VerificationError(`Source and destination checksums do not match: ${checksum} !== ${streamChecksum}`),
			);
		}
	});
	stream.pipe(hasher);
	return emitter;
};
