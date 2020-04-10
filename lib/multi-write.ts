/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BlockReadStream } from './block-read-stream';
import { BlockTransformStream } from './block-transform-stream';
import { CHUNK_SIZE } from './constants';
import { getRootStream } from './source-destination/compressed-source';
import { Metadata } from './source-destination/metadata';
import {
	MultiDestination,
	MultiDestinationError,
} from './source-destination/multi-destination';
import { ProgressEvent } from './source-destination/progress';
import {
	CountingHashStream,
	createHasher,
	SourceDestination,
	Verifier,
} from './source-destination/source-destination';

export type WriteStep = 'flashing' | 'verifying' | 'finished';

interface MultiDestinationState {
	active: number;
	flashing: number;
	verifying: number;
	failed: number;
	successful: number;
	type: WriteStep;
	size?: number;
	compressedSize?: number;
	blockmappedSize?: number;
	sparse?: boolean;
	rootStreamPosition?: number;
	rootStreamSpeed?: number;
	rootStreamAverageSpeed?: number;
}

export interface MultiDestinationProgress extends MultiDestinationState {
	bytes: number;
	position: number;
	speed: number;
	averageSpeed: number;
	totalSpeed: number;
	percentage?: number;
	eta?: number;
}

export type OnFailFunction = (
	destination: SourceDestination,
	error: Error,
) => void;

export type OnProgressFunction = (progress: MultiDestinationProgress) => void;

export interface PipeSourceToDestinationsResult {
	failures: Map<SourceDestination, Error>;
	bytesWritten: number;
}

function getEta(
	current: number,
	total: number,
	speed: number,
): number | undefined {
	return speed === 0 ? undefined : (total - current) / speed;
}

// This function is the most common use case of the SDK.
// Added it here to avoid duplicating it in other projects.
export async function pipeSourceToDestinations(
	source: SourceDestination,
	destinations: SourceDestination[],
	onFail: OnFailFunction,
	onProgress: OnProgressFunction,
	verify = false,
	numBuffers = 16,
): Promise<PipeSourceToDestinationsResult> {
	if (numBuffers < 2) {
		numBuffers = 2;
	}
	const destination = new MultiDestination(destinations);
	const failures: Map<SourceDestination, Error> = new Map();
	let bytesWritten = 0;

	const state: MultiDestinationState = {
		active: destination.destinations.size,
		flashing: destination.destinations.size,
		verifying: 0,
		failed: 0,
		successful: 0,
		type: 'flashing',
	};

	destination.on('fail', _onFail);
	await Promise.all([source.open(), destination.open()]);

	const [sourceMetadata, sparseSource, sparseDestination] = await Promise.all([
		source.getMetadata(),
		source.canCreateSparseReadStream(),
		destination.canCreateSparseWriteStream(),
	]);
	const sparse = sparseSource && sparseDestination;

	state.sparse = sparse;
	state.size = sourceMetadata.size;
	state.compressedSize = sourceMetadata.compressedSize;
	state.blockmappedSize = sourceMetadata.blockmappedSize;

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

	function _onRootStreamProgress(progress: ProgressEvent) {
		state.rootStreamPosition = progress.position;
		state.rootStreamSpeed = progress.speed;
		state.rootStreamAverageSpeed = progress.averageSpeed;
	}

	function _onProgress(progress: ProgressEvent) {
		if (
			sourceMetadata.isSizeEstimated === false &&
			sourceMetadata.size !== undefined
		) {
			state.size = sourceMetadata.size;
		}
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
		if (
			size !== undefined &&
			bytesWritten !== undefined &&
			bytesWritten <= size
		) {
			percentage = (bytesWritten / size) * 100;
			eta = getEta(bytesWritten, size, progress.speed);
		} else if (
			state.rootStreamSpeed !== undefined &&
			state.rootStreamPosition !== undefined &&
			state.compressedSize !== undefined
		) {
			percentage = (state.rootStreamPosition / state.compressedSize) * 100;
			eta = getEta(
				state.rootStreamPosition,
				state.compressedSize,
				state.rootStreamSpeed,
			);
		}
		const result: MultiDestinationProgress = Object.assign(
			{},
			progress,
			state,
			{ totalSpeed, percentage, eta },
		);
		onProgress(result);
	}

	if (sparse) {
		await pipeSparseSourceToDestination(
			source,
			destination,
			verify,
			numBuffers,
			updateState,
			_onFail,
			_onProgress,
			_onRootStreamProgress,
		);
	} else {
		await pipeRegularSourceToDestination(
			source,
			sourceMetadata,
			destination,
			verify,
			numBuffers,
			updateState,
			_onFail,
			_onProgress,
			_onRootStreamProgress,
		);
	}
	updateState('finished');
	await Promise.all([source.close(), destination.close()]);
	return { failures, bytesWritten };
}

async function pipeRegularSourceToDestination(
	source: SourceDestination,
	sourceMetadata: Metadata,
	destination: MultiDestination,
	verify: boolean,
	numBuffers: number,
	updateState: (state?: WriteStep) => void,
	onFail: (error: MultiDestinationError) => void,
	onProgress: (progress: ProgressEvent) => void,
	_onRootStreamProgress: (progress: ProgressEvent) => void,
): Promise<void> {
	let lastPosition = 0;
	const emitSourceProgress =
		sourceMetadata.size === undefined || sourceMetadata.isSizeEstimated;
	const alignment = destination.getAlignment();
	const highWaterMark = alignment === undefined ? undefined : numBuffers - 1;
	const [sourceStream, destinationStream] = await Promise.all([
		source.createReadStream({
			emitProgress: emitSourceProgress,
			alignment,
			numBuffers,
		}),
		destination.createWriteStream({ highWaterMark }),
	]);
	getRootStream(sourceStream).on('progress', (progress: ProgressEvent) => {
		_onRootStreamProgress(progress);
	});
	const checksum = await new Promise(
		(
			resolve: (checksum: string | undefined) => void,
			reject: (error: Error) => void,
		) => {
			let result: string;
			let done = false;
			let hasher: CountingHashStream;
			function maybeDone(maybeChecksum?: string) {
				if (maybeChecksum !== undefined) {
					result = maybeChecksum;
				} else {
					done = true;
				}
				if (
					done &&
					(!verify ||
						destination.activeDestinations.size === 0 ||
						result !== undefined)
				) {
					if (hasher !== undefined) {
						sourceStream.unpipe(hasher);
						hasher.end();
					}
					resolve(result);
				}
			}
			sourceStream.once('error', reject);
			destinationStream.on('fail', onFail); // This is emitted by MultiDestination when one of its destinations fails
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
			if (
				alignment !== undefined &&
				!(
					sourceStream instanceof BlockReadStream ||
					sourceStream instanceof BlockTransformStream
				)
			) {
				// The destination needs data to be aligned and it isn't.
				// Pass it through a BlockTransformStream to align it.
				sourceStream
					.pipe(
						new BlockTransformStream({
							chunkSize: CHUNK_SIZE,
							alignment,
							numBuffers,
						}),
					)
					.pipe(destinationStream);
			} else {
				sourceStream.pipe(destinationStream);
			}
		},
	);
	if (
		sourceMetadata.size === undefined ||
		sourceMetadata.isSizeEstimated === true
	) {
		sourceMetadata.size = lastPosition;
		sourceMetadata.isSizeEstimated = false;
	}
	if (verify && checksum) {
		updateState('verifying');
		const verifier = destination.createVerifier(checksum, lastPosition);
		await runVerifier(verifier, onFail, onProgress);
	}
}

async function pipeSparseSourceToDestination(
	source: SourceDestination,
	destination: MultiDestination,
	verify: boolean,
	numBuffers: number,
	updateState: (state?: WriteStep) => void,
	onFail: (error: MultiDestinationError) => void,
	onProgress: (progress: ProgressEvent) => void,
	_onRootStreamProgress: (progress: ProgressEvent) => void,
): Promise<void> {
	const alignment = destination.getAlignment();
	const highWaterMark = alignment === undefined ? undefined : numBuffers - 1;
	const [sourceStream, destinationStream] = await Promise.all([
		source.createSparseReadStream({
			generateChecksums: verify,
			alignment,
			numBuffers,
		}),
		destination.createSparseWriteStream({ highWaterMark }),
	]);
	getRootStream(sourceStream).on('progress', (progress: ProgressEvent) => {
		_onRootStreamProgress(progress);
	});
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.once('error', reject);
		destinationStream.once('error', reject);
		destinationStream.once('done', resolve);
		destinationStream.on('fail', onFail); // This is emitted by MultiDestination when one of its destinations fails
		destinationStream.on('progress', onProgress);
		sourceStream.pipe(destinationStream);
	});
	if (verify) {
		updateState('verifying');
		const verifier = destination.createVerifier(sourceStream.blocks);
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
