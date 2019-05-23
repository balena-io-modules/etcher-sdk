[etcher-sdk](../README.md) > [DmgSource](../classes/dmgsource.md)

# Class: DmgSource

## Hierarchy

↳  [SourceSource](sourcesource.md)

**↳ DmgSource**

## Index

### Constructors

* [constructor](dmgsource.md#constructor)

### Properties

* [image](dmgsource.md#image)
* [source](dmgsource.md#source)
* [defaultMaxListeners](dmgsource.md#defaultmaxlisteners)
* [imageExtensions](dmgsource.md#imageextensions)
* [mappedBlockTypes](dmgsource.md#mappedblocktypes)
* [mimetype](dmgsource.md#mimetype)
* [requiresRandomReadableSource](dmgsource.md#requiresrandomreadablesource)

### Methods

* [_close](dmgsource.md#_close)
* [_getMetadata](dmgsource.md#_getmetadata)
* [_open](dmgsource.md#_open)
* [addListener](dmgsource.md#addlistener)
* [canCreateReadStream](dmgsource.md#cancreatereadstream)
* [canCreateSparseReadStream](dmgsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](dmgsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](dmgsource.md#cancreatewritestream)
* [canRead](dmgsource.md#canread)
* [canWrite](dmgsource.md#canwrite)
* [close](dmgsource.md#close)
* [createReadStream](dmgsource.md#createreadstream)
* [createSparseReadStream](dmgsource.md#createsparsereadstream)
* [createSparseWriteStream](dmgsource.md#createsparsewritestream)
* [createVerifier](dmgsource.md#createverifier)
* [createWriteStream](dmgsource.md#createwritestream)
* [emit](dmgsource.md#emit)
* [eventNames](dmgsource.md#eventnames)
* [getBlocks](dmgsource.md#getblocks)
* [getInnerSource](dmgsource.md#getinnersource)
* [getMaxListeners](dmgsource.md#getmaxlisteners)
* [getMetadata](dmgsource.md#getmetadata)
* [getPartitionTable](dmgsource.md#getpartitiontable)
* [listenerCount](dmgsource.md#listenercount)
* [listeners](dmgsource.md#listeners)
* [on](dmgsource.md#on)
* [once](dmgsource.md#once)
* [open](dmgsource.md#open)
* [prependListener](dmgsource.md#prependlistener)
* [prependOnceListener](dmgsource.md#prependoncelistener)
* [read](dmgsource.md#read)
* [removeAllListeners](dmgsource.md#removealllisteners)
* [removeListener](dmgsource.md#removelistener)
* [setMaxListeners](dmgsource.md#setmaxlisteners)
* [write](dmgsource.md#write)
* [listenerCount](dmgsource.md#listenercount-1)
* [register](dmgsource.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DmgSource**(source: *[SourceDestination](sourcedestination.md)*): [DmgSource](dmgsource.md)

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [source-destination/dmg.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](sourcedestination.md) |

**Returns:** [DmgSource](dmgsource.md)

___

## Properties

<a id="image"></a>

### `<Private>` image

**● image**: *`UDIFImage`*

*Defined in [source-destination/dmg.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L44)*

___
<a id="source"></a>

### `<Protected>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#source)*

*Defined in [source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-source.ts#L22)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

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

*Inherited from [SourceDestination](sourcedestination.md).[imageExtensions](sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:234](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L234)*

___
<a id="mappedblocktypes"></a>

### `<Static>``<Private>` mappedBlockTypes

**● mappedBlockTypes**: *`number`[]* =  [
		BLOCK.RAW,
		BLOCK.UDCO,
		BLOCK.UDZO,
		BLOCK.UDBZ,
		BLOCK.LZFSE,
	]

*Defined in [source-destination/dmg.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L35)*

___
<a id="mimetype"></a>

### `<Static>` mimetype

**● mimetype**: *"application/x-apple-diskimage"* = "application/x-apple-diskimage"

*Overrides [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/dmg.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L43)*

___
<a id="requiresrandomreadablesource"></a>

### `<Static>` requiresRandomReadableSource

**● requiresRandomReadableSource**: *`boolean`* = true

*Overrides [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#requiresrandomreadablesource)*

*Defined in [source-destination/dmg.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L42)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Overrides [SourceSource](sourcesource.md).[_close](sourcesource.md#_close)*

*Defined in [source-destination/dmg.ts:136](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L136)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Overrides [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/dmg.ts:123](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L123)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#_open)*

*Defined in [source-destination/dmg.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L131)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

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

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/dmg.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L51)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/dmg.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L55)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:278](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L278)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L274)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/source-destination.ts:258](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L258)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:262](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L262)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L344)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(_emitProgress?: *`boolean`*, start?: *`number`*, end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/dmg.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L59)*

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

▸ **createSparseReadStream**(_generateChecksums: *`boolean`*): `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

*Overrides [SourceDestination](sourcedestination.md).[createSparseReadStream](sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/dmg.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _generateChecksums | `boolean` |

**Returns:** `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

*Inherited from [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L333)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L359)*

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

*Defined in [source-destination/source-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L329)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

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

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Overrides [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/dmg.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/dmg.ts#L83)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L426)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:282](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L282)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:447](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L447)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

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

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

*Defined in [source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L337)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

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

*Inherited from [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/source-destination.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L293)*

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

*Inherited from [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

*Defined in [source-destination/source-destination.ts:302](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L302)*

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

*Inherited from [SourceDestination](sourcedestination.md).[register](sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

