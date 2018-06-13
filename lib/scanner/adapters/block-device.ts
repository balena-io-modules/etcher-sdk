import { delay, promisify } from 'bluebird';
import * as _debug from 'debug';
import { Drive as DrivelistDrive, list } from 'drivelist';

import { Adapter } from './adapter';
import { BlockDevice } from '../../source-destination/block-device';

const listDrives = promisify(list);

const debug = _debug('etcher-sdk:block-device-adapter');

const SCAN_INTERVAL = 1000;
const USBBOOT_RPI_COMPUTE_MODULE_NAMES = [
	'0001',
	'RPi-MSD- 0001',
	'File-Stor Gadget',
	'Linux File-Stor Gadget USB Device',
	'Linux File-Stor Gadget Media',
];

const difference = <T>(setA: Set<T>, setB: Set<T>): Set<T> => {
	const difference = new Set(setA);
	for (const elem of setB) {
		difference.delete(elem);
	}
	return difference;
};

const driveKey = (drive: DrivelistDrive) => {
	return drive.device + '|' + drive.size + '|' + drive.description;
};

export class BlockDeviceAdapter extends Adapter {
	// Emits 'attach', 'detach', 'ready' and 'error' events
	private drives: Map<string, BlockDevice> = new Map();
	private running = false;
	private ready = false;

	constructor(public includeSystemDrives: () => boolean = () => false) {
		super();
	}

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
		if (this.running) {  // we may have been stopped while listing the drives.
			const oldDevices = new Set<string>(this.drives.keys());
			const newDevices = new Set<string>(drives.keys());
			for (const removed of difference(oldDevices, newDevices)) {
				this.emit('detach', this.drives.get(removed));
				this.drives.delete(removed);
			}
			for (const added of difference(newDevices, oldDevices)) {
				const drive = drives.get(added);
				const blockDevice = new BlockDevice(drive!);
				this.emit('attach', blockDevice);
				this.drives.set(added, blockDevice);
			}
		}
	}

	private async listDrives(): Promise<Map<string, DrivelistDrive>> {
		let drives;
		const result = new Map<string, DrivelistDrive>();
		try {
			drives = await listDrives();
		} catch (error) {
			debug(error);
			this.emit('error', error);
			return result;
		}
		drives = drives.filter((drive: DrivelistDrive) => {
			// Always ignore RAID attached devices, as they are in danger-country;
			// Even flashing RAIDs intentionally can have unintended effects
			if (drive.busType === 'RAID') {
				return false;
			}
			return !drive.error && (this.includeSystemDrives() || !drive.isSystem);
		});
		drives.forEach((drive: DrivelistDrive) => {
			// TODO: Find a better way to detect that a certain
			// block device is a compute module initialized
			// through usbboot.
			if (USBBOOT_RPI_COMPUTE_MODULE_NAMES.includes(drive.description)) {
				drive.description = 'Compute Module';
				drive.icon = 'raspberrypi';  // TODO: Should this be in the sdk?
				drive.isSystem = false;
			}
			if (/PhysicalDrive/i.test(drive.device) && drive.mountpoints.length) {
				// Windows
				drive.displayName = drive.mountpoints.map(m => m.path).join(', ');
			} else {
				drive.displayName = drive.device;
			}
		});
		for (const drive of drives) {
			result.set(driveKey(drive), drive);
		}
		return result;
	}
}
