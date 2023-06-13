/*
 * Copyright 2023 balena.io
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

import { withTmpFile, TmpFileResult } from '../tmp';

const debug = _debug('etcher-sdk:netsh');

// This module provides a wrapper around the Windows 'netsh' utility. It is
// modeled after the similar diskpart module.

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

const netshMutex = new RWMutex();

async function withNetshMutex<T>(fn: () => T): Promise<T> {
	const unlock = await netshMutex.lock();
	try {
		return await fn();
	} finally {
		unlock();
	}
}

/**
 * @summary Run a netsh script
 * @param {Array<String>} commands - list of commands to run
 * @return String with stdout from command
 */
const runNetsh = async (commands: string[]): Promise<string> => {
	if (platform() !== 'win32') {
		return '';
	}
	let output = { 'stdout':'', 'stderr':'' }
	await withTmpFile({ keepOpen: false }, async (file: TmpFileResult) => {
		await fs.writeFile(file.path, commands.join('\r\n'));
		await withNetshMutex(async () => {
			output = await execFileAsync('netsh', [
				'-f',
				file.path,
			]);
			debug('stdout:', output.stdout);
			debug('stderr:', output.stderr);
		});
	});
	return output.stdout
};

/**
 * Collect the list of WiFi network profile names.
 *
 * @return [string] ; empty if none found
 */
export const collectWifiProfiles = async (): Promise<string[]> => {

	/* Retrieves netsh output formatted like the example below.
	 *
	 * netsh>wlan show profiles
	 *
	 * Profiles on interface Wi-Fi:
	 *
	 * Group policy profiles (read only)
	 * ---------------------------------
	 *     <None>
	 *
	 * User profiles
	 * -------------
	 *     All User Profile     : gal47lows
	 */

	let listText = ''
	try {
		listText = await runNetsh([
			`wlan show profiles`
		]);
	} catch (error) {
		throw(`collectWifiProfiles: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}

	let profiles:string[] = [];
	// Look for 'All User Profile' at beginning of row, and then read name.
	for (let line of listText.split('\n')) {
		const profileMatch = line.match(/\s+All User Profile\s+: (\w+)/);
		if (profileMatch) {
			profiles.push(profileMatch[1])
		}
	}
	return profiles
};

/** Configuration values for a single WiFi network profile. */
export interface WifiProfile {
	name: string;
	key: string;
}

/**
 * Collect the list of WiFi network profile names.
 *
 * @return [string] ; empty if none found
 */
export const readWifiProfile = async (
	name: string
): Promise<WifiProfile> => {

	/* Retrieves netsh output formatted like the example below.
	 *
	 * netsh>wlan show profiles name=gal47lows key=clear
	 *
	 * Profile gal47lows on interface Wi-Fi:
	 *=======================================================================
	 *
	 *Applied: All User Profile
	 *
	 * Profile information
	 * -------------------
	 *     Version                : 1
	 *     Type                   : Wireless LAN
	 *     Name                   : gal47lows
	 *     Control options        :
	 *         Connection mode    : Connect automatically
	 *         Network broadcast  : Connect only if this network is broadcasting
	 *         AutoSwitch         : Do not switch to other networks
	 *         MAC Randomization  : Disabled
	 *
	 * Connectivity settings
	 * ---------------------
	 *     Number of SSIDs        : 1
	 *     SSID name              : "gal47lows"
	 *     Network type           : Infrastructure
	 *     Radio type             : [ Any Radio Type ]
	 *     Vendor extension          : Not present
	 *
	 * Security settings
	 * -----------------
	 *     Authentication         : WPA2-Personal
	 *     Cipher                 : CCMP
	 *     Authentication         : WPA2-Personal
	 *     Cipher                 : GCMP
	 *     Security key           : Present
	 *     Key Content            : <value>
	 *
	 * Cost settings
	 * -------------
	 *     Cost                   : Unrestricted
	 *     Congested              : No
	 *     Approaching Data Limit : No
	 *     Over Data Limit        : No
	 *     Roaming                : No
	 *    Cost Source            : Default
	 */

	let listText = ''
	try {
		listText = await runNetsh([
			`wlan show profiles name=${name} key=clear`
		]);
	} catch (error) {
		throw(`readWifiProfile: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
	}

	let profile = {
		name: name,
		key: ''
	}
	// Look for 'All User Profile' at beginning of row, and then read name.
	for (let line of listText.split('\n')) {
		const keyMatch = line.match(/\s+Key Content\s+: (\w+)/);
		if (keyMatch) {
			profile.key = keyMatch[1]
		}
	}
	return profile
};
