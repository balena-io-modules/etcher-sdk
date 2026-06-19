import 'crc32-stream';

declare module 'crc32-stream' {
	interface DeflateCRC32Stream {
		flush(kind?: number, callback?: () => void): void;
		flush(callback?: () => void): void;
	}
}
