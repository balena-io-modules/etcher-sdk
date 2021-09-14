[etcher-sdk](../README.md) › [BalenaS3Source](balenas3source.md)

# Class: BalenaS3Source

## Hierarchy

  ↳ [BalenaS3SourceBase](balenas3sourcebase.md)

  ↳ **BalenaS3Source**

## Index

### Constructors

* [constructor](balenas3source.md#constructor)

### Properties

* [axiosInstance](balenas3source.md#protected-axiosinstance)
* [bucket](balenas3source.md#readonly-bucket)
* [buildId](balenas3source.md#readonly-buildid)
* [deviceType](balenas3source.md#readonly-devicetype)
* [host](balenas3source.md#readonly-host)
* [name](balenas3source.md#name)
* [names](balenas3source.md#private-names)
* [prefix](balenas3source.md#readonly-prefix)
* [rawSource](balenas3source.md#private-rawsource)
* [release](balenas3source.md#optional-readonly-release)
* [zipSource](balenas3source.md#private-zipsource)
* [defaultMaxListeners](balenas3source.md#static-defaultmaxlisteners)
* [imageExtensions](balenas3source.md#static-readonly-imageextensions)
* [mimetype](balenas3source.md#static-optional-readonly-mimetype)

### Methods

* [_close](balenas3source.md#protected-_close)
* [_getMetadata](balenas3source.md#protected-_getmetadata)
* [_open](balenas3source.md#protected-_open)
* [addListener](balenas3source.md#addlistener)
* [canCreateReadStream](balenas3source.md#cancreatereadstream)
* [canCreateSparseReadStream](balenas3source.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](balenas3source.md#cancreatesparsewritestream)
* [canCreateWriteStream](balenas3source.md#cancreatewritestream)
* [canRead](balenas3source.md#canread)
* [canWrite](balenas3source.md#canwrite)
* [close](balenas3source.md#close)
* [createReadStream](balenas3source.md#createreadstream)
* [createSparseReadStream](balenas3source.md#createsparsereadstream)
* [createSparseWriteStream](balenas3source.md#createsparsewritestream)
* [createVerifier](balenas3source.md#createverifier)
* [createWriteStream](balenas3source.md#createwritestream)
* [download](balenas3source.md#protected-download)
* [emit](balenas3source.md#emit)
* [eventNames](balenas3source.md#eventnames)
* [getAlignment](balenas3source.md#getalignment)
* [getBlocks](balenas3source.md#getblocks)
* [getInnerSource](balenas3source.md#getinnersource)
* [getMaxListeners](balenas3source.md#getmaxlisteners)
* [getMetadata](balenas3source.md#getmetadata)
* [getName](balenas3source.md#private-getname)
* [getPartitionTable](balenas3source.md#getpartitiontable)
* [getUrl](balenas3source.md#protected-geturl)
* [listenerCount](balenas3source.md#listenercount)
* [listeners](balenas3source.md#listeners)
* [off](balenas3source.md#off)
* [on](balenas3source.md#on)
* [once](balenas3source.md#once)
* [open](balenas3source.md#open)
* [prependListener](balenas3source.md#prependlistener)
* [prependOnceListener](balenas3source.md#prependoncelistener)
* [rawListeners](balenas3source.md#rawlisteners)
* [read](balenas3source.md#read)
* [removeAllListeners](balenas3source.md#removealllisteners)
* [removeListener](balenas3source.md#removelistener)
* [setMaxListeners](balenas3source.md#setmaxlisteners)
* [write](balenas3source.md#write)
* [isESRVersion](balenas3source.md#static-isesrversion)
* [listenerCount](balenas3source.md#static-listenercount)
* [once](balenas3source.md#static-once)
* [register](balenas3source.md#static-register)

## Constructors

###  constructor

\+ **new BalenaS3Source**(`__namedParameters`: object): *[BalenaS3Source](balenas3source.md)*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[constructor](balenas3sourcebase.md#constructor)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/balena-s3-source.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L63)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`awsCredentials` | undefined &#124; [AwsCredentials](../interfaces/awscredentials.md) |
`bucket` | string |
`buildId` | string |
`deviceType` | string |
`host` | string |
`prefix` | undefined &#124; string |
`release` | undefined &#124; string |

**Returns:** *[BalenaS3Source](balenas3source.md)*

## Properties

### `Protected` axiosInstance

• **axiosInstance**: *AxiosInstance*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[axiosInstance](balenas3sourcebase.md#protected-axiosinstance)*

*Defined in [lib/source-destination/balena-s3-source.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L58)*

___

### `Readonly` bucket

• **bucket**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[bucket](balenas3sourcebase.md#readonly-bucket)*

*Defined in [lib/source-destination/balena-s3-source.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L53)*

___

### `Readonly` buildId

• **buildId**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[buildId](balenas3sourcebase.md#readonly-buildid)*

*Defined in [lib/source-destination/balena-s3-source.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L56)*

___

### `Readonly` deviceType

• **deviceType**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[deviceType](balenas3sourcebase.md#readonly-devicetype)*

*Defined in [lib/source-destination/balena-s3-source.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L55)*

___

### `Readonly` host

• **host**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[host](balenas3sourcebase.md#readonly-host)*

*Defined in [lib/source-destination/balena-s3-source.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L52)*

___

###  name

• **name**: *[Name](../README.md#name)*

*Defined in [lib/source-destination/balena-s3-source.ts:148](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L148)*

___

### `Private` names

• **names**: *[Name](../README.md#name)[]* = ['balena', 'resin']

*Defined in [lib/source-destination/balena-s3-source.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L147)*

___

### `Readonly` prefix

• **prefix**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[prefix](balenas3sourcebase.md#readonly-prefix)*

*Defined in [lib/source-destination/balena-s3-source.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L54)*

___

### `Private` rawSource

• **rawSource**: *[Http](http.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:145](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L145)*

___

### `Optional` `Readonly` release

• **release**? : *undefined | string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[release](balenas3sourcebase.md#optional-readonly-release)*

*Defined in [lib/source-destination/balena-s3-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L57)*

___

### `Private` zipSource

• **zipSource**: *[ZipSource](zipsource.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L146)*

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

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/balena-s3-source.ts:211](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L211)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/balena-s3-source.ts:191](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L191)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/balena-s3-source.ts:195](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L195)*

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

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[canCreateReadStream](balenas3sourcebase.md#cancreatereadstream)*

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/balena-s3-source.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L97)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:336](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L336)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:167](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L167)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:185](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L185)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L383)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

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

### `Protected` download

▸ **download**(`path`: string, `responseType?`: undefined | "stream"): *Promise‹AxiosResponse‹any››*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[download](balenas3sourcebase.md#protected-download)*

*Defined in [lib/source-destination/balena-s3-source.ts:109](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`responseType?` | undefined &#124; "stream" |

**Returns:** *Promise‹AxiosResponse‹any››*

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

### `Private` getName

▸ **getName**(): *Promise‹[Name](../README.md#name)›*

*Defined in [lib/source-destination/balena-s3-source.ts:150](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L150)*

**Returns:** *Promise‹[Name](../README.md#name)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Protected` getUrl

▸ **getUrl**(`path`: string): *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[getUrl](balenas3sourcebase.md#protected-geturl)*

*Defined in [lib/source-destination/balena-s3-source.ts:113](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

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

*Defined in [lib/source-destination/balena-s3-source.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L171)*

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

### `Static` isESRVersion

▸ **isESRVersion**(`buildId`: string): *boolean*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[isESRVersion](balenas3sourcebase.md#static-isesrversion)*

*Defined in [lib/source-destination/balena-s3-source.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`buildId` | string |

**Returns:** *boolean*

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
