import { FilterStream, ReadStream } from 'blockmap';
import { EventEmitter } from 'events';
import * as ProgressBar from 'progress';

import { sourceDestination, utils } from '../lib';

let lastProgress: sourceDestination.ProgressEvent;

function createProgressBar(sourceStream: EventEmitter, sourceMetadata: sourceDestination.Metadata, title: string) {
	const sparse = (sourceStream instanceof FilterStream) || (sourceStream instanceof ReadStream)
	const total = sparse ? sourceMetadata.blockmappedSize : sourceMetadata.size;
	const progressBar = new ProgressBar(
		`${title} [:bar] :current / :total bytes ; :percent`,
		{ total, width: 40 },
	);
	const updateProgressBar = (progress: sourceDestination.ProgressEvent) => {
		lastProgress = progress;
		const value = sparse ? progress.bytes : progress.position
		progressBar.tick(value - progressBar.curr);
	};
	sourceStream.on('progress', updateProgressBar);
}

async function waitVerifier(verifier: EventEmitter, metadata: sourceDestination.Metadata) {
	createProgressBar(verifier, metadata, 'verifying');
	await new Promise((resolve, reject) => {
		verifier.on('error', console.error);
		verifier.on('end', resolve);
	});
	console.log();
}

export async function wrapper(main: (args: any) => Promise<void>, args: any) {
	try {
		await main(args);
	} catch (error) {
		console.log('error', error);
	}
}

// source and destination need to be already open
export async function pipeSourceToDestination(
	source: sourceDestination.SourceDestination,
	destination: sourceDestination.SourceDestination,
	verify = false,
): Promise<void> {
	// TODO: open and close in this function
	const [ sparseSource, sparseDestination ] = await Promise.all([ source.canCreateSparseReadStream(), destination.canCreateSparseWriteStream() ]);
	const sparse = sparseSource && sparseDestination;
	if (sparse) {
		await pipeSparseSourceToDestination(source, destination, verify);
	} else {
		await pipeRegularSourceToDestination(source, destination, verify);
	}
}

export async function pipeRegularSourceToDestination(
	source: sourceDestination.SourceDestination,
	destination: sourceDestination.SourceDestination,
	verify: boolean,
): Promise<void> {
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(verify), destination.createWriteStream() ]);
	createProgressBar(sourceStream, await source.getMetadata(), 'flashing');
	const checksum = await new Promise((resolve: (checksum: string | undefined) => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		destinationStream.on('error', console.error);  // don't reject as it may be a MultiDestination
		if (verify) {
			sourceStream.on('checksum', resolve);
		} else {
			sourceStream.on('end', resolve);
		}
		sourceStream.pipe(destinationStream);
	});
	console.log();
	if (verify) {
		const verifier = await destination.createVerifier(checksum);
		await waitVerifier(verifier, await source.getMetadata());
	}
}
export async function pipeSparseSourceToDestination(
	source: sourceDestination.SourceDestination,
	destination: sourceDestination.SourceDestination,
	verify: boolean,
): Promise<void> {
	// TODO: if verify is true, we must ensure that source and destination streams hash algorithms are the same
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createSparseReadStream(true), destination.createSparseWriteStream() ]);
	createProgressBar(sourceStream, await source.getMetadata(), 'flashing');
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		destinationStream.on('error', console.error);  // don't reject as it may be a MultiDestination
		sourceStream.on('end', resolve);
		sourceStream.pipe(destinationStream);
	});
	console.log();
	if (verify) {
		const verifier = await destination.createSparseVerifier(sourceStream.blockMap);
		await waitVerifier(verifier, await source.getMetadata());
	}
}
