import { delay } from 'bluebird';
import { Drive as DrivelistDrive } from 'drivelist';
import { unmountDisk } from 'mountutils';
import { promisify } from 'util';

import { clean } from '../diskpart';
import { File, OpenFlags } from './file';
import { Metadata } from './metadata';

/**
 * @summary Time, in milliseconds, to wait before unmounting on success
 */
const UNMOUNT_ON_SUCCESS_TIMEOUT_MS = 2000;

const unmountDiskAsync = promisify(unmountDisk);

export class BlockDevice extends File {
	constructor(private drive: DrivelistDrive) {
		super(drive.raw, OpenFlags.WriteDevice);
	}

	async getMetadata(): Promise<Metadata> {
		return {
			size: this.drive.size,
		};
	}
	async open(): Promise<void> {
		await unmountDiskAsync(this.drive.device);
		await clean(this.drive.device);
		await super.open();
	}

	async close(): Promise<void> {
		await super.close();
		// Closing a file descriptor on a drive containing mountable
		// partitions causes macOS to mount the drive. If we try to
		// unmount too quickly, then the drive might get re-mounted
		// right afterwards.
		if (true) {  // TODO: not sure if unmountOnSuccess sould be stored in this class or read from settings
			await delay(UNMOUNT_ON_SUCCESS_TIMEOUT_MS);
			await unmountDiskAsync(this.drive.device);
		}
	}
}

