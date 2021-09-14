/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UsbbootDevice } from 'node-raspberrypi-usbboot';

import { AdapterSourceDestination } from '../scanner/adapters/adapter';
import { SourceDestination } from './source-destination';

export class UsbbootDrive
	extends SourceDestination
	implements AdapterSourceDestination
{
	public raw = null;
	public displayName = 'Initializing device';
	public device = null;
	public devicePath = null;
	public icon = 'loading';
	public isSystem = false;
	public description = 'Compute Module';
	public mountpoints = [];
	public isReadOnly = false;
	public disabled = true;
	public size = null;
	public emitsProgress = true;
	public progress: number = 0;

	constructor(public usbDevice: UsbbootDevice) {
		super();
		usbDevice.on('progress', (value) => {
			this.progress = value;
			this.emit('progress', value);
		});
	}
}
