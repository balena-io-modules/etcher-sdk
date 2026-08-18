/*
 * Copyright 2026 balena.io
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
	getFrameContentSize,
	ZSTD_FRAMEHEADERSIZE_MAX,
	ZstdDecompressor,
} from '@balena/zstd-decompress-stream';
import { Transform } from 'stream';

import { CompressedSource } from './compressed-source';
import { SourceDestination } from './source-destination';

export class ZstdSource extends CompressedSource {
	public static readonly mimetype = 'application/zstd';

	protected createTransform(): Transform {
		return new ZstdDecompressor();
	}

	protected async getSize(): Promise<
		{ size: number; isEstimated: boolean } | undefined
	> {
		if (await this.source.canRead()) {
			try {
				const { buffer, bytesRead } = await this.source.read(
					Buffer.allocUnsafe(ZSTD_FRAMEHEADERSIZE_MAX),
					0,
					ZSTD_FRAMEHEADERSIZE_MAX,
					0,
				);
				// zstd CLI-produced single-segment frames store the content size
				// in the frame header; getFrameContentSize returns undefined for
				// multi-segment frames (ZSTD_CONTENTSIZE_UNKNOWN) or bad headers
				// (ZSTD_CONTENTSIZE_ERROR), in which case fall back to the
				// partition table estimate.
				const frameContentSize = getFrameContentSize(
					buffer.subarray(0, bytesRead),
				);
				if (frameContentSize !== undefined) {
					return { size: frameContentSize, isEstimated: false };
				}
			} catch (error) {
				// Fall through to the partition table estimate.
			}
		}
		const sizeFromPartitionTable = await this.getSizeFromPartitionTable();
		if (sizeFromPartitionTable !== undefined) {
			return { size: sizeFromPartitionTable, isEstimated: true };
		}
		return;
	}
}

SourceDestination.register(ZstdSource);
