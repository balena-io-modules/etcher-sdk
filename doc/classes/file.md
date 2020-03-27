[etcher-sdk](../README.md) › [File](file.md)

# Class: File

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **File**

  ↳ [BlockDevice](blockdevice.md)

## Index

### Constructors

* [constructor](file.md#constructor)

### Properties

* [fd](file.md#protected-fd)
* [oWrite](file.md#owrite)
* [path](file.md#path)
* [defaultMaxListeners](file.md#static-defaultmaxlisteners)
* [imageExtensions](file.md#static-imageextensions)
* [mimetype](file.md#static-optional-mimetype)

### Methods

* [_close](file.md#protected-_close)
* [_getMetadata](file.md#protected-_getmetadata)
* [_open](file.md#protected-_open)
* [addListener](file.md#addlistener)
* [canCreateReadStream](file.md#cancreatereadstream)
* [canCreateSparseReadStream](file.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](file.md#cancreatesparsewritestream)
* [canCreateWriteStream](file.md#cancreatewritestream)
* [canRead](file.md#canread)
* [canWrite](file.md#canwrite)
* [close](file.md#close)
* [createReadStream](file.md#createreadstream)
* [createSparseReadStream](file.md#createsparsereadstream)
* [createSparseWriteStream](file.md#createsparsewritestream)
* [createVerifier](file.md#createverifier)
* [createWriteStream](file.md#createwritestream)
* [emit](file.md#emit)
* [eventNames](file.md#eventnames)
* [getAlignment](file.md#getalignment)
* [getBlocks](file.md#getblocks)
* [getInnerSource](file.md#getinnersource)
* [getMaxListeners](file.md#getmaxlisteners)
* [getMetadata](file.md#getmetadata)
* [getOpenFlags](file.md#protected-getopenflags)
* [getPartitionTable](file.md#getpartitiontable)
* [listenerCount](file.md#listenercount)
* [listeners](file.md#listeners)
* [on](file.md#on)
* [once](file.md#once)
* [open](file.md#open)
* [prependListener](file.md#prependlistener)
* [prependOnceListener](file.md#prependoncelistener)
* [read](file.md#read)
* [removeAllListeners](file.md#removealllisteners)
* [removeListener](file.md#removelistener)
* [setMaxListeners](file.md#setmaxlisteners)
* [streamOptions](file.md#private-streamoptions)
* [write](file.md#write)
* [listenerCount](file.md#static-listenercount)
* [register](file.md#static-register)

## Constructors

###  constructor

\+ **new File**(`path`: string, `oWrite`: boolean): *[File](file.md)*

*Defined in [lib/source-destination/file.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L51)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`oWrite` | boolean | false |

**Returns:** *[File](file.md)*

## Properties

### `Protected` fd

• **fd**: *number*

*Defined in [lib/source-destination/file.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L51)*

___

###  oWrite

• **oWrite**: *boolean*

*Defined in [lib/source-destination/file.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L53)*

___

###  path

• **path**: *string*

*Defined in [lib/source-destination/file.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L53)*

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

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L264)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/file.ts:184](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L184)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/file.ts:81](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L81)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/file.ts:180](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L180)*

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

*Defined in [lib/source-destination/file.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L69)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:292](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L292)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/file.ts:77](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L77)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/file.ts:73](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L73)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/file.ts:61](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L61)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/file.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L65)*

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

*Defined in [lib/source-destination/file.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L117)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`alignment` | undefined &#124; number | - |
`emitProgress` | boolean | false |
`end` | undefined &#124; number | - |
`numBuffers` | undefined &#124; number | - |
`start` | number | 0 |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:339](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L339)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`__namedParameters`: object): *Promise‹[SparseWriteStream](sparsewritestream.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/file.ts:169](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L169)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark` | undefined &#124; number |

**Returns:** *Promise‹[SparseWriteStream](sparsewritestream.md)›*

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

▸ **createWriteStream**(`__namedParameters`: object): *Promise‹WritableStream›*

*Overrides [SourceSource](sourcesource.md).[createWriteStream](sourcesource.md#createwritestream)*

*Defined in [lib/source-destination/file.ts:155](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L155)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark` | undefined &#124; number |

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

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:452](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L452)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

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

### `Protected` getOpenFlags

▸ **getOpenFlags**(): *number*

*Defined in [lib/source-destination/file.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L57)*

**Returns:** *number*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:473](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/source-destination.ts#L473)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

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

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Overrides [SourceSource](sourcesource.md).[read](sourcesource.md#read)*

*Defined in [lib/source-destination/file.ts:88](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L88)*

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

### `Private` streamOptions

▸ **streamOptions**(`start?`: undefined | number, `end?`: undefined | number): *object*

*Defined in [lib/source-destination/file.ts:106](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *object*

* **autoClose**: *boolean* = false

* **end**: *undefined | number*

* **fd**: *number* = this.fd

* **highWaterMark**: *number* = CHUNK_SIZE

* **start**: *undefined | number*

___

###  write

▸ **write**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Overrides [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

*Defined in [lib/source-destination/file.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/file.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

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
