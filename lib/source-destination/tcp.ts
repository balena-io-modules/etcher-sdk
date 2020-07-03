import { fromCallback } from 'bluebird';
import { ChildProcess, spawn } from 'child_process';
import { createServer, Server, Socket } from 'net';
import { PassThrough, Duplex, pipeline } from 'stream';

import { SourceDestination } from './source-destination';

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

export class TcpSource extends SourceDestination {
	private rawPassthrough = new RawZstdStream();
	private passthrough = new PassThroughWithSource();
	private server: Server;

	constructor(private host: string, private port: number) {
		super();
		const decompressor = new ZstdDecompressor();
		this.passthrough.sourceStream = decompressor;
		pipeline(this.rawPassthrough, decompressor, this.passthrough, noop);
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public async createReadStream(): Promise<NodeJS.ReadableStream> {
		return this.passthrough;
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
	constructor(private host: string, private port: number) {
		super();
	}

	public async canCreateWriteStream(): Promise<boolean> {
		return true;
	}

	public async createWriteStream({
		compress = true,
	}: {
		compress?: boolean;
		highWaterMark?: number;
	} = {}): Promise<NodeJS.WritableStream> {
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
}
