[etcher-sdk](../README.md) > [BlockDevice](../classes/blockdevice.md)

# Class: BlockDevice

## Hierarchy

↳  [File](file.md)

**↳ BlockDevice**

## Implements

* [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

## Index

### Constructors

* [constructor](blockdevice.md#constructor)

### Properties

* [blockSize](blockdevice.md#blocksize)
* [drive](blockdevice.md#drive)
* [emitsProgress](blockdevice.md#emitsprogress)
* [fd](blockdevice.md#fd)
* [unmountOnSuccess](blockdevice.md#unmountonsuccess)
* [OpenFlags](blockdevice.md#openflags)
* [defaultMaxListeners](blockdevice.md#defaultmaxlisteners)
* [imageExtensions](blockdevice.md#imageextensions)
* [mimetype](blockdevice.md#mimetype)

### Accessors

* [description](blockdevice.md#description)
* [device](blockdevice.md#device)
* [devicePath](blockdevice.md#devicepath)
* [isSystem](blockdevice.md#issystem)
* [mountpoints](blockdevice.md#mountpoints)
* [raw](blockdevice.md#raw)
* [size](blockdevice.md#size)

### Methods

* [_close](blockdevice.md#_close)
* [_getMetadata](blockdevice.md#_getmetadata)
* [_open](blockdevice.md#_open)
* [addListener](blockdevice.md#addlistener)
* [alignOffsetAfter](blockdevice.md#alignoffsetafter)
* [alignOffsetBefore](blockdevice.md#alignoffsetbefore)
* [alignedRead](blockdevice.md#alignedread)
* [alignedWrite](blockdevice.md#alignedwrite)
* [canCreateReadStream](blockdevice.md#cancreatereadstream)
* [canCreateSparseReadStream](blockdevice.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](blockdevice.md#cancreatesparsewritestream)
* [canCreateWriteStream](blockdevice.md#cancreatewritestream)
* [canRead](blockdevice.md#canread)
* [canWrite](blockdevice.md#canwrite)
* [close](blockdevice.md#close)
* [createReadStream](blockdevice.md#createreadstream)
* [createSparseReadStream](blockdevice.md#createsparsereadstream)
* [createSparseWriteStream](blockdevice.md#createsparsewritestream)
* [createVerifier](blockdevice.md#createverifier)
* [createWriteStream](blockdevice.md#createwritestream)
* [emit](blockdevice.md#emit)
* [eventNames](blockdevice.md#eventnames)
* [getBlocks](blockdevice.md#getblocks)
* [getInnerSource](blockdevice.md#getinnersource)
* [getMaxListeners](blockdevice.md#getmaxlisteners)
* [getMetadata](blockdevice.md#getmetadata)
* [getPartitionTable](blockdevice.md#getpartitiontable)
* [listenerCount](blockdevice.md#listenercount)
* [listeners](blockdevice.md#listeners)
* [offsetIsAligned](blockdevice.md#offsetisaligned)
* [on](blockdevice.md#on)
* [once](blockdevice.md#once)
* [open](blockdevice.md#open)
* [prependListener](blockdevice.md#prependlistener)
* [prependOnceListener](blockdevice.md#prependoncelistener)
* [read](blockdevice.md#read)
* [removeAllListeners](blockdevice.md#removealllisteners)
* [removeListener](blockdevice.md#removelistener)
* [setMaxListeners](blockdevice.md#setmaxlisteners)
* [write](blockdevice.md#write)
* [listenerCount](blockdevice.md#listenercount-1)
* [register](blockdevice.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlockDevice**(drive: *[DrivelistDrive](../interfaces/drivelistdrive.md)*, unmountOnSuccess?: *`boolean`*): [BlockDevice](blockdevice.md)

*Overrides [File](file.md).[constructor](file.md#constructor)*

*Defined in [source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L48)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| drive | [DrivelistDrive](../interfaces/drivelistdrive.md) | - |
| `Default value` unmountOnSuccess | `boolean` | false |

**Returns:** [BlockDevice](blockdevice.md)

___

## Properties

<a id="blocksize"></a>

###  blockSize

**● blockSize**: *`number`* = 512

*Inherited from [File](file.md).[blockSize](file.md#blocksize)*

*Defined in [source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L58)*

___
<a id="drive"></a>

### `<Private>` drive

**● drive**: *[DrivelistDrive](../interfaces/drivelistdrive.md)*

*Defined in [source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L50)*

___
<a id="emitsprogress"></a>

###  emitsProgress

**● emitsProgress**: *`boolean`* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L48)*

___
<a id="fd"></a>

### `<Protected>` fd

**● fd**: *`number`*

*Inherited from [File](file.md).[fd](file.md#fd)*

*Defined in [source-destination/file.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L57)*

___
<a id="unmountonsuccess"></a>

### `<Private>` unmountOnSuccess

**● unmountOnSuccess**: *`boolean`*

*Defined in [source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L50)*

___
<a id="openflags"></a>

### `<Static>` OpenFlags

**● OpenFlags**: *[OpenFlags](../enums/openflags.md)* =  OpenFlags

*Inherited from [File](file.md).[OpenFlags](file.md#openflags)*

*Defined in [source-destination/file.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L56)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[defaultMaxListeners](../interfaces/adaptersourcedestination.md#defaultmaxlisteners)*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:715*

___
<a id="imageextensions"></a>

### `<Static>` imageExtensions

**● imageExtensions**: *`string`[]* =  [
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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[imageExtensions](../interfaces/adaptersourcedestination.md#imageextensions)*

*Inherited from [SourceDestination](sourcedestination.md).[imageExtensions](sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L232)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mimetype](../interfaces/adaptersourcedestination.md#mimetype)*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L244)*

___

## Accessors

<a id="description"></a>

###  description

**get description**(): `string`

*Defined in [source-destination/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L71)*

**Returns:** `string`

___
<a id="device"></a>

###  device

**get device**(): `string`

*Defined in [source-destination/block-device.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L63)*

**Returns:** `string`

___
<a id="devicepath"></a>

###  devicePath

**get devicePath**(): `string` \| `null`

*Defined in [source-destination/block-device.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L67)*

**Returns:** `string` \| `null`

___
<a id="issystem"></a>

###  isSystem

**get isSystem**(): `boolean`

*Defined in [source-destination/block-device.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L55)*

**Returns:** `boolean`

___
<a id="mountpoints"></a>

###  mountpoints

**get mountpoints**(): `Array`<`object`>

*Defined in [source-destination/block-device.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L75)*

**Returns:** `Array`<`object`>

___
<a id="raw"></a>

###  raw

**get raw**(): `string`

*Defined in [source-destination/block-device.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L59)*

**Returns:** `string`

___
<a id="size"></a>

###  size

**get size**(): `number` \| `null`

*Defined in [source-destination/block-device.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L79)*

**Returns:** `number` \| `null`

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_close](../interfaces/adaptersourcedestination.md#_close)*

*Overrides [File](file.md).[_close](file.md#_close)*

*Defined in [source-destination/block-device.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L127)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_getMetadata](../interfaces/adaptersourcedestination.md#_getmetadata)*

*Overrides [File](file.md).[_getMetadata](file.md#_getmetadata)*

*Defined in [source-destination/block-device.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L83)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_open](../interfaces/adaptersourcedestination.md#_open)*

*Overrides [File](file.md).[_open](file.md#_open)*

*Defined in [source-destination/block-device.ts:119](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L119)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[addListener](../interfaces/adaptersourcedestination.md#addlistener)*

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:717*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="alignoffsetafter"></a>

### `<Private>` alignOffsetAfter

▸ **alignOffsetAfter**(offset: *`number`*): `number`

*Defined in [source-destination/block-device.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L147)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `number`

___
<a id="alignoffsetbefore"></a>

### `<Private>` alignOffsetBefore

▸ **alignOffsetBefore**(offset: *`number`*): `number`

*Defined in [source-destination/block-device.ts:143](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `number`

___
<a id="alignedread"></a>

### `<Private>` alignedRead

▸ **alignedRead**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Defined in [source-destination/block-device.ts:151](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L151)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| sourceOffset | `number` |

**Returns:** `Promise`<`ReadResult`>

___
<a id="alignedwrite"></a>

### `<Private>` alignedWrite

▸ **alignedWrite**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`WriteResult`>

*Defined in [source-destination/block-device.ts:187](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L187)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| fileOffset | `number` |

**Returns:** `Promise`<`WriteResult`>

___
<a id="cancreatereadstream"></a>

###  canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateReadStream](../interfaces/adaptersourcedestination.md#cancreatereadstream)*

*Inherited from [File](file.md).[canCreateReadStream](file.md#cancreatereadstream)*

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/file.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L87)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateSparseReadStream](../interfaces/adaptersourcedestination.md#cancreatesparsereadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L268)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateSparseWriteStream](../interfaces/adaptersourcedestination.md#cancreatesparsewritestream)*

*Overrides [File](file.md).[canCreateSparseWriteStream](file.md#cancreatesparsewritestream)*

*Defined in [source-destination/block-device.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L97)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateWriteStream](../interfaces/adaptersourcedestination.md#cancreatewritestream)*

*Overrides [File](file.md).[canCreateWriteStream](file.md#cancreatewritestream)*

*Defined in [source-destination/block-device.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L93)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canRead](../interfaces/adaptersourcedestination.md#canread)*

*Inherited from [File](file.md).[canRead](file.md#canread)*

*Overrides [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/file.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L79)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canWrite](../interfaces/adaptersourcedestination.md#canwrite)*

*Overrides [File](file.md).[canWrite](file.md#canwrite)*

*Defined in [source-destination/block-device.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L89)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[close](../interfaces/adaptersourcedestination.md#close)*

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L342)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(emitProgress?: *`boolean`*, start?: *`number`*, end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createReadStream](../interfaces/adaptersourcedestination.md#createreadstream)*

*Inherited from [File](file.md).[createReadStream](file.md#createreadstream)*

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/file.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/file.ts#L124)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` emitProgress | `boolean` | false |
| `Default value` start | `number` | 0 |
| `Optional` end | `undefined` \| `number` | - |

**Returns:** `Promise`<`ReadableStream`>

___
<a id="createsparsereadstream"></a>

###  createSparseReadStream

▸ **createSparseReadStream**(_generateChecksums?: *`boolean`*): `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createSparseReadStream](../interfaces/adaptersourcedestination.md#createsparsereadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[createSparseReadStream](sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _generateChecksums | `boolean` | false |

**Returns:** `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWriteStream](sparsewritestream.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createSparseWriteStream](../interfaces/adaptersourcedestination.md#createsparsewritestream)*

*Overrides [File](file.md).[createSparseWriteStream](file.md#createsparsewritestream)*

*Defined in [source-destination/block-device.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L110)*

**Returns:** `Promise`<[SparseWriteStream](sparsewritestream.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createVerifier](../interfaces/adaptersourcedestination.md#createverifier)*

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L357)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| checksumOrBlocks | `string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
| `Optional` size | `undefined` \| `number` |

**Returns:** [Verifier](verifier.md)

___
<a id="createwritestream"></a>

###  createWriteStream

▸ **createWriteStream**(): `Promise`<[BlockWriteStream](blockwritestream.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createWriteStream](../interfaces/adaptersourcedestination.md#createwritestream)*

*Overrides [File](file.md).[createWriteStream](file.md#createwritestream)*

*Defined in [source-destination/block-device.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L101)*

**Returns:** `Promise`<[BlockWriteStream](blockwritestream.md)>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emit](../interfaces/adaptersourcedestination.md#emit)*

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:727*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[eventNames](../interfaces/adaptersourcedestination.md#eventnames)*

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getBlocks](../interfaces/adaptersourcedestination.md#getblocks)*

*Inherited from [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L323)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getInnerSource](../interfaces/adaptersourcedestination.md#getinnersource)*

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L424)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getMaxListeners](../interfaces/adaptersourcedestination.md#getmaxlisteners)*

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getMetadata](../interfaces/adaptersourcedestination.md#getmetadata)*

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L280)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getPartitionTable](../interfaces/adaptersourcedestination.md#getpartitiontable)*

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L445)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[listenerCount](../interfaces/adaptersourcedestination.md#listenercount)*

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/index.d.ts:729*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[listeners](../interfaces/adaptersourcedestination.md#listeners)*

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /node_modules/@types/node/index.d.ts:726*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="offsetisaligned"></a>

### `<Private>` offsetIsAligned

▸ **offsetIsAligned**(offset: *`number`*): `boolean`

*Defined in [source-destination/block-device.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L139)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| offset | `number` |

**Returns:** `boolean`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[on](../interfaces/adaptersourcedestination.md#on)*

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:718*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[once](../interfaces/adaptersourcedestination.md#once)*

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:719*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="open"></a>

###  open

▸ **open**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[open](../interfaces/adaptersourcedestination.md#open)*

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

*Defined in [source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L335)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[prependListener](../interfaces/adaptersourcedestination.md#prependlistener)*

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:720*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[prependOnceListener](../interfaces/adaptersourcedestination.md#prependoncelistener)*

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:721*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="read"></a>

###  read

▸ **read**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[read](../interfaces/adaptersourcedestination.md#read)*

*Overrides [File](file.md).[read](file.md#read)*

*Defined in [source-destination/block-device.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L171)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| sourceOffset | `number` |

**Returns:** `Promise`<`ReadResult`>

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[removeAllListeners](../interfaces/adaptersourcedestination.md#removealllisteners)*

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /node_modules/@types/node/index.d.ts:723*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[removeListener](../interfaces/adaptersourcedestination.md#removelistener)*

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:722*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[setMaxListeners](../interfaces/adaptersourcedestination.md#setmaxlisteners)*

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:724*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="write"></a>

###  write

▸ **write**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`WriteResult`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[write](../interfaces/adaptersourcedestination.md#write)*

*Overrides [File](file.md).[write](file.md#write)*

*Defined in [source-destination/block-device.ts:203](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/block-device.ts#L203)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| fileOffset | `number` |

**Returns:** `Promise`<`WriteResult`>

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[listenerCount](../interfaces/adaptersourcedestination.md#listenercount-1)*

*Inherited from EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/index.d.ts:714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___
<a id="register"></a>

### `<Static>` register

▸ **register**(Cls: *[SourceSource](sourcesource.md)*): `void`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[register](../interfaces/adaptersourcedestination.md#register)*

*Inherited from [SourceDestination](sourcedestination.md).[register](sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

