import { map } from 'bluebird';
import { ReadResult, WriteResult } from 'file-disk';
import { every } from 'lodash';
import { PassThrough } from 'stream';

import { SourceDestination } from './source-destination';
import { SparseWriteStream } from '../sparse-write-stream';

export class MultiDestinationError extends Error {
	constructor(public error: Error, public destination: SourceDestination) {
		super();
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
		return every(
			await map(this.destinations, async (destination: SourceDestination) => {
				return await destination[methodName]();
			}),
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
		const results = await map(this.destinations, async (destination: SourceDestination) => {
			return await destination.write(buffer, bufferOffset, length, fileOffset);
		});
		// Returns the first WriteResult (they should be all the same)
		return results[0];
		// TODO: handle errors so one destination can fail
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return await this.destinations[0].createReadStream();
	}

	async createSparseReadStream(): Promise<NodeJS.ReadableStream> {
		return await this.destinations[0].createSparseReadStream();
	}

	private async createStream(methodName: 'createWriteStream' | 'createSparseWriteStream') {
		const passthrough = new PassThrough();
		const streams = await map(this.destinations, async (destination: SourceDestination) => {
			const stream = await destination[methodName]();
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

	async open(): Promise<void> {  // TODO: factorize open and close
		// TODO: remove destination from destinations list on error?
		await super.open();
		await map(this.destinations, async (destination) => {
			try {
				await destination.open();
			} catch (error) {
				this.emit('error', new MultiDestinationError(error, destination));
			}
		});
	}

	async close(): Promise<void> {
		await super.close();
		await map(this.destinations, async (destination) => {
			try {
				await destination.close();
			} catch (error) {
				this.emit('error', new MultiDestinationError(error, destination));
			}
		});
	}
}
