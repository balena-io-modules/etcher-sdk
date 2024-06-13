/*
 * Copyright 2019 balena.io
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

/**
 * Unlocking with secureboot
 *
 * If you need to expose the internal storage of a cm4 with secureboot, you need to provide a signed boot-image to set the device in MSD mode.
 * Pass the bootImageDir flag with the path to the folder containing the signed boot-image.
 */

import ProgressBar = require('progress');

import { scanner, sourceDestination } from '../lib/';

import { pipeSourceToDestinationsWithProgressBar } from './utils';

// Parse command line arguments
const args = process.argv.slice(2); // removes 'node' and the script name from the args
const flags: any = {};

args.forEach((arg: string, index: number) => {
	// Check if the argument is a flag in the format --flag=value
	if (arg.startsWith('--')) {
		const key: string = arg.substring(2);
		const value: string = args[index + 1];
		flags[key] = value;
	}
});

if (!flags.source) {
	console.log("No source has been provided, won't try to flash anything");
}

if (flags.bootImageDir !== '') {
	console.log(`Using external directory ${flags['bootImageDir']}`);
}

if (flags.help) {
	console.log(
		'Usage: ts-node usbboot.js --bootImageDir <bootImageDir> --source <image>',
	);
	console.log(
		'Beware, `source` image will be flashed to all USBboot devices, so make sure you know what you are doing',
	);
	console.log(
		'To expose the internal mass storage device on a locked device, set the bootImageDir to the path of a directory containing a signed boot.img and config.txt.',
	);
	process.exit(0);
}

async function main() {
	const bootImageDir = flags.bootImageDir;
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.BlockDeviceAdapter({
			includeSystemDrives: () => false,
		}),
		new scanner.adapters.UsbbootDeviceAdapter(bootImageDir),
	];
	const deviceScanner = new scanner.Scanner(adapters);
	console.log('Waiting for one compute module');
	// Wait for one compute module to be plugged
	const computeModule: sourceDestination.UsbbootDrive = await new Promise(
		(resolve, reject) => {
			function onAttach(drive: scanner.adapters.AdapterSourceDestination) {
				if (drive instanceof sourceDestination.UsbbootDrive) {
					deviceScanner.removeListener('attach', onAttach);
					resolve(drive);
				}
			}
			deviceScanner.on('attach', onAttach);
			deviceScanner.on('error', reject);
			void deviceScanner.start();
		},
	);
	console.log('Compute module attached');
	const progressBar = new ProgressBar('converting to block device [:bar]', {
		total: 100,
		width: 40,
	});
	function onProgress(progress: number) {
		const delta = Math.floor(progress) - progressBar.curr;
		progressBar.tick(delta, {});
	}
	computeModule.on('progress', onProgress);
	// Wait until it is converted to a block device
	await new Promise<void>((resolve, reject) => {
		function onDetach(drive: scanner.adapters.AdapterSourceDestination) {
			if (drive === computeModule) {
				deviceScanner.removeListener('detach', onDetach);
				resolve();
			}
		}
		deviceScanner.on('detach', onDetach);
		deviceScanner.on('error', reject);
	});
	progressBar.terminate();
	computeModule.removeListener('progress', onProgress);
	console.log('Waiting for compute module to reattach as a block device');
	const dest = await new Promise(
		(resolve: (drive: sourceDestination.BlockDevice) => void, reject) => {
			function onAttach(drive: scanner.adapters.AdapterSourceDestination) {
				if (
					drive instanceof sourceDestination.BlockDevice &&
					drive.description === 'Compute Module'
				) {
					drive.oWrite = true;
					drive.oDirect = true;
					resolve(drive);
					deviceScanner.removeListener('attach', onAttach);
				}
			}
			deviceScanner.on('attach', onAttach);
			deviceScanner.on('error', reject);
		},
	);
	deviceScanner.stop();

	if (flags.source) {
		console.log(JSON.stringify(dest));
		console.log(`Writing image ${flags.source} to ${dest.path}`);
		const source: sourceDestination.SourceDestination =
			new sourceDestination.File({
				path: flags.source,
			});
		void pipeSourceToDestinationsWithProgressBar({
			source,
			destinations: [dest],
			verify: true,
			trim: true,
			decompressFirst: false,
		});
	}
}

void main();
