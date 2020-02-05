[etcher-sdk](../README.md) > [StreamZipSource](../classes/streamzipsource.md)

# Class: StreamZipSource

## Hierarchy

↳  [SourceSource](sourcesource.md)

**↳ StreamZipSource**

## Index

### Constructors

* [constructor](streamzipsource.md#constructor)

### Properties

* [entry](streamzipsource.md#entry)
* [match](streamzipsource.md#match)
* [source](streamzipsource.md#source)
* [defaultMaxListeners](streamzipsource.md#defaultmaxlisteners)
* [imageExtensions](streamzipsource.md#imageextensions)
* [mimetype](streamzipsource.md#mimetype)
* [requiresRandomReadableSource](streamzipsource.md#requiresrandomreadablesource)

### Methods

* [_close](streamzipsource.md#_close)
* [_getMetadata](streamzipsource.md#_getmetadata)
* [_open](streamzipsource.md#_open)
* [addListener](streamzipsource.md#addlistener)
* [canCreateReadStream](streamzipsource.md#cancreatereadstream)
* [canCreateSparseReadStream](streamzipsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](streamzipsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](streamzipsource.md#cancreatewritestream)
* [canRead](streamzipsource.md#canread)
* [canWrite](streamzipsource.md#canwrite)
* [close](streamzipsource.md#close)
* [createReadStream](streamzipsource.md#createreadstream)
* [createSparseReadStream](streamzipsource.md#createsparsereadstream)
* [createSparseWriteStream](streamzipsource.md#createsparsewritestream)
* [createVerifier](streamzipsource.md#createverifier)
* [createWriteStream](streamzipsource.md#createwritestream)
* [emit](streamzipsource.md#emit)
* [eventNames](streamzipsource.md#eventnames)
* [getBlocks](streamzipsource.md#getblocks)
* [getEntry](streamzipsource.md#getentry)
* [getInnerSource](streamzipsource.md#getinnersource)
* [getMaxListeners](streamzipsource.md#getmaxlisteners)
* [getMetadata](streamzipsource.md#getmetadata)
* [getPartitionTable](streamzipsource.md#getpartitiontable)
* [listenerCount](streamzipsource.md#listenercount)
* [listeners](streamzipsource.md#listeners)
* [on](streamzipsource.md#on)
* [once](streamzipsource.md#once)
* [open](streamzipsource.md#open)
* [prependListener](streamzipsource.md#prependlistener)
* [prependOnceListener](streamzipsource.md#prependoncelistener)
* [read](streamzipsource.md#read)
* [removeAllListeners](streamzipsource.md#removealllisteners)
* [removeListener](streamzipsource.md#removelistener)
* [setMaxListeners](streamzipsource.md#setmaxlisteners)
* [write](streamzipsource.md#write)
* [listenerCount](streamzipsource.md#listenercount-1)
* [register](streamzipsource.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StreamZipSource**(source: *[SourceDestination](sourcedestination.md)*, match?: *`function`*): [StreamZipSource](streamzipsource.md)

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [source-destination/zip.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L70)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| source | [SourceDestination](sourcedestination.md) | - |
| `Default value` match | `function` |  matchSupportedExtensions |

**Returns:** [StreamZipSource](streamzipsource.md)

___

## Properties

<a id="entry"></a>

### `<Private>``<Optional>` entry

**● entry**: *`ZipStreamEntry`*

*Defined in [source-destination/zip.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L70)*

___
<a id="match"></a>

### `<Private>` match

**● match**: *`function`*

*Defined in [source-destination/zip.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L74)*

#### Type declaration
▸(filename: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `boolean`

___
<a id="source"></a>

### `<Protected>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#source)*

*Defined in [source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-source.ts#L22)*

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
<a id="requiresrandomreadablesource"></a>

### `<Static>` requiresRandomReadableSource

**● requiresRandomReadableSource**: *`boolean`* = false

*Inherited from [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#requiresrandomreadablesource)*

*Defined in [source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-source.ts#L20)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Inherited from [SourceSource](sourcesource.md).[_close](sourcesource.md#_close)*

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/source-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-source.ts#L30)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Overrides [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/zip.ts:118](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L118)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Inherited from [SourceSource](sourcesource.md).[_open](sourcesource.md#_open)*

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/source-source.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/source-source.ts#L26)*

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

*Defined in [source-destination/zip.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L79)*

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

*Defined in [source-destination/zip.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L101)*

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
<a id="getentry"></a>

### `<Private>` getEntry

▸ **getEntry**(): `Promise`<`ZipStreamEntry`>

*Defined in [source-destination/zip.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/source-destination/zip.ts#L83)*

**Returns:** `Promise`<`ZipStreamEntry`>

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

