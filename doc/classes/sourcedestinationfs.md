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

*Defined in [lib/source-destination/source-destination.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceDestinationFs](sourcedestinationfs.md)*

## Properties

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/source-destination.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L99)*

## Methods

###  close

▸ **close**(`_fd`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:109](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L109)*

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

*Defined in [lib/source-destination/source-destination.ts:113](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L113)*

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

*Defined in [lib/source-destination/source-destination.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L101)*

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

*Defined in [lib/source-destination/source-destination.ts:129](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/source-destination/source-destination.ts#L129)*

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
