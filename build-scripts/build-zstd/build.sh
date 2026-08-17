#!/usr/bin/env bash
#
# Build a streaming zstd (de)compression module for etcher-sdk:
# libzstd compiled to WASM with Emscripten, exposed as a single self-contained
# CommonJS file (the .wasm is base64-embedded via SINGLE_FILE).
#
# This is a manual, one-off build step: the generated asset is committed to the
# repo, so this script only needs to run when libzstd or the build config changes.
#
# The script is mount-free by design: the container writes the generated module
# to stdout and the host captures it, so it works against any Docker daemon
# (in-distro `docker` or Docker Desktop's Windows engine via `docker.exe`).
#
# Usage:
#   ./build-scripts/build-zstd/build.sh
#
# Set DOCKER to override the docker command (e.g. DOCKER=docker.exe).

set -euo pipefail

ZSTD_VERSION="1.5.6"
EMS_IMAGE="emscripten/emsdk:4.0.5"

# Prefer $DOCKER, then in-distro docker, then the Docker Desktop Windows binary.
if [ -z "${DOCKER:-}" ]; then
	if command -v docker >/dev/null 2>&1 && docker info >/dev/null 2>&1; then
		DOCKER=docker
	else
		DOCKER="$(find /mnt/c/Program\ Files/Docker -name docker.exe 2>/dev/null | head -1 || true)"
		if [ -z "$DOCKER" ]; then
			echo "No working docker command found. Set DOCKER explicitly." >&2
			exit 1
		fi
	fi
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
OUT="$REPO_ROOT/lib/zstd/zstd.js"
mkdir -p "$(dirname "$OUT")"

echo "Building zstd v$ZSTD_VERSION into $OUT (image: $EMS_IMAGE)..."

"$DOCKER" run --rm -e ZSTD_VERSION="$ZSTD_VERSION" "$EMS_IMAGE" bash -c '
	set -euo pipefail

	# libzstd is downloaded inside the container: no Docker build context needed.
	if ! command -v curl >/dev/null 2>&1; then
		apt-get update >/dev/null
		apt-get install -y --no-install-recommends curl ca-certificates >/dev/null
	fi

	cd /tmp
	curl -fsSLO "https://github.com/facebook/zstd/releases/download/v${ZSTD_VERSION}/zstd-${ZSTD_VERSION}.tar.gz"
	tar xzf "zstd-${ZSTD_VERSION}.tar.gz"
	cd "zstd-${ZSTD_VERSION}/lib"

	emcc \
		-O3 \
		-msimd128 \
		-s WASM=1 \
		-s MODULARIZE=1 \
		-s EXPORT_NAME=createZstdModule \
		-s ENVIRONMENT=node \
		-s SINGLE_FILE=1 \
		-s WASM_ASYNC_COMPILATION=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s INITIAL_MEMORY=33554432 \
		-s WASM_BIGINT=1 \
		-s EXPORTED_FUNCTIONS="[\"_malloc\",\"_free\",\"_ZSTD_createDStream\",\"_ZSTD_decompressStream\",\"_ZSTD_freeDStream\",\"_ZSTD_isError\",\"_ZSTD_getFrameContentSize\",\"_ZSTD_DStreamInSize\",\"_ZSTD_DStreamOutSize\"]" \
		-I . \
		common/*.c decompress/*.c \
		-o /tmp/zstd.js

	cat /tmp/zstd.js
' > "$OUT"

echo "Done. Generated $(wc -c < "$OUT") bytes."
