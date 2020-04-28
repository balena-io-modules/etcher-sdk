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

import { BlockMap } from 'blockmap';

import { BlocksWithChecksum } from '../sparse-stream/shared';

export interface Metadata {
	size?: number;
	isSizeEstimated?: boolean;
	isCompressed?: boolean; // zip archive or compressed raw image (not dmg)
	compressedSize?: number;
	blockmappedSize?: number;
	name?: string;
	blockMap?: BlockMap;
	blocks?: BlocksWithChecksum[];
	instructions?: string;
	logo?: string;
	bytesToZeroOutFromTheBeginning?: number;
	checksum?: string;
	checksumType?: string;
	recommendedDriveSize?: number;
	releaseNotesUrl?: string;
	supportUrl?: string;
	url?: string;
	version?: string;
	isEtch?: boolean;
}
