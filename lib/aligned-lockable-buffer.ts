import { getAlignedBuffer } from '@ronomon/direct-io';
import RWMutex = require('rwmutex');

export interface AlignedLockableBuffer extends Buffer {
	alignment: number;
	lock: () => Promise<() => void>;
	rlock: () => Promise<() => void>;
	slice: (start?: number, end?: number) => AlignedLockableBuffer;
	refCount: number;
	addRef: () => void;
	release: () => void;
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
	buffer.refCount = 0;
	buffer.addRef = () => {
		buffer.refCount++;
	};
	buffer.release = () => {
		if (buffer.refCount > 0) {
			buffer.refCount--;
		}
	};
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
		// Find a buffer with refCount === 0 (safe to reuse)
		for (let i = 0; i < this.numBuffers; i++) {
			const bufferIndex = (this.currentBufferIndex + i) % this.numBuffers;
			let buffer = this.buffers[bufferIndex];

			if (buffer === undefined) {
				// Create new buffer
				buffer = createBuffer(this.bufferSize, this.alignment);
				this.buffers[bufferIndex] = buffer;
			}

			if (buffer.refCount === 0) {
				// Found available buffer
				this.currentBufferIndex = (bufferIndex + 1) % this.numBuffers;
				buffer.addRef(); // Increment reference count
				return buffer;
			}
		}

		// All buffers are in use, create a new one (expand pool)
		const newBuffer = createBuffer(this.bufferSize, this.alignment);
		newBuffer.addRef();
		return newBuffer;
	}
}
