declare module 'mountutils' {
	export function unmountDisk(
		device: string,
		callback: (error: any, result?: any) => void,
	): void;
}
