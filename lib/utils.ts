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

export const streamToBuffer = async (stream: NodeJS.ReadableStream): Promise<Buffer> => {
	return await new Promise((resolve: (buffer: Buffer) => void, reject: (error: Error) => void) => {
		const chunks: Buffer[] = [];
		stream.on('error', reject);
		stream.on('data', chunks.push.bind(chunks));
		stream.on('end', () => {
			resolve(Buffer.concat(chunks));
		});
	});
};

export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
	const _difference = new Set(setA);
	for (const elem of setB) {
		_difference.delete(elem);
	}
	return _difference;
}

export function asCallback(promise: Promise<any>, callback: (error: Error | void, value?: any) => void) {
	promise.then((value: any) => {
		callback(undefined, value);
	}).catch(callback);
}
