[etcher-sdk](../README.md) > [SourceDestination](../classes/sourcedestination.md)

# Class: SourceDestination

## Hierarchy

 `EventEmitter`

**↳ SourceDestination**

↳  [SourceSource](sourcesource.md)

↳  [File](file.md)

↳  [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

↳  [MultiDestination](multidestination.md)

↳  [UsbbootDrive](usbbootdrive.md)

↳  [DriverlessDevice](driverlessdevice.md)

↳  [Http](http.md)

↳  [BalenaS3Source](balenas3source.md)

↳  [SingleUseStreamSource](singleusestreamsource.md)

## Index

### Properties

* [isOpen](sourcedestination.md#isopen)
* [metadata](sourcedestination.md#metadata)
* [defaultMaxListeners](sourcedestination.md#defaultmaxlisteners)
* [imageExtensions](sourcedestination.md#imageextensions)
* [mimetype](sourcedestination.md#mimetype)
* [mimetypes](sourcedestination.md#mimetypes)

### Methods

* [_close](sourcedestination.md#_close)
* [_getMetadata](sourcedestination.md#_getmetadata)
* [_open](sourcedestination.md#_open)
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
* [getBlocks](sourcedestination.md#getblocks)
* [getInnerSource](sourcedestination.md#getinnersource)
* [getInnerSourceHelper](sourcedestination.md#getinnersourcehelper)
* [getMaxListeners](sourcedestination.md#getmaxlisteners)
* [getMetadata](sourcedestination.md#getmetadata)
* [getMimeTypeFromContent](sourcedestination.md#getmimetypefromcontent)
* [getMimeTypeFromName](sourcedestination.md#getmimetypefromname)
* [getPartitionTable](sourcedestination.md#getpartitiontable)
* [listenerCount](sourcedestination.md#listenercount)
* [listeners](sourcedestination.md#listeners)
* [on](sourcedestination.md#on)
* [once](sourcedestination.md#once)
* [open](sourcedestination.md#open)
* [prependListener](sourcedestination.md#prependlistener)
* [prependOnceListener](sourcedestination.md#prependoncelistener)
* [read](sourcedestination.md#read)
* [removeAllListeners](sourcedestination.md#removealllisteners)
* [removeListener](sourcedestination.md#removelistener)
* [setMaxListeners](sourcedestination.md#setmaxlisteners)
* [write](sourcedestination.md#write)
* [listenerCount](sourcedestination.md#listenercount-1)
* [register](sourcedestination.md#register)

---

## Properties

<a id="isopen"></a>

### `<Private>` isOpen

**● isOpen**: *`boolean`* = false

*Defined in [source-destination/source-destination.ts:248](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L248)*

___
<a id="metadata"></a>

### `<Private>` metadata

**● metadata**: *[Metadata](../interfaces/metadata.md)*

*Defined in [source-destination/source-destination.ts:247](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L247)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

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

*Defined in [source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L232)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Defined in [source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L244)*

___
<a id="mimetypes"></a>

### `<Static>``<Private>` mimetypes

**● mimetypes**: *`Map`<`string`, [SourceSource](sourcesource.md)>* =  new Map<string, typeof SourceSource>()

*Defined in [source-destination/source-destination.ts:245](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L245)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Defined in [source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L353)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Defined in [source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L287)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Defined in [source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L349)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

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

*Defined in [source-destination/source-destination.ts:264](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L264)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Defined in [source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L268)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Defined in [source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L276)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Defined in [source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L272)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Defined in [source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L256)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Defined in [source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L260)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Defined in [source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L342)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, _start?: *`number`*, _end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

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

*Defined in [source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L331)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

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

*Defined in [source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L327)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

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

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/base.d.ts:694*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Defined in [source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L323)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Defined in [source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L424)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getinnersourcehelper"></a>

### `<Private>` getInnerSourceHelper

▸ **getInnerSourceHelper**(mimetype?: *`undefined` \| `string`*): `Promise`<[SourceDestination](sourcedestination.md)>

*Defined in [source-destination/source-destination.ts:407](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L407)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` mimetype | `undefined` \| `string` |

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:691*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Defined in [source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L280)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getmimetypefromcontent"></a>

### `<Private>` getMimeTypeFromContent

▸ **getMimeTypeFromContent**(): `Promise`<`string` \| `undefined`>

*Defined in [source-destination/source-destination.ts:391](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L391)*

**Returns:** `Promise`<`string` \| `undefined`>

___
<a id="getmimetypefromname"></a>

### `<Private>` getMimeTypeFromName

▸ **getMimeTypeFromName**(): `Promise`<`string` \| `undefined`>

*Defined in [source-destination/source-destination.ts:380](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L380)*

**Returns:** `Promise`<`string` \| `undefined`>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Defined in [source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L445)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

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

*Defined in [source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L335)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

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

*Defined in [source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

