[etcher-sdk](../README.md) › [AdapterSourceDestination](adaptersourcedestination.md)

# Interface: AdapterSourceDestination

## Hierarchy

  ↳ [SourceDestination](../classes/sourcedestination.md)

  ↳ **AdapterSourceDestination**

## Implemented by

* [BlockDevice](../classes/blockdevice.md)
* [DriverlessDevice](../classes/driverlessdevice.md)
* [UsbbootDrive](../classes/usbbootdrive.md)

## Index

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
* [imageExtensions](adaptersourcedestination.md#static-imageextensions)
* [mimetype](adaptersourcedestination.md#static-optional-mimetype)

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
* [on](adaptersourcedestination.md#on)
* [once](adaptersourcedestination.md#once)
* [open](adaptersourcedestination.md#open)
* [prependListener](adaptersourcedestination.md#prependlistener)
* [prependOnceListener](adaptersourcedestination.md#prependoncelistener)
* [read](adaptersourcedestination.md#read)
* [removeAllListeners](adaptersourcedestination.md#removealllisteners)
* [removeListener](adaptersourcedestination.md#removelistener)
* [setMaxListeners](adaptersourcedestination.md#setmaxlisteners)
* [write](adaptersourcedestination.md#write)
* [listenerCount](adaptersourcedestination.md#static-listenercount)
* [register](adaptersourcedestination.md#static-register)

## Properties

###  description

• **description**: *string*

*Defined in [lib/scanner/adapters/adapter.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L27)*

___

###  device

• **device**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L24)*

___

###  devicePath

• **devicePath**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L25)*

___

###  emitsProgress

• **emitsProgress**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L30)*

___

###  isSystem

• **isSystem**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L26)*

___

###  mountpoints

• **mountpoints**: *Array‹object›*

*Defined in [lib/scanner/adapters/adapter.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L28)*

___

###  raw

• **raw**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L23)*

___

###  size

• **size**: *number | null*

*Defined in [lib/scanner/adapters/adapter.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/adapter.ts#L29)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[defaultMaxListeners](../classes/countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:896

___

### `Static` imageExtensions

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

*Inherited from [SourceSource](../classes/sourcesource.md).[imageExtensions](../classes/sourcesource.md#static-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L252)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](../classes/sourcesource.md).[mimetype](../classes/sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L264)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_close](../classes/sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:379](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L379)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[_getMetadata](../classes/sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:311](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L311)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_open](../classes/sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/source-destination.ts:375](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L375)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

*Overrides [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:898

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

*Defined in [lib/source-destination/source-destination.ts:288](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L288)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseReadStream](../classes/sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:292](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L292)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseWriteStream](../classes/sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L300)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateWriteStream](../classes/sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L296)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canRead](../classes/sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canWrite](../classes/sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:284](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L284)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](../classes/sourcesource.md).[close](../classes/sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L368)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_options`: [CreateReadStreamOptions](createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createReadStream](../classes/sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L333)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateReadStreamOptions](createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](sparsereadable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseReadStream](../classes/sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:339](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L339)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](sparsewritable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseWriteStream](../classes/sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L355)*

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

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L383)*

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

*Defined in [lib/source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L349)*

**Parameters:**

▪`Default value`  **_options**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹WritableStream›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

*Overrides [SparseReadable](sparsereadable.md).[emit](sparsereadable.md#emit)*

Defined in node_modules/@types/node/base.d.ts:908

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [CountingWritable](../classes/countingwritable.md).[eventNames](../classes/countingwritable.md#eventnames)*

*Overrides [SparseReadable](sparsereadable.md).[eventNames](sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Inherited from [SourceSource](../classes/sourcesource.md).[getAlignment](../classes/sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L276)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getBlocks](../classes/sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:345](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L345)*

**Returns:** *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getInnerSource](../classes/sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:452](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L452)*

**Returns:** *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[getMaxListeners](../classes/countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getMetadata](../classes/sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:304](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L304)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getPartitionTable](../classes/sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:473](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L473)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:910

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listeners](../classes/countingwritable.md#listeners)*

*Overrides [SparseReadable](sparsereadable.md).[listeners](sparsereadable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

*Overrides [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:899

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

*Inherited from [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

*Overrides [SparseReadable](sparsereadable.md).[once](sparsereadable.md#once)*

Defined in node_modules/@types/node/base.d.ts:900

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

*Defined in [lib/source-destination/source-destination.ts:361](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L361)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

*Overrides [SparseReadable](sparsereadable.md).[prependListener](sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:901

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

*Inherited from [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](sparsereadable.md).[prependOnceListener](sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:902

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

###  read

▸ **read**(`_buffer`: [Buffer](alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[read](../classes/sourcesource.md#read)*

*Defined in [lib/source-destination/source-destination.ts:315](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L315)*

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

*Inherited from [CountingWritable](../classes/countingwritable.md).[removeAllListeners](../classes/countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:904

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

*Overrides [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:903

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

*Inherited from [CountingWritable](../classes/countingwritable.md).[setMaxListeners](../classes/countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:905

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: [Buffer](alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[write](../classes/sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L324)*

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

Defined in node_modules/@types/node/base.d.ts:895

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

___

### `Static` register

▸ **register**(`Cls`: typeof SourceSource): *void*

*Inherited from [SourceSource](../classes/sourcesource.md).[register](../classes/sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:270](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
