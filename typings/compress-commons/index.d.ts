declare module 'compress-commons' {
	import { Transform } from 'stream';

	export class GeneralPurposeBit {
		useDataDescriptor(b: boolean): void;
		usesDataDescriptor(): boolean;
	}

	export class ZipArchiveEntry {
		constructor(name: string);
		setCrc(crc: number): void;
		setSize(size: number): void;
		setCompressedSize(size: number): void;
		getGeneralPurposeBit(): GeneralPurposeBit;
		setTime(date: Date, forceLocalTime?: boolean): void;
		setMethod(method: number): void;
		setVersionNeededToExtract(version: number): void;
		setExtra(extra: Buffer): void;
		_offsets: { file: number; data: number; contents: number };
	}

	export class ZipArchiveOutputStream extends Transform {
		constructor(options?: {
			zlib?: { level?: number };
			forceZip64?: boolean;
			forceLocalTime?: boolean;
		});
		_archive: {
			processing: boolean;
			finish: boolean;
			finished: boolean;
			forceLocalTime: boolean;
		};
		_entry: ZipArchiveEntry | null;
		offset: number;
		finish(): void;
		entry(
			ae: ZipArchiveEntry,
			source: Buffer | import('stream').Readable,
			callback: (err: Error | null) => void,
		): this;
		protected _normalizeEntry(ae: ZipArchiveEntry): void;
		protected _appendBuffer(
			ae: ZipArchiveEntry,
			source: Buffer,
			callback: (err: Error | null) => void,
		): void;
		protected _appendStream(
			ae: ZipArchiveEntry,
			source: import('stream').Readable,
			callback: (err: Error | null) => void,
		): void;
		_writeLocalFileHeader(ae: ZipArchiveEntry): void;
		_afterAppend(ae: ZipArchiveEntry): void;
	}
}
