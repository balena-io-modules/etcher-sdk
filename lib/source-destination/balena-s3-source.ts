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

import axios from 'axios';
import { ReadResult } from 'file-disk';

import { Http } from './http';
import { Metadata } from './metadata';
import {
	CreateReadStreamOptions,
	SourceDestination,
} from './source-destination';
import { ZipSource } from './zip';

type Name = 'balena' | 'resin';

export class BalenaS3Source extends SourceDestination {
	private rawSource: Http;
	private zipSource: ZipSource;
	private ready: Promise<void>;
	private names: Name[] = ['balena', 'resin'];
	public name: Name; // images can be named balena.img or resin.img

	constructor(
		readonly bucket: string,
		readonly deviceType: string,
		readonly version: string,
		readonly host = 's3.amazonaws.com',
		readonly prefix = 'images',
	) {
		// example:
		// bucket: resin-staging-img or resin-production-img-cloudformation
		// deviceType: raspberry-pi
		// version: 2.9.6+rev1.prod
		super();
		this.ready = this.prepare();
	}

	private async prepare(): Promise<void> {
		this.name = await this.getName();
		this.rawSource = new Http({ url: this.getUrl(`image/${this.name}.img`) });
		this.zipSource = new ZipSource(
			new Http({
				url: this.getUrl(`image/${this.name}.img.zip`),
				avoidRandomAccess: true,
			}),
		);
	}

	private async getName(): Promise<Name> {
		for (const name of this.names) {
			try {
				await axios({ method: 'head', url: this.getUrl(`image/${name}.img`) });
				return name;
			} catch (error) {
				if (error.response.status !== 404) {
					throw error;
				}
			}
		}
		throw new Error('Could not find image');
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public async canRead(): Promise<boolean> {
		return true;
	}

	private getUrl(path: string): string {
		return `https://${this.bucket}.${this.host}/${this.prefix}/${
			this.deviceType
		}/${encodeURIComponent(this.version)}/${path}`;
	}

	public async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		await this.ready;
		return await this.rawSource.read(
			buffer,
			bufferOffset,
			length,
			sourceOffset,
		);
	}

	public async createReadStream(
		options: CreateReadStreamOptions = {},
	): Promise<NodeJS.ReadableStream> {
		await this.ready;
		return await this.zipSource.createReadStream(options);
	}

	protected async _getMetadata(): Promise<Metadata> {
		await this.ready;
		return await this.zipSource.getMetadata();
	}

	protected async _open() {
		await this.ready;
		await Promise.all([this.rawSource.open(), await this.zipSource.open()]);
	}

	protected async _close() {
		await this.ready;
		await Promise.all([this.zipSource.close(), await this.rawSource.close()]);
	}
}
