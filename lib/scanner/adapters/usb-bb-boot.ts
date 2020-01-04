declare function require(moduleName: string): any;
import {
	UsbBBbootDevice,
	UsbBBbootScanner as UsbBBbootScannerType,
} from 'node-beaglebone-usbboot';

import { UsbBBbootDrive } from '../../source-destination/usb-bb-boot';
import { Adapter } from './adapter';

let UsbBBbootScanner: typeof UsbBBbootScannerType | undefined;
try {
	// tslint:disable: no-var-requires
	UsbBBbootScanner = require('node-beaglebone-usbboot').UsbBBbootScanner;
} catch (error) {
	console.warn('Failed to import node-beaglebone-usbboot:', error);
}

export class UsbBBbootDeviceAdapter extends Adapter {
	private drives: Map<UsbBBbootDevice, UsbBBbootDrive> = new Map();
	private scanner: UsbBBbootScannerType;

	constructor() {
		super();
		if (UsbBBbootScanner !== undefined) {
			this.scanner = new UsbBBbootScanner();
			this.scanner.on('attach', this.onAttach.bind(this));
			this.scanner.on('detach', this.onDetach.bind(this));
			this.scanner.on('ready', this.emit.bind(this, 'ready'));
			this.scanner.on('error', this.emit.bind(this, 'error'));
		} else {
			setImmediate(this.emit.bind(this, 'ready'));
		}
	}

	public start(): void {
		this.scanner.start();
	}

	public stop(): void {
		this.scanner.stop();
	}

	private onAttach(device: UsbBBbootDevice): void {
		let drive = this.drives.get(device);
		if (drive === undefined) {
			drive = new UsbBBbootDrive(device);
			this.drives.set(device, drive);
		}
		this.emit('attach', drive);
	}

	private onDetach(device: UsbBBbootDevice): void {
		const drive = this.drives.get(device);
		this.drives.delete(device);
		this.emit('detach', drive);
	}
}
