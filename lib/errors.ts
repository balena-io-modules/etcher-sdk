import { platform } from 'process';

export class NotCapable extends Error {
}

export class VerificationError extends Error {
}

/**
 * @summary Determine whether an error is considered a
 * transient occurrence, and the operation should be retried
 * Errors considered potentially temporary are:
 *   - Mac OS: ENXIO, EBUSY
 *   - Windows: ENOENT, UNKNOWN
 *   - Linux: EIO, EBUSY
 */
export function isTransientError(error: NodeJS.ErrnoException): boolean {
	if (platform === 'darwin') {
		return error.code === 'ENXIO' || error.code === 'EBUSY';
	} else if (platform === 'linux') {
		return error.code === 'EIO' || error.code === 'EBUSY';
	} else if (platform === 'win32') {
		return error.code === 'ENOENT' || error.code === 'UNKNOWN';
	}
	return false;
}
