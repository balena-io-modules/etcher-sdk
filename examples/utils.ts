/*
 * Copyright 2018 resin.io
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

import { FilterStream, ReadStream } from 'blockmap';
import { delay } from 'bluebird';
import { EventEmitter } from 'events';
import ProgressBar = require('progress');
import { Spinner } from 'cli-spinner';

import { fs, multiWrite, sourceDestination, utils } from '../lib';

const SPINNER_DELAY = 60;

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
		spinner.setSpinnerDelay(SPINNER_DELAY);
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
): Promise<multiWrite.PipeSourceToDestinationsResult> {
	function onFail(destination: sourceDestination.SourceDestination, error: Error) {
		console.error(`Error "${error}" on ${destination}`);
	}
	let step: multiWrite.WriteStep;
	let progressBar: any | ProgressBar | Spinner = undefined;
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
	const result = await multiWrite.pipeSourceToDestinations(
		source,
		destinations,
		onFail,
		onProgress,
		verify,
	);
	// Sleep here to be sure the last spinner title was shown.
	await delay(SPINNER_DELAY);
	if (progressBar !== undefined) {
		if (progressBar instanceof Spinner) {
			progressBar.stop();
		} else if (progressBar instanceof ProgressBar) {
			progressBar.terminate();
		}
	}
	console.log();
	return result;
}
