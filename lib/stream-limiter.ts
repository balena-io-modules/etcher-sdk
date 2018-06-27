import { Transform } from 'readable-stream';

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
			if (this.stream.close !== undefined) {
				// @ts-ignore
				this.stream.close();
			// @ts-ignore
			} else if (this.stream.destroy !== undefined) {
				// @ts-ignore
				this.stream.destroy();
			}
			this.push(null);
			this.emit('finish');
		}
		callback();
	}
}
