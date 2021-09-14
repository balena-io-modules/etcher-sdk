[etcher-sdk](../README.md) › [UsbbootDrive](usbbootdrive.md)

# Class: UsbbootDrive

## Hierarchy

  ↳ [SourceDestination](sourcedestination.md)

  ↳ **UsbbootDrive**

## Implements

* [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

## Index

### Constructors

* [constructor](usbbootdrive.md#constructor)

### Properties

* [description](usbbootdrive.md#description)
* [device](usbbootdrive.md#device)
* [devicePath](usbbootdrive.md#devicepath)
* [disabled](usbbootdrive.md#disabled)
* [displayName](usbbootdrive.md#displayname)
* [emitsProgress](usbbootdrive.md#emitsprogress)
* [icon](usbbootdrive.md#icon)
* [isReadOnly](usbbootdrive.md#isreadonly)
* [isSystem](usbbootdrive.md#issystem)
* [mountpoints](usbbootdrive.md#mountpoints)
* [progress](usbbootdrive.md#progress)
* [raw](usbbootdrive.md#raw)
* [size](usbbootdrive.md#size)
* [usbDevice](usbbootdrive.md#usbdevice)
* [defaultMaxListeners](usbbootdrive.md#static-defaultmaxlisteners)
* [imageExtensions](usbbootdrive.md#static-readonly-imageextensions)
* [mimetype](usbbootdrive.md#static-optional-readonly-mimetype)

### Methods

* [_close](usbbootdrive.md#protected-_close)
* [_getMetadata](usbbootdrive.md#protected-_getmetadata)
* [_open](usbbootdrive.md#protected-_open)
* [addListener](usbbootdrive.md#addlistener)
* [canCreateReadStream](usbbootdrive.md#cancreatereadstream)
* [canCreateSparseReadStream](usbbootdrive.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](usbbootdrive.md#cancreatesparsewritestream)
* [canCreateWriteStream](usbbootdrive.md#cancreatewritestream)
* [canRead](usbbootdrive.md#canread)
* [canWrite](usbbootdrive.md#canwrite)
* [close](usbbootdrive.md#close)
* [createReadStream](usbbootdrive.md#createreadstream)
* [createSparseReadStream](usbbootdrive.md#createsparsereadstream)
* [createSparseWriteStream](usbbootdrive.md#createsparsewritestream)
* [createVerifier](usbbootdrive.md#createverifier)
* [createWriteStream](usbbootdrive.md#createwritestream)
* [emit](usbbootdrive.md#emit)
* [eventNames](usbbootdrive.md#eventnames)
* [getAlignment](usbbootdrive.md#getalignment)
* [getBlocks](usbbootdrive.md#getblocks)
* [getInnerSource](usbbootdrive.md#getinnersource)
* [getMaxListeners](usbbootdrive.md#getmaxlisteners)
* [getMetadata](usbbootdrive.md#getmetadata)
* [getPartitionTable](usbbootdrive.md#getpartitiontable)
* [listenerCount](usbbootdrive.md#listenercount)
* [listeners](usbbootdrive.md#listeners)
* [off](usbbootdrive.md#off)
* [on](usbbootdrive.md#on)
* [once](usbbootdrive.md#once)
* [open](usbbootdrive.md#open)
* [prependListener](usbbootdrive.md#prependlistener)
* [prependOnceListener](usbbootdrive.md#prependoncelistener)
* [rawListeners](usbbootdrive.md#rawlisteners)
* [read](usbbootdrive.md#read)
* [removeAllListeners](usbbootdrive.md#removealllisteners)
* [removeListener](usbbootdrive.md#removelistener)
* [setMaxListeners](usbbootdrive.md#setmaxlisteners)
* [write](usbbootdrive.md#write)
* [listenerCount](usbbootdrive.md#static-listenercount)
* [once](usbbootdrive.md#static-once)
* [register](usbbootdrive.md#static-register)

## Constructors

###  constructor

\+ **new UsbbootDrive**(`usbDevice`: UsbbootDevice): *[UsbbootDrive](usbbootdrive.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/usbboot.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`usbDevice` | UsbbootDevice |

**Returns:** *[UsbbootDrive](usbbootdrive.md)*

## Properties

###  description

• **description**: *string* = "Compute Module"

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[description](../interfaces/adaptersourcedestination.md#description)*

*Defined in [lib/source-destination/usbboot.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L31)*

___

###  device

• **device**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[device](../interfaces/adaptersourcedestination.md#device)*

*Defined in [lib/source-destination/usbboot.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L27)*

___

###  devicePath

• **devicePath**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[devicePath](../interfaces/adaptersourcedestination.md#devicepath)*

*Defined in [lib/source-destination/usbboot.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L28)*

___

###  disabled

• **disabled**: *boolean* = true

*Defined in [lib/source-destination/usbboot.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L34)*

___

###  displayName

• **displayName**: *string* = "Initializing device"

*Defined in [lib/source-destination/usbboot.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L26)*

___

###  emitsProgress

• **emitsProgress**: *boolean* = true

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [lib/source-destination/usbboot.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L36)*

___

###  icon

• **icon**: *string* = "loading"

*Defined in [lib/source-destination/usbboot.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L29)*

___

###  isReadOnly

• **isReadOnly**: *boolean* = false

*Defined in [lib/source-destination/usbboot.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L33)*

___

###  isSystem

• **isSystem**: *boolean* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[isSystem](../interfaces/adaptersourcedestination.md#issystem)*

*Defined in [lib/source-destination/usbboot.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L30)*

___

###  mountpoints

• **mountpoints**: *never[]* = []

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mountpoints](../interfaces/adaptersourcedestination.md#mountpoints)*

*Defined in [lib/source-destination/usbboot.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L32)*

___

###  progress

• **progress**: *number* = 0

*Defined in [lib/source-destination/usbboot.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L37)*

___

###  raw

• **raw**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[raw](../interfaces/adaptersourcedestination.md#raw)*

*Defined in [lib/source-destination/usbboot.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L25)*

___

###  size

• **size**: *null* = null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[size](../interfaces/adaptersourcedestination.md#size)*

*Defined in [lib/source-destination/usbboot.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L35)*

___

###  usbDevice

• **usbDevice**: *UsbbootDevice*

*Defined in [lib/source-destination/usbboot.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/usbboot.ts#L39)*

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
