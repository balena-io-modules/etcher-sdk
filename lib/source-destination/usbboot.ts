import { UsbbootDevice } from 'node-raspberrypi-usbboot';

import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import { SourceDestination } from './source-destination';

export class UsbbootDrive extends SourceDestination implements AdapterSourceDestination {
	raw = null;
	device = null;
	devicePath = null;
	isSystem = false;
	description = 'Compute Module';
	mountpoints = [];
	size = null;
	emitsProgress = true;

	constructor(private device_: UsbbootDevice) {
		super();
		device_.on('progress', this.emit.bind(this, 'progress'));
	}
}
