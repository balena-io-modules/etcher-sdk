import { Disposer } from 'bluebird';
import { EventEmitter } from 'events';

import { NotCapable, SourceDestination } from './';

export class Drive extends EventEmitter {
	// icon: string;  // TODO
	emitsProgress = false;
	canCreateSource = false;
	canCreateDestination = false;

	createSourceDisposer(): Promise<Disposer<SourceDestination>> {
		throw new NotCapable();
	}

	createDestinationDisposer(): Promise<Disposer<SourceDestination>> {
		throw new NotCapable();
	}
}
