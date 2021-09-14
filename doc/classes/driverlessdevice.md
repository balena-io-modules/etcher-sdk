[etcher-sdk](../README.md) › [DriverlessDevice](driverlessdevice.md)

# Class: DriverlessDevice

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **DriverlessDevice**

## Implements

* [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

## Index

### Constructors

* [constructor](driverlessdevice.md#constructor)

### Properties

* [accessible](driverlessdevice.md#accessible)
* [description](driverlessdevice.md#description)
* [device](driverlessdevice.md#device)
* [deviceDescriptor](driverlessdevice.md#devicedescriptor)
* [devicePath](driverlessdevice.md#devicepath)
* [emitsProgress](driverlessdevice.md#emitsprogress)
* [isSystem](driverlessdevice.md#issystem)
* [mountpoints](driverlessdevice.md#mountpoints)
* [raw](driverlessdevice.md#raw)
* [size](driverlessdevice.md#size)
* [defaultMaxListeners](driverlessdevice.md#static-defaultmaxlisteners)
* [imageExtensions](driverlessdevice.md#static-readonly-imageextensions)
* [mimetype](driverlessdevice.md#static-optional-readonly-mimetype)

### Methods

* [_close](driverlessdevice.md#protected-_close)
* [_getMetadata](driverlessdevice.md#protected-_getmetadata)
* [_open](driverlessdevice.md#protected-_open)
* [addListener](driverlessdevice.md#addlistener)
* [canCreateReadStream](driverlessdevice.md#cancreatereadstream)
* [canCreateSparseReadStream](driverlessdevice.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](driverlessdevice.md#cancreatesparsewritestream)
* [canCreateWriteStream](driverlessdevice.md#cancreatewritestream)
* [canRead](driverlessdevice.md#canread)
* [canWrite](driverlessdevice.md#canwrite)
* [close](driverlessdevice.md#close)
* [createReadStream](driverlessdevice.md#createreadstream)
* [createSparseReadStream](driverlessdevice.md#createsparsereadstream)
* [createSparseWriteStream](driverlessdevice.md#createsparsewritestream)
* [createVerifier](driverlessdevice.md#createverifier)
* [createWriteStream](driverlessdevice.md#createwritestream)
* [emit](driverlessdevice.md#emit)
* [eventNames](driverlessdevice.md#eventnames)
* [getAlignment](driverlessdevice.md#getalignment)
* [getBlocks](driverlessdevice.md#getblocks)
* [getInnerSource](driverlessdevice.md#getinnersource)
* [getMaxListeners](driverlessdevice.md#getmaxlisteners)
* [getMetadata](driverlessdevice.md#getmetadata)
* [getPartitionTable](driverlessdevice.md#getpartitiontable)
* [listenerCount](driverlessdevice.md#listenercount)
* [listeners](driverlessdevice.md#listeners)
* [off](driverlessdevice.md#off)
* [on](driverlessdevice.md#on)
* [once](driverlessdevice.md#once)
* [open](driverlessdevice.md#open)
* [prependListener](driverlessdevice.md#prependlistener)
* [prependOnceListener](driverlessdevice.md#prependoncelistener)
* [rawListeners](driverlessdevice.md#rawlisteners)
* [read](driverlessdevice.md#read)
* [removeAllListeners](driverlessdevice.md#removealllisteners)
* [removeListener](driverlessdevice.md#removelistener)
* [setMaxListeners](driverlessdevice.md#setmaxlisteners)
* [write](driverlessdevice.md#write)
* [listenerCount](driverlessdevice.md#static-listenercount)
* [once](driverlessdevice.md#static-once)
* [register](driverlessdevice.md#static-register)

## Constructors

###  constructor

\+ **new DriverlessDevice**(`driverlessDevice`: WinUsbDriverlessDevice): *[DriverlessDevice](driverlessdevice.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/driverless.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`driverlessDevice` | WinUsbDriverlessDevice |

**Returns:** *[DriverlessDevice](driverlessdevice.md)*

## Properties

###  accessible

• **accessible**: *boolean* = false

*Defined in [lib/source-destination/driverless.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L25)*

___

###  description

• **description**: *string* = ""

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[description](../interfaces/adaptersourcedestination.md#description)*

*Defined in [lib/source-destination/driverless.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L34)*

___

###  device

• **device**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[device](../interfaces/adaptersourcedestination.md#device)*

*Defined in [lib/source-destination/driverless.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L27)*

___

###  deviceDescriptor

• **deviceDescriptor**: *object*

*Defined in [lib/source-destination/driverless.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L33)*

#### Type declaration:

* **idProduct**: *number*

* **idVendor**: *number*

___

###  devicePath

• **devicePath**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[devicePath](../interfaces/adaptersourcedestination.md#devicepath)*

*Defined in [lib/source-destination/driverless.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L28)*

___

###  emitsProgress

• **emitsProgress**: *boolean* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [lib/source-destination/driverless.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L32)*

___

###  isSystem

• **isSystem**: *boolean* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[isSystem](../interfaces/adaptersourcedestination.md#issystem)*

*Defined in [lib/source-destination/driverless.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L29)*

___

###  mountpoints

• **mountpoints**: *never[]* = []

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mountpoints](../interfaces/adaptersourcedestination.md#mountpoints)*

*Defined in [lib/source-destination/driverless.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L30)*

___

###  raw

• **raw**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[raw](../interfaces/adaptersourcedestination.md#raw)*

*Defined in [lib/source-destination/driverless.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L26)*

___

###  size

• **size**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[size](../interfaces/adaptersourcedestination.md#size)*

*Defined in [lib/source-destination/driverless.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/driverless.ts#L31)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[defaultMaxListeners](../interfaces/adaptersourcedestination.md#static-defaultmaxlisteners)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[imageExtensions](../interfaces/adaptersourcedestination.md#static-readonly-imageextensions)*

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-readonly-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L296)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mimetype](../interfaces/adaptersourcedestination.md#static-optional-readonly-mimetype)*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L308)*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#protected-_close)*

*Defined in [lib/source-destination/source-destination.ts:423](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L423)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[_getMetadata](sourcesource.md#protected-_getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L355)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#protected-_open)*

*Defined in [lib/source-destination/source-destination.ts:419](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L419)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/source-destination.ts:332](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L332)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:336](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L336)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseWriteStream](sourcesource.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L344)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateWriteStream](sourcesource.md#cancreatewritestream)*

*Defined in [lib/source-destination/source-destination.ts:340](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L340)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/source-destination.ts:324](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L324)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canWrite](sourcesource.md#canwrite)*

*Defined in [lib/source-destination/source-destination.ts:328](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L328)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:412](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L412)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`_options`: [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md)): *Promise‹ReadableStream›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/source-destination.ts:377](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L377)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateReadStreamOptions](../interfaces/createreadstreamoptions.md) | {} |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *number | undefined*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getAlignment](sourcesource.md#getalignment)*

*Defined in [lib/source-destination/source-destination.ts:320](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L320)*

**Returns:** *number | undefined*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:389](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L389)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:497](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L497)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:348](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L348)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
