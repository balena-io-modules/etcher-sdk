import { getAlignedBuffer } from '@ronomon/direct-io';
import RWMutex = require('rwmutex');

export interface LockableBuffer extends Buffer {
	lock: () => Promise<() => void>;
	rlock: () => Promise<() => void>;
	slice: (start?: number, end?: number) => LockableBuffer;
}

function attachMutex(buf: Buffer, mutex: RWMutex): LockableBuffer {
	const buffer = buf as LockableBuffer;
	buffer.lock = mutex.lock.bind(mutex);
	buffer.rlock = mutex.rlock.bind(mutex);
	const bufferSlice = buffer.slice.bind(buffer);
	buffer.slice = (...args) => {
		const slice = bufferSlice(...args);
		return attachMutex(slice, mutex);
	};
	return buffer;
}

export function createBuffer(size: number, alignment: number): LockableBuffer {
	return attachMutex(getAlignedBuffer(size, alignment), new RWMutex());
}
