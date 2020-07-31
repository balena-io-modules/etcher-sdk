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

import { sourceDestination } from '../lib';

describe('SourceDestination.imageExtensions', () => {
	it('should be an array', () => {
		assert(Array.isArray(sourceDestination.SourceDestination.imageExtensions));
	});

	it('should not be empty', () => {
		assert(sourceDestination.SourceDestination.imageExtensions.length > 0);
	});

	it('should contain only strings', () => {
		assert(
			sourceDestination.SourceDestination.imageExtensions.every((extension) => {
				return typeof extension === 'string';
			}),
		);
	});

	it('should not contain empty strings', () => {
		assert(
			sourceDestination.SourceDestination.imageExtensions.every((extension) => {
				return extension.length > 0;
			}),
		);
	});

	it('should not contain a leading period in any file type extension', () => {
		assert(
			sourceDestination.SourceDestination.imageExtensions.every((extension) => {
				return extension[0] !== '.';
			}),
		);
	});
});
