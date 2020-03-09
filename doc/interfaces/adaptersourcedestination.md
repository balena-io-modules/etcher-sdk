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

*Defined in [lib/scanner/adapters/adapter.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L27)*

___

###  device

• **device**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L24)*

___

###  devicePath

• **devicePath**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L25)*

___

###  emitsProgress

• **emitsProgress**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L30)*

___

###  isSystem

• **isSystem**: *boolean*

*Defined in [lib/scanner/adapters/adapter.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L26)*

___

###  mountpoints

• **mountpoints**: *Array‹object›*

*Defined in [lib/scanner/adapters/adapter.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L28)*

___

###  raw

• **raw**: *string | null*

*Defined in [lib/scanner/adapters/adapter.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L23)*

___

###  size

• **size**: *number | null*

*Defined in [lib/scanner/adapters/adapter.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/scanner/adapters/adapter.ts#L29)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[defaultMaxListeners](../classes/countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

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

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](../classes/sourcesource.md).[mimetype](../classes/sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L244)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_close](../classes/sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L353)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[_getMetadata](../classes/sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L287)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_open](../classes/sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L349)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

*Overrides [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:683

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  canCreateReadStream

▸ **canCreateReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateReadStream](../classes/sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L264)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseReadStream](../classes/sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L268)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateSparseWriteStream](../classes/sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L276)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canCreateWriteStream](../classes/sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L272)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canRead](../classes/sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L256)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](../classes/sourcesource.md).[canWrite](../classes/sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L260)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](../classes/sourcesource.md).[close](../classes/sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_emitProgress`: boolean, `_start`: number, `_end?`: undefined | number): *Promise‹ReadableStream›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createReadStream](../classes/sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/source-destination.ts:309](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_emitProgress` | boolean | false |
`_start` | number | 0 |
`_end?` | undefined &#124; number | - |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_generateChecksums`: boolean): *Promise‹[SparseReadable](sparsereadable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseReadStream](../classes/sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_generateChecksums` | boolean | false |

**Returns:** *Promise‹[SparseReadable](sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWritable](sparsewritable.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createSparseWriteStream](../classes/sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L331)*

**Returns:** *Promise‹[SparseWritable](sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](../classes/verifier.md)*

*Inherited from [SourceSource](../classes/sourcesource.md).[createVerifier](../classes/sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](../classes/verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(): *Promise‹WritableStream›*

*Inherited from [SourceSource](../classes/sourcesource.md).[createWriteStream](../classes/sourcesource.md#createwritestream)*

*Defined in [lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L327)*

**Returns:** *Promise‹WritableStream›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

*Overrides [SparseReadable](sparsereadable.md).[emit](sparsereadable.md#emit)*

Defined in node_modules/@types/node/base.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Inherited from [CountingWritable](../classes/countingwritable.md).[eventNames](../classes/countingwritable.md#eventnames)*

*Overrides [SparseReadable](sparsereadable.md).[eventNames](sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getBlocks](../classes/sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L323)*

**Returns:** *Promise‹[BlocksWithChecksum](blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getInnerSource](../classes/sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L424)*

**Returns:** *Promise‹[SourceDestination](../classes/sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[getMaxListeners](../classes/countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](metadata.md)›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getMetadata](../classes/sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](../classes/sourcesource.md).[getPartitionTable](../classes/sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L445)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

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

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

*Overrides [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:684

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

*Overrides [SparseReadable](sparsereadable.md).[once](sparsereadable.md#once)*

Defined in node_modules/@types/node/base.d.ts:685

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  open

▸ **open**(): *Promise‹void›*

*Inherited from [SourceSource](../classes/sourcesource.md).[open](../classes/sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L335)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

*Overrides [SparseReadable](sparsereadable.md).[prependListener](sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:686

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](sparsereadable.md).[prependOnceListener](sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:687

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  read

▸ **read**(`_buffer`: Buffer, `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[read](../classes/sourcesource.md#read)*

*Defined in [lib/source-destination/source-destination.ts:291](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L291)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | Buffer |
`_bufferOffset` | number |
`_length` | number |
`_sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[removeAllListeners](../classes/countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

*Overrides [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:688

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[setMaxListeners](../classes/countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: Buffer, `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](../classes/sourcesource.md).[write](../classes/sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L300)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | Buffer |
`_bufferOffset` | number |
`_length` | number |
`_fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:680

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

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
