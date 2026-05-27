import { expect } from 'chai';
import { Readable, Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import * as sinon from 'sinon';

import { BalenaS3CompressedSource } from '../lib/source-destination/balena-s3-compressed-source';
import { streamToBuffer } from '../lib/utils';
import {
	makeDeflatePart,
	sumImageJSONLenFields,
	testZipArchive,
} from './utils';

// ─── unit test fixtures ───────────────────────────────────────────────────────

const BASE_OPTIONS = {
	host: 'https://s3.example.com',
	bucket: 'test-bucket',
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
	source: BalenaS3CompressedSource,
	imageJSON: object,
	partFiles: Map<string, Buffer>,
): sinon.SinonStub {
	return (
		sinon
			// @ts-expect-error access protected property for test
			.stub(source, 'download')
			.callsFake(async (path: string) => {
				switch (path) {
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
						const part = partFiles.get(path);
						if (part == null) {
							throw new Error(`Unexpected download call: ${path}`);
						}
						return { data: Readable.from([part]) };
				}
			})
	);
}

// ─── unit tests ───────────────────────────────────────────────────────────────

describe('BalenaS3CompressedSource', function () {
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
			const source = new BalenaS3CompressedSource({
				...BASE_OPTIONS,
				format: 'gzip',
			});
			const imageJSON = getImageJSON(deflateParts);
			stubDownload(
				source,
				imageJSON,
				new Map([
					['compressed/part-0.deflate', deflateParts[0].buf],
					['compressed/part-1.deflate', deflateParts[1].buf],
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
			const source = new BalenaS3CompressedSource({
				...BASE_OPTIONS,
				format: 'zip',
			});
			const imageJSON = getImageJSON(deflateParts);
			stubDownload(
				source,
				imageJSON,
				new Map([
					['compressed/part-0.deflate', deflateParts[0].buf],
					['compressed/part-1.deflate', deflateParts[1].buf],
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
	describe(`BalenaS3CompressedSource (integration — ${opts.deviceType} ${opts.buildId})`, function () {
		this.timeout(600_000);

		const sourceBaseOptions = {
			...BUCKET_BASE_OPTIONS,
			deviceType: opts.deviceType,
			buildId: opts.buildId,
			configuration: {
				applicationId: 12345,
				deviceType: opts.deviceType,
				apiKey: 'dummy',
			},
		};

		it('gzip: decompressed size matches sum of len fields in image.json', async function () {
			const source = new BalenaS3CompressedSource({
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
			const source = new BalenaS3CompressedSource({
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
