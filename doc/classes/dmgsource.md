[etcher-sdk](../README.md) › [DmgSource](dmgsource.md)

# Class: DmgSource

## Hierarchy

  ↳ [SourceSource](sourcesource.md)

  ↳ **DmgSource**

## Index

### Constructors

* [constructor](dmgsource.md#constructor)

### Properties

* [image](dmgsource.md#private-image)
* [source](dmgsource.md#protected-source)
* [defaultMaxListeners](dmgsource.md#static-defaultmaxlisteners)
* [imageExtensions](dmgsource.md#static-imageextensions)
* [mappedBlockTypes](dmgsource.md#static-private-mappedblocktypes)
* [mimetype](dmgsource.md#static-mimetype)
* [requiresRandomReadableSource](dmgsource.md#static-requiresrandomreadablesource)

### Methods

* [_close](dmgsource.md#protected-_close)
* [_getMetadata](dmgsource.md#protected-_getmetadata)
* [_open](dmgsource.md#protected-_open)
* [addListener](dmgsource.md#addlistener)
* [canCreateReadStream](dmgsource.md#cancreatereadstream)
* [canCreateSparseReadStream](dmgsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](dmgsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](dmgsource.md#cancreatewritestream)
* [canRead](dmgsource.md#canread)
* [canWrite](dmgsource.md#canwrite)
* [close](dmgsource.md#close)
* [createReadStream](dmgsource.md#createreadstream)
* [createSparseReadStream](dmgsource.md#createsparsereadstream)
* [createSparseWriteStream](dmgsource.md#createsparsewritestream)
* [createVerifier](dmgsource.md#createverifier)
* [createWriteStream](dmgsource.md#createwritestream)
* [emit](dmgsource.md#emit)
* [eventNames](dmgsource.md#eventnames)
* [getBlocks](dmgsource.md#getblocks)
* [getInnerSource](dmgsource.md#getinnersource)
* [getMaxListeners](dmgsource.md#getmaxlisteners)
* [getMetadata](dmgsource.md#getmetadata)
* [getPartitionTable](dmgsource.md#getpartitiontable)
* [listenerCount](dmgsource.md#listenercount)
* [listeners](dmgsource.md#listeners)
* [on](dmgsource.md#on)
* [once](dmgsource.md#once)
* [open](dmgsource.md#open)
* [prependListener](dmgsource.md#prependlistener)
* [prependOnceListener](dmgsource.md#prependoncelistener)
* [read](dmgsource.md#read)
* [removeAllListeners](dmgsource.md#removealllisteners)
* [removeListener](dmgsource.md#removelistener)
* [setMaxListeners](dmgsource.md#setmaxlisteners)
* [write](dmgsource.md#write)
* [listenerCount](dmgsource.md#static-listenercount)
* [register](dmgsource.md#static-register)

## Constructors

###  constructor

\+ **new DmgSource**(`source`: [SourceDestination](sourcedestination.md)): *[DmgSource](dmgsource.md)*

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [lib/source-destination/dmg.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[DmgSource](dmgsource.md)*

## Properties

### `Private` image

• **image**: *UDIFImage*

*Defined in [lib/source-destination/dmg.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L44)*

___

### `Protected` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#protected-source)*

*Defined in [lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-source.ts#L22)*

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

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Private` mappedBlockTypes

▪ **mappedBlockTypes**: *number[]* = [
		BLOCK.RAW,
		BLOCK.UDCO,
		BLOCK.UDZO,
		BLOCK.UDBZ,
		BLOCK.LZFSE,
	]

*Defined in [lib/source-destination/dmg.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L35)*

___

### `Static` mimetype

▪ **mimetype**: *"application/x-apple-diskimage"* = "application/x-apple-diskimage"

*Overrides [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/dmg.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L43)*

___

### `Static` requiresRandomReadableSource

▪ **requiresRandomReadableSource**: *boolean* = true

*Overrides [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#static-requiresrandomreadablesource)*

*Defined in [lib/source-destination/dmg.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L42)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_close](sourcesource.md#protected-_close)*

*Defined in [lib/source-destination/dmg.ts:136](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L136)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/dmg.ts:123](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L123)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#protected-_open)*

*Defined in [lib/source-destination/dmg.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L131)*

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

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/dmg.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L51)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/dmg.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L55)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L276)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L272)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L256)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L260)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_emitProgress`: boolean, `start`: number, `end?`: undefined | number): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/dmg.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L59)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_emitProgress` | boolean | false |
`start` | number | 0 |
`end?` | undefined &#124; number | - |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_generateChecksums`: boolean): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/dmg.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`_generateChecksums` | boolean |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L331)*

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Inherited from [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

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

*Inherited from [SourceSource](sourcesource.md).[createWriteStream](sourcesource.md#createwritestream)*

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

*Overrides [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/dmg.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/dmg.ts#L83)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L424)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

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

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

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

*Inherited from [SourceSource](sourcesource.md).[open](sourcesource.md#open)*

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

*Inherited from [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

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

*Inherited from [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

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

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
