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

import { Transform } from 'readable-stream';

import { AlignedReadableState } from './aligned-lockable-buffer';
import { CHUNK_SIZE } from './constants';
import { asCallback } from './utils';

export class BlockTransformStream extends Transform {
	public bytesRead = 0;
	public bytesWritten = 0;
	private chunkSize: number;
	private alignedReadableState: AlignedReadableState;
	private inputBuffers: Buffer[] = [];
	private inputBytes = 0;

	constructor({
		chunkSize,
		alignment,
		numBuffers = 2,
	}: {
		chunkSize: number;
		alignment: number;
		numBuffers?: number;
	}) {
		super({ objectMode: true, highWaterMark: numBuffers - 1 });
		this.chunkSize = chunkSize;
		this.alignedReadableState = new AlignedReadableState(
			chunkSize,
			alignment,
			numBuffers,
		);
	}

	private async writeBuffers(flush = false): Promise<void> {
		if (flush || this.inputBytes >= this.chunkSize) {
			// TODO optimize
			let block = Buffer.concat(this.inputBuffers, this.inputBytes);
			const length = flush
				? block.length
				: Math.floor(block.length / this.chunkSize) * this.chunkSize;

			this.inputBuffers.length = 0;
			this.inputBytes = 0;

			if (block.length !== length) {
				this.inputBuffers.push(block.slice(length));
				this.inputBytes += block.length - length;
				block = block.slice(0, length);
			}

			const alignedBuffer = this.alignedReadableState.getCurrentBuffer();
			const unlock = await alignedBuffer.lock();
			try {
				block.copy(alignedBuffer);
			} finally {
				unlock();
			}
			this.bytesWritten += length;
			this.push(alignedBuffer.slice(0, length));
		}
	}

	public async _transform(
		chunk: Buffer,
		_encoding: string,
		callback: (error?: Error) => void,
	): Promise<void> {
		this.bytesRead += chunk.length;
		this.inputBuffers.push(chunk);
		this.inputBytes += chunk.length;
		asCallback(this.writeBuffers(), callback);
	}

	public async _flush(callback: (error?: Error) => void): Promise<void> {
		asCallback(this.writeBuffers(true), callback);
	}

	public static alignIfNeeded(
		stream: NodeJS.ReadableStream,
		alignment?: number,
		numBuffers?: number,
	) {
		if (alignment === undefined) {
			return stream;
		}
		const transform = new BlockTransformStream({
			chunkSize: CHUNK_SIZE,
			alignment,
			numBuffers,
		});
		stream.on('error', transform.emit.bind(transform, 'error'));
		stream.pipe(transform);
		return transform;
	}
}
