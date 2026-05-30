import { crc32_combine_multi } from '@balena/node-crc-utils';
import * as CombinedStream from 'combined-stream';
import { ZipArchiveEntry, ZipArchiveOutputStream } from 'compress-commons';

function getCombinedCrcOfPreDeflatedParts(
	parts: Array<{ crc: number; len: number }>,
) {
	if (parts.length === 1) {
		return parts[0].crc;
	}
	// 🤖-explanation: The CRC32 shift matrix M has period T = 2^32-1 (primitive polynomial),
	// so M^n = M^(n mod T). Reduce each part's len mod T before passing to
	// crc32_combine_multi, which accepts len as a 32-bit integer.
	// Special case: if n mod T = 0 (and n > 0), use T instead of 0 to avoid
	// the len=0 early-return in crc32_combine that would ignore crc2.
	const CRC32_PERIOD_NUMBER = 0xffffffff; // T = 2^32-1
	const crc = crc32_combine_multi(
		parts.map((p) => {
			if (p.len <= CRC32_PERIOD_NUMBER) {
				return p;
			}
			let len = p.len % CRC32_PERIOD_NUMBER;
			if (len === 0) {
				len = CRC32_PERIOD_NUMBER;
			}
			return { crc: p.crc, len };
		}),
	).combinedCrc32.readUInt32LE();
	return crc;
}

// DEFLATE ending block
const DEFLATE_END = Buffer.from([0x03, 0x00]);

interface RawDeflatePart {
	filename: string;
	parts: Array<{
		crc: number;
		zLen: number;
		stream: NodeJS.ReadableStream | Buffer;
		len: number;
	}>;
}

/**
 * A ZipArchiveOutputStream sub-class that supports writing
 * pre-deflated entries without decompressing and recompressing them.
 */
class RawDeflateZipStream extends ZipArchiveOutputStream {
	async entryRawDeflatePart({ filename, parts }: RawDeflatePart) {
		// Mirroring the ZipArchiveOutputStream.entry() checks
		// https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/archive-output-stream.js#L58
		if (this._archive.finish || this._archive.finished) {
			throw new Error('unacceptable entry after finish');
		}
		if (this._archive.processing) {
			throw new Error('already processing an entry');
		}
		this._archive.processing = true;

		// Named the var `ae` to mirror ZipArchiveOutputStream's naming.
		const ae = new ZipArchiveEntry(filename);
		// Set sizes before _normalizeEntry/_writeLocalFileHeader so that ae.isZip64()
		// is correct when _writeLocalFileHeader runs: for zip64 entries it sets
		// versionNeeded=45 and the data descriptor uses 8-byte sizes (ZIP64-compliant).
		ae.setCrc(getCombinedCrcOfPreDeflatedParts(parts));
		ae.setSize(parts.reduce((sum, p) => sum + p.len, 0));
		ae.setCompressedSize(
			parts.reduce((sum, p) => sum + p.zLen, 0) + DEFLATE_END.length,
		);
		this._normalizeEntry(ae);
		this._entry = ae;

		// Mirroring the ZipArchiveOutputStream._appendStream()
		// https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/zip/zip-archive-output-stream.js#L90
		this._writeLocalFileHeader(ae);

		// Mirroring the ZipArchiveOutputStream._smartStream() but replacing
		// DeflateCRC32Stream/CRC32Stream with our pre-deflated combined stream.
		// https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/zip/zip-archive-output-stream.js#L165
		const process = CombinedStream.create();
		for (const { stream } of parts) {
			process.append(stream);
		}
		process.append(DEFLATE_END);

		await new Promise<void>((resolve, reject) => {
			let streamError: Error | null = null;
			process.once('end', () => {
				this._afterAppend(ae);
				if (streamError != null) {
					reject(streamError);
					return;
				}
				resolve();
			});
			process.once('error', (err: Error) => {
				streamError = err;
			});

			process.pipe(this, { end: false });
		});

		return this;
	}
}

export function createZipStreamFromParts(partsByImage: RawDeflatePart[]) {
	const archive = new RawDeflateZipStream();
	void (async () => {
		try {
			for (const part of partsByImage) {
				await archive.entryRawDeflatePart(part);
			}
			archive.finish();
		} catch (error: any) {
			archive.emit('error', error);
		}
	})();
	return archive;
}

export function getZipSizeFromParts(partsByImage: RawDeflatePart[]): number {
	const ZIP64_MAGIC = 0xffffffff;
	const ZIP64_MAGIC_SHORT = 0xffff;
	// Local file header: signature(4)+version(2)+gpb(2)+method(2)+datetime(4)+
	//                    crc(4)+csize(4)+size(4)+nameLen(2)+extraLen(2) = 30 bytes fixed
	const LFH_BASE = 30;
	// Data descriptor written by _afterAppend for every DEFLATED entry
	// (useDataDescriptor is always true after _normalizeEntry):
	//   non-zip64: signature(4) + crc(4) + compressedSize(4) + size(4) = 16 bytes
	//   zip64:     signature(4) + crc(4) + compressedSize(8) + size(8) = 24 bytes
	const DD_SIZE = 16;
	const ZIP64_DD_SIZE = 24;
	// Central directory header base (46 bytes) + optional ZIP64 extra field:
	//   tag(2) + extraDataSize(2) + origSize(8) + compSize(8) + fileOffset(8) = 28 bytes
	const CDH_BASE = 46;
	const ZIP64_CDH_EXTRA_SIZE = 28;
	const EOCD_SIZE = 22;
	// ZIP64 end-of-central-directory record (56) + locator (20)
	const ZIP64_EOCD_SIZE = 76;

	const entryMeta: Array<{
		filename: string;
		compressedSize: number;
		isZip64: boolean;
		fileOffset: number;
	}> = [];

	let ongoingLocalOffset = 0;
	for (const { filename, parts } of partsByImage) {
		const compressedSize =
			parts.reduce((sum, p) => sum + p.zLen, 0) + DEFLATE_END.length;
		const size = parts.reduce((sum, p) => sum + p.len, 0);
		const isZip64 = compressedSize > ZIP64_MAGIC || size > ZIP64_MAGIC;

		entryMeta.push({
			filename,
			compressedSize,
			isZip64,
			fileOffset: ongoingLocalOffset,
		});

		const ddSize = isZip64 ? ZIP64_DD_SIZE : DD_SIZE;
		ongoingLocalOffset += LFH_BASE + filename.length + compressedSize + ddSize;
	}

	const centralOffset = ongoingLocalOffset;
	let centralLength = 0;
	for (const { filename, isZip64, fileOffset } of entryMeta) {
		const needsZip64Extra = isZip64 || fileOffset > ZIP64_MAGIC;
		centralLength +=
			CDH_BASE + filename.length + (needsZip64Extra ? ZIP64_CDH_EXTRA_SIZE : 0);
	}

	// ZIP64 EOCD is emitted when the central directory fields overflow 32-bit, or when
	// there are more than 65535 entries (mirrors compress-commons isZip64() condition).
	const needsZip64Eocd =
		centralOffset > ZIP64_MAGIC ||
		centralLength > ZIP64_MAGIC ||
		partsByImage.length > ZIP64_MAGIC_SHORT;
	return (
		centralOffset +
		centralLength +
		EOCD_SIZE +
		(needsZip64Eocd ? ZIP64_EOCD_SIZE : 0)
	);
}
