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
import { debug as _debug } from 'debug';
import { promises as fs } from 'fs';
import { platform } from 'os';
import RWMutex = require('rwmutex');

import { withTmpFile, TmpFileResult } from './tmp';
import { delay } from './utils';

const debug = _debug('etcher-sdk:diskpart');

const DISKPART_DELAY = 2000;
const DISKPART_RETRIES = 5;
const PATTERN = /PHYSICALDRIVE(\d+)/i;

interface ExecResult {
	stdout: string;
	stderr: string;
}

const execFileAsync = async (
	command: string,
	args: string[] = [],
	options: ExecFileOptions = {},
): Promise<ExecResult> => {
	return await new Promise(
		(resolve: (res: ExecResult) => void, reject: (err: Error) => void) => {
			execFile(
				command,
				args,
				options,
				(error: Error, stdout: string, stderr: string) => {
					if (error) {
						reject(error);
					} else {
						resolve({ stdout, stderr });
					}
				},
			);
		},
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
 */
const runDiskpart = async (commands: string[]): Promise<void> => {
	if (platform() !== 'win32') {
		return;
	}
	await withTmpFile({ keepOpen: false }, async (file: TmpFileResult) => {
		await fs.writeFile(file.path, commands.join('\r\n'));
		await withDiskpartMutex(async () => {
			const { stdout, stderr } = await execFileAsync('diskpart', [
				'/s',
				file.path,
			]);
			debug('stdout:', stdout);
			debug('stderr:', stderr);
		});
	});
};

/**
 * @summary Clean a device's partition tables
 * @param {String} device - device path
 * @example
 * diskpart.clean('\\\\.\\PhysicalDrive2')
 *   .then(...)
 *   .catch(...)
 */
export const clean = async (device: string): Promise<void> => {
	if (platform() !== 'win32') {
		return;
	}
	const match = device.match(PATTERN);
	if (match === null) {
		throw new Error(`Invalid device: "${device}"`);
	}
	debug('clean', device);
	const deviceId = match.pop();
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
					`Couldn't clean the drive, ${error.message} (code ${error.code})`,
				);
			}
		}
	}
};
