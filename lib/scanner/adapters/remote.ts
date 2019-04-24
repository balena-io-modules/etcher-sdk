/*
 * Copyright 2019 balena.io
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

import { delay } from 'bluebird';
import { Browser, Service, tcp } from 'dnssd';

import { Adapter } from './adapter';

export class RemoteAdapter extends Adapter {
	// Emits 'attach', 'detach', 'ready' and 'error' events
	private browser: Browser;

	constructor() {
		super();
		this.createBrowser();
	}

	private createBrowser() {
		console.log('create');
		this.browser = new Browser(tcp('etcher'));  // TODO: use constant from remote-server
		this.browser.on('serviceUp', (service: Service) => {
			console.log('service up', service);
		});
		this.browser.on('serviceDown', (service: Service) => {
			console.log('service down', service);
		});
		// TODO: serviceChanged ?
		this.browser.on('error', async (error: Error) => {
			// TODO: debug, not console
			console.log('error', error);
			// TODO: detach all devices
			this.browser.removeAllListeners();
			await delay(1000);  // TODO: constant
			this.createBrowser();
		});
		this.browser.start();
	}

	public start(): void {
		//this.browser.start();
	}

	public stop(): void {
		this.browser.stop();
	}
}
