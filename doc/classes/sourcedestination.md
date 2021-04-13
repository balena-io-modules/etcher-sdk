[etcher-sdk](../README.md) › [SourceDestination](sourcedestination.md)

# Class: SourceDestination

## Hierarchy

* EventEmitter

  ↳ **SourceDestination**

  ↳ [SourceSource](sourcesource.md)

  ↳ [File](file.md)

  ↳ [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

  ↳ [MultiDestination](multidestination.md)

  ↳ [UsbBBbootDrive](usbbbbootdrive.md)

  ↳ [UsbbootDrive](usbbootdrive.md)

  ↳ [DriverlessDevice](driverlessdevice.md)

  ↳ [Http](http.md)

  ↳ [BalenaS3SourceBase](balenas3sourcebase.md)

  ↳ [SingleUseStreamSource](singleusestreamsource.md)

## Index

### Constructors

* [constructor](sourcedestination.md#constructor)

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
* [once](sourcedestination.md#static-once)
* [register](sourcedestination.md#static-register)

## Constructors

###  constructor

\+ **new SourceDestination**(): *[SourceDestination](sourcedestination.md)*

*Inherited from [Verifier](verifier.md).[constructor](verifier.md#constructor)*

Defined in node_modules/@types/node/events.d.ts:10

**Returns:** *[SourceDestination](sourcedestination.md)*

## Properties

### `Private` isOpen

• **isOpen**: *boolean* = false

*Defined in [lib/source-destination/source-destination.ts:330](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L330)*

___

### `Private` metadata

• **metadata**: *[Metadata](../interfaces/metadata.md)*

*Defined in [lib/source-destination/source-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L329)*

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

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L314)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Defined in [lib/source-destination/source-destination.ts:326](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L326)*

___

### `Static` `Private` mimetypes

▪ **mimetypes**: *Map‹string, [SourceSource](sourcesource.md)›* = new Map<string, typeof SourceSource>()

*Defined in [lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L327)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:441](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L441)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Defined in [lib/source-destination/source-destination.ts:373](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L373)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

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

*Defined in [lib/source-destination/source-destination.ts:350](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L350)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:354](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L354)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:362](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L362)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:358](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L358)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Defined in [lib/source-destination/source-destination.ts:346](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L346)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Defined in [lib/source-destination/source-destination.ts:430](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L430)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Defined in [lib/source-destination/source-destination.ts:395](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L395)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Defined in [lib/source-destination/source-destination.ts:401](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L401)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`_options`: object): *Promise‹[SparseWritable](../interfaces/sparsewritable.md)›*

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

*Defined in [lib/source-destination/source-destination.ts:338](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L338)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Defined in [lib/source-destination/source-destination.ts:407](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L407)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Defined in [lib/source-destination/source-destination.ts:515](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L515)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

### `Private` getInnerSourceHelper

▸ **getInnerSourceHelper**(`mimetype?`: undefined | string): *Promise‹[SourceDestination](sourcedestination.md)‹››*

*Defined in [lib/source-destination/source-destination.ts:498](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L498)*

**Parameters:**

Name | Type |
------ | ------ |
`mimetype?` | undefined &#124; string |

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)‹››*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Defined in [lib/source-destination/source-destination.ts:366](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L366)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Private` getMimeTypeFromContent

▸ **getMimeTypeFromContent**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:479](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L479)*

**Returns:** *Promise‹string | undefined›*

___

### `Private` getMimeTypeFromName

▸ **getMimeTypeFromName**(): *Promise‹string | undefined›*

*Defined in [lib/source-destination/source-destination.ts:468](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L468)*

**Returns:** *Promise‹string | undefined›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Defined in [lib/source-destination/source-destination.ts:536](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L536)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

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

▸ **read**(`_buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_bufferOffset`: number, `_length`: number, `_sourceOffset`: number): *Promise‹ReadResult›*

*Defined in [lib/source-destination/source-destination.ts:377](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L377)*

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

*Defined in [lib/source-destination/source-destination.ts:332](https://github.com/balena-io-modules/etcher-sdk/blob/78fae11/lib/source-destination/source-destination.ts#L332)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
