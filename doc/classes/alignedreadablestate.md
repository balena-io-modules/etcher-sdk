[etcher-sdk](../README.md) › [AlignedReadableState](alignedreadablestate.md)

# Class: AlignedReadableState

## Hierarchy

* **AlignedReadableState**

## Index

### Constructors

* [constructor](alignedreadablestate.md#constructor)

### Properties

* [alignment](alignedreadablestate.md#private-alignment)
* [bufferSize](alignedreadablestate.md#private-buffersize)
* [buffers](alignedreadablestate.md#private-buffers)
* [currentBufferIndex](alignedreadablestate.md#private-currentbufferindex)
* [numBuffers](alignedreadablestate.md#private-numbuffers)

### Methods

* [getCurrentBuffer](alignedreadablestate.md#getcurrentbuffer)

## Constructors

###  constructor

\+ **new AlignedReadableState**(`bufferSize`: number, `alignment`: number, `numBuffers`: number): *[AlignedReadableState](alignedreadablestate.md)*

*Defined in [lib/aligned-lockable-buffer.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`bufferSize` | number |
`alignment` | number |
`numBuffers` | number |

**Returns:** *[AlignedReadableState](alignedreadablestate.md)*

## Properties

### `Private` alignment

• **alignment**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L51)*

___

### `Private` bufferSize

• **bufferSize**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L50)*

___

### `Private` buffers

• **buffers**: *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)[]*

*Defined in [lib/aligned-lockable-buffer.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L46)*

___

### `Private` currentBufferIndex

• **currentBufferIndex**: *number* = 0

*Defined in [lib/aligned-lockable-buffer.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L47)*

___

### `Private` numBuffers

• **numBuffers**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L52)*

## Methods

###  getCurrentBuffer

▸ **getCurrentBuffer**(): *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*

*Defined in [lib/aligned-lockable-buffer.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/aligned-lockable-buffer.ts#L57)*

**Returns:** *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*
