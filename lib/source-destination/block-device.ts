import { delay, promisify } from 'bluebird';
import { Drive as DrivelistDrive } from 'drivelist';
import { unmountDisk } from 'mountutils';

import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import { clean } from '../diskpart';
import { File } from './file';
import { Metadata } from './metadata';

/**
 * @summary Time, in milliseconds, to wait before unmounting on success
 */
const UNMOUNT_ON_SUCCESS_TIMEOUT_MS = 2000;

const unmountDiskAsync = promisify(unmountDisk);

export class BlockDevice extends File implements AdapterSourceDestination {
	emitsProgress = false;

	constructor(private drive: DrivelistDrive) {
		super(drive.raw, File.OpenFlags.WriteDevice);
	}

	get isSystem(): boolean {
		return this.drive.isSystem;
	}

	get raw(): string {
		return this.drive.raw;
	}

	get device(): string {
		return this.drive.device;
	}

	get devicePath(): string {
		return this.drive.devicePath;
	}

	get description(): string {
		return this.drive.description;
	}

	get mountpoints(): { path: string }[] {
		return this.drive.mountpoints;
	}

	get size(): number {
		return this.drive.size;
	}

	async _getMetadata(): Promise<Metadata> {
		return {
			size: this.drive.size,
		};
	}

	async canWrite(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	async canCreateWriteStream(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return !this.drive.isReadOnly;
	}

	protected async _open(): Promise<void> {
		await unmountDiskAsync(this.drive.device);
		await clean(this.drive.device);
		await super._open();
	}

	protected async _close(): Promise<void> {
		await super._close();
		// Closing a file descriptor on a drive containing mountable
		// partitions causes macOS to mount the drive. If we try to
		// unmount too quickly, then the drive might get re-mounted
		// right afterwards.
		if (true) {  // TODO: not sure if unmountOnSuccess should be stored in this class or read from settings
			await delay(UNMOUNT_ON_SUCCESS_TIMEOUT_MS);
			await unmountDiskAsync(this.drive.device);
		}
	}
}

