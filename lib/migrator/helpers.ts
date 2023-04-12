import * as drivelist from 'drivelist'
import { GetPartitionsResult, GPTPartition, MBRPartition } from 'partitioninfo';
import { BlockDevice, SourceDestination, File } from '../source-destination';

/**
 * Finds partitions in newTable with a partition offset not found in oldTable.
 * Expects paritioninfo partition objects.
 * @returns Array of new partitions
 */
export const findNewPartitions = (
	oldTable?: GetPartitionsResult,
	newTable?: GetPartitionsResult
) => {
	if (newTable?.partitions === undefined || oldTable?.partitions === undefined) {
		throw Error('Partitions undefined in request')
	}

	return (newTable.partitions as Array<GPTPartition | MBRPartition>).filter((n) => {
		return !oldTable.partitions.some((o) => o.offset === n.offset)
	})
}

/**
 * Provides the boundary offsets for a partition on a device
 * @param {SourceDestination} source - Device containing requested partition
 * @param {number} partitionIndex - 1-based index of requested partition
 * @returns {start, end} object with offsets
 */
export const getPartitionBoundaries = async (
	source: SourceDestination,
	partitionIndex = 1
) => {
	const partitioninfo = await source.getPartitionTable();
	const partitions = partitioninfo?.partitions;
	if (partitions === undefined) {
		throw Error("Can't read partitions");
	}
	const currentPartition: MBRPartition | GPTPartition = (partitions as Array<any>).filter(p => p.index === partitionIndex)[0];
	const start = currentPartition.offset;

	let end: number | undefined = undefined;
	if (start) {
		end = start + currentPartition.size;
	}
	return {
		start,
		end,
	};
};

/**
 * Calculate the size required for a partition to contain the contents of
 * the provided source partition, rounded up to nearest MB.
 * @param {SourceDestination} source - Device containing requested partition
 * @param {number} partitionIndex - 1-based index of requested partition
 * @returns calculated size in MB, rounded up
 */
export const calcRequiredPartitionSize = async (
	source: SourceDestination,
	partitionIndex = 1
) => {
	const sourceBoundaries = await getPartitionBoundaries(source, partitionIndex);
	const sourcePartitionSize = sourceBoundaries.end! - sourceBoundaries.start!;
	const alignmentBuffer = 4096;

	if (isNaN(sourcePartitionSize)) {
		throw Error("Not able to find source partition size.");
	}
	return Math.ceil((sourcePartitionSize + alignmentBuffer) / 1024 / 1024);
}

/**
 * Copy a partition, referenced by index, from an image file to a block device,
 * @param {File} source - source image for partition
 * @param {number} sourcePartitionIndex
 * @param {BlockDevice} target - Target device for partition
 * @param {number} targetOffset - For partition on device
 * @returns Promise<>
 */
export const copyPartitionFromImageToDevice = async (
	source: File,
	sourcePartitionIndex: number,
	target: BlockDevice,
	targetOffset: number
) => {
	const sourceBoundaries = await getPartitionBoundaries(source, sourcePartitionIndex);
	const sourcePartitionSize =
		sourceBoundaries.end! - sourceBoundaries.start!;

	if (isNaN(targetOffset) || isNaN(sourcePartitionSize)) {
		throw Error("Not able to find source partition size or target offset.");
	}

	const alignments = [source.getAlignment(), target.getAlignment()].filter((a) => a !== undefined) as number[]
	let alignment;
	if (alignments.length) {
		alignment = Math.max(...alignments)
	}

	const sourceReadStream = await source.createReadStream({
		alignment,
		emitProgress: true,
		start: sourceBoundaries.start,
		end: sourceBoundaries.end,
	});

	sourceReadStream.on('progress', (c) => {
		// console.clear();
		console.log(`read: ${JSON.stringify(c)}`)
	});

	target.open();
	const targetStream = await target.createWriteStream({startOffset: targetOffset});
	targetStream.on('progress', (p) => {
		//console.clear();
		console.log(`write: ${JSON.stringify(p)}`)
	})

	return new Promise((resolve, reject) => {
		sourceReadStream
			.on('error', reject)
			.pipe(targetStream)
			.on('error', reject)
			.on('close', resolve);
	});
}

/**
 * Creates a block device for the drive on this machine device named with the requested label.
 * @returns created device
 */
export const getTargetBlockDevice = async (mountLabel: string = 'C') => {
	const drives = await drivelist.list();

	const drive = drives.filter((d) => d.mountpoints.some(m => m.path.startsWith(mountLabel)))[0]
	return new BlockDevice({
		drive,
		unmountOnSuccess: false,
		direct: true,
		write: true,
		keepOriginal: true
	})
}
