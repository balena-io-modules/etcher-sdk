import { basename } from 'path';
import { ZipStreamEntry } from 'unzip-stream';

import { getFileStreamFromZipStream } from '../zip';
import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';

import { NotCapable } from '../errors';

const noop = () => {
};

export class ZipSource extends SourceDestination {
	static readonly mimetype = 'application/zip';
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

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		if (end !== undefined) {
			// TODO: capability?
			throw new NotCapable();
		}
		return await this.getEntry();
	}

	async getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
			name: basename(entry.path),
		};
	}

	protected async _open(): Promise<void> {
		await super._open();
		await this.source.open();
	}

	protected async _close(): Promise<void> {
		await super._close();
		await this.source.close();
	}
}
