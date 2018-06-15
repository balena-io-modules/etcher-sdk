import { delay } from 'bluebird';
import * as _debug from 'debug';
import { Writable } from 'readable-stream';

import { PROGRESS_EMISSION_INTERVAL } from './constants';
import { isTransientError } from './errors';
import { write } from './fs';
import { makeClassEmitProgressEvents } from './source-destination/progress';

const debug = _debug('etcher:writer:block-write-stream');

const CHUNK_SIZE = 64 * 1024;
const UPDATE_INTERVAL_MS = 500;
const RETRY_BASE_TIMEOUT = 100;

export class BlockWriteStream extends Writable {
	private bytesWritten = 0;
	private _firstBlocks: { position: number, buffer: Buffer }[] = [];

	constructor(private fd: number, private chunkSize = CHUNK_SIZE, private maxRetries = 5) {
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

		this.__write(buffer, this.bytesWritten).then(callback, callback);
	}

	async __final(): Promise<void> {
		for (let i = 0; i < this._firstBlocks.length; i++) {
			const { buffer, position } = this._firstBlocks[i];
			await this.__write(buffer, position, true);
		}
	}

	/**
	 * @summary Write buffered data before a stream ends, called by stream internals
	 */
	_final(callback: () => void) {
		debug('_final');
		this.__final().then(callback, this.destroy.bind(this));
	}
}

export const ProgressBlockWriteStream = makeClassEmitProgressEvents(BlockWriteStream, 'bytesWritten', 'bytesWritten', PROGRESS_EMISSION_INTERVAL);
