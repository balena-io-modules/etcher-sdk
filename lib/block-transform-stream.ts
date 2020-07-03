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

import {
	AlignedLockableBuffer,
	AlignedReadableState,
} from './aligned-lockable-buffer';
import { CHUNK_SIZE } from './constants';
import { asCallback } from './utils';

export class BlockTransformStream extends Transform {
	public sourceStream: NodeJS.ReadableStream;
	public bytesRead = 0;
	public bytesWritten = 0;
	private alignedReadableState: AlignedReadableState;
	private currentBuffer: AlignedLockableBuffer;
	private currentBufferPosition = 0;
	private unlockCurrentBuffer: () => void;

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
		this.alignedReadableState = new AlignedReadableState(
			chunkSize,
			alignment,
			numBuffers,
		);
		this.on('pipe', (sourceStream: NodeJS.ReadableStream) => {
			this.sourceStream = sourceStream;
		});
	}

	private __flush() {
		this.unlockCurrentBuffer();
		if (this.currentBufferPosition !== this.currentBuffer.length) {
			this.push(this.currentBuffer.slice(0, this.currentBufferPosition));
		} else {
			this.push(this.currentBuffer);
		}
		this.bytesWritten += this.currentBufferPosition;
		this.currentBufferPosition = 0;
	}

	private async pushChunk(chunk: Buffer) {
		if (chunk.length === 0) {
			return;
		}

		// Get an aligned buffer and lock it when starting or when the last aligned buffer was just flushed
		if (this.currentBufferPosition === 0) {
			this.currentBuffer = this.alignedReadableState.getCurrentBuffer();
			this.unlockCurrentBuffer = await this.currentBuffer.lock();
		}

		// Copy the current chunk into the current aligned buffer
		const lengthToCopy = Math.min(
			chunk.length,
			this.currentBuffer.length - this.currentBufferPosition,
		);
		chunk.copy(this.currentBuffer, this.currentBufferPosition, 0, lengthToCopy);
		this.currentBufferPosition += lengthToCopy;
		this.bytesRead += lengthToCopy;

		// If the current aligned buffer is full, push it
		if (this.currentBufferPosition === this.currentBuffer.length) {
			this.__flush();
		}

		// If the chunk did not fit in the last aligned buffer, copy the remaining part into the next aligned buffer
		if (lengthToCopy < chunk.length) {
			await this.pushChunk(chunk.slice(lengthToCopy));
		}
	}

	public _transform(
		chunk: Buffer,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		asCallback(this.pushChunk(chunk), callback);
	}

	public _flush(callback: (error?: Error) => void) {
		try {
			this.__flush();
			callback();
		} catch (error) {
			callback(error);
		}
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
