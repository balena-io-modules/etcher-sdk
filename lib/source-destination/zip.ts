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

import { fromCallback } from 'bluebird';
import BlockMap = require('blockmap');
import { sortBy, values  } from 'lodash';
import { posix } from 'path';
import { PassThrough } from 'readable-stream';
import { Entry, fromRandomAccessReader, RandomAccessReader, ZipFile } from 'yauzl';
import { ZipStreamEntry } from 'unzip-stream';

import { getFileStreamFromZipStream } from '../zip';
import { Metadata } from './metadata';
import { SourceDestination, SourceDestinationFs } from './source-destination';
import { SourceSource } from './source-source';

import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';
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

	async _createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const stream = await this.getEntry();
		if (end !== undefined) {
			// TODO: handle errors on stream after transform finsh event
			const transform = new StreamLimiter(stream, end + 1);
			return transform;
		}
		return stream;
	}

	async _getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
			name: posix.basename(entry.path),
		};
	}
}

class SourceRandomAccessReader extends RandomAccessReader {
	constructor(private source: SourceDestination) {
		super();
	}

	_readStreamForRange(start: number, end: number) {
		// _readStreamForRange end is exclusive
		// this.source.createReadStream end is inclusive
		// Workaround this method not being async with a passthrough stream
		const passthrough = new PassThrough();
		this.source.createReadStream(start, end - 1)
		.then((stream) => {
			stream.on('error', passthrough.emit.bind(passthrough, 'error'));
			stream.pipe(passthrough);
		})
		.catch(passthrough.emit.bind(passthrough, 'error'));
		return passthrough;
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
	private zip: ZipFile;
	private ready: Promise<void>;
	private entries: Entry[] = [];

	constructor(source: SourceDestination) {
		super(source);
		this.ready = this.init();
	}

	async init() {
		const sourceMetadata = await this.source.getMetadata();
		const reader = new SourceRandomAccessReader(this.source);
		this.zip = await fromCallback((callback) => {
			if (sourceMetadata.size === undefined) {
				throw new NotCapable();
			}
			fromRandomAccessReader(reader, sourceMetadata.size, { autoClose: false }, callback);
		});
		this.zip.on('entry', (entry: Entry) => {
			this.entries.push(entry);
		});
		await new Promise((resolve, reject) => {
			this.zip.on('end', resolve);
			this.zip.on('error', reject);
		});
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		const metadata = await this.getMetadata();
		return metadata.blockMap !== undefined;
	}

	private async getEntries(): Promise<Entry[]> {
		await this.ready;
		return this.entries;
	}

	private async getImageEntry(): Promise<Entry> {
		let entries = (await this.getEntries()).filter((entry) => {
			const extension = posix.extname(entry.fileName);
			return ((extension.length > 1) && SourceDestination.imageExtensions.includes(extension.slice(1)));
		});
		if (entries.length === 0) {
			throw new Error('Could not find a disk image in this archive');
		}
		entries = sortBy(entries, 'uncompressedSize');
		const entry = entries[entries.length - 1];
		if ((entry.compressionMethod !== 0) && (entry.compressionMethod !== 8)) {
			throw new Error(`unsupported compression method: ${entry.compressionMethod}`);
		}
		return entry;
	}

	async _open(): Promise<void> {
		await this.ready;
		// We only want to run this for the error it may throw if there is no disk image in the zip
		await this.getImageEntry();
	}

	private async getEntryByName(name: string): Promise<Entry | undefined> {
		const entries = await this.getEntries();
		for (const entry of entries) {
			if (entry.fileName === name) {
				return entry;
			}
		}
	}

	private async getStream(name: string): Promise<NodeJS.ReadableStream | undefined> {
		const entry = await this.getEntryByName(name);
		if (entry !== undefined) {
			return await fromCallback((callback) => {
				// yauzl does not support start / end for compressed entries
				this.zip.openReadStream(entry, callback);
			});
		}
	}

	private async getString(name: string): Promise<string | undefined> {
		const stream = await this.getStream(name);
		if (stream !== undefined) {
			const buffer = await streamToBuffer(stream);
			return buffer.toString();
		}
	}

	private async getJson(name: string): Promise<any> {
		const data = await this.getString(name);
		if (data !== undefined) {
			return JSON.parse(data);
		}
	}

	async _createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const entry = await this.getImageEntry();
		const stream = await this.getStream(entry.fileName);
		if (stream === undefined) {
			throw new NotCapable();
		}
		if (end !== undefined) {
			// TODO: handle errors on stream after transform finsh event
			const transform = new StreamLimiter(stream, end + 1);
			return transform;
		}
		return stream;
	}

	async _createSparseReadStream(generateChecksums = false): Promise<BlockMap.FilterStream> {
		const metadata = await this.getMetadata();
		if (metadata.blockMap === undefined) {
			throw new NotCapable();
		}
		// Verifying and generating checksums makes no sense, so we only verify if generateChecksums is false.
		const transform = BlockMap.createFilterStream(metadata.blockMap, { verify: !generateChecksums, generateChecksums });
		const stream = await this.createReadStream();
		stream.pipe(transform);
		return transform;
	}

	async _getMetadata(): Promise<Metadata> {
		const entry = await this.getImageEntry();
		const result: Metadata = {
			size: entry.uncompressedSize,
			compressedSize: entry.compressedSize,
		};
		const prefix = posix.join(posix.dirname(entry.fileName), '.meta');
		result.logo = await this.getString(posix.join(prefix, 'logo.svg'));
		result.instructions = await this.getString(posix.join(prefix, 'instructions.markdown'));
		let blockMap = await this.getString(posix.join(prefix, 'image.bmap'));
		if (blockMap !== undefined) {
			result.blockMap = BlockMap.parse(blockMap);
			result.blockmappedSize = result.blockMap.blockSize * result.blockMap.mappedBlockCount;
		}
		let manifest: any;
		try {
			manifest = await this.getJson(posix.join(prefix, 'manifest.json'));
		} catch (error) {
			throw new Error('Invalid archive manifest.json');
		}
		let name;
		if (manifest !== undefined) {
			name = manifest.name;
			for (const key of RandomAccessZipSource.manifestFields) {
				result[key] = manifest[key];
			}
		}
		result.name = name || posix.basename(entry.fileName);
		if (result.logo || result.instructions || result.blockMap || manifest) {
			result.isEtch = true;
		}
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

	async canCreateReadStream(): Promise<boolean> {
		await this.prepare();
		return await this.implementation.canCreateReadStream();
	}

	async open(): Promise<void> {
		await this.prepare();
		return await this.implementation.open();
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		await this.prepare();
		return await this.implementation.canCreateSparseReadStream();
	}

	async _createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
		await this.prepare();
		return await this.implementation._createReadStream(start, end);
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
