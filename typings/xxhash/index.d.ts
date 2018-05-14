declare module 'xxhash' {
	import { Transform } from 'stream';

	export class Stream extends Transform {
		constructor(seed: number, bits?: number, enc?: string);
	}
}
