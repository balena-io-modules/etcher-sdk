/*
 * Copyright 2026 balena.io
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

import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const ZST_PATH = join(DATA_PATH, 'zst');

describe('zstd support', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	testImage(
		'zstd support',
		join(ZST_PATH, 'etcher-test.img.zst'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		true, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{ isSizeEstimated: false },
	);
});

describe('zstd name stripping', function () {
	it('strips a .zstd extension from the source name', async function () {
		const source = new sourceDestination.File({
			path: join(ZST_PATH, 'etcher-test.img.zstd'),
		});
		const innerSource = await source.getInnerSource();
		const metadata = await innerSource.getMetadata();
		await innerSource.close();
		expect(metadata.name).to.equal('etcher-test.img');
	});
});
