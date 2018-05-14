import { EventEmitter } from 'events';

export abstract class Adapter extends EventEmitter {
	abstract start(): void;
	abstract stop(): void;
}
