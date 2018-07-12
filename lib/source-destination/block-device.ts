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

	constructor(private drive: DrivelistDrive, private unmountOnSuccess = false) {
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
		if (this.unmountOnSuccess) {
			await delay(UNMOUNT_ON_SUCCESS_TIMEOUT_MS);
			await unmountDiskAsync(this.drive.device);
		}
	}
}

