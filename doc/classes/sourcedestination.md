[etcher-sdk](../README.md) › [SourceDestination](sourcedestination.md)

# Class: SourceDestination

## Hierarchy

* EventEmitter

  ↳ **SourceDestination**

  ↳ [SourceSource](sourcesource.md)

  ↳ [File](file.md)

  ↳ [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

  ↳ [MultiDestination](multidestination.md)

  ↳ [UsbbootDrive](usbbootdrive.md)

  ↳ [DriverlessDevice](driverlessdevice.md)

  ↳ [Http](http.md)

  ↳ [BalenaS3Source](balenas3source.md)

  ↳ [SingleUseStreamSource](singleusestreamsource.md)

## Index

### Properties

* [isOpen](sourcedestination.md#private-isopen)
* [metadata](sourcedestination.md#private-metadata)
* [defaultMaxListeners](sourcedestination.md#static-defaultmaxlisteners)
* [imageExtensions](sourcedestination.md#static-readonly-imageextensions)
* [mimetype](sourcedestination.md#static-optional-readonly-mimetype)
* [mimetypes](sourcedestination.md#static-private-mimetypes)

### Methods

* [_close](sourcedestination.md#protected-_close)
* [_getMetadata](sourcedestination.md#protected-_getmetadata)
* [_open](sourcedestination.md#protected-_open)
* [addListener](sourcedestination.md#addlistener)
* [canCreateReadStream](sourcedestination.md#cancreatereadstream)
* [canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](sourcedestination.md#cancreatewritestream)
* [canRead](sourcedestination.md#canread)
* [canWrite](sourcedestination.md#canwrite)
* [close](sourcedestination.md#close)
* [createReadStream](sourcedestination.md#createreadstream)
* [createSparseReadStream](sourcedestination.md#createsparsereadstream)
* [createSparseWriteStream](sourcedestination.md#createsparsewritestream)
* [createVerifier](sourcedestination.md#createverifier)
* [createWriteStream](sourcedestination.md#createwritestream)
* [emit](sourcedestination.md#emit)
* [eventNames](sourcedestination.md#eventnames)
* [getAlignment](sourcedestination.md#getalignment)
* [getBlocks](sourcedestination.md#getblocks)
* [getInnerSource](sourcedestination.md#getinnersource)
* [getInnerSourceHelper](sourcedestination.md#private-getinnersourcehelper)
* [getMaxListeners](sourcedestination.md#getmaxlisteners)
* [getMetadata](sourcedestination.md#getmetadata)
* [getMimeTypeFromContent](sourcedestination.md#private-getmimetypefromcontent)
* [getMimeTypeFromName](sourcedestination.md#private-getmimetypefromname)
* [getPartitionTable](sourcedestination.md#getpartitiontable)
* [listenerCount](sourcedestination.md#listenercount)
* [listeners](sourcedestination.md#listeners)
* [off](sourcedestination.md#off)
* [on](sourcedestination.md#on)
* [once](sourcedestination.md#once)
* [open](sourcedestination.md#open)
* [prependListener](sourcedestination.md#prependlistener)
* [prependOnceListener](sourcedestination.md#prependoncelistener)
* [rawListeners](sourcedestination.md#rawlisteners)
* [read](sourcedestination.md#read)
* [removeAllListeners](sourcedestination.md#removealllisteners)
* [removeListener](sourcedestination.md#removelistener)
* [setMaxListeners](sourcedestination.md#setmaxlisteners)
* [write](sourcedestination.md#write)
* [listenerCount](sourcedestination.md#static-listenercount)
* [register](sourcedestination.md#static-register)

## Properties

### `Private` isOpen

• **isOpen**: *boolean* = false

*Defined in [lib/source-destination/source-destination.ts:290](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L290)*

___

### `Private` metadata

• **metadata**: *[Metadata](../interfaces/metadata.md)*

*Defined in [lib/source-destination/source-destination.ts:289](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L289)*

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

*Defined in [lib/source-destination/source-destination.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L274)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Defined in [lib/source-destination/source-destination.ts:286](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L286)*

___

### `Static` `Private` mimetypes

▪ **mimetypes**: *Map‹string, [SourceSource](sourcesource.md)›* = new Map<string, typeof SourceSource>()

*Defined in [lib/source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L287)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:401](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L401)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Defined in [lib/source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L333)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:397](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L397)*

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

*Defined in [lib/source-destination/source-destination.ts:310](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L310)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L314)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:322](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L322)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:318](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L318)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:302](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L302)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:306](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L306)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:390](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L390)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Defined in [lib/source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L355)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Defined in [lib/source-destination/source-destination.ts:361](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L361)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

*Defined in [lib/source-destination/source-destination.ts:377](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L377)*

**Parameters:**

▪`Default value`  **_options**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark?` | undefined &#124; number |

**Returns:** *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Defined in [lib/source-destination/source-destination.ts:405](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L405)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(`_options`: object): *Promise‹WritableStream›*

*Defined in [lib/source-destination/source-destination.ts:371](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L371)*

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

*Defined in [lib/source-destination/source-destination.ts:298](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L298)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Defined in [lib/source-destination/source-destination.ts:367](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L367)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Defined in [lib/source-destination/source-destination.ts:475](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L475)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

### `Private` getInnerSourceHelper

▸ **getInnerSourceHelper**(`mimetype?`: undefined | string): *Promise‹[SourceDestination](sourcedestination.md)‹››*

*Defined in [lib/source-destination/source-destination.ts:458](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L458)*

**Parameters:**

Name | Type |
------ | ------ |
`mimetype?` | undefined &#124; string |

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)‹››*

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

*Defined in [lib/source-destination/source-destination.ts:326](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L326)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Private` getMimeTypeFromContent

▸ **getMimeTypeFromContent**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:439](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L439)*

**Returns:** *Promise‹string | undefined›*

___

### `Private` getMimeTypeFromName

▸ **getMimeTypeFromName**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:428](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L428)*

**Returns:** *Promise‹string | undefined›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Defined in [lib/source-destination/source-destination.ts:496](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L496)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

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

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L383)*

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

▸ **read**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Defined in [lib/source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L337)*

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

*Defined in [lib/source-destination/source-destination.ts:346](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L346)*

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

*Defined in [lib/source-destination/source-destination.ts:292](https://github.com/balena-io-modules/etcher-sdk/blob/7246f9c/lib/source-destination/source-destination.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
