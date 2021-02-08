import { once } from 'events';
import * as MessagePack from 'msgpack5';
import { TypedError } from 'typed-error';
import {
	Readable,
	Writable,
	Duplex,
	PassThrough,
	Transform,
	pipeline,
} from 'stream';
import { promisify } from 'util';

import { NotCapable } from './errors';
import { Metadata } from './source-destination/metadata';
import { SourceDestination } from './source-destination/source-destination';
import { BlocksWithChecksum, SparseWritable } from './sparse-stream/shared';
import { Dictionary } from './utils';

const pipelineAsync = promisify(pipeline);
const msgpack = MessagePack();

export class RemoteError extends TypedError {
	constructor(
		message: string,
		public readonly remoteName: string,
		public readonly remoteStack: string,
	) {
		super(message);
	}
}

type Message =
	| { type: 'call'; callId: number; method: string; args: any[] }
	| { type: 'result'; callId: number; result?: any; error?: RemoteError }
	| { type: 'event'; event: string; args: any[] }
	| { type: 'stream'; callId: number; chunk: any };

class Outgoing extends PassThrough {
	// public write(chunk: Message, encoding?: string, callback?: (error?: Error | null) => void): boolean {
	// 	return super.write(chunk, encoding, callback);
	// }
}

class Incoming extends Writable {
	private streams: Dictionary<PassThrough> = {};

	constructor(
		private onCall: (callId: number, method: string, args: any[]) => any,
		private onEvent: (event: string, args: any[]) => void,
		private onStream: (stream: Readable) => void,
	) {
		super({ objectMode: true });
	}

	public async _write(
		chunk: Message,
		_encoding: string,
		callback: (error: Error | null) => void,
	) {
		try {
			await this.__write(chunk);
		} catch (error) {
			callback(error);
		}
		callback(null);
	}

	public async __write(chunk: Message) {
		if (chunk.type === 'event') {
			this.onEvent(chunk.event, chunk.args);
		} else if (chunk.type === 'result') {
			this.emit(chunk.callId.toString(), {
				result: chunk.result,
				error: chunk.error,
			});
		} else if (chunk.type === 'call') {
			this.onCall(chunk.callId, chunk.method, chunk.args);
		} else if (chunk.type === 'stream') {
			// TODO: stream end
			let stream = this.streams[chunk.callId];
			if (stream === undefined) {
				stream = new PassThrough({ objectMode: true });
				this.streams[chunk.callId] = stream;
				this.onStream(stream);
			}
			// Handle backpressure
			if (!stream.write(chunk.chunk)) {
				await once(stream, 'drain');
			}
		}
	}
}

function noop() {
	// noop
}

class StreamEncoder extends Transform {
	private streamTypeSent = false;
	private sourceStream: Readable;

	constructor() {
		super({ objectMode: true });
		this.on('pipe', (sourceStream) => {
			this.sourceStream = sourceStream;
		});
	}

	public _transform(
		chunk: any,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		if (!this.streamTypeSent) {
			if (Buffer.isBuffer(chunk)) {
				this.push({ streamType: 'regular' });
			} else {
				this.push({ streamType: 'sparse' });
			}
			this.streamTypeSent = true;
		}
		this.push(chunk);
		callback();
	}

	public _flush(callback: (error?: Error) => void) {
		console.log('flush sending blocks or checksum');
		// TODO: blocks or checksum
		// @ts-ignore;
		this.push({ blocks: this.sourceStream.blocks });
		callback();
	}
}

class StreamDecoder extends Transform {
	public streamType: 'regular' | 'sparse';
	public blocks: BlocksWithChecksum[];

	constructor() {
		super({ objectMode: true });
	}

	public _transform(
		chunk: any,
		_encoding: string,
		callback: (error?: Error) => void,
	) {
		if (Buffer.isBuffer(chunk)) {
			this.push(chunk);
		} else if (chunk.streamType !== undefined) {
			this.streamType = chunk.streamType;
			this.emit('streamType', this.streamType);
		} else if (chunk.blocks !== undefined) {
			this.blocks = chunk.blocks;
			// TODO: event ?
		} else {
			this.push(chunk);
		}
		callback();
	}
}

export class RpcClient {
	private lastCallId = 0;
	private outgoing: Outgoing;
	private incoming: Incoming;
	private methods: Dictionary<(...args: any[]) => any> = {};

	constructor(
		private transport: Duplex,
		private onStream: (stream: Readable) => void = noop,
	) {
		// TODO: listen for errors on transport
		// TODO: compress ? maybe just compress sparse streams
		this.outgoing = new Outgoing({ objectMode: true });
		const encoder = msgpack.encoder();
		this.outgoing.pipe(encoder).pipe(this.transport);
		const decoder = msgpack.decoder();
		this.incoming = new Incoming(
			this.remoteCall.bind(this),
			(event: string, args: any[]) => {
				// TODO: is this needed
				console.log('event', event, args);
			},
			this.onStream,
		);
		this.transport.pipe(decoder).pipe(this.incoming);
	}

	private async remoteCall(callId: number, method: string, args: any) {
		// TODO: catch transport errors
		const fn = this.methods[method];
		try {
			if (fn === undefined) {
				throw new Error('No such method');
			}
			const result = await fn(...args);
			// TODO: wait for drain ?
			this.outgoing.write({ type: 'result', callId, result });
		} catch (error) {
			this.outgoing.write({ type: 'result', callId, error });
		}
	}

	public async createWriteStream() {
		const callId = this.createCallId();
		const transform = new Transform({
			objectMode: true,
			transform(
				chunk: any,
				_encoding: string,
				callback: (error?: Error) => void,
			) {
				this.push({ type: 'stream', callId, chunk });
				callback();
			},
		});
		// TODO: use pipeline with noop or just pipe
		pipelineAsync(transform, this.outgoing);
		return transform;
	}

	private createCallId() {
		this.lastCallId += 1;
		return this.lastCallId;
	}

	public addMethod(name: string, method: (args: any) => any) {
		this.methods[name] = method;
	}

	public sendEvent(event: string, args: any[]) {
		this.outgoing.push({ type: 'event', event, args });
	}

	public async call(method: string, args: any[] = []) {
		const callId = this.createCallId();
		this.outgoing.push({ type: 'call', callId, method, args });
		return await new Promise((resolve, reject) => {
			this.transport.on('error', reject);
			this.incoming.once(
				callId.toString(),
				(res: {
					result?: any;
					error?: { message: string; name: string; stack: string };
				}) => {
					if (res.error !== undefined) {
						reject(
							new RemoteError(
								res.error.message,
								res.error.name,
								res.error.stack,
							),
						);
					} else if (res.result !== undefined) {
						resolve(res.result);
					}
				},
			);
		});
	}
}

export class RemoteSource extends SourceDestination {
	private rpc: RpcClient;
	private stream: StreamDecoder;
	private streamStarted: Promise<'regular' | 'sparse'>;

	constructor(private localDest: SourceDestination, transport: Duplex) {
		super();
		this.stream = new StreamDecoder();
		this.rpc = new RpcClient(transport, (stream) => {
			// TODO: decompress
			stream.pipe(this.stream);
		});
		this.rpc.addMethod('canCreateSparseWriteStream', async () => {
			return await this.localDest.canCreateSparseWriteStream();
		});
		this.rpc.addMethod('canCreateWriteStream', async () => {
			return await this.localDest.canCreateWriteStream();
		});
		this.streamStarted = new Promise((resolve) => {
			this.stream.on('streamType', resolve);
		});
	}

	// TODO: close

	protected async _getMetadata() {
		// Returns the metadata if the source connected to the remote destination
		return (await this.rpc.call('getMetadata')) as Metadata;
	}

	public async canCreateReadStream() {
		// depends on what is being sent from the other side
		// TODO: maybe we shouldn't wait for the stream to start here. deadlock ?
		// RemoteDestination constructor could get a sparse boolean as a constructor parameter
		await this.streamStarted;
		return this.stream.streamType === 'regular';
	}

	public async canCreateSparseReadStream() {
		// depends on what is being sent from the other side
		await this.streamStarted;
		return this.stream.streamType === 'sparse';
	}

	public async createReadStream(): Promise<NodeJS.ReadableStream> {
		if (!(await this.canCreateReadStream())) {
			throw new NotCapable();
		}
		return this.stream;
	}

	public async createSparseReadStream({
		alignment = 512,
		numBuffers,
	}: {
		alignment?: number;
		numBuffers?: number;
	}) {
		console.log('before');
		if (!(await this.canCreateSparseReadStream())) {
			throw new NotCapable();
		}
		console.log('after');
		// TODO: sparseTransform
		console.log(alignment, numBuffers);
		return this.stream;
	}
}

export class RemoteDestination extends SourceDestination {
	private rpc: RpcClient;

	constructor(private localSource: SourceDestination, transport: Duplex) {
		super();
		this.rpc = new RpcClient(transport);
		this.rpc.addMethod('getMetadata', async () => {
			return (await this.localSource.getMetadata()) as Metadata;
		});
	}

	// TODO: close

	public async canCreateWriteStream() {
		return (await this.rpc.call('canCreateWriteStream')) as boolean;
	}

	public async canCreateSparseWriteStream() {
		return (await this.rpc.call('canCreateSparseWriteStream')) as boolean;
	}

	public async createWriteStream({
		compress = true,
	}: {
		compress?: boolean;
		highWaterMark?: number;
	} = {}): Promise<NodeJS.WritableStream> {
		// TODO
		console.log(compress);
		// TODO: compress
		return await this.rpc.createWriteStream();
	}

	public async createSparseWriteStream({
		compress = true,
	}: {
		compress?: boolean;
		highWaterMark?: number;
	} = {}): Promise<SparseWritable> {
		const socket = await this.rpc.createWriteStream();
		console.log(compress);
		// TODO: compress
		if (!compress) {
			// TODO
			// @ts-ignore
			return socket;
		} else {
			const streamEncoder = new StreamEncoder();
			pipelineAsync(streamEncoder, socket);
			return streamEncoder;
		}
	}
}
