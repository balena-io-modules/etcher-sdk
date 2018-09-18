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

import { Disposer, resolve } from 'bluebird';
import { randomBytes } from 'crypto';
import { tmpdir } from 'os';
import { join } from 'path';

import { close, open, unlink } from './fs';

const TMP_RANDOM_BYTES = 6;
const TMP_DIR = tmpdir();
const TRIES = 5;

const randomFilePath = (): string => {
	return join(TMP_DIR, `${randomBytes(TMP_RANDOM_BYTES).toString('hex')}.tmp`);
};

export interface TmpFileResult {
	path: string;
	fd?: number;
}

export const tmpFile = async (keepOpen = true): Promise<TmpFileResult> => {
	let fd: number | undefined;
	let path: string;
	let ok = false;
	for (let i = 0; i < TRIES; i++) {
		path = randomFilePath();
		try {
			fd = await open(path, 'wx+');
			ok = true;
			break;
		} catch (error) {
			if (error.code !== 'EEXIST') {
				throw error;
			}
		}
	}
	if (!ok) {
		throw new Error(
			`Could not generate a temporary filename in ${TRIES} tries`,
		);
	}
	if (!keepOpen && fd !== undefined) {
		await close(fd);
		fd = undefined;
	}
	return { fd, path: path! };
};

export const tmpFileDisposer = (keepOpen = true): Disposer<TmpFileResult> => {
	return resolve(tmpFile(keepOpen)).disposer(async (result: TmpFileResult) => {
		if (keepOpen && result.fd !== undefined) {
			await close(result.fd);
		}
		await unlink(result.path);
	});
};
