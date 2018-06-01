import { Blockmap, createFilterStream, FilterStream, ReadStream } from 'blockmap';
import { EventEmitter } from 'events';
import { ReadResult, WriteResult } from 'file-disk';
import { arch } from 'process';
import { Stream as HashStream } from 'xxhash';

import { NotCapable, VerificationError } from '../errors';
import { SparseWriteStream } from '../sparse-write-stream';
import { streamToBuffer } from '../utils';

import { Metadata } from './metadata';
import { makeStreamEmitProgressEvents } from './progress-event';

// Seed value 0x45544348 = ASCII "ETCH"
const SEED = 0x45544348;
const BITS = (arch === 'x64' || arch === 'aarch64') ? 64 : 32;

function createHasher() {
	return new HashStream(SEED, BITS);
}

export class SourceDestinationFs {
	// Adapts a SourceDestination to an fs like interface (so it can be used in udif for example)
	constructor(private source: SourceDestination) {
	}

	open(path: string, options: any, callback: (error: Error | null, fd?: number) => void) {
		callback(null, 1);
	}

	close(fd: number, callback: (error: Error | null) => void) {
		callback(null);
	}

	fstat(fd: number, callback: (error: Error | null, stats?: { size: number }) => void) {
		this.source.getMetadata()
		.then((metadata) => {
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
		callback: (error: Error | null, bytesRead?: number, buffer?: Buffer) => void,
	) {
		this.source.read(buffer, bufferOffset, length, sourceOffset)
		.then((res: ReadResult) => {
			callback(null, res.bytesRead, res.buffer);
		})
		.catch(callback);
	}

	// TODO: add write if it is needed
}

export class SourceDestination extends EventEmitter {
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
		throw new NotCapable();
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		throw new NotCapable();
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		throw new NotCapable();
	}

	private makeStreamEmitChecksum(stream: NodeJS.ReadableStream): void {
		const hasher = createHasher();
		hasher.on('error', stream.emit.bind(stream, 'error'));
		hasher.on('finish', async () => {
			const checksum = (await streamToBuffer(hasher)).toString('hex');
			stream.emit('checksum', checksum);
		});
		stream.pipe(hasher);
	}

	async createReadStream(generateChecksum = false): Promise<NodeJS.ReadableStream> {
		const stream = await this._createReadStream();
		await makeStreamEmitProgressEvents(stream, this);
		if (generateChecksum) {
			this.makeStreamEmitChecksum(stream);
		}
		return stream;
	}

	async _createReadStream(): Promise<NodeJS.ReadableStream> {
		throw new NotCapable();
	}

	async createSparseReadStream(generateChecksums = false): Promise<FilterStream | ReadStream> {
		const stream = await this._createSparseReadStream(generateChecksums);
		await makeStreamEmitProgressEvents(stream, this);
		return stream;
	}

	async _createSparseReadStream(generateChecksums = false): Promise<FilterStream | ReadStream> {
		throw new NotCapable();
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		throw new NotCapable();
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		throw new NotCapable();
	}

	async open(): Promise<void> {
	}

	async close(): Promise<void> {
	}

	async createVerifier(checksum: string): Promise<EventEmitter> {
		if (!(await this.canCreateReadStream())) {
			throw new NotCapable();
		}
		const verifier = new EventEmitter();
		const stream = await this.createReadStream(true);
		stream.on('progress', verifier.emit.bind(verifier, 'progress'));
		stream.on('checksum', (streamChecksum) => {
			if (streamChecksum !== checksum) {
				verifier.emit(
					'error',
					new VerificationError(`Source and destination checksums do not match: ${checksum} !== ${streamChecksum}`),
				);
			} else {
				verifier.emit('end')
			}
		});
		return verifier;
	}

	async createSparseVerifier(blockmap: Blockmap): Promise<EventEmitter> {
		let stream: ReadStream | FilterStream;
		if (await this.canRead()) {
			stream = new ReadStream('', blockmap, { fs: new SourceDestinationFs(this) });
		} else if (await this.canCreateReadStream()) {
			const originalStream = await this._createReadStream();
			const transform = createFilterStream(blockmap);
			originalStream.pipe(transform);
			stream = transform;
		} else {
			throw new NotCapable();
		}
		await makeStreamEmitProgressEvents(stream, this);
		const verifier = new EventEmitter();
		stream.on('progress', verifier.emit.bind(verifier, 'progress'));
		stream.on('end', verifier.emit.bind(verifier, 'end'));
		stream.on('error', (error) => {
			verifier.emit('error', new VerificationError(error.message));
		});
		return verifier;
	}
}
