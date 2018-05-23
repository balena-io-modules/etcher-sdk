import * as debug_ from 'debug';
import { EventEmitter } from 'events';

import { SourceDestination } from '../source-destination/source-destination';
import { Adapter, AdapterSourceDestination } from './adapters/adapter';
import { BlockDeviceAdapter } from './adapters/block-device';
import { UsbbootDeviceAdapter } from './adapters/usbboot';

const debug = debug_('etcher-sdk:scanner');

export class Scanner extends EventEmitter {
	drives: Set<AdapterSourceDestination> = new Set();
	private boundAttach: (drive: AdapterSourceDestination) => void;
	private boundDetach: (drive: AdapterSourceDestination) => void;

	constructor(private adapters: Adapter[]) {
		super();
		this.boundAttach = this.onAttach.bind(this);
		this.boundDetach = this.onDetach.bind(this);
		this.adapters.forEach((adapter: Adapter) => {
			adapter.on('attach', this.boundAttach);
			adapter.on('detach', this.boundDetach);
			adapter.on('error', this.emit.bind(this, 'error'));
		});
	}

	private onAttach(drive: AdapterSourceDestination) {
		this.drives.add(drive);
		this.emit('attach', drive);
	}

	private onDetach(drive: AdapterSourceDestination) {
		this.drives.delete(drive);
		this.emit('detach', drive);
	}

	getBy(field: 'raw' | 'device' | 'devicePath', value: string): AdapterSourceDestination | undefined {
		for (const drive of this.drives) {
			if (drive[field] === value) {
				return drive;
			}
		}
	}

	start(): void {
		debug('start');
		let notReady = this.adapters.length;
		this.adapters.forEach((adapter: Adapter) => {
			adapter.on('ready', () => {
				notReady -= 1;
				if (notReady === 0) {
					this.emit('ready');
				}
			});
			adapter.start();
		});
	}

	stop(): void {
		debug('stop');
		this.adapters.forEach((adapter: Adapter) => {
			adapter.stop();
		});
	}
}
