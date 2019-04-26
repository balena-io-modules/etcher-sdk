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

import { parse } from 'blockmap';
import 'mocha';
import { outdent } from 'outdent';
import { join } from 'path';

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
			<bmap version="2.0">
			    <ImageSize> 5242880 </ImageSize>
			    <BlockSize> 4096 </BlockSize>
			    <BlocksCount> 1280 </BlocksCount>
			    <MappedBlocksCount> 21   </MappedBlocksCount>
			    <ChecksumType> sha256 </ChecksumType>
			    <BmapFileChecksum> d053dda8082cd20a4867b716143dd76295b60a63be92fdfb5b2e1666243ae3b7 </BmapFileChecksum>
			    <BlockMap>
			        <Range chksum="ce55029ab3dd4875edbf69fcc5d1942bb2abaf2cf88b87ae7016609b3feb5028"> 0-3 </Range>
			        <Range chksum="2d4be254f0330b3f01f89bc2dc2a1c69c8e0a196810bf3398cc5bb234ba6dd26"> 16-23 </Range>
			        <Range chksum="5729edacf57e5785d73831d666b07009692a870159327a43366a788cd9fb5cd7"> 272-279 </Range>
			        <Range chksum="ad7facb2586fc6e966c004d7d1d16b024f5805ff7cb47c7a85dabd8b48892ca7"> 1279 </Range>
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
