import { UsbbootDevice, UsbbootScanner } from 'node-raspberrypi-usbboot';

import { UsbbootDrive } from '../../source-destination/usbboot';
import { Adapter } from './adapter';

export class UsbbootDeviceAdapter extends Adapter {
	private drives: Map<UsbbootDevice, UsbbootDrive> = new Map();
	private scanner: UsbbootScanner;

	constructor() {
		super();
		this.scanner = new UsbbootScanner();
		this.scanner.on('attach', this.onAttach.bind(this));
		this.scanner.on('detach', this.onDetach.bind(this));
		this.scanner.on('ready', this.emit.bind(this, 'ready'));
		this.scanner.on('error', this.emit.bind(this, 'error'));
	}

	start(): void {
		this.scanner.start();
	}

	stop(): void {
		this.scanner.stop();
	}

	private onAttach(device: UsbbootDevice): void {
		let drive = this.drives.get(device);
		if (drive === undefined) {
			drive = new UsbbootDrive(device);
			this.drives.set(device, drive);
		}
		this.emit('attach', drive);
	}

	private onDetach(device: UsbbootDevice): void {
		const drive = this.drives.get(device);
		this.drives.delete(device);
		this.emit('detach', drive);
	}
}
