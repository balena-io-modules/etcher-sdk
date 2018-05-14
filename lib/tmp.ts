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
		throw new Error(`Could not generate a temporary filename in ${TRIES} tries`);
	}
	if (!keepOpen && (fd !== undefined)) {
		await close(fd);
		fd = undefined;
	}
	return { fd, path: path! };
};

export const tmpFileDisposer = (keepOpen = true): Disposer<TmpFileResult> => {
	return resolve(tmpFile(keepOpen))
	.disposer(async (result: TmpFileResult) => {
		if (keepOpen && (result.fd !== undefined)) {
			await close(result.fd);
		}
		await unlink(result.path);
	});
};
