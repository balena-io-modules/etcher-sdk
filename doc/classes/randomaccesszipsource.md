[etcher-sdk](../README.md) › [RandomAccessZipSource](randomaccesszipsource.md)

# Class: RandomAccessZipSource

## Hierarchy

  ↳ [SourceSource](sourcesource.md)

  ↳ **RandomAccessZipSource**

## Index

### Constructors

* [constructor](randomaccesszipsource.md#constructor)

### Properties

* [entries](randomaccesszipsource.md#private-entries)
* [match](randomaccesszipsource.md#private-match)
* [ready](randomaccesszipsource.md#private-ready)
* [source](randomaccesszipsource.md#protected-source)
* [zip](randomaccesszipsource.md#private-zip)
* [defaultMaxListeners](randomaccesszipsource.md#static-defaultmaxlisteners)
* [imageExtensions](randomaccesszipsource.md#static-readonly-imageextensions)
* [manifestFields](randomaccesszipsource.md#static-private-manifestfields)
* [mimetype](randomaccesszipsource.md#static-optional-readonly-mimetype)
* [requiresRandomReadableSource](randomaccesszipsource.md#static-requiresrandomreadablesource)

### Methods

* [_close](randomaccesszipsource.md#protected-_close)
* [_getMetadata](randomaccesszipsource.md#_getmetadata)
* [_open](randomaccesszipsource.md#protected-_open)
* [addListener](randomaccesszipsource.md#addlistener)
* [canCreateReadStream](randomaccesszipsource.md#cancreatereadstream)
* [canCreateSparseReadStream](randomaccesszipsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](randomaccesszipsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](randomaccesszipsource.md#cancreatewritestream)
* [canRead](randomaccesszipsource.md#canread)
* [canWrite](randomaccesszipsource.md#canwrite)
* [close](randomaccesszipsource.md#close)
* [createReadStream](randomaccesszipsource.md#createreadstream)
* [createSparseReadStream](randomaccesszipsource.md#createsparsereadstream)
* [createSparseWriteStream](randomaccesszipsource.md#createsparsewritestream)
* [createVerifier](randomaccesszipsource.md#createverifier)
* [createWriteStream](randomaccesszipsource.md#createwritestream)
* [emit](randomaccesszipsource.md#emit)
* [eventNames](randomaccesszipsource.md#eventnames)
* [getAlignment](randomaccesszipsource.md#getalignment)
* [getBlocks](randomaccesszipsource.md#getblocks)
* [getEntries](randomaccesszipsource.md#private-getentries)
* [getEntryByName](randomaccesszipsource.md#private-getentrybyname)
* [getImageEntry](randomaccesszipsource.md#private-getimageentry)
* [getInnerSource](randomaccesszipsource.md#getinnersource)
* [getJson](randomaccesszipsource.md#private-getjson)
* [getMaxListeners](randomaccesszipsource.md#getmaxlisteners)
* [getMetadata](randomaccesszipsource.md#getmetadata)
* [getPartitionTable](randomaccesszipsource.md#getpartitiontable)
* [getStream](randomaccesszipsource.md#private-getstream)
* [getString](randomaccesszipsource.md#private-getstring)
* [init](randomaccesszipsource.md#private-init)
* [listenerCount](randomaccesszipsource.md#listenercount)
* [listeners](randomaccesszipsource.md#listeners)
* [off](randomaccesszipsource.md#off)
* [on](randomaccesszipsource.md#on)
* [once](randomaccesszipsource.md#once)
* [open](randomaccesszipsource.md#open)
* [prependListener](randomaccesszipsource.md#prependlistener)
* [prependOnceListener](randomaccesszipsource.md#prependoncelistener)
* [rawListeners](randomaccesszipsource.md#rawlisteners)
* [read](randomaccesszipsource.md#read)
* [removeAllListeners](randomaccesszipsource.md#removealllisteners)
* [removeListener](randomaccesszipsource.md#removelistener)
* [setMaxListeners](randomaccesszipsource.md#setmaxlisteners)
* [write](randomaccesszipsource.md#write)
* [listenerCount](randomaccesszipsource.md#static-listenercount)
* [once](randomaccesszipsource.md#static-once)
* [register](randomaccesszipsource.md#static-register)

## Constructors

###  constructor

\+ **new RandomAccessZipSource**(`source`: [SourceDestination](sourcedestination.md), `match`: function): *[RandomAccessZipSource](randomaccesszipsource.md)*

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [lib/source-destination/zip.ts:164](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L164)*

**Parameters:**

▪ **source**: *[SourceDestination](sourcedestination.md)*

▪`Default value`  **match**: *function*= matchSupportedExtensions

▸ (`filename`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *[RandomAccessZipSource](randomaccesszipsource.md)*

## Properties

### `Private` entries

• **entries**: *Entry[]* = []

*Defined in [lib/source-destination/zip.ts:164](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L164)*

___

### `Private` match

• **match**: *function*

*Defined in [lib/source-destination/zip.ts:168](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L168)*

#### Type declaration:

▸ (`filename`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

___

### `Private` ready

• **ready**: *Promise‹void›*

*Defined in [lib/source-destination/zip.ts:163](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L163)*

___

### `Protected` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#protected-source)*

*Defined in [lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-source.ts#L22)*

___

### `Private` zip

• **zip**: *ZipFile*

*Defined in [lib/source-destination/zip.ts:162](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L162)*

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

### `Static` `Private` manifestFields

▪ **manifestFields**: *Array‹keyof Metadata›* = [
		'bytesToZeroOutFromTheBeginning',
		'checksum',
		'checksumType',
		'recommendedDriveSize',
		'releaseNotesUrl',
		'supportUrl',
		'url',
		'version',
	]

*Defined in [lib/source-destination/zip.ts:152](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L152)*

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

*Inherited from [SourceSource](sourcesource.md).[_close](sourcesource.md#protected-_close)*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-source.ts#L30)*

**Returns:** *Promise‹void›*

___

###  _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/zip.ts:321](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L321)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#protected-_open)*

*Defined in [lib/source-destination/zip.ts:228](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L228)*

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

*Defined in [lib/source-destination/zip.ts:198](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L198)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/zip.ts:202](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L202)*

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

*Inherited from [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L324)*

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

▸ **createReadStream**(`__namedParameters`: object): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/zip.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L272)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`alignment` | undefined &#124; number | - |
`end` | undefined &#124; number | - |
`numBuffers` | undefined &#124; number | - |
`start` | number | 0 |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`__namedParameters`: object): *Promise‹[SparseFilterStream](sparsefilterstream.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/zip.ts:298](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L298)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`alignment` | undefined &#124; number | - |
`generateChecksums` | boolean | false |
`numBuffers` | undefined &#124; number | - |

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

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:389](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L389)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

### `Private` getEntries

▸ **getEntries**(): *Promise‹Entry[]›*

*Defined in [lib/source-destination/zip.ts:207](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L207)*

**Returns:** *Promise‹Entry[]›*

___

### `Private` getEntryByName

▸ **getEntryByName**(`name`: string): *Promise‹Entry | undefined›*

*Defined in [lib/source-destination/zip.ts:234](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹Entry | undefined›*

___

### `Private` getImageEntry

▸ **getImageEntry**(): *Promise‹Entry›*

*Defined in [lib/source-destination/zip.ts:212](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L212)*

**Returns:** *Promise‹Entry›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:497](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L497)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

### `Private` getJson

▸ **getJson**(`name`: string): *Promise‹any›*

*Defined in [lib/source-destination/zip.ts:265](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹any›*

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

### `Private` getStream

▸ **getStream**(`name`: string): *Promise‹ReadableStream | undefined›*

*Defined in [lib/source-destination/zip.ts:243](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹ReadableStream | undefined›*

___

### `Private` getString

▸ **getString**(`name`: string): *Promise‹string | undefined›*

*Defined in [lib/source-destination/zip.ts:257](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L257)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹string | undefined›*

___

### `Private` init

▸ **init**(): *Promise‹void›*

*Defined in [lib/source-destination/zip.ts:174](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L174)*

**Returns:** *Promise‹void›*

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

▸ **read**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`_buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`_bufferOffset` | number |
`_length` | number |
`_sourceOffset` | number |

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
