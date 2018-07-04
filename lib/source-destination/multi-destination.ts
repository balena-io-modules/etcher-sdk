import { each, map } from 'bluebird';
import { EventEmitter } from 'events';
import { ReadResult, WriteResult } from 'file-disk';
import { every, minBy } from 'lodash';
import { PassThrough } from 'stream';

import BlockMap = require('blockmap');

import { VerificationError } from '../errors';
import { PROGRESS_EMISSION_INTERVAL } from '../constants';
import { ProgressEvent } from './progress';
import { SourceDestination, Verifier } from './source-destination';
import { SparseWriteStream } from '../sparse-write-stream';
import { difference } from '../utils';

function isntNull(x: any) {
	return x !== null;
}

export class MultiDestinationError extends Error {
	constructor(public error: Error, public destination: SourceDestination) {
		super();
	}
}

export class MultiDestinationVerifier extends Verifier {
	private verifiers: Set<Verifier> = new Set();
	private timer: NodeJS.Timer;

	constructor(private source: MultiDestination, checksumOrBlockmap: string | BlockMap, size?: number) {
		super();
		for (const dest of source.activeDestinations) {
			const verifier = dest.createVerifier(checksumOrBlockmap, size);
			verifier.on('error', (error: Error) => {
				this.oneVerifierFinished(verifier);
				source.destinationError(dest, error, this);
			});
			verifier.on('finish', () => {
				this.oneVerifierFinished(verifier);
			});
			this.verifiers.add(verifier);
		}
	}

	private oneVerifierFinished(verifier: Verifier) {
		if (!this.verifiers.has(verifier)) {
			return;
		}
		if (this.verifiers.size === 1) {
			clearInterval(this.timer);
			this.emitProgress();
			this.emit('finish');
		}
		this.verifiers.delete(verifier);
	}

	private emitProgress() {
		// TODO: avoid Array.from
		const verifier = minBy(Array.from(this.verifiers), (verifier: Verifier) => {
			return verifier.progress.bytes;
		});
		if (verifier !== undefined) {
			this.emit('progress', verifier.progress);
		}
	}

	async run(): Promise<void> {
		if (this.verifiers.size === 0) {
			this.emit('finish');
			return;
		}
		this.timer = setInterval(this.emitProgress.bind(this), PROGRESS_EMISSION_INTERVAL);
		for (const verifier of this.verifiers) {
			verifier.run();
		}
	}
}

export class MultiDestination extends SourceDestination {
	// MultiDestination does not emit 'error' events, only 'fail' events wrapping the original error in a MultiDestinationError
	readonly destinations: Set<SourceDestination> = new Set();
	readonly erroredDestinations: Set<SourceDestination> = new Set();

	constructor(destinations: SourceDestination[]) {
		super();
		if (destinations.length === 0) {
			throw new Error('At least one destination is required');
		}
		destinations.map((destination: SourceDestination) => {
			this.destinations.add(destination);
		});
	}

	destinationError(destination: SourceDestination, error: Error, stream?: EventEmitter) {
		// If a stream is provided, emit the 'fail' event on it, instead of this instance.
		if (!(error instanceof VerificationError)) {
			// Verification errors aren't fatal
			this.erroredDestinations.add(destination);
		}
		error = new MultiDestinationError(error, destination);
		// Don't emit 'error' events as it would unpipe the source from the stream
		if (stream !== undefined) {
			stream.emit('fail', error);
		} else {
			this.emit('fail', error);
		}
	}

	get activeDestinations(): Set<SourceDestination> {
		return difference(this.destinations, this.erroredDestinations);
	}

	private async can(methodName: 'canRead' | 'canWrite' | 'canCreateReadStream' | 'canCreateSparseReadStream' | 'canCreateWriteStream' | 'canCreateSparseWriteStream') {
		return every(
			await map(this.activeDestinations, async (destination: SourceDestination) => {
				return await destination[methodName]();
			}),
		);
	}

	async canRead(): Promise<boolean> {
		return await this.can('canRead');
	}

	async canWrite(): Promise<boolean> {
		return await this.can('canWrite');
	}

	async canCreateReadStream(): Promise<boolean> {
		return await this.can('canCreateReadStream');
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		return await this.can('canCreateSparseReadStream');
	}

	async canCreateWriteStream(): Promise<boolean> {
		return await this.can('canCreateWriteStream');
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return await this.can('canCreateSparseWriteStream');
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		// Reads from the first destination (supposing all destinations contain the same data)
		return await Array.from(this.activeDestinations)[0].read(buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		const results = await map(this.activeDestinations, async (destination: SourceDestination) => {
			return await destination.write(buffer, bufferOffset, length, fileOffset);
		});
		// Returns the first WriteResult (they should be all the same)
		return results[0];
		// TODO: handle errors so one destination can fail
	}

	async _createReadStream(...args: any[]): Promise<NodeJS.ReadableStream> {
		// TODO: raise an error or a warning here
		return await Array.from(this.activeDestinations)[0]._createReadStream(...args);
	}

	async _createSparseReadStream(...args: any[]): Promise<BlockMap.FilterStream | BlockMap.ReadStream> {
		// TODO: raise an error or a warning here
		return await Array.from(this.activeDestinations)[0]._createSparseReadStream(...args);
	}

	private async createStream(methodName: 'createWriteStream' | 'createSparseWriteStream') {
		const passthrough = new PassThrough({ objectMode: (methodName === 'createSparseWriteStream') });
		passthrough.setMaxListeners(this.activeDestinations.size + 1);  // all streams listen to end events, +1 because we'll listen too
		const progresses: Map<NodeJS.WritableStream, ProgressEvent | null> = new Map();
		let interval: NodeJS.Timer;

		function oneStreamFinished(stream: NodeJS.WritableStream) {
			if (!progresses.has(stream)) {
				return;
			}
			if (progresses.size === 1) {
				clearInterval(interval);
				emitProgress();  // Just to be sure we emitted the last state
				passthrough.emit('done');
			}
			progresses.delete(stream);
		}

		function emitProgress() {
			// TODO: avoid Array.from
			const leastAdvancedProgress = minBy(Array.from(progresses.values()).filter(isntNull), 'position');
			if (leastAdvancedProgress !== undefined) {
				passthrough.emit('progress', leastAdvancedProgress);
			}
		}

		const streams = await map(this.activeDestinations, async (destination: SourceDestination, index: number) => {
			const stream = await destination[methodName]();
			progresses.set(stream, null);
			stream.on('progress', (progressEvent: ProgressEvent) => {
				progresses.set(stream, progressEvent);
				if (interval === undefined) {
					interval = setInterval(emitProgress, PROGRESS_EMISSION_INTERVAL);
				}
			});
			stream.on('error', (error: Error) => {
				this.destinationError(destination, error, passthrough);
				oneStreamFinished(stream);
			});
			stream.on('finish', oneStreamFinished.bind(null, stream));
			passthrough.pipe(stream);
		});

		passthrough.on('pipe', () => {
			// Handle the special case where we have zero destination streams
			if (this.activeDestinations.size === 0) {
				passthrough.emit('done');
			}
		});
		return passthrough;
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		return await this.createStream('createWriteStream');
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		return await this.createStream('createSparseWriteStream');
	}

	createVerifier(checksumOrBlockmap: string | BlockMap, size?: number): Verifier {
		return new MultiDestinationVerifier(this, checksumOrBlockmap, size);
	}

	protected async _open(): Promise<void> {
		// TODO: fix mountutils and use map
		//await map(this.destinations, async (destination) => {
		await each(this.activeDestinations, async (destination) => {
			try {
				await destination.open();
			} catch (error) {
				this.destinationError(destination, error);
			}
		});
	}

	protected async _close(): Promise<void> {
		// TODO: fix mountutils and use map
		//await map(this.destinations, async (destination) => {
		await each(this.activeDestinations, async (destination) => {
			try {
				await destination.close();
			} catch (error) {
				this.destinationError(destination, error);
			}
		});
	}
}
