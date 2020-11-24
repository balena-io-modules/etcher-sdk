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

import { getAlignedBuffer } from '@ronomon/direct-io';
import * as _debug from 'debug';
import { Writable } from 'stream';

import { AlignedLockableBuffer } from './aligned-lockable-buffer';
import { RETRY_BASE_TIMEOUT } from './constants';
import { retryOnTransientError } from './errors';
import { BlockDevice } from './source-destination/block-device';
import { makeClassEmitProgressEvents } from './source-destination/progress';
import { asCallback } from './utils';

const debug = _debug('etcher:writer:block-write-stream');

export class BlockWriteStream extends Writable {
	private destination: BlockDevice;
	private delayFirstBuffer: boolean;
	private maxRetries: number;
	public bytesWritten = 0;
	private position = 0;
	private firstBuffer?: Buffer;

	constructor({
		destination,
		highWaterMark,
		delayFirstBuffer = false,
		maxRetries = 5,
	}: {
		destination: BlockDevice;
		highWaterMark?: number;
		delayFirstBuffer?: boolean;
		maxRetries?: number;
	}) {
		super({ objectMode: true, highWaterMark });
		this.destination = destination;
		this.delayFirstBuffer = delayFirstBuffer;
		this.maxRetries = maxRetries;
	}

	private async writeBuffer(buffer: Buffer, position: number): Promise<void> {
		await retryOnTransientError(
			async () => {
				await this.destination.write(buffer, 0, buffer.length, position);
			},
			this.maxRetries,
			RETRY_BASE_TIMEOUT,
		);
	}

	private async __write(buffer: AlignedLockableBuffer): Promise<void> {
		const unlock = await buffer.rlock();
		debug('_write', buffer.length, this.position, this.bytesWritten);
		try {
			// Keep the first buffer in memory and write it once the rest has been written.
			// This is to prevent Windows from mounting the device while we flash it.
			if (this.delayFirstBuffer && this.firstBuffer === undefined) {
				this.firstBuffer = getAlignedBuffer(buffer.length, buffer.alignment);
				buffer.copy(this.firstBuffer);
			} else {
				await this.writeBuffer(buffer, this.position);
				this.bytesWritten += buffer.length;
			}
			this.position += buffer.length;
		} finally {
			unlock();
		}
	}

	public _write(
		buffer: AlignedLockableBuffer,
		_encoding: string,
		callback: (error: Error | undefined) => void,
	) {
		asCallback(this.__write(buffer), callback);
	}

	private async __final(): Promise<void> {
		debug('_final');
		if (this.firstBuffer) {
			try {
				await this.writeBuffer(this.firstBuffer, 0);
				this.bytesWritten += this.firstBuffer.length;
			} catch (error) {
				this.destroy();
				throw error;
			}
		}
	}

	/**
	 * @summary Write buffered data before a stream ends, called by stream internals
	 */
	public _final(callback: (error?: Error | null) => void) {
		asCallback(this.__final(), callback);
	}
}

export const ProgressBlockWriteStream = makeClassEmitProgressEvents(
	BlockWriteStream,
	'bytesWritten',
	'bytesWritten',
);
