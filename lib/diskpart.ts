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

import { execFile, ExecFileOptions } from 'child_process';
import * as _debug from 'debug';
import { promises as fs } from 'fs';
import { platform } from 'os';
import RWMutex = require('rwmutex');

import { withTmpFile, TmpFileResult } from './tmp';
import { delay } from './utils';

const debug = _debug('etcher-sdk:diskpart');

const DISKPART_DELAY = 2000;
const DISKPART_RETRIES = 5;
const PATTERN = /PHYSICALDRIVE(\d+)/i;

// This module provides utility functions for disk partitioning and related disk
// level tasks. Presently it relies on the Windows 'diskpart' utility to implement 
// this functionality.
// Given this reliance, any new exported functions must throw an Error when used on 
// non-Windows platforms. Only the clean() function silently accepts non-Windows
// platforms, for historical reasons. Of course it also is fine to implement a function
// with support for other platforms, and we may do so generally in the future.

interface ExecResult {
	stdout: string;
	stderr: string;
}

/** Subclass to capture stdout from command execution. */
class ExecError extends Error {
	stdout?: string;

	constructor(message?: string, stdout?: string) {
		super(message);
		this.name = 'ExecError';
		this.stdout = stdout;
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

const execFileAsync = async (
	command: string,
	args: string[] = [],
	options: ExecFileOptions = {}
): Promise<ExecResult> => {
	return await new Promise(
		(resolve: (res: ExecResult) => void, reject: (err: ExecError) => void) => {
			execFile(
				command,
				args,
				options,
				(error: Error, stdout: string, stderr: string) => {
					if (error) {
						reject(new ExecError(error.message, stdout));
					} else {
						resolve({ stdout, stderr });
					}
				}
			);
		}
	);
};

const diskpartMutex = new RWMutex();

async function withDiskpartMutex<T>(fn: () => T): Promise<T> {
	const unlock = await diskpartMutex.lock();
	try {
		return await fn();
	} finally {
		unlock();
	}
}

/**
 * @summary Run a diskpart script
 * @param {Array<String>} commands - list of commands to run
 * @return String with stdout from command
 */
const runDiskpart = async (commands: string[]): Promise<string> => {
	if (platform() !== 'win32') {
		return '';
	}
	let output = { 'stdout':'', 'stderr':'' }
	await withTmpFile({ keepOpen: false }, async (file: TmpFileResult) => {
		await fs.writeFile(file.path, commands.join('\r\n'));
		await withDiskpartMutex(async () => {
			output = await execFileAsync('diskpart', [
				'/s',
				file.path,
			]);
			debug('stdout:', output.stdout);
			debug('stderr:', output.stderr);
		});
	});
	return output.stdout
};

/**
 * @summary Checks if running on windows and returns device Id
 * @param {String} device
 */
const prepareDeviceId = (device: string) => {
	const match = device.match(PATTERN);
	if (match === null) {
		throw new Error(`Invalid device: "${device}"`);
	}

	return match.pop();
};

/**
 * @summary Clean a device's partition tables
 * Functional only on Windows platform; otherwise does nothing.
 * @param {String} device - device path
 * @example
 * diskpart.clean('\\\\.\\PhysicalDrive2')
 *   .then(...)
 *   .catch(...)
 */
export const clean = async (device: string): Promise<void> => {
	debug('clean', device);
	if (platform() !== 'win32') {
		return
	}
	
	let deviceId;

	try {
		deviceId = prepareDeviceId(device);
	} catch (error) {
		throw new Error(`Invalid device: "${device}"`);
	}

	let errorCount = 0;
	while (errorCount <= DISKPART_RETRIES) {
		try {
			await runDiskpart([`select disk ${deviceId}`, 'clean', 'rescan']);
			return;
		} catch (error) {
			if (error.code === 0x8004280a) {
				// See https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-vds/5102cc53-3143-4268-ba4c-6ea39e999ab4
				// VDS_E_DISK_IS_OFFLINE - The operation cannot be performed on a disk that is offline.
				// The disk is offline, we should be able to flash it without erasing the partition table first.
				return;
			}
			errorCount += 1;
			if (errorCount <= DISKPART_RETRIES) {
				await delay(DISKPART_DELAY);
			} else {
				throw new Error(
					`Couldn't clean the drive, ${error.message} (code ${error.code})`
				);
			}
		}
	}
};

/**
 * @summary Reduces the size of the given partition
 * @param {String} partition - the identifier of the partition
 * @param {number} desiredMB - (optional) megabytes to free up, checked against querymax, defaults to max available
 * @example
 * shrinkPartition('C', 2048)
 *  .then(...)
 *  .catch(...)
 */
export const shrinkPartition = async (
	partition: string,
	desiredMB?: number
) => {
	debug('shrink', partition, desiredMB);
	if (platform() !== 'win32') {
		throw new Error("shrinkPartition() not available on this platform")
	}

	try {
		await runDiskpart([
			`select volume ${partition}`,
			`shrink ${desiredMB ? 'DESIRED='.concat(desiredMB + '') : ''}`,
		]);
	} catch (error) {
		throw(`shrinkPartition: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}
};

/**
 *
 * @param {string} device - device path
 * @param {number} sizeMB - size of the new partition (free space has to be present)
 * @param {string} fs - default "fat32", possible "ntfs" the filesystem to format with
 * @param {string} desiredLetter - letter to assign to the new volume, gets the next free letter by default
 * @example
 * createPartition('\\\\.\\PhysicalDrive2', 2048)
 *  .then(...)
 *  .catch(...)
 */
export const createPartition = async (
	device: string,
	sizeMB: number,
	fs?: 'exFAT' | 'fat32' | 'ntfs',
	label?: string,
	desiredLetter?: string
) => {
	if (platform() !== 'win32') {
		throw new Error("createPartition() not available on this platform")
	}

	const deviceId = prepareDeviceId(device);
	try {
		await runDiskpart([
			`select disk ${deviceId}`,
			`create partition primary size=${sizeMB}`,
			`${desiredLetter ? 'assign letter='.concat(desiredLetter) : ''}`,
			`${fs ? 'format fs='.concat(fs).concat(`label=${label ?? 'Balena Volume'}`.concat(' quick')) : ''}`,
			`detail partition`
		])		
	} catch (error) {
		throw(`createPartition: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}
};

/**
 * @summary Sets the online status of a partition (volume)
 * @param {String} volume - the identifier of the volume
 * @example
 * setPartitionOnlineStatus('3', false)
 *  .then(...)
 *  .catch(...)
 */
export const setPartitionOnlineStatus = async (
	volume: string,
	status: boolean
) => {
	if (platform() !== 'win32') {
		throw new Error("setPartitionOnlineStatus() not available on this platform")
	}

	try {
		await runDiskpart([
			`select volume=${volume}`,
			`${status ? 'online' : 'offline'} volume`,
		]);
	} catch (error) {
		throw(`setPartitionOnlineStatus: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}
};

/**
 * Find the volume with the provided label.
 *
 * @param {string} device - device path
 * @param {string} label - volume/partition label
 * @return {number} identifier for the first matching volume, or '' if not found
 * @example
 * findVolume('\\\\.\\PhysicalDrive0', 'flash-boot')
 *  .then(...)
 *  .catch(...)
 */
export const findVolume = async (
	device: string,
	label: string
): Promise<string> => {
	const deviceId = prepareDeviceId(device);

	/* Retrieves diskpart output formatted like the example below.
	 *
	 * DISKPART> list volume
	 *
	 *   Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
	 *   ----------  ---  -----------  -----  ----------  -------  ---------  --------
	 *   Volume 0     C                NTFS   Partition     45 GB  Healthy    Boot
	 *   Volume 1         flash-boot   FAT    Partition     41 MB  Healthy
	 *   Volume 2                      RAW    Partition   3793 MB  Healthy
	 *   Volume 3                      FAT32  Partition    100 MB  Healthy    System
	 *   Volume 4                      NTFS   Partition    530 MB  Healthy    Hidden
	 */
	if (platform() !== 'win32') {
		throw new Error("findVolume() not available on this platform")
	}

	let listText = ''
	try {
		listText = await runDiskpart([
			`select disk ${deviceId}`,
			`list volume`
		]);
	} catch (error) {
		throw(`findVolume: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}

	// Search for label in a language independent way, based on columns.
	enum Columns { Volume = 0, Letter, Label, Fs }
	let colOffsets:number[] = []

	for (let line of listText.split('\n')) {
		if (!colOffsets.length && line.indexOf('-----') >= 0) {
			// Collect the line position for each column into colOffsets.
			let linePos = 0
			for (let i = 0; i <= Columns.Fs; i++) {
				// Expecting even first column preceded by space(s).
				linePos = line.indexOf(' -', linePos)
				if (linePos == -1) {
					throw Error(`findVolume: Only found ${i} columns.`)
				}
				linePos += 1 // advance past space
				colOffsets.push(linePos)
			}
			debug(`colOffsets: ${colOffsets}`)
		} else {
			// Look for the label in the expected column and collect the volume ID if found.
			if (line.substring(colOffsets[Columns.Label], colOffsets[Columns.Fs]).trim() == label) {
				const volText = line.substring(colOffsets[Columns.Volume],colOffsets[Columns.Letter])
				// Assumes only a space before the number at the end of the field.
				const volMatch = volText.match(/\s+(\d+)\s*$/)
				if (volMatch && volMatch[1]) {
					return volMatch[1]
				}
			}
		}
	}
	return ''
};

/**
 * Provide unallocated space on disk, in KB
 * 
 * @param {string} device - device path
 * @example
 * getUnallocatedSize('\\\\.\\PhysicalDrive0')
 *  .then(...)
 *  .catch(...)
 */
export const getUnallocatedSize = async (
	device: string
): Promise<number> => {
	if (platform() !== 'win32') {
		throw new Error("getUnallocatedSize() not available on this platform")
	}

	const deviceId = prepareDeviceId(device);

	/* Retrieves dispart output formatted like the example below.
	 *
	 *  Microsoft DiskPart version 10.0.19041.964
	 *
	 *  Copyright (C) Microsoft Corporation.
	 *  On computer: DESKTOP-TIDA6VG
	 *
	 *  Disk ###  Status         Size     Free     Dyn  Gpt
	 *  --------  -------------  -------  -------  ---  ---
	 *  Disk 0    Online           50 GB  6158 MB        *
	 */
	let listText = ''
	try {
		listText = await runDiskpart([
			`list disk`
		]);
	} catch (error) {
		throw(`getUnallocatedSize: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}

	let freePos = -1;
	// Look for 'Free' in column headings; then read size at that position 
	// on the row for the requested disk.
	for (let line of listText.split('\n')) {
		if (freePos < 0) {
			freePos = line.indexOf('Free');
		} else if (line.indexOf(`Disk ${deviceId}`) >= 0) {
			const freeMatch = line.substring(freePos).match(/(\d+)\s+(\w+)B/);
			if (freeMatch) {
				let res = Number(freeMatch[1]);
				for (let units of ['K', 'M', 'G', 'T']) {
					if (freeMatch[2] == units) {
						return res;
					} else {
						res *= 1024;
					}
				}
			}
			break;  // should have matched; break to throw below
		}
	}
	throw(`getUnallocatedSize: Can't read Free space on disk ${deviceId} from: ${listText}`);
};
