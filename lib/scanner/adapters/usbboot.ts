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

declare function require(moduleName: string): any;

import { UsbbootDevice, UsbbootScanner as UsbbootScannerType } from 'node-raspberrypi-usbboot';

import { UsbbootDrive } from '../../source-destination/usbboot';
import { Adapter } from './adapter';

let UsbbootScanner: typeof UsbbootScannerType | undefined = undefined;
try {
	UsbbootScanner = require('node-raspberrypi-usbboot').UsbbootScanner;
} catch (error) {
	console.warn('Failed to import node-raspberrypi-usbboot:', error);
}

export class UsbbootDeviceAdapter extends Adapter {
	private drives: Map<UsbbootDevice, UsbbootDrive> = new Map();
	private scanner: UsbbootScannerType;

	constructor() {
		super();
		if (UsbbootScanner !== undefined) {
			this.scanner = new UsbbootScanner();
			this.scanner.on('attach', this.onAttach.bind(this));
			this.scanner.on('detach', this.onDetach.bind(this));
			this.scanner.on('ready', this.emit.bind(this, 'ready'));
			this.scanner.on('error', this.emit.bind(this, 'error'));
		} else {
			console.warn('node-raspberrypi-usbboot not available');
			setImmediate(this.emit.bind(this, 'ready'));
		}
	}

	start(): void {
		this.scanner.start();
	}

	stop(): void {
		this.scanner.stop();
	}

	private onAttach(device: UsbbootDevice): void {
		let drive = this.drives.get(device);
		if (drive === undefined) {
			drive = new UsbbootDrive(device);
			this.drives.set(device, drive);
		}
		this.emit('attach', drive);
	}

	private onDetach(device: UsbbootDevice): void {
		const drive = this.drives.get(device);
		this.drives.delete(device);
		this.emit('detach', drive);
	}
}
