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

import { delay } from 'bluebird';
import * as _debug from 'debug';
import { Drive as $Drive, list } from 'drivelist';

import { BlockDevice } from '../../source-destination/block-device';
import { difference } from '../../utils';
import { Adapter } from './adapter';

const debug = _debug('etcher-sdk:block-device-adapter');

const SCAN_INTERVAL = 1000;
const USBBOOT_RPI_COMPUTE_MODULE_NAMES = [
	'0001',
	'RPi-MSD- 0001',
	'File-Stor Gadget',
	'Linux File-Stor_Gadget',
	'Linux File-Stor Gadget',
	'Linux File-Stor Gadget USB Device',
	'Linux File-Stor Gadget Media',
];

function looksLikeComputeModule(description: string): boolean {
	for (const name of USBBOOT_RPI_COMPUTE_MODULE_NAMES) {
		if (description.startsWith(name)) {
			return true;
		}
	}
	return false;
}

const driveKey = (drive: $Drive) => {
	return drive.device + '|' + drive.size + '|' + drive.description;
};

export interface DrivelistDrive extends $Drive {
	displayName: string;
	icon?: string;
}

export class BlockDeviceAdapter extends Adapter {
	// Emits 'attach', 'detach', 'ready' and 'error' events
	public includeSystemDrives: () => boolean;
	private unmountOnSuccess: boolean;
	private oWrite: boolean;
	private oDirect: boolean;
	private drives: Map<string, BlockDevice> = new Map();
	private running = false;
	private ready = false;

	constructor({
		includeSystemDrives = () => false,
		unmountOnSuccess = false,
		write = false,
		direct = true,
	}: {
		includeSystemDrives?: () => boolean;
		unmountOnSuccess?: boolean;
		write?: boolean;
		direct?: boolean;
	}) {
		super();
		this.includeSystemDrives = includeSystemDrives;
		this.unmountOnSuccess = unmountOnSuccess;
		this.oWrite = write;
		this.oDirect = direct;
	}

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
		while (this.running) {
			await this.scan();
			if (!this.ready) {
				this.ready = true;
				this.emit('ready');
			}
			await delay(SCAN_INTERVAL);
		}
	}

	private async scan(): Promise<void> {
		const drives = await this.listDrives();
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
				const blockDevice = new BlockDevice({
					drive: drive!,
					unmountOnSuccess: this.unmountOnSuccess,
					write: this.oWrite,
					direct: this.oDirect,
				});
				this.emit('attach', blockDevice);
				this.drives.set(added, blockDevice);
			}
		}
	}

	private async listDrives(): Promise<Map<string, DrivelistDrive>> {
		let drives: $Drive[];
		const result = new Map<string, DrivelistDrive>();
		try {
			drives = await list();
		} catch (error) {
			debug(error);
			this.emit('error', error);
			return result;
		}
		for (const drive of drives) {
			if (
				!(
					// Always ignore RAID attached devices, as they are in danger-country;
					// Even flashing RAIDs intentionally can have unintended effects
					(
						drive.busType !== 'RAID' &&
						// Exclude errored drives
						!drive.error &&
						// Exclude system drives if needed
						(this.includeSystemDrives() || !drive.isSystem) &&
						// Exclude drives with no size
						typeof drive.size === 'number' &&
						// Exclude virtual drives (DMG, TimeMachine, ... on macOS)
						!drive.isVirtual
					)
				)
			) {
				continue;
			}

			const displayName =
				/PhysicalDrive/i.test(drive.device) && drive.mountpoints.length
					? drive.mountpoints.map((m) => m.path).join(', ') // Windows
					: drive.device;
			const resultDrive: DrivelistDrive = { ...drive, displayName };
			if (looksLikeComputeModule(resultDrive.description)) {
				resultDrive.description = 'Compute Module';
				// TODO: Should this be in the sdk?
				resultDrive.icon = 'raspberrypi';
				resultDrive.isSystem = false;
			}
			result.set(driveKey(drive), resultDrive);
		}
		return result;
	}
}
