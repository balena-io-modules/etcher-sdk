import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestinationsWithProgressBar, wrapper } from './utils';

const main = async ({ zipSource, fileDestination, verify }: any) => {
	const sourceHttp = new sourceDestination.Http(zipSource);
	const destinationFile = new sourceDestination.File(fileDestination, sourceDestination.File.OpenFlags.ReadWrite);
	const sourceZip = await sourceHttp.getInnerSource();
	await pipeSourceToDestinationsWithProgressBar(sourceZip, [ destinationFile ], verify);
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
		yargs.option('verify', { default: false });
	},
).argv;

wrapper(main, argv);
