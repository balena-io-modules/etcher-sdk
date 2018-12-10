/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ReadResult } from 'file-disk';

import { Http } from './http';
import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';
import { ZipSource } from './zip';

export class ResinS3Source extends SourceDestination {
	private rawSource: Http;
	private zipSource: ZipSource;

	constructor(
		readonly bucket: string,
		readonly deviceType: string,
		readonly version: string,
		readonly host = 's3.amazonaws.com',
	) {
		// example:
		// bucket: resin-staging-img or resin-production-img-cloudformation
		// deviceType: raspberry-pi
		// version: 2.9.6+rev1.prod
		super();
		this.rawSource = new Http(this.getUrl('image/resin.img'));
		this.zipSource = new ZipSource(
			new Http(this.getUrl('image/resin.img.zip')),
			true,
		);
	}

	async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	async canRead(): Promise<boolean> {
		return true;
	}

	private getUrl(path: string): string {
		return `https://${this.bucket}.${this.host}/images/${
			this.deviceType
		}/${encodeURIComponent(this.version)}/${path}`;
	}

	async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		return await this.rawSource.read(
			buffer,
			bufferOffset,
			length,
			sourceOffset,
		);
	}

	async createReadStream(...args: any[]): Promise<NodeJS.ReadableStream> {
		return await this.zipSource.createReadStream(...args);
	}

	async _getMetadata(): Promise<Metadata> {
		return await this.zipSource.getMetadata();
	}

	protected async _open() {
		await this.rawSource.open();
		await this.zipSource.open();
	}

	protected async _close() {
		await this.zipSource.close();
		await this.rawSource.close();
	}
}
