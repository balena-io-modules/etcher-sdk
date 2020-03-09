[etcher-sdk](../README.md) › [SourceDestination](sourcedestination.md)

# Class: SourceDestination

## Hierarchy

* EventEmitter

  ↳ **SourceDestination**

  ↳ [SourceSource](sourcesource.md)

  ↳ [File](file.md)

  ↳ [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

  ↳ [MultiDestination](multidestination.md)

  ↳ [UsbbootDrive](usbbootdrive.md)

  ↳ [DriverlessDevice](driverlessdevice.md)

  ↳ [Http](http.md)

  ↳ [BalenaS3Source](balenas3source.md)

  ↳ [SingleUseStreamSource](singleusestreamsource.md)

## Index

### Properties

* [isOpen](sourcedestination.md#private-isopen)
* [metadata](sourcedestination.md#private-metadata)
* [defaultMaxListeners](sourcedestination.md#static-defaultmaxlisteners)
* [imageExtensions](sourcedestination.md#static-imageextensions)
* [mimetype](sourcedestination.md#static-optional-mimetype)
* [mimetypes](sourcedestination.md#static-private-mimetypes)

### Methods

* [_close](sourcedestination.md#protected-_close)
* [_getMetadata](sourcedestination.md#protected-_getmetadata)
* [_open](sourcedestination.md#protected-_open)
* [addListener](sourcedestination.md#addlistener)
* [canCreateReadStream](sourcedestination.md#cancreatereadstream)
* [canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](sourcedestination.md#cancreatewritestream)
* [canRead](sourcedestination.md#canread)
* [canWrite](sourcedestination.md#canwrite)
* [close](sourcedestination.md#close)
* [createReadStream](sourcedestination.md#createreadstream)
* [createSparseReadStream](sourcedestination.md#createsparsereadstream)
* [createSparseWriteStream](sourcedestination.md#createsparsewritestream)
* [createVerifier](sourcedestination.md#createverifier)
* [createWriteStream](sourcedestination.md#createwritestream)
* [emit](sourcedestination.md#emit)
* [eventNames](sourcedestination.md#eventnames)
* [getBlocks](sourcedestination.md#getblocks)
* [getInnerSource](sourcedestination.md#getinnersource)
* [getInnerSourceHelper](sourcedestination.md#private-getinnersourcehelper)
* [getMaxListeners](sourcedestination.md#getmaxlisteners)
* [getMetadata](sourcedestination.md#getmetadata)
* [getMimeTypeFromContent](sourcedestination.md#private-getmimetypefromcontent)
* [getMimeTypeFromName](sourcedestination.md#private-getmimetypefromname)
* [getPartitionTable](sourcedestination.md#getpartitiontable)
* [listenerCount](sourcedestination.md#listenercount)
* [listeners](sourcedestination.md#listeners)
* [on](sourcedestination.md#on)
* [once](sourcedestination.md#once)
* [open](sourcedestination.md#open)
* [prependListener](sourcedestination.md#prependlistener)
* [prependOnceListener](sourcedestination.md#prependoncelistener)
* [read](sourcedestination.md#read)
* [removeAllListeners](sourcedestination.md#removealllisteners)
* [removeListener](sourcedestination.md#removelistener)
* [setMaxListeners](sourcedestination.md#setmaxlisteners)
* [write](sourcedestination.md#write)
* [listenerCount](sourcedestination.md#static-listenercount)
* [register](sourcedestination.md#static-register)

## Properties

### `Private` isOpen

• **isOpen**: *boolean* = false

*Defined in [lib/source-destination/source-destination.ts:248](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L248)*

___

### `Private` metadata

• **metadata**: *[Metadata](../interfaces/metadata.md)*

*Defined in [lib/source-destination/source-destination.ts:247](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L247)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

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

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Defined in [lib/source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L244)*

___

### `Static` `Private` mimetypes

▪ **mimetypes**: *Map‹string, [SourceSource](sourcesource.md)›* = new Map<string, typeof SourceSource>()

*Defined in [lib/source-destination/source-destination.ts:245](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L245)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L353)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Defined in [lib/source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L287)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L349)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

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

*Defined in [lib/source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L264)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L268)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L276)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L272)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L256)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L260)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_emitProgress`: boolean, `_start`: number, `_end?`: undefined | number): *Promise‹ReadableStream›*

*Defined in [lib/source-destination/source-destination.ts:309](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L309)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_emitProgress` | boolean | false |
`_start` | number | 0 |
`_end?` | undefined &#124; number | - |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_generateChecksums`: boolean): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Defined in [lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_generateChecksums` | boolean | false |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Defined in [lib/source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L331)*

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Defined in [lib/source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(): *Promise‹WritableStream›*

*Defined in [lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L327)*

**Returns:** *Promise‹WritableStream›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

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

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L323)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L424)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

### `Private` getInnerSourceHelper

▸ **getInnerSourceHelper**(`mimetype?`: undefined | string): *Promise‹[SourceDestination](sourcedestination.md)‹››*

*Defined in [lib/source-destination/source-destination.ts:407](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L407)*

**Parameters:**

Name | Type |
------ | ------ |
`mimetype?` | undefined &#124; string |

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)‹››*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Private` getMimeTypeFromContent

▸ **getMimeTypeFromContent**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:391](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L391)*

**Returns:** *Promise‹string | undefined›*

___

### `Private` getMimeTypeFromName

▸ **getMimeTypeFromName**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:380](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L380)*

**Returns:** *Promise‹string | undefined›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L445)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

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

*Inherited from [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

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

*Defined in [lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L335)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

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

*Inherited from [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

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

*Defined in [lib/source-destination/source-destination.ts:291](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L291)*

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

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

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

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: Buffer, `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Defined in [lib/source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L300)*

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

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

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

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
