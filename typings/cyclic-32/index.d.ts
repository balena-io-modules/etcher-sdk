declare module 'cyclic-32' {
	import { Hash } from 'crypto';

	export function createHash(): Hash;
}
