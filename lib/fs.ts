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

import { ReadResult, WriteResult } from 'file-disk';
import * as fs from 'fs';

export async function close(fd: number): Promise<void> {
	await new Promise((resolve: () => void, reject: (err: Error) => void) => {
		fs.close(fd, (err: Error) => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

export async function fstat(fd: number): Promise<fs.Stats> {
	return await new Promise(
		(resolve: (stats: fs.Stats) => void, reject: (err: Error) => void) => {
			fs.fstat(fd, (err: Error, stats: fs.Stats) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(stats);
			});
		},
	);
}

export async function fsync(fd: number): Promise<void> {
	await new Promise((resolve: () => void, reject: (err: Error) => void) => {
		fs.fsync(fd, (err: Error) => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

export async function open(
	path: string | Buffer,
	flags: string | number,
	mode = 0o666,
): Promise<number> {
	return await new Promise(
		(resolve: (fd: number) => void, reject: (err: Error) => void) => {
			fs.open(path, flags, mode, (err: Error, fd: number) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(fd);
			});
		},
	);
}

export async function read(
	fd: number,
	buffer: Buffer,
	offset: number,
	length: number,
	position: number,
): Promise<ReadResult> {
	return await new Promise(
		(resolve: (result: ReadResult) => void, reject: (err: Error) => void) => {
			fs.read(
				fd,
				buffer,
				offset,
				length,
				position,
				(err: Error, bytesRead: number, buffer: Buffer) => {
					if (err) {
						reject(err);
						return;
					}
					resolve({ bytesRead, buffer });
				},
			);
		},
	);
}

export async function readFile(
	path: string,
	options: { encoding: string | null; flag: string } | undefined = {
		encoding: null,
		flag: 'r',
	},
): Promise<string | Buffer> {
	return await new Promise(
		(
			resolve: (data: string | Buffer) => void,
			reject: (err: Error) => void,
		) => {
			fs.readFile(path, options, (err: Error, data: string | Buffer) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(data);
			});
		},
	);
}

export async function stat(path: string | Buffer): Promise<fs.Stats> {
	return await new Promise(
		(resolve: (stats: fs.Stats) => void, reject: (err: Error) => void) => {
			fs.stat(path, (err: Error, stats: fs.Stats) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(stats);
			});
		},
	);
}

export async function writeFile(
	path: string,
	data: string | Buffer,
	options = { encoding: 'utf8', mode: 0o666, flag: 'w' },
): Promise<void> {
	await new Promise((resolve: () => void, reject: (err: Error) => void) => {
		fs.writeFile(path, data, options, (err: Error) => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

export async function unlink(path: string | Buffer): Promise<void> {
	await new Promise((resolve: () => void, reject: (err: Error) => void) => {
		fs.unlink(path, (err: Error) => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}

export async function write(
	fd: number,
	buffer: Buffer,
	offset: number,
	length: number,
	position: number,
): Promise<WriteResult> {
	return await new Promise(
		(resolve: (result: WriteResult) => void, reject: (err: Error) => void) => {
			fs.write(
				fd,
				buffer,
				offset,
				length,
				position,
				(err: Error, bytesWritten: number, buffer: Buffer) => {
					if (err) {
						reject(err);
						return;
					}
					resolve({ bytesWritten, buffer });
				},
			);
		},
	);
}
