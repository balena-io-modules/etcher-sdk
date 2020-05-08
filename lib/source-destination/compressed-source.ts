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

import { GPTPartition, MBRPartition } from 'partitioninfo';
import { basename, extname } from 'path';
import { Transform } from 'stream';

import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';
import { Metadata } from './metadata';
import { CreateReadStreamOptions } from './source-destination';
import { SourceSource } from './source-source';

export interface SourceTransform extends Transform {
	sourceStream: NodeJS.ReadableStream;
}

export function isSourceTransform(stream: any): stream is SourceTransform {
	return (stream as SourceTransform).sourceStream !== undefined;
}

export function getRootStream(
	stream: NodeJS.ReadableStream,
): NodeJS.ReadableStream {
	while (isSourceTransform(stream)) {
		stream = stream.sourceStream;
	}
	return stream;
}

export abstract class CompressedSource extends SourceSource {
	protected abstract createTransform(): Transform;

	protected async getSize(): Promise<
		{ size: number; isEstimated: boolean } | undefined
	> {
		return;
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public async createReadStream({
		emitProgress = false,
		start = 0,
		end,
	}: CreateReadStreamOptions = {}): Promise<SourceTransform> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const stream = await this.source.createReadStream({ emitProgress });
		// as any because we need to add the sourceStream property
		const transform = this.createTransform() as any;
		stream.pipe(transform);
		transform.sourceStream = stream;
		if (end !== undefined) {
			const limiter = new StreamLimiter(transform, end + 1) as any;
			limiter.sourceStream = transform;
			limiter.on('finish', () => {
				// Ignore EBADF errors after this:
				// We might be still reading the source stream from a closed fd
				stream.on('error', (err: NodeJS.ErrnoException) => {
					if (err.code !== 'EBADF') {
						throw err;
					}
				});
			});
			return limiter;
		}
		return transform;
	}

	protected async getSizeFromPartitionTable(): Promise<number | undefined> {
		try {
			const partitions = await this.getPartitionTable();
			if (partitions !== undefined) {
				const lastByte = Math.max(
					...(partitions.partitions as Array<GPTPartition | MBRPartition>).map(
						({ offset, size }) => offset + size,
					),
				);
				if (lastByte !== -Infinity) {
					return lastByte;
				}
			}
		} catch (error) {
			// noop
		}
	}

	protected async _getMetadata(): Promise<Metadata> {
		const sourceMetadata = await this.source.getMetadata();
		const compressedSize = sourceMetadata.compressedSize || sourceMetadata.size;
		const size = await this.getSize();
		let name;
		if (sourceMetadata.name !== undefined) {
			name = basename(sourceMetadata.name, extname(sourceMetadata.name));
		}
		return {
			isCompressed: true,
			name,
			size: size?.size,
			compressedSize,
			isSizeEstimated: size?.isEstimated,
		};
	}
}
