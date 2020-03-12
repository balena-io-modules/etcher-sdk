declare module '@ronomon/direct-io' {
	const O_EXLOCK: number;

	function getAlignedBuffer(size: number, alignment: number): Buffer;
}
