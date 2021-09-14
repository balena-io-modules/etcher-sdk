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
import { argv } from 'process';
import ProgressBar = require('progress');

import { scanner, sourceDestination } from '../lib/';

import { pipeSourceToDestinationsWithProgressBar } from './utils';

async function main() {
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.BlockDeviceAdapter({
			includeSystemDrives: () => false,
		}),
		new scanner.adapters.UsbbootDeviceAdapter(),
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
			deviceScanner.start();
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
					resolve(drive);
					deviceScanner.removeListener('attach', onAttach);
				}
			}
			deviceScanner.on('attach', onAttach);
			deviceScanner.on('error', reject);
		},
	);
	deviceScanner.stop();

	if (argv.length >= 3) {
		console.log(`Writing image ${argv[2]}`);
		const source: sourceDestination.SourceDestination =
			new sourceDestination.File({
				path: argv[2],
			});
		pipeSourceToDestinationsWithProgressBar({
			source,
			destinations: [dest],
			verify: true,
			trim: true,
			decompressFirst: false,
		});
	}
}

main();
