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

import { Transform } from 'readable-stream';

export class BlockTransformStream extends Transform {
	bytesRead = 0;
	bytesWritten = 0;
	private _buffers: Buffer[] = [];
	private _bytes = 0;

	constructor(private chunkSize: number) {
		super();
	}

	private writeBuffers(flush = false) {
		if (flush || this._bytes >= this.chunkSize) {
			let block = Buffer.concat(this._buffers);
			const length = flush
				? block.length
				: Math.floor(block.length / this.chunkSize) * this.chunkSize;

			this._buffers.length = 0;
			this._bytes = 0;

			if (block.length !== length) {
				this._buffers.push(block.slice(length));
				this._bytes += block.length - length;
				block = block.slice(0, length);
			}

			this.bytesWritten += block.length;
			this.push(block);
		}
	}

	_transform(
		chunk: Buffer,
		encoding: string,
		callback: (error?: Error) => void,
	) {
		this.bytesRead += chunk.length;
		if (
			this._bytes === 0 &&
			chunk.length >= this.chunkSize &&
			chunk.length % this.chunkSize === 0
		) {
			this.bytesWritten += chunk.length;
			this.push(chunk);
		} else {
			this._buffers.push(chunk);
			this._bytes += chunk.length;
			this.writeBuffers();
		}
		callback();
	}

	_flush(callback: (error?: Error) => void) {
		this.writeBuffers(true);
		callback();
	}
}
