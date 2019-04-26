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
import { EventEmitter } from 'events';
import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { zipObject } from 'lodash';
import { decode, encode } from 'msgpack-lite';
import { createConnection, createServer, Server, Socket } from 'net';

import { Scanner } from './scanner';
import { Adapter, BlockDeviceAdapter } from './scanner/adapters';
import { BlockDevice, SourceDestination } from './source-destination';

// Events (slave -> master):
//  * device attach
//  * device detach
//  * device progress (usbboot)
//  * job progress
//  * job fail
//  * job error
// Commands (master -> slave):
//  * run job

const PORT = 54321; // TODO: use random port?
const SERVICE_NAME = 'etcher';

enum MessageType {
	DeviceAttach,
	DeviceDetach,
	DeviceProgress,
	JobProgress,
	JobFail,
	JobError,
}

const DeviceAttach = t.type({
	id: t.number,
	name: t.string,
	description: t.string,
	disabled: t.boolean,
});
type DeviceAttach = t.TypeOf<typeof DeviceAttach>;

const DeviceDetach = t.type({
	id: t.number,
});
type DeviceDetach = t.TypeOf<typeof DeviceDetach>;

const DeviceProgress = t.type({
	id: t.number,
	progress: t.number,
});
type DeviceProgress = t.TypeOf<typeof DeviceProgress>;

const JobProgress = t.type({
	id: t.number,
	progress: t.number,
});
type JobProgress = t.TypeOf<typeof JobProgress>;

const JobFail = t.type({
	id: t.number,
	deviceId: t.number,
	message: t.string,
});
type JobFail = t.TypeOf<typeof JobFail>;

const JobError = t.type({
	id: t.number,
	message: t.string,
});
type JobError = t.TypeOf<typeof JobError>;

type Message =
	| DeviceAttach
	| DeviceDetach
	| DeviceProgress
	| JobProgress
	| JobFail
	| JobError;

const protocol: { [messageType: number]: t.InterfaceType<any> } = {
	[MessageType.DeviceAttach]: DeviceAttach,
	[MessageType.DeviceDetach]: DeviceDetach,
	[MessageType.DeviceProgress]: DeviceProgress,
	[MessageType.JobProgress]: JobProgress,
	[MessageType.JobFail]: JobFail,
	[MessageType.JobError]: JobError,
};

function validateMessage(messageType: MessageType, data: any): Message {
	const codec = protocol[messageType];
	if (codec === undefined) {
		throw new Error('Unknown message type');
	}
	const validationResult = t.exact(codec).decode(data);
	if (validationResult.isLeft()) {
		console.log(PathReporter.report(validationResult));
		throw new Error(`invalid message ${data}`);
	}
	return validationResult.value;
}

function encodeMessage(messageType: MessageType, data: Message): Buffer {
	data = validateMessage(messageType, data);
	const list = Object.keys(data)
		.sort()
		.map((key: keyof Message) => data[key]);
	list.splice(0, 0, messageType);
	return encode(list);
}

function decodeMessage(data: Buffer): { type: MessageType; data: Message } {
	const list = decode(data);
	const messageType = list.shift();
	const codec = protocol[messageType];
	if (codec === undefined) {
		throw new Error('Unknown message type'); // TODO: Factorize
	}
	const raw = zipObject(Object.keys(codec.props).sort(), list);
	const validated = validateMessage(messageType, raw);
	return { type: messageType, data: validated };
}

export class RemoteClient extends EventEmitter {
	private socket: Socket;

	constructor(public readonly host: string, public readonly port: number) {
		super();
		this.socket = createConnection(port, host, () => {
			// on connect
		});
		console.log(this.socket);
		this.socket.on('data', (data: Buffer) => {
			const obj = decodeMessage(data);
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
		this.start();
	}

	private async start() {
		await this.startListening();
		this.startAdvertising();
		this.startScanner();
	}

	private startScanner() {
		const adapters: Adapter[] = [];
		adapters.push(new BlockDeviceAdapter(() => false));
		// TODO: add UsbbootAdapter
		// TODO: add RemoteAdapter
		this.scanner = new Scanner(adapters);
		this.scanner.start();
		this.scanner.on('attach', (device: SourceDestination) => {
			console.log(device);
			if (device instanceof BlockDevice) {
				this.sendEvent(MessageType.DeviceAttach, {
					id: 42,
					name: device.device,
					description: device.description,
					disabled: false,
				});
			}
		});
	}

	private async startListening() {
		this.server = createServer((socket: Socket) => {
			// TODO: authentication
			if (this.socket === undefined) {
				this.socket = socket;
				console.log('connection', this.socket, this.server);
			} // TODO: else warning or error
		});
		await fromCallback((callback: (error?: Error) => void) => {
			this.server.listen(PORT, callback);
		});
	}

	private async startAdvertising() {
		this.advertisement = new Advertisement(tcp(SERVICE_NAME), PORT);
		this.advertisement.start();
	}

	private async sendEvent(
		messageType: MessageType,
		data: Message,
	): Promise<void> {
		if (this.socket === undefined) {
			return;
		}
		const encoded = encodeMessage(messageType, data);
		await fromCallback((callback: (error?: Error) => void) => {
			this.socket.write(encoded, callback);
		});
	}
}
