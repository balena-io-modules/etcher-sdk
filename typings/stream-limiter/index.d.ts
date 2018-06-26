declare module 'stream-limiter' {

	import { Transform } from 'stream';

	class StreamLimiter extends Transform {
		constructor(maxBytes: number);
	}

	export = StreamLimiter;

}
