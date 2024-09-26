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

import { platform } from 'process';

import { BlocksWithChecksum } from './sparse-stream/shared';
import { delay } from './utils';

export class NotCapable extends Error {}

export class VerificationError extends Error {
	public code = 'EVALIDATION';
}

export class ChecksumVerificationError extends VerificationError {
	constructor(
		message: string,
		public checksum: string,
		public expectedChecksum: string,
	) {
		super(message);
	}
}

function blocksVerificationErrorMessage(
	blocksWithChecksum: BlocksWithChecksum,
	checksum: string,
) {
	const start = blocksWithChecksum.blocks[0].offset;
	const lastBlock =
		blocksWithChecksum.blocks[blocksWithChecksum.blocks.length - 1];
	const end = lastBlock.offset + lastBlock.length - 1;
	return `Checksum does not match for range [${start}, ${end}]: "${blocksWithChecksum.checksum}" != "${checksum}"`;
}

export class BlocksVerificationError extends VerificationError {
	constructor(
		public readonly blocks: BlocksWithChecksum,
		public readonly checksum: string,
	) {
		super(blocksVerificationErrorMessage(blocks, checksum));
	}
}

/**
 * @summary Determine whether an error is considered a
 * transient occurrence, and the operation should be retried
 * Errors considered potentially temporary are:
 *   - Mac OS: ENXIO, EBUSY
 *   - Windows: ENOENT, UNKNOWN
 *   - Linux: EIO, EBUSY
 */
function isTransientError(error: NodeJS.ErrnoException): boolean {
	if (platform === 'darwin') {
		return error.code === 'ENXIO' || error.code === 'EBUSY';
	} else if (platform === 'linux') {
		return error.code === 'EIO' || error.code === 'EBUSY';
	} else if (platform === 'win32') {
		return (
			error.code === 'ENOENT' ||
			error.code === 'UNKNOWN' ||
			error.code === 'EBUSY'
		);
	}
	return false;
}

export async function retryOnTransientError<T>(
	fn: () => Promise<T>,
	maxRetries: number,
	baseDelay: number,
): Promise<T> {
	let retries = 0;
	// eslint-disable-next-line no-constant-condition
	while (true) {
		try {
			return await fn();
		} catch (error) {
			if (isTransientError(error)) {
				if (retries < maxRetries) {
					retries += 1;
					await delay(baseDelay * retries);
					continue;
				}
				error.code = 'EUNPLUGGED';
			}
			throw error;
		}
	}
}
