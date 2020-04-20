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

import { delay } from 'bluebird';
import { Spinner } from 'cli-spinner';
import { promises as fs } from 'fs';
import ProgressBar = require('progress');

import { multiWrite, sourceDestination } from '../lib';

const SPINNER_DELAY = 60;

export async function readJsonFile(path: string): Promise<any> {
	return JSON.parse(
		await fs.readFile(path, {
			encoding: 'utf8',
			flag: 'r',
		}),
	);
}

export async function wrapper(main: (args: any) => Promise<void>, args: any) {
	try {
		await main(args);
	} catch (error) {
		console.log('error', error, error.message);
	}
}

type UpdateProgressBarFunction = (
	progress: multiWrite.MultiDestinationProgress,
) => void;

function bytesToMebibytes(bytes: number): string {
	return (bytes / 1024 / 1024).toFixed(2);
}

function progressBarLabel(
	progress: multiWrite.MultiDestinationProgress,
): string {
	const sourceProgress =
		(!progress.sparse && progress.size === undefined) ||
		(progress.size !== undefined && progress.bytes > progress.size);
	let size: number | undefined;
	let bytes: number | undefined;
	if (sourceProgress) {
		size = progress.compressedSize;
		bytes = progress.rootStreamPosition;
	} else if (progress.sparse) {
		size = progress.blockmappedSize;
		bytes = progress.bytes;
	} else {
		size = progress.size;
		bytes = progress.bytes;
	}
	return [
		`${Math.floor(progress.percentage || 0)}%`,
		`${bytes} / ${size} ${sourceProgress ? 'compressed ' : ''}bytes`,
		`position in output: ${progress.position}`,
		`current: ${bytesToMebibytes(progress.speed)} MiB/s`,
		`average: ${bytesToMebibytes(progress.averageSpeed)} MiB/s`,
		`${Math.round(progress.eta || 0)} seconds left`,
	].join(' ; ');
}

function createProgressBar(
	step: string,
	hasTotal: boolean,
): [ProgressBar | Spinner, UpdateProgressBarFunction] {
	if (hasTotal) {
		const fmt = `${step} [:bar] :label`;
		const progressBar = new ProgressBar(fmt, { total: 100, width: 40 });
		function update(progress: multiWrite.MultiDestinationProgress) {
			const percentage =
				progress.percentage === undefined
					? progressBar.curr
					: progress.percentage;
			const delta = Math.floor(percentage) - progressBar.curr;
			progressBar.tick(delta, { label: progressBarLabel(progress) });
		}
		return [progressBar, update];
	} else {
		const title = `${step}: size not available`;
		const spinner = new Spinner(title);
		spinner.setSpinnerDelay(SPINNER_DELAY);
		spinner.start();
		function update(progress: multiWrite.MultiDestinationProgress) {
			spinner.setSpinnerTitle(
				`${title}, ${progress.bytes} bytes, ${bytesToMebibytes(
					progress.speed,
				)} MiB/s`,
			);
		}
		return [spinner, update];
	}
}

export async function pipeSourceToDestinationsWithProgressBar({
	source,
	destinations,
	verify = false,
	numBuffers = 16,
}: {
	source: sourceDestination.SourceDestination,
	destinations: sourceDestination.SourceDestination[],
	verify?: boolean,
	numBuffers?: number,
}): Promise<multiWrite.PipeSourceToDestinationsResult> {
	function onFail(
		destination: sourceDestination.SourceDestination,
		error: Error,
	) {
		let name: string;
		if (destination instanceof sourceDestination.BlockDevice) {
			name = destination.device;
		} else if (destination instanceof sourceDestination.File) {
			name = destination.path;
		} else {
			name = destination.toString();
		}
		console.error(`Error "${error}" on ${name}`);
	}
	let step: multiWrite.WriteStep;
	let progressBar: any | ProgressBar | Spinner;
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
			const hasTotal =
				progress.blockmappedSize !== undefined ||
				progress.size !== undefined ||
				progress.compressedSize !== undefined;
			[progressBar, update] = createProgressBar(progress.type, hasTotal);
		}
		update(progress);
	}
	const result = await multiWrite.pipeSourceToDestinations({
		source,
		destinations,
		onFail,
		onProgress,
		verify,
		numBuffers,
	});
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
