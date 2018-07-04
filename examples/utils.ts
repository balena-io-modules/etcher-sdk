import { FilterStream, ReadStream } from 'blockmap';
import { EventEmitter } from 'events';
import ProgressBar = require('progress');
import { Spinner } from 'cli-spinner';

import { fs, multiWrite, sourceDestination, utils } from '../lib';

export async function readJsonFile(path: string): Promise<any> {
	return JSON.parse((await fs.readFile(path, { encoding: 'utf8', flag: 'r' })) as string);
}

export async function wrapper(main: (args: any) => Promise<void>, args: any) {
	try {
		await main(args);
	} catch (error) {
		console.log('error', error, error.message);
	}
}

type UpdateProgressBarFunction = (bytes: number, speed: number, eta?: number) => void;

function bytesToMebibytes(bytes: number): string {
	return (bytes / 1024 / 1024).toFixed(2);
}

function createProgressBar(step: string, total?: number): [ ProgressBar | Spinner, UpdateProgressBarFunction ] {
	if (total !== undefined) {
		const progressBar = new ProgressBar(
			`${step} [:bar] :current / :total bytes ; :percent :speed MiB/s ; :timeLeft seconds left`,
			{ total, width: 40 },
		);
		function update(bytes: number, speed: number, eta: number) {
			const delta = bytes - progressBar.curr;
			progressBar.tick(delta, { speed: bytesToMebibytes(speed), timeLeft: eta.toFixed(0) });
		}
		return [ progressBar, update ];
	} else {
		const title = `${step}: size not available`;
		const spinner = new Spinner(title);
		spinner.start();
		function update(bytes: number, speed: number) {
			spinner.setSpinnerTitle(`${title}, ${bytes} bytes, ${bytesToMebibytes(speed)} MiB/s`);
		}
		return [ spinner, update ];
	}
}

export async function pipeSourceToDestinationsWithProgressBar(
	source: sourceDestination.SourceDestination,
	destinations: sourceDestination.SourceDestination[],
	verify = false,
): Promise<Map<sourceDestination.SourceDestination, Error>> {
	function onFail(destination: sourceDestination.SourceDestination, error: Error) {
		console.error(`Error "${error}" on ${destination}`);
	}
	let step: multiWrite.WriteStep;
	let progressBar: ProgressBar | Spinner;
	let update: UpdateProgressBarFunction;
	function onProgress(progress: multiWrite.MultiDestinationProgress) {
		if (progress.type !== step) {
			if (progressBar !== undefined) {
				console.log();
				if (progressBar instanceof Spinner) {
					progressBar.stop();
				}
			}
			step = progress.type;
			[ progressBar, update ] = createProgressBar(progress.type, progress.sparse ? progress.blockmappedSize : progress.size);
		}
		const bytes = progress.sparse ? progress.bytes : progress.position;
		update(bytes, progress.speed, progress.eta);
	}
	return await multiWrite.pipeSourceToDestinations(
		source,
		destinations,
		onFail,
		onProgress,
		verify,
	);
}
