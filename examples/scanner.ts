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
import { platform } from 'os';

import { scanner } from '../lib/';

const main = () => {
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.BlockDeviceAdapter(() => true),
		new scanner.adapters.UsbbootDeviceAdapter(),
	];
	if (platform() === 'win32') {
		if (scanner.adapters.DriverlessDeviceAdapter !== undefined) {
			adapters.push(new scanner.adapters.DriverlessDeviceAdapter());
		}
	}
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('attach', async (drive: scanner.adapters.AdapterSourceDestination) => {
		console.log('attach', drive);
		if (drive.emitsProgress) {
			drive.on('progress', (progress: number) => {
				console.log(drive, progress, '%');
			});
		}
	});
	deviceScanner.on('detach', (drive: scanner.adapters.AdapterSourceDestination) => {
		console.log('detach', drive);
	});
	deviceScanner.on('error', (error: Error) => {
		console.log('error', error);
	});
	deviceScanner.start();
	deviceScanner.on('ready', () => {
		const drive = deviceScanner.getBy('devicePath', 'pci-0000:00:14.0-usb-0:2:1.0-scsi-0:0:0:0');
		console.log('ready', drive);
	});
};

main();
