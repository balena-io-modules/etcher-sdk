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

import { Readable } from 'stream';

import {
	AlignedReadableState,
	isAlignedLockableBuffer,
} from '../aligned-lockable-buffer';
import { SourceDestination } from '../source-destination/source-destination';
import {
	BlocksWithChecksum,
	createSparseReaderStateIterator,
	SparseReadable,
	SparseReaderState,
	SparseStreamChunk,
} from './shared';

export class SparseReadStream extends Readable implements SparseReadable {
	private source: SourceDestination;
	public readonly blocks: BlocksWithChecksum[];
	private chunkSize: number;
	private stateIterator: Iterator<SparseReaderState>;
	private state?: SparseReaderState;
	private positionInBlock = 0;
	private alignedReadableState?: AlignedReadableState;

	constructor({
		source,
		blocks,
		chunkSize,
		verify,
		generateChecksums,
		alignment,
		numBuffers = 2,
	}: {
		source: SourceDestination;
		blocks: BlocksWithChecksum[];
		chunkSize: number;
		verify: boolean;
		generateChecksums: boolean;
		alignment?: number;
		numBuffers?: number;
	}) {
		super({ objectMode: true, highWaterMark: numBuffers - 1 });
		this.source = source;
		this.blocks = blocks;
		this.chunkSize = chunkSize;
		if (alignment !== undefined) {
			this.alignedReadableState = new AlignedReadableState(
				chunkSize,
				alignment,
				numBuffers,
			);
		}
		this.stateIterator = createSparseReaderStateIterator(
			blocks,
			verify,
			generateChecksums,
		);
		this.nextBlock();
	}

	public async _read() {
		try {
			this.push(await this.__read());
		} catch (error) {
			this.emit('error', error);
			this.push(null);
		}
	}

	private nextBlock() {
		this.state = this.stateIterator.next().value;
		this.positionInBlock = 0;
	}

	private async __read(): Promise<SparseStreamChunk | null> {
		if (this.state === undefined) {
			// No current block means we're done reading
			return null;
		}
		const length = Math.min(
			this.chunkSize,
			this.state.subBlock.length - this.positionInBlock,
		);
		const buffer =
			this.alignedReadableState !== undefined
				? this.alignedReadableState.getCurrentBuffer().slice(0, length)
				: Buffer.allocUnsafe(length);
		const unlock = isAlignedLockableBuffer(buffer)
			? await buffer.lock()
			: undefined;
		try {
			await this.source.read(
				buffer,
				0,
				length,
				this.state.subBlock.offset + this.positionInBlock,
			);
			this.state.hasher?.update(buffer);
		} finally {
			unlock?.();
		}
		const chunk = {
			buffer,
			position: this.state.subBlock.offset + this.positionInBlock,
		};
		this.positionInBlock += length;
		if (this.positionInBlock === this.state.subBlock.length) {
			this.nextBlock();
		}
		return chunk;
	}
}
