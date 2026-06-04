import { expect } from 'chai';
import { Readable, Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import * as sinon from 'sinon';

import {
	URLCompressedSource,
	URLSourceConfig,
} from '../lib/source-destination/url-compressed-source';
import { streamToBuffer } from '../lib/utils';
import {
	makeDeflatePart,
	sumImageJSONLenFields,
	testZipArchive,
} from './utils';

// ─── unit test fixtures ───────────────────────────────────────────────────────

const BASE_OPTIONS = {
	urls: {
		VERSION: 'https://example.com/VERSION',
		VERSION_HOSTOS: 'https://example.com/VERSION_HOSTOS',
		'device-type.json': 'https://example.com/device-type.json',
		'image.json': 'https://example.com/image.json',
		parts: new Proxy({} as Record<string, string>, {
			get(_target, filename: string) {
				// return a URL from the compressed folder, for any deflate indicated by the image.json
				return `https://example.com/stub/compressed/${filename}`;
			},
			has: () => true,
		}),
	} as URLSourceConfig,
	deviceType: 'raspberrypi3',
	buildId: '2.9.6+rev1.prod',
};

const DEVICE_TYPE_JSON = {
	slug: 'raspberrypi3',
	version: 1,
	aliases: ['raspberrypi3'],
	name: 'Raspberry Pi 3',
	arch: 'armv7hf',
	configuration: { config: { partition: 1 } },
	yocto: {},
};

function stubDownload(
	source: URLCompressedSource,
	imageJSON: object,
	partFiles: Map<string, Buffer>,
): void {
	sinon
		// @ts-expect-error access protected property for test
		.stub(source, 'download')
		.callsFake(async (key: string) => {
			switch (key) {
				case 'VERSION':
					return {
						headers: { 'last-modified': 'Wed, 01 Jan 2025 00:00:00 GMT' },
						data: '2.0.0',
					};
				case 'VERSION_HOSTOS':
					return { headers: {}, data: '2.9.0' };
				case 'image.json':
					return { headers: {}, data: imageJSON };
				case 'device-type.json':
					return { headers: {}, data: DEVICE_TYPE_JSON };
				default:
					throw new Error(`Unexpected download call: ${key}`);
			}
		});

	sinon
		// @ts-expect-error access protected property for test
		.stub(source, 'getPartStream')
		.callsFake(async (filename: string) => {
			const buf = partFiles.get(filename);
			if (buf == null) {
				throw new Error(`No part data for: ${filename}`);
			}
			return Readable.from([buf]);
		});
}

// ─── unit tests ───────────────────────────────────────────────────────────────

describe('URLCompressedSource', function () {
	this.timeout(10000);

	const PART_DATA0 = Buffer.alloc(512, 0xab);
	const PART_DATA1 = Buffer.alloc(512, 0xcd);

	type DeflatePartMeta = {
		buf: Buffer;
		crc: number;
		len: number;
		zLen: number;
	};
	let deflateParts: DeflatePartMeta[] = [];

	const getImageJSON = (parts: DeflatePartMeta[]) => ({
		'resin.img': {
			parts: parts.map((part, i) => ({
				filename: `part-${i}.deflate`,
				crc: part.crc,
				len: part.len,
				zLen: part.zLen,
			})),
		},
	});

	before(async () => {
		deflateParts = await Promise.all(
			[PART_DATA0, PART_DATA1].map((data) => makeDeflatePart(data)),
		);
	});

	afterEach(() => sinon.restore());

	// ── gzip ──────────────────────────────────────────────────────────────────

	describe('createReadStream() — gzip format', () => {
		it('concatenates multiple deflate parts into a single gzip stream', async () => {
			const source = new URLCompressedSource({
				...BASE_OPTIONS,
				format: 'gzip',
			});
			const imageJSON = getImageJSON(deflateParts);
			stubDownload(
				source,
				imageJSON,
				new Map([
					['part-0.deflate', deflateParts[0].buf],
					['part-1.deflate', deflateParts[1].buf],
				]),
			);

			await source.open();
			const stream = await source.createReadStream();
			const gz = createGunzip();
			const bufPromise = streamToBuffer(gz);
			await pipeline(stream, gz);
			const decompressed = await bufPromise;

			expect(decompressed).to.deep.equal(
				Buffer.concat([PART_DATA0, PART_DATA1]),
			);
			await source.close();
		});
	});

	// ── zip ───────────────────────────────────────────────────────────────────

	describe('createReadStream() — zip format', () => {
		it('creates a valid zip with the correct entry name and data', async () => {
			const source = new URLCompressedSource({
				...BASE_OPTIONS,
				format: 'zip',
			});
			const imageJSON = getImageJSON(deflateParts);
			stubDownload(
				source,
				imageJSON,
				new Map([
					['part-0.deflate', deflateParts[0].buf],
					['part-1.deflate', deflateParts[1].buf],
				]),
			);

			await source.open();
			const metadata = await source.getMetadata();

			// @ts-expect-error access private property for test
			const expectedExtractedSize = sumImageJSONLenFields(source.imageJSON);
			const stream = await source.createReadStream();

			try {
				await testZipArchive(stream, metadata, expectedExtractedSize);
			} finally {
				await source.close();
			}
		});
	});
});

// ─── integration tests (real S3 data) ──────────────────────────────────────

const BUCKET_BASE_OPTIONS = {
	host: 'https://s3.amazonaws.com',
	bucket: 'resin-production-img-cloudformation',
	prefix: 'images',
};

for (const opts of [
	{
		deviceType: 'raspberrypi3',
		buildId: '2.115.7',
		supervisorVersion: 'v14.11.2',
		arch: 'armv7hf',
	},
	{
		// tests zip64 support with an image part that's >4GB uncompressed
		deviceType: 'jetson-orin-nx-xavier-nx-devkit',
		buildId: '2.113.32',
		supervisorVersion: 'v14.9.8',
		arch: 'aarch64',
	},
]) {
	describe(`URLCompressedSource (integration — ${opts.deviceType} ${opts.buildId})`, function () {
		this.timeout(600_000);
		const baseUrl = [
			BUCKET_BASE_OPTIONS.host,
			BUCKET_BASE_OPTIONS.bucket,
			BUCKET_BASE_OPTIONS.prefix,
			opts.deviceType,
			encodeURIComponent(opts.buildId),
		].join('/');
		const sourceBaseOptions = {
			urls: {
				VERSION: `${baseUrl}/VERSION`,
				VERSION_HOSTOS: `${baseUrl}/VERSION_HOSTOS`,
				'device-type.json': `${baseUrl}/device-type.json`,
				'image.json': `${baseUrl}/image.json`,
				parts: new Proxy({} as Record<string, string>, {
					get(_target, filename: string) {
						// return a URL from the compressed folder, for any deflate indicated by the image.json
						return `${baseUrl}/compressed/${filename}`;
					},
					has() {
						return true;
					},
				}),
			},
			deviceType: opts.deviceType,
			buildId: opts.buildId,
			configuration: {
				applicationId: 12345,
				deviceType: opts.deviceType,
				apiKey: 'dummy',
			},
		};

		it('gzip: decompressed size matches sum of len fields in image.json', async function () {
			const source = new URLCompressedSource({
				...sourceBaseOptions,
				format: 'gzip',
			});
			await source.open();
			// @ts-expect-error access private property for test
			const expectedTotal = sumImageJSONLenFields(source.imageJSON);
			const stream = await source.createReadStream();
			let total = 0;
			await pipeline(
				stream,
				createGunzip(),
				new Writable({
					write(chunk: Buffer, _enc, cb) {
						total += chunk.length;
						cb();
					},
				}),
			);
			await source.close();
			expect(total).to.equal(expectedTotal);
		});

		it('zip: single entry with correct filename and decompressed size', async () => {
			const source = new URLCompressedSource({
				...sourceBaseOptions,
				format: 'zip',
			});
			await source.open();
			const metadata = await source.getMetadata();
			expect(metadata).to.include({
				format: 'zip',
				osVersion: opts.buildId,
				version: opts.buildId,
				supervisorVersion: opts.supervisorVersion,
				arch: opts.arch,
				name: `${opts.deviceType}-${opts.buildId}-${opts.supervisorVersion}.img`,
			});
			// @ts-expect-error access private property for test
			const expectedExtractedSize = sumImageJSONLenFields(source.imageJSON);
			const stream = await source.createReadStream();

			try {
				await testZipArchive(stream, metadata, expectedExtractedSize);
			} finally {
				await source.close();
			}
		});
	});
}
