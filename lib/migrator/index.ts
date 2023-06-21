import * as process from 'process';
import * as checkDiskSpace from 'check-disk-space';
import { GPTPartition, MBRPartition } from 'partitioninfo';

import * as diskpart from '../diskpart';
import { File, BlockDevice } from '../source-destination';
import {
	copyPartitionFromImageToDevice,
	calcRequiredPartitionSize,
	getTargetBlockDevice,
	findNewPartitions,
	findFilesystemLabel
} from './helpers';
import { copyBootloaderFromImage } from './copy-bootloader';
import winCommands from './windows-commands';

import { promisify } from 'util';
import { exec as childExec } from 'child_process';
const execAsync = promisify(childExec);
import { constants as osConstants } from 'os';
import { existsSync } from 'fs'

/** Determine if running as administrator. */
async function isElevated(): Promise<boolean> {
    // `fltmc` is available on WinPE, XP, Vista, 7, 8, and 10
    // Works even when the "Server" service is disabled
    // See http://stackoverflow.com/a/28268802
    try {
        await execAsync('fltmc');
    } catch (error: any) {
        if (error.code === osConstants.errno.EPERM) {
            return false;
        }
        throw error;
    }
    return true;
}

function formatMB(bytes: number): string {
	return (bytes / (1024 * 1024)).toFixed(2)
}

/** 
 * A storage device that is the target for the migration. 
 * Collects useful attributes for the device from multiple sources.
 */
interface TargetDevice {
	/** (Windows) name for the device, like '\\.\PhysicalDrive0' */
	name: string;
	/** Etcher BlockDevice representation */
	etcher: BlockDevice
}

/** A partition on the target device. */
interface TargetPartition {
	/** Etcher representation */
	etcher?: GPTPartition | MBRPartition | null;
	/** Identifier for Windows volume */
	volumeId: string
}

/** Options for migrate(): */
export interface MigrateOptions {
	// don't perform these tasks; comma separated list like 'bootloader,reboot'
	omitTasks: string
}

/**
 * @summary Sets up a UEFI based computer running Windows to switch to balenaOS, and then reboots to execute the switch.
 * !!! WARNING !!! Running this function will OVERWRITE AND DESTROY the operating system running on this computer.
 *
 * Migration copies a balenaOS boot partition and rootA partition from an image file to
 * the computer's storage, as well as a bootloader to trigger booting into the boot
 * partition. The migration is executed as a sequence of tasks as shown below, and begins
 * with an implicit "analyze" task that always is performed.
 *
 * The migration may be re-run on a computer to support development or a failure in the
 * original run. A task may be omitted by listing it in the options.omitTasks parameter.
 *
 * * shrink -- shrink existing Windows partition as needed to accommodate the new partitions
 * * copy -- create/copy partitions from image
 * * bootloader -- copy/setup bootloader for new boot partition
 * * reboot -- actually execute the reboot
 *
 * @param {string} imagePath - balenaOS flasher image to use as source
 * @param {string} windowsPartition - partition label of the device where we want to add the new data; defauls to "C"
 * @param {string} deviceName - storage device name, default: '\\.\PhysicalDrive0'
 * @param {string} efiLabel - label to use when mounting the EFI partition, in case the default "M" is already in use
 * @param {MigrateOptions} options - various options to qualify how migrate runs
 * @returns
 */
export const migrate = async (
	imagePath: string,
	windowsPartition: string = 'C',
	deviceName: string = '\\\\.\\PhysicalDrive0',
	efiLabel: string = 'M',
	options: MigrateOptions = { omitTasks: '' }
) => {
	console.log(`Migrate ${deviceName} with image ${imagePath}`);
	try {
		const BOOT_PARTITION_INDEX = 1;
		const ROOTA_PARTITION_INDEX = 2;
		const BOOT_PARTITION_LABEL = 'flash-boot';
		const ROOTA_PARTITION_LABEL = 'flash-rootA';
		const BOOT_FILES_SOURCE_PATH = '/EFI/BOOT';
		const BOOT_FILES_TARGET_PATH = '/EFI/Boot';
		const REBOOT_DELAY_SEC = 10
		const ALL_TASKS = [ 'shrink', 'copy', 'bootloader', 'reboot'];

		// initial validations
		if (process.platform !== 'win32') {
			throw Error("Platform is not Windows");
		}
		if (!(await isElevated())) {
			throw Error("User is not administrator");
		}
		if (!existsSync(imagePath)) {
			throw Error(`Image ${imagePath} not found`);
		}

		const tasks = ALL_TASKS.filter(task => !options.omitTasks.includes(task));

		// Define objects for image file source for partitions, storage device target,
		// and the target's partition table.
		const sourceFile = new File({ path: imagePath });
		const targetDevice:TargetDevice = {
			name: deviceName,
			etcher: await getTargetBlockDevice(windowsPartition)
		}
		let etcherPartitions = await targetDevice.etcher.getPartitionTable()
		if (etcherPartitions === undefined) {
			throw Error("Can't read partition table");
		}
		// Log existing partitions for debugging
		console.log("\nPartitions on target:")
		for (const p of etcherPartitions.partitions) {
			// Satisfy TypeScript that p is not an MBRPartition even though we tested above on the table
			if (!('guid' in p)) {
				continue
			}
			console.log(`index ${p.index}, offset ${p.offset}, type ${p.type}`)
		}

		// Prepare to check for the balenaOS boot and rootA partitions already present.
		// If partitions not present, determine required partition sizes and free space.
		// Calculations are in units of bytes. However, on Windows, required sizes are in MB.
		let bootPartition:TargetPartition = {
			volumeId: '',
		}
		let rootAPartition:TargetPartition = {
			volumeId: '',
		}
		// Values are rounded up to the nearest MB due to tool limitations.
		let requiredBootSize = 0
		let requiredRootASize = 0

		// Look for boot partition on a FAT16 filesystem
		bootPartition.etcher = await findFilesystemLabel(etcherPartitions, targetDevice.etcher,
				BOOT_PARTITION_LABEL, 'fat16')
		if (bootPartition.etcher) {
			console.log(`Boot partition already exists at index ${bootPartition.etcher.index}`)
			bootPartition.volumeId = await diskpart.findVolume(targetDevice.name, BOOT_PARTITION_LABEL)
			console.log(`flasherBootPartition volume: ${bootPartition.volumeId}`)
		} else {
			console.log("Boot partition not found on target")
			requiredBootSize = await calcRequiredPartitionSize(sourceFile, BOOT_PARTITION_INDEX);
			console.log(`Require ${requiredBootSize} (${formatMB(requiredBootSize)} MB) for boot partition`);
		}
		// Look for rootA partition on an ext4 filesystem
		rootAPartition.etcher = await findFilesystemLabel(etcherPartitions, targetDevice.etcher,
				ROOTA_PARTITION_LABEL, 'ext4')
		if (rootAPartition.etcher) {
			console.log(`RootA partition already exists at index ${rootAPartition.etcher.index}`)
			rootAPartition.volumeId = await diskpart.findVolume(targetDevice.name, ROOTA_PARTITION_LABEL)
			console.log(`flasherRootAPartition volume: ${rootAPartition.volumeId}`)
		} else {
			console.log("RootA partition not found on target")
			requiredRootASize = await calcRequiredPartitionSize(sourceFile, ROOTA_PARTITION_INDEX);
			console.log(`Require ${requiredRootASize} (${formatMB(requiredRootASize)} MB) for rootA partition`)
		}
		const requiredFreeSize = requiredBootSize + requiredRootASize;

		// Shrink Windows partition as needed to provide required unallocated space.
		// Shrink amount must be for *all* of required space to ensure it is contiguous.
		// IOW, don't assume the shrink will merge with any existing unallocated space.
		if (requiredFreeSize) {
			const unallocSpace = (await diskpart.getUnallocatedSize(targetDevice.name)) * 1024;
			console.log(`Found ${unallocSpace} (${formatMB(unallocSpace)} MB) not allocated on disk ${targetDevice.name}`)

			if (unallocSpace < requiredFreeSize) {
				// must force upper case
				const freeSpace = await checkDiskSpace(`${windowsPartition.toUpperCase()}:\\`)
				if (freeSpace.free < requiredFreeSize) {
					throw Error(`Need at least ${requiredFreeSize} (${formatMB(requiredFreeSize)} MB) free on partition ${windowsPartition}`)
				}
				if (tasks.includes('shrink')) {
					console.log(`\nShrink partition ${windowsPartition} by ${requiredFreeSize} (${formatMB(requiredFreeSize)} MB)`);
					await diskpart.shrinkPartition(windowsPartition, requiredFreeSize / (1024 * 1024));
				} else {
					console.log(`\nSkip task: shrink partition ${windowsPartition} by ${requiredFreeSize} (${formatMB(requiredFreeSize)} MB)`);
				}
			} else{
				console.log("Unallocated space on target is sufficient for copy")
			}
		}

		if (tasks.includes('copy')) {
			// create partitions
			console.log("")		//force newline
			if (!bootPartition.etcher) {
				console.log("Create flasherBootPartition");
				await diskpart.createPartition(targetDevice.name, requiredBootSize / (1024 * 1024));
				const afterFirstPartitions = await targetDevice.etcher.getPartitionTable()
				const firstNewPartition = findNewPartitions(etcherPartitions, afterFirstPartitions);
				if (firstNewPartition.length !== 1) {
					throw Error(`Found ${firstNewPartition.length} new partitions for flasher boot, but expected 1`)
				}
				bootPartition.etcher = firstNewPartition[0];
				console.log(`Created new partition for boot at offset ${bootPartition.etcher.offset} with size ${bootPartition.etcher.size}`);
				etcherPartitions = afterFirstPartitions
			}

			if (!rootAPartition.etcher) {
				console.log("Create flasherRootAPartition");
				await diskpart.createPartition(targetDevice.name, requiredRootASize / (1024 * 1024));
				const afterSecondPartitions = await targetDevice.etcher.getPartitionTable()
				const secondNewPartition = findNewPartitions(etcherPartitions, afterSecondPartitions)
				if (secondNewPartition.length !== 1) {
					throw Error(`Found ${secondNewPartition.length} new partitions for flasher rootA, but expected 1`)
				}
				rootAPartition.etcher = secondNewPartition[0];
				console.log(`Created new partition for data at offset ${rootAPartition.etcher.offset} with size ${rootAPartition.etcher.size}`);
				etcherPartitions = afterSecondPartitions
			}

			// copy partition data
			console.log("Copy flasherBootPartition from image to disk");
			if (bootPartition.volumeId) {
				// Must ensure volume offline before overwrite.
				await diskpart.setPartitionOnlineStatus(bootPartition.volumeId, false)
			}
			// Sets volume online only if a new partition.
			await copyPartitionFromImageToDevice(sourceFile, 1, targetDevice.etcher, bootPartition.etcher!.offset);
			console.log("Copy complete")
			console.log("Copy flasherRootAPartition from image to disk");
			// We never set rootA partition online, so no need to offline.
			await copyPartitionFromImageToDevice(sourceFile, 2, targetDevice.etcher, rootAPartition.etcher!.offset);
			console.log("Copy complete")
		} else {
			console.log(`\nSkip task: create and copy partitions`)
		}

		if (tasks.includes('bootloader')) {
			// mount the boot partition and copy bootloader
			console.log("\nMount Windows boot partition and copy grub bootloader from image");
			winCommands.mountEfi(efiLabel);
			await copyBootloaderFromImage(imagePath, 1, BOOT_FILES_SOURCE_PATH, `${efiLabel ?? "M"}:${BOOT_FILES_TARGET_PATH}`);
			console.log("Copied grub bootloader files");

			// set boot file
			console.log("Set boot file");
			const setBootResult = await winCommands.setBoot();
			console.log("Boot file set.", setBootResult)
		} else {
			console.log("\nSkip task: bootloader setup");
		}

		if (tasks.includes('reboot')) {
			console.log("Migration complete, about to reboot");
			winCommands.shutdown.reboot(REBOOT_DELAY_SEC);
		} else {
			console.log("Skip task: reboot");
		}

	} catch (error) {
		console.log("Can't proceed with migration:", error);
		return;
	}
};
