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

import { BlockMap, Range } from 'blockmap';
import { posix } from 'path';
import { PassThrough } from 'stream';
import { ZipStreamEntry } from 'unzip-stream';
import {
	Entry,
	fromRandomAccessReader,
	RandomAccessReader,
	ZipFile,
} from 'yauzl';

import { NO_MATCHING_FILE_MSG } from '../constants';
import { getFileStreamFromZipStream } from '../zip';
import { Metadata } from './metadata';
import {
	CreateReadStreamOptions,
	CreateSparseReadStreamOptions,
	SourceDestination,
} from './source-destination';
import { SourceSource } from './source-source';

import { BlockTransformStream } from '../block-transform-stream';
import { NotCapable } from '../errors';
import {
	blocksLength,
	BlocksWithChecksum,
	SparseReadable,
} from '../sparse-stream/shared';
import { SparseFilterStream } from '../sparse-stream/sparse-filter-stream';
import { StreamLimiter } from '../stream-limiter';
import { maxBy, fromCallback, streamToBuffer } from '../utils';

function blockmapToBlocks(blockmap: BlockMap): BlocksWithChecksum[] {
	return blockmap.ranges.map((range: Range): BlocksWithChecksum => {
		const offset = range.start * blockmap.blockSize;
		const length = (range.end - range.start + 1) * blockmap.blockSize;
		const checksum = range.checksum;
		const checksumType =
			blockmap.checksumType === 'sha1' || blockmap.checksumType === 'sha256'
				? blockmap.checksumType
				: undefined;
		return { checksum, checksumType, blocks: [{ offset, length }] };
	});
}

export function matchSupportedExtensions(filename: string): boolean {
	const extension = posix.extname(filename);
	return (
		extension.length > 1 &&
		SourceDestination.imageExtensions.includes(extension.slice(1))
	);
}

export class StreamZipSource extends SourceSource {
	private entry?: ZipStreamEntry;

	constructor(
		source: SourceDestination,
		private match: (filename: string) => boolean = matchSupportedExtensions,
	) {
		super(source);
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	private async getEntry(): Promise<ZipStreamEntry> {
		if (this.entry === undefined) {
			const entry = await getFileStreamFromZipStream(
				await this.source.createReadStream(),
				this.match,
			);
			this.entry = entry;
			const onData = () => {
				// We need to reset the entry if any read happens on this stream
				entry.removeListener('data', onData);
				this.entry = undefined;
			};
			entry.on('data', onData);
			entry.pause();
		}
		return this.entry;
	}

	public async createReadStream({
		start = 0,
		end,
	}: CreateReadStreamOptions = {}): Promise<NodeJS.ReadableStream> {
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

	protected async _getMetadata(): Promise<Metadata> {
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

	public _readStreamForRange(start: number, end: number) {
		// _readStreamForRange end is exclusive
		// this.source.createReadStream end is inclusive
		// Workaround this method not being async with a passthrough stream
		const passthrough = new PassThrough();
		this.source
			.createReadStream({ start, end: end - 1 })
			.then((stream) => {
				stream.on('error', passthrough.emit.bind(passthrough, 'error'));
				stream.pipe(passthrough);
			})
			.catch(passthrough.emit.bind(passthrough, 'error'));
		return passthrough;
	}
}

export class RandomAccessZipSource extends SourceSource {
	private static manifestFields: Array<keyof Metadata> = [
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

	constructor(
		source: SourceDestination,
		private match: (filename: string) => boolean = matchSupportedExtensions,
	) {
		super(source);
		this.ready = this.init();
	}

	private async init() {
		await this.source.open();
		const sourceMetadata = await this.source.getMetadata();
		const reader = new SourceRandomAccessReader(this.source);
		this.zip = await fromCallback((callback) => {
			if (sourceMetadata.size === undefined) {
				throw new NotCapable();
			}
			fromRandomAccessReader(
				reader,
				sourceMetadata.size,
				{ autoClose: false },
				callback,
			);
		});
		this.zip.on('entry', (entry: Entry) => {
			this.entries.push(entry);
		});
		await new Promise((resolve, reject) => {
			this.zip.on('end', resolve);
			this.zip.on('error', reject);
		});
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public async canCreateSparseReadStream(): Promise<boolean> {
		const metadata = await this.getMetadata();
		return metadata.blockMap !== undefined;
	}

	private async getEntries(): Promise<Entry[]> {
		await this.ready;
		return this.entries;
	}

	private async getImageEntry(): Promise<Entry> {
		const entries = (await this.getEntries()).filter((e) =>
			this.match(e.fileName),
		);
		const entry = maxBy(entries, (e) => e.uncompressedSize);
		if (entry === undefined) {
			throw new Error(NO_MATCHING_FILE_MSG);
		}
		if (entry.compressionMethod !== 0 && entry.compressionMethod !== 8) {
			throw new Error(
				`unsupported compression method: ${entry.compressionMethod}`,
			);
		}
		return entry;
	}

	protected async _open(): Promise<void> {
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

	private async getStream(
		name: string,
	): Promise<NodeJS.ReadableStream | undefined> {
		const entry = await this.getEntryByName(name);
		if (entry !== undefined) {
			return await fromCallback(
				(callback: (err: any, result?: NodeJS.ReadableStream) => void) => {
					// yauzl does not support start / end for compressed entries
					this.zip.openReadStream(entry, callback);
				},
			);
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

	public async createReadStream({
		start = 0,
		end,
		alignment,
		numBuffers,
	}: CreateReadStreamOptions): Promise<NodeJS.ReadableStream> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const entry = await this.getImageEntry();
		const stream = await this.getStream(entry.fileName);
		if (stream === undefined) {
			throw new NotCapable();
		}
		if (end !== undefined) {
			// TODO: handle errors on stream after transform finish event
			const transform = new StreamLimiter(stream, end + 1);
			return BlockTransformStream.alignIfNeeded(
				transform,
				alignment,
				numBuffers,
			);
		}
		return BlockTransformStream.alignIfNeeded(stream, alignment, numBuffers);
	}

	public async createSparseReadStream({
		generateChecksums = false,
		alignment,
		numBuffers,
	}: CreateSparseReadStreamOptions = {}): Promise<SparseFilterStream> {
		const metadata = await this.getMetadata();
		if (metadata.blocks === undefined) {
			throw new NotCapable();
		}
		// Verifying and generating checksums makes no sense, so we only verify if generateChecksums is false.
		const transform = new SparseFilterStream({
			blocks: metadata.blocks,
			verify: !generateChecksums,
			generateChecksums,
		});
		const stream = await this.createReadStream({
			alignment,
			numBuffers,
		});
		stream.pipe(transform);
		return transform;
	}

	public async _getMetadata(): Promise<Metadata> {
		const entry = await this.getImageEntry();
		const result: Metadata = {
			size: entry.uncompressedSize,
			compressedSize: entry.compressedSize,
		};
		const prefix = posix.join(posix.dirname(entry.fileName), '.meta');
		result.logo = await this.getString(posix.join(prefix, 'logo.svg'));
		result.instructions = await this.getString(
			posix.join(prefix, 'instructions.markdown'),
		);
		const blockMap = await this.getString(posix.join(prefix, 'image.bmap'));
		if (blockMap !== undefined) {
			result.blockMap = BlockMap.parse(blockMap);
			result.blocks = blockmapToBlocks(result.blockMap);
			result.blockmappedSize = blocksLength(result.blocks);
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
	public static readonly mimetype = 'application/zip';
	private ready: Promise<void>;
	private implementation: RandomAccessZipSource | StreamZipSource;

	constructor(
		source: SourceDestination,
		private preferStreamSource = false,
		private match: (filename: string) => boolean = matchSupportedExtensions,
	) {
		super(source);
		this.ready = this.prepare();
	}

	private async prepare() {
		if (!this.preferStreamSource && (await this.source.canRead())) {
			this.implementation = new RandomAccessZipSource(this.source, this.match);
		} else {
			this.implementation = new StreamZipSource(this.source, this.match);
		}
	}

	public async canCreateReadStream(): Promise<boolean> {
		await this.ready;
		return await this.implementation.canCreateReadStream();
	}

	public async open(): Promise<void> {
		await this.ready;
		return await this.implementation.open();
	}

	public async canCreateSparseReadStream(): Promise<boolean> {
		await this.ready;
		return await this.implementation.canCreateSparseReadStream();
	}

	public async createReadStream({
		emitProgress = false,
		start = 0,
		end,
		alignment,
		numBuffers,
	}: CreateReadStreamOptions = {}): Promise<NodeJS.ReadableStream> {
		await this.ready;
		const stream = await this.implementation.createReadStream({
			emitProgress,
			start,
			end,
		});
		return BlockTransformStream.alignIfNeeded(stream, alignment, numBuffers);
	}

	public async createSparseReadStream({
		generateChecksums = false,
		alignment,
		numBuffers,
	}: CreateSparseReadStreamOptions = {}): Promise<SparseReadable> {
		await this.ready;
		return await this.implementation.createSparseReadStream({
			generateChecksums,
			alignment,
			numBuffers,
		});
	}

	protected async _getMetadata(): Promise<Metadata> {
		await this.ready;
		const metadata = await this.implementation.getMetadata();
		return { ...metadata, isCompressed: true };
	}
}

SourceDestination.register(ZipSource);
