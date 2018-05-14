declare module 'drivelist' {
	export interface Mountpoint {
		path: string;
	}

	export interface Drive {
		description: string;
		icon: string;  // TODO: this is only monkey patched by blockdevice.ts
		isSystem: boolean;
		busType: string;
		error: string | null;
		displayName: string;
		device: string;
		mountpoints: Mountpoint[];
		size: number;
		raw: string;
	}

	export function list(callback: (error: Error, drives: Drive[]) => void): void;
}
