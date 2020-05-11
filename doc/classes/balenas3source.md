[etcher-sdk](../README.md) › [BalenaS3Source](balenas3source.md)

# Class: BalenaS3Source

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **BalenaS3Source**

## Index

### Constructors

* [constructor](balenas3source.md#constructor)

### Properties

* [bucket](balenas3source.md#readonly-bucket)
* [deviceType](balenas3source.md#readonly-devicetype)
* [host](balenas3source.md#readonly-host)
* [name](balenas3source.md#name)
* [names](balenas3source.md#private-names)
* [rawSource](balenas3source.md#private-rawsource)
* [ready](balenas3source.md#private-ready)
* [version](balenas3source.md#readonly-version)
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
* [emit](balenas3source.md#emit)
* [eventNames](balenas3source.md#eventnames)
* [getAlignment](balenas3source.md#getalignment)
* [getBlocks](balenas3source.md#getblocks)
* [getInnerSource](balenas3source.md#getinnersource)
* [getMaxListeners](balenas3source.md#getmaxlisteners)
* [getMetadata](balenas3source.md#getmetadata)
* [getName](balenas3source.md#private-getname)
* [getPartitionTable](balenas3source.md#getpartitiontable)
* [getUrl](balenas3source.md#private-geturl)
* [listenerCount](balenas3source.md#listenercount)
* [listeners](balenas3source.md#listeners)
* [off](balenas3source.md#off)
* [on](balenas3source.md#on)
* [once](balenas3source.md#once)
* [open](balenas3source.md#open)
* [prepare](balenas3source.md#private-prepare)
* [prependListener](balenas3source.md#prependlistener)
* [prependOnceListener](balenas3source.md#prependoncelistener)
* [rawListeners](balenas3source.md#rawlisteners)
* [read](balenas3source.md#read)
* [removeAllListeners](balenas3source.md#removealllisteners)
* [removeListener](balenas3source.md#removelistener)
* [setMaxListeners](balenas3source.md#setmaxlisteners)
* [write](balenas3source.md#write)
* [listenerCount](balenas3source.md#static-listenercount)
* [register](balenas3source.md#static-register)

## Constructors

###  constructor

\+ **new BalenaS3Source**(`bucket`: string, `deviceType`: string, `version`: string, `host`: string): *[BalenaS3Source](balenas3source.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L35)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`bucket` | string | - |
`deviceType` | string | - |
`version` | string | - |
`host` | string | "s3.amazonaws.com" |

**Returns:** *[BalenaS3Source](balenas3source.md)*

## Properties

### `Readonly` bucket

• **bucket**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L38)*

___

### `Readonly` deviceType

• **deviceType**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L39)*

___

### `Readonly` host

• **host**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L41)*

___

###  name

• **name**: *[Name](../README.md#name)*

*Defined in [lib/source-destination/balena-s3-source.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L35)*

___

### `Private` names

• **names**: *[Name](../README.md#name)[]* = ['balena', 'resin']

*Defined in [lib/source-destination/balena-s3-source.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L34)*

___

### `Private` rawSource

• **rawSource**: *[Http](http.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L31)*

___

### `Private` ready

• **ready**: *Promise‹void›*

*Defined in [lib/source-destination/balena-s3-source.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L33)*

___

### `Readonly` version

• **version**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L40)*

___

### `Private` zipSource

• **zipSource**: *[ZipSource](zipsource.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L32)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

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

*Defined in [lib/source-destination/source-destination.ts:275](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L275)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L287)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/balena-s3-source.ts:122](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L122)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/balena-s3-source.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L112)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/balena-s3-source.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L117)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

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

*Defined in [lib/source-destination/balena-s3-source.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L76)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:315](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L315)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L323)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L319)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/balena-s3-source.ts:80](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L80)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:307](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L307)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:391](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L391)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/balena-s3-source.ts:105](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L105)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:362](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L362)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:378](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L378)*

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

*Defined in [lib/source-destination/source-destination.ts:406](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L406)*

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

*Defined in [lib/source-destination/source-destination.ts:372](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L372)*

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

Defined in node_modules/@types/node/events.d.ts:32

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

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Inherited from [SourceSource](sourcesource.md).[getAlignment](sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:299](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L299)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L368)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:475](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L475)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L327)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Private` getName

▸ **getName**(): *Promise‹[Name](../README.md#name)›*

*Defined in [lib/source-destination/balena-s3-source.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L62)*

**Returns:** *Promise‹[Name](../README.md#name)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:496](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L496)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Private` getUrl

▸ **getUrl**(`path`: string): *string*

*Defined in [lib/source-destination/balena-s3-source.ts:84](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

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

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[off](countingwritable.md#off)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[off](../interfaces/sparsereadable.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

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

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

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

Defined in node_modules/@types/node/events.d.ts:22

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

*Defined in [lib/source-destination/source-destination.ts:384](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L384)*

**Returns:** *Promise‹void›*

___

### `Private` prepare

▸ **prepare**(): *Promise‹void›*

*Defined in [lib/source-destination/balena-s3-source.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L51)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

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

Defined in node_modules/@types/node/events.d.ts:24

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

*Inherited from [CountingWritable](countingwritable.md).[rawListeners](countingwritable.md#rawlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Overrides [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/balena-s3-source.ts:90](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/balena-s3-source.ts#L90)*

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

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

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

Defined in node_modules/@types/node/events.d.ts:25

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

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_fileOffset`: number): *Promise‹WriteResult›*

*Inherited from [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

*Defined in [lib/source-destination/source-destination.ts:347](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L347)*

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

### `Static` register

▸ **register**(`Cls`: typeof SourceSource): *void*

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/5c0d0cc/lib/source-destination/source-destination.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
