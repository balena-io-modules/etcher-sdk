import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');

describe('directory', function() {
	it('should be rejected with an error', async function() {
		const source = new sourceDestination.File(IMAGES_PATH, sourceDestination.File.OpenFlags.Read);
		try {
			const innerSource = await source.getInnerSource();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal('EISDIR: illegal operation on a directory, read');
			expect(error.code).to.equal('EISDIR');
			expect(error.errno).to.equal(-21);
		}
	});
});
