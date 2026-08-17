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

import { Transform } from 'stream';

import { CompressedSource } from './compressed-source';
import { SourceDestination } from './source-destination';
import { ZstdDecompressor, getZstdModule } from './zstd-decompressor';

const ZSTD_FRAMEHEADERSIZE_MAX = 18;

export class ZstdSource extends CompressedSource {
	public static readonly mimetype = 'application/zstd';

	protected createTransform(): Transform {
		return new ZstdDecompressor();
	}

	protected async getSize(): Promise<
		{ size: number; isEstimated: boolean } | undefined
	> {
		if (await this.source.canRead()) {
			const module = getZstdModule();
			const ptr = module._malloc(ZSTD_FRAMEHEADERSIZE_MAX);
			try {
				const { buffer, bytesRead } = await this.source.read(
					Buffer.allocUnsafe(ZSTD_FRAMEHEADERSIZE_MAX),
					0,
					ZSTD_FRAMEHEADERSIZE_MAX,
					0,
				);
				if (bytesRead > 0) {
					module.HEAPU8.set(buffer.subarray(0, bytesRead), ptr);
					// The wasm function returns a BigInt (unsigned long long);
					// Number() converts it and the -1/-2 sentinels safely.
					const frameContentSize = Number(
						module._ZSTD_getFrameContentSize(ptr, bytesRead),
					);
					// zstd CLI-produced single-segment frames store the content size
					// in the frame header. ZSTD_CONTENTSIZE_UNKNOWN is -1 and
					// ZSTD_CONTENTSIZE_ERROR is -2: fall back to the partition table.
					if (frameContentSize >= 0) {
						return { size: frameContentSize, isEstimated: false };
					}
				}
			} catch (error) {
				// Fall through to the partition table estimate.
			} finally {
				module._free(ptr);
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
