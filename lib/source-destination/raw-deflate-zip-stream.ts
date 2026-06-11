import { crc32_combine_multi } from '@balena/node-crc-utils';
import * as CombinedStream from 'combined-stream';
import { ZipArchiveEntry, ZipArchiveOutputStream } from 'compress-commons';
import { PassThrough, Transform, promises as streamPromises } from 'stream';

// DEFLATE ending block
const DEFLATE_END = Buffer.from([0x03, 0x00]);

// Standard ZIP format constants
const METHOD_DEFLATED = 8;

export interface RawDeflatePart {
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
	override _smartStream(
		ae: ZipArchiveEntry,
		callback: (error: Error | null, ae?: ZipArchiveEntry) => void,
	): Transform {
		if (!(ae instanceof RawDeflateEntry)) {
			return super._smartStream(ae, callback);
		}
		// Technically a redundant check, since it's the default,
		// but better make sure everything is set up as expected.
		if (ae.getMethod() !== METHOD_DEFLATED) {
			const err = new Error('Entry must use the DEFLATE method');
			callback(err);
			throw err;
		}

		// Mirrors the logic of ZipArchiveOutputStream._smartStream, but uses a passthrough
		// since the entry is already deflated format, and relies on the pre-set crc & sizes RawDeflateEntry.
		// See: https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/zip/zip-archive-output-stream.js#L165
		const process = new PassThrough() satisfies Transform;

		void (async () => {
			let error: Error | null = null;
			try {
				await streamPromises.pipeline(process, this, { end: false });
			} catch (err: any) {
				error = err;
			} finally {
				// crc, size & uncompressedSize are already set by the RawDeflateEntry constructor
				// so we don't need to set them here like ZipArchiveOutputStream._smartStream does.

				// ZipArchiveOutputStream's _smartStream always calls _afterAppend so that the entry is properly cleaned up.
				// See: https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/zip/zip-archive-output-stream.js#L175
				this._afterAppend(ae);
				callback(error, ae);
			}
		})();

		return process;
	}
}

class RawDeflateEntry extends ZipArchiveEntry {
	constructor({
		name,
		crc,
		size,
		compressedSize,
	}: {
		name: string;
		crc: number;
		size: number;
		compressedSize: number;
	}) {
		super(name);
		// Requires & sets the crc & sizes upfront, so that when ZipArchiveOutputStream._writeLocalFileHeader is called,
		// isZip64() returns the correct result and the header is written with the right format (with or without ZIP64 extra).
		// See: https://github.com/archiverjs/node-compress-commons/blob/6.0.2/lib/archivers/zip/zip-archive-output-stream.js#L369
		this.setCrc(crc);
		this.setSize(size);
		this.setCompressedSize(compressedSize);
	}
}

function getCombinedCrcOfPreDeflatedParts(
	parts: Array<{ crc: number; len: number }>,
) {
	if (parts.length === 1) {
		return parts[0].crc;
	}
	const crc = crc32_combine_multi(parts).combinedCrc32.readUInt32LE();
	return crc;
}

async function addRawDeflatePartEntry(
	archive: RawDeflateZipStream,
	{ filename, parts }: RawDeflatePart,
) {
	const entry = new RawDeflateEntry({
		name: filename,
		crc: getCombinedCrcOfPreDeflatedParts(parts),
		size: parts.reduce((sum, p) => sum + p.len, 0),
		compressedSize:
			parts.reduce((sum, p) => sum + p.zLen, 0) + DEFLATE_END.length,
	});

	// Set the entry permissions to 644, just like zip-part-stream was using 0x81a4 (which equals 0o100644)
	// See: https://github.com/balena-io-modules/zip-part-stream/blob/v2.0.1/index.coffee#L16
	// using `setUnixMode()` in the same way zip-stream's entry() sets the permissions
	// See: https://github.com/archiverjs/node-zip-stream/blob/6.0.1/index.js#L157
	// which is also the default that node-archiver uses
	// See: https://github.com/archiverjs/node-archiver/blob/7.0.1/lib/core.js#L339
	entry.setUnixMode(0o644); // rw-r--r--

	const source = CombinedStream.create();
	for (const { stream } of parts) {
		source.append(stream);
	}
	source.append(DEFLATE_END);
	await new Promise<void>((resolve, reject) => {
		archive.entry(entry, source, (err) => {
			if (err != null) {
				if (!source.destroyed) {
					source.destroy();
				}
				reject(err);
				return;
			}
			resolve();
		});
	});
}

export function createZipStreamFromParts(partsByImage: RawDeflatePart[]) {
	const archive = new RawDeflateZipStream();
	void (async () => {
		try {
			for (const part of partsByImage) {
				await addRawDeflatePartEntry(archive, part);
			}
			archive.finish();
		} catch (error: any) {
			// If the error was emitted by the archive stream,
			// we then don't need to emit back to the stream again.
			if (!archive.destroyed) {
				archive.destroy(error);
			}
		}
	})();
	return archive;
}

// ZIP specification reference: APPNOTE.TXT by PKWare
// https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
// Check §4.3.6 for a file format overview
export function getZipSizeFromParts(partsByImage: RawDeflatePart[]): number {
	const ZIP64_MAGIC = 0xffffffff;
	const ZIP64_MAGIC_SHORT = 0xffff;

	// APPNOTE.TXT §4.3.7 - Local file header
	//   signature(4)+version(2)+gpb(2)+method(2)+datetime(4)+
	//   crc(4)+csize(4)+size(4)+nameLen(2)+extraLen(2) = 30 bytes fixed
	const LFH_BASE = 30;

	// APPNOTE.TXT §4.3.9 - Data descriptor & $4.3.9.3 for SIG_DD
	// Written by _afterAppend for every DEFLATED entry
	//   non-zip64: signature(4) + crc(4) + compressedSize(4) + size(4) = 16 bytes
	//   zip64:     signature(4) + crc(4) + compressedSize(8) + size(8) = 24 bytes
	const DD_SIZE = 16;
	const ZIP64_DD_SIZE = 24;

	// APPNOTE.TXT §4.3.12 - Central directory structure (46 bytes fixed)
	const CDH_BASE = 46;
	// APPNOTE.TXT §4.5.3 - Zip64 Extended Information Extra Field
	// ! ZipArchiveOutputStream._writeCentralFileHeader does not set the Disk Start Number because it is always 0 !
	//   tag(2) + extraDataSize(2) + origSize(8) + compSize(8) + fileOffset(8) = 28 bytes
	const ZIP64_CDH_EXTRA_SIZE = 28;

	// APPNOTE.TXT §4.3.16 - End of central directory record
	const EOCD_SIZE = 22;
	// APPNOTE.TXT §4.3.14 - ZIP64 end of central directory record (56 bytes)
	//               §4.3.15 - ZIP64 end of central directory locator (20 bytes)
	const ZIP64_EOCD_SIZE = 76;

	let ongoingLocalFileEntryOffset = 0;
	let centralDirectoryTotalSize = 0;
	for (const { filename, parts } of partsByImage) {
		const size = parts.reduce((sum, p) => sum + p.len, 0);
		const compressedSize =
			parts.reduce((sum, p) => sum + p.zLen, 0) + DEFLATE_END.length;
		const fileOffset = ongoingLocalFileEntryOffset;
		// APPNOTE.TXT §4.5.3: ZIP64 format is required when either size exceeds 0xFFFFFFFF
		const isZip64 = compressedSize > ZIP64_MAGIC || size > ZIP64_MAGIC;

		const ddSize = isZip64 ? ZIP64_DD_SIZE : DD_SIZE;
		// Get the correct byte size, even if we start using UTF8 characters.
		const filenameByteLength = Buffer.byteLength(filename);
		ongoingLocalFileEntryOffset +=
			LFH_BASE + filenameByteLength + compressedSize + ddSize;

		// APPNOTE.TXT §4.5.3: ZIP64 extra field is written in CDH when sizes or offset exceed 0xFFFFFFFF
		const needsCDZip64Extra = isZip64 || fileOffset > ZIP64_MAGIC;
		centralDirectoryTotalSize +=
			CDH_BASE +
			filenameByteLength +
			(needsCDZip64Extra ? ZIP64_CDH_EXTRA_SIZE : 0);
	}

	const needsZip64Eocd =
		ongoingLocalFileEntryOffset > ZIP64_MAGIC ||
		centralDirectoryTotalSize > ZIP64_MAGIC ||
		// entry count exceeds 2^16-1 as per ZipArchiveOutputStream.isZip64()
		partsByImage.length > ZIP64_MAGIC_SHORT;
	return (
		ongoingLocalFileEntryOffset +
		centralDirectoryTotalSize +
		EOCD_SIZE +
		(needsZip64Eocd ? ZIP64_EOCD_SIZE : 0)
	);
}
