[etcher-sdk](../README.md) › [AdapterSourceDestination](adaptersourcedestination.md)

# Interface: AdapterSourceDestination

## Hierarchy

  ↳ [SourceDestination](../classes/sourcedestination.md)

  ↳ **AdapterSourceDestination**

## Implemented by

* [BlockDevice](../classes/blockdevice.md)
* [DriverlessDevice](../classes/driverlessdevice.md)
* [UsbBBbootDrive](../classes/usbbbbootdrive.md)
* [UsbbootDrive](../classes/usbbootdrive.md)

## Index

### Constructors

* [constructor](adaptersourcedestination.md#constructor)

### Properties

* [description](adaptersourcedestination.md#description)
* [device](adaptersourcedestination.md#device)
* [devicePath](adaptersourcedestination.md#devicepath)
* [emitsProgress](adaptersourcedestination.md#emitsprogress)
* [isSystem](adaptersourcedestination.md#issystem)
* [mountpoints](adaptersourcedestination.md#mountpoints)
* [raw](adaptersourcedestination.md#raw)
* [size](adaptersourcedestination.md#size)
* [defaultMaxListeners](adaptersourcedestination.md#static-defaultmaxlisteners)
* [imageExtensions](adaptersourcedestination.md#static-readonly-imageextensions)
* [mimetype](adaptersourcedestination.md#static-optional-readonly-mimetype)

### Methods

* [_close](adaptersourcedestination.md#protected-_close)
* [_getMetadata](adaptersourcedestination.md#protected-_getmetadata)
* [_open](adaptersourcedestination.md#protected-_open)
* [addListener](adaptersourcedestination.md#addlistener)
* [canCreateReadStream](adaptersourcedestination.md#cancreatereadstream)
* [canCreateSparseReadStream](adaptersourcedestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](adaptersourcedestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](adaptersourcedestination.md#cancreatewritestream)
* [canRead](adaptersourcedestination.md#canread)
* [canWrite](adaptersourcedestination.md#canwrite)
* [close](adaptersourcedestination.md#close)
* [createReadStream](adaptersourcedestination.md#createreadstream)
* [createSparseReadStream](adaptersourcedestination.md#createsparsereadstream)
* [createSparseWriteStream](adaptersourcedestination.md#createsparsewritestream)
* [createVerifier](adaptersourcedestination.md#createverifier)
* [createWriteStream](adaptersourcedestination.md#createwritestream)
* [emit](adaptersourcedestination.md#emit)
* [eventNames](adaptersourcedestination.md#eventnames)
* [getAlignment](adaptersourcedestination.md#getalignment)
* [getBlocks](adaptersourcedestination.md#getblocks)
* [getInnerSource](adaptersourcedestination.md#getinnersource)
* [getMaxListeners](adaptersourcedestination.md#getmaxlisteners)
* [getMetadata](adaptersourcedestination.md#getmetadata)
* [getPartitionTable](adaptersourcedestination.md#getpartitiontable)
* [listenerCount](adaptersourcedestination.md#listenercount)
* [listeners](adaptersourcedestination.md#listeners)
* [off](adaptersourcedestination.md#off)
* [on](adaptersourcedestination.md#on)
* [once](adaptersourcedestination.md#once)
* [open](adaptersourcedestination.md#open)
* [prependListener](adaptersourcedestination.md#prependlistener)
* [prependOnceListener](adaptersourcedestination.md#prependoncelistener)
* [rawListeners](adaptersourcedestination.md#rawlisteners)
* [read](adaptersourcedestination.md#read)
* [removeAllListeners](adaptersourcedestination.md#removealllisteners)
* [removeListener](adaptersourcedestination.md#removelistener)
* [setMaxListeners](adaptersourcedestination.md#setmaxlisteners)
* [write](adaptersourcedestination.md#write)
* [listenerCount](adaptersourcedestination.md#static-listenercount)
* [once](adaptersourcedestination.md#static-once)
* [register](adaptersourcedestination.md#static-register)

## Constructors

###  constructor

\+ **new AdapterSourceDestination**(): *[AdapterSourceDestination](adaptersourcedestination.md)*

*Inherited from [Verifier](../classes/verifier.md).[constructor](../classes/verifier.md#constructor)*

Defined in node_modules/@types/node/events.d.ts:10

**Returns:** *[AdapterSourceDestination](adaptersourcedestination.md)*

## Properties

###  description

• **description**: *string*

*Defined in [lib/scanner/adapters/adapter.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L27)*

___

###  device

• **device**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L24)*

___

###  devicePath

• **devicePath**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L25)*

___

###  emitsProgress

• **emitsProgress**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L30)*

___

###  isSystem

• **isSystem**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L26)*

___

###  mountpoints

• **mountpoints**: *Array‹object›*

*Defined in [lib/scanner/adapters/adapter.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L28)*

___

###  raw

• **raw**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L23)*

___

###  size

• **size**: *number | null*

*Defined in [lib/scanner/adapters/adapter.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/adapter.ts#L29)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[defaultMaxListeners](../classes/countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

___

### `Static` `Readonly` imageExtensions

▪ **imageExtensions**: *string[]* = [
		'img',
		'iso',
		'bin',
		'dsk',
		'hddimg',
		'raw',
		'dmg',
		'sdcard',
		'rpi-sdimg',
		'wic',
	]

*Inherited from [SourceSource](../classes/sourcesource.md).[imageExtensions](../classes/sourcesource.md#static-readonly-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L296)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](../classes/sourcesource.md).[mimetype](../classes/sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L308)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_close](../classes/sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:423](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L423)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[_getMetadata](../classes/sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L355)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_open](../classes/sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/source-destination.ts:419](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L419)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  canCreateReadStream

▸ **canCreateReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateReadStream](../classes/sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/source-destination.ts:332](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L332)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseReadStream](../classes/sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:336](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L336)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseWriteStream](../classes/sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L344)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateWriteStream](../classes/sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:340](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L340)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canRead](../classes/sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L324)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canWrite](../classes/sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:328](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L328)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](../classes/sourcesource.md).[close](../classes/sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:412](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L412)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_options`: [CreateReadStreamOptions](createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createReadStream](../classes/sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/source-destination.ts:377](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L377)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateReadStreamOptions](createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](sparsereadable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseReadStream](../classes/sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L383)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](sparsewritable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseWriteStream](../classes/sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:399](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L399)*

**Parameters:**

▪`Default value`  **_options**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹[SparseWritable](sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](../classes/verifier.md)*

*Inherited from [SourceSource](../classes/sourcesource.md).[createVerifier](../classes/sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:427](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L427)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](../classes/verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(`_options`: object): *Promise‹WritableStream›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createWriteStream](../classes/sourcesource.md#createwritestream)*

*Defined in [lib/source-destination/source-destination.ts:393](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L393)*

**Parameters:**

▪`Default value`  **_options**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹WritableStream›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[emit](sparsereadable.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [SparseReadable](sparsereadable.md).[eventNames](sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Inherited from [SourceSource](../classes/sourcesource.md).[getAlignment](../classes/sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:320](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L320)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getBlocks](../classes/sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:389](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L389)*

**Returns:** *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getInnerSource](../classes/sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:497](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L497)*

**Returns:** *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getMetadata](../classes/sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:348](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L348)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getPartitionTable](../classes/sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[listeners](sparsereadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[off](sparsereadable.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[once](sparsereadable.md#once)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  open

▸ **open**(): *Promise‹void›*

*Inherited from [SourceSource](../classes/sourcesource.md).[open](../classes/sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:405](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L405)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[prependListener](sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:567

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[prependOnceListener](sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:568

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[rawListeners](sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`_buffer`: [Buffer](alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[read](../classes/sourcesource.md#read)*

*Defined in [lib/source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | [Buffer](alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`_length` | number |
`_sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: [Buffer](alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[write](../classes/sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | [Buffer](alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`_length` | number |
`_fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

___

### `Static` once

▸ **once**(`emitter`: NodeEventTarget, `event`: string | symbol): *Promise‹any[]›*

*Inherited from [CountingWritable](../classes/countingwritable.md).[once](../classes/countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Inherited from [CountingWritable](../classes/countingwritable.md).[once](../classes/countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*

___

### `Static` register

▸ **register**(`Cls`: typeof SourceSource): *void*

*Inherited from [SourceSource](../classes/sourcesource.md).[register](../classes/sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
