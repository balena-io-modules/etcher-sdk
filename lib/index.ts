import { Stream } from 'xxhash';

import { DmgSource } from './source-destination/dmg';
import { File, OpenFlags } from './source-destination/file';
import { Http } from './source-destination/http';
import { MultiDestination } from './source-destination/multi-destination';
import { streamToBuffer } from './utils';
import { createHasher, createVerifier } from './verification';
import { SourceDestination } from './source-destination/source-destination';
import { ZipSource } from './source-destination/zip';

// TODO: move this to examples

//const main = async () => {
//	return using(
//		File.fromPath('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img', OpenFlags.Read),
//		File.fromPath('./resin.img', OpenFlags.Write),
//		async (sourceFile: File, destinationFile: File) => {
//			const sourceStream = await sourceFile.createReadStream();
//			const destinationStream = await destinationFile.createWriteStream();
//			await new Promise((resolve, reject) => {
//				sourceStream.on('error', reject);
//				destinationStream.on('error', reject);
//				sourceStream.on('end', resolve);
//				sourceStream.pipe(destinationStream);
//			});
//		});
//};
//
//const main2 = async () => {
//	await using(
//		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', OpenFlags.Read),
//		File.fromPath('./macos.img', OpenFlags.Write),
//		async (sourceFile: File, destinationFile: File) => {
//			await using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
//				const sourceStream = await sourceDmg.createReadStream();
//				const destinationStream = await destinationFile.createWriteStream();
//				await new Promise((resolve, reject) => {
//					sourceStream.on('error', reject);
//					destinationStream.on('error', reject);
//					sourceStream.on('end', resolve);
//					sourceStream.pipe(destinationStream);
//				});
//			});
//		});
//};
//
//const main3 = async () => {
//	await using(
//		File.fromPath('/home/alexis/Téléchargements/macOS 10.13.1 High Sierra.dmg', OpenFlags.Read),
//		File.fromPath('./macos.img', OpenFlags.Write),
//		File.fromPath('./macos2.img', OpenFlags.Write),
//		async (sourceFile: File, destinationFile: File, destinationFile2: File) => {
//			await using(DmgSource.fromSource(sourceFile), async (sourceDmg: DmgSource) => {
//				const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
//				const sourceStream = await sourceDmg.createReadStream();
//				const destinationStream = await destination.createWriteStream();
//				await new Promise((resolve, reject) => {
//					sourceStream.on('error', reject);
//					destinationStream.on('error', reject);
//					sourceStream.on('end', resolve);
//					sourceStream.pipe(destinationStream);
//				});
//			});
//		});
//};
//

// source and destination need to be already open
const pipeSourceToDestination = async (
	source: SourceDestination,
	destination: SourceDestination,
	calculateSourceHash = false
): Promise<{ bytes: number, hash?: string }> => {
	// TODO: check capabilities + sparse
	const [ sourceStream, destinationStream ] = await Promise.all([ source.createReadStream(), destination.createWriteStream() ]);
	let bytes = 0;
	let hash: string | undefined = undefined;
	await new Promise((resolve: () => void, reject: (error: Error) => void) => {
		sourceStream.on('error', reject);
		sourceStream.on('data', (data) => {
			bytes += data.length
		});
		destinationStream.on('error', reject);
		if (calculateSourceHash) {
			const hasher = createHasher();
			hasher.on('error', reject);
			sourceStream.pipe(hasher);
			hasher.on('finish', async () => {
				hash = (await streamToBuffer(hasher)).toString('hex');
				resolve();
			});
		} else {
			sourceStream.on('end', resolve);
		}
		sourceStream.pipe(destinationStream);
	});
	return { bytes, hash };

}

const main4 = async () => {
	const verify = true;
	const sourceFile = new File('/home/alexis/Téléchargements/resin-rpi3-2.12.5+rev2-v7.1.18.img.zip', OpenFlags.Read);
	const sourceZip = new ZipSource(sourceFile);
	const destinationFile = new File('./resin.img', OpenFlags.ReadWrite);
	const destinationFile2 = new File('./resin2.img', OpenFlags.ReadWrite);
	//const destinationDrive = new BlockDevice('/dev/disk/by-path/pci-0000:00:14.0-usb-0:3:1.0-scsi-0:0:0:0');  // TODO
	const destination = new MultiDestination([ destinationFile, destinationFile2, /* destinationDrive */ ]);
	await Promise.all([ sourceZip.open(), destination.open() ]);
	try {
		const { bytes, hash } = await pipeSourceToDestination(sourceZip, destination, verify);
		if (verify && (hash !== undefined)) {
			const verifier = await createVerifier(destinationFile2, hash, bytes);
			await new Promise((resolve, reject) => {
				verifier.on('error', reject);
				verifier.on('success', resolve);
				//verifier.on('progress', console.log);
			});
			console.log('ok')
		}
	} finally {
		await Promise.all([ destination.close(), sourceZip.close() ]);
	}
};

const main5 = async () => {
	// TODO: hasher
	const sourceHttp = new Http('https://resin-staging-img.s3.amazonaws.com/images/artik10/2.3.0%2Brev1.dev/image/resin.img.zip');
	const sourceZip = new ZipSource(sourceHttp);
	const destinationFile = new File('./resin.img', OpenFlags.ReadWrite);
	const destinationFile2 = new File('./resin2.img', OpenFlags.ReadWrite);
	const destination = new MultiDestination([ destinationFile, destinationFile2 ]);
	await Promise.all([ sourceZip.open(), destination.open() ]);
	const [ sourceStream, destinationStream ] = await Promise.all([ sourceZip.createReadStream(), destination.createWriteStream() ]);
	const hasher = new Stream(0xDEADBEEF);
	await new Promise((resolve, reject) => {
		hasher.on('error', reject);
		sourceStream.on('error', reject);
		destinationStream.on('error', reject);
		sourceStream.on('end', resolve);
		sourceStream.pipe(destinationStream);
		sourceStream.pipe(hasher);
	});
	await Promise.all([ sourceZip.close(), destination.close() ]);
};

const wrapper = async () => {
	try {
		await main4();
	} catch (error) {
		console.log('error', error);
	}
};

wrapper();
