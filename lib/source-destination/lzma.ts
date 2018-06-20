import { promisify } from 'bluebird';
import { Transform } from 'stream';
import { createDecompressor, parseFileIndex } from 'lzma-native';

import { SourceDestination } from './source-destination';
import { CompressedSource } from './compressed-source';

const parseFileIndexAsync = promisify(parseFileIndex);

export class XzSource extends CompressedSource {
	static readonly mimetype = 'application/x-xz';

	protected createTransform(): Transform {
		return createDecompressor();
	}

	protected async getSize(): Promise<number | undefined> {
		if (!(await this.source.canRead())) {
			return;
		}
		const { size } = await this.source.getMetadata();
		if (size === undefined) {
			return;
		}
		const { uncompressedSize } = await parseFileIndexAsync({
			fileSize: size,
			read: async (count: number, offset: number, callback: (error: Error | null, buffer?: Buffer) => Promise<void>) => {
				try {
					const readResult = await this.source.read(Buffer.allocUnsafe(count), 0, count, offset);
					callback(null, readResult.buffer);
				} catch (error) {
					callback(error);
				}
			},
		});
		return uncompressedSize;
	}
}

SourceDestination.register(XzSource);
