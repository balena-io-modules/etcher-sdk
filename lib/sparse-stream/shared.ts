/*
 * Copyright 2019 balena.io
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

import { createHash, Hash } from 'crypto';
import { padStart } from 'lodash';
import * as XXHash from 'xxhash';

import { AlignedLockableBuffer } from '../aligned-lockable-buffer';
import { XXHASH_SEED } from '../constants';
import { BlocksVerificationError } from '../errors';
import { getCrc, getXXHash } from '../lazy';

export type ChecksumType =
	| 'crc32'
	| 'sha1'
	| 'sha256'
	| 'xxhash32'
	| 'xxhash64';

export interface Block {
	offset: number;
	length: number;
}

export interface BlocksWithChecksum {
	checksumType?: ChecksumType;
	checksum?: string;
	blocks: Block[];
}

export interface SparseStreamChunk {
	buffer: Buffer | AlignedLockableBuffer;
	position: number;
}

export interface SparseReadable extends NodeJS.ReadableStream {
	blocks: BlocksWithChecksum[];
	push(chunk: SparseStreamChunk): boolean;
}

export interface SparseWritable extends NodeJS.WritableStream {
	_write(
		chunk: SparseStreamChunk,
		encoding: string,
		callback: (err?: Error | null) => void,
	): void;
}

class CRC32Hasher {
	private value: number;
	private crc32 = getCrc().crc32;

	public update(data: Buffer): void {
		this.value = this.crc32(data, this.value);
	}

	public digest(_encoding: 'hex'): string {
		return padStart(this.value.toString(16), 8, '0');
	}
}

type AnyHasher = CRC32Hasher | Hash | XXHash | XXHash.XXHash64;

function createHasher(checksumType?: ChecksumType): undefined | AnyHasher {
	if (checksumType === 'crc32') {
		return new CRC32Hasher();
	} else if (checksumType === 'sha1' || checksumType === 'sha256') {
		return createHash(checksumType);
	} else if (checksumType === 'xxhash32') {
		const xxHash = getXXHash();
		return new xxHash(XXHASH_SEED);
	} else if (checksumType === 'xxhash64') {
		const { XXHash64 } = getXXHash();
		return new XXHash64(XXHASH_SEED);
	}
}

export interface SparseReaderState {
	block: BlocksWithChecksum;
	subBlock: Block;
	hasher?: AnyHasher;
}

export function* createSparseReaderStateIterator(
	blocks: BlocksWithChecksum[],
	verify: boolean,
	generateChecksums: boolean,
): Iterator<SparseReaderState> {
	if (verify && generateChecksums) {
		throw new Error('verify and generateChecksums are mutually exclusive');
	}
	if (generateChecksums) {
		for (const block of blocks) {
			if (block.checksumType === undefined) {
				throw new Error(
					'All blocks must have a checksumType if generateChecksums is true',
				);
			}
		}
	}
	for (const block of blocks) {
		const hasher = createHasher(block.checksumType);
		for (const subBlock of block.blocks) {
			yield { block, subBlock, hasher };
		}
		verifyOrGenerateChecksum(hasher, block, verify, generateChecksums);
	}
}

function verifyOrGenerateChecksum(
	hasher: AnyHasher | undefined,
	blocks: BlocksWithChecksum,
	verify: boolean,
	generateChecksums: boolean,
) {
	if (hasher !== undefined) {
		const checksum = hasher.digest('hex') as string;
		if (generateChecksums) {
			blocks.checksum = checksum;
		} else if (verify && blocks.checksum !== checksum) {
			throw new BlocksVerificationError(blocks, checksum);
		}
	}
}

export function blocksLength(blocks: BlocksWithChecksum[]) {
	let sum = 0;
	for (const block of blocks) {
		for (const blk of block.blocks) {
			sum += blk.length;
		}
	}
	return sum;
}
