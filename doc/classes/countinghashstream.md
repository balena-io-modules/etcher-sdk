[etcher-sdk](../README.md) › [CountingHashStream](countinghashstream.md)

# Class: CountingHashStream

## Hierarchy

* any

  ↳ **CountingHashStream**

## Index

### Properties

* [bytesWritten](countinghashstream.md#byteswritten)

### Methods

* [__transform](countinghashstream.md#__transform)
* [_transform](countinghashstream.md#_transform)

## Properties

###  bytesWritten

• **bytesWritten**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L85)*

## Methods

###  __transform

▸ **__transform**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | [AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md), `encoding`: string): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; [AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md) |
`encoding` | string |

**Returns:** *Promise‹void›*

___

###  _transform

▸ **_transform**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | [AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md), `encoding`: string, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L104)*

**Parameters:**

▪ **chunk**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer) | [AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*
