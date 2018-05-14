import * as debug_ from 'debug';
import { EventEmitter } from 'events';

import { Adapter } from './adapter';
import { BlockDeviceAdapter } from './blockdevice';
import { Drive } from './drive';
import { UsbbootDeviceAdapter } from './usbboot';

const debug = debug_('etcher-sdk:scanner');

export class Scanner extends EventEmitter {
	private static events = [ 'attach', 'detach', 'error' ];

	constructor(private adapters: Adapter[]) {
		super();
		this.adapters.forEach((adapter: Adapter) => {
			Scanner.events.forEach((eventName: string) => {
				adapter.on(eventName, this.emit.bind(this, eventName));
			});
		});
	}

	start(): void {
		debug('start');
		this.adapters.forEach((adapter: Adapter) => {
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

const main = () => {  // TODO: remove this
	const adapters = [ new BlockDeviceAdapter(), new UsbbootDeviceAdapter() ];
	const scanner = new Scanner(adapters);
	scanner.on('attach', (drive: Drive) => {
		console.log('attach', drive);
		if (drive.emitsProgress) {
			drive.on('progress', (progress: number) => {
				console.log(drive, progress, '%');
			});
		}
	});
	scanner.on('detach', (drive: Drive) => {
		console.log('detach', drive);
	});
	scanner.start();
};

main();
