// @ts-ignore
import { BufferList } from 'bl';
import { ChildProcess, spawn } from 'child_process';
import * as MessagePack from 'msgpack5';
import { createServer, Server, Socket } from 'net';
import { Transform, PassThrough, Duplex, pipeline } from 'stream';

import { CHUNK_SIZE } from '../constants';
import {
	// @ts-ignore
	SparseStreamChunk,
	SparseReadable,
	SparseWritable,
} from '../sparse-stream/shared';
import { BlocksWithChecksum } from '../sparse-stream/shared';
import { SparseTransformStream } from '../sparse-stream/sparse-transform-stream';
import { fromCallback } from '../utils';

import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';

const msgpack = MessagePack();

// function isSparseStreamChunk(chunk: any) {
// 	// We don't encode anything else
// 	console.log('checking', chunk);
// 	return true;
// }
//
// const TYPE = 0x42;
//
// msgpack.registerEncoder(
// 	isSparseStreamChunk,
// 	(chunk: SparseStreamChunk): BufferList => {
// 		const header = Buffer.allocUnsafe(1);
// 		header.writeInt8(TYPE, 0);
// 		const bl = new BufferList();
// 		bl.append(header);
// 		bl.append(msgpack.encode([chunk.position, chunk.buffer]));
// 		console.log('bubu', bl.slice(0,1));
// 		return bl;
// 	},
// );
//
// msgpack.registerDecoder(
// 	TYPE,
// 	(encoded: Buffer): SparseStreamChunk => {
// 		console.log('decoding', encoded);
// 		const [position, buffer] = msgpack.decode(encoded);
// 		return { position, buffer };
// 	},
// );

class ProcessTransform extends Duplex {
	private cp: ChildProcess;
	public sourceStream: NodeJS.ReadableStream;

	constructor(command: string, ...args: string[]) {
		super();
		this.cp = spawn(command, args, { stdio: ['pipe', 'pipe'] });
		this.cp.stdout.on('end', this.push.bind(this, null));
		this.on('finish', this.cp.stdin.end.bind(this.cp.stdin));
		this.on('pipe', (sourceStream: NodeJS.ReadableStream) => {
			this.sourceStream = sourceStream;
		});
	}

	public _write(
		chunk: Buffer,
		encoding: string,
		callback: (error?: Error) => void,
	) {
		this.cp.stdin.write(chunk, encoding, callback);
	}

	public _read(size: number) {
		const chunk = this.cp.stdout.read(size);
		if (chunk !== null) {
			this.push(chunk);
		} else {
			this.cp.stdout.once('readable', this._read.bind(this, size));
		}
	}
}

const zstdArgs = ['-q', '-T0'];

class ZstdCompressor extends ProcessTransform {
	constructor() {
		super('zstd', '--fast=5', '--no-check', ...zstdArgs);
	}
}

class ZstdDecompressor extends ProcessTransform {
	constructor() {
		super('zstd', '-d', ...zstdArgs);
	}
}

function noop() {
	// noop
}

export class RawZstdStream extends PassThrough {}

class PassThroughWithSource extends PassThrough {
	public sourceStream: NodeJS.ReadableStream;
}

class TcpDecoder extends Transform {
	constructor() {
		super({ objectMode: true });
	}

	public _transform(
		chunk: any,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		// TODO
		if (chunk.blocks !== undefined) {
			console.log('TcpDecoder', JSON.stringify(chunk, null, 4));
			this.emit('blocks', chunk.blocks);
		} else if (chunk.metadata !== undefined) {
			console.log('TcpDecoder metadata', JSON.stringify(chunk, null, 4));
			this.emit('metadata', chunk.metadata);
		} else if (chunk.buffer !== undefined) {
			this.push(chunk);
		} else {
			console.log('wtf is this', chunk);
		}
		callback();
	}
}

// TODO: rename to SparseStreamEncoder
class TcpEncoder extends Transform {
	private metadataSent = false;
	private blocks: any; // TODO

	constructor(private sourceMetadata?: Metadata) {
		super({ objectMode: true });
		this.on('pipe', (sourceStream) => {
			// @ts-ignore
			console.log('sourceStream piped', sourceStream, sourceStream.blocks);
			this.blocks = sourceStream.blocks;
		});
	}

	public _transform(
		chunk: any,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		// TODO
		if (!this.metadataSent) {
			console.log('sending blocks');
			this.push({ blocks: this.blocks }); // TODO: is this needed ? It will be sent in _flush with checksums.
			if (this.sourceMetadata !== undefined) {
				this.push({ metadata: this.sourceMetadata });
			}
			this.metadataSent = true;
		}
		this.push(chunk);
		callback();
	}

	public _flush(callback: (error?: Error) => void) {
		console.log('flush sending blocks');
		this.push({ blocks: this.blocks });
		callback();
	}
}

export class TcpSource extends SourceDestination {
	private rawPassthrough = new RawZstdStream();
	private passthrough = new PassThroughWithSource();
	private server: Server;
	private $metadata: Metadata = {};

	constructor(private host: string, private port: number) {
		super();
		const decompressor = new ZstdDecompressor();
		this.passthrough.sourceStream = decompressor;
		pipeline(this.rawPassthrough, decompressor, this.passthrough, noop);
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public async canCreateSparseReadStream(): Promise<boolean> {
		// TODO: this depends on the other side of the connection
		return true;
	}

	public async createReadStream(): Promise<NodeJS.ReadableStream> {
		return this.passthrough;
	}

	protected async _getMetadata(): Promise<Metadata> {
		return this.$metadata;
	}

	public async createSparseReadStream({
		alignment = 512,
		numBuffers,
	}: {
		alignment?: number;
		numBuffers?: number;
	} = {}): Promise<SparseReadable> {
		const decoder = msgpack.decoder();
		const sparseTransform = new SparseTransformStream({
			// TODO
			blocks: [],
			chunkSize: CHUNK_SIZE,
			alignment: alignment || 512,
			numBuffers,
		});
		const tcpDecoder = new TcpDecoder();
		tcpDecoder.on('blocks', (blocks: BlocksWithChecksum[]) => {
			sparseTransform.blocks = blocks;
		});
		tcpDecoder.on('metadata', (metadata: Metadata) => {
			Object.assign(this.$metadata, metadata);
			console.log('got metadata', this.$metadata);
		});
		pipeline(this.passthrough, decoder, tcpDecoder, sparseTransform, noop);
		// TODO
		// @ts-ignore
		decoder.blocks = [];
		// @ts-ignore
		return sparseTransform;
	}

	protected async _open(): Promise<void> {
		this.server = createServer((socket: Socket) => {
			pipeline(socket, this.rawPassthrough, noop);
		});
		this.server.listen(this.port, this.host);
		// TODO: remove
		console.log('server', this.server);
	}

	protected async _close(): Promise<void> {
		if (this.server !== undefined) {
			await fromCallback((callback) => {
				this.server.close(callback);
			});
		}
	}

	public async getInnerSource(): Promise<TcpSource> {
		return this;
	}

	public async getPartitionTable(): Promise<undefined> {
		return undefined;
	}
}

export class TcpDestination extends SourceDestination {
	public sourceMetadata?: Metadata;

	constructor(private host: string, private port: number) {
		super();
	}

	public async canCreateWriteStream(): Promise<boolean> {
		return true;
	}

	public async canCreateSparseWriteStream(): Promise<boolean> {
		return true;
	}

	private async createSocket(
		compress: boolean,
	): Promise<NodeJS.WritableStream> {
		const sock: Socket = await new Promise((resolve, reject) => {
			const socket = new Socket();
			socket.setNoDelay(true);
			socket.on('error', reject);
			socket.on('ready', () => {
				resolve(socket);
			});
			socket.connect({ port: this.port, host: this.host });
		});
		if (compress) {
			const compressor = new ZstdCompressor();
			pipeline(compressor, sock, noop);
			return compressor;
		} else {
			return sock;
		}
	}

	public async createWriteStream({
		compress = true,
	}: {
		compress?: boolean;
		highWaterMark?: number;
	} = {}): Promise<NodeJS.WritableStream> {
		return await this.createSocket(compress);
	}

	public async createSparseWriteStream({
		compress = true,
	}: {
		compress?: boolean;
		highWaterMark?: number;
	} = {}): Promise<SparseWritable> {
		const socket = await this.createSocket(compress);
		// TODO: compress actually means encode and compress
		if (!compress) {
			// TODO
			// @ts-ignore
			return socket;
		} else {
			const tcpEncoder = new TcpEncoder(this.sourceMetadata);
			const encoder = msgpack.encoder();
			pipeline(tcpEncoder, encoder, socket, noop);
			return tcpEncoder;
		}
	}
}
