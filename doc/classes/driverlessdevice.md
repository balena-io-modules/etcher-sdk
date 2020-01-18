[etcher-sdk](../README.md) > [DriverlessDevice](../classes/driverlessdevice.md)

# Class: DriverlessDevice

## Hierarchy

↳  [SourceDestination](sourcedestination.md)

**↳ DriverlessDevice**

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
* [defaultMaxListeners](driverlessdevice.md#defaultmaxlisteners)
* [imageExtensions](driverlessdevice.md#imageextensions)
* [mimetype](driverlessdevice.md#mimetype)

### Methods

* [_close](driverlessdevice.md#_close)
* [_getMetadata](driverlessdevice.md#_getmetadata)
* [_open](driverlessdevice.md#_open)
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
* [getBlocks](driverlessdevice.md#getblocks)
* [getInnerSource](driverlessdevice.md#getinnersource)
* [getMaxListeners](driverlessdevice.md#getmaxlisteners)
* [getMetadata](driverlessdevice.md#getmetadata)
* [getPartitionTable](driverlessdevice.md#getpartitiontable)
* [listenerCount](driverlessdevice.md#listenercount)
* [listeners](driverlessdevice.md#listeners)
* [on](driverlessdevice.md#on)
* [once](driverlessdevice.md#once)
* [open](driverlessdevice.md#open)
* [prependListener](driverlessdevice.md#prependlistener)
* [prependOnceListener](driverlessdevice.md#prependoncelistener)
* [read](driverlessdevice.md#read)
* [removeAllListeners](driverlessdevice.md#removealllisteners)
* [removeListener](driverlessdevice.md#removelistener)
* [setMaxListeners](driverlessdevice.md#setmaxlisteners)
* [write](driverlessdevice.md#write)
* [listenerCount](driverlessdevice.md#listenercount-1)
* [register](driverlessdevice.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DriverlessDevice**(driverlessDevice: *`WinUsbDriverlessDevice`*): [DriverlessDevice](driverlessdevice.md)

*Defined in [source-destination/driverless.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| driverlessDevice | `WinUsbDriverlessDevice` |

**Returns:** [DriverlessDevice](driverlessdevice.md)

___

## Properties

<a id="accessible"></a>

###  accessible

**● accessible**: *`boolean`* = false

*Defined in [source-destination/driverless.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L24)*

___
<a id="description"></a>

###  description

**● description**: *`string`* = ""

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[description](../interfaces/adaptersourcedestination.md#description)*

*Defined in [source-destination/driverless.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L33)*

___
<a id="device"></a>

###  device

**● device**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[device](../interfaces/adaptersourcedestination.md#device)*

*Defined in [source-destination/driverless.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L26)*

___
<a id="devicedescriptor"></a>

###  deviceDescriptor

**● deviceDescriptor**: *`object`*

*Defined in [source-destination/driverless.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L32)*

#### Type declaration

 idProduct: `number`

 idVendor: `number`

___
<a id="devicepath"></a>

###  devicePath

**● devicePath**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[devicePath](../interfaces/adaptersourcedestination.md#devicepath)*

*Defined in [source-destination/driverless.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L27)*

___
<a id="emitsprogress"></a>

###  emitsProgress

**● emitsProgress**: *`boolean`* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [source-destination/driverless.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L31)*

___
<a id="issystem"></a>

###  isSystem

**● isSystem**: *`boolean`* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[isSystem](../interfaces/adaptersourcedestination.md#issystem)*

*Defined in [source-destination/driverless.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L28)*

___
<a id="mountpoints"></a>

###  mountpoints

**● mountpoints**: *`never`[]* =  []

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mountpoints](../interfaces/adaptersourcedestination.md#mountpoints)*

*Defined in [source-destination/driverless.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L29)*

___
<a id="raw"></a>

###  raw

**● raw**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[raw](../interfaces/adaptersourcedestination.md#raw)*

*Defined in [source-destination/driverless.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L25)*

___
<a id="size"></a>

###  size

**● size**: *`null`* =  null

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[size](../interfaces/adaptersourcedestination.md#size)*

*Defined in [source-destination/driverless.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/driverless.ts#L30)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[defaultMaxListeners](../interfaces/adaptersourcedestination.md#defaultmaxlisteners)*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:681*

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

*Defined in [source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L232)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mimetype](../interfaces/adaptersourcedestination.md#mimetype)*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L244)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_close](../interfaces/adaptersourcedestination.md#_close)*

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L353)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_getMetadata](../interfaces/adaptersourcedestination.md#_getmetadata)*

*Inherited from [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L287)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[_open](../interfaces/adaptersourcedestination.md#_open)*

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L349)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[addListener](../interfaces/adaptersourcedestination.md#addlistener)*

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:683*

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

*Defined in [source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L264)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateSparseReadStream](../interfaces/adaptersourcedestination.md#cancreatesparsereadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L268)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateSparseWriteStream](../interfaces/adaptersourcedestination.md#cancreatesparsewritestream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L276)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canCreateWriteStream](../interfaces/adaptersourcedestination.md#cancreatewritestream)*

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L272)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canRead](../interfaces/adaptersourcedestination.md#canread)*

*Inherited from [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L256)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[canWrite](../interfaces/adaptersourcedestination.md#canwrite)*

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L260)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[close](../interfaces/adaptersourcedestination.md#close)*

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L342)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, _start?: *`number`*, _end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createReadStream](../interfaces/adaptersourcedestination.md#createreadstream)*

*Inherited from [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/source-destination.ts:309](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L309)*

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

*Defined in [source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L317)*

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

*Defined in [source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L331)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[createVerifier](../interfaces/adaptersourcedestination.md#createverifier)*

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L357)*

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

*Defined in [source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L327)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emit](../interfaces/adaptersourcedestination.md#emit)*

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:693*

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

*Defined in /node_modules/@types/node/base.d.ts:694*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getBlocks](../interfaces/adaptersourcedestination.md#getblocks)*

*Inherited from [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L323)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getInnerSource](../interfaces/adaptersourcedestination.md#getinnersource)*

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L424)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getMaxListeners](../interfaces/adaptersourcedestination.md#getmaxlisteners)*

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:691*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getMetadata](../interfaces/adaptersourcedestination.md#getmetadata)*

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L280)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[getPartitionTable](../interfaces/adaptersourcedestination.md#getpartitiontable)*

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L445)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[listenerCount](../interfaces/adaptersourcedestination.md#listenercount)*

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/base.d.ts:695*

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

*Defined in /node_modules/@types/node/base.d.ts:692*

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

*Defined in /node_modules/@types/node/base.d.ts:684*

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

*Defined in /node_modules/@types/node/base.d.ts:685*

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

*Defined in [source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L335)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[prependListener](../interfaces/adaptersourcedestination.md#prependlistener)*

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:686*

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

*Defined in /node_modules/@types/node/base.d.ts:687*

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

*Defined in [source-destination/source-destination.ts:291](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L291)*

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

*Defined in /node_modules/@types/node/base.d.ts:689*

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

*Defined in /node_modules/@types/node/base.d.ts:688*

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

*Defined in /node_modules/@types/node/base.d.ts:690*

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

*Defined in [source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L300)*

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

*Defined in /node_modules/@types/node/base.d.ts:680*

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

*Defined in [source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

