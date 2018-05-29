import { ReadResult } from 'file-disk';
import * as _ from 'lodash';
import { BLOCK, SECTOR_SIZE, Image as UDIFImage } from 'udif';
import { promisify } from 'util';

import { Metadata } from './metadata';
import { makeStreamEmitProgressEvents } from './progress-event';
import { SourceDestination, SourceDestinationFs } from './source-destination';

export class DmgSource extends SourceDestination {
	private image: UDIFImage;

	constructor(private source: SourceDestination) {
		super();
		this.image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return await makeStreamEmitProgressEvents(this.image.createReadStream(), this);
	}

	async createSparseReadStream(): Promise<NodeJS.ReadableStream> {
		return await makeStreamEmitProgressEvents(this.image.createSparseReadStream(), this);
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

	async open(): Promise<void> {
		await super.open();
		await this.source.open();
		await promisify(this.image.open).bind(this.image)();
	}

	async close(): Promise<void> {
		await super.close();
		await promisify(this.image.close).bind(this.image)();
		await this.source.close();
	}
}
