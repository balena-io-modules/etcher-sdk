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
import { Argv } from 'yargs';

import { sourceDestination } from '../lib';
import { configure as legacyConfigure } from '../lib/source-destination/configured-source/configure';
import { ConfigureFunction } from '../lib/source-destination/configured-source/configured-source';

import {
	pipeSourceToDestinationsWithProgressBar,
	readJsonFile,
	wrapper,
} from './utils';

const main = async ({
	fileSource,
	fileDestination,
	trim,
	config,
	verify,
	decompressFirst,
}: {
	fileSource: string;
	fileDestination: string;
	trim: boolean;
	config: string;
	verify: boolean;
	decompressFirst: boolean;
}) => {
	const source: sourceDestination.SourceDestination = new sourceDestination.File(
		{
			path: fileSource,
		},
	);
	const destination = new sourceDestination.File({
		path: fileDestination,
		write: true,
	});
	let configure: ConfigureFunction | undefined;
	if (config !== undefined) {
		configure = async (disk: Disk) => {
			await legacyConfigure(disk, { config: await readJsonFile(config) });
		};
	}
	await pipeSourceToDestinationsWithProgressBar({
		source,
		destinations: [destination],
		verify,
		trim,
		decompressFirst,
		configure,
	});
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <fileSource> <fileDestination>',
	'Write the image contained in the fileSource file into fileDestination',
	(yargs: Argv) => {
		yargs.positional('fileSource', { describe: 'Source image file' });
		yargs.positional('fileDestination', { describe: 'Destination image file' });
		yargs.option('trim', { default: false });
		yargs.option('verify', { default: false });
		yargs.describe('config', 'json configuration file');
		yargs.option('decompressFirst', { default: false });
	},
).argv;

wrapper(main, argv);
