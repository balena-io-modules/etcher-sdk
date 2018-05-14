import * as debug_ from 'debug';
import { EventEmitter } from 'events';

import { SourceDestination } from '../source-destination/source-destination';
import { Adapter } from './adapters/adapter';
import { BlockDeviceAdapter } from './adapters/block-device';
import { UsbbootDeviceAdapter } from './adapters/usbboot';

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

const main = () => {  // TODO: move this to examples
	const adapters = [ new BlockDeviceAdapter(), new UsbbootDeviceAdapter() ];
	const scanner = new Scanner(adapters);
	scanner.on('attach', async (drive: SourceDestination) => {
		console.log('attach', drive);
		if (await drive.emitsProgress()) {
			drive.on('progress', (progress: number) => {
				console.log(drive, progress, '%');
			});
		}
	});
	scanner.on('detach', (drive: SourceDestination) => {
		console.log('detach', drive);
	});
	scanner.start();
};

main();
