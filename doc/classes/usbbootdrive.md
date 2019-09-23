[etcher-sdk](../README.md) > [UsbbootDrive](../classes/usbbootdrive.md)

# Class: UsbbootDrive

## Hierarchy

↳  [SourceDestination](sourcedestination.md)

**↳ UsbbootDrive**

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
* [raw](usbbootdrive.md#raw)
* [size](usbbootdrive.md#size)
* [usbDevice](usbbootdrive.md#usbdevice)
* [defaultMaxListeners](usbbootdrive.md#defaultmaxlisteners)
* [imageExtensions](usbbootdrive.md#imageextensions)
* [mimetype](usbbootdrive.md#mimetype)

### Methods

* [_close](usbbootdrive.md#_close)
* [_getMetadata](usbbootdrive.md#_getmetadata)
* [_open](usbbootdrive.md#_open)
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
* [getBlocks](usbbootdrive.md#getblocks)
* [getInnerSource](usbbootdrive.md#getinnersource)
* [getMaxListeners](usbbootdrive.md#getmaxlisteners)
* [getMetadata](usbbootdrive.md#getmetadata)
* [getPartitionTable](usbbootdrive.md#getpartitiontable)
* [listenerCount](usbbootdrive.md#listenercount)
* [listeners](usbbootdrive.md#listeners)
* [on](usbbootdrive.md#on)
* [once](usbbootdrive.md#once)
* [open](usbbootdrive.md#open)
* [prependListener](usbbootdrive.md#prependlistener)
* [prependOnceListener](usbbootdrive.md#prependoncelistener)
* [read](usbbootdrive.md#read)
* [removeAllListeners](usbbootdrive.md#removealllisteners)
* [removeListener](usbbootdrive.md#removelistener)
* [setMaxListeners](usbbootdrive.md#setmaxlisteners)
* [write](usbbootdrive.md#write)
* [listenerCount](usbbootdrive.md#listenercount-1)
* [register](usbbootdrive.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UsbbootDrive**(usbDevice: *`UsbbootDevice`*): [UsbbootDrive](usbbootdrive.md)

*Defined in [source-destination/usbboot.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| usbDevice | `UsbbootDevice` |

**Returns:** [UsbbootDrive](usbbootdrive.md)

___

## Properties

<a id="description"></a>

###  description

**● description**: *`string`* = "Compute Module"

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[description](../interfaces/adaptersourcedestination.md#description)*

*Defined in [source-destination/usbboot.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L30)*

___
<a id="device"></a>

###  device

**● device**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[device](../interfaces/adaptersourcedestination.md#device)*

*Defined in [source-destination/usbboot.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L26)*

___
<a id="devicepath"></a>

###  devicePath

**● devicePath**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[devicePath](../interfaces/adaptersourcedestination.md#devicepath)*

*Defined in [source-destination/usbboot.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L27)*

___
<a id="disabled"></a>

###  disabled

**● disabled**: *`boolean`* = true

*Defined in [source-destination/usbboot.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L33)*

___
<a id="displayname"></a>

###  displayName

**● displayName**: *`string`* = "Initializing device"

*Defined in [source-destination/usbboot.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L25)*

___
<a id="emitsprogress"></a>

###  emitsProgress

**● emitsProgress**: *`boolean`* = true

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [source-destination/usbboot.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L35)*

___
<a id="icon"></a>

###  icon

**● icon**: *`string`* = "loading"

*Defined in [source-destination/usbboot.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L28)*

___
<a id="isreadonly"></a>

###  isReadOnly

**● isReadOnly**: *`boolean`* = false

*Defined in [source-destination/usbboot.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L32)*

___
<a id="issystem"></a>

###  isSystem

**● isSystem**: *`boolean`* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[isSystem](../interfaces/adaptersourcedestination.md#issystem)*

*Defined in [source-destination/usbboot.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L29)*

___
<a id="mountpoints"></a>

###  mountpoints

**● mountpoints**: *`never`[]* =  []

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mountpoints](../interfaces/adaptersourcedestination.md#mountpoints)*

*Defined in [source-destination/usbboot.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L31)*

___
<a id="raw"></a>

###  raw

**● raw**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[raw](../interfaces/adaptersourcedestination.md#raw)*

*Defined in [source-destination/usbboot.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L24)*

___
<a id="size"></a>

###  size

**● size**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[size](../interfaces/adaptersourcedestination.md#size)*

*Defined in [source-destination/usbboot.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L34)*

___
<a id="usbdevice"></a>

###  usbDevice

**● usbDevice**: *`UsbbootDevice`*

*Defined in [source-destination/usbboot.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/usbboot.ts#L37)*

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

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_close](../interfaces/adaptersourcedestination.md#_close)*

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L353)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_getMetadata](../interfaces/adaptersourcedestination.md#_getmetadata)*

*Inherited from [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L287)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_open](../interfaces/adaptersourcedestination.md#_open)*

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L349)*

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
<a id="cancreatereadstream"></a>

###  canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateReadStream](../interfaces/adaptersourcedestination.md#cancreatereadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L264)*

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

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L276)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateWriteStream](../interfaces/adaptersourcedestination.md#cancreatewritestream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L272)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canRead](../interfaces/adaptersourcedestination.md#canread)*

*Inherited from [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L256)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canWrite](../interfaces/adaptersourcedestination.md#canwrite)*

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L260)*

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

▸ **createReadStream**(_emitProgress?: *`boolean`*, _start?: *`number`*, _end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createReadStream](../interfaces/adaptersourcedestination.md#createreadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/source-destination.ts:309](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L309)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _emitProgress | `boolean` | false |
| `Default value` _start | `number` | 0 |
| `Optional` _end | `undefined` \| `number` | - |

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

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createSparseWriteStream](../interfaces/adaptersourcedestination.md#createsparsewritestream)*

*Inherited from [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L331)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

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

▸ **createWriteStream**(): `Promise`<`WritableStream`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createWriteStream](../interfaces/adaptersourcedestination.md#createwritestream)*

*Inherited from [SourceDestination](sourcedestination.md).[createWriteStream](sourcedestination.md#createwritestream)*

*Defined in [source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L327)*

**Returns:** `Promise`<`WritableStream`>

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

▸ **read**(_buffer: *`Buffer`*, _bufferOffset: *`number`*, _length: *`number`*, _sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[read](../interfaces/adaptersourcedestination.md#read)*

*Inherited from [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/source-destination.ts:291](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L291)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _buffer | `Buffer` |
| _bufferOffset | `number` |
| _length | `number` |
| _sourceOffset | `number` |

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

▸ **write**(_buffer: *`Buffer`*, _bufferOffset: *`number`*, _length: *`number`*, _fileOffset: *`number`*): `Promise`<`WriteResult`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[write](../interfaces/adaptersourcedestination.md#write)*

*Inherited from [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

*Defined in [source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L300)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _buffer | `Buffer` |
| _bufferOffset | `number` |
| _length | `number` |
| _fileOffset | `number` |

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

