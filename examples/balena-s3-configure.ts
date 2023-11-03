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

import { Disk } from 'file-disk';
import { promises as fs } from 'fs';
import { env } from 'process';
import { Argv } from 'yargs';

import {
	AwsCredentials,
	BalenaS3Source,
} from '../lib/source-destination/balena-s3-source';
import { BalenaS3CompressedSource } from '../lib/source-destination/balena-s3-compressed-source';
import { configure as legacyConfigure } from '../lib/source-destination/configured-source/configure';
import { ConfigureFunction } from '../lib/source-destination/configured-source/configured-source';
import { File } from '../lib/source-destination/file';

import { pipeSourceToDestinationsWithProgressBar, wrapper } from './utils';

const readJsonFile = async (path: string): Promise<any> => {
	const data = await fs.readFile(path, { encoding: 'utf8', flag: 'r' });
	return JSON.parse(data);
};

function getAwsCredentialsFromEnv(): AwsCredentials | undefined {
	if (
		env.AWS_ACCESS_KEY_ID !== undefined &&
		env.AWS_SECRET_ACCESS_KEY !== undefined
	) {
		return {
			accessKeyId: env.AWS_ACCESS_KEY_ID,
			secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
			sessionToken: env.AWS_SESSION_TOKEN,
		};
	}
}

interface Arguments {
	sourceClass:
		| BalenaS3Source['constructor']['name']
		| BalenaS3CompressedSource['constructor']['name'];
	host: string;
	bucket: string;
	prefix?: string;
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
}

function createS3Source({
	host,
	bucket,
	prefix,
	deviceType,
	buildId,
	release,
}: Arguments) {
	return new BalenaS3Source({
		host,
		bucket,
		prefix,
		deviceType,
		buildId,
		release,
		awsCredentials: getAwsCredentialsFromEnv(),
	});
}

async function createCompressedS3Source({
	host,
	bucket,
	prefix,
	deviceType,
	buildId,
	release,
	format,
	config,
}: Arguments) {
	return new BalenaS3CompressedSource({
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
}

async function main(options: Arguments) {
	let configure: ConfigureFunction | undefined;
	let source: BalenaS3Source | BalenaS3CompressedSource;
	if (options.sourceClass === BalenaS3CompressedSource.name) {
		if (options.trim) {
			throw new Error(`Can not trim a ${options.sourceClass}`);
		}
		source = await createCompressedS3Source(options);
	} else {
		if (options.format !== 'zip') {
			throw new Error(`Format can only be zip for ${options.sourceClass}`);
		}
		if (options.config !== undefined) {
			configure = async (disk: Disk) => {
				await legacyConfigure(disk, await readJsonFile(options.config));
			};
		}
		source = createS3Source(options);
	}
	const destination = new File({
		path: options.fileDestination,
		write: true,
	});
	await pipeSourceToDestinationsWithProgressBar({
		source,
		destinations: [destination],
		verify: options.verify,
		trim: options.trim,
		configure,
		decompressFirst: options.decompressFirst,
		asItIs: options.asItIs,
	});
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
		yargs.option('prefix', { type: 'string' });
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
		yargs.option('sourceClass', {
			choices: [BalenaS3Source.name, BalenaS3CompressedSource.name],
			default: BalenaS3Source.name,
		});
	},
).argv;

void wrapper(main, argv);
