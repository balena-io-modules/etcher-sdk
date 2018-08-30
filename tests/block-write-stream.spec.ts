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
import { using } from 'bluebird';
import { expect } from 'chai';
import { randomBytes as randomBytesNode } from 'crypto';
import * as os from 'os';
import { join } from 'path';
import { spy, stub } from 'sinon';
import { Readable } from 'stream';

import { BlockWriteStream, CHUNK_SIZE as BLOCK_WRITE_STREAM_CHUNK_SIZE } from '../lib/block-write-stream';
import { DestinationSparseWriteStream } from '../lib/destination-sparse-write-stream';
import { BlockDevice } from '../lib/source-destination/block-device';
import * as diskpart from '../lib/diskpart';
import { readFile } from '../lib/fs';
import { tmpFileDisposer, TmpFileResult } from '../lib/tmp';
import { blockDeviceFromFile, DEFAULT_IMAGE_TESTS_TIMEOUT } from './tester';

async function randomBytes(size: number): Promise<Buffer> {
	return await new Promise((resolve: (stats: Buffer) => void, reject: (err: Error) => void) => {
		randomBytesNode(size, (err: Error, buffer: Buffer) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(buffer);
		});
	});
}

function* bufferChunks(buffer: Buffer, chunkSize: number) {
	for (let position = 0; position < buffer.length; position += chunkSize) {
		const slice = buffer.slice(position, position + chunkSize);
		yield { position, buffer: slice, length: slice.length };
	}
}

function bufferToStream(stream: Readable, buffer: Buffer, chunkSize: number): void {
	for (const chunk of bufferChunks(buffer, chunkSize)) {
		stream.push(chunk.buffer);
	}
	stream.push(null);
}

function bufferToSparseStream(stream: Readable, buffer: Buffer, chunkSize: number): void {
	for (const chunk of bufferChunks(buffer, chunkSize)) {
		stream.push(chunk);
	}
	stream.push(null);
}

async function expectFileToContain(path: string, data: Buffer): Promise<void> {
	const fileData = await readFile(path);
	expect(fileData.slice(0, data.length)).to.deep.equal(data);
}

describe('block-write-stream', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);
	const SIZE = BLOCK_WRITE_STREAM_CHUNK_SIZE + 7;
	const CHUNK_SIZE = 512;

	async function testBlockWriteStream(size: number, chunkSize: number, sparse = false): Promise<void> {
		const data = await randomBytes(size);
		const input = new Readable({ objectMode: sparse });
		await using(tmpFileDisposer(false), async (file: TmpFileResult) => {
			const destination = await blockDeviceFromFile(file.path);
			await destination.open();
			let output: BlockWriteStream | DestinationSparseWriteStream;
			if (sparse) {
				output = await destination.createSparseWriteStream();
			} else {
				output = await destination.createWriteStream();
			}
			spy(destination, 'write');
			await new Promise((resolve, reject) => {
				output.on('finish', resolve);
				output.on('error', reject);
				input.pipe(output);
				if (sparse) {
					bufferToSparseStream(input, data, chunkSize);
				} else {
					bufferToStream(input, data, chunkSize);
				}
			});
			// Check that the first bytes are written last on windows.
			// ts-ignores are for accessing getCall() which is added by the spy() above.
			if (os.platform() === 'win32') {
				expect(output.firstBytesToKeep).to.not.equal(0);
				// @ts-ignore
				expect(destination.write.getCall(0).args[3]).to.equal(output.firstBytesToKeep);
				const chunkSize = sparse ? CHUNK_SIZE : BLOCK_WRITE_STREAM_CHUNK_SIZE;
				const callNumber = Math.floor((SIZE - output.firstBytesToKeep) / chunkSize) + 1;
				// @ts-ignore
				expect(destination.write.getCall(callNumber).args[3]).to.equal(0);
			} else {
				// @ts-ignore
				expect(destination.write.getCall(0).args[3]).to.equal(0);
				// @ts-ignore
				expect(destination.write.getCall(1).args[3]).to.equal(sparse ? CHUNK_SIZE : BLOCK_WRITE_STREAM_CHUNK_SIZE );
			}
			expect(output.bytesWritten).to.equal(size);
			await destination.close();
			await expectFileToContain(file.path, data);
		});
	}

	describe('win32', function() {
		before(function() {
			this.osPlatformStub = stub(os, 'platform');
			this.osPlatformStub.returns('win32');
			this.diskpartCleanStub = stub(diskpart, 'clean');
		});

		after(function() {
			this.osPlatformStub.restore();
			this.diskpartCleanStub.restore();
		});

		it('should write the correct bytes', testBlockWriteStream.bind(null, SIZE, CHUNK_SIZE));
		it('should write the correct bytes sparse', testBlockWriteStream.bind(null, SIZE, CHUNK_SIZE, true));
	});

	describe('linux', function() {
		before(function() {
			this.osPlatformStub = stub(os, 'platform');
			this.osPlatformStub.returns('linux');
		});

		after(function() {
			this.osPlatformStub.restore();
		});

		it('should write the correct bytes', testBlockWriteStream.bind(null, SIZE, CHUNK_SIZE));
		it('should write the correct bytes sparse', testBlockWriteStream.bind(null, SIZE, CHUNK_SIZE, true));
	});

});
