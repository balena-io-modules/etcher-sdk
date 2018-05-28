import { ZipStreamEntry } from 'unzip-stream';

import { getFileStreamFromZipStream } from '../zip';
import { Metadata } from './metadata';
import { makeStreamEmitProgressEvents } from './progress-event';
import { SourceDestination } from './source-destination';

const noop = () => {
};

export class ZipSource extends SourceDestination {
	private entry: ZipStreamEntry;

	constructor(private source: SourceDestination) {
		super();
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	private async getEntry(): Promise<ZipStreamEntry> {
		if (this.entry === undefined) {
			this.entry = await getFileStreamFromZipStream(await this.source.createReadStream());
		}
		return this.entry;
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return await makeStreamEmitProgressEvents(await this.getEntry(), this);
	}

	async getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
		};
	}

	async open(): Promise<void> {
		await this.source.open();
	}

	async close(): Promise<void> {
		await this.source.close();
	}
}
