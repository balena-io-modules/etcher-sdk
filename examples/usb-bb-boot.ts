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
import ProgressBar = require('progress');

import { scanner, sourceDestination } from '../lib/';

async function main() {
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.UsbBBbootDeviceAdapter(),
	];
	const deviceScanner = new scanner.Scanner(adapters);
	console.log('Waiting for one BeagleBone');
	const beagleBone: sourceDestination.UsbBBbootDrive = await new Promise(
		(resolve, reject) => {
			function onAttach(drive: scanner.adapters.AdapterSourceDestination) {
				if (drive instanceof sourceDestination.UsbBBbootDrive) {
					deviceScanner.removeListener('attach', onAttach);
					resolve(drive);
				}
			}
			deviceScanner.on('attach', onAttach);
			deviceScanner.on('error', reject);
			void deviceScanner.start();
		},
	);
	console.log('BeagleBone attached');
	const progressBar = new ProgressBar('converting to block device [:bar]', {
		total: 100,
		width: 40,
	});
	function onProgress(progress: number) {
		const delta = Math.floor(progress) - progressBar.curr;
		progressBar.tick(delta, {});
	}
	beagleBone.on('progress', onProgress);
	// Wait until it is converted to a block device
	await new Promise<void>((resolve, reject) => {
		function onDetach(drive: scanner.adapters.AdapterSourceDestination) {
			if (drive === beagleBone) {
				deviceScanner.removeListener('detach', onDetach);
				resolve();
			}
		}
		deviceScanner.on('detach', onDetach);
		deviceScanner.on('error', reject);
	});
	console.log('BeagleBone detached');
	progressBar.terminate();
	beagleBone.removeListener('progress', onProgress);
	deviceScanner.stop();
}

void main();
