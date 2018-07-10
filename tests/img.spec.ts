import { createReadStream, createWriteStream } from 'fs';
import 'mocha';
import { join } from 'path';
import { createGunzip } from 'zlib';

import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage, testImageNoIt  } from './tester';

import { unlink } from '../lib/fs';
import { tmpFile } from '../lib/tmp';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');

describe('img', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);
	let gunzippedFilePath: string | undefined;

	before(async function() {
		gunzippedFilePath = (await tmpFile(false)).path;
		await new Promise((resolve, reject) => {
			const source = createReadStream(join(IMAGES_PATH, 'etcher-gpt-test.img.gz'));
			const gunzip = createGunzip();
			const destination = createWriteStream(gunzippedFilePath as string);
			source.pipe(gunzip).pipe(destination);
			destination.on('close', resolve);
			source.on('error', reject);
			gunzip.on('error', reject);
			destination.on('error', reject);
		});
	});

	after(async function() {
		await unlink(gunzippedFilePath as string);
	});

	testImage(
		'mbr',
		join(IMAGES_PATH, 'etcher-test.img'),
		join(IMAGES_PATH, 'etcher-test.img'),
		true,  // alsoTestSparseStream
		true,  // shouldHaveSize
		false,   // shouldHaveCompressedSize
		'mbr',  // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
	);

	it('gpt', async function() {
		await testImageNoIt(
			join(IMAGES_PATH, 'etcher-gpt-test.img.gz'),
			// @ts-ignore
			gunzippedFilePath,
			true,  // alsoTestSparseStream
			true,  // shouldHaveSize
			false,   // shouldHaveCompressedSize
			'gpt',  // partitionTableType
			join(IMAGES_PATH, 'etcher-gpt-test-partitions.json'),  // partitionsFile
		);
	});
});
