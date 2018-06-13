import { Argv } from 'yargs';

import { scanner, sourceDestination } from '../lib';

import { pipeSourceToDestination, readJsonFile, wrapper } from './utils';

const main = async ({ sourceImage, devicePathPrefix, verify, trim, config }: any) => {
	const adapters = [ new scanner.adapters.BlockDeviceAdapter(() => false), new scanner.adapters.UsbbootDeviceAdapter() ];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('error', console.error);
	deviceScanner.start();
	// Wait for the deviceScanner to be ready
	await new Promise((resolve, reject) => {
		deviceScanner.on('ready', resolve);
	});
	let source: sourceDestination.SourceDestination = new sourceDestination.File(sourceImage, sourceDestination.File.OpenFlags.Read);
	if (source === undefined) {
		console.log('No source file');
		return;
	}
	if (trim || (config !== undefined)) {
		source = new sourceDestination.ConfiguredSource(
			source,
			trim,
			true,
			(config !== undefined) ? 'legacy' : undefined,
			(config !== undefined) ? { config: await readJsonFile(config) } : undefined,
		);
	}
	const destinationDrives = Array.from(deviceScanner.drives.values()).filter((drive) => {
		return drive.devicePath && drive.devicePath.startsWith(devicePathPrefix);
	});
	const destination = new sourceDestination.MultiDestination(destinationDrives);
	destination.on('error', console.error); // TODO
	await Promise.all([ source.open(), destination.open() ]);
	try {
		await pipeSourceToDestination(source, destination, verify);
	} finally {
		await Promise.all([ destination.close(), source.close() ]);
		deviceScanner.stop();
	}
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <sourceImage> <devicePathPrefix>',
	'Write the sourceImage on all drives which link name in /dev/disk/by-path/ starts with devicePathPrefix.',
	(yargs: Argv) => {
		yargs.positional('sourceImage', { describe: 'Source image' });
		yargs.positional('devicePathPrefix', { describe: 'Devices name prefix in /dev/disk/by-path/' });
		yargs.option('verify', { default: false });
		yargs.option('trim', { default: false });
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
