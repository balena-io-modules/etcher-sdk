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

import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');

describe('directory', function() {
	it('should be rejected with an error', async function() {
		const source = new sourceDestination.File(
			IMAGES_PATH,
			sourceDestination.File.OpenFlags.Read,
		);
		try {
			const innerSource = await source.getInnerSource();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal(
				'EISDIR: illegal operation on a directory, read',
			);
			expect(error.code).to.equal('EISDIR');
		}
	});
});
