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

import * as unzip from 'unzip-stream';

import { NO_MATCHING_FILE_MSG } from './constants';

export const getFileStreamFromZipStream = async (
	zipStream: NodeJS.ReadableStream,
	match: (filename: string) => boolean,
): Promise<unzip.ZipStreamEntry> => {
	return await new Promise(
		(
			resolve: (entry: unzip.ZipStreamEntry) => void,
			reject: (err: Error) => void,
		) => {
			let found = false;
			zipStream.on('error', reject);
			const unzipper = unzip.Parse();
			unzipper.on('error', reject);
			zipStream.pipe(unzipper);
			unzipper.on('entry', (entry: unzip.ZipStreamEntry) => {
				if (!found && entry.type === 'File' && match(entry.path)) {
					found = true;
					// The compressed size is only known if the size is known
					if (entry.size !== undefined) {
						entry.compressedSize = (
							unzipper as any
						).unzipStream.parsedEntity.compressedSize;
					}
					entry.on('end', () => {
						// Stop reading the zip archive once the file we want has been extracted.
						zipStream.unpipe?.(unzipper);
						// @ts-ignore
						zipStream.destroy?.();
					});
					resolve(entry);
				} else {
					entry.autodrain();
				}
			});
			zipStream.on('end', () => {
				if (!found) {
					reject(new Error(NO_MATCHING_FILE_MSG));
				}
			});
		},
	);
};
