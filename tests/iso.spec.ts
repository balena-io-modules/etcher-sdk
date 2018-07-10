import 'mocha';
import { join } from 'path';

import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage  } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');

describe('iso support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	testImage(
		'iso',
		join(IMAGES_PATH, 'etcher-test.iso'),
		join(IMAGES_PATH, 'etcher-test.iso'),
		true,  // alsoTestSparseStream
		true,  // shouldHaveSize
		false,   // shouldHaveCompressedSize
		'mbr',  // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

});
