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

import { fromCallback } from 'bluebird';
import { Advertisement, tcp } from 'dnssd';
import * as t from 'io-ts';
import { decode, encode } from 'msgpack-lite';
import { createConnection, createServer, Server, Socket } from 'net';

import { Scanner } from './scanner';
import { Adapter, BlockDeviceAdapter } from './scanner/adapters';

// Events (slave -> master):
//  * device attach
//  * device detach
//  * device progress (usbboot)
//  * job progress
//  * job fail
//  * job error
// Commands (master -> slave):
//  * run job

const PORT = 54321;  // TODO: use random port?
const SERVICE_NAME = 'etcher';

const DeviceAttach = t.type({
	id: t.number,
	name: t.string,
	description: t.string,
	disabled: t.boolean,
});

// const DeviceDetach = t.type({
// 	id: t.number,
// });
// 
// const DeviceProgress = t.type({
// 	id: t.number,
// 	progress: t.number,
// });
// 
// const JobProgress = t.type({
// 	id: t.number,
// 	progress: t.number,
// });
// 
// const JobFail = t.type({
// 	id: t.number,
// 	deviceId: t.number,
// 	message: t.string,
// });
// 
// const JobError = t.type({
// 	id: t.number,
// 	message: t.string,
// });

export class RemoteClient {
	private socket: Socket;

	constructor(public readonly host: string, public readonly port: number) {
		this.socket = createConnection(port, host, () => {
			// on connect
		});
		console.log(this.socket);
		this.socket.on('data', (data: Buffer) => {
			const obj = decode(data);
			console.log('decoded', obj);
		});
	}
}

export class RemoteServer {
	private scanner: Scanner;
	private server: Server;
	private socket: Socket;
	private advertisement: Advertisement;

	constructor() {
		this.server = createServer((socket: Socket) => {
			// TODO: authentication
			if (this.socket === undefined) {
				this.socket = socket;
				console.log('connection', this.socket, this.server);
			}  // TODO: else warning or error
		});
		this.server.listen(PORT, () => {
			this.advertisement = new Advertisement(tcp(SERVICE_NAME), PORT);
			this.advertisement.start();
		});
		const adapters: Adapter[] = [];
		adapters.push(new BlockDeviceAdapter(() => false));
		// TODO: add UsbbootAdapter
		// TODO: add RemoteAdapter
		this.scanner = new Scanner(adapters);
		this.scanner.start();
		const event = DeviceAttach.encode({
			id: 42,
			name: 'name',
			description: 'description',
			disabled: false,
		});
		this.sendEvent(event);
	}

	private async sendEvent(event: any): Promise<void> {
		console.log(event);
		const data = encode(event);
		await fromCallback((callback: (error?: Error) => void) => {
			this.socket.write(data, callback)
		});
	}
}
