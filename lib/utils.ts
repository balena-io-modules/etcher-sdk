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

export async function streamToBuffer(
	stream: NodeJS.ReadableStream,
): Promise<Buffer> {
	return await new Promise(
		(resolve: (buffer: Buffer) => void, reject: (error: Error) => void) => {
			const chunks: Buffer[] = [];
			stream.on('error', reject);
			stream.on('data', async (chunk: Buffer) => {
				let data: Buffer;
				if (isAlignedLockableBuffer(chunk)) {
					const unlock = await chunk.rlock();
					data = Buffer.allocUnsafe(chunk.length);
					chunk.copy(data);
					unlock();
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
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		stream.on('error', reject);
		stream.on('end', resolve);
		stream.on('data', async (chunk: SparseStreamChunk) => {
			if (isAlignedLockableBuffer(chunk.buffer)) {
				const unlock = await chunk.buffer.rlock();
				const data = Buffer.allocUnsafe(chunk.buffer.length);
				chunk.buffer.copy(data);
				unlock();
				chunk.buffer = data;
			}
			chunks.push(chunk);
		});
	});
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
	callback: (error: Error | void, value?: T) => void,
): Promise<void> {
	try {
		const value = await promise;
		callback(undefined, value);
	} catch (error) {
		callback(error);
	}
}

export function noop() {
	// noop
}
