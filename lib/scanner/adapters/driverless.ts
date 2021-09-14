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

import { platform } from 'process';
import { DriverlessDevice as WinUsbDriverlessDevice } from 'winusb-driver-generator';

import { getRaspberrypiUsbboot } from '../../lazy';
import { DriverlessDevice } from '../../source-destination/driverless';
import { delay, difference } from '../../utils';
import { Adapter } from './adapter';

const SCAN_INTERVAL = 1000;

class DriverlessDeviceAdapter$ extends Adapter {
	// Emits 'attach', 'detach' and 'ready'
	private drives: Map<string, DriverlessDevice> = new Map();
	private running = false;
	private ready = false;
	private listDriverlessDevices: any;

	public start(): void {
		this.running = true;
		this.scanLoop();
	}

	public stop(): void {
		this.running = false;
		this.ready = false;
		this.drives.clear();
	}

	private async scanLoop(): Promise<void> {
		if (this.listDriverlessDevices === undefined) {
			// This import fails on anything else than win32 and this class will only be exported on win32
			this.listDriverlessDevices = (
				await import('winusb-driver-generator')
			).listDriverlessDevices;
		}
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
		let drives;
		try {
			// winusb-driver-generator may fail with "Requested resource busy or similar call already in progress"
			drives = this.listDrives();
		} catch (error) {
			return;
		}
		if (this.running) {
			// we may have been stopped while listing the drives.
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
		const isUsbBootCapableUSBDevice =
			getRaspberrypiUsbboot()?.isUsbBootCapableUSBDevice;
		const result = new Map<string, WinUsbDriverlessDevice>();
		if (isUsbBootCapableUSBDevice == null) {
			return result;
		}
		const devices = this.listDriverlessDevices();
		for (const device of devices) {
			if (isUsbBootCapableUSBDevice(device.vid, device.pid)) {
				result.set(device.did, device);
			}
		}
		return result;
	}
}

export const DriverlessDeviceAdapter =
	platform === 'win32' ? DriverlessDeviceAdapter$ : undefined;
