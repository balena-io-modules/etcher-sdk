import BlockMap = require('blockmap');
import { sortBy, values  } from 'lodash';
import ZipStream = require('node-stream-zip');
import { extname, basename, dirname, join } from 'path';
import { ZipStreamEntry } from 'unzip-stream';

import { getFileStreamFromZipStream } from '../zip';
import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';
import { SourceSource } from './source-source';

import { NotCapable } from '../errors';
import { streamToBuffer } from '../utils';

export class StreamZipSource extends SourceSource {
	private entry?: ZipStreamEntry;

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	private async getEntry(): Promise<ZipStreamEntry> {
		if (this.entry === undefined) {
			this.entry = await getFileStreamFromZipStream(await this.source.createReadStream());
			// We need to reset the entry if any read happens
			const originalRead = this.entry._read.bind(this.entry);
			this.entry._read = (...args: any[]) => {
				if (this.entry !== undefined) {
					this.entry._read = originalRead;
					this.entry = undefined;
				}
				return originalRead(...args);
			};
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

	async _getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
			name: basename(entry.path),
		};
	}
}

export class RandomAccessZipSource extends SourceSource {
	private static manifestFields: (keyof Metadata)[] = [
		'bytesToZeroOutFromTheBeginning',
		'checksum',
		'checksumType',
		'recommendedDriveSize',
		'releaseNotesUrl',
		'supportUrl',
		'url',
		'version',
	];
	private zip: ZipStream;
	private ready: Promise<void>;

	constructor(source: SourceDestination) {
		super(source);
		// TODO: We can only set one global custom fs in ZipStream (node-stream-zip package).
		// This means that we can't have multiple instances of RandomAccessZipSource at the same time.
		// This needs to be addressed in node-stream-zip.
		ZipStream.setFs(new SourceDestinationFs(this.source));
		this.zip = new ZipStream({ file: '', storeEntries: true });
		this.ready = new Promise((resolve, reject) => {
			this.zip.on('error', reject);
			this.zip.on('ready', resolve);
		});
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		const metadata = await this.getMetadata();
		return metadata.bmap !== undefined;
	}

	private async getEntries(): Promise<ZipStream.ZipEntry[]> {
		await this.ready;
		return values(this.zip.entries());
	}

	private async getImageEntry(): Promise<ZipStream.ZipEntry> {
		let entries = (await this.getEntries()).filter((entry) => {
			const extension = extname(entry.name);
			return ((extension.length > 1) && SourceDestination.imageExtensions.includes(extension.slice(1)));
		});
		if (entries.length === 0) {
			throw new Error('Could not find a disk image in this archive');
		}
		entries = sortBy(entries, 'size');
		return entries[entries.length - 1];
	}

	private async getStream(path: string): Promise<NodeJS.ReadableStream> {
		return await new Promise((resolve: (stream: NodeJS.ReadableStream) => void, reject: (error: Error) => void) => {
			this.zip.stream(path, (error: Error | null, stream: NodeJS.ReadableStream) => {
				if (error) {
					reject(error);
				} else {
					resolve(stream);
				}
			});
		});
	}

	private async getString(path: string): Promise<string | undefined> {
		try {
			const stream = await this.getStream(path);
			const buffer = await streamToBuffer(stream);
			return buffer.toString();
		} catch (error) {
			// TODO: debug
		}
	}

	private async getJson(path: string): Promise<any> {
		try {
			const data = await this.getString(path);
			if (data !== undefined) {
				return JSON.parse(data);
			}
		} catch (error) {
			// TODO: debug
		}
	}

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		if (end !== undefined) {
			// TODO: capability?
			throw new NotCapable();
		}
		const entry = await this.getImageEntry();
		return await this.getStream(entry.name);
	}

	async _createSparseReadStream(generateChecksums = false): Promise<BlockMap.FilterStream> {
		const metadata = await this.getMetadata();
		if (metadata.bmap === undefined) {
			throw new NotCapable();
		}
		// Verifying and generating checksums makes no sense, so we only verify if generateChecksums is false.
		const transform = BlockMap.createFilterStream(metadata.bmap, { verify: !generateChecksums, generateChecksums });
		const stream = await this.createReadStream();
		stream.pipe(transform);
		return transform;
	}

	async _getMetadata(): Promise<Metadata> {
		const entry = await this.getImageEntry();
		const result: Metadata = {
			size: entry.size,
			compressedSize: entry.compressedSize,
		};
		const prefix = join(dirname(entry.name), '.meta');
		const entries = await this.getEntries();
		result.logo = await this.getString(join(prefix, 'logo.svg'));
		result.instructions = await this.getString(join(prefix, 'instructions.markdown'));
		let bmap = await this.getString(join(prefix, 'image.bmap'));
		if (bmap !== undefined) {
			result.bmap = BlockMap.parse(bmap);
		}
		let manifest = await this.getJson(join(prefix, 'manifest.json'));
		let name;
		if (manifest !== undefined) {
			name = manifest.name;
			for (const key of RandomAccessZipSource.manifestFields) {
				result[key] = manifest[key];
			}
		}
		result.name = name || basename(entry.name);
		return result;
	}
}

export class ZipSource extends SourceSource {
	static readonly mimetype = 'application/zip';
	private implementation: RandomAccessZipSource | StreamZipSource;

	constructor(source: SourceDestination, private preferStreamSource = false) {
		super(source);
	}

	private async prepare() {
		if (this.implementation === undefined) {
			if (!this.preferStreamSource && (await this.source.canRead())) {
				this.implementation = new RandomAccessZipSource(this.source);
			} else {
				this.implementation = new StreamZipSource(this.source);
			}
		}
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		await this.prepare();
		return await this.implementation.canCreateSparseReadStream();
	}

	async _createReadStream(end?: number): Promise<NodeJS.ReadableStream> {
		await this.prepare();
		return await this.implementation._createReadStream(end);
	}

	async _createSparseReadStream(generateChecksums = false): Promise<BlockMap.FilterStream | BlockMap.ReadStream> {
		await this.prepare();
		return await this.implementation._createSparseReadStream(generateChecksums);
	}

	async _getMetadata(): Promise<Metadata> {
		await this.prepare();
		return await this.implementation.getMetadata();
	}
}

SourceDestination.register(ZipSource);
