/*
 * Copyright 2018 resin.io
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

import { read } from 'fs';
import { Readable } from 'readable-stream';

import { PROGRESS_EMISSION_INTERVAL } from './constants';
import { isTransientError } from './errors';
import { makeClassEmitProgressEvents } from './source-destination/progress';

const CHUNK_SIZE = 64 * 1024;
const MIN_CHUNK_SIZE = 512;
const RETRY_BASE_TIMEOUT = 100;

export class BlockReadStream extends Readable {
	private retries = 0;
	private boundOnRead: (error: Error, bytesRead: number, buffer: Buffer) => void;
	private boundRead: () => void;

	constructor(private fd: number, private bytesRead = 0, private end = Infinity, private chunkSize = CHUNK_SIZE, private maxRetries = 5) {
		super({ objectMode: true, highWaterMark: 2 });
		this.boundRead = this._read.bind(this);
	}

	_read() {
		const toRead = this.end - this.bytesRead + 1;  // end is inclusive

		if (toRead <= 0) {
			this.push(null);
			return;
		}

		// Align to the minimum block size for a block device
		const length = Math.min(CHUNK_SIZE, Math.max(MIN_CHUNK_SIZE, toRead));
		const buffer = Buffer.allocUnsafe(length);

		read(this.fd, buffer, 0, length, this.bytesRead, (error, bytesRead, buffer) => {
			if (error) {
				if (isTransientError(error)) {
					if (this.retries < this.maxRetries) {
						this.retries += 1;
						setTimeout(this.boundRead, RETRY_BASE_TIMEOUT * this.retries);
						return;
					}
					error.code = 'EUNPLUGGED';
				}
				this.emit('error', error);
				return;
			}

			if (bytesRead === 0) {
				this.push(null)
				return
			}

			// As we're going to read more bytes than required
			// in some cases (due to block size alignment),
			// the output needs to be adjusted here
			const requestedBytes = Math.min(toRead, length);

			this.retries = 0;
			this.bytesRead += bytesRead;
			this.push(buffer.slice(0, requestedBytes));
		});
	}
}

export const ProgressBlockReadStream = makeClassEmitProgressEvents(BlockReadStream, 'bytesRead', 'bytesRead', PROGRESS_EMISSION_INTERVAL);
