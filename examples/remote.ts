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

import { scanner as scanner$ } from '../lib/';
import { RemoteServer } from '../lib/remote-server';

async function main() {
	const adapters: scanner$.adapters.Adapter[] = [];
	adapters.push(new scanner$.adapters.RemoteAdapter);
	const scanner = new scanner$.Scanner(adapters);
	scanner.on('attach', (device: scanner$.adapters.AdapterSourceDestination) => {
		console.log('attach', device);
	});
	scanner.on('detach', (device: scanner$.adapters.AdapterSourceDestination) => {
		console.log('detach', device);
	});
	scanner.start();
	const server = new RemoteServer();
	console.log('server', server);
}

main();
