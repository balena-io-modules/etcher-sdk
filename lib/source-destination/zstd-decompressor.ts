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

import { Transform, TransformCallback } from 'stream';

import createZstdModule = require('../zstd/zstd.js');

type ZstdModule = createZstdModule.ZstdModule;

const ZSTD_FRAMEHEADERSIZE_MAX = 18;
// ZSTD_inBuffer and ZSTD_outBuffer are {u32 ptr, u32 size, u32 pos} on wasm32.
const STRUCT_SIZE = 12;

let zstdModule: ZstdModule | undefined;
export function getZstdModule(): ZstdModule {
	if (zstdModule === undefined) {
		zstdModule = createZstdModule();
	}
	return zstdModule;
}

/**
 * A Transform that streams zstd-compressed input through libzstd (compiled to
 * WASM) and emits the decompressed bytes. Used as the decompression stream
 * returned by ZstdSource.createTransform().
 *
 * The libzstd streaming API (ZSTD_decompressStream) is incremental: each call
 * consumes as much input as it can and fills the output buffer, returning 0
 * when a frame is complete. When the input is exhausted without error the
 * frame is complete, so there is no separate "flush with empty input" step
 * (that would loop forever waiting for a hypothetical next frame).
 */
export class ZstdDecompressor extends Transform {
	private readonly zstd: ZstdModule;
	private dstream = 0;
	private inPtr = 0;
	private outPtr = 0;
	private inBufPtr = 0;
	private outBufPtr = 0;
	private inCap = 0;
	private outCap = 0;
	private headerBuf = Buffer.alloc(0);
	private frameSize: number | undefined;
	private produced = 0;
	private sawMultipleFrames = false;
	private initialized = false;

	public constructor() {
		super();
		this.zstd = getZstdModule();
	}

	private init(): void {
		if (this.initialized) {
			return;
		}
		this.inCap = this.zstd._ZSTD_DStreamInSize();
		this.outCap = this.zstd._ZSTD_DStreamOutSize();
		this.dstream = this.zstd._ZSTD_createDStream();
		this.inPtr = this.zstd._malloc(this.inCap);
		this.outPtr = this.zstd._malloc(this.outCap);
		this.inBufPtr = this.zstd._malloc(STRUCT_SIZE);
		this.outBufPtr = this.zstd._malloc(STRUCT_SIZE);
		this.initialized = true;
	}

	private free(): void {
		if (!this.initialized) {
			return;
		}
		this.zstd._ZSTD_freeDStream(this.dstream);
		this.zstd._free(this.inPtr);
		this.zstd._free(this.outPtr);
		this.zstd._free(this.inBufPtr);
		this.zstd._free(this.outBufPtr);
		this.initialized = false;
	}

	public _transform(
		chunk: Buffer,
		_encoding: string,
		callback: TransformCallback,
	): void {
		try {
			this.init();
			this.accumulateHeader(chunk);
			this.decompress(chunk);
			callback();
		} catch (error) {
			this.free();
			callback(error);
		}
	}

	/**
	 * Feed-through copy of the first up-to-18 bytes (the zstd frame header),
	 * used to read the frame content size for truncation detection. The same
	 * bytes are also handed to the decoder normally.
	 */
	private accumulateHeader(chunk: Buffer): void {
		if (
			this.frameSize !== undefined ||
			this.headerBuf.length >= ZSTD_FRAMEHEADERSIZE_MAX
		) {
			return;
		}
		const take = Math.min(
			ZSTD_FRAMEHEADERSIZE_MAX - this.headerBuf.length,
			chunk.length,
		);
		this.headerBuf = Buffer.concat([this.headerBuf, chunk.subarray(0, take)]);
		if (this.headerBuf.length >= ZSTD_FRAMEHEADERSIZE_MAX) {
			this.frameSize = this.getFrameContentSize(this.headerBuf);
		}
	}

	private getFrameContentSize(header: Buffer): number | undefined {
		const ptr = this.zstd._malloc(header.length);
		try {
			this.zstd.HEAPU8.set(header, ptr);
			// The wasm function returns a BigInt (unsigned long long); Number()
			// converts it and the -1/-2 sentinels (ZSTD_CONTENTSIZE_UNKNOWN /
			// ZSTD_CONTENTSIZE_ERROR) safely.
			const size = Number(
				this.zstd._ZSTD_getFrameContentSize(ptr, header.length),
			);
			return size >= 0 ? size : undefined;
		} finally {
			this.zstd._free(ptr);
		}
	}

	private setBuffer(structPtr: number, ptr: number, size: number): void {
		const offset = structPtr >> 2;
		this.zstd.HEAPU32[offset] = ptr;
		this.zstd.HEAPU32[offset + 1] = size;
		this.zstd.HEAPU32[offset + 2] = 0;
	}

	private decompress(chunk: Buffer): void {
		let remaining = chunk;
		while (remaining.length > 0) {
			const n = Math.min(remaining.length, this.inCap);
			this.zstd.HEAPU8.set(remaining.subarray(0, n), this.inPtr);
			remaining = remaining.subarray(n);
			this.setBuffer(this.inBufPtr, this.inPtr, n);
			let prevInPos = -1;
			for (;;) {
				this.setBuffer(this.outBufPtr, this.outPtr, this.outCap);
				const ret = this.zstd._ZSTD_decompressStream(
					this.dstream,
					this.outBufPtr,
					this.inBufPtr,
				);
				const inPos = this.zstd.HEAPU32[(this.inBufPtr >> 2) + 2];
				const outPos = this.zstd.HEAPU32[(this.outBufPtr >> 2) + 2];
				if (this.zstd._ZSTD_isError(ret) !== 0) {
					throw new Error(`zstd decompression error: ${ret}`);
				}
				if (outPos > 0) {
					this.push(
						Buffer.from(
							this.zstd.HEAPU8.subarray(this.outPtr, this.outPtr + outPos),
						),
					);
					this.produced += outPos;
				}
				if (ret === 0 && inPos < n) {
					// A frame ended before the input was exhausted: this is a
					// concatenated multi-frame stream.
					this.sawMultipleFrames = true;
				}
				if (inPos >= n) {
					break;
				}
				if (outPos === 0 && inPos === prevInPos) {
					throw new Error('zstd decoder made no progress');
				}
				prevInPos = inPos;
			}
		}
	}

	public _flush(callback: TransformCallback): void {
		try {
			if (!this.initialized) {
				callback();
				return;
			}
			if (this.frameSize === undefined && this.headerBuf.length > 0) {
				this.frameSize = this.getFrameContentSize(this.headerBuf);
			}
			if (
				this.frameSize !== undefined &&
				!this.sawMultipleFrames &&
				this.produced !== this.frameSize
			) {
				throw new Error(
					`zstd stream truncated: got ${this.produced} bytes, expected ${this.frameSize}`,
				);
			}
			this.free();
			callback();
		} catch (error) {
			this.free();
			callback(error);
		}
	}

	public _destroy(
		error: Error | null,
		callback: (error?: Error | null) => void,
	): void {
		this.free();
		callback(error);
	}
}
