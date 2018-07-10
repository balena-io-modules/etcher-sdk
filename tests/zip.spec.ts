import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { SourceSource } from '../lib/source-destination/source-source';
import { DEFAULT_IMAGE_TESTS_TIMEOUT, expectSourceSourceError, testImage  } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const ZIP_PATH = join(DATA_PATH, 'zip');

describe('zip support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	expectSourceSourceError(
		'given an empty zip directory',
		join(ZIP_PATH, 'zip-directory-empty.zip'),
		sourceDestination.ZipSource,
		'Could not find a disk image in this archive',
	);

	expectSourceSourceError(
		'given a zip directory containing only misc files',
		join(ZIP_PATH, 'zip-directory-no-image-only-misc.zip'),
		sourceDestination.ZipSource,
		'Could not find a disk image in this archive',
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
		false,  // alsoTestSparseStream
		true,  // shouldHaveSize
		7791,   // shouldHaveCompressedSize
		'mbr',  // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

	testImage(
		'given a zip directory containing an image and other misc files',
		join(ZIP_PATH, 'zip-directory-etcher-test-and-misc.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false,  // alsoTestSparseStream
		true,  // shouldHaveSize
		7791,   // shouldHaveCompressedSize
		'mbr',  // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
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

		compressionMethods.forEach((compressionMethod) => {
			testImage(
				compressionMethod,
				join(ZIP_PATH, `zip-${compressionMethod}.zip`),
				join(IMAGES_PATH, 'etcher-test.img'),
				false,  // alsoTestSparseStream
				true,  // shouldHaveSize
				8850,   // shouldHaveCompressedSize
				'mbr',  // partitionTableType
				join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
			);
		});
	});
});
