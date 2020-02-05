[etcher-sdk](../README.md) > [SingleUseStreamSource](../classes/singleusestreamsource.md)

# Class: SingleUseStreamSource

## Hierarchy

↳  [SourceDestination](sourcedestination.md)

**↳ SingleUseStreamSource**

## Index

### Constructors

* [constructor](singleusestreamsource.md#constructor)

### Properties

* [stream](singleusestreamsource.md#stream)
* [used](singleusestreamsource.md#used)
* [defaultMaxListeners](singleusestreamsource.md#defaultmaxlisteners)
* [imageExtensions](singleusestreamsource.md#imageextensions)
* [mimetype](singleusestreamsource.md#mimetype)

### Methods

* [_close](singleusestreamsource.md#_close)
* [_getMetadata](singleusestreamsource.md#_getmetadata)
* [_open](singleusestreamsource.md#_open)
* [addListener](singleusestreamsource.md#addlistener)
* [canCreateReadStream](singleusestreamsource.md#cancreatereadstream)
* [canCreateSparseReadStream](singleusestreamsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](singleusestreamsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](singleusestreamsource.md#cancreatewritestream)
* [canRead](singleusestreamsource.md#canread)
* [canWrite](singleusestreamsource.md#canwrite)
* [close](singleusestreamsource.md#close)
* [createReadStream](singleusestreamsource.md#createreadstream)
* [createSparseReadStream](singleusestreamsource.md#createsparsereadstream)
* [createSparseWriteStream](singleusestreamsource.md#createsparsewritestream)
* [createVerifier](singleusestreamsource.md#createverifier)
* [createWriteStream](singleusestreamsource.md#createwritestream)
* [emit](singleusestreamsource.md#emit)
* [eventNames](singleusestreamsource.md#eventnames)
* [getBlocks](singleusestreamsource.md#getblocks)
* [getInnerSource](singleusestreamsource.md#getinnersource)
* [getMaxListeners](singleusestreamsource.md#getmaxlisteners)
* [getMetadata](singleusestreamsource.md#getmetadata)
* [getPartitionTable](singleusestreamsource.md#getpartitiontable)
* [listenerCount](singleusestreamsource.md#listenercount)
* [listeners](singleusestreamsource.md#listeners)
* [on](singleusestreamsource.md#on)
* [once](singleusestreamsource.md#once)
* [open](singleusestreamsource.md#open)
* [prependListener](singleusestreamsource.md#prependlistener)
* [prependOnceListener](singleusestreamsource.md#prependoncelistener)
* [read](singleusestreamsource.md#read)
* [removeAllListeners](singleusestreamsource.md#removealllisteners)
* [removeListener](singleusestreamsource.md#removelistener)
* [setMaxListeners](singleusestreamsource.md#setmaxlisteners)
* [write](singleusestreamsource.md#write)
* [listenerCount](singleusestreamsource.md#listenercount-1)
* [register](singleusestreamsource.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SingleUseStreamSource**(stream: *`ReadableStream`*): [SingleUseStreamSource](singleusestreamsource.md)

*Defined in [source-destination/single-use-stream-source.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/single-use-stream-source.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `ReadableStream` |

**Returns:** [SingleUseStreamSource](singleusestreamsource.md)

___

## Properties

<a id="stream"></a>

### `<Private>` stream

**● stream**: *`ReadableStream`*

*Defined in [source-destination/single-use-stream-source.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/single-use-stream-source.ts#L25)*

___
<a id="used"></a>

### `<Private>` used

**● used**: *`boolean`* = false

*Defined in [source-destination/single-use-stream-source.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/single-use-stream-source.ts#L23)*

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

*Inherited from [SourceDestination](sourcedestination.md).[imageExtensions](sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L232)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L244)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/source-destination.ts:353](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L353)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L287)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/source-destination.ts:349](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L349)*

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

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/single-use-stream-source.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/single-use-stream-source.ts#L29)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L268)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L276)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:272](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L272)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:256](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L256)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:260](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L260)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L342)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, start?: *`number`*, end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/single-use-stream-source.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/single-use-stream-source.ts#L33)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _emitProgress | `boolean` | false |
| `Default value` start | `number` | 0 |
| `Optional` end | `undefined` \| `number` | - |

**Returns:** `Promise`<`ReadableStream`>

___
<a id="createsparsereadstream"></a>

###  createSparseReadStream

▸ **createSparseReadStream**(_generateChecksums?: *`boolean`*): `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

*Inherited from [SourceDestination](sourcedestination.md).[createSparseReadStream](sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _generateChecksums | `boolean` | false |

**Returns:** `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

*Inherited from [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/source-destination.ts:331](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L331)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L357)*

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

*Inherited from [SourceDestination](sourcedestination.md).[createWriteStream](sourcedestination.md#createwritestream)*

*Defined in [source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L327)*

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

*Inherited from [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L323)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L424)*

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

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L280)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L445)*

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

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

*Defined in [source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L335)*

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

*Inherited from [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/source-destination.ts:291](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L291)*

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

*Inherited from [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

*Defined in [source-destination/source-destination.ts:300](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L300)*

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

*Inherited from [SourceDestination](sourcedestination.md).[register](sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

