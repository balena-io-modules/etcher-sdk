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

import { EventEmitter } from 'events';
import { ReadResult, WriteResult } from 'file-disk';
import * as fileType from 'file-type';
import { getPartitions, GetPartitionsResult } from 'partitioninfo';
import { extname } from 'path';
import { arch } from 'process';
import { Stream as HashStream } from 'xxhash';

import BlockMap = require('blockmap');

import { PROGRESS_EMISSION_INTERVAL } from '../constants';
import {
	ChecksumVerificationError,
	NotCapable,
	VerificationError,
} from '../errors';
import { SourceSource } from './source-source';
import { SparseWriteStream } from '../sparse-write-stream';
import { streamToBuffer } from '../utils';

import { Metadata } from './metadata';
import {
	makeClassEmitProgressEvents,
	ProgressEvent,
	ProgressWritable,
} from './progress';

// Seed value 0x45544348 = ASCII "ETCH"
const SEED = 0x45544348;
const BITS = arch === 'x64' || arch === 'aarch64' ? 64 : 32;

export class CountingHashStream extends HashStream {
	bytesWritten = 0;

	_transform(chunk: Buffer, encoding: string, callback: () => void) {
		super._transform(chunk, encoding, () => {
			callback();
			this.bytesWritten += chunk.length;
		});
	}
}

export const ProgressHashStream = makeClassEmitProgressEvents(
	CountingHashStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
);

export function createHasher() {
	const hasher = new ProgressHashStream(SEED, BITS);
	hasher.on('finish', async () => {
		const checksum = (await streamToBuffer(hasher)).toString('hex');
		hasher.emit('checksum', checksum);
	});
	return hasher;
}

export class SourceDestinationFs {
	// Adapts a SourceDestination to an fs like interface (so it can be used in udif for example)
	constructor(private source: SourceDestination) {}

	open(
		path: string,
		options: any,
		callback: (error: Error | null, fd?: number) => void,
	) {
		callback(null, 1);
	}

	close(fd: number, callback: (error: Error | null) => void) {
		callback(null);
	}

	fstat(
		fd: number,
		callback: (error: Error | null, stats?: { size: number }) => void,
	) {
		this.source
			.getMetadata()
			.then(metadata => {
				if (metadata.size === undefined) {
					callback(new Error('No size'));
					return;
				}
				callback(null, { size: metadata.size });
			})
			.catch(callback);
	}

	read(
		fd: number,
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
		callback: (
			error: Error | null,
			bytesRead?: number,
			buffer?: Buffer,
		) => void,
	) {
		this.source
			.read(buffer, bufferOffset, length, sourceOffset)
			.then((res: ReadResult) => {
				callback(null, res.bytesRead, res.buffer);
			})
			.catch(callback);
	}

	// TODO: add write if it is needed
}

export abstract class Verifier extends EventEmitter {
	progress: ProgressEvent = { bytes: 0, position: 0, speed: 0 };

	abstract async run(): Promise<void>;

	protected handleEventsAndPipe(
		stream: NodeJS.ReadableStream,
		meter: NodeJS.WritableStream,
	) {
		meter.on('progress', (progress: ProgressEvent) => {
			this.progress = progress;
			this.emit('progress', progress);
		});
		stream.on('end', this.emit.bind(this, 'end'));
		meter.on('finish', this.emit.bind(this, 'finish'));
		stream.once('error', () => {
			stream.unpipe(meter);
			meter.end();
			if (stream instanceof BlockMap.ReadStream) {
				stream.destroy();
			}
		});
		stream.pipe(meter);
	}
}

export class StreamVerifier extends Verifier {
	constructor(
		private source: SourceDestination,
		private checksum: string,
		private size: number,
	) {
		super();
	}

	async run(): Promise<void> {
		const stream = await this.source.createReadStream(false, 0, this.size - 1);
		stream.on('error', this.emit.bind(this, 'error'));
		const hasher = createHasher();
		hasher.on('error', this.emit.bind(this, 'error'));
		hasher.on('checksum', (streamChecksum: string) => {
			if (streamChecksum !== this.checksum) {
				this.emit(
					'error',
					new ChecksumVerificationError(
						`Source and destination checksums do not match: ${
							this.checksum
						} !== ${streamChecksum}`,
						streamChecksum,
						this.checksum,
					),
				);
			}
		});
		this.handleEventsAndPipe(stream, hasher);
	}
}

export class SparseStreamVerifier extends Verifier {
	constructor(private source: SourceDestination, private blockMap: BlockMap) {
		super();
	}

	private wrapErrorAndEmit(error: Error) {
		// Transforms the error into a VerificationError if needed
		if (error.message.startsWith('Invalid checksum')) {
			error = new VerificationError(error.message);
		}
		this.emit('error', error);
	}

	async run(): Promise<void> {
		let stream: BlockMap.ReadStream | BlockMap.FilterStream;
		if (await this.source.canRead()) {
			stream = new BlockMap.ReadStream('', this.blockMap, {
				fs: new SourceDestinationFs(this.source),
			});
			stream.on('error', this.wrapErrorAndEmit.bind(this));
		} else if (await this.source.canCreateReadStream()) {
			// TODO: will this ever be used?
			// if yes, originalStream should be unpiped from the transform and destroyed on error
			const originalStream = await this.source.createReadStream();
			originalStream.on('error', this.emit.bind(this, 'error'));
			const transform = BlockMap.createFilterStream(this.blockMap);
			transform.on('error', this.wrapErrorAndEmit.bind(this));
			originalStream.pipe(transform);
			stream = transform;
		} else {
			throw new NotCapable();
		}
		const meter = new ProgressWritable({ objectMode: true });
		this.handleEventsAndPipe(stream, meter);
	}
}

export class SourceDestination extends EventEmitter {
	static readonly imageExtensions = [
		'img',
		'iso',
		'bin',
		'dsk',
		'hddimg',
		'raw',
		'dmg',
		'sdcard',
		'rpi-sdimg',
		'wic',
	];
	static readonly mimetype?: string;
	private static mimetypes = new Map<string, typeof SourceSource>();

	private metadata: Metadata;
	private isOpen = false;

	static register(Cls: typeof SourceSource) {
		if (Cls.mimetype !== undefined) {
			SourceDestination.mimetypes.set(Cls.mimetype, Cls);
		}
	}

	async canRead(): Promise<boolean> {
		return false;
	}

	async canWrite(): Promise<boolean> {
		return false;
	}

	async canCreateReadStream(): Promise<boolean> {
		return false;
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		return false;
	}

	async canCreateWriteStream(): Promise<boolean> {
		return false;
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return false;
	}

	async getMetadata(): Promise<Metadata> {
		if (this.metadata === undefined) {
			this.metadata = await this._getMetadata();
		}
		return this.metadata;
	}

	async _getMetadata(): Promise<Metadata> {
		throw new NotCapable();
	}

	async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		throw new NotCapable();
	}

	async write(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		fileOffset: number,
	): Promise<WriteResult> {
		throw new NotCapable();
	}

	async createReadStream(
		emitProgress = false,
		start = 0,
		end?: number,
	): Promise<NodeJS.ReadableStream> {
		throw new NotCapable();
	}

	async createSparseReadStream(
		generateChecksums = false,
	): Promise<BlockMap.FilterStream | BlockMap.ReadStream> {
		throw new NotCapable();
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		throw new NotCapable();
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		throw new NotCapable();
	}

	async open(): Promise<void> {
		if (!this.isOpen) {
			await this._open();
			this.isOpen = true;
		}
	}

	async close(): Promise<void> {
		if (this.isOpen) {
			await this._close();
			this.isOpen = false;
		}
	}

	protected async _open(): Promise<void> {}

	protected async _close(): Promise<void> {}

	createVerifier(
		checksumOrBlockmap: string | BlockMap,
		size?: number,
	): Verifier {
		if (checksumOrBlockmap instanceof BlockMap) {
			return new SparseStreamVerifier(this, checksumOrBlockmap);
		} else {
			if (size === undefined) {
				throw new Error(
					'A size argument is required for creating a stream checksum verifier',
				);
			}
			return new StreamVerifier(this, checksumOrBlockmap, size);
		}
	}

	private async getMimeTypeFromName(): Promise<string | undefined> {
		const metadata = await this.getMetadata();
		if (metadata.name === undefined) {
			return;
		}
		const extension = extname(metadata.name).toLowerCase();
		if (extension === '.dmg') {
			return 'application/x-apple-diskimage';
		}
	}

	private async getMimeTypeFromContent(): Promise<string | undefined> {
		let stream: NodeJS.ReadableStream;
		try {
			stream = await this.createReadStream(false, 0, 263); // TODO: constant
		} catch (error) {
			if (error instanceof NotCapable) {
				return;
			}
			throw error;
		}
		const ft = fileType(await streamToBuffer(stream));
		if (ft !== null) {
			return ft.mime;
		}
	}

	private async getMimetype(): Promise<string | undefined> {
		let mimetype = await this.getMimeTypeFromName();
		if (mimetype === undefined) {
			mimetype = await this.getMimeTypeFromContent();
		}
		return mimetype;
	}

	async getInnerSource(): Promise<SourceDestination> {
		await this.open();
		const metadata = await this.getMetadata();
		if (metadata.isEtch === true) {
			return this;
		}
		const mimetype = await this.getMimetype();
		if (mimetype === undefined) {
			return this;
		}
		const Cls = SourceDestination.mimetypes.get(mimetype);
		if (Cls === undefined) {
			return this;
		}
		const innerSource = new Cls(this);
		return await innerSource.getInnerSource();
	}

	async getPartitionTable(): Promise<GetPartitionsResult | undefined> {
		const stream = await this.createReadStream(false, 0, 65535); // TODO: constant
		const buffer = await streamToBuffer(stream);
		try {
			return await getPartitions(buffer);
		} catch {}
	}
}
