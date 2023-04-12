import * as process from 'process';
import * as checkDiskSpace from 'check-disk-space';

import * as diskpart from '../diskpart';
import { File } from '../source-destination';
import {
	copyPartitionFromImageToDevice,
	calcRequiredPartitionSize,
	getTargetBlockDevice,
	findNewPartitions
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

/**
 * @summary Sets up a UEFI based computer running Windows to switch to balenaOS, and then reboots to execute the switch.
 * !!! WARNING !!! Running this function will OVERWRITE AND DESTROY the operating system running on this computer.
 * 
 * @param {string} imagePath - balenaOS flasher image to use as source
 * @param {string} windowsPartition - partition label of the device where we want to add the new data; defauls to "C"
 * @param {string} deviceName - storage device name, default: '\\.\PhysicalDrive0'
 * @param {string} efiLabel - label to use when mounting the EFI partition, in case the default "M" is already in use
 * @returns
 */
export const migrate = async (
	imagePath: string,
	windowsPartition: string = 'C',
	deviceName: string = '\\\\.\\PhysicalDrive0',
	efiLabel: string = 'M'
) => {
	console.log(`Migrate ${deviceName} with image ${imagePath}`);
	try {
		const BOOT_PARTITION_INDEX = 1;
		const ROOTA_PARTITION_INDEX = 2;
		const BOOT_FILES_SOURCE_PATH = '/EFI/BOOT';
		const BOOT_FILES_TARGET_PATH = '/EFI/Boot';
		const REBOOT_DELAY_SEC = 10

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

		// determine required partition sizes and free space
		const source = new File({ path: imagePath });
		const requiredBootSize = await calcRequiredPartitionSize(source, BOOT_PARTITION_INDEX);
		console.log(`Require ${requiredBootSize} MB for boot partition`);
		const requiredRootASize = await calcRequiredPartitionSize(source, ROOTA_PARTITION_INDEX);
		console.log(`Require ${requiredRootASize} MB for rootA partition`);
		const requiredFreeSize = requiredBootSize + requiredRootASize;

		const unallocSpace = (await diskpart.getUnallocatedSize(deviceName)) / 1024;
		console.log(`Found ${unallocSpace} MB not allocated on disk ${deviceName}`)

		// Shrink partition as needed to provide required unallocated space.
		// Shrink amount must be for *all* of required space to ensure it is contiguous.
        // IOW, don't assume the shrink will merge with any existing unallocated space.
		if (unallocSpace < requiredFreeSize) {
			// must force upper case
			const freeSpace = await checkDiskSpace(`${windowsPartition.toUpperCase()}:\\`)
			if ((freeSpace.free / 1024 / 1024) < requiredFreeSize) {
				throw Error(`Need at least ${requiredFreeSize} MB free on partition ${windowsPartition}`)
			}
			console.log(`Shrink partition ${windowsPartition} by ${requiredFreeSize} MB`);
			await diskpart.shrinkPartition(windowsPartition, requiredFreeSize);
		}

		// create partitions
		// device from file, containing source partitions
		const targetDevice = await getTargetBlockDevice(windowsPartition)
		const originalPartitions = await targetDevice.getPartitionTable()

		console.log("Create flasherBootPartition");
		await diskpart.createPartition(deviceName, requiredBootSize);
		const afterFirstPartitions = await targetDevice.getPartitionTable()
		const firstNewPartition = findNewPartitions(originalPartitions, afterFirstPartitions);
		if (firstNewPartition.length !== 1) {
			throw Error(`Found ${firstNewPartition.length} new partitions for flasher boot, but expected 1`)
		}
		const targetBootPartition = firstNewPartition[0];
		console.log(`Created new partition for boot at offset ${targetBootPartition.offset} with size ${targetBootPartition.size}`);

		console.log("Create flasherRootAPartition");
		await diskpart.createPartition(deviceName, requiredRootASize);
		const afterSecondPartitions = await targetDevice.getPartitionTable()
		const secondNewPartition = findNewPartitions(afterFirstPartitions, afterSecondPartitions)
		if (secondNewPartition.length !== 1) {
			throw Error(`Found ${secondNewPartition.length} new partitions for flasher rootA, but expected 1`)
		}
		const targetRootAPartition = secondNewPartition[0];
		console.log(`Created new partition for data at offset ${targetRootAPartition.offset} with size ${targetRootAPartition.size}`);

		// copy partition data
		console.log("Copy flasherBootPartition from image to disk");
		await copyPartitionFromImageToDevice(source, 1, targetDevice, targetBootPartition.offset);
		console.log("Copy flasherRootAPartition from image to disk");
		await copyPartitionFromImageToDevice(source, 2, targetDevice, targetRootAPartition.offset);

		// mount the boot partition and copy bootloader
		console.log("Mount Windows boot partition and copy grub bootloader from image");
		winCommands.mountEfi(efiLabel);
		await copyBootloaderFromImage(imagePath, 1, BOOT_FILES_SOURCE_PATH, `${efiLabel ?? "M"}:${BOOT_FILES_TARGET_PATH}`);
		console.log("Copied grub bootloader files");

		// set boot file
		console.log("Set boot file");
		const setBootResult = await winCommands.setBoot();
		console.log("Boot file set.", setBootResult)

		// reboot
		console.log("Migration complete, about to reboot");
		winCommands.shutdown.reboot(REBOOT_DELAY_SEC);

	} catch (error) {
		console.log("Can't proceed with migration:", error);
		return;
	}
};
