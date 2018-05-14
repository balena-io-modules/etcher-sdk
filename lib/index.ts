import { using } from 'bluebird';

import { DmgSource } from './source-destination/dmg';
import { File, OpenFlags } from './source-destination/file';
import { Http } from './source-destination/http';
import { MultiDestination } from './source-destination/multi-destination';
import { ZipSource } from './source-destination/zip';

const main = async () => {
	return using(
		File.fromPath('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img', OpenFlags.Read),
		File.fromPath('./resin.img', OpenFlags.Write),
		async (sourceFile: File, destinationFile: File) => {
			const sourceStream = await sourceFile.createReadStream();
			const destinationStream = await destinationFile.createWriteStream();
			await new Promise((resolve, reject) => {
				sourceStream.on('error', reject);
				destinationStream.on('error', reject);
				sourceStream.on('end', resolve);
				sourceStream.pipe(destinationStream);
			});
		});
};

const main2 = async () => {
	await using(
		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', OpenFlags.Read),
		File.fromPath('./macos.img', OpenFlags.Write),
		async (sourceFile: File, destinationFile: File) => {
			await using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
				const sourceStream = await sourceDmg.createReadStream();
				const destinationStream = await destinationFile.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main3 = async () => {
	await using(
		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', OpenFlags.Read),
		File.fromPath('./macos.img', OpenFlags.Write),
		File.fromPath('./macos2.img', OpenFlags.Write),
		async (sourceFile: File, destinationFile: File, destinationFile2: File) => {
			await using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceDmg.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main4 = async () => {
	await using(
		File.fromPath('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img.zip', OpenFlags.Read),
		File.fromPath('./resin.img', OpenFlags.Write),
		File.fromPath('./resin2.img', OpenFlags.Write),
		async (sourceFile: File, destinationFile: File, destinationFile2: File) => {
			await using(ZipSource.fromSource(sourceFile), async (sourceZip: ZipSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceZip.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const main5 = async () => {
	await using(
		File.fromPath('./resin.img', OpenFlags.Write),
		File.fromPath('./resin2.img', OpenFlags.Write),
		async (destinationFile: File, destinationFile2: File) => {
			const sourceHttp = new Http('https://resin-staging-img.s3.amazonaws.com/images/artik10/2.3.0%2Brev1.dev/image/resin.img.zip');
			await using(ZipSource.fromSource(sourceHttp), async (sourceZip: ZipSource) => {
				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
				const sourceStream = await sourceZip.createReadStream();
				const destinationStream = await destination.createWriteStream();
				await new Promise((resolve, reject) => {
					sourceStream.on('error', reject);
					destinationStream.on('error', reject);
					sourceStream.on('end', resolve);
					sourceStream.pipe(destinationStream);
				});
			});
		});
};

const wrapper = async () => {
	try {
		await main5();
	} catch (error) {
		console.log('error', error);
	}
};

wrapper();
