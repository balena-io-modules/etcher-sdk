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

import axios from 'axios';
import { ReadResult } from 'file-disk';
import { basename } from 'path';
import { unescape } from 'querystring';
import { parse } from 'url';

import { Metadata } from './metadata';
import { SourceDestination } from './source-destination';

export class Http extends SourceDestination {
	// Only implements reading for now
	private size: number;
	private acceptsRange: boolean;
	private ready: Promise<void>;
	private error: Error;

	constructor(private url: string) {
		super();
		this.ready = this.getInfo();
	}

	private async getInfo() {
		try {
			const response = await axios({ method: 'head', url: this.url });
			this.size = parseInt(response.headers['content-length'], 10);
			this.acceptsRange = response.headers['accept-ranges'] === 'bytes';
		} catch (error) {
			this.error = error;
		}
	}

	public async canRead(): Promise<boolean> {
		await this.ready;
		if (this.error) {
			throw this.error;
		}
		return this.acceptsRange;
	}

	public async canCreateReadStream(): Promise<boolean> {
		return true;
	}

	protected async _getMetadata(): Promise<Metadata> {
		await this.ready;
		if (this.error) {
			throw this.error;
		}
		let name;
		const pathname = parse(this.url).pathname;
		if (pathname !== undefined) {
			name = basename(unescape(pathname));
		}
		return {
			size: this.size,
			name,
		};
	}

	private getRange(start = 0, end?: number) {
		// start and end are inclusive
		let range = `bytes=${start}-`;
		if (end !== undefined) {
			range += end;
		}
		return range;
	}

	public async read(
		buffer: Buffer,
		bufferOffset: number,
		length: number,
		sourceOffset: number,
	): Promise<ReadResult> {
		const response = await axios({
			method: 'get',
			url: this.url,
			responseType: 'arraybuffer',
			headers: {
				Range: this.getRange(sourceOffset, sourceOffset + length - 1),
			},
		});
		const bytesRead = response.data.length;
		// TODO: it would be nice to avoid copying here but it would require modifying axios
		response.data.copy(buffer, bufferOffset);
		return { bytesRead, buffer };
	}

	public async createReadStream(
		emitProgress = false,
		start = 0,
		end?: number,
	): Promise<NodeJS.ReadableStream> {
		const response = await axios({
			method: 'get',
			url: this.url,
			headers: {
				Range: this.getRange(start, end),
			},
			responseType: 'stream',
		});
		if (emitProgress) {
			let bytes = 0;
			let lastTime = Date.now();
			response.data.on('data', (chunk: Buffer) => {
				const now = Date.now();
				const length = chunk.length;
				bytes += length;
				const speed = length / ((now - lastTime) / 1000);
				lastTime = now;
				response.data.emit('progress', {
					position: bytes,
					bytes,
					speed,
				});
			});
			response.data.pause();
		}
		return response.data;
	}
}
