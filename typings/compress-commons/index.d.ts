declare module 'compress-commons' {
	import { Transform } from 'stream';

	export class ZipArchiveEntry {
		constructor(name: string);
		setCrc(crc: number): void;
		setSize(size: number): void;
		setCompressedSize(size: number): void;
		getMethod(): number;
	}

	export class ZipArchiveOutputStream extends Transform {
		constructor(options?: {
			zlib?: { level?: number };
			forceZip64?: boolean;
			forceLocalTime?: boolean;
		});
		finish(): void;
		entry(
			ae: ZipArchiveEntry,
			source: Buffer | import('stream').Readable,
			callback: (err: Error | null) => void,
		): this;
		_afterAppend(ae: ZipArchiveEntry): void;
		_smartStream(
			ae: ZipArchiveEntry,
			callback: (error: Error | null, ae?: ZipArchiveEntry) => void,
		): Transform;
	}
}
