[etcher-sdk](../README.md) > [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

# Interface: AdapterSourceDestination

## Hierarchy

↳  [SourceDestination](../classes/sourcedestination.md)

**↳ AdapterSourceDestination**

## Implemented by

* [BlockDevice](../classes/blockdevice.md)
* [DriverlessDevice](../classes/driverlessdevice.md)
* [UsbbootDrive](../classes/usbbootdrive.md)

## Index

### Properties

* [description](adaptersourcedestination.md#description)
* [device](adaptersourcedestination.md#device)
* [devicePath](adaptersourcedestination.md#devicepath)
* [emitsProgress](adaptersourcedestination.md#emitsprogress)
* [isSystem](adaptersourcedestination.md#issystem)
* [mountpoints](adaptersourcedestination.md#mountpoints)
* [raw](adaptersourcedestination.md#raw)
* [size](adaptersourcedestination.md#size)
* [defaultMaxListeners](adaptersourcedestination.md#defaultmaxlisteners)
* [imageExtensions](adaptersourcedestination.md#imageextensions)
* [mimetype](adaptersourcedestination.md#mimetype)

### Methods

* [_close](adaptersourcedestination.md#_close)
* [_getMetadata](adaptersourcedestination.md#_getmetadata)
* [_open](adaptersourcedestination.md#_open)
* [addListener](adaptersourcedestination.md#addlistener)
* [canCreateReadStream](adaptersourcedestination.md#cancreatereadstream)
* [canCreateSparseReadStream](adaptersourcedestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](adaptersourcedestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](adaptersourcedestination.md#cancreatewritestream)
* [canRead](adaptersourcedestination.md#canread)
* [canWrite](adaptersourcedestination.md#canwrite)
* [close](adaptersourcedestination.md#close)
* [createReadStream](adaptersourcedestination.md#createreadstream)
* [createSparseReadStream](adaptersourcedestination.md#createsparsereadstream)
* [createSparseWriteStream](adaptersourcedestination.md#createsparsewritestream)
* [createVerifier](adaptersourcedestination.md#createverifier)
* [createWriteStream](adaptersourcedestination.md#createwritestream)
* [emit](adaptersourcedestination.md#emit)
* [eventNames](adaptersourcedestination.md#eventnames)
* [getBlocks](adaptersourcedestination.md#getblocks)
* [getInnerSource](adaptersourcedestination.md#getinnersource)
* [getMaxListeners](adaptersourcedestination.md#getmaxlisteners)
* [getMetadata](adaptersourcedestination.md#getmetadata)
* [getPartitionTable](adaptersourcedestination.md#getpartitiontable)
* [listenerCount](adaptersourcedestination.md#listenercount)
* [listeners](adaptersourcedestination.md#listeners)
* [on](adaptersourcedestination.md#on)
* [once](adaptersourcedestination.md#once)
* [open](adaptersourcedestination.md#open)
* [prependListener](adaptersourcedestination.md#prependlistener)
* [prependOnceListener](adaptersourcedestination.md#prependoncelistener)
* [read](adaptersourcedestination.md#read)
* [removeAllListeners](adaptersourcedestination.md#removealllisteners)
* [removeListener](adaptersourcedestination.md#removelistener)
* [setMaxListeners](adaptersourcedestination.md#setmaxlisteners)
* [write](adaptersourcedestination.md#write)
* [listenerCount](adaptersourcedestination.md#listenercount-1)
* [register](adaptersourcedestination.md#register)

---

## Properties

<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [scanner/adapters/adapter.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L27)*

___
<a id="device"></a>

###  device

**● device**: *`string` \| `null`*

*Defined in [scanner/adapters/adapter.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L24)*

___
<a id="devicepath"></a>

###  devicePath

**● devicePath**: *`string` \| `null`*

*Defined in [scanner/adapters/adapter.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L25)*

___
<a id="emitsprogress"></a>

###  emitsProgress

**● emitsProgress**: *`boolean`*

*Defined in [scanner/adapters/adapter.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L30)*

___
<a id="issystem"></a>

###  isSystem

**● isSystem**: *`boolean`*

*Defined in [scanner/adapters/adapter.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L26)*

___
<a id="mountpoints"></a>

###  mountpoints

**● mountpoints**: *`Array`<`object`>*

*Defined in [scanner/adapters/adapter.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L28)*

___
<a id="raw"></a>

###  raw

**● raw**: *`string` \| `null`*

*Defined in [scanner/adapters/adapter.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L23)*

___
<a id="size"></a>

###  size

**● size**: *`number` \| `null`*

*Defined in [scanner/adapters/adapter.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/adapter.ts#L29)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:715*

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

*Inherited from [SourceDestination](../classes/sourcedestination.md).[imageExtensions](../classes/sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:234](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L234)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Inherited from [SourceDestination](../classes/sourcedestination.md).[mimetype](../classes/sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:246](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L246)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_close](../classes/sourcedestination.md#_close)*

*Defined in [source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L355)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](metadata.md)>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_getMetadata](../classes/sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:289](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L289)*

**Returns:** `Promise`<[Metadata](metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[_open](../classes/sourcedestination.md#_open)*

*Defined in [source-destination/source-destination.ts:351](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L351)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:717*

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

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canCreateReadStream](../classes/sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/source-destination.ts:266](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L266)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canCreateSparseReadStream](../classes/sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/source-destination.ts:270](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L270)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canCreateSparseWriteStream](../classes/sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:278](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L278)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canCreateWriteStream](../classes/sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L274)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canRead](../classes/sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:258](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L258)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[canWrite](../classes/sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:262](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L262)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[close](../classes/sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L344)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, _start?: *`number`*, _end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[createReadStream](../classes/sourcedestination.md#createreadstream)*

*Defined in [source-destination/source-destination.ts:311](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L311)*

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

▸ **createSparseReadStream**(_generateChecksums?: *`boolean`*): `Promise`<[SparseReadable](sparsereadable.md)>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[createSparseReadStream](../classes/sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/source-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L319)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _generateChecksums | `boolean` | false |

**Returns:** `Promise`<[SparseReadable](sparsereadable.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](sparsewritable.md)>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[createSparseWriteStream](../classes/sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L333)*

**Returns:** `Promise`<[SparseWritable](sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](../classes/verifier.md)

*Inherited from [SourceDestination](../classes/sourcedestination.md).[createVerifier](../classes/sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L359)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| checksumOrBlocks | `string` \| [BlocksWithChecksum](blockswithchecksum.md)[] |
| `Optional` size | `undefined` \| `number` |

**Returns:** [Verifier](../classes/verifier.md)

___
<a id="createwritestream"></a>

###  createWriteStream

▸ **createWriteStream**(): `Promise`<`WritableStream`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[createWriteStream](../classes/sourcedestination.md#createwritestream)*

*Defined in [source-destination/source-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L329)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:727*

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

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](blockswithchecksum.md)[]>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[getBlocks](../classes/sourcedestination.md#getblocks)*

*Defined in [source-destination/source-destination.ts:325](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L325)*

**Returns:** `Promise`<[BlocksWithChecksum](blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](../classes/sourcedestination.md)>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[getInnerSource](../classes/sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L426)*

**Returns:** `Promise`<[SourceDestination](../classes/sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](metadata.md)>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[getMetadata](../classes/sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:282](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L282)*

**Returns:** `Promise`<[Metadata](metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[getPartitionTable](../classes/sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:447](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L447)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:729*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:726*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:718*

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

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:719*

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

*Inherited from [SourceDestination](../classes/sourcedestination.md).[open](../classes/sourcedestination.md#open)*

*Defined in [source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L337)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:720*

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

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:721*

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

*Inherited from [SourceDestination](../classes/sourcedestination.md).[read](../classes/sourcedestination.md#read)*

*Defined in [source-destination/source-destination.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L293)*

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

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:723*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:722*

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

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:724*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="write"></a>

###  write

▸ **write**(_buffer: *`Buffer`*, _bufferOffset: *`number`*, _length: *`number`*, _fileOffset: *`number`*): `Promise`<`WriteResult`>

*Inherited from [SourceDestination](../classes/sourcedestination.md).[write](../classes/sourcedestination.md#write)*

*Defined in [source-destination/source-destination.ts:302](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L302)*

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

*Inherited from EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___
<a id="register"></a>

### `<Static>` register

▸ **register**(Cls: *[SourceSource](../classes/sourcesource.md)*): `void`

*Inherited from [SourceDestination](../classes/sourcedestination.md).[register](../classes/sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](../classes/sourcesource.md) |

**Returns:** `void`

___

