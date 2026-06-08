import { execFile as execFileCb } from 'child_process';
import { promisify } from 'util';
const execFile = promisify(execFileCb);
import { expect } from 'chai';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as unzip from 'unzip-stream';
import { createDeflatePart } from 'gzip-stream';
import { Readable, Writable } from 'stream';
import { pipeline } from 'stream/promises';
import { Metadata } from '../lib/source-destination';

export function assertExists(
	v: unknown,
	message?: string,
): asserts v is NonNullable<typeof v> {
	expect(v, message).to.exist;
}

/** Compress data with DeflatePartStream and return the buffer + metadata. */
export async function makeDeflatePart(
	data: Buffer,
): Promise<{ buf: Buffer; crc: number; len: number; zLen: number }> {
	const deflate = createDeflatePart();
	const chunks: Buffer[] = [];
	await pipeline(
		Readable.from([data]),
		deflate,
		new Writable({
			write(chunk: Buffer, _enc, cb) {
				chunks.push(chunk);
				cb();
			},
		}),
	);
	return { buf: Buffer.concat(chunks), ...deflate.metadata() };
}

export function sumImageJSONLenFields(
	imageJSON: Record<string, { parts: Array<{ len: number }> }>,
): number {
	return Object.values(imageJSON)
		.flatMap((img) => img.parts)
		.reduce((sum, part) => sum + part.len, 0);
}

export async function countBytes(
	readable: NodeJS.ReadableStream,
): Promise<number> {
	let n = 0;
	await pipeline(
		readable,
		new Writable({
			write(chunk: Buffer, _enc, cb) {
				n += chunk.length;
				cb();
			},
		}),
	);
	return n;
}

export async function testZipArchive(
	stream: Readable,
	metadata: Metadata,
	uncompressedSize: number,
) {
	assertExists(metadata.name);
	const tmpDir = await fs.promises.mkdtemp(
		path.join(os.tmpdir(), 'etcher-sdk-tests-'),
	);
	const tmpPath = path.join(tmpDir, `${metadata.name}.zip`);
	try {
		await pipeline(stream, fs.createWriteStream(tmpPath));

		const unzipper = unzip.Parse();
		const entryPromises: Array<
			Promise<{ entryName: string; totalBytes: number }>
		> = [];
		unzipper
			.on('entry', (entry: unzip.ZipStreamEntry) => {
				entryPromises.push(
					countBytes(entry).then((n) => ({
						entryName: entry.path,
						totalBytes: n,
					})),
				);
			})
			.on('error', (err) => {
				entryPromises.push(Promise.reject(err));
			});
		await pipeline(fs.createReadStream(tmpPath), unzipper);
		const entryInfo = await Promise.all(entryPromises);

		expect(entryInfo).to.deep.equal([
			{ entryName: metadata.name, totalBytes: uncompressedSize },
		]);

		const archiveStats = await fs.promises.stat(tmpPath);
		expect(metadata).to.include({
			size: archiveStats.size,
		});

		// Also confirms that the crc is correct.
		// Note: Wasn't able to find an npm package that does crc verification of zip files.
		await execFile('unzip', ['-o', tmpPath, '-d', tmpDir]);
		const imgStats = await fs.promises.stat(path.join(tmpDir, metadata.name));
		expect(imgStats).to.include({
			mode: 0o100644, // S_IFREG (regular file: 0o100), rw-r--r--
		});
		const imgPermissions = (imgStats.mode & 0o777).toString(8);
		expect(imgPermissions).to.equal('644');
	} finally {
		await fs.promises.rm(tmpDir, { recursive: true });
	}
}
