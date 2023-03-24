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
import Bzip2 from "@foxglove/wasm-bz2";

import { CompressedSource } from './compressed-source';
import { SourceDestination } from './source-destination';


export class BZip2Source extends CompressedSource {
	public static readonly mimetype = 'application/x-bzip2';

	protected async createTransform(): Promise<Transform> {
		const bzip2 = await Bzip2.init();
		return new Transform({
			transform(chunk: Buffer, _, callback) {
				const maxSize = 10000 * chunk.length;
				const decompressed = bzip2.decompress(chunk, maxSize, { small: false });
				this.push(decompressed);
				callback();
			},
		});
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

SourceDestination.register(BZip2Source);
