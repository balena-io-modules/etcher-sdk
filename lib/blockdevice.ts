import { delay, Disposer } from 'bluebird';
import * as _debug from 'debug';
import { Drive as DrivelistDrive, list } from 'drivelist';
import { EventEmitter } from 'events';
import { promisify } from 'util';

import { File } from './';
import { Adapter } from './adapter';
import { Drive } from './drive';

const listDrives = promisify(list);

const debug = _debug('etcher-sdk:blockdevice');

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

export class BlockDevice extends Drive {
	emitsProgress = false;
	canCreateSource = true;
	canCreateDestination = true;

	constructor(private drive: DrivelistDrive) {
		super();
	}

	createSourceDisposer(): Promise<Disposer<File>> {
		return File.fromPath(this.drive.raw, 'r');
	}

	createDestinationDisposer(): Promise<Disposer<File>> {
		return File.fromPath(this.drive.raw, 'w+');  // TODO: sync io flag
	}
}

export class BlockDeviceScanner extends Adapter {
	// Emits 'attach', 'detach' and 'error' events
	private drives: Map<string, BlockDevice> = new Map();
	private running = false;

	constructor() {
		super();
		this.scanLoop();
	}

	start(): void {
		this.running = true;
	}

	stop(): void {
		this.drives.clear();
		this.running = false;
	}

	private async scanLoop(): Promise<void> {
		while (true) {
			if (this.running) {
				await this.scan();
			}
			await delay(SCAN_INTERVAL);
		}
	}

	private async scan(includeSystemDrives = false): Promise<void> {
		const drives = await this.listDrives(includeSystemDrives);
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

	private async listDrives(includeSystemDrives = false): Promise<Map<string, DrivelistDrive>> {
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
			return !drive.error && (includeSystemDrives || !drive.isSystem);
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
