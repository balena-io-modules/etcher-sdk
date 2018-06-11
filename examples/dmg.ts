import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestination, wrapper } from './utils';

const main = async ({ sourceDmg, destinationFile }: any) => {
	const fileSource = new sourceDestination.File(sourceDmg, sourceDestination.File.OpenFlags.Read);
	const fileDestination = new sourceDestination.File(destinationFile, sourceDestination.File.OpenFlags.ReadWrite);
	await Promise.all([ fileSource.open(), fileDestination.open() ]);
	const dmgSource = await fileSource.getInnerSource();
	await dmgSource.open();
	await pipeSourceToDestination(dmgSource, fileDestination);
	await Promise.all([ dmgSource.close(), fileDestination.close() ]);
};

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <sourceDmg> <destinationFile>',
	'Extract the dmg file into a raw disk image.',
	(yargs: Argv) => {
		yargs.positional('sourceDmg', { describe: 'Source dmg file' });
		yargs.positional('destinationFile', { describe: 'Destination image file' });
	},
).argv;

wrapper(main, argv);
