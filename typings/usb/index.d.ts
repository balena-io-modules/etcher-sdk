declare module 'usb' {
	// This is quite incomplete but covers our usage.

	import * as EventEmitter from 'events';

	export const LIBUSB_REQUEST_TYPE_VENDOR: number;
	export const LIBUSB_ENDPOINT_IN: number;
	export const LIBUSB_TRANSFER_TYPE_BULK: number;
	export const LIBUSB_ERROR_NO_DEVICE: number;
	export const LIBUSB_ERROR_IO: number;

	export interface EndpointDescriptor {
		bDescriptorType: number;
		bEndpointAddress: number;
		bmAttributes: number;
		wMaxPacketSize: number;
		bInterval: number;
		bRefresh: number;
		bSynchAddress: number;
		extra: Buffer;
	}

	export interface ConfigDescriptor {
		bNumInterfaces: number;
	}

	export interface DeviceDescriptor {
		idVendor: number;
		idProduct: number;
		iSerialNumber: number;
	}

	export class Interface {
		device: Device;
		id: number;
		altSetting: number;

		claim(): void;
		endpoint(addr: number): Endpoint;
	}

	export class Endpoint extends EventEmitter {
		device: Device;
		descriptor: EndpointDescriptor;
		address: number;
		transferType: number;
		timeout: number;

		transfer: (
			buffer: Buffer
			callback: (error: Error | null) => void,
		),
	}

	export class Device {
		timeout: number;
		busNumber: number;
		deviceAddress: number;
		interfaces: Interface[];
		_configDescriptor: ConfigDescriptor;
		readonly configDescriptor: ConfigDescriptor;
		readonly allConfigDescriptors: ConfigDescriptor[];
		readonly deviceDescriptor: DeviceDescriptor;

		accessible?: boolean;  // This is not defined in the usb package but monkey patched by listDevices()

		open(): void;
		close(): void;
		interface(addr?: number): Interface;
		controlTransfer(
			bmRequestType: number,
			bRequest: number,
			wValue: number,
			wIndex: number,
			data_or_length: Buffer | number,
			callback?: (error: Error | null, result?: Buffer) => void,
		): this;
		getStringDescriptor(
			desc_index: number,
			callback: (error: Error | null, result?: string) => void,
		): void;

	}

	export const getDeviceList = (): Device[];
}
