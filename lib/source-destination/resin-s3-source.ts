import { ReadResult } from 'file-disk';

import { Http } from './http';
import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';
import { ZipSource } from './zip';

export class ResinS3Source extends SourceDestination {
	private rawSource: Http;
	private zipSource: ZipSource;

	constructor(readonly bucket: string, readonly deviceType: string, readonly version: string) {
		// example:
		// bucket: resin-staging-img or resin-production-img-cloudformation
		// deviceType: raspberry-pi
		// version: 2.9.6+rev1.prod
		super();
		this.rawSource = new Http(this.getUrl('image/resin.img'));
		this.zipSource = new ZipSource(new Http(this.getUrl('image/resin.img.zip')));

	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canRead(): Promise<boolean> {
		return true;
	}

	private getUrl(path: string): string {
		return `https://${this.bucket}.s3.amazonaws.com/images/${this.deviceType}/${encodeURIComponent(this.version)}/${path}`;
	}

	async read(buffer: Buffer, bufferOffset: number, length: number, sourceOffset: number): Promise<ReadResult> {
		return await this.rawSource.read(buffer, bufferOffset, length, sourceOffset);
	}

	async _createReadStream(...args: any[]): Promise<NodeJS.ReadableStream> {
		return await this.zipSource._createReadStream(...args);
	}

	async getMetadata(): Promise<Metadata> {
		return await this.zipSource.getMetadata();
	}

	protected async _open() {
		await super._open();
		await this.rawSource.open();
		await this.zipSource.open();
	}

	protected async _close() {
		await this.zipSource.close();
		await this.rawSource.close();
		await super._close();
	}
}
