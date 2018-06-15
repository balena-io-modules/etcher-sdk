declare module 'readable-stream' {
	import { EventEmitter } from 'events';
	import { Readable as NodeJSReadable, Writable as NodeJSWritable } from 'stream'

	export class Readable extends NodeJSReadable {
	}

	export class Writable extends NodeJSWritable {
		// destroy does not exist in node 6 Writable
		destroy(error?: Error): this;
	}
}
