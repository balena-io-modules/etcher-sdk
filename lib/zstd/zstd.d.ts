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

/*
 * Typings for the generated libzstd WASM module (lib/zstd/zstd.js), built by
 * build-scripts/build-zstd/build.sh. The module exposes the low-level zstd
 * streaming decompression API: ZSTD_createDStream / ZSTD_decompressStream /
 * ZSTD_freeDStream, plus helpers for error checking and size estimation.
 */
declare function createZstdModule(): createZstdModule.ZstdModule;

declare namespace createZstdModule {
	export interface ZstdModule {
		HEAPU8: Uint8Array;
		HEAPU32: Uint32Array;
		_malloc(size: number): number;
		_free(ptr: number): void;
		_ZSTD_createDStream(): number;
		_ZSTD_decompressStream(dstream: number, out: number, inp: number): number;
		_ZSTD_freeDStream(dstream: number): number;
		_ZSTD_isError(code: number): number;
		// Typed as number for TS es2018 compatibility; at runtime this returns
		// a BigInt (unsigned long long), which Number() converts safely.
		_ZSTD_getFrameContentSize(src: number, srcSize: number): number;
		_ZSTD_DStreamInSize(): number;
		_ZSTD_DStreamOutSize(): number;
	}
}

export = createZstdModule;
