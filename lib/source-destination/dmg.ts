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

import { promisify } from 'bluebird';
import * as _ from 'lodash';
import { BLOCK, CHECKSUM_TYPE, Image as UDIFImage, SECTOR_SIZE } from 'udif';

import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';
import { SourceSource } from './source-source';

import { NotCapable } from '../errors';
import {
	Block,
	blocksLength,
	BlocksWithChecksum,
	SparseReadable,
} from '../sparse-stream/shared';
import { StreamLimiter } from '../stream-limiter';

export class DmgSource extends SourceSource {
	private static mappedBlockTypes = [
		BLOCK.RAW,
		BLOCK.UDCO,
		BLOCK.UDZO,
		BLOCK.UDBZ,
		BLOCK.LZFSE,
	];
	public static requiresRandomReadableSource = true;
	public static readonly mimetype = 'application/x-apple-diskimage';
	private image: UDIFImage;

	constructor(source: SourceDestination) {
		super(source);
		this.image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
	}

	public async canCreateReadStream() {
		return true;
	}

	public async canCreateSparseReadStream() {
		return true;
	}

	public async createReadStream(
		_emitProgress = false,
		start = 0,
		end?: number,
	): Promise<NodeJS.ReadableStream> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const stream = await this.image.createReadStream();
		if (end !== undefined) {
			const transform = new StreamLimiter(stream, end + 1);
			return transform;
		}
		return stream;
	}

	public async createSparseReadStream(
		_generateChecksums: boolean,
	): Promise<SparseReadable> {
		return Object.assign(this.image.createSparseReadStream(), {
			blocks: await this.getBlocks(),
		});
	}

	public async getBlocks(): Promise<BlocksWithChecksum[]> {
		const result: BlocksWithChecksum[] = [];
		for (const blk of this.image.resourceFork.blkx) {
			const childBlocks = blk.map.blocks.filter(b =>
				DmgSource.mappedBlockTypes.includes(b.type),
			);
			if (childBlocks.length === 0) {
				continue;
			}
			let checksumType: 'crc32' | undefined;
			let checksum: string | undefined;
			if (blk.map.checksum.type === CHECKSUM_TYPE.CRC32) {
				checksumType = 'crc32';
				checksum = blk.map.checksum.value;
			}
			const blocks: Block[] = [];
			result.push({ checksumType, checksum, blocks });
			for (const childBlk of childBlocks) {
				const offset =
					(blk.map.sectorNumber + childBlk.sectorNumber) * SECTOR_SIZE;
				const length = childBlk.sectorCount * SECTOR_SIZE;
				blocks.push({ offset, length });
			}
		}
		return result;
	}

	protected async _getMetadata(): Promise<Metadata> {
		const blocks = await this.getBlocks();
		const blockmappedSize = blocksLength(blocks);
		const compressedSize = (await this.source.getMetadata()).size;
		const size = this.image.getUncompressedSize();
		return { blocks, blockmappedSize, compressedSize, size };
	}

	protected async _open(): Promise<void> {
		await super._open();
		await promisify(this.image.open).bind(this.image)();
	}

	protected async _close(): Promise<void> {
		await promisify(this.image.close).bind(this.image)();
		await super._close();
	}
}

SourceDestination.register(DmgSource);
