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

import { scanner, sourceDestination } from '../lib';
import { configure as legacyConfigure } from '../lib/source-destination/configured-source/configure';
import { ConfigureFunction } from '../lib/source-destination/configured-source/configured-source';

import {
	pipeSourceToDestinationsWithProgressBar,
	readJsonFile,
	wrapper,
} from './utils';

const main = async ({
	sourceImage,
	devices,
	verify,
	trim,
	decompressFirst,
	config,
	numBuffers,
}: {
	sourceImage: string;
	devices: string[];
	verify: boolean;
	trim: boolean;
	decompressFirst: boolean;
	config: string;
	numBuffers: number;
}) => {
	const adapters = [
		new scanner.adapters.BlockDeviceAdapter({
			includeSystemDrives: () => false,
			unmountOnSuccess: false,
			write: true,
			direct: true,
		}),
	];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('error', console.error);
	deviceScanner.start();
	// Wait for the deviceScanner to be ready
	await new Promise((resolve) => {
		deviceScanner.on('ready', resolve);
	});
	const source: sourceDestination.SourceDestination = new sourceDestination.File(
		{
			path: sourceImage,
		},
	);
	let configure: ConfigureFunction | undefined;
	if (config !== undefined) {
		configure = async (disk: Disk) => {
			await legacyConfigure(disk, { config: await readJsonFile(config) });
		};
	}
	const destinationDrives = Array.from(deviceScanner.drives.values()).filter(
		(drive) => {
			return devices.includes(drive.device!);
		},
	);
	deviceScanner.stop();
	await pipeSourceToDestinationsWithProgressBar({
		source,
		destinations: destinationDrives,
		verify,
		numBuffers,
		trim,
		decompressFirst,
		configure,
	});
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <sourceImage> [devices..]',
	'Write the sourceImage on all devices.',
	(yargs: Argv) => {
		yargs.positional('sourceImage', { describe: 'Source image' });
		yargs.positional('devices', {
			describe: 'Devices to write to',
		});
		yargs.option('verify', { default: false });
		yargs.option('trim', { default: false });
		yargs.option('decompressFirst', { default: false });
		yargs.option('numBuffers', {
			default: 16,
			describe: 'Number of 1MiB buffers used to buffer data',
		});
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
