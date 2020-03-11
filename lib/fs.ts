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

import * as fs from 'fs';
import { promisify } from 'util';

export const close = promisify(fs.close);
export const fstat = promisify(fs.fstat);
export const fsync = promisify(fs.fsync);
export const open = promisify(fs.open);
export const read = promisify(fs.read);
export const readFile = promisify(fs.readFile);
export const stat = promisify(fs.stat);
export const unlink = promisify(fs.unlink);
export const write = promisify(fs.write);
export const writeFile = promisify(fs.writeFile);
