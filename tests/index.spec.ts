import { expect } from 'chai';
import { every, first, isArray, isEmpty, isString, map } from 'lodash';
import 'mocha';

import { sourceDestination } from '../lib';

describe('SourceDestination.imageExtensions', function() {
	it('should be an array', function() {
		expect(isArray(sourceDestination.SourceDestination.imageExtensions)).to.be.true;
	});

	it('should not be empty', function() {
		expect(isEmpty(sourceDestination.SourceDestination.imageExtensions)).to.be.false;
	});

	it('should contain only strings', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(extension) {
					return isString(extension);
				}),
			),
		).to.be.true;
	});

	it('should not contain empty strings', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(extension) {
					return !isEmpty(extension);
				}),
			),
		).to.be.true;
	});

	it('should not contain a leading period in any file type extension', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(extension) {
					return first(extension) !== '.';
				}),
			),
		).to.be.true;
	});
});
