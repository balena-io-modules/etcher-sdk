import { writeFile } from 'fs/promises';
import * as process from 'process';
import * as drivelist from 'drivelist'
import { GetPartitionsResult, GPTPartition, MBRPartition } from 'partitioninfo';
import { BlockDevice, SourceDestination, File } from '../source-destination';
import { WifiProfile } from './netsh'

export const MS_DATA_PARTITION_ID = 'EBD0A0A2-B9E5-4433-87C0-68B6B72699C7'

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
 * Scans the filesystem on the partitions for the provided device for the filesystem
 * label text, assuming the filesystem is the provided type.
 *
 * Partition type must be GPT.
 * 
 * @returns partition containing the label, or null if not found
 */
export const findFilesystemLabel = async (
	table: GetPartitionsResult,
	device: BlockDevice,
	label: string,
	fs: 'fat16' | 'ext4'
): Promise<GPTPartition | MBRPartition | null> => {

	if (table.type == 'mbr') {
		throw Error("Can't read MBR table")
	}
	// Only check non-system partitions on Windows
	let partitions = table.partitions
	if (process.platform == 'win32') {
		partitions = table.partitions.filter(p => p.type.toUpperCase() == MS_DATA_PARTITION_ID)
	}
	// Determine label offset
	let offset = 0
	if (fs == 'fat16') {
		// https://en.wikipedia.org/wiki/Desian_of_the_FAT_file_system#Extended_BIOS_Parameter_Block
		offset = 0x2B
	} else if (fs == 'ext4') {
		// https://www.kernel.org/doc/html/latest/filesystems/ext4/index.html
		offset = 0x400 + 0x78
	}

	let buf = Buffer.alloc(label.length)
	for (const p of partitions) {
		// Satisfy TypeScript that p is not an MBRPartition even though we tested above on the table
		if (! ('guid' in p)) {
			continue
		}
		await device.read(buf, 0, buf.length, p.offset + offset)
		if (buf.toString() == label) {
			return p;
		}
	}
	return null
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
 * the provided source partition. On Windows, rounds up to nearest MB due to
 * limitations of partitioning tools.
 * 
 * @param {SourceDestination} source - Device containing requested partition
 * @param {number} partitionIndex - 1-based index of requested partition
 * @returns calculated size in bytes
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
	if (process.platform == 'win32') {
		let sizeMB = Math.ceil((sourcePartitionSize + alignmentBuffer) / (1024 * 1024));
		return sizeMB * 1024 * 1024;
	} else {
		return sourcePartitionSize + alignmentBuffer;
    }
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

/** Generates the contents for a balenaOS network configuration file. */
const generateWifiConfig = (profile: WifiProfile): string => {
	return `[connection]
id=resin-wifi
type=wifi

[wifi]
mode=infrastructure
ssid=${profile.name}

[wifi-security]
auth-alg=open
key-mgmt=wpa-psk
psk=${profile.key}

[ipv4]
method=auto

[ipv6]
addr-gen-mode=stable-privacy
method=auto
`
}

/**
 * Writes a balenaOS network configuration file for the provided WiFi profile.
 */
export const writeNetworkConfig = async (profile: WifiProfile) => {
	const config = generateWifiConfig(profile)
	await writeFile('wifi-config', config)
}
