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

import { delay } from 'bluebird';
import { ReadResult } from 'file-disk';
import { Readable } from 'readable-stream';

import { AlignedReadableState } from './aligned-lockable-buffer';
import {
	CHUNK_SIZE,
	PROGRESS_EMISSION_INTERVAL,
	RETRY_BASE_TIMEOUT,
} from './constants';
import { isTransientError } from './errors';
import { File } from './source-destination/file';
import { makeClassEmitProgressEvents } from './source-destination/progress';

export class BlockReadStream extends Readable {
	private source: File;
	private alignedReadableState: AlignedReadableState;
	private bytesRead = 0;
	private end: number;
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
		alignment: number;
		start?: number;
		end?: number;
		chunkSize?: number;
		maxRetries?: number;
		numBuffers?: number;
	}) {
		super({ objectMode: true, highWaterMark: numBuffers - 1 });
		this.source = source;
		this.bytesRead = start;
		this.end = end;
		this.maxRetries = maxRetries;
		chunkSize = Math.max(
			Math.floor(chunkSize / alignment) * alignment,
			alignment,
		);
		this.alignedReadableState = new AlignedReadableState(
			chunkSize,
			alignment,
			numBuffers,
		);
	}

	private async tryRead(buffer: Buffer): Promise<ReadResult> {
		// Tries to read `this.maxRetries` times if the error is transient.
		// Throws EUNPLUGGED if all retries failed.
		let retries = 0;
		while (true) {
			try {
				return await this.source.read(buffer, 0, buffer.length, this.bytesRead);
			} catch (error) {
				if (isTransientError(error)) {
					if (retries < this.maxRetries) {
						retries += 1;
						await delay(RETRY_BASE_TIMEOUT * retries);
						continue;
					}
					error.code = 'EUNPLUGGED';
				}
				throw error;
			}
		}
	}

	public async _read(): Promise<void> {
		if (this.bytesRead > this.end) {
			this.push(null);
			return;
		}
		let buffer = this.alignedReadableState.getCurrentBuffer();
		const toRead = this.end - this.bytesRead + 1;
		if (toRead < buffer.length) {
			buffer = buffer.slice(0, toRead);
		}
		try {
			const unlock = await buffer.lock();
			let bytesRead;
			try {
				({ bytesRead } = await this.tryRead(buffer));
			} finally {
				unlock();
			}
			this.bytesRead += bytesRead;
			if (bytesRead !== 0) {
				this.push(buffer.slice(0, bytesRead));
			} else {
				this.push(null);
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
	PROGRESS_EMISSION_INTERVAL,
);
