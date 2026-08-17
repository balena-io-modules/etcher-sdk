# zstd support

etcher-sdk can decompress zstd-compressed images (`.zst` / `.zstd`) on the fly,
using a **streaming WASM build of libzstd**. This is a companion to the existing
gzip / bzip2 / xz / zip sources: a `ZstdSource extends CompressedSource`
following the exact same pattern as `GZipSource`, `BZip2Source` and `XzSource`.

## Why WASM?

| Option | Why rejected |
|---|---|
| `@mongodb-js/zstd` | One-shot `decompress(buffer)` only — no streaming. Multi-GB images can't be buffered in RAM, and it's native-only (no WASM build). |
| `fzstd` (pure JS) | Works, but ~100–300 MB/s vs near-native for WASM. |
| `zstd-wasm` (npm) | Abandoned (last publish 2021, dead repo). |
| Native binding | node-gyp / electron-rebuild burden across Windows/macOS/Linux. |

A WASM build gives near-native decompression speed (SIMD) with **zero native
packaging** — the decoder is just a `.js` asset. The wasm runs identically on
Windows, macOS and Linux.

## Architecture

- `lib/source-destination/zstd.ts` — `ZstdSource extends CompressedSource`.
  - `static mimetype = 'application/zstd'` — detection is **free**: the
    existing `file-type@16` sniffs the zstd magic `28 B5 2F FD` and returns
    `application/zstd`, which `getInnerSource()` maps to this class via
    `SourceDestination.register(ZstdSource)`.
  - `createTransform()` returns a `ZstdDecompressor`.
  - `getSize()` reads the frame header and calls `ZSTD_getFrameContentSize`:
    single-segment frames (what the `zstd` CLI produces for a known-size input)
    store the content size, giving an **exact** size with
    `isEstimated: false`; otherwise it falls back to partition-table analysis
    (`isEstimated: true`), like bzip2.
- `lib/source-destination/zstd-decompressor.ts` — `ZstdDecompressor extends
  Transform`, the streaming glue over the wasm module.
- `lib/zstd/zstd.js` — the generated module (committed; see build process).
- `lib/zstd/zstd.d.ts` — hand-written typings for it.
- `build-scripts/build-zstd/build.sh` — regenerates the module.
- `build-scripts/copy-zstd-assets.js` — copies it into `build/` after `tsc`
  (tsc does not copy non-TS assets; `build/` is what npm publishes).

## The streaming decoder

`ZSTD_decompressStream` is incremental: each call consumes as much input as it
can into a fixed output buffer (128 KB, `ZSTD_DStreamOutSize()`) and returns
`0` when a frame is complete. `ZstdDecompressor` feeds each incoming chunk
through the loop:

```
copy chunk → wasm heap (ZSTD_DStreamInSize() buffer)
set ZSTD_inBuffer {ptr, n, 0} and ZSTD_outBuffer {ptr, cap, 0} via HEAPU32
loop ZSTD_decompressStream(dstream, out, in):
  check ZSTD_isError
  push produced bytes (HEAPU8.subarray)
  reset out.pos
  break when in.pos >= n
```

Notes:
- The wasm module loads **synchronously** (`createZstdModule()` returns the
  instance directly — `WASM_ASYNC_COMPILATION=0`), so there is no promise
  plumbing in `_transform`.
- `_destroy` frees the `DStream` and wasm buffers — required because
  `CompressedSource.createReadStream` wraps the transform in a `StreamLimiter`
  (e.g. for partition-table reads of 34×512 bytes) that destroys it early.
- A `no-progress` guard throws if a call produces no output and consumes no
  input, protecting against pathological frames.

### Truncation detection

A truncated zstd stream **silently** produces partial output with no error, so
we detect it explicitly: the first ≤18 bytes (the frame header) are copied
aside, `ZSTD_getFrameContentSize` reads the stored content size, and `_flush`
compares it against the total produced bytes. If they differ (and the stream
was a single frame — concatenated multi-frame streams are detected via a frame
completing before the input is exhausted) the stream errors with a
"truncated" message instead of flashing corrupt data.

### The one design gotcha worth knowing

There is **no "flush with empty input"** step. After a frame completes,
calling `ZSTD_decompressStream` with an empty input returns a positive
"suggested next input" hint (for a potential next frame) forever — waiting for
`ret === 0` with empty input loops indefinitely. Input-exhausted-without-error
*is* frame completion; truncation is caught by the content-size check above.

## Build process

The module is compiled with Emscripten inside Docker (no local toolchain
needed; the script works with either an in-distro `docker` or Docker Desktop's
Windows engine via `DOCKER=docker.exe`):

```sh
./build-scripts/build-zstd/build.sh
```

This downloads a pinned libzstd release (v1.5.6) inside the container and runs:

```
emcc -O3 -msimd128 \
  -s WASM=1 -s MODULARIZE=1 -s EXPORT_NAME=createZstdModule \
  -s ENVIRONMENT=node -s SINGLE_FILE=1 -s WASM_ASYNC_COMPILATION=0 \
  -s ALLOW_MEMORY_GROWTH=1 -s INITIAL_MEMORY=33554432 -s WASM_BIGINT=1 \
  -s EXPORTED_FUNCTIONS="_malloc _free _ZSTD_createDStream _ZSTD_decompressStream _ZSTD_freeDStream _ZSTD_isError _ZSTD_getFrameContentSize _ZSTD_DStreamInSize _ZSTD_DStreamOutSize" \
  -I . common/*.c decompress/*.c -o zstd.js
```

Why these flags:
- `SINGLE_FILE=1` — the wasm is base64-embedded, so the package ships **one**
  self-contained CJS file: no `.wasm` path resolution, no webpack asset
  handling (the etcher GUI bundles etcher-sdk through webpack). **Do not** move
  to a separate `.wasm` without a `locateFile` + asset-copy plan.
- Decompress-only sources (`lib/common/*.c` + `lib/decompress/*.c`) keep the
  blob small (~108 KB).
- `WASM_BIGINT=1` makes `ZSTD_getFrameContentSize` return a BigInt; the glue
  converts with `Number()` (typed as `number` in `zstd.d.ts` for es2018
  compatibility). Missing this causes BigInts to leak into sizes and silently
  break comparisons.

The generated `lib/zstd/zstd.js` is **committed** (ts-node runs tests directly
against `lib/`) and excluded from lint in `.eslintrc.js`.

## Tests

`tests/zstd.spec.ts` + committed fixtures in `tests/data/zst/`:

- `etcher-test.img.zst` — full integration via `testImage()` (File **and**
  BlockDevice), asserting exact size (`isSizeEstimated: false`), MBR partition
  table, and byte-identical output.
- `etcher-test.img.zstd` — same bytes under the `.zstd` name, proving name
  stripping works for both extensions.
- `multi-frame.zst` — two concatenated frames, proving the decoder transitions
  between frames without a false truncation error.
- Unit tests: byte-by-byte chunk feeding, truncation error, name stripping.

Fixtures were generated with the real `zstd` CLI (`zstd -f`) inside a Docker
Alpine container — single-segment frames that store content size.

## GUI integration

The etcher repo adds `zst` and `zstd` to `SUPPORTED_EXTENSIONS` in
`lib/shared/supported-formats.ts`, which drives the Electron file-open dialog
filter. No renderer-side validation changes (decompression/format support lives
entirely in etcher-sdk; detection is content-based).

## Building the Etcher app with zstd

etcher pins `etcher-sdk` from npm, so a local build of the app needs the
zstd-enabled SDK injected first:

```sh
# 1. build + publish the local SDK
cd etcher-sdk
npm run build
npx yalc publish

# 2. build the app
cd ../etcher
npm install
npx yalc add etcher-sdk      # overrides node_modules/etcher-sdk
npm run package               # unpacked app (fastest way to try it)
npm run make                  # installers (deb/rpm/zip/squirrel per platform)
npx yalc remove etcher-sdk    # revert when done
```

### Windows

The zstd decoder is WASM, so etcher-sdk itself is fully cross-platform — the
`npm pack` tarball installs and works on Windows. The **app installer**,
however, must be built **on Windows**: the flashing sidecar is built with `pkg`
for the host platform and bundles native modules (`usb`, `drivelist`,
`lzma-native`, `mountutils`, …) that are compiled per-platform, and the
Squirrel.Windows installer maker needs Windows. Running the same `npm run make`
on a Windows machine produces the `balenaEtcher-<version> Setup.exe` installer
with zstd support.

## Verification

```sh
npm run build   # tsc + copies the zstd asset into build/
npm test        # balena-lint + tsc --noEmit + mocha (all specs)
```

Manual byte-level check:

```sh
node -e "
const { sourceDestination } = require('./build');
(async () => {
  const src = new sourceDestination.File({ path: 'tests/data/zst/etcher-test.img.zst' });
  const inner = await src.getInnerSource();
  console.log(await inner.getMetadata());
  // -> { isCompressed: true, name: 'etcher-test.img', size: 5242880, ... }
  const stream = await inner.createReadStream();
  const out = Buffer.concat([]); // consume stream
  // compare out to the uncompressed image
})();
"
```

To verify in the etcher GUI against a local sdk build (etcher pins
`etcher-sdk: "10.0.0"` from npm; the repo already ignores `.yalc`):

```sh
cd etcher-sdk && npm run build && npx yalc publish
cd etcher && npx yalc add etcher-sdk && npm start
cd etcher && npx yalc remove etcher-sdk   # revert when done
```

## Gotchas

- `tsc` will not copy `.js` — the `build` script's copy step is mandatory;
  `prepublish` runs `npm run build`, so the published `files: ["build",
  "typings"]` includes the asset.
- Keep `require('../zstd/zstd.js')` **static** so webpack follows it into the
  GUI bundle.
- A Transform whose readable side is never consumed stalls before `_flush`
  (standard Node stream behavior) — tests must attach a `'data'` listener.
- `_ZSTD_getFrameContentSize` returns a BigInt at runtime despite the `number`
  typing — always `Number()` it.
