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

import { interact } from 'balena-image-fs';
import { Disk } from 'file-disk';
import { getPartitions } from 'partitioninfo';
import { promisify } from 'util';

import { configure as configureAction } from './operations/configure';
import { copy as copyAction } from './operations/copy';

import { Dictionary } from '../../utils';

export type Partition = number | { primary: number; logical?: number };

export interface FileOnPartition {
	partition?: Partition;
	image?: string;
	path: string;
}

export interface CopyOperation {
	command: 'copy';
	from: FileOnPartition;
	to: FileOnPartition;
	when: Dictionary<string>;
}

export interface DeviceTypeJSON {
	configuration: {
		config: FileOnPartition;
		operations?: CopyOperation[];
	};
	yocto: {
		archive?: boolean;
	};
}

const MBR_LAST_PRIMARY_PARTITION = 4;

export function shouldRunOperation(
	options: Dictionary<any>,
	operation: CopyOperation,
): boolean {
	const when = operation.when ?? {};
	for (const [key, value] of Object.entries(when)) {
		if (options[key] !== value) {
			return false;
		}
	}
	return true;
}

export function normalizePartition(partition: Partition): number {
	// New device-type.json partition format: partition index
	if (typeof partition === 'number') {
		return partition;
	}
	// Old device-type.json partition format: { primary: 4, logical: 1 }
	if (typeof partition.logical === 'number') {
		return partition.logical + MBR_LAST_PRIMARY_PARTITION;
	}
	// Old device-type.json partition format: { primary: 4 }
	if (typeof partition.primary === 'number') {
		return partition.primary;
	}
	throw new Error(`Invalid partition: ${partition}`);
}

async function getDiskDeviceType(
	disk: Disk,
): Promise<DeviceTypeJSON | undefined> {
	const partitions = await getPartitions(disk);
	for (const partition of partitions.partitions) {
		if (partition.type === 14) {
			const deviceType = await interact(disk, partition.index, async (fs) => {
				try {
					return await promisify(fs.readFile)('/device-type.json');
				} catch (error) {
					return undefined;
				}
			});
			if (deviceType) {
				return JSON.parse(deviceType.toString());
			}
		}
	}
}

export async function configure(
	disk: Disk,
	config?: Dictionary<any>,
): Promise<void> {
	const deviceType = await getDiskDeviceType(disk);
	const operations = deviceType?.configuration?.operations ?? [];
	const configPartition = deviceType?.configuration?.config.partition;

	if (config !== undefined && configPartition !== undefined) {
		await configureAction(disk, normalizePartition(configPartition), config);
	}

	for (const cpy of operations) {
		if (
			cpy.from.partition !== undefined &&
			cpy.to.partition !== undefined &&
			shouldRunOperation(config ?? {}, cpy)
		) {
			await copyAction(
				disk,
				normalizePartition(cpy.from.partition),
				cpy.from.path,
				disk,
				normalizePartition(cpy.to.partition),
				cpy.to.path,
			);
		}
	}
}
