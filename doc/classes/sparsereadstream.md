[etcher-sdk](../README.md) > [SparseReadStream](../classes/sparsereadstream.md)

# Class: SparseReadStream

## Hierarchy

 `Readable`

**↳ SparseReadStream**

## Implements

* `ReadableStream`
* [SparseReadable](../interfaces/sparsereadable.md)

## Index

### Constructors

* [constructor](sparsereadstream.md#constructor)

### Properties

* [blocks](sparsereadstream.md#blocks)
* [chunkSize](sparsereadstream.md#chunksize)
* [positionInBlock](sparsereadstream.md#positioninblock)
* [readable](sparsereadstream.md#readable)
* [source](sparsereadstream.md#source)
* [state](sparsereadstream.md#state)
* [stateIterator](sparsereadstream.md#stateiterator)
* [defaultMaxListeners](sparsereadstream.md#defaultmaxlisteners)

### Methods

* [__read](sparsereadstream.md#__read)
* [_read](sparsereadstream.md#_read)
* [addListener](sparsereadstream.md#addlistener)
* [emit](sparsereadstream.md#emit)
* [eventNames](sparsereadstream.md#eventnames)
* [getMaxListeners](sparsereadstream.md#getmaxlisteners)
* [isPaused](sparsereadstream.md#ispaused)
* [listenerCount](sparsereadstream.md#listenercount)
* [listeners](sparsereadstream.md#listeners)
* [nextBlock](sparsereadstream.md#nextblock)
* [on](sparsereadstream.md#on)
* [once](sparsereadstream.md#once)
* [pause](sparsereadstream.md#pause)
* [pipe](sparsereadstream.md#pipe)
* [prependListener](sparsereadstream.md#prependlistener)
* [prependOnceListener](sparsereadstream.md#prependoncelistener)
* [push](sparsereadstream.md#push)
* [read](sparsereadstream.md#read)
* [removeAllListeners](sparsereadstream.md#removealllisteners)
* [removeListener](sparsereadstream.md#removelistener)
* [resume](sparsereadstream.md#resume)
* [setEncoding](sparsereadstream.md#setencoding)
* [setMaxListeners](sparsereadstream.md#setmaxlisteners)
* [unpipe](sparsereadstream.md#unpipe)
* [unshift](sparsereadstream.md#unshift)
* [wrap](sparsereadstream.md#wrap)
* [listenerCount](sparsereadstream.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SparseReadStream**(source: *[SourceDestination](sourcedestination.md)*, blocks: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, chunkSize: *`number`*, verify: *`boolean`*, generateChecksums: *`boolean`*, options?: *`ReadableOptions`*): [SparseReadStream](sparsereadstream.md)

*Overrides Readable.__constructor*

*Defined in [sparse-stream/sparse-read-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L32)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| source | [SourceDestination](sourcedestination.md) | - |
| blocks | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] | - |
| chunkSize | `number` | - |
| verify | `boolean` | - |
| generateChecksums | `boolean` | - |
| `Default value` options | `ReadableOptions` |  {} |

**Returns:** [SparseReadStream](sparsereadstream.md)

___

## Properties

<a id="blocks"></a>

###  blocks

**● blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[blocks](../interfaces/sparsereadable.md#blocks)*

*Defined in [sparse-stream/sparse-read-stream.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L36)*

___
<a id="chunksize"></a>

### `<Private>` chunkSize

**● chunkSize**: *`number`*

*Defined in [sparse-stream/sparse-read-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L37)*

___
<a id="positioninblock"></a>

### `<Private>` positionInBlock

**● positionInBlock**: *`number`* = 0

*Defined in [sparse-stream/sparse-read-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L32)*

___
<a id="readable"></a>

###  readable

**● readable**: *`boolean`*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[readable](../interfaces/sparsereadable.md#readable)*

*Inherited from Readable.readable*

*Defined in /node_modules/@types/node/base.d.ts:3688*

___
<a id="source"></a>

### `<Private>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Defined in [sparse-stream/sparse-read-stream.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L35)*

___
<a id="state"></a>

### `<Private>``<Optional>` state

**● state**: *[SparseReaderState](../interfaces/sparsereaderstate.md)*

*Defined in [sparse-stream/sparse-read-stream.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L31)*

___
<a id="stateiterator"></a>

### `<Private>` stateIterator

**● stateIterator**: *`Iterator`<[SparseReaderState](../interfaces/sparsereaderstate.md)>*

*Defined in [sparse-stream/sparse-read-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L30)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:681*

___

## Methods

<a id="__read"></a>

### `<Private>` __read

▸ **__read**(): `Promise`<[SparseStreamChunk](../interfaces/sparsestreamchunk.md) \| `null`>

*Defined in [sparse-stream/sparse-read-stream.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L65)*

**Returns:** `Promise`<[SparseStreamChunk](../interfaces/sparsestreamchunk.md) \| `null`>

___
<a id="_read"></a>

###  _read

▸ **_read**(): `Promise`<`void`>

*Overrides Readable._read*

*Defined in [sparse-stream/sparse-read-stream.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L51)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"data"*, listener: *`function`*): `this`

▸ **addListener**(event: *"end"*, listener: *`function`*): `this`

▸ **addListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3711*

Event emitter The defined events on documents including:

1.  close
2.  data
3.  end
4.  readable
5.  error

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3712*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3713*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3715*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3716*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"data"*, chunk: *`Buffer` \| `string`*): `boolean`

▸ **emit**(event: *"end"*): `boolean`

▸ **emit**(event: *"readable"*): `boolean`

▸ **emit**(event: *"error"*, err: *`Error`*): `boolean`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3718*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3719*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3720*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| chunk | `Buffer` \| `string` |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3721*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3722*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |

**Returns:** `boolean`

*Inherited from Readable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3723*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/base.d.ts:694*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:691*

**Returns:** `number`

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[isPaused](../interfaces/sparsereadable.md#ispaused)*

*Inherited from Readable.isPaused*

*Defined in /node_modules/@types/node/base.d.ts:3695*

**Returns:** `boolean`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

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

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /node_modules/@types/node/base.d.ts:692*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="nextblock"></a>

### `<Private>` nextBlock

▸ **nextBlock**(): `void`

*Defined in [sparse-stream/sparse-read-stream.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/sparse-stream/sparse-read-stream.ts#L60)*

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string`*, listener: *`Function`*): `this`

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"data"*, listener: *`function`*): `this`

▸ **on**(event: *"end"*, listener: *`function`*): `this`

▸ **on**(event: *"readable"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3725*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3726*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3727*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3728*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3729*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3730*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string`*, listener: *`Function`*): `this`

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"data"*, listener: *`function`*): `this`

▸ **once**(event: *"end"*, listener: *`function`*): `this`

▸ **once**(event: *"readable"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3732*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3733*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3734*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3735*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3736*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3737*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[pause](../interfaces/sparsereadable.md#pause)*

*Inherited from Readable.pause*

*Defined in /node_modules/@types/node/base.d.ts:3693*

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`undefined` \| `object`*): `T`

*Inherited from Readable.pipe*

*Overrides internal.pipe*

*Defined in /node_modules/@types/node/base.d.ts:3696*

**Type parameters:**

#### T :  `WritableStream`
**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | `T` |
| `Optional` options | `undefined` \| `object` |

**Returns:** `T`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **prependListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3739*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3740*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3741*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3742*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3743*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3744*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **prependOnceListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"data"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"end"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3746*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3747*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3748*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3749*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3750*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3751*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="push"></a>

###  push

▸ **push**(chunk: *`any`*, encoding?: *`undefined` \| `string`*): `boolean`

*Inherited from Readable.push*

*Defined in /node_modules/@types/node/base.d.ts:3700*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="read"></a>

###  read

▸ **read**(size?: *`undefined` \| `number`*): `any`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[read](../interfaces/sparsereadable.md#read)*

*Inherited from Readable.read*

*Defined in /node_modules/@types/node/base.d.ts:3691*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` size | `undefined` \| `number` |

**Returns:** `any`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

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

▸ **removeListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"data"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"end"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"readable"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3753*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3754*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3755*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3756*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3757*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "readable" |
| listener | `function` |

**Returns:** `this`

*Inherited from Readable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3758*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[resume](../interfaces/sparsereadable.md#resume)*

*Inherited from Readable.resume*

*Defined in /node_modules/@types/node/base.d.ts:3694*

**Returns:** `this`

___
<a id="setencoding"></a>

###  setEncoding

▸ **setEncoding**(encoding: *`string`*): `void`

*Inherited from Readable.setEncoding*

*Defined in /node_modules/@types/node/base.d.ts:3692*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` |

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:690*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="unpipe"></a>

###  unpipe

▸ **unpipe**<`T`>(destination?: *[T]()*): `void`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[unpipe](../interfaces/sparsereadable.md#unpipe)*

*Inherited from Readable.unpipe*

*Defined in /node_modules/@types/node/base.d.ts:3697*

**Type parameters:**

#### T :  `WritableStream`
**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` destination | [T]() |

**Returns:** `void`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(chunk: *`any`*): `void`

*Inherited from Readable.unshift*

*Defined in /node_modules/@types/node/base.d.ts:3698*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |

**Returns:** `void`

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(oldStream: *`ReadableStream`*): `Readable`

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[wrap](../interfaces/sparsereadable.md#wrap)*

*Inherited from Readable.wrap*

*Defined in /node_modules/@types/node/base.d.ts:3699*

**Parameters:**

| Name | Type |
| ------ | ------ |
| oldStream | `ReadableStream` |

**Returns:** `Readable`

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

