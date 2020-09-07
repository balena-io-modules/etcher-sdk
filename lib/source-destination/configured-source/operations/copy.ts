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

import { Disk } from 'file-disk';
import * as Fs from 'fs';
import { interact } from 'balena-image-fs';

async function copyFile(
	sourceFs: typeof Fs,
	sourcePath: string,
	destinationFs: typeof Fs,
	destinationPath: string,
): Promise<void> {
	const readStream = sourceFs.createReadStream(`/${sourcePath}`);
	const writeStream = destinationFs.createWriteStream(`/${destinationPath}`);
	await new Promise((resolve, reject) => {
		readStream
			.on('error', reject)
			.pipe(writeStream)
			.on('error', reject)
			.on('close', resolve);
	});
}

export async function copy(
	diskFrom: Disk,
	partitionFrom: number | undefined,
	pathFrom: string,
	diskTo: Disk,
	partitionTo: number | undefined,
	pathTo: string,
): Promise<void> {
	await interact(diskFrom, partitionFrom, async (fsFrom) => {
		if (diskFrom === diskTo && partitionFrom === partitionTo) {
			await copyFile(fsFrom, pathFrom, fsFrom, pathTo);
		} else {
			await interact(diskTo, partitionTo, async (fsTo) => {
				await copyFile(fsFrom, pathFrom, fsTo, pathTo);
			});
		}
	});
}
