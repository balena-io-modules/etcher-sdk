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

import { using } from 'bluebird';
import * as _debug from 'debug';
import { DiscardDiskChunk, Disk, ReadResult, WriteResult } from 'file-disk';
import { cloneDeep } from 'lodash';
import { getPartitions } from 'partitioninfo';
import { interact, AsyncFsLike } from 'resin-image-fs';

import BlockMap = require('blockmap');

import { configure as legacyConfigure } from './configure';
import { Metadata } from '../metadata';
import { SourceDestination, SourceDestinationFs } from '../source-destination';
import { SourceSource } from '../source-source';
import { NotCapable } from '../../errors';

const debug = _debug('etcher-sdk:configured-source');
const BLOCK_SIZE = 512;

export type ConfigureFunction = (disk: Disk, config: any) => Promise<void>;

export class SourceDisk extends Disk {
	constructor(private source: SourceDestination) {
		super(
			true, // readOnly
			true, // recordWrites
			true, // recordReads
			true, // discardIsZero
		);
	}

	async _getCapacity(): Promise<number> {
		// Don't create SourceDisks with sources that do not define a size
		const size = (await this.source.getMetadata()).size;
		if (size === undefined) {
			throw new NotCapable();
		}
		return size;
	}

	async _read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<ReadResult> {
		return await this.source.read(buffer, bufferOffset, length, fileOffset);
	}

	async _write(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		throw new Error("Can't write to a SourceDisk");
	}

	async _flush(): Promise<void> {}
}

export class ConfiguredSource extends SourceSource {
	private disk: SourceDisk;
	private configure?: ConfigureFunction;

	constructor(
		// source needs to implement read and createReadStream
		source: SourceDestination,
		private shouldTrimPartitions: boolean,
		private createStreamFromDisk: boolean,
		configure?: ConfigureFunction | 'legacy',
		private config?: any,
	) {
		super(source);
		this.disk = new SourceDisk(source);
		if (configure === 'legacy') {
			this.configure = legacyConfigure;
		} else {
			this.configure = configure;
		}
	}

	private async getBlockmap(): Promise<BlockMap> {
		return await this.disk.getBlockMap(BLOCK_SIZE, false);
	}

	async canRead(): Promise<boolean> {
		return true;
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		return true;
	}

	async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		return await this.disk.read(buffer, bufferOffset, length, sourceOffset);
	}

	async createReadStream(...args: any[]): Promise<NodeJS.ReadableStream> {
		const imageStream = await this.source.createReadStream(...args);
		const transform = this.disk.getTransformStream();
		imageStream.on('error', (err: Error) => {
			transform.emit('error', err);
		});
		imageStream.pipe(transform);
		return transform;
	}

	private async createSparseReadStreamFromDisk(
		generateChecksums: boolean,
	): Promise<BlockMap.ReadStream> {
		return new BlockMap.ReadStream('', await this.getBlockmap(), {
			verify: false,
			generateChecksums,
			fs: new SourceDestinationFs(this),
			chunkSize: 2 * 1024 * 1024, // TODO: constant
			autoClose: false,
		});
	}

	private async createSparseReadStreamFromStream(
		generateChecksums: boolean,
	): Promise<BlockMap.FilterStream> {
		const stream = await this.createReadStream();
		const blockMap = await this.getBlockmap();
		const transform = BlockMap.createFilterStream(blockMap, {
			verify: false,
			generateChecksums,
		});
		stream.on('error', transform.emit.bind(transform, 'error'));
		stream.pipe(transform);
		return transform;
	}

	async createSparseReadStream(
		generateChecksums: boolean,
	): Promise<BlockMap.FilterStream | BlockMap.ReadStream> {
		if (this.createStreamFromDisk) {
			return await this.createSparseReadStreamFromDisk(generateChecksums);
		} else {
			return await this.createSparseReadStreamFromStream(generateChecksums);
		}
	}

	async _getMetadata(): Promise<Metadata> {
		const metadata = cloneDeep(await this.source.getMetadata());
		metadata.blockMap = await this.getBlockmap();
		metadata.blockmappedSize =
			metadata.blockMap.blockSize * metadata.blockMap.mappedBlockCount;
		return metadata;
	}

	private async trimPartitions(): Promise<void> {
		const { partitions } = await getPartitions(this.disk, {
			includeExtended: false,
		});
		for (const partition of partitions) {
			try {
				await using(
					interact(this.disk, partition.index),
					async (fs: AsyncFsLike) => {
						if (fs.trimAsync !== undefined) {
							await fs.trimAsync();
						}
					},
				);
			} catch {
				// Unsupported filesystem
			}
		}
		const discards = this.disk.getDiscardedChunks();
		const discardedBytes = discards
			.map((d: DiscardDiskChunk) => {
				return d.end - d.start + 1;
			})
			.reduce((a: number, b: number) => {
				return a + b;
			}); // TODO: discarededBytes in metadata ?
		const metadata = await this.getMetadata();
		if (metadata.size !== undefined) {
			const percentage = Math.round((discardedBytes / metadata.size) * 100);
			debug(
				`discarded ${
					discards.length
				} chunks, ${discardedBytes} bytes, ${percentage}% of the image`,
			);
		}
	}

	protected async _open(): Promise<void> {
		await super._open();
		if (this.configure !== undefined) {
			await this.configure(this.disk, this.config);
		}
		if (this.shouldTrimPartitions) {
			await this.trimPartitions();
		}
	}

	protected async _close(): Promise<void> {
		await super._close();
	}
}
