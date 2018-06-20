declare module 'unbzip2-stream' {
	import { Transform } from 'stream';

	function unbzip2Stream(): Transform;
	export = unbzip2Stream;
}
