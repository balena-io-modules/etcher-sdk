import { createHasher, ProgressHashStream, SourceDestination, Verifier } from './source-destination/source-destination';
import { Metadata } from './source-destination/metadata';
import { MultiDestination, MultiDestinationError } from './source-destination/multi-destination';
import { ProgressEvent } from './source-destination/progress';

export type WriteStep = 'flashing' | 'verifying' | 'finished';

interface MultiDestinationState {
	active: number;
	flashing: number;
	verifying: number;
	failed: number;
	successful: number;
	type: WriteStep;
	size?: number;
	blockmappedSize?: number;
	sparse: boolean;
}

export interface MultiDestinationProgress extends MultiDestinationState {
	bytes: number;
	position: number;
	speed: number;
	totalSpeed: number;
	percentage?: number;
	eta?: number;
}

export type OnFailFunction = (destination: SourceDestination, error: Error) => void;

export type OnProgressFunction = (progress: MultiDestinationProgress) => void;

export interface PipeSourceToDestinationsResult {
	failures: Map<SourceDestination, Error>;
	bytesWritten: number;
}

// This function is the most common use case of the SDK.
// Added it here to avoid duplicating it in other projects.
export async function pipeSourceToDestinations(
	source: SourceDestination,
	destinations: SourceDestination[],
	onFail: OnFailFunction,
	onProgress: OnProgressFunction,
	verify = false,
): Promise<PipeSourceToDestinationsResult> {
	const destination = new MultiDestination(destinations);
	const failures: Map<SourceDestination, Error> = new Map();
	let bytesWritten = 0;

	destination.on('fail', _onFail);
	await Promise.all([ source.open(), destination.open() ]);

	const [ sourceMetadata, sparseSource, sparseDestination ] = await Promise.all(
		[ source.getMetadata(), source.canCreateSparseReadStream(), destination.canCreateSparseWriteStream() ],
	);
	const sparse = sparseSource && sparseDestination;

	const state: MultiDestinationState = {
		active: destination.destinations.size,
		flashing: destination.destinations.size,
		verifying: 0,
		failed: 0,
		successful: 0,
		type: 'flashing',
		size: sourceMetadata.size,
		blockmappedSize: sourceMetadata.blockmappedSize,
		sparse,
	};

	function updateState(step?: WriteStep) {
		if (step !== undefined) {
			state.type = step;
		}
		state.failed = failures.size;
		state.active = destination.destinations.size - state.failed;
		if (state.type === 'flashing') {
			state.flashing = state.active;
			state.verifying = 0;
		} else if (state.type === 'verifying') {
			state.flashing = 0;
			state.verifying = state.active;
		} else if (state.type === 'finished') {
			state.successful = state.active;
		}
	}

	function _onFail(error: MultiDestinationError) {
		failures.set(error.destination, error.error);
		updateState();
		onFail(error.destination, error.error);
	}

	function _onProgress(progress: ProgressEvent) {
		const totalSpeed = progress.speed * state.active;
		let size: number | undefined;
		let percentage: number | undefined;
		let eta: number | undefined;
		if (sparse) {
			size = state.blockmappedSize;
			bytesWritten = progress.bytes;
		} else {
			size = state.size;
			bytesWritten = progress.position;
		}
		if ((size !== undefined) && (bytesWritten !== undefined)) {
			percentage = bytesWritten / size * 100;
			eta = (size - bytesWritten) / progress.speed;
		}
		const result: MultiDestinationProgress = Object.assign(
			{},
			progress,
			state,
			{ size: sourceMetadata.size, blockmappedSize: sourceMetadata.blockmappedSize },
			{ totalSpeed, percentage, eta },
		);
		onProgress(result);
	}

	if (sparse) {
		await pipeSparseSourceToDestination(source, sourceMetadata, destination, verify, updateState, _onFail, _onProgress);
	} else {
		await pipeRegularSourceToDestination(source, sourceMetadata, destination, verify, updateState, _onFail, _onProgress);
	}
	updateState('finished');
	await Promise.all([ source.close(), destination.close() ]);
	return { failures, bytesWritten };
}

async function pipeRegularSourceToDestination(
	source: SourceDestination,
	sourceMetadata: Metadata,
	destination: MultiDestination,
	verify: boolean,
	updateState: (state?: WriteStep) => void,
	onFail: (error: MultiDestinationError) => void,
	onProgress: (progress: ProgressEvent) => void,
): Promise<void> {
	let lastPosition = 0;
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(), destination.createWriteStream() ]);
	const checksum = await new Promise((resolve: (checksum: string | undefined) => void, reject: (error: Error) => void) => {
		let checksum: string;
		let done = false;
		// Not sure why typescript can't find ProgressHashStream here
		// @ts-ignore
		let hasher: ProgressHashStream;
		function maybeDone(maybeChecksum?: string) {
			if (maybeChecksum !== undefined) {
				checksum = maybeChecksum;
			} else {
				done = true;
			}
			if (done && (!verify || (destination.activeDestinations.size === 0) || (checksum !== undefined))) {
				if (hasher !== undefined) {
					sourceStream.unpipe(hasher);
					hasher.end()
				}
				resolve(checksum);
			}
		}
		sourceStream.once('error', reject);
		destinationStream.on('fail', onFail);  // This is emitted by MultiDestination when one of its destinations fails
		destinationStream.once('error', reject);
		if (verify) {
			hasher = createHasher();
			hasher.once('checksum', maybeDone);
			sourceStream.pipe(hasher);
		}
		destinationStream.once('done', maybeDone);
		destinationStream.on('progress', (progress: ProgressEvent) => {
			lastPosition = progress.position;
			onProgress(progress);
		});
		sourceStream.pipe(destinationStream);
	});
	if (sourceMetadata.size === undefined) {
		sourceMetadata.size = lastPosition;
	}
	if (verify && checksum) {
		updateState('verifying');
		const verifier = destination.createVerifier(checksum, lastPosition);
		await runVerifier(verifier, onFail, onProgress);
	}
}

async function pipeSparseSourceToDestination(
	source: SourceDestination,
	sourceMetadata: Metadata,
	destination: SourceDestination,
	verify: boolean,
	updateState: (state?: WriteStep) => void,
	onFail: (error: MultiDestinationError) => void,
	onProgress: (progress: ProgressEvent) => void,
): Promise<void> {
	// TODO: if verify is true, we must ensure that source and destination streams hash algorithms are the same
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createSparseReadStream(true), destination.createSparseWriteStream() ]);
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.once('error', reject);
		destinationStream.once('error', reject);
		destinationStream.once('done', resolve);
		destinationStream.on('fail', onFail);  // This is emitted by MultiDestination when one of its destinations fails
		destinationStream.on('progress', onProgress);
		sourceStream.pipe(destinationStream);
	});
	if (verify) {
		updateState('verifying');
		const verifier = destination.createVerifier(sourceStream.blockMap);
		await runVerifier(verifier, onFail, onProgress);
	}
}

async function runVerifier(
	verifier: Verifier,
	onFail: (error: MultiDestinationError) => void,
	onProgress: (progress: ProgressEvent) => void,
) {
	await new Promise((resolve, reject) => {
		verifier.once('error', reject);
		verifier.once('finish', resolve);
		verifier.on('fail', onFail);
		verifier.on('progress', onProgress);
		verifier.run();
	});
}
