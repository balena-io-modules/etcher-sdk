import 'mocha';
import { join } from 'path';

import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage  } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const BZ2_PATH = join(DATA_PATH, 'bz2');

describe('bzip2 support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	testImage(
		'bzip2 level 9',
		join(BZ2_PATH, 'etcher-test-9.img.bz2'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false,
		false,
		true,
		'mbr',
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

	testImage(
		'bzip2 level 1',
		join(BZ2_PATH, 'etcher-test.img.bz2'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false,
		false,
		true,
		'mbr',
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

});
