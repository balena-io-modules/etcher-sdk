import axios from 'axios';
import { expect } from 'chai';
import { getEventListeners, once } from 'events';
import * as http from 'http';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

import { BalenaS3CompressedSource } from '../lib/source-destination/balena-s3-compressed-source';
import { URLCompressedSource } from '../lib/source-destination/url-compressed-source';
import { makeDeflatePart } from './utils';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const errorOf = (promise: Promise<unknown>) =>
	promise.then(
		() => {
			throw new Error('Expected the promise to reject');
		},
		(err: Error) => err,
	);

const BUILD_ID = '2.9.6+rev1.prod';
const FILES_PREFIX = `/bucket/images/raspberrypi3/${encodeURIComponent(
	BUILD_ID,
)}/`;

type Behaviour = 'no-headers' | 'stall-body';

/**
 * Serves an image with the same file layout for both sources,
 * allowing individual files to never respond or to stall after the headers.
 */
describe('Compressed sources abortSignal option (real http server)', function () {
	this.timeout(10000);

	let server: http.Server;
	let baseUrl: string;
	let files: Map<string, Buffer>;
	let mockBehaviourByFile: Map<string, Behaviour>;
	let requests: Array<{ file: string; open: boolean }>;

	before(async () => {
		const parts = await Promise.all(
			[Buffer.alloc(512, 0xab), Buffer.alloc(512, 0xcd)].map((data) =>
				makeDeflatePart(data),
			),
		);
		files = new Map<string, Buffer>([
			['VERSION', Buffer.from('2.0.0')],
			['VERSION_HOSTOS', Buffer.from('2.9.6')],
			[
				'image.json',
				Buffer.from(
					JSON.stringify({
						'resin.img': {
							parts: parts.map((p, i) => ({
								filename: `part-${i}.deflate`,
								crc: p.crc,
								len: p.len,
								zLen: p.zLen,
								// part-0 holds the partition that configure() modifies
								partitionIndex: `(${i + 1})`,
							})),
						},
					}),
				),
			],
			[
				'device-type.json',
				Buffer.from(
					JSON.stringify({
						slug: 'raspberrypi3',
						arch: 'armv7hf',
						yocto: {},
						configuration: { config: { partition: 1 } },
					}),
				),
			],
			...parts.map(
				(p, i) => [`compressed/part-${i}.deflate`, p.buf] as const,
			),
		]);

		server = http.createServer((req, res) => {
			const file = req.url!.slice(FILES_PREFIX.length);
			const request = { file, open: true };
			requests.push(request);
			res.on('close', () => {
				request.open = false;
			});
			const body = files.get(file);
			if (!req.url!.startsWith(FILES_PREFIX) || body == null) {
				res.writeHead(404).end();
				return;
			}
			switch (mockBehaviourByFile.get(file)) {
				case 'no-headers':
					return;
				case 'stall-body':
					res.writeHead(200);
					res.write(body.subarray(0, 4));
					return;
				default:
					res.writeHead(200, { 'last-modified': new Date().toUTCString() });
					res.end(body);
			}
		});
		server.listen(0, '127.0.0.1');
		await once(server, 'listening');
		const address = server.address();
		if (address == null || typeof address !== 'object') {
			throw new Error();
		}
		baseUrl = `http://127.0.0.1:${address.port}`;
	});

	beforeEach(() => {
		mockBehaviourByFile = new Map();
		requests = [];
	});

	after(async () => {
		server.closeAllConnections();
		server.close();
		await once(server, 'close');
	});

	const openRequests = async () => {
		// let the server notice the closed connections
		await delay(50);
		return requests.filter((r) => r.open).map((r) => r.file);
	};

	const sources = {
		URLCompressedSource: (
			abortSignal: AbortSignal,
			configuration?: Record<string, any>,
		) =>
			new URLCompressedSource({
				urls: {
					VERSION: `${baseUrl}${FILES_PREFIX}VERSION`,
					VERSION_HOSTOS: `${baseUrl}${FILES_PREFIX}VERSION_HOSTOS`,
					'device-type.json': `${baseUrl}${FILES_PREFIX}device-type.json`,
					'image.json': `${baseUrl}${FILES_PREFIX}image.json`,
					parts: {
						'part-0.deflate': `${baseUrl}${FILES_PREFIX}compressed/part-0.deflate`,
						'part-1.deflate': `${baseUrl}${FILES_PREFIX}compressed/part-1.deflate`,
					},
				},
				format: 'gzip',
				deviceType: 'raspberrypi3',
				buildId: BUILD_ID,
				configuration,
				abortSignal,
			}),
		BalenaS3CompressedSource: (
			abortSignal: AbortSignal,
			configuration?: Record<string, any>,
		) =>
			new BalenaS3CompressedSource({
				host: baseUrl,
				bucket: 'bucket',
				format: 'gzip',
				deviceType: 'raspberrypi3',
				buildId: BUILD_ID,
				configuration,
				abortSignal,
			}),
	};

	/** Aborts and expects the pending operation to promptly reject with axios' CanceledError */
	const abortAndExpectCanceled = async (
		controller: AbortController,
		pending: Promise<unknown>,
	) => {
		const start = Date.now();
		controller.abort();
		const error = await errorOf(pending);
		expect(axios.isCancel(error), `Expected a CanceledError, got: ${error}`).to
			.be.true;
		// interrupted, rather than waiting for some timeout
		expect(Date.now() - start).to.be.lessThan(1000);
	};

	for (const [name, createSource] of Object.entries(sources)) {
		describe(name, () => {
			it('serves the image and leaves no listeners on the signal when not aborted', async () => {
				const controller = new AbortController();
				const source = createSource(controller.signal);
				await source.open();
				const stream = await source.createReadStream();
				stream.resume();
				await finished(stream);
				await source.close();
				expect(await openRequests()).to.deep.equal([]);
				expect(getEventListeners(controller.signal, 'abort')).to.have.length(0);
			});

			for (const { titlePart, file, configuration } of [
				{
					titlePart: 'a metadata request is pending',
					file: 'device-type.json',
				},
				{
					titlePart: 'configure() is downloading the partition to modify',
					// part-0 holds the partition that configure() modifies.
					// Its contents never get parsed, since the download is aborted first.
					file: 'compressed/part-0.deflate',
					configuration: { applicationId: 1 },
				},
			]) {
				for (const behaviour of ['no-headers', 'stall-body'] as const) {
					it(`aborting interrupts open() while ${titlePart} (${behaviour})`, async () => {
						mockBehaviourByFile.set(file, behaviour);
						const controller = new AbortController();
						const source = createSource(controller.signal, configuration);
						const opening = source.open();
						await delay(100);
						expect(await openRequests()).to.include(file);

						await abortAndExpectCanceled(controller, opening);
						expect(await openRequests()).to.deep.equal([]);
					});
				}
			}

			it('aborting interrupts createReadStream() when a part request is waiting for headers', async () => {
				mockBehaviourByFile.set('compressed/part-1.deflate', 'no-headers');
				const controller = new AbortController();
				const source = createSource(controller.signal);
				await source.open();
				const creating = source.createReadStream();
				await delay(100);
				expect(await openRequests()).to.include('compressed/part-1.deflate');

				await abortAndExpectCanceled(controller, creating);
				expect(await openRequests()).to.deep.equal([]);
			});

			it('aborting errors the stream of createReadStream() when a part body stalls', async () => {
				mockBehaviourByFile.set('compressed/part-1.deflate', 'stall-body');
				const controller = new AbortController();
				const source = createSource(controller.signal);
				await source.open();
				const stream: Readable = await source.createReadStream();
				stream.resume();
				const streamDone = finished(stream).then(
					() => null,
					(err: Error) => err,
				);
				await delay(100);
				expect(await openRequests()).to.include('compressed/part-1.deflate');

				controller.abort();
				// The gzip stream is a legacy combined-stream (no `destroyed` property), so just check that it errored
				expect(await streamDone).to.be.instanceOf(Error);
				expect(await openRequests()).to.deep.equal([]);
			});

			it('aborting after open() makes createReadStream() fail without making any requests, and the source can still be closed', async () => {
				// eg: the client disconnected after the image was prepared, but before it got streamed
				const controller = new AbortController();
				const source = createSource(controller.signal);
				await source.open();
				requests = [];

				await abortAndExpectCanceled(controller, source.createReadStream());
				await delay(50);
				expect(requests).to.deep.equal([]);
				await source.close();
			});

			it('does not make any requests when the signal is already aborted', async () => {
				const controller = new AbortController();
				controller.abort();
				const source = createSource(controller.signal);
				expect(axios.isCancel(await errorOf(source.open()))).to.be.true;
				await delay(50);
				expect(requests).to.deep.equal([]);
			});
		});
	}
});
