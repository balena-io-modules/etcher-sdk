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

import { Disk } from 'file-disk';
import { Stats, promises as fs } from 'fs';
import { platform } from 'os';
import { Argv } from 'yargs';

import { scanner, sourceDestination } from '../lib';
import { configure as legacyConfigure } from '../lib/source-destination/configured-source/configure';
import { ConfigureFunction } from '../lib/source-destination/configured-source/configured-source';

import {
	pipeSourceToDestinationsWithProgressBar,
	readJsonFile,
	wrapper,
} from './utils';

const FILE_PROTOCOL = 'file://';

async function openUrl(
	url: string,
	deviceScanner: scanner.Scanner,
	write: boolean,
	direct = true,
): Promise<
	| sourceDestination.Http
	| sourceDestination.File
	| sourceDestination.BlockDevice
> {
	if (url.startsWith('http://') || url.startsWith('https://')) {
		return new sourceDestination.Http({ url });
	}
	if (url.startsWith(FILE_PROTOCOL)) {
		url = url.slice(FILE_PROTOCOL.length);
	}
	const plat = platform();
	const lowercaseUrl = url.toLowerCase();
	if (plat === 'win32' && lowercaseUrl.startsWith('\\\\.\\physicaldrive')) {
		// fs.stat will fail on \\.\PhysicalDriveN on windows
		const device = Array.from(deviceScanner.drives.values()).find((d) => {
			return d.device !== null && d.device.toLowerCase() === lowercaseUrl;
		});
		if (
			device !== undefined &&
			device instanceof sourceDestination.BlockDevice
		) {
			device.oWrite = write;
			device.oDirect = direct;
			return device;
		}
		throw new Error(`Could not open ${url}`);
	}
	let stats: Stats | undefined;
	try {
		stats = await fs.stat(url);
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}
	if (stats !== undefined) {
		if (
			stats.isBlockDevice() ||
			(stats.isCharacterDevice() && plat === 'darwin')
		) {
			const device = Array.from(deviceScanner.drives.values()).find((d) => {
				return d.device === url || d.devicePath === url || d.raw === url;
			});
			if (
				device !== undefined &&
				device instanceof sourceDestination.BlockDevice
			) {
				device.oWrite = write;
				device.oDirect = direct;
				return device;
			}
		}
	} else if (!write) {
		// Non existing file
		throw new Error(`Invalid url for reading: ${url}`);
	}
	return new sourceDestination.File({ path: url, write });
}

async function main({
	sourceImage,
	devices,
	verify,
	trim,
	decompressFirst,
	config,
	numBuffers,
}: {
	sourceImage: string;
	devices: string[];
	verify: boolean;
	trim: boolean;
	decompressFirst: boolean;
	config: string;
	numBuffers: number;
}) {
	const adapters = [
		new scanner.adapters.BlockDeviceAdapter({
			includeSystemDrives: () => false,
			unmountOnSuccess: false,
			write: true,
			direct: true,
		}),
	];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('error', console.error);
	deviceScanner.start();
	// Wait for the deviceScanner to be ready
	await new Promise((resolve) => {
		deviceScanner.on('ready', resolve);
	});
	let configure: ConfigureFunction | undefined;
	if (config !== undefined) {
		configure = async (disk: Disk) => {
			await legacyConfigure(disk, await readJsonFile(config));
		};
	}
	const destinationDrives = await Promise.all(
		devices.map((d) => openUrl(d, deviceScanner, true)),
	);
	const source = await openUrl(
		sourceImage,
		deviceScanner,
		false,
		// ConfiguredSource will not work with O_DIRECT
		!trim && configure === undefined,
	);
	deviceScanner.stop();
	await pipeSourceToDestinationsWithProgressBar({
		source,
		destinations: destinationDrives,
		verify,
		numBuffers,
		trim,
		decompressFirst,
		configure,
	});
}

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <sourceImage> [devices..]',
	'Write the sourceImage on all devices.',
	(yargs: Argv) => {
		yargs.positional('sourceImage', { describe: 'Source image' });
		yargs.positional('devices', {
			describe: 'Devices to write to',
		});
		yargs.option('verify', { type: 'boolean', default: false });
		yargs.option('trim', { type: 'boolean', default: false });
		yargs.option('decompressFirst', { type: 'boolean', default: false });
		yargs.option('numBuffers', {
			default: 16,
			description: 'Number of 1MiB buffers used to buffer data',
		});
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
