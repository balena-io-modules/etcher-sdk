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
import 'mocha';
import { join } from 'path';

import { errors, sourceDestination } from '../lib';
import { streamToBuffer } from '../lib/utils';

const DATA_PATH = join(__dirname, 'data', 'nested');

describe('getInnerSource()', function() {
	for (const filename of ['data.img.zip', 'data.img.zip.gz.bz2.xz']) {
		it(`should work for ${filename}`, async function() {
			const source = new sourceDestination.File(
				join(DATA_PATH, filename),
				sourceDestination.File.OpenFlags.Read,
			);
			const innerSource = await source.getInnerSource();
			const metadata = await innerSource.getMetadata();
			const data = await streamToBuffer(await innerSource.createReadStream());
			await innerSource.close();
			expect(metadata.name).to.equal('data.img');
			expect(data.toString('utf8')).to.equal('some data\n');
		});
	}

	for (const filename of ['data.dmg.zip', 'data.dmg.zip.gz.bz2.xz']) {
		it(`should fail for ${filename}`, async function() {
			const source = new sourceDestination.File(
				join(DATA_PATH, filename),
				sourceDestination.File.OpenFlags.Read,
			);
			try {
				await source.getInnerSource();
				assert(false);
			} catch (error) {
				expect(error).to.be.an.instanceof(errors.NotCapable);
				expect(error.message).to.equal(
					'Can not read a DmgSource from a ZipSource.',
				);
			}
			await source.close();
		});
	}

	it(`should work for a raw image with a .dmg extension`, async function() {
		const filename = 'raw-image-not-a-dmg.dmg';
		const source = new sourceDestination.File(
			join(__dirname, 'data', 'images', filename),
			sourceDestination.File.OpenFlags.Read,
		);
		const innerSource = await source.getInnerSource();
		const metadata = await innerSource.getMetadata();
		const data = await streamToBuffer(await innerSource.createReadStream());
		await innerSource.close();
		expect(metadata.name).to.equal(filename);
		expect(innerSource).to.be.an.instanceof(sourceDestination.File);
		expect(data.toString('utf8')).to.equal('some data\n');
	});
});
