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
import * as assert from 'assert';
import { expect } from 'chai';
import { promises as fs } from 'fs';
import 'mocha';

import { sourceDestination } from '../lib';
import { SourceSource } from '../lib/source-destination/source-source';

import { sparseStreamToBuffer, streamToBuffer } from '../lib/utils';

export type PartitionTableType = 'mbr' | 'gpt';

export class FakeBlockDevice extends sourceDestination.BlockDevice {
	protected async _open(): Promise<void> {
		// We need to call this class' grand-parent (File) methods as we don't want to unmount files.
		// ts-ignore because _open() and _close() are protected.
		// @ts-ignore
		await sourceDestination.File.prototype._open.call(this);
	}

	protected async _close(): Promise<void> {
		// @ts-ignore
		await sourceDestination.File.prototype._close.call(this);
	}
}

export async function blockDeviceFromFile(
	path: string,
): Promise<sourceDestination.BlockDevice> {
	const drive = {
		raw: path,
		device: path,
		devicePath: path,
		displayName: path,
		icon: 'some icon',
		isSystem: false,
		description: 'some description',
		mountpoints: [],
		size: (await fs.stat(path)).size,
		isReadOnly: false,
		busType: 'UNKNOWN',
		error: null,
		blockSize: 512,
		busVersion: null,
		enumerator: 'fake',
		isCard: null,
		isRemovable: true,
		isSCSI: false,
		isUAS: null,
		isUSB: true,
		isVirtual: false,
		logicalBlockSize: 512,
		partitionTableType: null,
	};
	return new FakeBlockDevice({
		drive,
		unmountOnSuccess: false,
		write: true,
		direct: false,
	});
}

export async function testImageNoIt(
	imagePath: string,
	compareToPath: string,
	alsoTestSparseStream: boolean,
	shouldHaveSize: boolean,
	shouldHaveCompressedSize: boolean | number, // if true, compare to the archive size; if number, compare to number
	sourceClass:
		| typeof sourceDestination.File
		| typeof sourceDestination.BlockDevice,
	partitionTableType?: PartitionTableType,
	partitionsFile?: string,
	expectedMetadata: any = {},
	innerSourceClass?: typeof sourceDestination.SourceSource,
): Promise<void> {
	let source: sourceDestination.File | sourceDestination.BlockDevice;
	if (sourceClass === sourceDestination.File) {
		source = new sourceDestination.File({ path: imagePath });
	} else {
		source = await blockDeviceFromFile(imagePath);
	}
	let innerSource: sourceDestination.SourceDestination;
	if (innerSourceClass === undefined) {
		innerSource = await source.getInnerSource();
	} else {
		innerSource = new innerSourceClass(source);
		await innerSource.open();
	}
	const sourceMetadata = await innerSource.getMetadata();
	const sourceStat = await fs.stat(imagePath);

	const compareSource = new sourceDestination.File({ path: compareToPath });
	await compareSource.open();
	const compareMetadata = await compareSource.getMetadata();
	const compareStat = await fs.stat(compareToPath);

	if (shouldHaveCompressedSize === true) {
		expect(sourceMetadata.compressedSize).to.equal(sourceStat.size);
	} else if (shouldHaveCompressedSize !== false) {
		expect(sourceMetadata.compressedSize).to.equal(shouldHaveCompressedSize);
	}

	if (shouldHaveSize) {
		expect(sourceMetadata.size).to.equal(compareMetadata.size);
		expect(sourceMetadata.size).to.equal(compareStat.size);
	}

	const compareToData = await streamToBuffer(
		await compareSource.createReadStream(),
	);

	const canCreateReadStream = await innerSource.canCreateReadStream();
	assert(canCreateReadStream);
	const sourceStream = await innerSource.createReadStream();
	const sourceStreamBuffer = await streamToBuffer(sourceStream);
	expect(sourceStreamBuffer).to.deep.equal(compareToData);

	if (alsoTestSparseStream) {
		const canCreateSparseReadStream =
			await innerSource.canCreateSparseReadStream();
		assert(canCreateSparseReadStream);
		const sourceSparseStream = await innerSource.createSparseReadStream();

		const sourceSparseStreamBuffer = await sparseStreamToBuffer(
			sourceSparseStream,
		);
		expect(sourceSparseStreamBuffer.length).to.be.at.most(compareToData.length);
		expect(sourceSparseStreamBuffer).to.deep.equal(
			compareToData.slice(0, sourceSparseStreamBuffer.length),
		);
	}

	if (partitionsFile !== undefined || partitionTableType !== undefined) {
		const sourcePartitionTable = await innerSource.getPartitionTable();
		if (partitionTableType !== undefined) {
			expect(sourcePartitionTable!.type).to.equal(partitionTableType);
		}
		if (partitionsFile !== undefined) {
			expect(sourcePartitionTable!.partitions).to.deep.equal(
				require(partitionsFile),
			);
		}
	}

	if (expectedMetadata !== undefined) {
		for (const [key, value] of Object.entries(expectedMetadata)) {
			// @ts-ignore
			expect(sourceMetadata[key]).to.deep.equal(value);
		}
	}

	await compareSource.close();
	await innerSource.close();
}

export function testImage(
	testName: string,
	imagePath: string,
	compareToPath: string,
	alsoTestSparseStream: boolean,
	shouldHaveSize: boolean,
	shouldHaveCompressedSize: boolean | number, // if true, compare to the archive size; if number, compare to number
	partitionTableType?: PartitionTableType,
	partitionsFile?: string,
	expectedMetadata: any = {},
	innerSourceClass?: typeof sourceDestination.SourceSource,
	only = false,
): void {
	for (const sourceClass of [
		sourceDestination.File,
		sourceDestination.BlockDevice,
	]) {
		const fn = only ? it.only : it;
		fn(
			`${testName} ${sourceClass.name}`,
			testImageNoIt.bind(
				null,
				imagePath,
				compareToPath,
				alsoTestSparseStream,
				shouldHaveSize,
				shouldHaveCompressedSize,
				sourceClass,
				partitionTableType,
				partitionsFile,
				expectedMetadata,
				innerSourceClass,
			),
		);
	}
}

export const DEFAULT_IMAGE_TESTS_TIMEOUT = 20000;

export function expectSourceSourceError(
	testName: string,
	filePath: string,
	Cls: typeof SourceSource,
	message: string,
) {
	it(testName, async function () {
		const source = new sourceDestination.File({ path: filePath });
		await source.open();
		const innerSource = new Cls(source);
		try {
			await innerSource.open();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal(message);
			return;
		} finally {
			await source.close();
		}
		assert(false);
	});
}

export function expectGetInnerSourceError(
	testName: string,
	filePath: string,
	message: string,
) {
	it(testName, async function () {
		const source = new sourceDestination.File({ path: filePath });
		try {
			await source.getInnerSource();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal(message);
			await source.close();
			return;
		}
		assert(false);
	});
}
