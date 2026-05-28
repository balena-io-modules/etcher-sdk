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

import { ReadResult } from 'file-disk';
import { Readable } from 'stream';

import {
	AlignedReadableState,
	isAlignedLockableBuffer,
} from './aligned-lockable-buffer';
import { CHUNK_SIZE, RETRY_BASE_TIMEOUT } from './constants';
import { retryOnTransientError } from './errors';
import { File } from './source-destination/file';
import { makeClassEmitProgressEvents } from './source-destination/progress';

export class BlockReadStream extends Readable {
	private source: File;
	private alignment: number | undefined;
	private alignedReadableState: AlignedReadableState;
	private bytesRead = 0;
	private end: number;
	private chunkSize: number;
	private maxRetries: number;

	constructor({
		source,
		alignment,
		start = 0,
		end = Infinity,
		chunkSize = CHUNK_SIZE,
		maxRetries = 5,
		numBuffers = 2,
	}: {
		source: File;
		alignment?: number;
		start?: number;
		end?: number;
		chunkSize?: number;
		maxRetries?: number;
		numBuffers?: number;
	}) {
		super({ objectMode: true, highWaterMark: numBuffers - 1 });
		this.source = source;
		this.alignment = alignment;
		this.bytesRead = start;
		this.end = end;
		this.chunkSize = chunkSize;
		this.maxRetries = maxRetries;
		if (alignment !== undefined) {
			this.chunkSize = Math.max(
				Math.floor(chunkSize / alignment) * alignment,
				alignment,
			);
			this.alignedReadableState = new AlignedReadableState(
				chunkSize,
				alignment,
				numBuffers,
			);
		}
	}

	private async tryRead(buffer: Buffer): Promise<ReadResult> {
		// Tries to read `this.maxRetries` times if the error is transient.
		return await retryOnTransientError(
			async () => {
				return await this.source.read(buffer, 0, buffer.length, this.bytesRead);
			},
			this.maxRetries,
			RETRY_BASE_TIMEOUT,
		);
	}

	public async _read(): Promise<void> {
		if (this.bytesRead > this.end) {
			this.push(null);
			return;
		}
		let buffer =
			this.alignment !== undefined
				? this.alignedReadableState.getCurrentBuffer()
				: Buffer.allocUnsafe(this.chunkSize);
		const toRead = this.end - this.bytesRead + 1;
		if (toRead < buffer.length) {
			buffer = buffer.slice(0, toRead);
		}
		try {
			let unlock: undefined | (() => void);
			if (isAlignedLockableBuffer(buffer)) {
				unlock = await buffer.lock();
			}
			let bytesRead;
			try {
				({ bytesRead } = await this.tryRead(buffer));
			} finally {
				unlock?.();
			}
			this.bytesRead += bytesRead;
			if (bytesRead !== 0) {
				this.push(buffer.slice(0, bytesRead));
				// Release buffer reference after slice is pushed downstream
				if (isAlignedLockableBuffer(buffer)) {
					buffer.release();
				}
			} else {
				this.push(null);
				// Release buffer reference even for empty read
				if (isAlignedLockableBuffer(buffer)) {
					buffer.release();
				}
			}
		} catch (error) {
			this.emit('error', error);
		}
	}
}

export const ProgressBlockReadStream = makeClassEmitProgressEvents(
	BlockReadStream,
	'bytesRead',
	'bytesRead',
);
