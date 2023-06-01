import * as fileSystem from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

import { promisify } from 'util';
import { interact } from 'balena-image-fs';

const transformFile = async (
	fname: string,
	sourceRe: RegExp,
	replText: string,
) => {
	const data = await fsPromises.readFile(fname, 'utf-8');
	const newValue = data.replace(sourceRe, replText);
	await fsPromises.writeFile(fname, newValue, 'utf-8');
};

/**
 * Copies bootloader files from image partition to a local path. Also transforms
 * grub configuration files to provide a fallback boot to Windows if initial
 * boot to balenaOS fails.
 * @param {string} imagePath - Pathname for source balenaOS image file
 * @param {number} sourcePartition - 1-based index of partition within image containing bootloader
 * @param {string} sourceFolderPath - Pathname for source folder containing bootloader
 * @param {string} targetFolderPath - Pathname for target folder for bootloader
 * @returns
 */
export const copyBootloaderFromImage = async (
	imagePath: string,
	sourcePartition: number,
	sourceFolderPath: string,
	targetFolderPath: string,
) => {
	const filesToCopy = await interact(imagePath, sourcePartition, async (fs) => {
		return await promisify(fs.readdir)(sourceFolderPath);
	});

	for (const fileName of filesToCopy) {
		const fromPath = path
			.join(sourceFolderPath, fileName)
			.split('\\')
			.join('/');
		const toPath = path.join(targetFolderPath, fileName);
		console.log(`Copying: ${fromPath} \t~=>\t ${toPath}`);

		await interact(imagePath, sourcePartition, async (fs) => {
			const fromBalenaFile = fs.createReadStream(fromPath);
			const toTarget = fileSystem.createWriteStream(toPath);

			return await new Promise((resolve, reject) => {
				// danger zone
				fromBalenaFile
					.on('error', reject)
					.pipe(toTarget)
					.on('error', reject)
					.on('close', resolve);
			});
		});

		// add configuration for fallback boot to Windows
		if (process.platform === 'win32') {
			try {
				if (fileName.toLowerCase() === 'grubenv') {
					// replace #'s to maintain file size of 1024 bytes
					await transformFile(toPath, /^#{17}/m, 'next_entry=flash\n');
				} else if (fileName.toLowerCase() === 'grub.cfg') {
					const data = await fsPromises.readFile(toPath, 'utf-8');
					const newData = data.replace(
						/^default=boot/m,
						'load_env\nif [ "${next_entry}" != "" ] ; then\n   set default="${next_entry}"\n   set next_entry=\n   save_env next_entry\nelse\n   set default=windows\nfi',
					);
					// simplest to just append windows menuentry
					const newData2 = newData.concat(
						'\nmenuentry \x27windows\x27{\ninsmod chain\nsearch -s root -f /EFI/Microsoft/Boot/BCD\nchainloader /EFI/Microsoft/Boot/bootmgfw.efi\n}',
					);
					await fsPromises.writeFile(toPath, newData2, 'utf-8');
				}
			} catch (error) {
				throw new Error(`transformFile: ${error}`);
			}
		}
	}
};
