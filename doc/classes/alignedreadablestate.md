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

*Defined in [lib/aligned-lockable-buffer.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L55)*

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

*Defined in [lib/aligned-lockable-buffer.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L59)*

___

### `Private` bufferSize

• **bufferSize**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L58)*

___

### `Private` buffers

• **buffers**: *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)[]*

*Defined in [lib/aligned-lockable-buffer.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L54)*

___

### `Private` currentBufferIndex

• **currentBufferIndex**: *number* = 0

*Defined in [lib/aligned-lockable-buffer.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L55)*

___

### `Private` numBuffers

• **numBuffers**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L60)*

## Methods

###  getCurrentBuffer

▸ **getCurrentBuffer**(): *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*

*Defined in [lib/aligned-lockable-buffer.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L65)*

**Returns:** *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*
