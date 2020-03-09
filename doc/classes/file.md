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

* [blockSize](file.md#blocksize)
* [fd](file.md#protected-fd)
* [flags](file.md#private-flags)
* [path](file.md#private-path)
* [OpenFlags](file.md#static-openflags)
* [defaultMaxListeners](file.md#static-defaultmaxlisteners)
* [imageExtensions](file.md#static-imageextensions)
* [mimetype](file.md#static-optional-mimetype)

### Methods

* [_canRead](file.md#private-_canread)
* [_canWrite](file.md#private-_canwrite)
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
* [getBlocks](file.md#getblocks)
* [getInnerSource](file.md#getinnersource)
* [getMaxListeners](file.md#getmaxlisteners)
* [getMetadata](file.md#getmetadata)
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
* [write](file.md#write)
* [listenerCount](file.md#static-listenercount)
* [register](file.md#static-register)

## Constructors

###  constructor

\+ **new File**(`path`: string, `flags`: [OpenFlags](../enums/openflags.md)): *[File](file.md)*

*Defined in [lib/source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`flags` | [OpenFlags](../enums/openflags.md) |

**Returns:** *[File](file.md)*

## Properties

###  blockSize

• **blockSize**: *number* = 512

*Defined in [lib/source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L58)*

___

### `Protected` fd

• **fd**: *number*

*Defined in [lib/source-destination/file.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L57)*

___

### `Private` flags

• **flags**: *[OpenFlags](../enums/openflags.md)*

*Defined in [lib/source-destination/file.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L60)*

___

### `Private` path

• **path**: *string*

*Defined in [lib/source-destination/file.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L60)*

___

### `Static` OpenFlags

▪ **OpenFlags**: *[OpenFlags](../enums/openflags.md)* = OpenFlags

*Defined in [lib/source-destination/file.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L56)*

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

### `Private` _canRead

▸ **_canRead**(): *boolean*

*Defined in [lib/source-destination/file.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L64)*

**Returns:** *boolean*

___

### `Private` _canWrite

▸ **_canWrite**(): *boolean*

*Defined in [lib/source-destination/file.ts:72](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L72)*

**Returns:** *boolean*

___

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/file.ts:156](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L156)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Overrides [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/file.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L99)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/file.ts:152](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L152)*

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

*Defined in [lib/source-destination/file.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L87)*

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

*Overrides [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/file.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L95)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/file.ts:91](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L91)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/file.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L79)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/file.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L83)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`emitProgress`: boolean, `start`: number, `end?`: undefined | number): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/file.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L124)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`emitProgress` | boolean | false |
`start` | number | 0 |
`end?` | undefined &#124; number | - |

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

▸ **createSparseWriteStream**(): *Promise‹[SparseWriteStream](sparsewritestream.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/file.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L146)*

**Returns:** *Promise‹[SparseWriteStream](sparsewritestream.md)›*

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

*Overrides [SourceSource](sourcesource.md).[createWriteStream](sourcesource.md#createwritestream)*

*Defined in [lib/source-destination/file.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L137)*

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

*Defined in [lib/source-destination/file.ts:106](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L106)*

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

▸ **write**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Overrides [SourceSource](sourcesource.md).[write](sourcesource.md#write)*

*Defined in [lib/source-destination/file.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

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
