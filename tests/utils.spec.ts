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
