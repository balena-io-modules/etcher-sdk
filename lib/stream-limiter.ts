import { versions } from 'process';
import { Transform } from 'readable-stream';
import zlib = require('zlib');

export class StreamLimiter extends Transform {
	constructor(private stream: NodeJS.ReadableStream, private maxBytes: number) {
		super();
		this.stream.on('error', this.emit.bind(this, 'error'));
		this.stream.pipe(this);
	}

	_transform(buffer: Buffer, encoding: string, callback: (error?: Error | null, data?: Buffer) => void) {
		let length = Math.min(buffer.length, this.maxBytes);
		if (length > 0) {
			this.push(buffer.slice(0, length));
		}
		this.maxBytes -= length;
		if (this.maxBytes === 0) {
			// @ts-ignore
			this.stream.unpipe(this);
			this.push(null);
			this.emit('finish');
			// TODO: maybe we don't need to try to close / destroy the stream ?
			// We could let it be destroyed later when there is no more references to it.
			// @ts-ignore
			if (this.stream.close !== undefined) {
				// avoid https://github.com/nodejs/node/issues/15625
				// @ts-ignore
				if (!(this.stream instanceof zlib.Gunzip)) {
					// @ts-ignore
					this.stream.close();
				}
			// @ts-ignore
			} else if (this.stream.destroy !== undefined) {
				// avoid `stream.push() after EOF`
				if (this.stream.constructor.name !== 'JSLzmaStream') {
					// @ts-ignore
					this.stream.destroy();
				}
			}
		}
		callback();
	}
}
