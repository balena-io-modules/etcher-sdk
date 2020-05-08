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
import { createGunzip } from 'zlib';

import { CompressedSource } from './compressed-source';
import { SourceDestination } from './source-destination';

const ISIZE_LENGTH = 4;

export class GZipSource extends CompressedSource {
	public static readonly mimetype = 'application/gzip';

	protected createTransform(): Transform {
		return createGunzip();
	}

	protected async getSize(): Promise<
		{ size: number; isEstimated: true } | undefined
	> {
		const sizeFromPartitionTable = await this.getSizeFromPartitionTable();
		if (await this.source.canRead()) {
			const sourceMetadata = await this.source.getMetadata();
			if (sourceMetadata.size !== undefined) {
				const { buffer } = await this.source.read(
					Buffer.allocUnsafe(ISIZE_LENGTH),
					0,
					ISIZE_LENGTH,
					sourceMetadata.size - ISIZE_LENGTH,
				);
				const sizeFromFooter = buffer.readUInt32LE(0);
				// The size from the gzip footer can't be larger than 4GiB (it is stored in 4 bytes)
				// Use the size from the partition table is it is larger (and available)
				return {
					size: Math.max(sizeFromFooter, sizeFromPartitionTable || 0),
					isEstimated: true,
				};
			}
		} else if (sizeFromPartitionTable !== undefined) {
			return { size: sizeFromPartitionTable, isEstimated: true };
		}
	}
}

SourceDestination.register(GZipSource);
