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

import { expect } from 'chai';
import * as drivelist from 'drivelist';
import * as os from 'os';
import { stub } from 'sinon';

import { scanner } from '../lib';

async function createScanner(
	includeSystemDrives = false,
): Promise<scanner.Scanner> {
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.BlockDeviceAdapter({
			includeSystemDrives: () => includeSystemDrives,
		}),
	];
	const driveScanner = new scanner.Scanner(adapters);
	await new Promise((resolve, reject) => {
		driveScanner.once('error', (error: Error) => {
			driveScanner.stop();
			reject(error);
		});
		driveScanner.once('ready', resolve);
		driveScanner.start();
	});
	return driveScanner;
}

describe('Scanner', function() {
	describe('detected devices should be a Set', function() {
		beforeEach(async function() {
			this.driveScanner = await createScanner();
		});

		afterEach(function() {
			this.driveScanner.stop();
		});

		it('should emit an empty Set', async function() {
			expect(this.driveScanner.drives).to.be.an.instanceof(Set);
		});
	});

	describe('given only system available drives', function() {
		beforeEach(async function() {
			this.drivelistStub = stub(drivelist, 'list');
			this.drivelistStub.resolves([
				{
					device: '/dev/sda',
					description: 'WDC WD10JPVX-75J',
					size: 931500000000,
					mountpoints: [
						{
							path: '/',
						},
					],
					isSystem: true,
				},
			]);
			this.driveScanner = await createScanner();
		});

		afterEach(function() {
			this.driveScanner.stop();
			this.drivelistStub.restore();
		});

		it('should emit an empty Set', async function() {
			expect(this.driveScanner.drives.size).to.equal(0);
		});
	});

	describe('given linux', function() {
		beforeEach(function() {
			this.osPlatformStub = stub(os, 'platform');
			this.osPlatformStub.returns('linux');
		});

		afterEach(function() {
			this.osPlatformStub.restore();
		});

		describe('given available drives', function() {
			beforeEach(async function() {
				this.drivelistStub = stub(drivelist, 'list');
				this.drivelistStub.resolves([
					{
						device: '/dev/sda',
						displayName: '/dev/sda',
						description: 'WDC WD10JPVX-75J',
						size: 931500000000,
						mountpoints: [
							{
								path: '/',
							},
						],
						isSystem: true,
						isRemovable: false,
					},
					{
						device: '/dev/sdb',
						displayName: '/dev/sdb',
						description: 'Foo',
						size: 14000000000,
						mountpoints: [
							{
								path: '/mnt/foo',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
					{
						device: '/dev/sdc',
						displayName: '/dev/sdc',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: '/mnt/bar',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
				]);
				this.driveScanner = await createScanner();
			});

			afterEach(function() {
				this.driveScanner.stop();
				this.drivelistStub.restore();
			});

			it('should emit the non removable drives', function() {
				expect(
					// ignore because BlockDevice.drive is private
					// @ts-ignore
					Array.from(this.driveScanner.drives).map(d => d.drive),
				).to.deep.equal([
					{
						device: '/dev/sdb',
						displayName: '/dev/sdb',
						description: 'Foo',
						size: 14000000000,
						mountpoints: [
							{
								path: '/mnt/foo',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
					{
						device: '/dev/sdc',
						displayName: '/dev/sdc',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: '/mnt/bar',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
				]);
			});
		});
	});

	describe('given windows', function() {
		beforeEach(function() {
			this.osPlatformStub = stub(os, 'platform');
			this.osPlatformStub.returns('win32');
		});

		afterEach(function() {
			this.osPlatformStub.restore();
		});

		describe('given available drives', function() {
			beforeEach(async function() {
				this.drivelistStub = stub(drivelist, 'list');
				this.drivelistStub.resolves([
					{
						device: '\\\\.\\PHYSICALDRIVE1',
						displayName: 'C:',
						description: 'WDC WD10JPVX-75J',
						size: 931500000000,
						mountpoints: [
							{
								path: 'C:',
							},
						],
						isSystem: true,
						isRemovable: false,
					},
					{
						device: '\\\\.\\PHYSICALDRIVE2',
						displayName: '\\\\.\\PHYSICALDRIVE2',
						description: 'Foo',
						size: 14000000000,
						mountpoints: [],
						isSystem: false,
						isRemovable: false,
					},
					{
						device: '\\\\.\\PHYSICALDRIVE3',
						displayName: 'F:',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: 'F:',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
				]);
				this.driveScanner = await createScanner();
			});

			afterEach(function() {
				this.driveScanner.stop();
				this.drivelistStub.restore();
			});

			it('should emit the non removable drives', function() {
				expect(
					// ignore because BlockDevice.drive is private
					// @ts-ignore
					Array.from(this.driveScanner.drives).map(d => d.drive),
				).to.deep.equal([
					{
						device: '\\\\.\\PHYSICALDRIVE2',
						displayName: '\\\\.\\PHYSICALDRIVE2',
						description: 'Foo',
						size: 14000000000,
						mountpoints: [],
						isSystem: false,
						isRemovable: false,
					},
					{
						device: '\\\\.\\PHYSICALDRIVE3',
						displayName: 'F:',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: 'F:',
							},
						],
						isSystem: false,
						isRemovable: false,
					},
				]);
			});
		});

		describe('given a drive with a single drive letters', function() {
			beforeEach(async function() {
				this.drivelistStub = stub(drivelist, 'list');
				this.drivelistStub.resolves([
					{
						device: '\\\\.\\PHYSICALDRIVE3',
						raw: '\\\\.\\PHYSICALDRIVE3',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: 'F:',
							},
						],
						isSystem: false,
						isRemovable: true,
					},
				]);
				this.driveScanner = await createScanner();
			});

			afterEach(function() {
				this.driveScanner.stop();
				this.drivelistStub.restore();
			});

			it('should use the drive letter as the name', function() {
				expect(this.driveScanner.drives.size).to.equal(1);
				expect(
					// @ts-ignore
					Array.from(this.driveScanner.drives)[0].drive.displayName,
				).to.equal('F:');
			});
		});

		describe('given a drive with multiple drive letters', function() {
			beforeEach(async function() {
				this.drivelistStub = stub(drivelist, 'list');
				this.drivelistStub.resolves([
					{
						device: '\\\\.\\PHYSICALDRIVE3',
						raw: '\\\\.\\PHYSICALDRIVE3',
						description: 'Bar',
						size: 14000000000,
						mountpoints: [
							{
								path: 'F:',
							},
							{
								path: 'G:',
							},
							{
								path: 'H:',
							},
						],
						isSystem: false,
						isRemovable: true,
					},
				]);
				this.driveScanner = await createScanner();
			});

			afterEach(function() {
				this.driveScanner.stop();
				this.drivelistStub.restore();
			});

			it('should join all the mountpoints in `name`', function() {
				expect(this.driveScanner.drives.size).to.equal(1);
				expect(
					// @ts-ignore
					Array.from(this.driveScanner.drives)[0].drive.displayName,
				).to.equal('F:, G:, H:');
			});
		});
	});

	describe('given an error when listing the drives', function() {
		beforeEach(function() {
			this.drivelistStub = stub(drivelist, 'list');
			this.drivelistStub.rejects(new Error('scan error'));
		});

		afterEach(function() {
			this.drivelistStub.restore();
		});

		it('should emit the error', async function() {
			try {
				await createScanner();
			} catch (error) {
				expect(error).to.be.an.instanceof(Error);
				expect(error.message).to.equal('scan error');
				return;
			}
			expect(false).to.equal(true);
		});
	});
});
