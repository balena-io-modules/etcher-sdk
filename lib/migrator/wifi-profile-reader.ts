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

const debug = _debug('etcher-sdk:wifi-profile-reader');
const MODULE_NAME = 'WiFiProfileManagement'

// This code provides a wrapper around the Windows Powershell WiFiProfileManagement 
// module (https://github.com/jcwalker/WiFiProfileManagement) to retrieve profile
// information.

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

const execMutex = new RWMutex();

async function withExecMutex<T>(fn: () => T): Promise<T> {
	const unlock = await execMutex.lock();
	try {
		return await fn();
	} finally {
		unlock();
	}
}

/**
 * @summary Run a Powershell script
 * @param {Array<String>} commands - list of commands to run
 * @return String with stdout from command
 */
const runPowershell = async (commands: string[]): Promise<string> => {
	if (platform() !== 'win32') {
		return '';
	}
	let output = { 'stdout':'', 'stderr':'' }
	await withTmpFile({ keepOpen: false, postfix: '.ps1' }, async (file: TmpFileResult) => {
		await fs.writeFile(file.path, commands.join('\r\n'));
		await withExecMutex(async () => {
			output = await execFileAsync('powershell', [
				'-NonInteractive',
				'-ExecutionPolicy',
				'RemoteSigned',
				'-File',
				file.path,
			]);
			debug('stdout:', output.stdout);
			debug('stderr:', output.stderr);
		});
	});
	return output.stdout
};

/** Configuration values for a single WiFi network profile. */
export interface WifiProfile {
	name: string;
	key: string;
}

/**
 * Reads WiFi profiles. Allows for separately specifying in the constructor a custom 
 * path to the required Powershell module.
 */
export class ProfileReader {
	private setupCommands: string[] = [];

	/** If on a built-in module path, leave modulePath empty. */
	constructor(modulePath = '') {
		if (modulePath) {
			this.setupCommands.push(`$Env:PSModulePath = "$Env:PSModulePath;${modulePath}"`)
			this.setupCommands.push(`Import-Module ${MODULE_NAME}`)
		}
		debug(`setupCommands: ${this.setupCommands}`)
	}

	/**
	 * Collect the list of WiFi network profile name/key combinations.
	 *
	 * @return [WifiProfile] found; empty if none
	 */
	public async collectWifiProfiles(): Promise<WifiProfile[]> {

		/* Retrieves output formatted like the example below.
		 *
		 * > Get-WiFiProfile -ClearKey
		 *
		 * ProfileName               ConnectionMode Authentication Encryption Password
		 * -----------               -------------- -------------- ---------- --------
		 * gal47lows                 auto           WPA2PSK        AES        xxxxx
		 */

		let commands = Array.from(this.setupCommands)
		commands.push("Get-WiFiProfile -ClearKey")
		let listText = ''
		try {
			listText = await runPowershell(commands);
		} catch (error) {
			throw(`collectWifiProfiles: ${error}${error.stdout ? `\n${error.stdout}` : ''}`);
		}

		let profiles:WifiProfile[] = [];
		let foundHeader = false
		for (let line of listText.split('\n')) {
			if (!foundHeader) {
				foundHeader = line.indexOf('-----') >= 0
			} else {
				debug(`line: ${line}`)
				// Look for first and last fields in row
				const match = line.match(/^\s*(\w+).*\s+(\w+)\s*$/);
				if (match) {
					debug(`match: ${match[1]}, ${match[2]}`)
					let profile = {
						name: match[1],
						key: match[2]
					}
					profiles.push(profile)
				}
			}
		}
		return profiles
	};
}
