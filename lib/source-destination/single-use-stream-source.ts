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

import {
	CreateReadStreamOptions,
	CreateSparseReadStreamOptions,
	SourceDestination,
} from './source-destination';

import { Metadata } from './metadata';
import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';
import { SparseReadable } from '../sparse-stream/shared';

export class SingleUseStreamSource extends SourceDestination {
	private used = false;

	constructor(private stream: NodeJS.ReadableStream, private sparse = false, private $metadata: Metadata = {}) {
		super();
	}

	protected async _getMetadata() {
		return this.$metadata;
	}

	public async canCreateReadStream(): Promise<boolean> {
		return !this.used && !this.sparse;
	}

	public async canCreateSparseReadStream(): Promise<boolean> {
		return !this.used && this.sparse;
	}

	public async createReadStream({
		start = 0,
		end,
	}: CreateReadStreamOptions = {}): Promise<NodeJS.ReadableStream> {
		if (this.used) {
			throw new NotCapable('Single use source stream already used');
		}
		if (start !== 0) {
			throw new NotCapable("Can't seek in a single use stream");
		}
		let stream = this.stream;
		if (end !== undefined) {
			stream = new StreamLimiter(stream, end + 1);
		}
		this.used = true;
		return stream;
	}

	public async createSparseReadStream(
		_options: CreateSparseReadStreamOptions = {},
	): Promise<SparseReadable> {
		return this.stream as SparseReadable;
	}
}
