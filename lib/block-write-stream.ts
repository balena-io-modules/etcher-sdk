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

import { delay } from 'bluebird';
import * as _debug from 'debug';
import { Writable } from 'readable-stream';

import {
	CHUNK_SIZE,
	PROGRESS_EMISSION_INTERVAL,
	RETRY_BASE_TIMEOUT,
} from './constants';
import { isTransientError } from './errors';
import { asCallback } from './utils';
import { makeClassEmitProgressEvents } from './source-destination/progress';
import { BlockDevice } from './source-destination/block-device';

const debug = _debug('etcher:writer:block-write-stream');

export class BlockWriteStream extends Writable {
	public bytesWritten = 0;
	private _firstBuffers: Buffer[] = [];
	private _buffers: Buffer[] = [];
	private _bytes = 0;

	constructor(
		private destination: BlockDevice,
		public firstBytesToKeep = 0,
		private maxRetries = 5,
	) {
		super({ objectMode: true, highWaterMark: 1 });
		if (
			firstBytesToKeep !== 0 &&
			firstBytesToKeep % this.destination.blockSize !== 0
		) {
			throw new Error(
				'firstBytesToKeep must be a multiple of the destination blockSize',
			);
		}
	}

	private async writeChunk(
		buffer: Buffer,
		position: number,
		flushing = false,
	): Promise<void> {
		let retries = 0;
		while (true) {
			try {
				const { bytesWritten } = await this.destination.write(
					buffer,
					0,
					buffer.length,
					position,
				);
				if (!flushing) {
					this.bytesWritten += bytesWritten;
				}
				return;
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

	private async writeBuffers(): Promise<void> {
		if (this._bytes >= CHUNK_SIZE) {
			let block = Buffer.concat(this._buffers);
			const length =
				Math.floor(block.length / this.destination.blockSize) *
				this.destination.blockSize;

			this._buffers.length = 0;
			this._bytes = 0;

			if (block.length !== length) {
				this._buffers.push(block.slice(length));
				this._bytes += block.length - length;
				block = block.slice(0, length);
			}

			await this.writeChunk(block, this.bytesWritten);
		}
	}

	private async __write(buffer: Buffer): Promise<void> {
		debug('_write', buffer.length, this.bytesWritten);

		// Keep the first blocks in memory and write them once the rest has been written.
		// This is to prevent Windows from mounting the device while we flash it.
		if (this.bytesWritten < this.firstBytesToKeep) {
			const end = this.bytesWritten + buffer.length;
			if (end <= this.firstBytesToKeep) {
				this._firstBuffers.push(buffer);
				this.bytesWritten += buffer.length;
			} else {
				const difference = this.firstBytesToKeep - this.bytesWritten;
				this._firstBuffers.push(buffer.slice(0, difference));
				this._buffers.push(buffer.slice(difference));
				this._bytes += buffer.length - difference;
				this.bytesWritten += difference;
				await this.writeBuffers();
			}
		} else if (
			this._bytes === 0 &&
			buffer.length >= CHUNK_SIZE &&
			buffer.length % this.destination.blockSize === 0
		) {
			await this.writeChunk(buffer, this.bytesWritten);
		} else {
			this._buffers.push(buffer);
			this._bytes += buffer.length;
			await this.writeBuffers();
		}
	}

	_write(
		buffer: Buffer,
		encoding: string,
		callback: (error: Error | undefined) => void,
	) {
		asCallback(this.__write(buffer), callback);
	}

	async __final(): Promise<void> {
		debug('_final');
		try {
			if (this._bytes) {
				await this.writeChunk(
					Buffer.concat(this._buffers, this._bytes),
					this.bytesWritten,
				);
			}

			let position = 0;
			for (let i = 0; i < this._firstBuffers.length; i++) {
				const buffer = this._firstBuffers[i];
				await this.writeChunk(buffer, position, true);
				position += buffer.length;
			}
		} catch (error) {
			this.destroy();
			throw error;
		}
	}

	/**
	 * @summary Write buffered data before a stream ends, called by stream internals
	 */
	_final(callback: (error?: Error | void) => void) {
		asCallback(this.__final(), callback);
	}
}

export const ProgressBlockWriteStream = makeClassEmitProgressEvents(
	BlockWriteStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
);
