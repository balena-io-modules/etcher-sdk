import { crc32_combine_multi } from '@balena/node-crc-utils';
import * as CombinedStream from 'combined-stream';
import { DeflateCRC32Stream } from 'crc32-stream';
import { Readable } from 'node:stream';
// gzip header
const GZIP_HEADER = Buffer.from([
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff,
]);

// DEFLATE ending block
export const DEFLATE_END = Buffer.from([0x03, 0x00]);
const DEFLATE_END_LENGTH = DEFLATE_END.length;

export interface DeflatePartStreamMetadata {
	crc: number;
	len: number;
	zLen: number;
}

// Use the logic briefly described here by the author of zlib library:
// http://stackoverflow.com/questions/14744692/concatenate-multiple-zlib-compressed-data-streams-into-a-single-stream-efficient#comment51865187_14744792
// to generate deflate streams that can be concatenated into a gzip stream
class DeflatePartStream extends DeflateCRC32Stream {
	buf = Buffer.alloc(0);
	push(chunk: any) {
		if (chunk !== null) {
			if (chunk.length >= DEFLATE_END_LENGTH) {
				// got another large enough chunk, previous chunk is safe to send
				super.push(this.buf);
				this.buf = chunk;
			} else {
				this.buf = Buffer.concat([this.buf, chunk]);
			}
			return true;
		} else {
			// got null signalling end of stream
			// inspect last chunk for DEFLATE_END marker and remove it
			if (
				this.buf.length >= DEFLATE_END_LENGTH &&
				this.buf.slice(-DEFLATE_END_LENGTH).equals(DEFLATE_END)
			) {
				this.buf = this.buf.slice(0, -DEFLATE_END_LENGTH);
			}
			super.push(this.buf);
			return super.push(null);
		}
	}
	end() {
		this.flush(() => {
			super.end();
		});
		return this;
	}
	metadata(): DeflatePartStreamMetadata {
		return {
			crc: this.digest().readUInt32BE(0),
			len: this.size(),
			zLen: this.size(true),
		};
	}
}

export const createDeflatePart = () => new DeflatePartStream();

export const getGzipSizeFromParts = function (
	parts: Array<{
		zLen: number;
	}>,
) {
	// calculate compressed size. Add 10 byte header, 2 byte DEFLATE ending block, 8 byte footer
	const zLen = parts.map((p) => p.zLen).reduce((a, b) => a + b) + 20;
	return zLen;
};

export const createGzipFromParts = function (
	parts: Array<{
		crc: number;
		zLen: number;
		len: number;
		stream: Readable | Buffer;
	}>,
) {
	const out = CombinedStream.create();
	// write the header
	out.append(GZIP_HEADER);
	// write all middle parts
	for (const { stream } of parts) {
		out.append(stream);
	}
	// write ending DEFLATE part
	out.append(DEFLATE_END);
	// write CRC
	out.append(crc32_combine_multi(parts).combinedCrc32);
	// write the ISIZE length, modulo 2^32 per RFC 1952 section 2.3.1
	// https://www.rfc-editor.org/info/rfc1952/#page-8:~:text=original%20(uncompressed)%20input-,data%20modulo%202%5E32
	const len = Buffer.alloc(4);
	const isize = parts.map((p) => p.len).reduce((a, b) => a + b) % 0x100000000;
	len.writeUInt32LE(isize, 0);
	out.append(len);
	// calculate compressed size.
	out.zLen = getGzipSizeFromParts(parts);
	// return stream
	return out;
};
