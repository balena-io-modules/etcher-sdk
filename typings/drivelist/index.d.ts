declare module 'drivelist' {
	export interface Drive {
		description: string;
		icon: string; // TODO: this is only monkey patched by blockdevice.ts
		isSystem: boolean;
		busType: string;
		error: string | null;
		displayName: string;
		device: string;
		mountpoints: { path: string }[];
		size: number;
		raw: string;
		devicePath: string;
		isReadOnly: boolean;
		blockSize?: number;
	}

	export function list(callback: (error: Error, drives: Drive[]) => void): void;
}
