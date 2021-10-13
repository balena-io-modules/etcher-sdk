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

import * as assert from 'assert';
import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const DMG_PATH = join(DATA_PATH, 'dmg');

describe('dmg support', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	const compressionMethods = [
		'raw',
		'adc',
		'zlib',
		// 'bz2',
		// NOTE: Skipped, as LZFSE is not supported by `udif` module yet
		// 'lzfse',
	];

	compressionMethods.forEach((compressionMethod) => {
		testImage(
			compressionMethod,
			join(DMG_PATH, `etcher-test-${compressionMethod}.dmg`),
			join(IMAGES_PATH, 'etcher-test.img'),
			true, // alsoTestSparseStream
			true, // shouldHaveSize
			true, // shouldHaveCompressedSize
			'mbr', // partitionTableType
			join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
			{}, // expectedMetadata
			sourceDestination.DmgSource,
		);
	});

	it('invalid dmg file', async function () {
		const source = new sourceDestination.File({
			path: join(DATA_PATH, 'unrecognized', 'invalid.dmg'),
		});
		await source.open();
		const dmgSource = new sourceDestination.DmgSource(source);
		try {
			await dmgSource.open();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal(
				'Invalid footer signature: Expected 0x6b6f6c79, saw 0x735179a8',
			);
			await source.close();
			return;
		}
		assert(false);
	});
});
