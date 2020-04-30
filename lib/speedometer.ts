/*
 * Copyright 2020 balena.io
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

import { sumBy } from 'lodash';

export class Speedometer {
	private values: Array<[number, number]> = [];

	constructor(private windowSize = 5) {
		this.values.push([this.now(), 0]);
	}

	private now() {
		return Date.now() / 1000;
	}

	private removeOldValues(start: number) {
		const index = this.values.findIndex((v) => v[0] > start);
		const deleteUntil = index === -1 ? undefined : index - 1;
		this.values.splice(0, deleteUntil);
	}

	private moment(index: number) {
		return this.values[index][0];
	}

	private value(index: number) {
		return this.values[index][1];
	}

	public speed(amount: number): number {
		const now = this.now();
		this.values.push([now, amount]);
		const start = now - this.windowSize;
		this.removeOldValues(start);
		if (this.values.length < 2) {
			// This shouldn't happen unless we go back in time
			return 0;
		}
		let ratio: number;
		let duration: number;
		if (start <= this.values[0][0]) {
			ratio = (this.moment(1) - start) / (this.moment(1) - this.moment(0));
			duration = this.windowSize;
		} else {
			ratio = 1;
			duration = now - this.moment(0);
		}
		const sum =
			ratio * this.value(1) + sumBy(this.values.slice(2), (v) => v[1]);
		return sum / duration;
	}
}
