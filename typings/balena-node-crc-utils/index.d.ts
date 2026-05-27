declare module '@balena/node-crc-utils' {
	export function crc32_combine_multi(
		parts: Array<{ crc: number; len: number }>,
	): { combinedCrc32: Buffer; intLength: number };
}
