import * as child_process from 'child_process';
import * as process from 'process';

const checkPlatform = () => {
	if (process.platform !== 'win32') {
		throw Error('This command can be run only on windows.');
	}
};

/**
 * Runs mountvol on windows; user has to be administrator
 * @param desiredLetter - the label to give to the mounted volume default "M"
 */
const mountEfi = (desiredLetter: string = 'M') => {
	checkPlatform();

	// unmount the letter
	// fails silently if not present, umounts if occupied
	try {
		child_process.execSync(`mountvol ${desiredLetter}: /D`);
	} catch (error) {
		// noop
	} finally {
		console.log(`Cleared up mount ${desiredLetter}: for EFI`);
	}

	try {
		child_process.execSync(`mountvol ${desiredLetter}: /S`);
	} catch (error) {
		throw new Error(`mountEfi: ${error}`);
	}
};

/**
 * Runs 'bcedit' to set the boot file; user has to be administrator
 * @param path - the file path to set; default: '\BOOT\bootx64.efi'
 * @returns the child process
 */
const setBoot = async (path: string = '\\EFI\\Boot\\bootx64.efi') => {
	checkPlatform();
	return new Promise((resolve, reject) => {
		child_process.exec(`bcdedit /set {bootmgr} path ${path}`, (err, stdout) => {
			if (err) {
				reject(`setBoot: ${err}${stdout ? `\n${stdout}` : ''}`);
			}
			resolve(stdout);
		});
	});
};

const shutdown = {
	reboot: (delay: number = 0) => {
		child_process.exec(`shutdown /r /t ${delay}`, function (err) {
			if (err) {
				throw Error(err.message);
			}
			console.log(`Rebooting in ${delay} seconds...`);
		});
	},
	now: () => {
		child_process.exec('shutdown /s /t 0', function (err) {
			if (err) {
				throw Error(err.message);
			}
			console.log('Shutting down');
		});
	},
};

export default {
	mountEfi,
	setBoot,
	shutdown,
};
