[etcher-sdk](../README.md) › [BalenaS3Source](balenas3source.md)

# Class: BalenaS3Source

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **BalenaS3Source**

## Index

### Constructors

* [constructor](balenas3source.md#constructor)

### Properties

* [bucket](balenas3source.md#bucket)
* [deviceType](balenas3source.md#devicetype)
* [host](balenas3source.md#host)
* [name](balenas3source.md#name)
* [names](balenas3source.md#private-names)
* [rawSource](balenas3source.md#private-rawsource)
* [ready](balenas3source.md#private-ready)
* [version](balenas3source.md#version)
* [zipSource](balenas3source.md#private-zipsource)
* [defaultMaxListeners](balenas3source.md#static-defaultmaxlisteners)
* [imageExtensions](balenas3source.md#static-imageextensions)
* [mimetype](balenas3source.md#static-optional-mimetype)

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
* [getBlocks](balenas3source.md#getblocks)
* [getInnerSource](balenas3source.md#getinnersource)
* [getMaxListeners](balenas3source.md#getmaxlisteners)
* [getMetadata](balenas3source.md#getmetadata)
* [getName](balenas3source.md#private-getname)
* [getPartitionTable](balenas3source.md#getpartitiontable)
* [getUrl](balenas3source.md#private-geturl)
* [listenerCount](balenas3source.md#listenercount)
* [listeners](balenas3source.md#listeners)
* [on](balenas3source.md#on)
* [once](balenas3source.md#once)
* [open](balenas3source.md#open)
* [prepare](balenas3source.md#private-prepare)
* [prependListener](balenas3source.md#prependlistener)
* [prependOnceListener](balenas3source.md#prependoncelistener)
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

*Defined in [lib/source-destination/balena-s3-source.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`bucket` | string | - |
`deviceType` | string | - |
`version` | string | - |
`host` | string | "s3.amazonaws.com" |

**Returns:** *[BalenaS3Source](balenas3source.md)*

## Properties

###  bucket

• **bucket**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L35)*

___

###  deviceType

• **deviceType**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L36)*

___

###  host

• **host**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L38)*

___

###  name

• **name**: *[Name](../README.md#name)*

*Defined in [lib/source-destination/balena-s3-source.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L32)*

___

### `Private` names

• **names**: *[Name](../README.md#name)[]* = ['balena', 'resin']

*Defined in [lib/source-destination/balena-s3-source.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L31)*

___

### `Private` rawSource

• **rawSource**: *[Http](http.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L28)*

___

### `Private` ready

• **ready**: *Promise‹void›*

*Defined in [lib/source-destination/balena-s3-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L30)*

___

###  version

• **version**: *string*

*Defined in [lib/source-destination/balena-s3-source.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L37)*

___

### `Private` zipSource

• **zipSource**: *[ZipSource](zipsource.md)*

*Defined in [lib/source-destination/balena-s3-source.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L29)*

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

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/balena-s3-source.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L117)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/balena-s3-source.ts:107](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L107)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/balena-s3-source.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L112)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L71)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L268)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L75)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:100](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_generateChecksums`: boolean): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_generateChecksums` | boolean | false |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

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

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L323)*

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

### `Private` getName

▸ **getName**(): *Promise‹[Name](../README.md#name)›*

*Defined in [lib/source-destination/balena-s3-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L57)*

**Returns:** *Promise‹[Name](../README.md#name)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L445)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Private` getUrl

▸ **getUrl**(`path`: string): *string*

*Defined in [lib/source-destination/balena-s3-source.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L79)*

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

### `Private` prepare

▸ **prepare**(): *Promise‹void›*

*Defined in [lib/source-destination/balena-s3-source.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L48)*

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

*Defined in [lib/source-destination/balena-s3-source.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/balena-s3-source.ts#L85)*

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
