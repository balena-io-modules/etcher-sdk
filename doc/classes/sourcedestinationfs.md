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

*Defined in [lib/source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceDestinationFs](sourcedestinationfs.md)*

## Properties

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/source-destination.ts:132](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L132)*

## Methods

###  close

▸ **close**(`_fd`: number, `callback`: function): *void*

*Defined in [lib/source-destination/source-destination.ts:142](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L142)*

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

*Defined in [lib/source-destination/source-destination.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L146)*

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

*Defined in [lib/source-destination/source-destination.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L134)*

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

*Defined in [lib/source-destination/source-destination.ts:162](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L162)*

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
