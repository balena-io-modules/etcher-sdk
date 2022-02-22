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

import { aws4Interceptor } from 'aws4-axios';
import axios, { AxiosInstance } from 'axios';
import { ReadResult } from 'file-disk';

import { Http } from './http';
import { Metadata } from './metadata';
import {
	CreateReadStreamOptions,
	SourceDestination,
} from './source-destination';
import { ZipSource } from './zip';

type Name = 'balena' | 'resin';

const ESR_IMAGES_PREFIX = 'esr-images';
const IMAGES_PREFIX = 'images';
const PRELOADED_IMAGES_PREFIX = 'preloaded-images';

export interface AwsCredentials {
	accessKeyId: string;
	secretAccessKey: string;
	sessionToken?: string;
}

export interface BalenaS3SourceOptions {
	host: string; // https://s3.amazonaws.com
	bucket: string; // resin-staging-img or resin-production-img-cloudformation
	prefix?: string; // images or preloaded-images or esr-images
	deviceType: string; // raspberry-pi
	buildId: string; // 2.9.6+rev1.prod
	release?: string; // 1344795
	awsCredentials?: AwsCredentials;
}

export abstract class BalenaS3SourceBase extends SourceDestination {
	public readonly host: string;
	public readonly bucket: string;
	public readonly prefix: string;
	public readonly deviceType: string;
	public readonly buildId: string;
	public readonly release?: string; // Only used for preloaded images
	protected axiosInstance: AxiosInstance;
	private static filesMissingFromPreloadedImages = [
		'VERSION',
		'VERSION_HOSTOS',
		'device-type.json',
	];

	constructor({
		host,
		bucket,
		prefix,
		deviceType,
		buildId,
		release,
		awsCredentials,
	}: BalenaS3SourceOptions) {
		super();
		this.host = host;
		this.bucket = bucket;
		if (prefix !== undefined) {
			this.prefix = prefix;
		} else if (release !== undefined) {
			this.prefix = PRELOADED_IMAGES_PREFIX;
		} else if (BalenaS3SourceBase.isESRVersion(buildId)) {
			this.prefix = ESR_IMAGES_PREFIX;
		} else {
			this.prefix = IMAGES_PREFIX;
		}
		this.deviceType = deviceType;
		this.buildId = buildId;
		this.release = release;
		this.axiosInstance = axios.create();
		if (awsCredentials !== undefined) {
			this.axiosInstance.interceptors.request.use(
				aws4Interceptor({ service: 's3' }, awsCredentials),
			);
		}
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	public static isESRVersion(buildId: string) {
		return /^\d{4}\.\d{1,2}\.\d+([.+](dev|prod))?$/.test(buildId);
	}

	private isESR() {
		return BalenaS3SourceBase.isESRVersion(this.buildId);
	}

	protected async download(path: string, responseType?: 'stream') {
		return await this.axiosInstance.get(this.getUrl(path), { responseType });
	}

	protected getUrl(path: string): string {
		let prefix = this.prefix;
		let release = this.release;
		// Preloaded images have no VERSION, VERSION_HOSTOS or device-type.json file, we need to get it from the images or esr-images folder
		if (
			release !== undefined &&
			BalenaS3SourceBase.filesMissingFromPreloadedImages.includes(path)
		) {
			release = undefined;
			prefix = this.isESR() ? ESR_IMAGES_PREFIX : IMAGES_PREFIX;
		}
		return [
			this.host,
			this.bucket,
			prefix,
			this.deviceType,
			encodeURIComponent(this.buildId),
			release,
			path,
		]
			.filter((x) => x !== undefined)
			.join('/');
	}
}

export class BalenaS3Source extends BalenaS3SourceBase {
	/*
	 * Random reads from the uncompressed image in S3
	 * Read streams from the zipped image in S3
	 * This allows this source to be randomly readable for configuration using ConfiguredSource
	 * The downside is that you need to decompress and recomrpess the whole image if you need a compressed configured image.
	 */
	private rawSource: Http;
	private zipSource: ZipSource;
	private names: Name[] = ['balena', 'resin'];
	public name: Name; // images can be named balena.img or resin.img

	private async getName(): Promise<Name> {
		for (const name of this.names) {
			try {
				await this.axiosInstance({
					method: 'head',
					url: this.getUrl(`image/${name}.img`),
				});
				return name;
			} catch (error) {
				if (error.response.status !== 404) {
					throw error;
				}
			}
		}
		throw new Error('Could not find image');
	}

	public async canRead(): Promise<boolean> {
		return true;
	}

	public async read(
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

	public async createReadStream(
		options: CreateReadStreamOptions = {},
	): Promise<NodeJS.ReadableStream> {
		return await this.zipSource.createReadStream(options);
	}

	protected async _getMetadata(): Promise<Metadata> {
		return await this.zipSource.getMetadata();
	}

	protected async _open() {
		this.name = await this.getName();
		this.rawSource = new Http({
			url: this.getUrl(`image/${this.name}.img`),
			axiosInstance: this.axiosInstance,
		});
		this.zipSource = new ZipSource(
			new Http({
				url: this.getUrl(`image/${this.name}.img.zip`),
				avoidRandomAccess: true,
				axiosInstance: this.axiosInstance,
			}),
		);
		await Promise.all([this.rawSource.open(), await this.zipSource.open()]);
	}

	protected async _close() {
		await Promise.all([this.zipSource.close(), await this.rawSource.close()]);
	}
}
