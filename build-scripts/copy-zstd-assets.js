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

// tsc does not copy non-TypeScript assets, so the generated libzstd WASM
// module (lib/zstd/zstd.js) would never reach build/. This script copies it
// next to the compiled zstd.ts, which requires it via path.join(__dirname, ...).
// The published package ships build/ + typings/ (see package.json "files"), so
// build/zstd/zstd.js is what ends up on npm. The BSD-3-Clause NOTICE for
// libzstd is copied alongside it so the license accompanies the binary asset.

'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const source = path.join(root, 'lib', 'zstd', 'zstd.js');
const notice = path.join(root, 'lib', 'zstd', 'NOTICE');
const destDir = path.join(root, 'build', 'zstd');
const dest = path.join(destDir, 'zstd.js');

if (!fs.existsSync(source)) {
	console.error(
		`copy-zstd-assets: ${path.relative(root, source)} not found. ` +
			'Run build-scripts/build-zstd/build.sh first.',
	);
	process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(source, dest);
fs.copyFileSync(notice, path.join(destDir, 'NOTICE'));
console.log(`copy-zstd-assets: copied lib/zstd/zstd.js -> build/zstd/zstd.js`);
console.log(`copy-zstd-assets: copied lib/zstd/NOTICE -> build/zstd/NOTICE`);
