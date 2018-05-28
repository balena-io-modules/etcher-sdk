import * as Bluebird from 'bluebird';
import { Disk } from 'file-disk';
import * as _ from 'lodash';
import { getPartitions } from 'partitioninfo';
import { interact, AsyncFsLike } from 'resin-image-fs';

import { execute as configureAction } from './operations/configure';
import { execute as copyAction } from './operations/copy';

// This code comes from resin-image maker, converted to typescript and dropped Edison zip archive support.

type OperationCommand = 'configure' | 'copy';

interface Operation {
	command: OperationCommand;
	when: any;
}
	
const PARTITION_FIELDS = ['partition', 'to.partition', 'from.partition'];
const MBR_LAST_PRIMARY_PARTITION = 4;

const ACTIONS = {
	configure: configureAction,
	copy: copyAction,
};

const executeOperation = async (operation: Operation, disk: Disk): Promise<void> => {
	return await ACTIONS[operation.command](operation, disk);
};

const getPartitionIndex = (partition: number | { primary?: number, logical?: number }): number => {
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
};

const getDiskDeviceType = async (disk: Disk): Promise<any> => {
	const partitions = await getPartitions(disk);
	for (const partition of partitions.partitions) {
		if (partition.type === 14) {
			const deviceType = await Bluebird.using(interact(disk, partition.index), async (fs: AsyncFsLike) => {
				return await fs.readFileAsync('/device-type.json').catchReturn(undefined);
			});
			if (deviceType) {
				return JSON.parse(deviceType.toString());
			}
		}
	}
};

export const configure = async (disk: Disk, options: { [k: string]: any, config?: any } = {}): Promise<void> => {
	console.log('options', options);
	const deviceType = await getDiskDeviceType(disk);
	console.log('device type read from disk image:\n', JSON.stringify(deviceType, null, 4));
	let operations = _.cloneDeep(_.get(deviceType, 'configuration.operations', []));
	const config = _.get(deviceType, 'configuration.config');

	if (config) {
		operations.push({
			command: 'configure',
			partition: config.partition,
			data: options.config,
		});
	}

	operations = operations.filter((operation: Operation) => {
		if (_.isObject(operation.when)) {
			for (const key in operation.when) {
				if (options[key] !== operations.when[key]) {
					return false;
				}
			}
		}
		return true;
	});

	for (const operation of operations) {
		for (const field of PARTITION_FIELDS) {
			const partition = _.get(operation, field);
			if (partition) {
				_.set(operation, field, getPartitionIndex(partition));
			}
		}
		await executeOperation(operation, disk);
	}
};
