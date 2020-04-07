declare module '@ronomon/direct-io' {
	const O_EXLOCK: number;

	function getAlignedBuffer(size: number, alignment: number): Buffer;
	function setF_NOCACHE(
		fd: number,
		value: 0 | 1,
		callback: (error?: Error) => void,
	): void;
}
