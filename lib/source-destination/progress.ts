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

import { Chunk } from 'blockmap';
import { EventEmitter } from 'events';
import { Writable } from 'stream';

import { PROGRESS_EMISSION_INTERVAL, SPEED_WINDOW } from '../constants';
import { Speedometer } from '../speedometer';

export type Constructor<T> = new (...args: any[]) => T;

export interface ProgressEvent {
	position: number; // Position in file
	bytes: number; // Number of bytes read
	speed: number; // Current speed in bytes per second (based on bytes, not position)
	averageSpeed: number; // Average speed in bytes per second (based on bytes, not position)
}

export function makeClassEmitProgressEvents<
	T extends Constructor<EventEmitter>,
>(
	Cls: T,
	attribute: string,
	positionAttribute: string,
	interval = PROGRESS_EMISSION_INTERVAL,
) {
	// This returns a class that extends Cls, tracks for `attribute` updates and emits `progress` events every `interval` based on it.
	//  * the type of `attribute` must be a number;
	//  * the position attribute of emitted events will be copied from the `positionAttribute` of the instances.
	return class extends Cls {
		constructor(...args: any[]) {
			super(...args);

			const startTime = Date.now();
			const meter = new Speedometer(SPEED_WINDOW);
			const state: ProgressEvent = {
				position: 0,
				bytes: 0,
				speed: 0,
				averageSpeed: 0,
			};

			// @ts-ignore
			let attributeValue: number = this[attribute];

			const update = () => {
				// @ts-ignore
				const newValue: number = this[attribute];
				const attributeDelta = newValue - attributeValue;
				if (attributeDelta === 0) {
					return;
				}
				attributeValue = newValue;
				state.bytes += attributeDelta;
				// Ignore because I don't know how to express that positionAttribute is a key of T instances
				// @ts-ignore
				const position = this[positionAttribute];
				if (position !== undefined) {
					state.position = position;
				}
				state.speed = meter.speed(attributeDelta);
				state.averageSpeed = (state.bytes / (Date.now() - startTime)) * 1000;
				this.emit('progress', state);
			};

			// TODO: setInterval only when attribute is set
			const timer = setInterval(update, interval);

			const clear = () => {
				clearInterval(timer);
			};

			this.once('error', clear);
			// Writable streams
			this.once('finish', clear);
			this.once('finish', update);
			// Readable streams
			this.once('end', clear);
			this.once('end', update);
		}
	};
}

export class CountingWritable extends Writable {
	public bytesWritten = 0;
	public position: number | undefined;

	public _write(
		chunk: Buffer | Chunk,
		_enc: string,
		callback: (err?: Error | undefined) => void,
	): void {
		if (Buffer.isBuffer(chunk)) {
			this.bytesWritten = this.position = this.bytesWritten + chunk.length;
		} else {
			this.bytesWritten += chunk.buffer.length;
			this.position = chunk.position + chunk.buffer.length;
		}
		callback();
	}
}

export const ProgressWritable = makeClassEmitProgressEvents(
	CountingWritable,
	'bytesWritten',
	'position',
);
