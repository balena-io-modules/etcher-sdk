import * as tar from "tar-stream";
import { Pack, Headers } from "tar-stream";

/**
 * PromisePacker
 * Promisify tar-stream.pack.entry ( https://www.npmjs.com/package/tar-stream )
 *
 * @param {tar-stream.pack} pack - tar-stream.pack.entry
 * @returns {Function} packer - function to return the promisified packer
 *
 * @param {object} header - tar-stream.pack.entry header
 * @param {string} value - tar-stream.pack.entry value
 * @param {function} cb - optional callback to call after packing the entry
 * @returns {Promise}
 * */
const promisePacker =
	(pack: Pack, injectFolder?: string) => (header: Headers, value: any) =>
		new Promise((resolve, reject) => {
			if (header.name.includes("sha256:")) {
				console.log(`=> FIXME!! pack header.name: ${header.name}`);
			}
			// add the root injectable folder in front of the name when injecting files
			if (injectFolder) header.name = `${injectFolder}/${header.name}`;
			pack.entry(header, value, (error) => {
				if (error) reject(error);
				resolve(true);
			});
		});

/**
 * Streamable tar packer
 * // TODO : add compression to the stream
 * @param {Stream} outputStream
 * @returns Streamable tar packer
 */
const getTarballStream = (outputStream: NodeJS.WritableStream): Pack => {
	// logger.log(`=> prepareTarball outputStream: ${inspect(outputStream,true,5,true)}`)
	const pack = tar.pack();
	pack.pipe(outputStream);
	return pack;
};

export { promisePacker, getTarballStream };
