[etcher-sdk](../README.md) > [MultiDestination](../classes/multidestination.md)

# Class: MultiDestination

## Hierarchy

↳  [SourceDestination](sourcedestination.md)

**↳ MultiDestination**

## Index

### Constructors

* [constructor](multidestination.md#constructor)

### Properties

* [destinations](multidestination.md#destinations)
* [erroredDestinations](multidestination.md#erroreddestinations)
* [defaultMaxListeners](multidestination.md#defaultmaxlisteners)
* [imageExtensions](multidestination.md#imageextensions)
* [mimetype](multidestination.md#mimetype)

### Accessors

* [activeDestinations](multidestination.md#activedestinations)

### Methods

* [_close](multidestination.md#_close)
* [_getMetadata](multidestination.md#_getmetadata)
* [_open](multidestination.md#_open)
* [addListener](multidestination.md#addlistener)
* [can](multidestination.md#can)
* [canCreateReadStream](multidestination.md#cancreatereadstream)
* [canCreateSparseReadStream](multidestination.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](multidestination.md#cancreatesparsewritestream)
* [canCreateWriteStream](multidestination.md#cancreatewritestream)
* [canRead](multidestination.md#canread)
* [canWrite](multidestination.md#canwrite)
* [close](multidestination.md#close)
* [createReadStream](multidestination.md#createreadstream)
* [createSparseReadStream](multidestination.md#createsparsereadstream)
* [createSparseWriteStream](multidestination.md#createsparsewritestream)
* [createStream](multidestination.md#createstream)
* [createVerifier](multidestination.md#createverifier)
* [createWriteStream](multidestination.md#createwritestream)
* [destinationError](multidestination.md#destinationerror)
* [emit](multidestination.md#emit)
* [eventNames](multidestination.md#eventnames)
* [getBlocks](multidestination.md#getblocks)
* [getInnerSource](multidestination.md#getinnersource)
* [getMaxListeners](multidestination.md#getmaxlisteners)
* [getMetadata](multidestination.md#getmetadata)
* [getPartitionTable](multidestination.md#getpartitiontable)
* [listenerCount](multidestination.md#listenercount)
* [listeners](multidestination.md#listeners)
* [on](multidestination.md#on)
* [once](multidestination.md#once)
* [open](multidestination.md#open)
* [prependListener](multidestination.md#prependlistener)
* [prependOnceListener](multidestination.md#prependoncelistener)
* [read](multidestination.md#read)
* [removeAllListeners](multidestination.md#removealllisteners)
* [removeListener](multidestination.md#removelistener)
* [setMaxListeners](multidestination.md#setmaxlisteners)
* [write](multidestination.md#write)
* [listenerCount](multidestination.md#listenercount-1)
* [register](multidestination.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MultiDestination**(destinations: *[SourceDestination](sourcedestination.md)[]*): [MultiDestination](multidestination.md)

*Defined in [source-destination/multi-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| destinations | [SourceDestination](sourcedestination.md)[] |

**Returns:** [MultiDestination](multidestination.md)

___

## Properties

<a id="destinations"></a>

###  destinations

**● destinations**: *`Set`<[SourceDestination](sourcedestination.md)>* =  new Set()

*Defined in [source-destination/multi-destination.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L103)*

___
<a id="erroreddestinations"></a>

###  erroredDestinations

**● erroredDestinations**: *`Set`<[SourceDestination](sourcedestination.md)>* =  new Set()

*Defined in [source-destination/multi-destination.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L104)*

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

*Defined in [source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L232)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L244)*

___

## Accessors

<a id="activedestinations"></a>

###  activeDestinations

**get activeDestinations**(): `Set`<[SourceDestination](sourcedestination.md)>

*Defined in [source-destination/multi-destination.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L135)*

**Returns:** `Set`<[SourceDestination](sourcedestination.md)>

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Overrides [SourceDestination](sourcedestination.md).[_close](sourcedestination.md#_close)*

*Defined in [source-destination/multi-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L329)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/source-destination.ts:287](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L287)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Overrides [SourceDestination](sourcedestination.md).[_open](sourcedestination.md#_open)*

*Defined in [source-destination/multi-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L319)*

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
<a id="can"></a>

### `<Private>` can

▸ **can**(methodName: *"canRead" \| "canWrite" \| "canCreateReadStream" \| "canCreateSparseReadStream" \| "canCreateWriteStream" \| "canCreateSparseWriteStream"*): `Promise`<`boolean`>

*Defined in [source-destination/multi-destination.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L139)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| methodName | "canRead" \| "canWrite" \| "canCreateReadStream" \| "canCreateSparseReadStream" \| "canCreateWriteStream" \| "canCreateSparseWriteStream" |

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatereadstream"></a>

###  canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/multi-destination.ts:166](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L166)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/multi-destination.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L170)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/multi-destination.ts:178](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L178)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/multi-destination.ts:174](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L174)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/multi-destination.ts:158](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L158)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/multi-destination.ts:162](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L162)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L342)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(...args: *`any`[]*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/multi-destination.ts:219](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `Promise`<`ReadableStream`>

___
<a id="createsparsereadstream"></a>

###  createSparseReadStream

▸ **createSparseReadStream**(...args: *`any`[]*): `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

*Overrides [SourceDestination](sourcedestination.md).[createSparseReadStream](sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/multi-destination.ts:228](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L228)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `Promise`<[SparseReadable](../interfaces/sparsereadable.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

*Overrides [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/multi-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L308)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createstream"></a>

### `<Private>` createStream

▸ **createStream**(methodName: *"createWriteStream" \| "createSparseWriteStream"*): `Promise`<`PassThrough`>

*Defined in [source-destination/multi-destination.ts:235](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L235)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| methodName | "createWriteStream" \| "createSparseWriteStream" |

**Returns:** `Promise`<`PassThrough`>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Overrides [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/multi-destination.ts:312](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L312)*

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

*Defined in [source-destination/multi-destination.ts:304](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L304)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="destinationerror"></a>

###  destinationError

▸ **destinationError**(destination: *[SourceDestination](sourcedestination.md)*, error: *`Error`*, stream?: *`EventEmitter`*): `void`

*Defined in [source-destination/multi-destination.ts:116](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L116)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | [SourceDestination](sourcedestination.md) |
| error | `Error` |
| `Optional` stream | `EventEmitter` |

**Returns:** `void`

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

*Defined in [source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L323)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L424)*

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

*Defined in [source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L280)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

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

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

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

▸ **read**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Overrides [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/multi-destination.ts:182](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L182)*

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

*Defined in [source-destination/multi-destination.ts:197](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/multi-destination.ts#L197)*

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

*Defined in [source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

