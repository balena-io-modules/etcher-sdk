import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import { pipeSourceToDestination, wrapper } from './utils';

const main = async ({ sourceDmg, destinationFile }: any) => {
	const fileSource = new sourceDestination.File(sourceDmg, sourceDestination.File.OpenFlags.Read);
	const dmgSource = new sourceDestination.DmgSource(fileSource);
	const fileDestination = new sourceDestination.File(destinationFile, sourceDestination.File.OpenFlags.ReadWrite);
	await Promise.all([ dmgSource.open(), fileDestination.open() ]);
	await pipeSourceToDestination(dmgSource, fileDestination);
	await Promise.all([ dmgSource.close(), fileDestination.close() ]);
};

const argv = require('yargs').command(
	'$0 <sourceDmg> <destinationFile>',
	'Extract the dmg file into a raw disk image.',
	(yargs: Argv) => {
		yargs.positional('sourceDmg', { describe: 'Source dmg file' });
		yargs.positional('destinationFile', { describe: 'Destination image file' });
	},
).argv

wrapper(main, argv);
