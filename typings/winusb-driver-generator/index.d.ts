declare module 'winusb-driver-generator' {
	export interface DriverlessDeviceDescriptor {
		idVendor: number;
		idProduct: number;
	}

	export interface DriverlessDevice {
		deviceDescriptor: DriverlessDeviceDescriptor;
	}

	export const listDriverlessDevices(): DriverlessDevice[];
}
