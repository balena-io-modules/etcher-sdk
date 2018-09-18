declare module 'resin-image-fs' {
	import * as Bluebird from 'bluebird';
	import { Disk } from 'file-disk';

	function interact(
		disk: Disk,
		partition: number,
	): Bluebird<Bluebird.Disposer<AsyncFsLike>>;

	interface AsyncFsLike {
		trimAsync?(): Bluebird<void>;
		readFileAsync(path: string): Bluebird<Buffer>;
		writeFileAsync(path: string, data: string): Bluebird<void>;
		createReadStream(path: string): NodeJS.ReadableStream;
		createWriteStream(path: string): NodeJS.WritableStream;
	}
}
