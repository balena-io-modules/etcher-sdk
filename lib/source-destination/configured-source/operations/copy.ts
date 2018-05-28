import * as Bluebird from 'bluebird';
import { Disk } from 'file-disk';
import * as _ from 'lodash';
import { interact, AsyncFsLike } from 'resin-image-fs';

const copy = async (sourceFs: AsyncFsLike, sourcePath: string, destinationFs: AsyncFsLike, destinationPath: string): Promise<void> => {
	const readStream = sourceFs.createReadStream(`/${sourcePath}`);
	const writeStream = destinationFs.createWriteStream(`/${destinationPath}`);
	await new Promise((resolve: () => void, reject: (e: Error) => void) => {
		readStream
		.on('error', reject)
		.pipe(writeStream)
		.on('error', reject)
		.on('close', resolve);
	});
};

export const execute = async (operation: any, disk: Disk) => {
	const source = _.get(operation, 'from.partition');
	const destination = _.get(operation, 'to.partition');
	if (_.isUndefined(source) || _.isUndefined(destination)) {
		throw new Error('copy operation needs from and to properties');
	}
	if (source === destination) {
		await Bluebird.using(interact(disk, source), async (fs: AsyncFsLike) => {
			await copy(fs, operation.from.path, fs, operation.to.path);
		});
	} else {
		await Bluebird.using(interact(disk, source), interact(disk, destination), async (sourceFs: AsyncFsLike, destinationFs: AsyncFsLike) => {
			await copy(sourceFs, operation.from.path, destinationFs, operation.to.path);
		});
	}
};
