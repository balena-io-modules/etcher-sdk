declare module 'unzip-stream' {
	import { PassThrough, Transform } from 'stream';

	class ZipStreamEntry extends PassThrough {
		public type: string;
		public path: string;
		public size: number;
		public compressedSize: number;
		public autodrain(): void;
	}

	function Parse(): Transform;
}
