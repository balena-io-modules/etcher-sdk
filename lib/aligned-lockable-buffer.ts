import { getAlignedBuffer } from '@ronomon/direct-io';
import RWMutex = require('rwmutex');

export interface AlignedLockableBuffer extends Buffer {
	alignment: number;
	lock: () => Promise<() => void>;
	rlock: () => Promise<() => void>;
	slice: (start?: number, end?: number) => AlignedLockableBuffer;
}

function attachMutex(
	buf: Buffer,
	mutex: RWMutex,
	alignment: number,
): AlignedLockableBuffer {
	const buffer = buf as AlignedLockableBuffer;
	buffer.alignment = alignment;
	buffer.lock = mutex.lock.bind(mutex);
	buffer.rlock = mutex.rlock.bind(mutex);
	const bufferSlice = buffer.slice.bind(buffer);
	buffer.slice = (...args) => {
		const slice = bufferSlice(...args);
		return attachMutex(slice, mutex, alignment);
	};
	return buffer;
}

export function createBuffer(
	size: number,
	alignment: number,
): AlignedLockableBuffer {
	return attachMutex(
		getAlignedBuffer(size, alignment),
		new RWMutex(),
		alignment,
	);
}

export function isAlignedLockableBuffer(
	buffer: Buffer,
): buffer is AlignedLockableBuffer {
	return (buffer as AlignedLockableBuffer).rlock !== undefined;
}

export class AlignedReadableState {
	private buffers: AlignedLockableBuffer[];
	private currentBufferIndex = 0;

	constructor(
		private bufferSize: number,
		private alignment: number,
		private numBuffers: number,
	) {
		this.buffers = new Array(numBuffers);
	}

	public getCurrentBuffer(): AlignedLockableBuffer {
		let buffer = this.buffers[this.currentBufferIndex];
		if (buffer === undefined) {
			buffer = createBuffer(this.bufferSize, this.alignment);
			this.buffers[this.currentBufferIndex] = buffer;
		}
		this.currentBufferIndex = (this.currentBufferIndex + 1) % this.numBuffers;
		return buffer;
	}
}
