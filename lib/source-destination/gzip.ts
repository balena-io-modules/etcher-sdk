import { Transform } from 'stream';
import { createGunzip } from 'zlib';

import { SourceDestination } from './source-destination';
import { CompressedSource } from './compressed-source';

const ISIZE_LENGTH = 4;

export class GZipSource extends CompressedSource {
	static readonly mimetype = 'application/gzip';

	protected createTransform(): Transform {
		return createGunzip();
	}

	protected async getSize(): Promise<number | undefined> {
		if (await this.source.canRead()) {
			const sourceMetadata = await this.source.getMetadata();
			if (sourceMetadata.size !== undefined) {
				const { buffer } = await this.source.read(
					Buffer.allocUnsafe(ISIZE_LENGTH),
					0,
					ISIZE_LENGTH,
					sourceMetadata.size - ISIZE_LENGTH,
				);
				return buffer.readUInt32LE(0);
			}
		}
	}
}

SourceDestination.register(GZipSource);
