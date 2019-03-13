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

import {
	CHUNK_SIZE,
	PROGRESS_EMISSION_INTERVAL,
	RETRY_BASE_TIMEOUT,
} from './constants';
import { isTransientError } from './errors';
import { File } from './source-destination/file';
import { makeClassEmitProgressEvents } from './source-destination/progress';

export class BlockReadStream extends Readable {
	private chunkSize: number;

	constructor(
		private source: File,
		private bytesRead = 0,
		private end = Infinity,
		chunkSize = CHUNK_SIZE,
		private maxRetries = 5,
	) {
		super({ objectMode: true, highWaterMark: 2 });
		this.chunkSize = Math.max(
			Math.floor(chunkSize / this.source.blockSize) * this.source.blockSize,
			this.source.blockSize,
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

	private async __read(): Promise<void> {
		const toRead = this.end - this.bytesRead + 1; // end is inclusive

		if (toRead <= 0) {
			this.push(null);
			return;
		}

		// Read chunkSize bytes if available, else all remaining bytes.
		const length = Math.min(this.chunkSize, toRead);
		const buffer = Buffer.allocUnsafe(length);

		try {
			const { bytesRead } = await this.tryRead(buffer);
			if (bytesRead === 0) {
				this.push(null);
				return;
			}
			this.bytesRead += bytesRead;
			this.push(buffer.slice(0, bytesRead));
		} catch (error) {
			this.emit('error', error);
		}
	}

	public _read() {
		this.__read();
	}
}

export const ProgressBlockReadStream = makeClassEmitProgressEvents(
	BlockReadStream,
	'bytesRead',
	'bytesRead',
	PROGRESS_EMISSION_INTERVAL,
);
