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

import { BalenaS3SourceBase, BalenaS3SourceOptions } from './balena-s3-source';
import {
	normalizePartition,
	shouldRunOperation,
	DeviceTypeJSON,
	FileOnPartition,
} from './configured-source/configure';
import { configure } from './configured-source/operations/configure';
import { copy } from './configured-source/operations/copy';
import { Metadata } from './metadata';
import { CreateReadStreamOptions } from './source-destination';

import { NotCapable } from '../errors';
import { StreamLimiter } from '../stream-limiter';
import { Dictionary, streamToBuffer } from '../utils';

interface ImageJSONPart {
	filename: string;
	crc: number;
	len: number;
	zLen: number;
	partitionIndex?: string;
}

type ImageJSON = Dictionary<{ parts: ImageJSONPart[] }>;

export interface BalenaS3CompressedSourceOptions extends BalenaS3SourceOptions {
	format: 'zip' | 'gzip';
	filenamePrefix?: string;
	configuration?: Dictionary<any>;
}

export class BalenaS3CompressedSource extends BalenaS3SourceBase {
	/*
	 * Supports regular disk images (zipped or gzipped) and edison zip archives (zip only as it contains many files).
	 * No random reads, you can't use this with ConfiguredSource.
	 * Instead it handles the configuration on its own.
	 * Partial compressed files are streamed from S3.
	 * If a partition (or disk image in the zip archive for edisons) needs configuration, it is downloaded, decompressed and recompressed.
	 * The complete compressed stream is created from the partial compressed files in S3 and the configured parts described above.
	 * Downside: can't be used with ConfiguredSource.
	 * Upside: only the needed parts of the archive need to be decomressed and recompressed.
	 *
	 * Note: edison zip archives are not valid sources for flashing, they contain multiple files, not a single disk image.
	 */
	private imageJSON: ImageJSON;
	private deviceTypeJSON: DeviceTypeJSON;
	private format: BalenaS3CompressedSourceOptions['format'];
	private filenamePrefix?: string;
	// configuration is config.json + network configuration + dashboard "when" options like "processorCore" for ts4900
	private configuration?: Dictionary<any>;
	private configuredParts = new Map<
		string,
		{ crc: number; zLen: number; buffer: Buffer }
	>();
	private supervisorVersion: string;
	private lastModified: Date;
	private osVersion: string;
	private size: number;
	private filename: string;

	constructor({
		format,
		filenamePrefix,
		configuration,
		...options
	}: BalenaS3CompressedSourceOptions) {
		super(options);
		this.format = format;
		this.filenamePrefix = filenamePrefix;
		this.configuration = configuration;
	}

	private async getSize(): Promise<number> {
		return (await this.createStream(true)).zLen;
	}

	private getFilename(): string {
		return [
			this.filenamePrefix,
			this.deviceType,
			this.osVersion,
			this.buildId.endsWith('.dev') ? 'dev' : undefined,
			this.supervisorVersion,
		]
			.filter((p) => p !== undefined)
			.join('-');
	}

	protected async _getMetadata(): Promise<Metadata> {
		return {
			supervisorVersion: this.supervisorVersion,
			osVersion: this.osVersion,
			lastModified: this.lastModified,
			size: this.size,
			version: this.buildId,
			name: this.filename,
		};
	}

	private async getSupervisorVersion() {
		const response = await this.download('VERSION');
		const lastModified = new Date(response.headers['last-modified']);
		const supervisorVersion = response.data.trim();
		return { supervisorVersion, lastModified };
	}

	private async getOsVersion() {
		const response = await this.download('VERSION_HOSTOS');
		return response.data.trim();
	}

	private async getImageJSON(): Promise<ImageJSON> {
		const imageJSON = (await this.download('image.json')).data;
		return imageJSON;
	}

	private async getDeviceTypeJSON(): Promise<DeviceTypeJSON> {
		return (await this.download('device-type.json')).data;
	}

	private async getPartStream(
		filename: string,
	): Promise<NodeJS.ReadableStream> {
		const response = await this.download(`compressed/${filename}`, 'stream');
		return response.data;
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
		const [
			{ supervisorVersion, lastModified },
			osVersion,
			imageJSON,
			deviceTypeJSON,
		] = await Promise.all([
			this.getSupervisorVersion(),
			this.getOsVersion(),
			this.getImageJSON(),
			this.getDeviceTypeJSON(),
		]);
		this.supervisorVersion = supervisorVersion;
		this.lastModified = lastModified;
		this.osVersion = osVersion;
		this.deviceTypeJSON = deviceTypeJSON;
		// The order is important, getFilename() expects osVersion and supervisorVersion to be set
		this.filename = this.getFilename();
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
	): Promise<NodeJS.ReadableStream> {
		if (options.start !== undefined) {
			throw new NotCapable();
		}
		const stream = await this.createStream();
		if (options.end !== undefined) {
			return new StreamLimiter(stream, options.end + 1);
		}
		return stream;
	}
}
