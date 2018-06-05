import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestination, readJsonFile, wrapper } from './utils';

const main = async ({ fileSource, fileDestination, trim, config, verify }: any) => {
	let source: sourceDestination.SourceDestination = new sourceDestination.File(fileSource, sourceDestination.File.OpenFlags.Read);
	if (trim || (config !== undefined)) {
		source = new sourceDestination.ConfiguredSource(
			source,
			trim,
			//false,
			true,
			(config !== undefined) ? 'legacy' : undefined,
			(config !== undefined) ? { config: await readJsonFile(config) } : undefined,
		);
	}
	const destination = new sourceDestination.File(fileDestination, sourceDestination.File.OpenFlags.ReadWrite);
	await Promise.all([ source.open(), destination.open() ]);
	await pipeSourceToDestination(source, destination, verify);
	await Promise.all([ source.close(), destination.close() ]);
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <fileSource> <fileDestination>',
	'Write the image contained in the fileSource file into fileDestination',
	(yargs: Argv) => {
		yargs.positional('fileSource', { describe: 'Source image file' });
		yargs.positional('fileDestination', { describe: 'Destination image file' });
		yargs.option('trim', { default: false });
		yargs.option('verify', { default: false });
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
