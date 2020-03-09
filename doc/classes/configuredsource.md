[etcher-sdk](../README.md) › [ConfiguredSource](configuredsource.md)

# Class: ConfiguredSource

## Hierarchy

  ↳ [SourceSource](sourcesource.md)

  ↳ **ConfiguredSource**

## Index

### Constructors

* [constructor](configuredsource.md#constructor)

### Properties

* [checksumType](configuredsource.md#private-checksumtype)
* [chunkSize](configuredsource.md#private-chunksize)
* [config](configuredsource.md#private-optional-config)
* [configure](configuredsource.md#private-optional-configure)
* [createStreamFromDisk](configuredsource.md#private-createstreamfromdisk)
* [disk](configuredsource.md#private-disk)
* [shouldTrimPartitions](configuredsource.md#private-shouldtrimpartitions)
* [source](configuredsource.md#protected-source)
* [defaultMaxListeners](configuredsource.md#static-defaultmaxlisteners)
* [imageExtensions](configuredsource.md#static-imageextensions)
* [mimetype](configuredsource.md#static-optional-mimetype)
* [requiresRandomReadableSource](configuredsource.md#static-requiresrandomreadablesource)

### Methods

* [_close](configuredsource.md#protected-_close)
* [_getMetadata](configuredsource.md#protected-_getmetadata)
* [_open](configuredsource.md#protected-_open)
* [addListener](configuredsource.md#addlistener)
* [canCreateReadStream](configuredsource.md#cancreatereadstream)
* [canCreateSparseReadStream](configuredsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](configuredsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](configuredsource.md#cancreatewritestream)
* [canRead](configuredsource.md#canread)
* [canWrite](configuredsource.md#canwrite)
* [close](configuredsource.md#close)
* [createReadStream](configuredsource.md#createreadstream)
* [createSparseReadStream](configuredsource.md#createsparsereadstream)
* [createSparseReadStreamFromDisk](configuredsource.md#private-createsparsereadstreamfromdisk)
* [createSparseReadStreamFromStream](configuredsource.md#private-createsparsereadstreamfromstream)
* [createSparseWriteStream](configuredsource.md#createsparsewritestream)
* [createVerifier](configuredsource.md#createverifier)
* [createWriteStream](configuredsource.md#createwritestream)
* [emit](configuredsource.md#emit)
* [eventNames](configuredsource.md#eventnames)
* [getBlocks](configuredsource.md#getblocks)
* [getBlocksWithChecksumType](configuredsource.md#private-getblockswithchecksumtype)
* [getInnerSource](configuredsource.md#getinnersource)
* [getMaxListeners](configuredsource.md#getmaxlisteners)
* [getMetadata](configuredsource.md#getmetadata)
* [getPartitionTable](configuredsource.md#getpartitiontable)
* [listenerCount](configuredsource.md#listenercount)
* [listeners](configuredsource.md#listeners)
* [on](configuredsource.md#on)
* [once](configuredsource.md#once)
* [open](configuredsource.md#open)
* [prependListener](configuredsource.md#prependlistener)
* [prependOnceListener](configuredsource.md#prependoncelistener)
* [read](configuredsource.md#read)
* [removeAllListeners](configuredsource.md#removealllisteners)
* [removeListener](configuredsource.md#removelistener)
* [setMaxListeners](configuredsource.md#setmaxlisteners)
* [trimPartitions](configuredsource.md#private-trimpartitions)
* [write](configuredsource.md#write)
* [listenerCount](configuredsource.md#static-listenercount)
* [register](configuredsource.md#static-register)

## Constructors

###  constructor

\+ **new ConfiguredSource**(`source`: [SourceDestination](sourcedestination.md), `shouldTrimPartitions`: boolean, `createStreamFromDisk`: boolean, `configure?`: [ConfigureFunction](../README.md#configurefunction) | "legacy", `config?`: any, `checksumType`: [ChecksumType](../README.md#checksumtype), `chunkSize`: number): *[ConfiguredSource](configuredsource.md)*

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L87)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`source` | [SourceDestination](sourcedestination.md) | - |
`shouldTrimPartitions` | boolean | - |
`createStreamFromDisk` | boolean | - |
`configure?` | [ConfigureFunction](../README.md#configurefunction) &#124; "legacy" | - |
`config?` | any | - |
`checksumType` | [ChecksumType](../README.md#checksumtype) | "xxhash64" |
`chunkSize` | number | CHUNK_SIZE |

**Returns:** *[ConfiguredSource](configuredsource.md)*

## Properties

### `Private` checksumType

• **checksumType**: *[ChecksumType](../README.md#checksumtype)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:96](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L96)*

___

### `Private` chunkSize

• **chunkSize**: *number*

*Defined in [lib/source-destination/configured-source/configured-source.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L97)*

___

### `Private` `Optional` config

• **config**? : *any*

*Defined in [lib/source-destination/configured-source/configured-source.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L95)*

___

### `Private` `Optional` configure

• **configure**? : *[ConfigureFunction](../README.md#configurefunction)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L87)*

___

### `Private` createStreamFromDisk

• **createStreamFromDisk**: *boolean*

*Defined in [lib/source-destination/configured-source/configured-source.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L93)*

___

### `Private` disk

• **disk**: *[SourceDisk](sourcedisk.md)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L86)*

___

### `Private` shouldTrimPartitions

• **shouldTrimPartitions**: *boolean*

*Defined in [lib/source-destination/configured-source/configured-source.ts:92](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L92)*

___

### `Protected` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#protected-source)*

*Defined in [lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-source.ts#L22)*

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

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L244)*

___

### `Static` requiresRandomReadableSource

▪ **requiresRandomReadableSource**: *boolean* = false

*Inherited from [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#static-requiresrandomreadablesource)*

*Defined in [lib/source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-source.ts#L20)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_close](sourcesource.md#protected-_close)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L252)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:196](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L196)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#protected-_open)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:241](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L241)*

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

*Defined in [lib/source-destination/configured-source/configured-source.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L131)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L135)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L276)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L272)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L127)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L260)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(...`args`: any[]): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:148](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`generateChecksums`: boolean): *Promise‹[SparseReadStream](sparsereadstream.md) | [SparseFilterStream](sparsefilterstream.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:186](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L186)*

**Parameters:**

Name | Type |
------ | ------ |
`generateChecksums` | boolean |

**Returns:** *Promise‹[SparseReadStream](sparsereadstream.md) | [SparseFilterStream](sparsefilterstream.md)›*

___

### `Private` createSparseReadStreamFromDisk

▸ **createSparseReadStreamFromDisk**(`generateChecksums`: boolean): *Promise‹[SparseReadStream](sparsereadstream.md)›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:160](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`generateChecksums` | boolean |

**Returns:** *Promise‹[SparseReadStream](sparsereadstream.md)›*

___

### `Private` createSparseReadStreamFromStream

▸ **createSparseReadStreamFromStream**(`generateChecksums`: boolean): *Promise‹[SparseFilterStream](sparsefilterstream.md)›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:172](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`generateChecksums` | boolean |

**Returns:** *Promise‹[SparseFilterStream](sparsefilterstream.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L331)*

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Inherited from [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L357)*

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

*Defined in [lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L327)*

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

*Defined in [lib/source-destination/configured-source/configured-source.ts:108](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L108)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

### `Private` getBlocksWithChecksumType

▸ **getBlocksWithChecksumType**(`generateChecksums`: boolean): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`generateChecksums` | boolean |

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L424)*

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

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L445)*

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

*Defined in [lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L335)*

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

▸ **read**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Overrides [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

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

### `Private` trimPartitions

▸ **trimPartitions**(): *Promise‹void›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:203](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/configured-source/configured-source.ts#L203)*

**Returns:** *Promise‹void›*

___

###  write

▸ **write**(`_buffer`: Buffer, `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

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

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
