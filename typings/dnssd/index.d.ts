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

declare module 'dnssd' {
	import { EventEmitter } from 'events';

	export interface Service {
		addresses: string[];
		domain: string;
		fullname: string;
		host: string;
		name: string;
		port: number;
		protocol: string;
		type: ServiceType;
	}

	export class ServiceType {
		name: string;
		protocol: string;
	}

	export class Browser extends EventEmitter {
		constructor(serviceType: ServiceType);
		public start(): void;
		public stop(): void;
	}

	export interface AdvertisementOptions {
		name?: string;
		host?: string;
		txt?: string;
		subtypes?: string[];
		interface?: string;
	}

	export class Advertisement extends EventEmitter {
		constructor(serviceType: ServiceType, port: number, options?: AdvertisementOptions);
		public start(): void;
		public stop(forceImmediately?: boolean, callback?: () => void): void;
	}

	export function tcp(name: string): ServiceType;
}
