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

import { SourceDestination } from './source-destination';

export class SourceSource extends SourceDestination {
	constructor(protected source: SourceDestination) {
		super();
	}

	protected async _open(): Promise<void> {
		await this.source.open();
	}

	protected async _close(): Promise<void> {
		await this.source.close();
	}
}
