import axios from 'axios';
import { Chunk, createFilterStream, FilterStream } from 'blockmap';
import * as Bluebird from 'bluebird';
import { ReadResult, WriteResult } from 'file-disk';
import { createReadStream, createWriteStream } from 'fs';
import * as _ from 'lodash';
import { PassThrough, Writable } from 'stream';
import { Image as UDIFImage } from 'udif';
import { ZipStreamEntry } from 'unzip-stream';
import { promisify } from 'util';

import { close, fstat, open, read, write } from './fs';
import { getFileStreamFromZipStream } from './zip';

export class NotCapable extends Error {
}

export interface Metadata {
	size?: number;
	compressedSize?: number;
}

export class SourceDestination {
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
		return {};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		throw new NotCapable();
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		throw new NotCapable();
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		throw new NotCapable();
	}

	async createSparseReadStream(): Promise<FilterStream> {  // TODO: replace FilterStream with SparseReadStream
		throw new NotCapable();
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		throw new NotCapable();
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		throw new NotCapable();
	}
}

export class MultiDestination extends SourceDestination {
	constructor(private destinations: SourceDestination[]) {
		super();
		if (destinations.length === 0) {
			throw new Error('At least one destination is required');
		}
	}

	private async can(methodName: 'canRead' | 'canWrite' | 'canCreateReadStream' | 'canCreateSparseReadStream' | 'canCreateWriteStream' | 'canCreateSparseWriteStream') {
		return _.every(
			await Promise.all(
				this.destinations.map(async (destination: SourceDestination) => {
					return await destination[methodName]();
				}),
			),
		);
	}

	async canRead(): Promise<boolean> {
		return await this.can('canRead');
	}

	async canWrite(): Promise<boolean> {
		return await this.can('canWrite');
	}

	async canCreateReadStream(): Promise<boolean> {
		return await this.can('canCreateReadStream');
	}

	async canCreateSparseReadStream(): Promise<boolean> {
		return await this.can('canCreateSparseReadStream');
	}

	async canCreateWriteStream(): Promise<boolean> {
		return await this.can('canCreateWriteStream');
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return await this.can('canCreateSparseWriteStream');
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		// Reads from the first destination (supposing all destinations contain the same data)
		return await this.destinations[0].read(buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		const results = await Promise.all(
			this.destinations.map(async (destination: SourceDestination) => {
				return await destination.write(buffer, bufferOffset, length, fileOffset);
			}),
		);
		// Returns the first WriteResult (they should be all the same)
		return results[0];
		// TODO: handle errors so one destination can fail
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return await this.destinations[0].createReadStream();
	}

	async createSparseReadStream(): Promise<FilterStream> {  // TODO: replace FilterStream with SparseReadStream
		return await this.destinations[0].createSparseReadStream();
	}

	private async createStream(methodName: 'createWriteStream' | 'createSparseWriteStream') {
		const streams = await Promise.all(
			this.destinations.map(async (destination: SourceDestination) => {
				return await destination[methodName]();
			}),
		);
		const passthrough = new PassThrough();
		streams.forEach((stream: NodeJS.WritableStream) => {
			// TODO: allow some streams to fail
			stream.on('error', passthrough.emit.bind(passthrough, 'error'));
			passthrough.pipe(stream);
		});
		return passthrough;
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		return await this.createStream('createWriteStream');
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		return await this.createStream('createSparseWriteStream');
	}
}

export interface SparseWriteStream extends NodeJS.WritableStream {
	_write(chunk: Chunk, enc: string, callback: (err?: Error | void) => void): void;
	on(event: 'progress', listener: (data: ProgressEvent) => void): this;
	on(event: string, listener: (data: any) => void): this;
}

type FileFlags = 'r' | 'w+';  // TODO: OpenFlags ?

export class File extends SourceDestination {
	constructor(private fd: number, private flags: FileFlags) {
		super();
	}

	async canRead(): Promise<boolean> {
		return true;
	}

	async canWrite(): Promise<boolean> {
		return this.flags === 'w+';
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canCreateWriteStream(): Promise<boolean> {
		return this.flags === 'w+';
	}

	async canCreateSparseWriteStream(): Promise<boolean> {
		return this.flags === 'w+';
	}

	async getMetadata(): Promise<Metadata> {
		const stat = await fstat(this.fd);
		return {
			size: stat.size,
		};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await read(this.fd, buffer, bufferOffset, length, sourceOffset);
	}

	async write(buffer: Buffer, bufferOffset: number, length: number, fileOffset: number): Promise<WriteResult> {
		return await write(this.fd, buffer, bufferOffset, length, fileOffset);
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return createReadStream('', { fd: this.fd, autoClose: false });
	}

	async createWriteStream(): Promise<NodeJS.WritableStream> {
		return createWriteStream('', { fd: this.fd, autoClose: false });
	}

	async createSparseWriteStream(): Promise<SparseWriteStream> {
		return new FileSparseWriteStream(this.fd);
	}

	static async fromPath(path: string, flags: FileFlags): Promise<Bluebird.Disposer<File>> {
		const fd = await open(path, flags);
		return Bluebird.resolve(new File(fd, flags))
		.disposer(async () => {
			await close(fd);
		});
	}
}

export class Http extends SourceDestination {
	// Only implements reading for now
	private size: number;
	private acceptsRange: boolean;
	private ready: Promise<void>;

	constructor(private url: string) {
		super();
		this.ready = this.getInfo();
	}

	private async getInfo() {
		const response = await axios({ method: 'head', url: this.url });
		this.size = parseInt(response.headers['content-length'], 10);
		this.acceptsRange = (response.headers['accept-ranges'] === 'bytes');
	}

	async canRead(): Promise<boolean> {
		await this.ready;
		return this.acceptsRange;
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async getMetadata(): Promise<Metadata> {
		await this.ready;
		return {
			size: this.size,
		};
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		const response = await axios({
			method: 'get',
			url: this.url,
			responseType: 'arraybuffer',
			headers: {
				Range: `bytes=${sourceOffset}-${sourceOffset + length - 1}`,
			},
		});
		const bytesRead = response.data.length;
		// TODO: it would be nice to avoid copying here but it would require modifying axios
		response.data.copy(buffer, bufferOffset);
		return { bytesRead, buffer };
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		const response = await axios({
			method: 'get',
			url: this.url,
			responseType: 'stream',
		});
		return response.data;
	}
}

export class FileSparseWriteStream extends Writable implements SparseWriteStream {
	private position: number;
	private bytes = 0;
	private timeSpentWriting = 0;

	constructor(private fd: number) {
		super({ objectMode: true });
	}

	private emitProgress(): void {
		this.emit('progress', {
			bytes: this.bytes,
			position: this.position,
			time: this.timeSpentWriting,
		});
	}

	private async __write(chunk: Chunk, enc: string): Promise<void> {
		try {
			if (this.position !== chunk.position) {
				this.position = chunk.position;
				this.emitProgress();
			}
			const start = Date.now();
			await write(this.fd, chunk.buffer, 0, chunk.length, chunk.position);
			const end = Date.now();
			this.timeSpentWriting += end - start;
			this.position += chunk.length;
			this.bytes += chunk.length;
			this.emitProgress();
		} catch (error) {
			this.emit('error', error);
		}
	}

	_write(chunk: Chunk, enc: string, callback?: (err?: Error | void) => void): void {
		this.__write(chunk, enc).then(callback, callback);
	}
}

export class SourceDestinationFs {
	// Adapts a SourceDestination to an fs like interface (so it can be used in udif for example)
	constructor(private source: SourceDestination) {
	}

	open(path: string, options: any, callback: any) {  // TODO: callback type
		console.log('open');
		callback(null, 1);
	}

	close(fd: number, callback: any) {  // TODO: callback type
		console.log('close');
		callback(null);
	}

	fstat(fd: number, callback: any) {  // TODO: callback type
		console.log('fstat');
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

	read(fd: number, buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number, callback: any) {  // TODO: callback type
		this.source.read(buffer, bufferOffset, length, sourceOffset)
		.then((res: ReadResult) => {
			callback(null, res.bytesRead, res.buffer);
		})
		.catch(callback);
	}

	// TODO: add write if it is needed
}

export class DmgSource extends SourceDestination {
	private constructor(private image: any, private source: SourceDestination) {
		super();
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return this.image.createReadStream();
	}

	async createSparseReadStream(): Promise<FilterStream> {
		return this.image.createSparseReadStream();
	}

	async getMetadata(): Promise<Metadata> {
		const compressedSize = (await this.source.getMetadata()).size;
		return {
			compressedSize,
			size: this.image.getUncompressedSize(),
		};
	}

	static async fromSource(source: SourceDestination): Promise<Bluebird.Disposer<DmgSource>> {
		const image = new UDIFImage('', { fs: new SourceDestinationFs(source) });
		await promisify(image.open).bind(image)();
		return Bluebird.resolve(new DmgSource(image, source))
		.disposer(async () => {
			await promisify(image.close).bind(image)();
		});
	}
}

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
		return await this.getEntry();
	}

	async getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
		};
	}

	static async fromSource(source: SourceDestination): Promise<Bluebird.Disposer<ZipSource>> {
		return Bluebird.resolve(new ZipSource(source)).disposer(_.noop);
	}
}

const main = async () => {
	return Bluebird.using(
		File.fromPath('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img', 'r'),
		File.fromPath('./resin.img', 'w+'),
		async (sourceFile: File, destinationFile: File) => {
			const sourceStream = await sourceFile.createReadStream();
			const destinationStream = await destinationFile.createWriteStream();
			await new Promise((resolve, reject) => {
				sourceStream.on('error', reject);
				destinationStream.on('error', reject);
				sourceStream.on('end', resolve);
				sourceStream.pipe(destinationStream);
			});
		});
};

const main2 = async () => {
	await Bluebird.using(
		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', 'r'),
		File.fromPath('./macos.img', 'w+'),
		async (sourceFile: File, destinationFile: File) => {
			await Bluebird.using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
				const sourceStream = await sourceDmg.createReadStream();
				const destinationStream = await destinationFile.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main3 = async () => {
	await Bluebird.using(
		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', 'r'),
		File.fromPath('./macos.img', 'w+'),
		File.fromPath('./macos2.img', 'w+'),
		async (sourceFile: File, destinationFile: File, destinationFile2: File) => {
			await Bluebird.using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceDmg.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main4 = async () => {
	await Bluebird.using(
		File.fromPath('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img.zip', 'r'),
		File.fromPath('./resin.img', 'w+'),
		File.fromPath('./resin2.img', 'w+'),
		async (sourceFile: File, destinationFile: File, destinationFile2: File) => {
			await Bluebird.using(ZipSource.fromSource(sourceFile), async (sourceZip: ZipSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceZip.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main5 = async () => {
	await Bluebird.using(
		File.fromPath('./resin.img', 'w+'),
		File.fromPath('./resin2.img', 'w+'),
		async (destinationFile: File, destinationFile2: File) => {
			const sourceHttp = new Http('https://resin-staging-img.s3.amazonaws.com/images/artik10/2.3.0%2Brev1.dev/image/resin.img.zip');
			await Bluebird.using(ZipSource.fromSource(sourceHttp), async (sourceZip: ZipSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceZip.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const wrapper = async () => {
	try {
		await main5();
	} catch (error) {
		console.log('error', error);
	}
};

wrapper();
