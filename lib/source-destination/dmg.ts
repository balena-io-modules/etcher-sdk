import { FilterStream } from 'blockmap';
import { promisify } from 'bluebird';
import { ReadResult } from 'file-disk';
import * as _ from 'lodash';
import StreamLimiter = require('stream-limiter');
import { BLOCK, SECTOR_SIZE, Image as UDIFImage } from 'udif';

import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';
import { SourceSource } from './source-source';

import { NotCapable } from '../errors';

export class DmgSource extends SourceSource {
	static readonly mimetype = 'application/x-apple-diskimage';
	private image: UDIFImage;

	constructor(source: SourceDestination) {
		super(source);
		this.image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
	}

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		const stream = await this.image.createReadStream();
		if (end !== undefined) {
			const transform = new StreamLimiter(end + 1);
			stream.pipe(transform);
			return transform;
		}
		return stream;
	}

	async _createSparseReadStream(generateChecksums: boolean): Promise<FilterStream> {
		// We don't care about generateChecksums here as the blockmap already has checksums.
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
