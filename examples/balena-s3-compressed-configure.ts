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

import { promises as fs } from 'fs';
import { Argv } from 'yargs';

import { sourceDestination } from '../lib';

import {
	getAwsCredentialsFromEnv,
	pipeSourceToDestinationsWithProgressBar,
	wrapper,
} from './utils';

const readJsonFile = async (path: string): Promise<any> => {
	const data = await fs.readFile(path, { encoding: 'utf8', flag: 'r' });
	return JSON.parse(data);
};

async function main({
	host,
	bucket,
	prefix,
	deviceType,
	buildId,
	release,
	format,
	asItIs,
	fileDestination,
	trim,
	config,
	verify,
	decompressFirst,
}: {
	host: string;
	bucket: string;
	prefix: string;
	deviceType: string;
	buildId: string;
	release?: string;
	format: 'zip' | 'gzip';
	asItIs: boolean;
	fileDestination: string;
	trim: boolean;
	config: string;
	verify: boolean;
	decompressFirst: boolean;
}) {
	const source = new sourceDestination.BalenaS3CompressedSource({
		host,
		bucket,
		prefix,
		deviceType,
		buildId,
		release,
		format,
		configuration: config ? await readJsonFile(config) : undefined,
		awsCredentials: getAwsCredentialsFromEnv(),
	});
	const destination = new sourceDestination.File({
		path: fileDestination,
		write: true,
	});
	await pipeSourceToDestinationsWithProgressBar({
		source,
		destinations: [destination],
		verify,
		trim,
		decompressFirst,
		asItIs,
	});
}

// tslint:disable-next-line: no-var-requires
const argv = require('yargs').command(
	'$0 <deviceType> <buildId> <fileDestination>',
	'Write the image contained in the zipSource url into fileDestination',
	(yargs: Argv) => {
		yargs.positional('deviceType', {
			describe: 'device type (example: raspberrypi3)',
		});
		yargs.positional('buildId', {
			describe: 'device type build id (example: 2.12.7+rev1.prod)',
		});
		yargs.positional('fileDestination', { describe: 'Destination image file' });
		yargs.option('host', {
			type: 'string',
			default: 'https://s3.amazonaws.com',
			description: 'S3 host including scheme and port',
		});
		yargs.option('bucket', {
			type: 'string',
			default: 'resin-production-img-cloudformation',
		});
		yargs.option('prefix', { type: 'string', default: 'images' });
		yargs.option('release', { type: 'string' });
		yargs.option('format', { choices: ['zip', 'gzip'], default: 'zip' });
		yargs.option('asItIs', {
			type: 'boolean',
			default: false,
			description: 'do not try to decompress, write as it is',
		});
		yargs.option('verify', { type: 'boolean', default: false });
		yargs.option('trim', { type: 'boolean', default: false });
		yargs.option('decompressFirst', { type: 'boolean', default: false });
		yargs.option('config', {
			type: 'string',
			description: 'json configuration file',
		});
	},
).argv;

wrapper(main, argv);
