[etcher-sdk](../README.md) › [SourceDisk](sourcedisk.md)

# Class: SourceDisk

## Hierarchy

* Disk

  ↳ **SourceDisk**

## Index

### Constructors

* [constructor](sourcedisk.md#constructor)

### Properties

* [capacity](sourcedisk.md#capacity)
* [discardIsZero](sourcedisk.md#discardiszero)
* [knownChunks](sourcedisk.md#readonly-knownchunks)
* [readOnly](sourcedisk.md#readonly)
* [recordReads](sourcedisk.md#recordreads)
* [recordWrites](sourcedisk.md#recordwrites)
* [source](sourcedisk.md#private-source)

### Methods

* [_flush](sourcedisk.md#protected-_flush)
* [_getCapacity](sourcedisk.md#protected-_getcapacity)
* [_read](sourcedisk.md#protected-_read)
* [_write](sourcedisk.md#protected-_write)
* [discard](sourcedisk.md#discard)
* [flush](sourcedisk.md#flush)
* [getCapacity](sourcedisk.md#getcapacity)
* [getDiscardedChunks](sourcedisk.md#getdiscardedchunks)
* [getRanges](sourcedisk.md#getranges)
* [getStream](sourcedisk.md#getstream)
* [getTransformStream](sourcedisk.md#gettransformstream)
* [read](sourcedisk.md#read)
* [write](sourcedisk.md#write)

## Constructors

###  constructor

\+ **new SourceDisk**(`source`: [SourceDestination](sourcedestination.md)): *[SourceDisk](sourcedisk.md)*

*Overrides void*

*Defined in [lib/source-destination/configured-source/configured-source.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceDisk](sourcedisk.md)*

## Properties

###  capacity

• **capacity**: *number | null*

*Inherited from [SourceDisk](sourcedisk.md).[capacity](sourcedisk.md#capacity)*

Defined in node_modules/file-disk/build/index.d.ts:32

___

###  discardIsZero

• **discardIsZero**: *boolean*

*Inherited from [SourceDisk](sourcedisk.md).[discardIsZero](sourcedisk.md#discardiszero)*

Defined in node_modules/file-disk/build/index.d.ts:30

___

### `Readonly` knownChunks

• **knownChunks**: *DiskChunk[]*

*Inherited from [SourceDisk](sourcedisk.md).[knownChunks](sourcedisk.md#readonly-knownchunks)*

Defined in node_modules/file-disk/build/index.d.ts:31

___

###  readOnly

• **readOnly**: *boolean*

*Inherited from [SourceDisk](sourcedisk.md).[readOnly](sourcedisk.md#readonly)*

Defined in node_modules/file-disk/build/index.d.ts:27

___

###  recordReads

• **recordReads**: *boolean*

*Inherited from [SourceDisk](sourcedisk.md).[recordReads](sourcedisk.md#recordreads)*

Defined in node_modules/file-disk/build/index.d.ts:29

___

###  recordWrites

• **recordWrites**: *boolean*

*Inherited from [SourceDisk](sourcedisk.md).[recordWrites](sourcedisk.md#recordwrites)*

Defined in node_modules/file-disk/build/index.d.ts:28

___

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L48)*

## Methods

### `Protected` _flush

▸ **_flush**(): *Promise‹void›*

*Overrides void*

*Defined in [lib/source-destination/configured-source/configured-source.ts:90](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L90)*

**Returns:** *Promise‹void›*

___

### `Protected` _getCapacity

▸ **_getCapacity**(): *Promise‹number›*

*Overrides void*

*Defined in [lib/source-destination/configured-source/configured-source.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L63)*

**Returns:** *Promise‹number›*

___

### `Protected` _read

▸ **_read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹ReadResult›*

*Overrides void*

*Defined in [lib/source-destination/configured-source/configured-source.ts:72](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

### `Protected` _write

▸ **_write**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Overrides void*

*Defined in [lib/source-destination/configured-source/configured-source.ts:81](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`_length` | number |
`_fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

###  discard

▸ **discard**(`offset`: number, `length`: number): *Promise‹void›*

*Inherited from [SourceDisk](sourcedisk.md).[discard](sourcedisk.md#discard)*

Defined in node_modules/file-disk/build/index.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`length` | number |

**Returns:** *Promise‹void›*

___

###  flush

▸ **flush**(): *Promise‹void›*

*Inherited from [SourceDisk](sourcedisk.md).[flush](sourcedisk.md#flush)*

Defined in node_modules/file-disk/build/index.d.ts:41

**Returns:** *Promise‹void›*

___

###  getCapacity

▸ **getCapacity**(): *Promise‹number›*

*Inherited from [SourceDisk](sourcedisk.md).[getCapacity](sourcedisk.md#getcapacity)*

Defined in node_modules/file-disk/build/index.d.ts:43

**Returns:** *Promise‹number›*

___

###  getDiscardedChunks

▸ **getDiscardedChunks**(): *DiskChunk[]*

*Inherited from [SourceDisk](sourcedisk.md).[getDiscardedChunks](sourcedisk.md#getdiscardedchunks)*

Defined in node_modules/file-disk/build/index.d.ts:45

**Returns:** *DiskChunk[]*

___

###  getRanges

▸ **getRanges**(`blockSize`: number): *Promise‹Range[]›*

*Inherited from [SourceDisk](sourcedisk.md).[getRanges](sourcedisk.md#getranges)*

Defined in node_modules/file-disk/build/index.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`blockSize` | number |

**Returns:** *Promise‹Range[]›*

___

###  getStream

▸ **getStream**(`position?`: undefined | number, `length?`: number | null, `highWaterMark?`: undefined | number): *Promise‹DiskStream›*

*Inherited from [SourceDisk](sourcedisk.md).[getStream](sourcedisk.md#getstream)*

Defined in node_modules/file-disk/build/index.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`position?` | undefined &#124; number |
`length?` | number &#124; null |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹DiskStream›*

___

###  getTransformStream

▸ **getTransformStream**(): *Transform*

*Inherited from [SourceDisk](sourcedisk.md).[getTransformStream](sourcedisk.md#gettransformstream)*

Defined in node_modules/file-disk/build/index.d.ts:38

**Returns:** *Transform*

___

###  read

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceDisk](sourcedisk.md).[read](sourcedisk.md#read)*

Defined in node_modules/file-disk/build/index.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  write

▸ **write**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceDisk](sourcedisk.md).[write](sourcedisk.md#write)*

Defined in node_modules/file-disk/build/index.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹WriteResult›*
