import { DriverlessDevice as WinUsbDriverlessDevice } from 'winusb-driver-generator';

import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import { SourceDestination } from './source-destination';

export class DriverlessDevice extends SourceDestination implements AdapterSourceDestination {
	accessible = false;
	raw = null;
	device = null;
	devicePath = null;
	isSystem = false;
	mountpoints = [];
	size = null;
	emitsProgress = false;
	deviceDescriptor: { idVendor: number, idProduct: number };
	description = '';

	constructor(private driverlessDevice: WinUsbDriverlessDevice) {
		super();
		this.deviceDescriptor = {
			idVendor: driverlessDevice.vid,
			idProduct: driverlessDevice.pid,
		};
	}
}
