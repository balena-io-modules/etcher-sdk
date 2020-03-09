[etcher-sdk](../README.md) › [CRC32Hasher](crc32hasher.md)

# Class: CRC32Hasher

## Hierarchy

* **CRC32Hasher**

## Index

### Properties

* [value](crc32hasher.md#private-value)

### Methods

* [digest](crc32hasher.md#digest)
* [update](crc32hasher.md#update)

## Properties

### `Private` value

• **value**: *number*

*Defined in [lib/sparse-stream/shared.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/sparse-stream/shared.ts#L55)*

## Methods

###  digest

▸ **digest**(`_encoding`: "hex"): *string*

*Defined in [lib/sparse-stream/shared.ts:61](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/sparse-stream/shared.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`_encoding` | "hex" |

**Returns:** *string*

___

###  update

▸ **update**(`data`: Buffer): *void*

*Defined in [lib/sparse-stream/shared.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/sparse-stream/shared.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *void*
