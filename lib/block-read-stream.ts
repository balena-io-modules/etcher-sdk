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

import { isTransientError } from './errors';

const CHUNK_SIZE = 64 * 1024;
const MIN_CHUNK_SIZE = 512;
const RETRY_BASE_TIMEOUT = 100;

export class BlockReadStream extends Readable {
	private retries = 0;
	private boundOnRead: (error: Error, bytesRead: number, buffer: Buffer) => void;
	private boundRead: () => void;

	constructor(private fd: number, private bytesRead = 0, private end = Infinity, private chunkSize = CHUNK_SIZE, private maxRetries = 5) {
		super({ objectMode: true, highWaterMark: 2 });
		this.chunkSize = Math.max(this.chunkSize, MIN_CHUNK_SIZE);
		this.boundOnRead = this._onRead.bind(this);
		this.boundRead = this._read.bind(this);
	}

	private _onRead(error: NodeJS.ErrnoException | undefined, bytesRead: number, buffer: Buffer) {
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
			this.push(null);
			return;
		}

		this.retries = 0;
		this.bytesRead += bytesRead;
		this.push(buffer.slice(0, bytesRead));
	}

	_read() {
		const toRead = this.end - this.bytesRead + 1;  // end is inclusive

		if (toRead <= 0) {
			this.push(null);
			return;
		}

		const length = Math.min(this.chunkSize, toRead);
		const buffer = Buffer.allocUnsafe(length);

		read(this.fd, buffer, 0, length, this.bytesRead, this.boundOnRead);
	}
}
