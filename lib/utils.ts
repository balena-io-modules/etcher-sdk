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

import { isAlignedLockableBuffer } from './aligned-lockable-buffer';
import { SparseStreamChunk } from './sparse-stream/shared';

export interface Dictionary<T> {
	[key: string]: T;
}

export function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
	return new Promise(
		(resolve: (buffer: Buffer) => void, reject: (error: Error) => void) => {
			const chunks: Buffer[] = [];
			stream.on('error', reject);
			stream.on('data', async (chunk: Buffer) => {
				let data: Buffer;
				if (isAlignedLockableBuffer(chunk)) {
					const unlock = await chunk.rlock();
					try {
						data = Buffer.allocUnsafe(chunk.length);
						chunk.copy(data);
					} finally {
						unlock();
					}
				} else {
					data = chunk;
				}
				chunks.push(data);
			});
			stream.on('end', () => {
				resolve(Buffer.concat(chunks));
			});
			// The stream may have been explicitely paused
			stream.resume();
		},
	);
}

export async function sparseStreamToBuffer(
	stream: NodeJS.ReadableStream,
): Promise<Buffer> {
	const chunks: SparseStreamChunk[] = [];
	await new Promise<void>(
		(resolve: () => void, reject: (error: Error) => void) => {
			stream.on('error', reject);
			stream.on('end', resolve);
			stream.on('data', async (chunk: SparseStreamChunk) => {
				if (isAlignedLockableBuffer(chunk.buffer)) {
					let unlock;
					try {
						unlock = await chunk.buffer.rlock();
					} catch (error) {
						reject(error);
						return;
					}
					let data;
					try {
						data = Buffer.allocUnsafe(chunk.buffer.length);
						chunk.buffer.copy(data);
					} finally {
						unlock();
					}
					chunk.buffer = data;
				}
				chunks.push(chunk);
			});
		},
	);
	if (chunks.length === 0) {
		return Buffer.alloc(0);
	}
	const lastChunk = chunks[chunks.length - 1];
	const result = Buffer.alloc(lastChunk.position + lastChunk.buffer.length);
	for (const chunk of chunks) {
		chunk.buffer.copy(result, chunk.position);
	}
	return result;
}

export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
	const _difference = new Set(setA);
	for (const elem of setB) {
		_difference.delete(elem);
	}
	return _difference;
}

export async function asCallback<T>(
	promise: Promise<T>,
	callback: (error?: Error | null, value?: T) => void,
): Promise<void> {
	try {
		const value = await promise;
		callback(null, value);
	} catch (error) {
		callback(error);
	}
}

export async function fromCallback<T>(
	fn: (callback: (error?: Error | null, result?: T) => void) => void,
): Promise<T> {
	return await new Promise<T>((resolve, reject) => {
		fn((error: Error | null, result: T) => {
			if (error != null) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

export async function delay(ms: number): Promise<void> {
	await new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

export function minBy<T>(
	things: Iterable<T>,
	iteratee: (thing: T) => number,
): T | undefined {
	let result: T | undefined;
	let minimum: number | undefined;
	for (const t of things) {
		const value = iteratee(t);
		if (minimum === undefined || value < minimum) {
			minimum = value;
			result = t;
		}
	}
	return result;
}

export function maxBy<T>(
	things: Iterable<T>,
	iteratee: (thing: T) => number,
): T | undefined {
	return minBy(things, (t) => -iteratee(t));
}

export function sumBy<T>(
	things: Iterable<T>,
	iteratee: (thing: T) => number,
): number {
	let result = 0;
	for (const t of things) {
		result += iteratee(t);
	}
	return result;
}

export function every<T>(things: Iterable<T>): boolean {
	for (const t of things) {
		if (!t) {
			return false;
		}
	}
	return true;
}

export function once<T>(fn: () => T): () => T {
	let ran = false;
	let result: T;
	return () => {
		if (!ran) {
			result = fn();
			ran = true;
		}
		return result;
	};
}
