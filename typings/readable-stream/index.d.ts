declare module 'readable-stream' {
	import { EventEmitter } from 'events';
	import { Readable as NodeJSReadable } from 'stream'

	export class Readable extends NodeJSReadable {
		constructor(options?: any);
		push(chunk: any, encoding?: string): boolean;
	}
}
