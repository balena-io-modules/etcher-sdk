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

*Defined in [lib/source-destination/source-destination.ts:92](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceDestinationFs](sourcedestinationfs.md)*

## Properties

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/source-destination.ts:94](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L94)*

## Methods

###  close

▸ **close**(`_fd`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L104)*

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

*Defined in [lib/source-destination/source-destination.ts:108](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L108)*

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

*Defined in [lib/source-destination/source-destination.ts:96](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L96)*

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

▸ **read**(`_fd`: number, `buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/8c389f5/lib/source-destination/source-destination.ts#L124)*

**Parameters:**

▪ **_fd**: *number*

▪ **buffer**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer)*

▪ **bufferOffset**: *number*

▪ **length**: *number*

▪ **sourceOffset**: *number*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null, `bytesRead?`: undefined | number, `buffer?`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |
`bytesRead?` | undefined &#124; number |
`buffer?` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |

**Returns:** *void*
