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
* [imageExtensions](randomaccesszipsource.md#static-imageextensions)
* [manifestFields](randomaccesszipsource.md#static-private-manifestfields)
* [mimetype](randomaccesszipsource.md#static-optional-mimetype)
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
* [on](randomaccesszipsource.md#on)
* [once](randomaccesszipsource.md#once)
* [open](randomaccesszipsource.md#open)
* [prependListener](randomaccesszipsource.md#prependlistener)
* [prependOnceListener](randomaccesszipsource.md#prependoncelistener)
* [read](randomaccesszipsource.md#read)
* [removeAllListeners](randomaccesszipsource.md#removealllisteners)
* [removeListener](randomaccesszipsource.md#removelistener)
* [setMaxListeners](randomaccesszipsource.md#setmaxlisteners)
* [write](randomaccesszipsource.md#write)
* [listenerCount](randomaccesszipsource.md#static-listenercount)
* [register](randomaccesszipsource.md#static-register)

## Constructors

###  constructor

\+ **new RandomAccessZipSource**(`source`: [SourceDestination](sourcedestination.md), `match`: function): *[RandomAccessZipSource](randomaccesszipsource.md)*

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [lib/source-destination/zip.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L166)*

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

*Defined in [lib/source-destination/zip.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L166)*

___

### `Private` match

• **match**: *function*

*Defined in [lib/source-destination/zip.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L170)*

#### Type declaration:

▸ (`filename`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

___

### `Private` ready

• **ready**: *Promise‹void›*

*Defined in [lib/source-destination/zip.ts:165](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L165)*

___

### `Protected` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#protected-source)*

*Defined in [lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-source.ts#L22)*

___

### `Private` zip

• **zip**: *ZipFile*

*Defined in [lib/source-destination/zip.ts:164](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L164)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

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

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L252)*

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

*Defined in [lib/source-destination/zip.ts:154](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L154)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L264)*

___

### `Static` requiresRandomReadableSource

▪ **requiresRandomReadableSource**: *boolean* = false

*Inherited from [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#static-requiresrandomreadablesource)*

*Defined in [lib/source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-source.ts#L20)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[_close](sourcesource.md#protected-_close)*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-source.ts#L30)*

**Returns:** *Promise‹void›*

___

###  _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/zip.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L324)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#protected-_open)*

*Defined in [lib/source-destination/zip.ts:231](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L231)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

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

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/zip.ts:202](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L202)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/zip.ts:206](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L206)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L300)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L296)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:284](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L284)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L368)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`__namedParameters`: object): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/zip.ts:275](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L275)*

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

*Defined in [lib/source-destination/zip.ts:301](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L301)*

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

*Defined in [lib/source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L355)*

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

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L383)*

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

*Inherited from [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

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

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Inherited from [SourceSource](sourcesource.md).[getAlignment](sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L276)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:345](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L345)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

### `Private` getEntries

▸ **getEntries**(): *Promise‹Entry[]›*

*Defined in [lib/source-destination/zip.ts:211](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L211)*

**Returns:** *Promise‹Entry[]›*

___

### `Private` getEntryByName

▸ **getEntryByName**(`name`: string): *Promise‹Entry | undefined›*

*Defined in [lib/source-destination/zip.ts:237](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹Entry | undefined›*

___

### `Private` getImageEntry

▸ **getImageEntry**(): *Promise‹Entry›*

*Defined in [lib/source-destination/zip.ts:216](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L216)*

**Returns:** *Promise‹Entry›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:452](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L452)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

### `Private` getJson

▸ **getJson**(`name`: string): *Promise‹any›*

*Defined in [lib/source-destination/zip.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹any›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:304](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L304)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:473](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L473)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Private` getStream

▸ **getStream**(`name`: string): *Promise‹ReadableStream | undefined›*

*Defined in [lib/source-destination/zip.ts:246](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹ReadableStream | undefined›*

___

### `Private` getString

▸ **getString**(`name`: string): *Promise‹string | undefined›*

*Defined in [lib/source-destination/zip.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹string | undefined›*

___

### `Private` init

▸ **init**(): *Promise‹void›*

*Defined in [lib/source-destination/zip.ts:176](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/zip.ts#L176)*

**Returns:** *Promise‹void›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:910

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

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

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

*Inherited from [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

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

*Inherited from [SourceSource](sourcesource.md).[open](sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:361](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L361)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

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

*Inherited from [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

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

▸ **read**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Inherited from [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/source-destination.ts:315](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L315)*

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

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:904

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

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

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:905

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L324)*

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

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:270](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
