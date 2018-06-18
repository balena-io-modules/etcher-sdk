import { FilterStream, ReadStream } from 'blockmap';
import { EventEmitter } from 'events';
import * as ProgressBar from 'progress';

import { fs, sourceDestination, utils } from '../lib';

function createDestinationProgressBar(destinationStream: EventEmitter, sourceMetadata: sourceDestination.Metadata, title: string) {
	const sparse = (destinationStream instanceof FilterStream) || (destinationStream instanceof ReadStream);
	const total = sparse ? sourceMetadata.blockmappedSize : sourceMetadata.size;
	const progressBar = new ProgressBar(
		`${title} [:bar] :current / :total bytes ; :percent :speed MiB/s`,
		{ total, width: 40 },
	);
	const updateProgressBar = (progress: sourceDestination.ProgressEvent) => {
		const value = sparse ? progress.bytes : progress.position;
		const delta = value - progressBar.curr;
		if (delta !== 0) {
			progressBar.tick(delta, { speed: (progress.speed / 1024 / 1024).toFixed(2) });
		}
	};
	destinationStream.on('progress', updateProgressBar);
}

export async function readJsonFile(path: string): Promise<any> {
	return JSON.parse((await fs.readFile(path, { encoding: 'utf8', flag: 'r' })) as string);
}

async function runVerifier(verifier: sourceDestination.Verifier, metadata: sourceDestination.Metadata) {
	createDestinationProgressBar(verifier, metadata, 'verifying');
	await new Promise((resolve, reject) => {
		verifier.on('error', console.error);
		verifier.on('finish', resolve);
		verifier.run();
	});
}

export async function wrapper(main: (args: any) => Promise<void>, args: any) {
	try {
		await main(args);
	} catch (error) {
		console.log('error', error, error.message);
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
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(), destination.createWriteStream() ]);
	const sourceMetadata = await source.getMetadata();
	createDestinationProgressBar(destinationStream, sourceMetadata, 'flashing');
	const checksum = await new Promise((resolve: (checksum: string | undefined) => void, reject: (error: Error) => void) => {
		let checksum: string;
		let done = false;
		sourceStream.on('error', reject);
		destinationStream.on('fail', console.error);  // This is emitted by MultiDestination when one of its destinations fails
		destinationStream.on('error', reject);
		if (verify) {
			const hasher = sourceDestination.createHasher();
			hasher.on('checksum', (cs: string) => {
				checksum = cs;
				if (done) {
					resolve(cs);
				}
			});
			sourceStream.pipe(hasher);
		}
		destinationStream.on('done', () => {
			done = true;
			if (!verify || (checksum != undefined)) {
				resolve(checksum);
			}
		});
		sourceStream.pipe(destinationStream);
	});
	if (verify) {
		const verifier = destination.createVerifier(checksum, sourceMetadata.size);
		await runVerifier(verifier, await source.getMetadata());
	}
}

export async function pipeSparseSourceToDestination(
	source: sourceDestination.SourceDestination,
	destination: sourceDestination.SourceDestination,
	verify: boolean,
): Promise<void> {
	// TODO: if verify is true, we must ensure that source and destination streams hash algorithms are the same
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createSparseReadStream(true), destination.createSparseWriteStream() ]);
	createDestinationProgressBar(destinationStream, await source.getMetadata(), 'flashing');
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		destinationStream.on('fail', console.error);  // This is emitted by MultiDestination when one of its destinations fails
		destinationStream.on('error', reject);
		destinationStream.on('done', resolve);
		sourceStream.pipe(destinationStream);
	});
	console.log();
	if (verify) {
		const verifier = destination.createVerifier(sourceStream.blockMap);
		await runVerifier(verifier, await source.getMetadata());
	}
}
