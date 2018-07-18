/*
 * Copyright 2018 resin.io
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
