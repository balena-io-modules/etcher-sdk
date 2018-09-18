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
import { every, first, isArray, isEmpty, isString, map } from 'lodash';
import 'mocha';

import { sourceDestination } from '../lib';

describe('SourceDestination.imageExtensions', function() {
	it('should be an array', function() {
		expect(isArray(sourceDestination.SourceDestination.imageExtensions)).to.be
			.true;
	});

	it('should not be empty', function() {
		expect(isEmpty(sourceDestination.SourceDestination.imageExtensions)).to.be
			.false;
	});

	it('should contain only strings', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(
					extension,
				) {
					return isString(extension);
				}),
			),
		).to.be.true;
	});

	it('should not contain empty strings', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(
					extension,
				) {
					return !isEmpty(extension);
				}),
			),
		).to.be.true;
	});

	it('should not contain a leading period in any file type extension', function() {
		expect(
			every(
				map(sourceDestination.SourceDestination.imageExtensions, function(
					extension,
				) {
					return first(extension) !== '.';
				}),
			),
		).to.be.true;
	});
});
