import * as assert from 'assert';
import 'mocha';
import { platform } from 'os';

describe('test cross-platform support', async () => {
	const driverless = await (
		await import('../lib/scanner/adapters')
	).DriverlessDeviceAdapter;
	describe('windows', () => {
		it('should contain driverless adapter', () => {
			if (platform() === 'win32') {
				// windows should contain it, even if empty
				assert(driverless !== undefined);
			}
		});
	});
	describe('other OSes', () => {
		it('should not contain driverless adapter', () => {
			if (platform() !== 'win32') {
				// macOS/Linux etc. shouldn't contain the driverless adapter
				assert(driverless === undefined);
			}
		});
	});
});
