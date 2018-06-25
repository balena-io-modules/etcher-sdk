declare module 'node-stream-zip' {
	
	import { EventEmitter } from 'events';

	namespace StreamZip {
		export interface ZipEntry {
			isFile: boolean;
			compressedSize: number;
			size: number;
			name: string;
		}
	}

	class StreamZip extends EventEmitter {
		constructor(
			config: {
				file: string,
				storeEntries?: boolean,
				chunkSize?: number,
				skipEntryNameValidation?: boolean,
			}
		);

		static setFs(fs: any): void;

		entries(): { [ name: string ]: StreamZip.ZipEntry };

		stream(path: string, callback: (error: Error | null, stream: NodeJS.ReadableStream) => void): void;
	}

	export = StreamZip;

}
