import { Argv } from 'yargs';

import { scanner, sourceDestination, verification } from '../lib';

import { pipeSourceToDestination, wrapper } from './utils';

const main = async ({ sourceImage, devicePathPrefix }: any) => {
	const verify = false;
	const adapters = [ new scanner.adapters.BlockDeviceAdapter(false), new scanner.adapters.UsbbootDeviceAdapter() ];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('error', console.error)
	deviceScanner.start()
	// Wait for the deviceScanner to be ready
	await new Promise((resolve, reject) => {
		deviceScanner.on('ready', resolve);
	});
	const sourceDrive = new sourceDestination.File(sourceImage, sourceDestination.File.OpenFlags.Read);
	if (sourceDrive === undefined) {
		console.log('No source drive');
		return;
	}
	const destinationDrives = Array.from(deviceScanner.drives.values()).filter((drive) => {
		return drive.devicePath && drive.devicePath.startsWith(devicePathPrefix);
	});
	console.log(destinationDrives.map((d) => d.devicePath));
	const destination = new sourceDestination.MultiDestination(destinationDrives);
	destination.on('error', console.error) // TODO
	await Promise.all([ sourceDrive.open(), destination.open() ]);
	try {
		console.log('start flashing', Date.now());
		const { bytes, hash } = await pipeSourceToDestination(sourceDrive, destination, verify);
		console.log('done flashing', Date.now());
		if (verify && (hash !== undefined)) {
			const verifier = await verification.createVerifier(destination, hash, bytes);
			await new Promise((resolve, reject) => {
				verifier.on('error', reject);
				verifier.on('success', resolve);
				//verifier.on('progress', console.log);
			});
			console.log('ok')
		}
	} finally {
		await Promise.all([ destination.close(), sourceDrive.close() ]);
		deviceScanner.stop();
	}
};

const argv = require('yargs').command(
	'$0 <sourceImage> <devicePathPrefix>',
	'Write the sourceImage on all drives which link name in /dev/disk/by-path/ starts with devicePathPrefix.',
	(yargs: Argv) => {
		yargs.positional('sourceImage', { describe: 'Source image' });
		yargs.positional('devicePathPrefix', { describe: 'Devices name prefix in /dev/disk/by-path/' });
	},
).argv

wrapper(main, argv);
