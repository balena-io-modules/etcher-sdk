import { getAlignedBuffer } from '@ronomon/direct-io';
import { delay } from 'bluebird';
import { Writable } from 'readable-stream';

import { isAlignedLockableBuffer } from '../aligned-lockable-buffer';
import { PROGRESS_EMISSION_INTERVAL, RETRY_BASE_TIMEOUT } from '../constants';
import { isTransientError } from '../errors';
import { makeClassEmitProgressEvents } from '../source-destination/progress';
import { SourceDestination } from '../source-destination/source-destination';
import { asCallback, noop } from '../utils';
import { SparseStreamChunk, SparseWritable } from './shared';

export class SparseWriteStream extends Writable implements SparseWritable {
	private destination: SourceDestination;
	public firstBytesToKeep: number;
	private maxRetries: number;
	public position: number;
	public bytesWritten = 0;
	private _firstChunks: SparseStreamChunk[] = [];

	constructor({
		destination,
		highWaterMark,
		firstBytesToKeep = 0,
		maxRetries = 5,
	}: {
		destination: SourceDestination;
		firstBytesToKeep?: number;
		maxRetries?: number;
		highWaterMark?: number;
	}) {
		super({ objectMode: true, highWaterMark });
		this.destination = destination;
		this.firstBytesToKeep = firstBytesToKeep;
		this.maxRetries = maxRetries;
	}

	private async writeChunk(
		chunk: SparseStreamChunk,
		flushing = false,
	): Promise<void> {
		let retries = 0;
		while (true) {
			try {
				this.position = chunk.position;
				await this.destination.write(
					chunk.buffer,
					0,
					chunk.buffer.length,
					chunk.position,
				);
				if (!flushing) {
					this.position += chunk.buffer.length;
					this.bytesWritten += chunk.buffer.length;
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

	private copyChunk(chunk: SparseStreamChunk): SparseStreamChunk {
		if (isAlignedLockableBuffer(chunk.buffer)) {
			const buffer = getAlignedBuffer(
				chunk.buffer.length,
				chunk.buffer.alignment,
			);
			chunk.buffer.copy(buffer);
			return { position: chunk.position, buffer };
		} else {
			return chunk;
		}
	}

	private async __write(chunk: SparseStreamChunk): Promise<void> {
		const unlock = isAlignedLockableBuffer(chunk.buffer)
			? await chunk.buffer.rlock()
			: noop;
		try {
			// Keep the first blocks in memory and write them once the rest has been written.
			// This is to prevent Windows from mounting the device while we flash it.
			if (chunk.position < this.firstBytesToKeep) {
				const end = chunk.position + chunk.buffer.length;
				if (end <= this.firstBytesToKeep) {
					this._firstChunks.push(this.copyChunk(chunk));
					this.position = chunk.position + chunk.buffer.length;
					this.bytesWritten += chunk.buffer.length;
				} else {
					const difference = this.firstBytesToKeep - chunk.position;
					this._firstChunks.push(
						this.copyChunk({
							position: chunk.position,
							buffer: chunk.buffer.slice(0, difference),
						}),
					);
					this.position = this.firstBytesToKeep;
					this.bytesWritten += difference;
					const remainingBuffer = chunk.buffer.slice(difference);
					await this.writeChunk({
						position: this.firstBytesToKeep,
						buffer: remainingBuffer,
					});
				}
			} else {
				await this.writeChunk(chunk);
			}
		} finally {
			unlock();
		}
	}

	public _write(
		chunk: SparseStreamChunk,
		_enc: string,
		callback: (error: Error | undefined) => void,
	): void {
		asCallback(this.__write(chunk), callback);
	}

	private async __final(): Promise<void> {
		try {
			for (const chunk of this._firstChunks) {
				await this.writeChunk(chunk, true);
			}
		} catch (error) {
			this.destroy();
			throw error;
		}
	}

	/**
	 * @summary Write buffered data before a stream ends, called by stream internals
	 */
	public _final(callback: (error?: Error | void) => void) {
		asCallback(this.__final(), callback);
	}
}

export const ProgressSparseWriteStream = makeClassEmitProgressEvents(
	SparseWriteStream,
	'bytesWritten',
	'position',
	PROGRESS_EMISSION_INTERVAL,
);
