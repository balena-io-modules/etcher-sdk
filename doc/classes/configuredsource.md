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
* [configure](configuredsource.md#private-optional-configure)
* [createStreamFromDisk](configuredsource.md#private-createstreamfromdisk)
* [disk](configuredsource.md#private-disk)
* [shouldTrimPartitions](configuredsource.md#private-shouldtrimpartitions)
* [source](configuredsource.md#protected-source)
* [defaultMaxListeners](configuredsource.md#static-defaultmaxlisteners)
* [imageExtensions](configuredsource.md#static-readonly-imageextensions)
* [mimetype](configuredsource.md#static-optional-readonly-mimetype)
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
* [getAlignment](configuredsource.md#getalignment)
* [getBlocks](configuredsource.md#getblocks)
* [getBlocksWithChecksumType](configuredsource.md#private-getblockswithchecksumtype)
* [getInnerSource](configuredsource.md#getinnersource)
* [getMaxListeners](configuredsource.md#getmaxlisteners)
* [getMetadata](configuredsource.md#getmetadata)
* [getPartitionTable](configuredsource.md#getpartitiontable)
* [listenerCount](configuredsource.md#listenercount)
* [listeners](configuredsource.md#listeners)
* [off](configuredsource.md#off)
* [on](configuredsource.md#on)
* [once](configuredsource.md#once)
* [open](configuredsource.md#open)
* [prependListener](configuredsource.md#prependlistener)
* [prependOnceListener](configuredsource.md#prependoncelistener)
* [rawListeners](configuredsource.md#rawlisteners)
* [read](configuredsource.md#read)
* [removeAllListeners](configuredsource.md#removealllisteners)
* [removeListener](configuredsource.md#removelistener)
* [setMaxListeners](configuredsource.md#setmaxlisteners)
* [trimPartitions](configuredsource.md#private-trimpartitions)
* [write](configuredsource.md#write)
* [listenerCount](configuredsource.md#static-listenercount)
* [once](configuredsource.md#static-once)
* [register](configuredsource.md#static-register)

## Constructors

###  constructor

\+ **new ConfiguredSource**(`__namedParameters`: object): *[ConfiguredSource](configuredsource.md)*

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L101)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`checksumType` | "crc32" &#124; "sha1" &#124; "sha256" &#124; "xxhash3" | "xxhash3" |
`chunkSize` | number | CHUNK_SIZE |
`configure` | undefined &#124; function &#124; "legacy" | - |
`createStreamFromDisk` | boolean | - |
`shouldTrimPartitions` | boolean | - |
`source` | [SourceDestination](sourcedestination.md)‹› | - |

**Returns:** *[ConfiguredSource](configuredsource.md)*

## Properties

### `Private` checksumType

• **checksumType**: *[ChecksumType](../README.md#checksumtype)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:98](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L98)*

___

### `Private` chunkSize

• **chunkSize**: *number*

*Defined in [lib/source-destination/configured-source/configured-source.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L99)*

___

### `Private` `Optional` configure

• **configure**? : *[ConfigureFunction](../README.md#configurefunction)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L101)*

___

### `Private` createStreamFromDisk

• **createStreamFromDisk**: *boolean*

*Defined in [lib/source-destination/configured-source/configured-source.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L97)*

___

### `Private` disk

• **disk**: *[SourceDisk](sourcedisk.md)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:100](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L100)*

___

### `Private` shouldTrimPartitions

• **shouldTrimPartitions**: *boolean*

*Defined in [lib/source-destination/configured-source/configured-source.ts:96](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L96)*

___

### `Protected` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#protected-source)*

*Defined in [lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-source.ts#L22)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

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

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-readonly-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L296)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L308)*

___

### `Static` requiresRandomReadableSource

▪ **requiresRandomReadableSource**: *boolean* = false

*Inherited from [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#static-requiresrandomreadablesource)*

*Defined in [lib/source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-source.ts#L20)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_close](sourcesource.md#protected-_close)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:303](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L303)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:248](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L248)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#protected-_open)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:292](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L292)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

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

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:162](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L162)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L166)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L344)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:340](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L340)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:158](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L158)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:328](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L328)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:412](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L412)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:179](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`__namedParameters`: object): *Promise‹[SparseReadStream](sparsereadstream.md) | [SparseFilterStream](sparsefilterstream.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:226](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L226)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`alignment` | undefined &#124; number | - |
`generateChecksums` | boolean | false |
`numBuffers` | number | 2 |

**Returns:** *Promise‹[SparseReadStream](sparsereadstream.md) | [SparseFilterStream](sparsefilterstream.md)›*

___

### `Private` createSparseReadStreamFromDisk

▸ **createSparseReadStreamFromDisk**(`generateChecksums`: boolean, `alignment?`: undefined | number, `numBuffers`: number): *Promise‹[SparseReadStream](sparsereadstream.md)›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:191](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L191)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`generateChecksums` | boolean | - |
`alignment?` | undefined &#124; number | - |
`numBuffers` | number | 2 |

**Returns:** *Promise‹[SparseReadStream](sparsereadstream.md)›*

___

### `Private` createSparseReadStreamFromStream

▸ **createSparseReadStreamFromStream**(`generateChecksums`: boolean, `alignment?`: undefined | number, `numBuffers`: number): *Promise‹[SparseFilterStream](sparsefilterstream.md)›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:207](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L207)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`generateChecksums` | boolean | - |
`alignment?` | undefined &#124; number | - |
`numBuffers` | number | 2 |

**Returns:** *Promise‹[SparseFilterStream](sparsefilterstream.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:399](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L399)*

**Parameters:**

▪`Default value`  **_options**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Inherited from [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:427](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L427)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(`_options`: object): *Promise‹WritableStream›*

*Inherited from [SourceSource](sourcesource.md).[createWriteStream](sourcesource.md#createwritestream)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Inherited from [SourceSource](sourcesource.md).[getAlignment](sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:320](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L320)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Overrides [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L131)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

### `Private` getBlocksWithChecksumType

▸ **getBlocksWithChecksumType**(`generateChecksums`: boolean): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:145](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`generateChecksums` | boolean |

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:497](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L497)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:348](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L348)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[off](../interfaces/sparsereadable.md#off)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

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

*Inherited from [SourceSource](sourcesource.md).[open](sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:405](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L405)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Overrides [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Private` trimPartitions

▸ **trimPartitions**(): *Promise‹void›*

*Defined in [lib/source-destination/configured-source/configured-source.ts:255](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L255)*

**Returns:** *Promise‹void›*

___

###  write

▸ **write**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`_length` | number |
`_fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

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

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

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

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
