[etcher-sdk](../README.md) > [File](../classes/file.md)

# Class: File

## Hierarchy

↳  [SourceDestination](sourcedestination.md)

**↳ File**

↳  [BlockDevice](blockdevice.md)

## Index

### Constructors

* [constructor](file.md#constructor)

### Properties

* [blockSize](file.md#blocksize)
* [fd](file.md#fd)
* [flags](file.md#flags)
* [path](file.md#path)
* [OpenFlags](file.md#openflags)
* [defaultMaxListeners](file.md#defaultmaxlisteners)
* [imageExtensions](file.md#imageextensions)
* [mimetype](file.md#mimetype)

### Methods

* [_canRead](file.md#_canread)
* [_canWrite](file.md#_canwrite)
* [_close](file.md#_close)
* [_getMetadata](file.md#_getmetadata)
* [_open](file.md#_open)
* [addListener](file.md#addlistener)
* [canCreateReadStream](file.md#cancreatereadstream)
* [canCreateSparseReadStream](file.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](file.md#cancreatesparsewritestream)
* [canCreateWriteStream](file.md#cancreatewritestream)
* [canRead](file.md#canread)
* [canWrite](file.md#canwrite)
* [close](file.md#close)
* [createReadStream](file.md#createreadstream)
* [createSparseReadStream](file.md#createsparsereadstream)
* [createSparseWriteStream](file.md#createsparsewritestream)
* [createVerifier](file.md#createverifier)
* [createWriteStream](file.md#createwritestream)
* [emit](file.md#emit)
* [eventNames](file.md#eventnames)
* [getBlocks](file.md#getblocks)
* [getInnerSource](file.md#getinnersource)
* [getMaxListeners](file.md#getmaxlisteners)
* [getMetadata](file.md#getmetadata)
* [getPartitionTable](file.md#getpartitiontable)
* [listenerCount](file.md#listenercount)
* [listeners](file.md#listeners)
* [on](file.md#on)
* [once](file.md#once)
* [open](file.md#open)
* [prependListener](file.md#prependlistener)
* [prependOnceListener](file.md#prependoncelistener)
* [read](file.md#read)
* [removeAllListeners](file.md#removealllisteners)
* [removeListener](file.md#removelistener)
* [setMaxListeners](file.md#setmaxlisteners)
* [write](file.md#write)
* [listenerCount](file.md#listenercount-1)
* [register](file.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new File**(path: *`string`*, flags: *[OpenFlags](../enums/openflags.md)*): [File](file.md)

*Defined in [source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L58)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |
| flags | [OpenFlags](../enums/openflags.md) |

**Returns:** [File](file.md)

___

## Properties

<a id="blocksize"></a>

###  blockSize

**● blockSize**: *`number`* = 512

*Defined in [source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L58)*

___
<a id="fd"></a>

### `<Protected>` fd

**● fd**: *`number`*

*Defined in [source-destination/file.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L57)*

___
<a id="flags"></a>

### `<Private>` flags

**● flags**: *[OpenFlags](../enums/openflags.md)*

*Defined in [source-destination/file.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L60)*

___
<a id="path"></a>

### `<Private>` path

**● path**: *`string`*

*Defined in [source-destination/file.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L60)*

___
<a id="openflags"></a>

### `<Static>` OpenFlags

**● OpenFlags**: *[OpenFlags](../enums/openflags.md)* =  OpenFlags

*Defined in [source-destination/file.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L56)*

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

<a id="_canread"></a>

### `<Private>` _canRead

▸ **_canRead**(): `boolean`

*Defined in [source-destination/file.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L64)*

**Returns:** `boolean`

___
<a id="_canwrite"></a>

### `<Private>` _canWrite

▸ **_canWrite**(): `boolean`

*Defined in [source-destination/file.ts:72](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L72)*

**Returns:** `boolean`

___
<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/file.ts:156](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L156)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Overrides [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/file.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L99)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/file.ts:152](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L152)*

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

*Defined in [source-destination/file.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L87)*

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

*Overrides [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/file.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L95)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/file.ts:91](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L91)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/file.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L79)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/file.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L83)*

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

▸ **createReadStream**(emitProgress?: *`boolean`*, start?: *`number`*, end?: *`undefined` \| `number`*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/file.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L124)*

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

▸ **createSparseWriteStream**(): `Promise`<[SparseWriteStream](sparsewritestream.md)>

*Overrides [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/file.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L146)*

**Returns:** `Promise`<[SparseWriteStream](sparsewritestream.md)>

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

*Overrides [SourceDestination](sourcedestination.md).[createWriteStream](sourcedestination.md#createwritestream)*

*Defined in [source-destination/file.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L137)*

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

▸ **read**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Overrides [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/file.ts:106](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L106)*

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

▸ **write**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`WriteResult`>

*Overrides [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

*Defined in [source-destination/file.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/file.ts#L115)*

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

