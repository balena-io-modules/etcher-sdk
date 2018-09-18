declare module 'winusb-driver-generator' {
	export interface DriverlessDevice {
		vid: number; // vendor id
		pid: number; // product id
		hid: string; // hardware id
		did: string; // device id
	}

	export function listDriverlessDevices(): DriverlessDevice[];

	export function hasDriver(vendorId: number, productId: number): boolean;

	export function associate(
		vendorId: number,
		productId: number,
		description: string,
	): void;
}
