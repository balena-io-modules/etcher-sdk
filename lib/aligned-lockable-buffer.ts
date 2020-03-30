import { getAlignedBuffer } from '@ronomon/direct-io';
import RWMutex = require('rwmutex');

export interface AlignedLockableBuffer extends Buffer {
	alignment: number;
	lock: () => Promise<() => void>;
	rlock: () => Promise<() => void>;
	slice: (start?: number, end?: number) => AlignedLockableBuffer;
}

function alignedLockableBufferSlice(
	this: AlignedLockableBuffer,
	start?: number,
	end?: number,
) {
	const slice = Buffer.prototype.slice.call(this, start, end);
	return attachMutex(slice, this.alignment, this.lock, this.rlock);
}

function attachMutex(
	buf: Buffer,
	alignment: number,
	lock: () => Promise<() => void>,
	rlock: () => Promise<() => void>,
): AlignedLockableBuffer {
	const buffer = buf as AlignedLockableBuffer;
	buffer.alignment = alignment;
	buffer.lock = lock;
	buffer.rlock = rlock;
	buffer.slice = alignedLockableBufferSlice;
	return buffer;
}

export function createBuffer(
	size: number,
	alignment: number,
): AlignedLockableBuffer {
	const mutex = new RWMutex();
	return attachMutex(
		getAlignedBuffer(size, alignment),
		alignment,
		mutex.lock.bind(mutex),
		mutex.rlock.bind(mutex),
	);
}

export function isAlignedLockableBuffer(
	buffer: Buffer,
): buffer is AlignedLockableBuffer {
	return 'rlock' in buffer;
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
