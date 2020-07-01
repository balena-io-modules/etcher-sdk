[etcher-sdk](../README.md) › [CRC32Hasher](crc32hasher.md)

# Class: CRC32Hasher

## Hierarchy

* **CRC32Hasher**

## Index

### Properties

* [crc32](crc32hasher.md#private-crc32)
* [value](crc32hasher.md#private-value)

### Methods

* [digest](crc32hasher.md#digest)
* [update](crc32hasher.md#update)

## Properties

### `Private` crc32

• **crc32**: *crc32* = getCrc().crc32

*Defined in [lib/sparse-stream/shared.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/eef9406/lib/sparse-stream/shared.ts#L64)*

___

### `Private` value

• **value**: *number*

*Defined in [lib/sparse-stream/shared.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/eef9406/lib/sparse-stream/shared.ts#L63)*

## Methods

###  digest

▸ **digest**(`_encoding`: "hex"): *string*

*Defined in [lib/sparse-stream/shared.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/eef9406/lib/sparse-stream/shared.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`_encoding` | "hex" |

**Returns:** *string*

___

###  update

▸ **update**(`data`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer)): *void*

*Defined in [lib/sparse-stream/shared.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/eef9406/lib/sparse-stream/shared.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |

**Returns:** *void*
