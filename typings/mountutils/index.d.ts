declare module 'mountutils' {
	export function unmountDisk(device: string, callback: (error: Error) => void): void;
}
