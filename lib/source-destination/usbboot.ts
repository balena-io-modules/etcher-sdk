import { UsbbootDevice } from 'node-raspberrypi-usbboot';

import { SourceDestination } from './source-destination';

export class UsbbootDrive extends SourceDestination {
	constructor(private device: UsbbootDevice) {
		super();
		device.on('progress', this.emit.bind(this, 'progress'));
	}

	async emitsProgress() {
		return true;
	}
}
