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

export const PROGRESS_EMISSION_INTERVAL = 1000 / 4; // emit progress events 4 times per second
export const SPEED_WINDOW = 2; // Progress events current speed calculation window
export const RETRY_BASE_TIMEOUT = 100;
export const CHUNK_SIZE = 1024 ** 2;
export const NO_MATCHING_FILE_MSG =
	"Can't find a matching file in this zip archive";
export const XXHASH_SEED = Buffer.from('ETCH'); // Seed value 0x45544348 = ASCII "ETCH"
export const DEFAULT_ALIGNMENT = 512;
