/*
 * Copyright 2026 balena.io
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

import { expect } from 'chai';
import { promises as fs } from 'fs';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { ZstdDecompressor } from '../lib/source-destination/zstd-decompressor';
import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const ZST_PATH = join(DATA_PATH, 'zst');

describe('zstd support', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	testImage(
		'zstd support',
		join(ZST_PATH, 'etcher-test.img.zst'),
		join(IMAGES_PATH, 'etcher-test.img'),
		false, // alsoTestSparseStream
		true, // shouldHaveSize
		true, // shouldHaveCompressedSize
		'mbr', // partitionTableType
		join(IMAGES_PATH, 'etcher-test-partitions.json'), // partitionsFile
		{ isSizeEstimated: false },
	);
});

describe('zstd name stripping', function () {
	it('strips a .zstd extension from the source name', async function () {
		const source = new sourceDestination.File({
			path: join(ZST_PATH, 'etcher-test.img.zstd'),
		});
		const innerSource = await source.getInnerSource();
		const metadata = await innerSource.getMetadata();
		await innerSource.close();
		expect(metadata.name).to.equal('etcher-test.img');
	});
});

describe('zstd transform', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	it('decompresses when fed one byte at a time', async function () {
		const compressed = await fs.readFile(
			join(ZST_PATH, 'etcher-test.img.zst'),
		);
		const expected = await fs.readFile(join(IMAGES_PATH, 'etcher-test.img'));
		const transform = new ZstdDecompressor();
		const chunks: Buffer[] = [];
		transform.on('data', (chunk: Buffer) => chunks.push(chunk));
		await new Promise<void>((resolve, reject) => {
			transform.on('end', () => resolve());
			transform.on('error', reject);
			for (const byte of compressed) {
				transform.write(Buffer.from([byte]));
			}
			transform.end();
		});
		expect(Buffer.concat(chunks)).to.deep.equal(expected);
	});

	it('errors on a truncated stream', async function () {
		const compressed = await fs.readFile(
			join(ZST_PATH, 'etcher-test.img.zst'),
		);
		const transform = new ZstdDecompressor();
		let error: Error | undefined;
		// Consume the readable side: without a consumer the transform's output
		// buffer fills and the pipeline stalls before _flush runs.
		transform.on('data', () => undefined);
		await new Promise<void>((resolve) => {
			transform.on('error', (err: Error) => {
				error = err;
				resolve();
			});
			transform.on('end', () => resolve());
			transform.write(compressed.subarray(0, compressed.length - 24));
			transform.end();
		});
		expect(error).to.be.an('Error');
		expect(error!.message).to.match(/truncated/);
	});

	it('decompresses concatenated multi-frame streams', async function () {
		const compressed = await fs.readFile(
			join(ZST_PATH, 'multi-frame.zst'),
		);
		const expected = Buffer.from(
			'hello world from frame one! and here is frame two.',
		);
		const transform = new ZstdDecompressor();
		const chunks: Buffer[] = [];
		transform.on('data', (chunk: Buffer) => chunks.push(chunk));
		await new Promise<void>((resolve, reject) => {
			transform.on('end', () => resolve());
			transform.on('error', reject);
			transform.write(compressed);
			transform.end();
		});
		expect(Buffer.concat(chunks)).to.deep.equal(expected);
	});
});
