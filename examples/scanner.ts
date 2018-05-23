import { scanner } from '../lib/';

const main = () => {
	const adapters: scanner.adapters.Adapter[] = [
		new scanner.adapters.BlockDeviceAdapter(true),
		new scanner.adapters.UsbbootDeviceAdapter(),
	];
	const deviceScanner = new scanner.Scanner(adapters);
	deviceScanner.on('attach', async (drive: scanner.adapters.AdapterSourceDestination) => {
		console.log('attach', drive);
		if (drive.emitsProgress) {
			drive.on('progress', (progress: number) => {
				console.log(drive, progress, '%');
			});
		}
	});
	deviceScanner.on('detach', (drive: scanner.adapters.AdapterSourceDestination) => {
		console.log('detach', drive);
	});
	deviceScanner.on('error', (error: Error) => {
		console.log('error', error);
	});
	deviceScanner.start();
	deviceScanner.on('ready', () => {
		const drive = deviceScanner.getBy('devicePath', 'pci-0000:00:14.0-usb-0:2:1.0-scsi-0:0:0:0');
		console.log('ready', drive)
	});
};

main();
