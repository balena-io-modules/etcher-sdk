import { EventEmitter } from 'events';

import { SourceDestination } from '../../source-destination/source-destination';

export interface AdapterSourceDestination extends SourceDestination {
	// SourceDestinations coming from an adapter need some additional properties.
	raw: string | null;
	device: string | null;
	devicePath: string | null;
	isSystem: boolean;
	description: string;
	mountpoints: { path: string }[];
	size: number | null;
	emitsProgress: boolean;
}

export abstract class Adapter extends EventEmitter {
	abstract start(): void;
	abstract stop(): void;
}
