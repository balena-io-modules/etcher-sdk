[etcher-sdk](../README.md) › [BalenaS3CompressedSource](balenas3compressedsource.md)

# Class: BalenaS3CompressedSource

## Hierarchy

  ↳ [BalenaS3SourceBase](balenas3sourcebase.md)

  ↳ **BalenaS3CompressedSource**

## Index

### Constructors

* [constructor](balenas3compressedsource.md#constructor)

### Properties

* [axiosInstance](balenas3compressedsource.md#protected-axiosinstance)
* [bucket](balenas3compressedsource.md#readonly-bucket)
* [buildId](balenas3compressedsource.md#readonly-buildid)
* [configuration](balenas3compressedsource.md#private-optional-configuration)
* [configuredParts](balenas3compressedsource.md#private-configuredparts)
* [deviceType](balenas3compressedsource.md#readonly-devicetype)
* [deviceTypeJSON](balenas3compressedsource.md#private-devicetypejson)
* [filename](balenas3compressedsource.md#private-filename)
* [filenamePrefix](balenas3compressedsource.md#private-optional-filenameprefix)
* [format](balenas3compressedsource.md#private-format)
* [host](balenas3compressedsource.md#readonly-host)
* [imageJSON](balenas3compressedsource.md#private-imagejson)
* [lastModified](balenas3compressedsource.md#private-lastmodified)
* [osVersion](balenas3compressedsource.md#private-osversion)
* [prefix](balenas3compressedsource.md#readonly-prefix)
* [release](balenas3compressedsource.md#optional-readonly-release)
* [size](balenas3compressedsource.md#private-size)
* [supervisorVersion](balenas3compressedsource.md#private-supervisorversion)
* [defaultMaxListeners](balenas3compressedsource.md#static-defaultmaxlisteners)
* [imageExtensions](balenas3compressedsource.md#static-readonly-imageextensions)
* [mimetype](balenas3compressedsource.md#static-optional-readonly-mimetype)

### Methods

* [_close](balenas3compressedsource.md#protected-_close)
* [_getMetadata](balenas3compressedsource.md#protected-_getmetadata)
* [_open](balenas3compressedsource.md#protected-_open)
* [addListener](balenas3compressedsource.md#addlistener)
* [canCreateReadStream](balenas3compressedsource.md#cancreatereadstream)
* [canCreateSparseReadStream](balenas3compressedsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](balenas3compressedsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](balenas3compressedsource.md#cancreatewritestream)
* [canRead](balenas3compressedsource.md#canread)
* [canWrite](balenas3compressedsource.md#canwrite)
* [close](balenas3compressedsource.md#close)
* [configure](balenas3compressedsource.md#private-configure)
* [createGzipStream](balenas3compressedsource.md#private-creategzipstream)
* [createReadStream](balenas3compressedsource.md#createreadstream)
* [createSparseReadStream](balenas3compressedsource.md#createsparsereadstream)
* [createSparseWriteStream](balenas3compressedsource.md#createsparsewritestream)
* [createStream](balenas3compressedsource.md#private-createstream)
* [createVerifier](balenas3compressedsource.md#createverifier)
* [createWriteStream](balenas3compressedsource.md#createwritestream)
* [createZipStream](balenas3compressedsource.md#private-createzipstream)
* [download](balenas3compressedsource.md#protected-download)
* [emit](balenas3compressedsource.md#emit)
* [eventNames](balenas3compressedsource.md#eventnames)
* [extractDeflateToDisk](balenas3compressedsource.md#private-extractdeflatetodisk)
* [findImagePart](balenas3compressedsource.md#private-findimagepart)
* [findPart](balenas3compressedsource.md#private-findpart)
* [findPartitionPart](balenas3compressedsource.md#private-findpartitionpart)
* [getAlignment](balenas3compressedsource.md#getalignment)
* [getBlocks](balenas3compressedsource.md#getblocks)
* [getDeviceTypeJSON](balenas3compressedsource.md#private-getdevicetypejson)
* [getFilename](balenas3compressedsource.md#private-getfilename)
* [getImageJSON](balenas3compressedsource.md#private-getimagejson)
* [getInnerSource](balenas3compressedsource.md#getinnersource)
* [getMaxListeners](balenas3compressedsource.md#getmaxlisteners)
* [getMetadata](balenas3compressedsource.md#getmetadata)
* [getOsVersion](balenas3compressedsource.md#private-getosversion)
* [getPartStream](balenas3compressedsource.md#private-getpartstream)
* [getPartitionTable](balenas3compressedsource.md#getpartitiontable)
* [getParts](balenas3compressedsource.md#private-getparts)
* [getSize](balenas3compressedsource.md#private-getsize)
* [getSupervisorVersion](balenas3compressedsource.md#private-getsupervisorversion)
* [getUrl](balenas3compressedsource.md#protected-geturl)
* [listenerCount](balenas3compressedsource.md#listenercount)
* [listeners](balenas3compressedsource.md#listeners)
* [off](balenas3compressedsource.md#off)
* [on](balenas3compressedsource.md#on)
* [once](balenas3compressedsource.md#once)
* [open](balenas3compressedsource.md#open)
* [prependListener](balenas3compressedsource.md#prependlistener)
* [prependOnceListener](balenas3compressedsource.md#prependoncelistener)
* [rawListeners](balenas3compressedsource.md#rawlisteners)
* [read](balenas3compressedsource.md#read)
* [removeAllListeners](balenas3compressedsource.md#removealllisteners)
* [removeListener](balenas3compressedsource.md#removelistener)
* [setMaxListeners](balenas3compressedsource.md#setmaxlisteners)
* [write](balenas3compressedsource.md#write)
* [isESRVersion](balenas3compressedsource.md#static-isesrversion)
* [listenerCount](balenas3compressedsource.md#static-listenercount)
* [once](balenas3compressedsource.md#static-once)
* [register](balenas3compressedsource.md#static-register)

## Constructors

###  constructor

\+ **new BalenaS3CompressedSource**(`__namedParameters`: object): *[BalenaS3CompressedSource](balenas3compressedsource.md)*

*Overrides [BalenaS3SourceBase](balenas3sourcebase.md).[constructor](balenas3sourcebase.md#constructor)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L71)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`configuration` | undefined &#124; [Dictionary](../interfaces/dictionary.md)‹any› |
`filenamePrefix` | undefined &#124; string |
`format` | "zip" &#124; "gzip" |
`options` | options |

**Returns:** *[BalenaS3CompressedSource](balenas3compressedsource.md)*

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

### `Private` `Optional` configuration

• **configuration**? : *[Dictionary](../interfaces/dictionary.md)‹any›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L62)*

___

### `Private` configuredParts

• **configuredParts**: *Map‹string, object›* = new Map<
		string,
		{ crc: number; zLen: number; buffer: Buffer }
	>()

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L63)*

___

### `Readonly` deviceType

• **deviceType**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[deviceType](balenas3sourcebase.md#readonly-devicetype)*

*Defined in [lib/source-destination/balena-s3-source.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L55)*

___

### `Private` deviceTypeJSON

• **deviceTypeJSON**: *[DeviceTypeJSON](../interfaces/devicetypejson.md)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L58)*

___

### `Private` filename

• **filename**: *string*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L71)*

___

### `Private` `Optional` filenamePrefix

• **filenamePrefix**? : *undefined | string*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L60)*

___

### `Private` format

• **format**: *BalenaS3CompressedSourceOptions["format"]*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L59)*

___

### `Readonly` host

• **host**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[host](balenas3sourcebase.md#readonly-host)*

*Defined in [lib/source-destination/balena-s3-source.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L52)*

___

### `Private` imageJSON

• **imageJSON**: *[ImageJSON](../README.md#imagejson)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L57)*

___

### `Private` lastModified

• **lastModified**: *Date*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L68)*

___

### `Private` osVersion

• **osVersion**: *string*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L69)*

___

### `Readonly` prefix

• **prefix**: *string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[prefix](balenas3sourcebase.md#readonly-prefix)*

*Defined in [lib/source-destination/balena-s3-source.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L54)*

___

### `Optional` `Readonly` release

• **release**? : *undefined | string*

*Inherited from [BalenaS3SourceBase](balenas3sourcebase.md).[release](balenas3sourcebase.md#optional-readonly-release)*

*Defined in [lib/source-destination/balena-s3-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L57)*

___

### `Private` size

• **size**: *number*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L70)*

___

### `Private` supervisorVersion

• **supervisorVersion**: *string*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L67)*

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

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:423](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L423)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L102)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:233](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L233)*

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

### `Private` configure

▸ **configure**(): *Promise‹void›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:187](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L187)*

**Returns:** *Promise‹void›*

___

### `Private` createGzipStream

▸ **createGzipStream**(`fake`: boolean): *Promise‹GzipStream‹››*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L300)*

**Parameters:**

Name | Type |
------ | ------ |
`fake` | boolean |

**Returns:** *Promise‹GzipStream‹››*

___

###  createReadStream

▸ **createReadStream**(`options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹Readable›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:311](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L311)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹Readable›*

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

### `Private` createStream

▸ **createStream**(`fake`: boolean): *Promise‹any›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:305](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L305)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fake` | boolean | false |

**Returns:** *Promise‹any›*

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

### `Private` createZipStream

▸ **createZipStream**(`fake`: boolean): *Promise‹any›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`fake` | boolean |

**Returns:** *Promise‹any›*

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

### `Private` extractDeflateToDisk

▸ **extractDeflateToDisk**(`filename`: string): *Promise‹BufferDisk‹››*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:177](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹BufferDisk‹››*

___

### `Private` findImagePart

▸ **findImagePart**(`imageJSON`: [ImageJSON](../README.md#imagejson), `image`: string): *[ImageJSONPart](../interfaces/imagejsonpart.md)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:158](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`imageJSON` | [ImageJSON](../README.md#imagejson) |
`image` | string |

**Returns:** *[ImageJSONPart](../interfaces/imagejsonpart.md)*

___

### `Private` findPart

▸ **findPart**(`definition`: [FileOnPartition](../interfaces/fileonpartition.md)): *[ImageJSONPart](../interfaces/imagejsonpart.md)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`definition` | [FileOnPartition](../interfaces/fileonpartition.md) |

**Returns:** *[ImageJSONPart](../interfaces/imagejsonpart.md)*

___

### `Private` findPartitionPart

▸ **findPartitionPart**(`imageJSON`: [ImageJSON](../README.md#imagejson), `partition`: number): *[ImageJSONPart](../interfaces/imagejsonpart.md)*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:142](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`imageJSON` | [ImageJSON](../README.md#imagejson) |
`partition` | number |

**Returns:** *[ImageJSONPart](../interfaces/imagejsonpart.md)*

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

### `Private` getDeviceTypeJSON

▸ **getDeviceTypeJSON**(): *Promise‹[DeviceTypeJSON](../interfaces/devicetypejson.md)›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L131)*

**Returns:** *Promise‹[DeviceTypeJSON](../interfaces/devicetypejson.md)›*

___

### `Private` getFilename

▸ **getFilename**(): *string*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L89)*

**Returns:** *string*

___

### `Private` getImageJSON

▸ **getImageJSON**(): *Promise‹[ImageJSON](../README.md#imagejson)›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:126](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L126)*

**Returns:** *Promise‹[ImageJSON](../README.md#imagejson)›*

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

### `Private` getOsVersion

▸ **getOsVersion**(): *Promise‹any›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:121](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L121)*

**Returns:** *Promise‹any›*

___

### `Private` getPartStream

▸ **getPartStream**(`filename`: string): *Promise‹ReadableStream›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹ReadableStream›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Private` getParts

▸ **getParts**(`fake`: boolean): *Promise‹object[]›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:270](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`fake` | boolean |

**Returns:** *Promise‹object[]›*

___

### `Private` getSize

▸ **getSize**(): *Promise‹number›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L85)*

**Returns:** *Promise‹number›*

___

### `Private` getSupervisorVersion

▸ **getSupervisorVersion**(): *Promise‹object›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L114)*

**Returns:** *Promise‹object›*

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
