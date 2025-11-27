import * as CombinedStream from 'combined-stream';
import { BufferDisk } from 'file-disk';
import {
	createDeflatePart,
	createGzipFromParts,
	DEFLATE_END,
} from 'gzip-stream';
import { Readable } from 'stream';
import * as ZipPartStream from 'zip-part-stream';
import { createInflateRaw } from 'zlib';
import axios from 'axios';

import {
	normalizePartition,
	shouldRunOperation,
	DeviceTypeJSON,
	FileOnPartition,
} from './configured-source/configure';
import { configure } from './configured-source/operations/configure';
import { copy } from './configured-source/operations/copy';
import { Metadata } from './metadata';
import {
	CreateReadStreamOptions,
	SourceDestination,
} from './source-destination';
import { ImageJSON, ImageJSONPart } from './compressed-source-types';

import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';
import { Dictionary, streamToBuffer } from '../utils';

/**
 * Configuration for URLCompressedSource
 * Maps keys to their direct URLs (similar to what S3 would provide)
 */
export interface URLSourceConfig {
	VERSION: string; // URL to VERSION file
	'device-type.json': string; // URL to device-type.json file
	'image.json': string; // URL to image.json file
	parts: Dictionary<string>; // Map of part filenames to their URLs
}

export type URLCompressedSourceOptions = {
	urls: URLSourceConfig;
	format: 'zip' | 'gzip';
	configuration?: Dictionary<any>;
} & (
	| {
			baseFilename: string;
	  }
	| {
			filenamePrefix?: string;
			deviceType: string; // raspberry-pi
			buildId: string; // 2.9.6+rev1.prod
	  }
);

/**
 * URLCompressedSource - Downloads and streams compressed images from direct URLs
 * Similar to BalenaS3CompressedSource but uses pre-configured URLs instead of S3 paths
 *
 * Supports regular disk images (zipped or gzipped) and edison zip archives (zip only as it contains many files).
 * No random reads, you can't use this with ConfiguredSource.
 * Instead it handles the configuration on its own.
 * Partial compressed files are streamed from URLs.
 * If a partition (or disk image in the zip archive for edisons) needs configuration, it is downloaded, decompressed and recompressed.
 * The complete compressed stream is created from the partial compressed files from URLs and the configured parts described above.
 */
export class URLCompressedSource extends SourceDestination {
	private urls: URLSourceConfig;
	private format: URLCompressedSourceOptions['format'];
	private baseFilename: string;
	// configuration is config.json + network configuration + dashboard "when" options like "processorCore" for ts4900
	private configuration?: Dictionary<any>;
	private configuredParts = new Map<
		string,
		{ crc: number; zLen: number; buffer: Buffer }
	>();

	// image metadata populated on _open
	private imageJSON: ImageJSON;
	private deviceTypeJSON: DeviceTypeJSON;
	private supervisorVersion: string;
	private lastModified: Date;
	private size: number;
	private filename: string;

	constructor({
		urls,
		format,
		configuration,
		...opts
	}: URLCompressedSourceOptions) {
		super();
		this.urls = urls;
		this.format = format;

		this.baseFilename =
			'baseFilename' in opts
				? opts.baseFilename
				: [
						opts.filenamePrefix,
						opts.deviceType,
						opts.buildId.replace(/\.(prod|dev)$/, ''),
						opts.buildId.endsWith('.dev') ? 'dev' : undefined,
				  ]
						.filter((p) => p !== undefined)
						.join('-');
		this.configuration = configuration;
	}

	private async getSize(): Promise<number> {
		return (await this.createStream(true)).zLen;
	}

	protected async _getMetadata(): Promise<Metadata> {
		return {
			supervisorVersion: this.supervisorVersion,
			lastModified: this.lastModified,
			size: this.size,
			name: this.filename,
			format: this.format,
			arch: this.deviceTypeJSON?.arch,
		};
	}

	private async getSupervisorVersion() {
		const response = await this.download('VERSION');
		const lastModified = new Date(response.headers['last-modified']);
		const supervisorVersion = response.data.trim();
		return { supervisorVersion, lastModified };
	}

	private async getImageJSON(): Promise<ImageJSON> {
		return (await this.download('image.json')).data;
	}

	private async getDeviceTypeJSON(): Promise<DeviceTypeJSON> {
		return (await this.download('device-type.json')).data;
	}

	private async getPartStream(
		filename: string,
	): Promise<NodeJS.ReadableStream> {
		const url = this.urls.parts[filename];
		if (!url) {
			throw new Error(`URL not found for part: ${filename}`);
		}
		const response = await axios.get(url, {
			responseType: 'stream',
		});
		return response.data;
	}

	private async download(key: Exclude<keyof URLSourceConfig, 'parts'>) {
		const url = this.urls[key];
		if (url == null) {
			throw new Error(`URL not found for key: ${key}`);
		}
		return await axios.get(url);
	}

	private findPartitionPart(
		imageJSON: ImageJSON,
		partition: number,
	): ImageJSONPart {
		for (const { parts } of Object.values(imageJSON)) {
			for (const part of parts) {
				if (part.partitionIndex === `(${partition})`) {
					return part;
				}
			}
		}
		throw new Error(
			`Couldn't find compressed image part for partition ${partition}`,
		);
	}

	private findImagePart(imageJSON: ImageJSON, image: string): ImageJSONPart {
		const [part] = imageJSON[image]?.parts ?? [];
		if (part === undefined) {
			throw new Error(`Couldn't find compressed part for image ${image}`);
		}
		return part;
	}

	private findPart(definition: FileOnPartition): ImageJSONPart {
		if (definition.partition !== undefined) {
			const partition = normalizePartition(definition.partition);
			return this.findPartitionPart(this.imageJSON, partition);
		} else if (definition.image !== undefined) {
			return this.findImagePart(this.imageJSON, definition.image);
		} else {
			throw new Error('No partition or image to configure found');
		}
	}

	private async extractDeflateToDisk(filename: string) {
		const stream = await this.getPartStream(filename);
		const combined = CombinedStream.create();
		combined.append(stream);
		combined.append(DEFLATE_END);
		const inflate = createInflateRaw();
		combined.pipe(inflate);
		return new BufferDisk(await streamToBuffer(inflate));
	}

	private async configure() {
		if (this.configuration === undefined) {
			return;
		}
		const disks = new Map<string, BufferDisk>();
		const self = this;
		async function getDisk(definition: FileOnPartition): Promise<BufferDisk> {
			const filename = self.findPart(definition).filename;
			const d = disks.get(filename);
			if (d !== undefined) {
				return d;
			}
			const d2 = await self.extractDeflateToDisk(filename);
			disks.set(filename, d2);
			return d2;
		}
		// configure
		await configure(
			await getDisk(this.deviceTypeJSON.configuration.config),
			undefined,
			this.configuration,
		);
		// copy operations
		for (const cpy of this.deviceTypeJSON.configuration.operations ?? []) {
			if (shouldRunOperation(this.configuration ?? {}, cpy)) {
				await copy(
					await getDisk(cpy.from),
					undefined,
					cpy.from.path,
					await getDisk(cpy.to),
					undefined,
					cpy.to.path,
				);
			}
		}
		// compress
		await Promise.all(
			Array.from(disks.entries()).map(async ([filename, disk]) => {
				const stream = (await disk.getStream()).pipe(createDeflatePart());
				const buffer = await streamToBuffer(stream);
				const { crc, zLen } = stream.metadata();
				this.configuredParts.set(filename, { crc, zLen, buffer });
			}),
		);
	}

	protected async _open(): Promise<void> {
		// Validate that all required URLs are present
		if (!this.urls.VERSION || !this.urls['image.json']) {
			throw new Error('Required URLs (VERSION, image.json) must be provided');
		}

		const [{ supervisorVersion, lastModified }, imageJSON, deviceTypeJSON] =
			await Promise.all([
				this.getSupervisorVersion(),
				this.getImageJSON(),
				this.getDeviceTypeJSON(),
			]);
		if (deviceTypeJSON.yocto.archive) {
			// Only zip works for yocto archives (intel-edison)
			this.format = 'zip';
		}
		this.supervisorVersion = supervisorVersion;
		this.lastModified = lastModified;
		this.deviceTypeJSON = deviceTypeJSON;
		this.filename = [this.baseFilename, supervisorVersion]
			.filter((p) => p !== undefined)
			.join('-');
		// replace resin.img with the requested filename if needed
		const keys = Object.keys(imageJSON);
		if (keys.length === 1 && keys[0] === 'resin.img') {
			this.filename += '.img';
			this.imageJSON = {
				[this.filename]: imageJSON['resin.img'],
			};
		} else {
			this.imageJSON = imageJSON;
		}

		// Validate that all parts referenced in image.json have corresponding URLs
		for (const [imageName, { parts }] of Object.entries(this.imageJSON)) {
			for (const part of parts) {
				if (!this.urls.parts[part.filename]) {
					throw new Error(
						`URL not found for part ${part.filename} referenced in image.json for ${imageName}`,
					);
				}
			}
		}

		await this.configure();
		// The order is important, getSize() expects imageJSON and filename to be set and the image to be configured
		this.size = await this.getSize();
	}

	private async getParts(fake: boolean) {
		return Promise.all(
			Object.entries(this.imageJSON).map(async ([filename, { parts }]) => ({
				filename,
				parts: await Promise.all(
					parts.map(async (p) => {
						let stream: NodeJS.ReadableStream | Buffer;
						let { crc, zLen } = p;
						const configuredPart = this.configuredParts.get(p.filename);
						if (configuredPart !== undefined) {
							({ buffer: stream, crc, zLen } = configuredPart);
						} else if (fake) {
							stream = new Readable();
						} else {
							stream = await this.getPartStream(p.filename);
						}
						return { ...p, crc, zLen, stream };
					}),
				),
			})),
		);
	}

	private async createZipStream(fake: boolean) {
		const entries = (await this.getParts(fake)).map(({ filename, parts }) =>
			ZipPartStream.createEntry(filename, parts),
		);
		return ZipPartStream.create(entries);
	}

	private async createGzipStream(fake: boolean) {
		const [{ parts }] = await this.getParts(fake);
		return createGzipFromParts(parts);
	}

	private async createStream(fake = false) {
		return await (this.format === 'zip'
			? this.createZipStream(fake)
			: this.createGzipStream(fake));
	}

	public async createReadStream(
		options: CreateReadStreamOptions = {},
	): Promise<Readable> {
		if (options.start !== undefined) {
			throw new NotCapable();
		}
		const stream = await this.createStream();
		if (options.end !== undefined) {
			return new StreamLimiter(stream, options.end + 1);
		}
		return stream;
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}
}
