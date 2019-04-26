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

import { Transform } from 'readable-stream';
import { TransformOptions } from 'stream';

import {
	BlocksWithChecksum,
	createSparseReaderStateIterator,
	SparseReadable,
	SparseReaderState,
} from './shared';

export class SparseFilterStream extends Transform implements SparseReadable {
	private stateIterator: Iterator<SparseReaderState>;
	private state?: SparseReaderState;
	private position = 0;

	constructor(
		public readonly blocks: BlocksWithChecksum[],
		verify: boolean,
		generateChecksums: boolean,
		options: TransformOptions = {},
	) {
		super({ ...options, objectMode: true });
		this.stateIterator = createSparseReaderStateIterator(
			blocks,
			verify,
			generateChecksums,
		);
		this.nextBlock();
	}

	private nextBlock() {
		this.state = this.stateIterator.next().value;
	}

	public _transform(
		chunk: Buffer,
		_encoding: string,
		callback: (error: Error | null) => void,
	) {
		let error: Error | null = null;
		try {
			this.__transform(chunk);
		} catch (err) {
			error = err;
		}
		callback(error);
	}

	private __transform(buffer: Buffer): void {
		while (true) {
			if (this.state === undefined) {
				// No current block means we're done reading
				this.position += buffer.length;
				return;
			}
			if (
				this.position >=
				this.state.subBlock.offset + this.state.subBlock.length
			) {
				// The current position is after the current block: go to the next block
				this.nextBlock();
				continue;
			}
			if (buffer.length === 0) {
				return;
			}
			if (this.position < this.state.subBlock.offset) {
				// Skip bytes before the current block
				const toSkip = Math.min(
					this.state.subBlock.offset - this.position,
					buffer.length,
				);
				this.position += toSkip;
				if (toSkip >= buffer.length) {
					// There would be no data remaining after the slice
					return;
				}
				buffer = buffer.slice(toSkip);
			}
			// The position is now inside the current block
			// Cut until the end of the block or the end of the buffer to transform
			const bytesLeftInBlock =
				this.state.subBlock.offset + this.state.subBlock.length - this.position;
			const length = Math.min(bytesLeftInBlock, buffer.length);
			const bufferToPush = buffer.slice(0, length);
			if (this.state.hasher !== undefined) {
				this.state.hasher.update(bufferToPush);
			}
			this.push({
				buffer: bufferToPush,
				position: this.position,
			});
			// Move position
			this.position += length;
			// Start over with the remaining data (if any)
			buffer = buffer.slice(length);
		}
	}
}
