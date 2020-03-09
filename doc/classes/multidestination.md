[etcher-sdk](../README.md) › [MultiDestination](multidestination.md)

# Class: MultiDestination

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **MultiDestination**

## Index

### Constructors

* [constructor](multidestination.md#constructor)

### Properties

* [destinations](multidestination.md#destinations)
* [erroredDestinations](multidestination.md#erroreddestinations)
* [defaultMaxListeners](multidestination.md#static-defaultmaxlisteners)
* [imageExtensions](multidestination.md#static-imageextensions)
* [mimetype](multidestination.md#static-optional-mimetype)

### Accessors

* [activeDestinations](multidestination.md#activedestinations)

### Methods

* [_close](multidestination.md#protected-_close)
* [_getMetadata](multidestination.md#protected-_getmetadata)
* [_open](multidestination.md#protected-_open)
* [addListener](multidestination.md#addlistener)
* [can](multidestination.md#private-can)
* [canCreateReadStream](multidestination.md#cancreatereadstream)
* [canCreateSparseReadStream](multidestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](multidestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](multidestination.md#cancreatewritestream)
* [canRead](multidestination.md#canread)
* [canWrite](multidestination.md#canwrite)
* [close](multidestination.md#close)
* [createReadStream](multidestination.md#createreadstream)
* [createSparseReadStream](multidestination.md#createsparsereadstream)
* [createSparseWriteStream](multidestination.md#createsparsewritestream)
* [createStream](multidestination.md#private-createstream)
* [createVerifier](multidestination.md#createverifier)
* [createWriteStream](multidestination.md#createwritestream)
* [destinationError](multidestination.md#destinationerror)
* [emit](multidestination.md#emit)
* [eventNames](multidestination.md#eventnames)
* [getBlocks](multidestination.md#getblocks)
* [getInnerSource](multidestination.md#getinnersource)
* [getMaxListeners](multidestination.md#getmaxlisteners)
* [getMetadata](multidestination.md#getmetadata)
* [getPartitionTable](multidestination.md#getpartitiontable)
* [listenerCount](multidestination.md#listenercount)
* [listeners](multidestination.md#listeners)
* [on](multidestination.md#on)
* [once](multidestination.md#once)
* [open](multidestination.md#open)
* [prependListener](multidestination.md#prependlistener)
* [prependOnceListener](multidestination.md#prependoncelistener)
* [read](multidestination.md#read)
* [removeAllListeners](multidestination.md#removealllisteners)
* [removeListener](multidestination.md#removelistener)
* [setMaxListeners](multidestination.md#setmaxlisteners)
* [write](multidestination.md#write)
* [listenerCount](multidestination.md#static-listenercount)
* [register](multidestination.md#static-register)

## Constructors

###  constructor

\+ **new MultiDestination**(`destinations`: [SourceDestination](sourcedestination.md)[]): *[MultiDestination](multidestination.md)*

*Defined in [lib/source-destination/multi-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`destinations` | [SourceDestination](sourcedestination.md)[] |

**Returns:** *[MultiDestination](multidestination.md)*

## Properties

###  destinations

• **destinations**: *Set‹[SourceDestination](sourcedestination.md)›* = new Set()

*Defined in [lib/source-destination/multi-destination.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L103)*

___

###  erroredDestinations

• **erroredDestinations**: *Set‹[SourceDestination](sourcedestination.md)›* = new Set()

*Defined in [lib/source-destination/multi-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L104)*

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

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L244)*

## Accessors

###  activeDestinations

• **get activeDestinations**(): *Set‹[SourceDestination](sourcedestination.md)›*

*Defined in [lib/source-destination/multi-destination.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L135)*

**Returns:** *Set‹[SourceDestination](sourcedestination.md)›*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/multi-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L329)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Inherited from [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L287)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/multi-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L319)*

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

### `Private` can

▸ **can**(`methodName`: "canRead" | "canWrite" | "canCreateReadStream" | "canCreateSparseReadStream" | "canCreateWriteStream" | "canCreateSparseWriteStream"): *Promise‹boolean›*

*Defined in [lib/source-destination/multi-destination.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`methodName` | "canRead" &#124; "canWrite" &#124; "canCreateReadStream" &#124; "canCreateSparseReadStream" &#124; "canCreateWriteStream" &#124; "canCreateSparseWriteStream" |

**Returns:** *Promise‹boolean›*

___

###  canCreateReadStream

▸ **canCreateReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/multi-destination.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L166)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/multi-destination.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L170)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/multi-destination.ts:178](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L178)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/multi-destination.ts:174](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L174)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/multi-destination.ts:158](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L158)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Overrides [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/multi-destination.ts:162](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L162)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(...`args`: any[]): *Promise‹ReadableStream›*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/multi-destination.ts:219](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L219)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(...`args`: any[]): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/multi-destination.ts:228](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Overrides [SourceSource](sourcesource.md).[createSparseWriteStream](sourcesource.md#createsparsewritestream)*

*Defined in [lib/source-destination/multi-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L308)*

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

### `Private` createStream

▸ **createStream**(`methodName`: "createWriteStream" | "createSparseWriteStream"): *Promise‹PassThrough‹››*

*Defined in [lib/source-destination/multi-destination.ts:235](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L235)*

**Parameters:**

Name | Type |
------ | ------ |
`methodName` | "createWriteStream" &#124; "createSparseWriteStream" |

**Returns:** *Promise‹PassThrough‹››*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Overrides [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

*Defined in [lib/source-destination/multi-destination.ts:312](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L312)*

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

*Defined in [lib/source-destination/multi-destination.ts:304](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L304)*

**Returns:** *Promise‹WritableStream›*

___

###  destinationError

▸ **destinationError**(`destination`: [SourceDestination](sourcedestination.md), `error`: [Error](notcapable.md#static-error), `stream?`: EventEmitter): *void*

*Defined in [lib/source-destination/multi-destination.ts:116](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | [SourceDestination](sourcedestination.md) |
`error` | [Error](notcapable.md#static-error) |
`stream?` | EventEmitter |

**Returns:** *void*

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

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L323)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L424)*

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

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L445)*

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

*Defined in [lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L335)*

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

*Defined in [lib/source-destination/multi-destination.ts:182](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L182)*

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

*Defined in [lib/source-destination/multi-destination.ts:197](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/multi-destination.ts#L197)*

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

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
