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

import { Transform } from 'stream';

import { AlignedReadableState } from '../aligned-lockable-buffer';
import { makeClassEmitProgressEvents } from '../source-destination/progress';
import { asCallback } from '../utils';
import {
	BlocksWithChecksum,
	SparseReadable,
	SparseStreamChunk,
	SparseWritable,
} from './shared';

export class SparseTransformStream
	extends Transform
	implements SparseWritable, SparseReadable
{
	// This is only used to align buffers emitted by node-udif's createSparseStream as we don't control their allocation
	public blocks: BlocksWithChecksum[];
	public position = 0;
	public bytesWritten = 0;
	private alignedReadableState: AlignedReadableState;

	constructor({
		blocks,
		chunkSize,
		alignment,
		numBuffers = 2,
	}: {
		blocks: BlocksWithChecksum[];
		chunkSize: number;
		alignment: number;
		numBuffers?: number;
	}) {
		super({ objectMode: true, highWaterMark: numBuffers - 1 });
		this.blocks = blocks;
		this.alignedReadableState = new AlignedReadableState(
			chunkSize,
			alignment,
			numBuffers,
		);
	}

	private async __transform(chunk: SparseStreamChunk): Promise<void> {
		this.position = chunk.position;
		// This will fail if a chunk buffer is larger than chunkSize passed to the constructor
		let buffer = this.alignedReadableState.getCurrentBuffer();
		const unlock = await buffer.lock();
		try {
			if (chunk.buffer.length < buffer.length) {
				buffer = buffer.slice(0, chunk.buffer.length);
			}
			chunk.buffer.copy(buffer);
		} finally {
			unlock();
		}
		this.push({ position: chunk.position, buffer });
		this.bytesWritten += chunk.buffer.length;
		this.position += chunk.buffer.length;
	}

	public _transform(
		chunk: SparseStreamChunk,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		asCallback(this.__transform(chunk), callback);
	}
}

export const ProgressSparseTransformStream = makeClassEmitProgressEvents(
	SparseTransformStream,
	'bytesWritten',
	'position',
);
