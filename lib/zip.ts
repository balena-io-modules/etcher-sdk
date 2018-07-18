/*
 * Copyright 2018 resin.io
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

export const getFileStreamFromZipStream = async (zipStream: NodeJS.ReadableStream, filePath?: string): Promise<unzip.ZipStreamEntry> => {
	return await new Promise((resolve: (entry: unzip.ZipStreamEntry) => void, reject: (err: Error) => void) => {
		let found = false;
		zipStream.on('error', reject);
		const unzipper = unzip.Parse();
		unzipper.on('error', reject);
		zipStream.pipe(unzipper);
		unzipper.on('entry', (entry: unzip.ZipStreamEntry) => {
			if (!found && (entry.type === 'File') && ((filePath === undefined) || (entry.path === filePath))) {
				entry.compressedSize = (unzipper as any).unzipStream.parsedEntity.compressedSize;
				found = true;
				entry.on('end', () => {
					// Stop reading the zip archive once the file we want has been extracted.
					zipStream.unpipe(unzipper);
				});
				resolve(entry);
			} else {
				entry.autodrain();
			}
		});
		zipStream.on('finish', () => {
			if (!found) {
				const msg = (filePath === undefined) ? "Can't find any file in this zip" : `Can't find a '${filePath}' file in this zip`;
				reject(new Error(msg));
			}
		});
	});
};
