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

*Defined in [source-destination/single-use-stream-source.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/single-use-stream-source.ts#L23)*

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

*Defined in [source-destination/single-use-stream-source.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/single-use-stream-source.ts#L25)*

___
<a id="used"></a>

### `<Private>` used

**● used**: *`boolean`* = false

*Defined in [source-destination/single-use-stream-source.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/single-use-stream-source.ts#L23)*

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

*Inherited from [SourceDestination](sourcedestination.md).[imageExtensions](sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:234](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L234)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:246](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L246)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/source-destination.ts:355](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L355)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:289](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L289)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

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

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/single-use-stream-source.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/single-use-stream-source.ts#L29)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/source-destination.ts:270](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L270)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:278](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L278)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L274)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:258](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L258)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:262](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L262)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L344)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, start?: *`number`*, end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/single-use-stream-source.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/single-use-stream-source.ts#L33)*

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

*Defined in [source-destination/source-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L319)*

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

*Defined in [source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L333)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L359)*

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

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Inherited from [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/source-destination.ts:325](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L325)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L426)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

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

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:282](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L282)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

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

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

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

*Inherited from [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

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

*Inherited from [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

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

▸ **register**(Cls: *[SourceSource](sourcesource.md)*): `void`

*Inherited from [SourceDestination](sourcedestination.md).[register](sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/source-destination/source-destination.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

