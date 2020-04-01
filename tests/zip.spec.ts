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
import { NO_MATCHING_FILE_MSG } from '../lib/constants';
import {
	DEFAULT_IMAGE_TESTS_TIMEOUT,
	expectSourceSourceError,
	testImage,
} from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const ZIP_PATH = join(DATA_PATH, 'zip');

describe('zip support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	expectSourceSourceError(
		'given an empty zip directory',
		join(ZIP_PATH, 'zip-directory-empty.zip'),
		sourceDestination.ZipSource,
		NO_MATCHING_FILE_MSG,
	);

	expectSourceSourceError(
		'given a zip directory containing only misc files',
		join(ZIP_PATH, 'zip-directory-no-image-only-misc.zip'),
		sourceDestination.ZipSource,
		NO_MATCHING_FILE_MSG,
	);

	expectSourceSourceError(
		'given a zip with an unsupported compression method',
		join(ZIP_PATH, 'zip-deflate64.zip'),
		sourceDestination.ZipSource,
		'unsupported compression method: 9',
	);

	testImage(
		'given a zip directory containing only an image',
		join(ZIP_PATH, 'zip-directory-etcher-test-only.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
	);

	testImage(
		'given a zip directory containing an image and other misc files',
		join(ZIP_PATH, 'zip-directory-etcher-test-and-misc.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
	);

	describe('compression method', function() {
		const compressionMethods = [
			'deflate',
			// NOTE: These tests are intentionally skipped, as the
			// zip library we're currently using only supports deflate
			// 'deflate64',
			// 'ppmd',
			// 'bzip2',
			// 'lzma',
		];

		compressionMethods.forEach(compressionMethod => {
			testImage(
				compressionMethod,
				join(ZIP_PATH, `zip-${compressionMethod}.zip`),
				join(IMAGES_PATH, 'etcher-test.img'),
				false, // alsoTestSparseStream
				true, // shouldHaveSize
				8850, // shouldHaveCompressedSize
				'mbr', // partitionTableType
				join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
			);
		});
	});

	for (const preferStreamSource of [false, true]) {
		it(`should fail to read from a zip file containing no archive (use stream=${preferStreamSource})`, async () => {
			const source = new sourceDestination.ZipSource(
				new sourceDestination.File({
					path: join(ZIP_PATH, 'zip-directory-empty.zip'),
				}),
				preferStreamSource,
				() => false, // Don't match any filename
			);
			try {
				await source.getMetadata();
				assert(false);
			} catch (error) {
				expect(error).to.be.instanceof(Error);
				expect(error.message).to.equal(NO_MATCHING_FILE_MSG);
			} finally {
				await source.close();
			}
		});
	}
});
