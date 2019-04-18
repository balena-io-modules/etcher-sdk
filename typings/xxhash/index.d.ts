declare module 'xxhash' {
	import { Hash } from 'crypto';
	import { Transform } from 'stream';

	class XXHash {
		constructor(seed: number);
		public update(buffer: Buffer): void;
		public digest(encoding: string): string;
	}

	namespace XXHash {
		export class Stream extends Transform {
			constructor(seed: number, bits?: number, enc?: string);
		}

		export class XXHash64 {
			constructor(seed: number);
			public update(buffer: Buffer): void;
			public digest(encoding: string): string;
		}
	}

	export = XXHash;
}
