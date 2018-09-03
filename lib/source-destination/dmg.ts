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

import { FilterStream } from 'blockmap';
import { promisify } from 'bluebird';
import { ReadResult } from 'file-disk';
import * as _ from 'lodash';
import { BLOCK, SECTOR_SIZE, Image as UDIFImage } from 'udif';

import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';
import { SourceSource } from './source-source';

import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';

export class DmgSource extends SourceSource {
	static readonly mimetype = 'application/x-apple-diskimage';
	private image: UDIFImage;

	constructor(source: SourceDestination) {
		super(source);
		this.image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
	}

	async canCreateReadStream() {
		return true;
	}

	async canCreateSparseReadStream() {
		// TODO: We act like we can't create sparse streams because we have no way to verify
		// flashed images.
		// This is because node-udif does not use blockmap but implements its own BlockMap
		// We need a function to extract a regular BlockMap from the UDIFImage.
		//return true;
		return false;
	}

	async createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
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

	async createSparseReadStream(generateChecksums: boolean): Promise<FilterStream> {
		return this.image.createSparseReadStream();
	}

	getMappedBlocksSize = () => {
		return _(this.image.resourceFork.blkx)
		.map('map.blocks')
		.flatten()
		.filter((blk: any) => ([ BLOCK.RAW, BLOCK.UDCO, BLOCK.UDZO, BLOCK.UDBZ, BLOCK.LZFSE ].indexOf(blk.type) !== -1))
		.map((blk) => blk.sectorCount * SECTOR_SIZE)
		.sum();
	}

	async _getMetadata(): Promise<Metadata> {
		const compressedSize = (await this.source.getMetadata()).size;
		return {
			compressedSize,
			size: this.image.getUncompressedSize(),
			blockmappedSize: this.getMappedBlocksSize(),
		};
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
