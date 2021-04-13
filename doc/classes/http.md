[etcher-sdk](../README.md) › [Http](http.md)

# Class: Http

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **Http**

## Index

### Constructors

* [constructor](http.md#constructor)

### Properties

* [acceptsRange](http.md#private-acceptsrange)
* [avoidRandomAccess](http.md#private-avoidrandomaccess)
* [axiosInstance](http.md#private-axiosinstance)
* [error](http.md#private-error)
* [ready](http.md#private-ready)
* [redirectUrl](http.md#private-redirecturl)
* [size](http.md#private-size)
* [url](http.md#private-url)
* [defaultMaxListeners](http.md#static-defaultmaxlisteners)
* [imageExtensions](http.md#static-readonly-imageextensions)
* [mimetype](http.md#static-optional-readonly-mimetype)

### Methods

* [_close](http.md#protected-_close)
* [_getMetadata](http.md#protected-_getmetadata)
* [_open](http.md#protected-_open)
* [addListener](http.md#addlistener)
* [canCreateReadStream](http.md#cancreatereadstream)
* [canCreateSparseReadStream](http.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](http.md#cancreatesparsewritestream)
* [canCreateWriteStream](http.md#cancreatewritestream)
* [canRead](http.md#canread)
* [canWrite](http.md#canwrite)
* [close](http.md#close)
* [createReadStream](http.md#createreadstream)
* [createSparseReadStream](http.md#createsparsereadstream)
* [createSparseWriteStream](http.md#createsparsewritestream)
* [createVerifier](http.md#createverifier)
* [createWriteStream](http.md#createwritestream)
* [emit](http.md#emit)
* [eventNames](http.md#eventnames)
* [getAlignment](http.md#getalignment)
* [getBlocks](http.md#getblocks)
* [getInfo](http.md#private-getinfo)
* [getInnerSource](http.md#getinnersource)
* [getMaxListeners](http.md#getmaxlisteners)
* [getMetadata](http.md#getmetadata)
* [getPartitionTable](http.md#getpartitiontable)
* [getRange](http.md#private-getrange)
* [listenerCount](http.md#listenercount)
* [listeners](http.md#listeners)
* [off](http.md#off)
* [on](http.md#on)
* [once](http.md#once)
* [open](http.md#open)
* [prependListener](http.md#prependlistener)
* [prependOnceListener](http.md#prependoncelistener)
* [rawListeners](http.md#rawlisteners)
* [read](http.md#read)
* [removeAllListeners](http.md#removealllisteners)
* [removeListener](http.md#removelistener)
* [setMaxListeners](http.md#setmaxlisteners)
* [write](http.md#write)
* [listenerCount](http.md#static-listenercount)
* [once](http.md#static-once)
* [register](http.md#static-register)

## Constructors

###  constructor

\+ **new Http**(`__namedParameters`: object): *[Http](http.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/http.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L44)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`avoidRandomAccess` | boolean | false |
`axiosInstance` | AxiosInstance | axios.create() |
`url` | string | - |

**Returns:** *[Http](http.md)*

## Properties

### `Private` acceptsRange

• **acceptsRange**: *boolean*

*Defined in [lib/source-destination/http.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L41)*

___

### `Private` avoidRandomAccess

• **avoidRandomAccess**: *boolean*

*Defined in [lib/source-destination/http.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L39)*

___

### `Private` axiosInstance

• **axiosInstance**: *AxiosInstance*

*Defined in [lib/source-destination/http.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L44)*

___

### `Private` error

• **error**: *[Error](notcapable.md#static-error)*

*Defined in [lib/source-destination/http.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L43)*

___

### `Private` ready

• **ready**: *Promise‹void›*

*Defined in [lib/source-destination/http.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L42)*

___

### `Private` redirectUrl

• **redirectUrl**: *string*

*Defined in [lib/source-destination/http.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L38)*

___

### `Private` size

• **size**: *number | undefined*

*Defined in [lib/source-destination/http.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L40)*

___

### `Private` url

• **url**: *string*

*Defined in [lib/source-destination/http.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L37)*

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

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L314)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:326](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L326)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:441](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L441)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/http.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L99)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/source-destination.ts:437](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L437)*

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

*Defined in [lib/source-destination/http.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L95)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:354](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L354)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:362](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L362)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:358](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L358)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/http.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L87)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:346](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L346)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:430](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L430)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`__namedParameters`: object): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/http.ts:144](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L144)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`emitProgress` | boolean | false |
`end` | undefined &#124; number | - |
`start` | number | 0 |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:401](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L401)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:417](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L417)*

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

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L445)*

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

*Defined in [lib/source-destination/source-destination.ts:411](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L411)*

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

*Defined in [lib/source-destination/source-destination.ts:338](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L338)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:407](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L407)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

### `Private` getInfo

▸ **getInfo**(): *Promise‹void›*

*Defined in [lib/source-destination/http.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L62)*

**Returns:** *Promise‹void›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:515](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L515)*

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

*Defined in [lib/source-destination/source-destination.ts:366](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L366)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:536](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L536)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

### `Private` getRange

▸ **getRange**(`start`: number, `end?`: undefined | number): *string*

*Defined in [lib/source-destination/http.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L115)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`start` | number | 0 |
`end?` | undefined &#124; number | - |

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

*Defined in [lib/source-destination/source-destination.ts:423](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L423)*

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

*Defined in [lib/source-destination/http.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/http.ts#L124)*

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

*Defined in [lib/source-destination/source-destination.ts:386](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L386)*

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

*Defined in [lib/source-destination/source-destination.ts:332](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L332)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
