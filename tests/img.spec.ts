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

import { createReadStream, createWriteStream, promises as fs } from 'fs';
import 'mocha';
import { join } from 'path';
import { createGunzip } from 'zlib';

import {
	DEFAULT_IMAGE_TESTS_TIMEOUT,
	testImage,
	testImageNoIt,
} from './tester';

import { sourceDestination } from '../lib';
import { tmpFile } from '../lib/tmp';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');

describe('img', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);
	let gunzippedFilePath: string | undefined;

	before(async function () {
		gunzippedFilePath = (await tmpFile({ keepOpen: false })).path;
		await new Promise((resolve, reject) => {
			const source = createReadStream(
				join(IMAGES_PATH, 'etcher-gpt-test.img.gz'),
			);
			const gunzip = createGunzip();
			const destination = createWriteStream(gunzippedFilePath as string);
			source.pipe(gunzip).pipe(destination);
			destination.on('close', resolve);
			source.on('error', reject);
			gunzip.on('error', reject);
			destination.on('error', reject);
		});
	});

	after(async function () {
		await fs.unlink(gunzippedFilePath as string);
	});

	testImage(
		'mbr',
		join(IMAGES_PATH, 'etcher-test.img'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		false, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
	);

	it('gpt', async function () {
		await testImageNoIt(
			join(IMAGES_PATH, 'etcher-gpt-test.img.gz'),
			// @ts-ignore
			gunzippedFilePath,
			false, // alsoTestSparseStream
			true, // shouldHaveSize
			false, // shouldHaveCompressedSize
			sourceDestination.File, // sourceClass (File or BlockDevice)
			'gpt', // partitionTableType
			join(IMAGES_PATH, 'etcher-gpt-test-partitions.json'), // partitionsFile
		);
	});
});
