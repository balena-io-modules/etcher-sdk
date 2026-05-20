import { execFile as execFileCb } from 'child_process';
import { promisify } from 'util';
const execFile = promisify(execFileCb);
import { expect } from 'chai';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Readable, Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import * as sinon from 'sinon';
import * as unzip from 'unzip-stream';

import { URLCompressedSource, URLSourceConfig } from '../lib/source-destination/url-compressed-source';
import { streamToBuffer } from '../lib/utils';
import { countBytes, makeDeflatePart, sumImageJSONLenFields } from './utils';

/**
 * Build a URLSourceConfig from standard S3 bucket parameters.
 * Part URLs are resolved dynamically via a Proxy so we don't need to know
 * the part filenames ahead of time.
 */
function buildS3URLConfig(
	host: string,
	bucket: string,
	prefix: string,
	deviceType: string,
	buildId: string,
): URLSourceConfig {
	const base = [
		host,
		bucket,
		prefix,
		deviceType,
		encodeURIComponent(buildId),
	].join('/');

	const parts = new Proxy({} as Record<string, string>, {
		get(_target, filename: string) {
			return `${base}/compressed/${filename}`;
		},
		has() {
			return true;
		},
	});

	return {
		VERSION: `${base}/VERSION`,
		VERSION_HOSTOS: `${base}/VERSION_HOSTOS`,
		'device-type.json': `${base}/device-type.json`,
		'image.json': `${base}/image.json`,
		parts,
	};
}

// ─── unit test fixtures ───────────────────────────────────────────────────────

/**
 * A Proxy that returns a truthy stub URL for any part filename.
 * This satisfies the URLCompressedSource._open() validation that checks
 * `this.urls.parts[part.filename]` without needing to know filenames upfront.
 */
const stubPartsProxy = new Proxy({} as Record<string, string>, {
	get: () => 'https://example.com/stub',
	has: () => true,
});

const BASE_OPTIONS = {
	urls: {
		VERSION: 'https://example.com/VERSION',
		VERSION_HOSTOS: 'https://example.com/VERSION_HOSTOS',
		'device-type.json': 'https://example.com/device-type.json',
		'image.json': 'https://example.com/image.json',
		parts: stubPartsProxy,
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

/**
 * Stubs the private `download` method (for VERSION / VERSION_HOSTOS /
 * image.json / device-type.json) and the private `getPartStream` method (for
 * compressed part data) on a URLCompressedSource instance.
 */
function stubDownload(
	source: URLCompressedSource,
	imageJSON: object,
	partFiles: Map<string, Buffer>,
): void {
	sinon.stub(source as any, 'download').callsFake(async (key: string) => {
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
		.stub(source as any, 'getPartStream')
		.callsFake(async (filename: string) => {
			const buf = partFiles.get(filename);
			if (buf === undefined) {
				throw new Error(`No part data for: ${filename}`);
			}
			return Readable.from([buf]);
		});
}

// ─── unit tests ───────────────────────────────────────────────────────────────

describe('URLCompressedSource', function () {
	this.timeout(10000);

	const PART_DATA = Buffer.alloc(512, 0xab);
	let deflatePartMeta: { buf: Buffer; crc: number; len: number; zLen: number };

	before(async () => {
		deflatePartMeta = await makeDeflatePart(PART_DATA);
	});

	afterEach(() => sinon.restore());

	// ── gzip ──────────────────────────────────────────────────────────────────

	describe('createReadStream() — gzip format', () => {
		it('concatenates multiple deflate parts into a single gzip stream', async () => {
			const PART_DATA2 = Buffer.alloc(512, 0xcd);
			const deflatePart2Meta = await makeDeflatePart(PART_DATA2);

			const source = new URLCompressedSource({
				...BASE_OPTIONS,
				format: 'gzip',
			});
			const imageJSON = {
				'resin.img': {
					parts: [
						{
							filename: 'part1.gz',
							crc: deflatePartMeta.crc,
							len: deflatePartMeta.len,
							zLen: deflatePartMeta.zLen,
						},
						{
							filename: 'part2.gz',
							crc: deflatePart2Meta.crc,
							len: deflatePart2Meta.len,
							zLen: deflatePart2Meta.zLen,
						},
					],
				},
			};
			stubDownload(
				source,
				imageJSON,
				new Map([
					['part1.gz', deflatePartMeta.buf],
					['part2.gz', deflatePart2Meta.buf],
				]),
			);

			await source.open();
			const stream = await source.createReadStream();
			const gz = createGunzip();
			const bufPromise = streamToBuffer(gz);
			await pipeline(stream, gz);
			const decompressed = await bufPromise;

			expect(decompressed).to.deep.equal(
				Buffer.concat([PART_DATA, PART_DATA2]),
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
			const imageJSON = {
				'resin.img': {
					parts: [
						{
							filename: 'part.gz',
							crc: deflatePartMeta.crc,
							len: deflatePartMeta.len,
							zLen: deflatePartMeta.zLen,
						},
					],
				},
			};
			stubDownload(
				source,
				imageJSON,
				new Map([['part.gz', deflatePartMeta.buf]]),
			);

			await source.open();
			const expectedName = (source as any).filename as string;

			const stream = await source.createReadStream();
			const unzipper = unzip.Parse();
			const entryPromises: Array<Promise<{ name: string; data: Buffer }>> = [];
			unzipper.on('entry', (entry: unzip.ZipStreamEntry) => {
				entryPromises.push(
					streamToBuffer(entry).then((data) => ({ name: entry.path, data })),
				);
			});
			await pipeline(stream, unzipper);
			const [result] = await Promise.all(entryPromises);

			expect(result.name).to.equal(expectedName);
			expect(result.data).to.deep.equal(PART_DATA);
			await source.close();
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
	},
	{
		// tests zip64 support with an image part that's >4GB uncompressed
		deviceType: 'jetson-orin-nx-xavier-nx-devkit',
		buildId: '2.113.32',
	},
]) {
	describe(`URLCompressedSource (integration — ${opts.deviceType} ${opts.buildId})`, function () {
		this.timeout(600_000);
		const sourceBaseOptions = {
			urls: buildS3URLConfig(
				BUCKET_BASE_OPTIONS.host,
				BUCKET_BASE_OPTIONS.bucket,
				BUCKET_BASE_OPTIONS.prefix,
				opts.deviceType,
				opts.buildId,
			),
			...opts,
			configuration: {
				applicationId: 12345,
				deviceType: opts.deviceType,
				apiKey: 'dummy',
			}
		};

		it('gzip: decompressed size matches sum of len fields in image.json', async function () {
			const source = new URLCompressedSource({
				...sourceBaseOptions,
				format: 'gzip',
			});
			await source.open();
			const expectedTotal = sumImageJSONLenFields((source as any).imageJSON);
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
			const expectedName = (source as any).filename as string;
			const expectedTotal = sumImageJSONLenFields((source as any).imageJSON);
			const stream = await source.createReadStream();

			const tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'etcher-sdk-tests-'));
			const tmpPath = `${tmpDir}/${expectedName}.zip`;
			try {
				await pipeline(stream, fs.createWriteStream(tmpPath));
				
				// Confirms that the crc is correct
				// Note: I wasn't able to find an npm package that checks with crc verification
				await execFile('unzip', ['-t', tmpPath]);

				const unzipper = unzip.Parse();
				const entryPromises: Array<
					Promise<{ entryName: string; totalBytes: number }>
				> = [];
				unzipper.on('entry', (entry: unzip.ZipStreamEntry) => {
					entryPromises.push(
						countBytes(entry).then((n) => ({
							entryName: entry.path,
							totalBytes: n,
						})),
					);
				});
				await pipeline(fs.createReadStream(tmpPath), unzipper);
				const entryInfo = await Promise.all(entryPromises);

				await source.close();
				expect(entryInfo).to.deep.equal([{ entryName: expectedName, totalBytes: expectedTotal }]);
			} finally {
				await fs.promises.rm(tmpDir, { recursive: true });
			}
		});
	});
}
