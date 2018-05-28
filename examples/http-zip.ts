import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestination, wrapper } from './utils';

const main = async ({ zipSource, fileDestination }: any) => {
	const sourceHttp = new sourceDestination.Http(zipSource);
	const sourceZip = new sourceDestination.ZipSource(sourceHttp);
	const destinationFile = new sourceDestination.File(fileDestination, sourceDestination.File.OpenFlags.ReadWrite);
	await Promise.all([ sourceZip.open(), destinationFile.open() ]);
	await pipeSourceToDestination(sourceZip, destinationFile);
	await Promise.all([ sourceZip.close(), destinationFile.close() ]);
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <zipSource> <fileDestination>',
	'Write the image contained in the zipSource url into fileDestination',
	(yargs: Argv) => {
		yargs.positional(
			'zipSource',
			{
				describe: 'Source zip url (http or https), you can try https://resin-staging-img.s3.amazonaws.com/images/artik10/2.3.0%2Brev1.dev/image/resin.img.zip',
			},
		);
		yargs.positional('fileDestination', { describe: 'Destination image file' });
	},
).argv;

wrapper(main, argv);
