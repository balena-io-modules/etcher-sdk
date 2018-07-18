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

import { Argv } from 'yargs';

import { scanner, sourceDestination } from '../lib';

import { pipeSourceToDestinationsWithProgressBar, readJsonFile, wrapper } from './utils';

const main = async ({ sourceImage, devicePathPrefix, verify, trim, config }: any) => {
	const adapters = [ new scanner.adapters.BlockDeviceAdapter(() => false), new scanner.adapters.UsbbootDeviceAdapter() ];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('error', console.error);
	deviceScanner.start();
	// Wait for the deviceScanner to be ready
	await new Promise((resolve, reject) => {
		deviceScanner.on('ready', resolve);
	});
	let source: sourceDestination.SourceDestination = new sourceDestination.File(sourceImage, sourceDestination.File.OpenFlags.Read);
	source = await source.getInnerSource();  // getInnerSource will open the sources for you, no need to call open().
	if (trim || (config !== undefined)) {
		source = new sourceDestination.ConfiguredSource(
			source,
			trim,
			true,
			(config !== undefined) ? 'legacy' : undefined,
			(config !== undefined) ? { config: await readJsonFile(config) } : undefined,
		);
	}
	const destinationDrives = Array.from(deviceScanner.drives.values()).filter((drive) => {
		return drive.devicePath && drive.devicePath.startsWith(devicePathPrefix);
	});
	try {
		await pipeSourceToDestinationsWithProgressBar(source, destinationDrives, verify);
	} finally {
		deviceScanner.stop();
	}
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <sourceImage> <devicePathPrefix>',
	'Write the sourceImage on all drives which link name in /dev/disk/by-path/ starts with devicePathPrefix.',
	(yargs: Argv) => {
		yargs.positional('sourceImage', { describe: 'Source image' });
		yargs.positional('devicePathPrefix', { describe: 'Devices name prefix in /dev/disk/by-path/' });
		yargs.option('verify', { default: false });
		yargs.option('trim', { default: false });
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
