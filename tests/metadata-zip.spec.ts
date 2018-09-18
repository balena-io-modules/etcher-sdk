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

import { parse } from 'blockmap';
import { expect } from 'chai';
import 'mocha';
import { outdent } from 'outdent';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { expectGetInnerSourceError, testImage } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const ZIP_PATH = join(DATA_PATH, 'metadata', 'zip');

describe('metadata zip', function() {
	this.timeout(10000);

	expectGetInnerSourceError(
		'given an archive with an invalid `manifest.json`',
		join(ZIP_PATH, 'etcher-test-invalid-manifest.zip'),
		'Invalid archive manifest.json',
	);

	testImage(
		'given an archive with a `manifest.json`',
		join(ZIP_PATH, 'etcher-test-with-manifest.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{
			name: 'Etcher Test',
			version: '1.0.0',
			url: 'https://www.example.com',
			supportUrl: 'https://www.example.com/support/',
			releaseNotesUrl: 'http://downloads.example.com/release_notes.txt',
			checksumType: 'md5',
			checksum: 'add060b285d512f56c175b76b7ef1bee',
			bytesToZeroOutFromTheBeginning: 512,
			recommendedDriveSize: 4294967296,
		},
	);

	testImage(
		'given an archive with a `logo.svg`',
		join(ZIP_PATH, 'etcher-test-with-logo.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{
			logo: outdent`
				<svg xmlns="http://www.w3.org/2000/svg">
				  <text>Hello World</text>
				</svg>

			`,
		},
	);

	const blockMap = parse(
		outdent`
			<?xml version="1.0" ?>
			<bmap version="1.3">
			    <ImageSize> 5242880 </ImageSize>
			    <BlockSize> 4096 </BlockSize>
			    <BlocksCount> 1280 </BlocksCount>
			    <MappedBlocksCount> 1280 </MappedBlocksCount>
			    <BmapFileSHA1> cc6f077565c73a46198777b259c231875df4e709 </BmapFileSHA1>
			    <BlockMap>
			        <Range sha1="7b7d6e1fc44ef224a8c57d3ec6ffc3717c428a14"> 0-1280 </Range>
			    </BlockMap>
			</bmap>

		`,
	);
	testImage(
		'given an archive with a bmap file',
		join(ZIP_PATH, 'etcher-test-with-bmap.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		true, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{ blockMap },
	);

	testImage(
		'given an archive with instructions',
		join(ZIP_PATH, 'etcher-test-with-instructions.zip'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		7791, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{
			instructions: outdent`
				# Example Next Steps

				Lorem ipsum dolor sit amet.

			`,
		},
	);
});
