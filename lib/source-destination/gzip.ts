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

import { Transform } from 'stream';
import { createGunzip } from 'zlib';

import { SourceDestination } from './source-destination';
import { CompressedSource } from './compressed-source';

const ISIZE_LENGTH = 4;

export class GZipSource extends CompressedSource {
	static readonly mimetype = 'application/gzip';
	isSizeEstimated = true;

	protected createTransform(): Transform {
		return createGunzip();
	}

	protected async getSize(): Promise<number | undefined> {
		if (await this.source.canRead()) {
			const sourceMetadata = await this.source.getMetadata();
			if (sourceMetadata.size !== undefined) {
				const { buffer } = await this.source.read(
					Buffer.allocUnsafe(ISIZE_LENGTH),
					0,
					ISIZE_LENGTH,
					sourceMetadata.size - ISIZE_LENGTH,
				);
				return buffer.readUInt32LE(0);
			}
		}
	}
}

SourceDestination.register(GZipSource);
