import { expect } from 'chai';
import { PassThrough, Readable, Writable } from 'stream';
import { finished, pipeline } from 'stream/promises';
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

const MB = 1024 * 1024;

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

// ─── stream helpers ───────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Resolves once the stream is done, with the error it failed with
// (ERR_STREAM_PREMATURE_CLOSE if it was destroyed without one),
// or with null if it ended normally.
const finishedError = (stream: Readable) =>
	finished(stream).then(
		() => null,
		(err: Error) => err,
	);

const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T> => {
	let timeout: NodeJS.Timeout | undefined;
	try {
		return await Promise.race([
			promise,
			new Promise<never>((_resolve, reject) => {
				timeout = setTimeout(() => {
					reject(new Error(`Timed out after ${ms}ms`));
				}, ms);
			}),
		]);
	} finally {
		// Clear the timer, otherwise it keeps the process (and mocha) alive until it fires
		clearTimeout(timeout);
	}
};

// ─── unit tests ───────────────────────────────────────────────────────────────

describe('URLCompressedSource', function () {
	this.timeout(10000);

	const PART_DATA0 = Buffer.alloc(512, 0xab);
	const PART_DATA1 = Buffer.alloc(512, 0xcd);
	const PART_DATA2 = Buffer.alloc(512, 0xef);

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
			[PART_DATA0, PART_DATA1, PART_DATA2].map((data) => makeDeflatePart(data)),
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
					['part-2.deflate', deflateParts[2].buf],
				]),
			);

			await source.open();
			const stream = await source.createReadStream();
			const gz = createGunzip();
			const bufPromise = streamToBuffer(gz);
			await pipeline(stream, gz);
			const decompressed = await bufPromise;

			expect(decompressed).to.deep.equal(
				Buffer.concat([PART_DATA0, PART_DATA1, PART_DATA2]),
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
					['part-2.deflate', deflateParts[2].buf],
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

	// ── part stream cleanup ───────────────────────────────────────────────────

	describe('createReadStream() — zip format, part stream cleanup', () => {
		async function openSourceWithMockedParts() {
			const source = new URLCompressedSource({
				...BASE_OPTIONS,
				format: 'zip',
			});
			stubDownload(
				source,
				getImageJSON(deflateParts),
				new Map(deflateParts.map((p, i) => [`part-${i}.deflate`, p.buf])),
			);
			await source.open();

			const partStreamsByFilename = new Map(
				deflateParts.map((_p, i) => [`part-${i}.deflate`, new PassThrough()]),
			);
			// Replace the getPartStream stub from stubDownload() with one returning the controlled streams
			sinon.restore();
			sinon
				// @ts-expect-error access protected property for test
				.stub(source, 'getPartStream')
				.callsFake(async (filename: string) =>
					partStreamsByFilename.get(filename),
				);
			const partStreams = [...partStreamsByFilename.values()];
			return { source, partStreams };
		}

		it('destroys all part streams when the consumer destroys the stream before reading', async () => {
			const { source, partStreams } = await openSourceWithMockedParts();
			const stream = await source.createReadStream();

			stream.destroy();

			await withTimeout(Promise.all(partStreams.map(finishedError)), 1000);
			for (const partStream of partStreams) {
				expect(partStream.destroyed).to.equal(true);
			}
			await source.close();
		});

		it('destroys all part streams when the consumer destroys the stream while a part is stalled', async () => {
			const { source, partStreams } = await openSourceWithMockedParts();
			const stream = await source.createReadStream();
			stream.resume();

			// part-0 sends some data and then stalls (never ends)
			partStreams[0].write(Buffer.alloc(1024));
			await delay(20);
			stream.destroy();

			await withTimeout(Promise.all(partStreams.map(finishedError)), 1000);
			for (const partStream of partStreams) {
				expect(partStream.destroyed).to.equal(true);
			}
			await source.close();
		});

		it('fails and destroys all part streams when a later part errors while an earlier part is stalled', async () => {
			const { source, partStreams } = await openSourceWithMockedParts();
			const stream = await source.createReadStream();
			const streamClosed = finishedError(stream);
			stream.resume();

			// part-0 sends some data and then stalls (never ends)
			partStreams[0].write(Buffer.alloc(1024));
			await delay(20);
			// part-2 hasn't been reached yet when its connection resets
			partStreams[2].destroy(new Error('ECONNRESET'));

			const err = await withTimeout(streamClosed, 1000);
			expect(err).to.have.property('message', 'ECONNRESET');
			for (const partStream of partStreams) {
				expect(partStream.destroyed).to.equal(true);
			}
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

		afterEach(() => {
			sinon.restore();
		});

		it('gzip: decompressed size matches sum of len fields in image.json', async function () {
			const source = new URLCompressedSource({
				...sourceBaseOptions,
				format: 'gzip',
			});
			await source.open();
			// @ts-expect-error access private property for test
			const expectedTotal = sumImageJSONLenFields(source.imageJSON);
			const metadata = await source.getMetadata();
			expect(metadata).to.include({
				format: 'gzip',
				osVersion: opts.buildId,
				version: opts.buildId,
				supervisorVersion: opts.supervisorVersion,
				arch: opts.arch,
				name: `${opts.deviceType}-${opts.buildId}-${opts.supervisorVersion}.img`,
			});
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

		describe('stream cleanup', function () {
			/**
			 * Opens a zip URLCompressedSource and records the real (axios) part streams
			 * that createReadStream() opens, so that tests can check they get destroyed.
			 * The part streams are kept in the order they were requested, which is the
			 * order they are read in (parts of the configured partition are Buffers,
			 * so they are not included).
			 */
			async function openZipSourceAndTrackPartStreams() {
				const source = new URLCompressedSource({
					...sourceBaseOptions,
					format: 'zip',
				});
				await source.open();

				const partStreamsByFilename = new Map<string, Readable>();
				const requestedFilenames: string[] = [];
				// @ts-expect-error access protected property for test
				const getPartStream = source.getPartStream.bind(source);
				sinon
					// @ts-expect-error access protected property for test
					.stub(source, 'getPartStream')
					.callsFake(async (filename: string) => {
						// The requests run in parallel, so record the order before awaiting
						requestedFilenames.push(filename);
						const stream: Readable = await getPartStream(filename);
						partStreamsByFilename.set(filename, stream);
						return stream;
					});
				const getPartStreams = () =>
					requestedFilenames.map((filename) => {
						const stream = partStreamsByFilename.get(filename);
						expect(stream, `${filename} was not opened`).to.not.be.undefined;
						return stream!;
					});
				return { source, getPartStreams };
			}

			it('zip: destroys all part streams when the stream is destroyed before reading', async () => {
				const { source, getPartStreams } =
					await openZipSourceAndTrackPartStreams();
				const stream = await source.createReadStream();
				const partStreams = getPartStreams();
				expect(partStreams).to.not.be.empty;

				stream.destroy();

				await withTimeout(Promise.all(partStreams.map(finishedError)), 10_000);
				for (const partStream of partStreams) {
					expect(partStream.destroyed).to.equal(true);
				}
				await source.close();
			});

			it('zip: destroys all part streams when the stream is destroyed mid-download', async () => {
				const { source, getPartStreams } =
					await openZipSourceAndTrackPartStreams();
				const stream = await source.createReadStream();
				const partStreams = getPartStreams();
				expect(partStreams).to.not.be.empty;

				// Stop the download after 1MB, by failing the write, which makes
				// pipeline() destroy the source stream, like a consumer would on cancel.
				const stopError = new Error('Stop after 1MB');
				let received = 0;
				const err = await pipeline(
					stream,
					new Writable({
						write(chunk: Buffer, _enc, cb) {
							received += chunk.length;
							cb(received > 1 * MB ? stopError : null);
						},
					}),
				).then(
					() => null,
					(e: Error) => e,
				);
				expect(err).to.equal(stopError);
				expect(stream.destroyed).to.equal(true);

				await withTimeout(Promise.all(partStreams.map(finishedError)), 10_000);
				for (const partStream of partStreams) {
					expect(partStream.destroyed).to.equal(true);
				}
				await source.close();
			});

			it('zip: fails and destroys all part streams when a later part errors mid-download', async function () {
				const { source, getPartStreams } =
					await openZipSourceAndTrackPartStreams();
				const stream = await source.createReadStream();
				const partStreams = getPartStreams();
				if (partStreams.length < 2) {
					// needs a part that hasn't been reached yet
					this.skip();
				}
				const streamClosed = finishedError(stream);

				// The last part is not reached until the very end of the download.
				// Simulate its connection resetting while the first part is still being downloaded.
				const lastPartStream = partStreams[partStreams.length - 1];
				let received = 0;
				stream.on('data', (chunk: Buffer) => {
					received += chunk.length;
					if (received > 1 * MB && !lastPartStream.destroyed) {
						lastPartStream.destroy(new Error('ECONNRESET'));
					}
				});

				const err = await withTimeout(streamClosed, 30_000);
				expect(err).to.have.property('message', 'ECONNRESET');
				for (const partStream of partStreams) {
					expect(partStream.destroyed).to.equal(true);
				}
				await source.close();
			});
		});
	});
}
