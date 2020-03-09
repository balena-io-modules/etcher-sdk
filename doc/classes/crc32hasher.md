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

*Defined in [lib/sparse-stream/shared.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/shared.ts#L55)*

___

### `Private` value

• **value**: *number*

*Defined in [lib/sparse-stream/shared.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/shared.ts#L54)*

## Methods

###  digest

▸ **digest**(`_encoding`: "hex"): *string*

*Defined in [lib/sparse-stream/shared.ts:61](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/shared.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`_encoding` | "hex" |

**Returns:** *string*

___

###  update

▸ **update**(`data`: Buffer): *void*

*Defined in [lib/sparse-stream/shared.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/shared.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *void*
