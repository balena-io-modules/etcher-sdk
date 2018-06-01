import { Blockmap, createFilterStream, FilterStream, ReadStream } from 'blockmap';
import { using } from 'bluebird';
import * as _debug from 'debug';
import { DiscardDiskChunk, Disk, ReadResult, WriteResult } from 'file-disk';
import { getPartitions } from 'partitioninfo';
import { interact, AsyncFsLike } from 'resin-image-fs';

import { configure as legacyConfigure } from './configure';
import { Metadata } from '../metadata';
import { SourceDestination, SourceDestinationFs } from '../source-destination';

const debug = _debug('etcher-sdk:configured-source');
const BLOCK_SIZE = 512;

export type ConfigureFunction = (disk: Disk, config: any) => Promise<void>;

export class SourceDisk extends Disk {
	constructor(private source: SourceDestination) {
		super(
			true,  // readOnly
			true,  // recordWrites
			true,  // recordReads
			true,  // discardIsZero
		);
	}

	async _getCapacity(): Promise<number> {
		return (await this.source.getMetadata()).size;
	}

	async _read(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<ReadResult> {
		return await this.source.read(buffer, bufferOffset, length, fileOffset);
	}

	async _write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		throw new Error("Can't write to a SourceDisk");
	}

	async _flush(): Promise<void> {
	}
}

export class ConfiguredSource extends SourceDestination {
	private disk: SourceDisk;
	private configure?: ConfigureFunction;

	constructor(
		// source needs to implement read and createReadStream
		private source: SourceDestination,
		private shouldTrimPartitions: boolean,
		private createStreamFromDisk: boolean,
		configure?: ConfigureFunction | 'legacy',
		private config?: any,
	) {
		super();
		this.disk = new SourceDisk(source);
		if (configure === 'legacy') {
			this.configure = legacyConfigure;
		} else {
			this.configure = configure;
		}
	}

	private async getBlockmap(): Promise<Blockmap> {
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

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await this.disk.read(buffer, bufferOffset, length, sourceOffset);
	}

	async _createReadStream(): Promise<NodeJS.ReadableStream> {
		const imageStream = await this.source.createReadStream();
		const transform = this.disk.getTransformStream();
		imageStream.on('error', (err) => {
			transform.emit('error', err);
		});
		imageStream.pipe(transform);
		return transform;
	}

	private async createSparseReadStreamFromDisk(generateChecksums: boolean): Promise<ReadStream> {
		return new ReadStream(
			'',
			await this.getBlockmap(),
			{
				verify: false,
				generateChecksums,
				fs: new SourceDestinationFs(this),
			}
		);
	}

	private async createSparseReadStreamFromStream(generateChecksums: boolean): Promise<FilterStream> {
		const stream = await this.createReadStream();
		const blockmap = await this.getBlockmap();
		const transform = createFilterStream(blockmap, { verify: false, generateChecksums });
		stream.on('error', transform.emit.bind(transform, 'error'));
		stream.pipe(transform);
		return transform;
	}

	async _createSparseReadStream(generateChecksums: boolean): Promise<FilterStream | ReadStream> {
		if (this.createStreamFromDisk) {
			return await this.createSparseReadStreamFromDisk(generateChecksums);
		} else {
			return await this.createSparseReadStreamFromStream(generateChecksums);
		}
	}

	async getMetadata(): Promise<Metadata> {
		const metadata = await this.source.getMetadata();
		const blockmap = await this.getBlockmap();
		metadata.blockmappedSize = blockmap.blockSize * blockmap.mappedBlockCount;
		return metadata;
	}

	private async trimPartitions(): Promise<void> {
		const { partitions } = await getPartitions(this.disk, { includeExtended: false });
		for (const partition of partitions) {
			try {
				await using(interact(this.disk, partition.index), async (fs: AsyncFsLike) => {
					if (fs.trimAsync !== undefined) {
						await fs.trimAsync();
					}
				});
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
		});  // TODO: discarededBytes in metadata ?
		const metadata = await this.getMetadata();
		const percentage = Math.round(discardedBytes / metadata.size * 100);
		debug(`discarded ${discards.length} chunks, ${discardedBytes} bytes, ${percentage}% of the image`);
	}

	async open(): Promise<void> {
		await super.open();
		await this.source.open();
		if (this.configure !== undefined) {
			await this.configure(this.disk, this.config);
		}
		if (this.shouldTrimPartitions) {
			await this.trimPartitions();
		}
	}

	async close(): Promise<void> {
		await this.source.close();
		await super.close();
	}
}
