import * as AWS from 'aws-sdk';
import { ReadResult } from 'file-disk';
import { ZipStreamEntry } from 'unzip-stream';
import { Url } from 'url';

import { Metadata } from './metadata';
import { makeStreamEmitProgressEvents } from './progress-event';
import { SourceDestination } from './source-destination';
import { getFileStreamFromZipStream } from '../zip';

const getS3Client = (): AWS.S3 => {
	const s3Config: AWS.S3.Types.ClientConfiguration = {
		accessKeyId: '',
		secretAccessKey: '',
		s3ForcePathStyle: true,
		sslEnabled: false,
	};
	const s3 = new AWS.S3(s3Config);
	// Make it work without accessKeyId and secretAccessKey
	s3.getObject = (...args: any[]) => {
		return s3.makeUnauthenticatedRequest('getObject', ...args);
	};
	s3.headObject = (...args: any[]) => {
		return s3.makeUnauthenticatedRequest('headObject', ...args);
	};
	return s3;
};

export class NoContentLength extends Error {
	constructor(source: ResinS3Source) {
		super(`No content length for resin s3 source ${source.bucket} ${source.deviceType} ${source.version}`);
	}
}

export class ResinS3Source extends SourceDestination {
	static protocol: string = 'resin-s3:';

	private static s3: AWS.S3 = getS3Client();
	private entry: ZipStreamEntry;

	constructor(readonly bucket: string, readonly deviceType: string, readonly version: string) {
		// example:
		// bucket: resin-staging-img or resin-production-img-cloudformation
		// deviceType: raspberry-pi
		// version: 2.9.6+rev1.prod
		super();
	}

	private getS3Params(compressed: boolean): AWS.S3.Types.GetObjectRequest {
		return {
			Bucket: this.bucket,
			Key: `images/${this.deviceType}/${this.version}/image/resin.img${compressed ? '.zip' : ''}`,
		};
	}

	private getRange(start?: number, end?: number): string | undefined {
		if ((start !== undefined) || (end !== undefined)) {
			return `bytes=${start || 0}-${end || ''}`;
		}
	}

	private async getEntry(): Promise<ZipStreamEntry> {
		if (this.entry === undefined) {
			const stream = ResinS3Source.s3.getObject(this.getS3Params(true)).createReadStream();
			this.entry = await getFileStreamFromZipStream(stream, 'resin.img');
		}
		return this.entry;
	}

	private async getSize(compressed: boolean): Promise<number> {
		return (await this.getEntry()).size;
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		const params = this.getS3Params(false);
		params.Range = this.getRange(sourceOffset, sourceOffset + length - 1);
		const data = await ResinS3Source.s3.getObject(params).promise();
		if (data.ContentLength === undefined) {
			throw new NoContentLength(this);
		}
		(data.Body as Buffer).copy(buffer, bufferOffset);
		return { bytesRead: data.ContentLength, buffer };
	}

	async createReadStream(): Promise<NodeJS.ReadableStream> {
		return await makeStreamEmitProgressEvents(await this.getEntry(), this);
	}

	async getMetadata(): Promise<Metadata> {
		const entry = await this.getEntry();
		return {
			size: entry.size,
			compressedSize: entry.compressedSize,
		};
	}
}
