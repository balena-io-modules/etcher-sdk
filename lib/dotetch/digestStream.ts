/**
 * minimal typescript reimplementation of https://github.com/jeffbski/digest-stream/blob/master/lib/digest-stream.js
 *
 * This will let a stream pass-thru then returns a sha256 hash + size of the content.
 *
 */
import { Transform } from 'stream';
import { createHash } from 'crypto';

const digestStream = (
	exfiltrate: (arg0: string, arg1: number) => void,
): Transform => {
	const digester = createHash('sha256');
	let length = 0;

	const hashThrough = new Transform({
		transform(chunk: Buffer, _, callback) {
			digester.update(chunk);
			length += chunk.length;
			this.push(chunk);
			callback();
		},
	});

	hashThrough.on('end', () => {
		exfiltrate(digester.digest('hex'), length);
	});

	return hashThrough;
};

export { digestStream };
