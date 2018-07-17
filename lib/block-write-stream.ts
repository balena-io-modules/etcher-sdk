import { delay } from 'bluebird';
import * as _debug from 'debug';
import { Writable } from 'readable-stream';

import { PROGRESS_EMISSION_INTERVAL } from './constants';
import { isTransientError } from './errors';
import { write } from './fs';
import { asCallback } from './utils';
import { makeClassEmitProgressEvents } from './source-destination/progress';

const debug = _debug('etcher:writer:block-write-stream');

const MIN_CHUNK_SIZE = 512;
const CHUNK_SIZE = 64 * 1024;
const RETRY_BASE_TIMEOUT = 100;

export class BlockWriteStream extends Writable {
	private bytesWritten = 0;
	private _firstBlocks: { position: number, buffer: Buffer }[] = [];

	private _buffers: Buffer[] = [];
	private _bytes = 0;

	constructor(private fd: number, private blockSize = MIN_CHUNK_SIZE, private chunkSize = CHUNK_SIZE, private maxRetries = 5) {
		super({ objectMode: true, highWaterMark: 1 });
	}

	private async __write(buffer: Buffer, position: number, flushing = false): Promise<void> {
		let retries = 0;
		while (true) {
			try {
				const { bytesWritten } = await write(this.fd, buffer, 0, buffer.length, position);
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

	_write(buffer: Buffer, encoding: string, callback: (error?: Error | void) => void) {
		debug('_write', buffer.length, this.bytesWritten);

		// Keep the first blocks in memory and write them once the rest has been written.
		// This is to prevent Windows from mounting the device while we flash it.
		if (this.bytesWritten < CHUNK_SIZE) {
			this._firstBlocks.push({ buffer, position: this.bytesWritten });
			this.bytesWritten += buffer.length;
			callback();
			return;
		}

		if (this._bytes === 0 && buffer.length >= this.chunkSize) {
			if (buffer.length % this.blockSize === 0) {
				asCallback(this.__write(buffer, this.bytesWritten), callback);
				return;
			}
		}

		this._buffers.push(buffer);
		this._bytes += buffer.length;

		if (this._bytes >= this.chunkSize) {
			let block = Buffer.concat(this._buffers);
			const length = Math.floor(block.length / this.blockSize) * this.blockSize;

			this._buffers.length = 0;
			this._bytes = 0;

			if (block.length !== length) {
				this._buffers.push(block.slice(length));
				this._bytes += block.length - length;
				block = block.slice(0, length);
			}

			asCallback(this.__write(block, this.bytesWritten), callback);
			return;
		}

		callback();
	}

	async __final(): Promise<void> {
		if (this._bytes) {
			const length = Math.ceil(this._bytes / this.blockSize) * this.blockSize;
			const block = Buffer.alloc(length);
			let offset = 0;

			for (let index = 0; index < this._buffers.length; index += 1) {
				this._buffers[index].copy(block, offset);
				offset += this._buffers[index].length;
			}

			await this.__write(block, this.bytesWritten);
		}

		for (let i = 0; i < this._firstBlocks.length; i++) {
			const { buffer, position } = this._firstBlocks[i];
			await this.__write(buffer, position, true);
		}
	}

	/**
	 * @summary Write buffered data before a stream ends, called by stream internals
	 */
	_final(callback: (error?: Error | void) => void) {
		debug('_final');
		asCallback(this.__final(), (error) => {
			if (error) {
				this.destroy();
			}
			callback(error);
		})
	}
}

export const ProgressBlockWriteStream = makeClassEmitProgressEvents(BlockWriteStream, 'bytesWritten', 'bytesWritten', PROGRESS_EMISSION_INTERVAL);
