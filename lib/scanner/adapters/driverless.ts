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

import { delay } from 'bluebird';
import { platform } from 'process';
import { DriverlessDevice as WinUsbDriverlessDevice } from 'winusb-driver-generator';

import { DriverlessDevice } from '../../source-destination/driverless';
import { Adapter } from './adapter';
import { difference } from '../../utils';

const SCAN_INTERVAL = 1000;

class DriverlessDeviceAdapter_ extends Adapter {
	// Emits 'attach', 'detach' and 'ready'
	private drives: Map<string, DriverlessDevice> = new Map();
	private running = false;
	private ready = false;
	private listDriverlessDevices: any;

	start(): void {
		this.running = true;
		this.scanLoop();
	}

	stop(): void {
		this.running = false;
		this.ready = false;
		this.drives.clear();
	}

	private async scanLoop(): Promise<void> {
		// This imort fails on anything else than win32 and this class will only be exported on win32
		this.listDriverlessDevices = (await import('winusb-driver-generator')).listDriverlessDevices;
		while (this.running) {
			this.scan();
			if (!this.ready) {
				this.ready = true;
				this.emit('ready');
			}
			await delay(SCAN_INTERVAL);
		}
	}

	private scan(): void {
		const drives = this.listDrives();
		if (this.running) {  // we may have been stopped while listing the drives.
			const oldDevices = new Set<string>(this.drives.keys());
			const newDevices = new Set<string>(drives.keys());
			for (const removed of difference(oldDevices, newDevices)) {
				this.emit('detach', this.drives.get(removed));
				this.drives.delete(removed);
			}
			for (const added of difference(newDevices, oldDevices)) {
				const drive = drives.get(added);
				const driverlessDevice = new DriverlessDevice(drive!);
				this.emit('attach', driverlessDevice);
				this.drives.set(added, driverlessDevice);
			}
		}
	}

	private listDrives(): Map<string, WinUsbDriverlessDevice> {
		const devices = this.listDriverlessDevices();
		const result = new Map<string, WinUsbDriverlessDevice>();
		for (const device of devices) {
			result.set(device.did, device);
		}
		return result;
	}
}

export const DriverlessDeviceAdapter = (platform === 'win32') ? DriverlessDeviceAdapter_ : undefined;
