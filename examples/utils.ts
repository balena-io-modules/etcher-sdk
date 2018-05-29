import * as ProgressBar from 'progress';

import { sourceDestination, utils, verification } from '../lib';

function createProgressBar(sourceStream: NodeJS.ReadableStream, sourceMetadata: sourceDestination.Metadata) {
	const progressBar = new ProgressBar(
		'[:bar] :current / :total bytes ; :percent',
		{ total: sourceMetadata.size, width: 40 },
	);
	const updateProgressBar = (progress: sourceDestination.ProgressEvent) => {
		progressBar.tick(progress.position - progressBar.curr, { });
	};
	sourceStream.on('progress', updateProgressBar);
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
	calculateSourceHash = false,
): Promise<string | undefined> {
	const [ sparseSource, sparseDestination ] = await Promise.all([ source.canCreateSparseReadStream(), destination.canCreateSparseWriteStream() ]);
	let sourceStream: NodeJS.ReadableStream;
	let destinationStream: NodeJS.WritableStream;
	const sparse = sparseSource && sparseDestination;
	if (sparse) {
		[ sourceStream, destinationStream ] = await Promise.all([ source.createSparseReadStream(), destination.createSparseWriteStream() ]);
	} else {
		[ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(), destination.createWriteStream() ]);
	}
	createProgressBar(sourceStream, await source.getMetadata());
	let hash: string | undefined;
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		destinationStream.on('error', reject);
		if (calculateSourceHash && !sparse) {
			const hasher = verification.createHasher();
			hasher.on('error', reject);
			sourceStream.pipe(hasher);
			hasher.on('finish', async () => {
				hash = (await utils.streamToBuffer(hasher)).toString('hex');
				resolve();
			});
		} else {
			sourceStream.on('end', resolve);
		}
		sourceStream.pipe(destinationStream);
	});
	return hash;
}
