import * as ProgressBar from 'progress';

import { streamToBuffer } from '../lib/utils';
import { createHasher} from '../lib/verification';
import { SourceDestination } from '../lib/source-destination/source-destination';

export const wrapper = async (main: (args: any) => Promise<void>, args: any) => {
	try {
		await main(args);
	} catch (error) {
		console.log('error', error);
	}
};

// source and destination need to be already open
export const pipeSourceToDestination = async (
	source: SourceDestination,
	destination: SourceDestination,
	calculateSourceHash = false
): Promise<{ bytes: number, hash?: string }> => {
	// TODO: check capabilities + sparse streams
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(), destination.createWriteStream() ]);
	let position = 0;
	const start = Date.now();
	sourceStream.on('data', (buffer: Buffer) => {
		position += buffer.length;
	});
	const intervalId = setInterval(
		() => {
			const now = Date.now();
			const duration = (now - start) / 1000;
			console.log('progress', position, position / 1024 / 1024 / duration);
		},
		1000,
	);
	let bytes = 0;
	let hash: string | undefined = undefined;
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		sourceStream.on('data', (data) => {
			bytes += data.length
		});
		destinationStream.on('error', reject);
		if (calculateSourceHash) {
			const hasher = createHasher();
			hasher.on('error', reject);
			sourceStream.pipe(hasher);
			hasher.on('finish', async () => {
				hash = (await streamToBuffer(hasher)).toString('hex');
				resolve();
			});
		} else {
			sourceStream.on('end', resolve);
		}
		sourceStream.pipe(destinationStream);
	});
	clearInterval(intervalId);
	return { bytes, hash };
}
