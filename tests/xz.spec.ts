import 'mocha';
import { join } from 'path';

import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage  } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const XZ_PATH = join(DATA_PATH, 'xz');

describe('xz support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	testImage(
		'xz support',
		join(XZ_PATH, 'etcher-test.img.xz'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false,  // alsoTestSparseStream
		true,  // shouldHaveSize
		true,   // shouldHaveCompressedSize
		'mbr',  // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

});
