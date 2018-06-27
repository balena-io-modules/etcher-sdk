import { basename, extname } from 'path';
import { Transform } from 'stream';

import { Metadata } from './metadata';
import { SourceSource } from './source-source';
import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';

export abstract class CompressedSource extends SourceSource {
	protected abstract createTransform(): Transform;

	protected async getSize(): Promise<number | undefined> {
		return;
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async _createReadStream(start = 0, end?: number): Promise<NodeJS.ReadableStream> {
		if (start !== 0) {
			throw new NotCapable();
		}
		const stream = await this.source.createReadStream();
		const transform = this.createTransform();
		stream.pipe(transform);
		if (end !== undefined) {
			const limiter = new StreamLimiter(transform, end + 1);
			limiter.on('finish', () => {
				// Ignore EBADF errors after this:
				// We might be still reading the source stream from a closed fd
				stream.on('error', (err: NodeJS.ErrnoException) => {
					if (err.code !== 'EBADF') {
						throw err;
					}
				});
			});
			return limiter;
		}
		return transform;
	}

	async _getMetadata(): Promise<Metadata> {
		const sourceMetadata = await this.source.getMetadata();
		const compressedSize = sourceMetadata.compressedSize || sourceMetadata.size;
		const size = await this.getSize();
		let name;
		if (sourceMetadata.name !== undefined) {
			name = basename(sourceMetadata.name, extname(sourceMetadata.name));
		}
		return { name, size, compressedSize };
	}
}
