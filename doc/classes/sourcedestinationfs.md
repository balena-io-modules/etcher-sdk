[etcher-sdk](../README.md) › [SourceDestinationFs](sourcedestinationfs.md)

# Class: SourceDestinationFs

## Hierarchy

* **SourceDestinationFs**

## Index

### Constructors

* [constructor](sourcedestinationfs.md#constructor)

### Properties

* [source](sourcedestinationfs.md#private-source)

### Methods

* [close](sourcedestinationfs.md#close)
* [fstat](sourcedestinationfs.md#fstat)
* [open](sourcedestinationfs.md#open)
* [read](sourcedestinationfs.md#read)

## Constructors

###  constructor

\+ **new SourceDestinationFs**(`source`: [SourceDestination](sourcedestination.md)): *[SourceDestinationFs](sourcedestinationfs.md)*

*Defined in [lib/source-destination/source-destination.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceDestinationFs](sourcedestinationfs.md)*

## Properties

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/source-destination.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L76)*

## Methods

###  close

▸ **close**(`_fd`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L86)*

**Parameters:**

▪ **_fd**: *number*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  fstat

▸ **fstat**(`_fd`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:90](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L90)*

**Parameters:**

▪ **_fd**: *number*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null, `stats?`: undefined | object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |
`stats?` | undefined &#124; object |

**Returns:** *void*

___

###  open

▸ **open**(`_path`: string, `_options`: any, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:78](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L78)*

**Parameters:**

▪ **_path**: *string*

▪ **_options**: *any*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null, `fd?`: undefined | number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |
`fd?` | undefined &#124; number |

**Returns:** *void*

___

###  read

▸ **read**(`_fd`: number, `buffer`: Buffer, `bufferOffset`: number, `length`: number, `sourceOffset`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:106](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L106)*

**Parameters:**

▪ **_fd**: *number*

▪ **buffer**: *Buffer*

▪ **bufferOffset**: *number*

▪ **length**: *number*

▪ **sourceOffset**: *number*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null, `bytesRead?`: undefined | number, `buffer?`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |
`bytesRead?` | undefined &#124; number |
`buffer?` | Buffer |

**Returns:** *void*
