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

import { expect } from 'chai';
import 'mocha';
import { Readable } from 'stream';

import { streamToBuffer } from '../lib/utils';

describe('utils', function() {
	describe('streamToBuffer', function() {
		describe('given a stream that emits data', function() {
			beforeEach(function() {
				this.stream = new Readable();
				this.stream._read = function() {
					this.push(Buffer.from('Hello', 'utf8'));
					this.push(Buffer.from(' ', 'utf8'));
					this.push(Buffer.from('World', 'utf8'));
					this.push(null);
				};
			});

			it('should yield the stream data', async function() {
				const data = await streamToBuffer(this.stream);
				expect(data.toString()).to.equal('Hello World');
			});
		});

		describe('given a stream that throws an error', function() {
			beforeEach(function() {
				this.stream = new Readable();
				this.stream._read = function() {
					this.emit('error', new Error('stream error'));
				};
			});

			it('should be rejected with the error', async function() {
				try {
					const data = await streamToBuffer(this.stream);
				} catch (error) {
					expect(error).to.be.an.instanceof(Error);
					expect(error.message).to.equal('stream error');
					return;
				}
				expect(false).to.equal(true);
			});
		});
	});
});
