import { UsbBBbootDevice } from '@balena/node-beaglebone-usbboot';

import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import { SourceDestination } from './source-destination';

export class UsbBBbootDrive
	extends SourceDestination
	implements AdapterSourceDestination
{
	public raw = null;
	public displayName = 'Initializing device';
	public device = null;
	public devicePath = null;
	public icon = 'loading';
	public isSystem = false;
	public description = 'BeagleBone';
	public mountpoints = [];
	public isReadOnly = false;
	public disabled = true;
	public size = null;
	public emitsProgress = true;
	public progress: number = 0;

	constructor(public usbDevice: UsbBBbootDevice) {
		super();
		usbDevice.on('progress', (value) => {
			this.progress = value;
			this.emit('progress', value);
		});
	}
}
