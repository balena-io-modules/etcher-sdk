import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestinationsWithProgressBar, readJsonFile, wrapper } from './utils';

const main = async ({ fileSource, fileDestination, trim, config, verify }: any) => {
	let source: sourceDestination.SourceDestination = new sourceDestination.File(fileSource, sourceDestination.File.OpenFlags.Read);
	const destination = new sourceDestination.File(fileDestination, sourceDestination.File.OpenFlags.ReadWrite);
	source = await source.getInnerSource();
	const canRead = await source.canRead();
	if (trim || (config !== undefined)) {
		if (!canRead) {
			console.warn("Can't configure or trim a source that is not randomly readable, skipping");
		} else {
			source = new sourceDestination.ConfiguredSource(
				source,
				trim,
				true,  // create stream from disk (not from stream)
				(config !== undefined) ? 'legacy' : undefined,
				(config !== undefined) ? { config: await readJsonFile(config) } : undefined,
			);
		}
	}
	await pipeSourceToDestinationsWithProgressBar(source, [ destination ], verify);
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
