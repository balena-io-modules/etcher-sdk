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

import * as assert from 'assert';
import { expect } from 'chai';
import { createReadStream } from 'fs';
import 'mocha';
import { join } from 'path';

import { errors, multiWrite, sourceDestination } from '../lib';
import { withTmpFile } from '../lib/tmp';
import { DEFAULT_IMAGE_TESTS_TIMEOUT } from './tester';

const DATA_PATH = join(__dirname, 'data');
const ZIP_PATH = join(DATA_PATH, 'zip');

describe('zip in a single use stream source', function () {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	it('should be able to read an image from a zip file from a stream', async () => {
		const fsStream = createReadStream(
			join(ZIP_PATH, 'zip-directory-etcher-test-only.zip'),
		);
		const source = new sourceDestination.ZipSource(
			new sourceDestination.SingleUseStreamSource(fsStream),
		);
		const metadata = await source.getMetadata();
		expect(metadata).to.deep.equal({
			compressedSize: 7791,
			name: 'etcher-test.img',
			size: 5242880,
			isCompressed: true,
		});
		const progressEvents: sourceDestination.ProgressEvent[] = [];
		await withTmpFile({ keepOpen: false }, async (file) => {
			await multiWrite.pipeSourceToDestinations({
				source,
				destinations: [
					new sourceDestination.File({ path: file.path, write: true }),
				],
				onFail: (
					_destination: sourceDestination.SourceDestination,
					_error: Error,
				) => {
					assert(false);
				},
				onProgress: (progress: multiWrite.MultiDestinationProgress) => {
					progressEvents.push(progress);
				},
				verify: true,
			});
		});
		expect(progressEvents.length).to.be.at.least(2);
		try {
			await source.createReadStream();
			assert(false);
		} catch (error) {
			expect(error).to.be.an.instanceof(errors.NotCapable);
		}
	});
});
