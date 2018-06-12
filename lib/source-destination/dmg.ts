import { FilterStream } from 'blockmap';
import { promisify } from 'bluebird';
import { ReadResult } from 'file-disk';
import * as _ from 'lodash';
import { BLOCK, SECTOR_SIZE, Image as UDIFImage } from 'udif';

import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';

import { NotCapable } from '../errors';

export class DmgSource extends SourceDestination {
	static readonly mimetype = 'application/x-apple-diskimage';
	private image: UDIFImage;

	constructor(private source: SourceDestination) {
		super();
		this.image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
	}

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		if (end !== undefined) {
			// TODO stream end capability?
			throw new NotCapable();
		}
		return this.image.createReadStream();
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

	async getMetadata(): Promise<Metadata> {
		const compressedSize = (await this.source.getMetadata()).size;
		return {
			compressedSize,
			size: this.image.getUncompressedSize(),
			blockmappedSize: this.getMappedBlocksSize(),
		};
	}

	protected async _open(): Promise<void> {
		await super._open();
		await this.source.open();
		await promisify(this.image.open).bind(this.image)();
	}

	protected async _close(): Promise<void> {
		await super._close();
		await promisify(this.image.close).bind(this.image)();
		await this.source.close();
	}
}

SourceDestination.register(DmgSource);
