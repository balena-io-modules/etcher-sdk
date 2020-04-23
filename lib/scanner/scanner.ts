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

import * as debug_ from 'debug';
import { EventEmitter } from 'events';

import { Adapter, AdapterSourceDestination } from './adapters/adapter';

const debug = debug_('etcher-sdk:scanner');

export class Scanner extends EventEmitter {
	public drives: Set<AdapterSourceDestination> = new Set();

	constructor(private adapters: Adapter[]) {
		super();
		this.adapters.forEach((adapter: Adapter) => {
			adapter.on('attach', this.onAttach.bind(this));
			adapter.on('detach', this.onDetach.bind(this));
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

	public getBy(
		field: 'raw' | 'device' | 'devicePath',
		value: string,
	): AdapterSourceDestination | undefined {
		for (const drive of this.drives) {
			if (drive[field] === value) {
				return drive;
			}
		}
	}

	public start(): Promise<void> {
		debug('start');
		let notReady = this.adapters.length;
		return new Promise((resolve) => {
			this.adapters.forEach((adapter: Adapter) => {
				adapter.on('ready', () => {
					notReady -= 1;
					if (notReady === 0) {
						this.emit('ready');
						resolve();
					}
				});
				adapter.start();
			});
		});
	}

	public stop(): void {
		debug('stop');
		this.drives.clear();
		this.adapters.forEach((adapter: Adapter) => {
			adapter.stop();
		});
	}
}
