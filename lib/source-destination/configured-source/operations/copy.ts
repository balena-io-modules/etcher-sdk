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
import * as _ from 'lodash';
import { interact } from 'balena-image-fs';

const copy = async (
	sourceFs: typeof Fs,
	sourcePath: string,
	destinationFs: typeof Fs,
	destinationPath: string,
): Promise<void> => {
	const readStream = sourceFs.createReadStream(`/${sourcePath}`);
	const writeStream = destinationFs.createWriteStream(`/${destinationPath}`);
	await new Promise((resolve, reject) => {
		readStream
			.on('error', reject)
			.pipe(writeStream)
			.on('error', reject)
			.on('close', resolve);
	});
};

export const execute = async (operation: any, disk: Disk) => {
	const source = _.get(operation, 'from.partition');
	const destination = _.get(operation, 'to.partition');
	if (_.isUndefined(source) || _.isUndefined(destination)) {
		throw new Error('copy operation needs from and to properties');
	}
	await interact(disk, source, async (sourceFs) => {
		if (source === destination) {
			await copy(sourceFs, operation.from.path, sourceFs, operation.to.path);
		} else {
			await interact(disk, destination, async (destinationFs) => {
				await copy(
					sourceFs,
					operation.from.path,
					destinationFs,
					operation.to.path,
				);
			});
		}
	});
};
