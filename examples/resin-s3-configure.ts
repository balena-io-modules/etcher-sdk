import { Argv } from 'yargs';

import { fs, sourceDestination } from '../lib';

import { pipeSourceToDestination, wrapper } from './utils';

const readJsonFile = async (path: string): Promise<any> => {
	return JSON.parse(await fs.readFile(path, 'utf8'));
}

const main = async ({ bucket, deviceType, buildId, fileDestination, trim, config }: any) => {
	let source: sourceDestination.SourceDestination = new sourceDestination.ResinS3Source(bucket, deviceType, buildId);
	if (trim || (config !== undefined)) {
		source = new sourceDestination.ConfiguredSource(
			source,
			trim,
			(config !== undefined) ? 'legacy' : undefined,
			{ config: await readJsonFile(config) },
		);
	}
	const destination= new sourceDestination.File(fileDestination, sourceDestination.File.OpenFlags.ReadWrite);
	await Promise.all([ source.open(), destination.open() ]);
	await pipeSourceToDestination(source, destination);
	await Promise.all([ source.close(), destination.close() ]);
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <bucket> <deviceType> <buildId> <fileDestination>',
	'Write the image contained in the zipSource url into fileDestination',
	(yargs: Argv) => {
		yargs.positional('bucket', { describe: 's3 bucket (resin-staging-img or resin-production-img-cloudformation)' });
		yargs.positional('deviceType', { describe: 'device type (example: raspberrypi3)' });
		yargs.positional('buildId', { describe: 'device type build id (example: 2.12.7+rev1.prod/)' });
		yargs.positional('fileDestination', { describe: 'Destination image file' });
		yargs.option('trim', { default: false });
		yargs.describe('config', 'json configuration file');
	},
).argv;

wrapper(main, argv);
