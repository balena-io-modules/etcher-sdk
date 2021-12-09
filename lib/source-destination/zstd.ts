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

import { Transform } from 'stream';
import fzstd = require('fzstd');

import { CompressedSource } from './compressed-source';
import { SourceDestination } from './source-destination';

class unzstdStream extends Transform {
	private prevInput: any = null;
	private stream: fzstd.Decompress;

	constructor(options?: any) {
		super(options);
		
		this.stream = new fzstd.Decompress((chunk: any, _isLast: boolean) => {
			this.push(chunk);
		});
	}
	
	_transform(chunk: any, _encoding: string, next: Function) {
		if (this.prevInput)
			this.stream.push(this.prevInput);
		this.prevInput = chunk;
		process.nextTick(next);
	}

	_flush(next: Function) {
		if (!this.prevInput)
			return;
		this.stream.push(this.prevInput, true);
		next();
	}
}

export class ZStdSource extends CompressedSource {
	public static readonly mimetype = 'application/zstd';

	protected createTransform(): Transform {
		return new unzstdStream();
	}

	protected async getSize(): Promise<
		{ size: number; isEstimated: true } | undefined
	> {
		const size = await this.getSizeFromPartitionTable();
		if (size !== undefined) {
			return { size, isEstimated: true };
		}
	}
}

SourceDestination.register(ZStdSource);
