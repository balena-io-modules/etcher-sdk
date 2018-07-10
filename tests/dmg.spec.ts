import { expect } from 'chai';
import 'mocha';
import { join } from 'path';

import { sourceDestination } from '../lib';
import { DEFAULT_IMAGE_TESTS_TIMEOUT, testImage  } from './tester';

const DATA_PATH = join(__dirname, 'data');
const IMAGES_PATH = join(DATA_PATH, 'images');
const DMG_PATH = join(DATA_PATH, 'dmg');

describe('dmg support', function() {
	this.timeout(DEFAULT_IMAGE_TESTS_TIMEOUT);

	const compressionMethods = [
		'raw',
		'adc',
		'zlib',
		'bz2',
		// NOTE: Skipped, as LZFSE is not supported by `udif` module yet
		// 'lzfse',
	];

	compressionMethods.forEach((compressionMethod) => {
		testImage(
			compressionMethod,
			join(DMG_PATH, `etcher-test-${compressionMethod}.dmg`),
			join(IMAGES_PATH, 'etcher-test.img'),
			false,  // alsoTestSparseStream  // TODO: test it once DmgSource.canCreateSparseReadStream() returns true
			true,  // shouldHaveSize
			true,   // shouldHaveCompressedSize
			'mbr',  // partitionTableType
			join(IMAGES_PATH, 'etcher-test-partitions.json'),  // partitionsFile
		);
	});

	it('invalid dmg file', async function() {
		const source = new sourceDestination.File(
			join(DATA_PATH, 'unrecognized', 'invalid.dmg'),
			sourceDestination.File.OpenFlags.Read,
		);
		await source.open();
		const dmgSource = new sourceDestination.DmgSource(source);
		try {
			await dmgSource.open();
		} catch (error) {
			expect(error).to.be.an.instanceof(Error);
			expect(error.message).to.equal('Invalid footer signature: Expected 0x6b6f6c79, saw 0x735179a8');
			await source.close();
			return;
		}
		expect(true).to.be.false;
	});
});
