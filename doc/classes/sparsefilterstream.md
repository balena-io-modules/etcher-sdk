[etcher-sdk](../README.md) > [SparseFilterStream](../classes/sparsefilterstream.md)

# Class: SparseFilterStream

## Hierarchy

 `Transform`

**↳ SparseFilterStream**

## Implements

* `ReadableStream`
* `Writable`
* [SparseReadable](../interfaces/sparsereadable.md)

## Index

### Constructors

* [constructor](sparsefilterstream.md#constructor)

### Properties

* [blocks](sparsefilterstream.md#blocks)
* [position](sparsefilterstream.md#position)
* [readable](sparsefilterstream.md#readable)
* [state](sparsefilterstream.md#state)
* [stateIterator](sparsefilterstream.md#stateiterator)
* [writable](sparsefilterstream.md#writable)
* [defaultMaxListeners](sparsefilterstream.md#defaultmaxlisteners)

### Methods

* [__transform](sparsefilterstream.md#__transform)
* [_read](sparsefilterstream.md#_read)
* [_transform](sparsefilterstream.md#_transform)
* [_write](sparsefilterstream.md#_write)
* [addListener](sparsefilterstream.md#addlistener)
* [emit](sparsefilterstream.md#emit)
* [end](sparsefilterstream.md#end)
* [eventNames](sparsefilterstream.md#eventnames)
* [getMaxListeners](sparsefilterstream.md#getmaxlisteners)
* [isPaused](sparsefilterstream.md#ispaused)
* [listenerCount](sparsefilterstream.md#listenercount)
* [listeners](sparsefilterstream.md#listeners)
* [nextBlock](sparsefilterstream.md#nextblock)
* [on](sparsefilterstream.md#on)
* [once](sparsefilterstream.md#once)
* [pause](sparsefilterstream.md#pause)
* [pipe](sparsefilterstream.md#pipe)
* [prependListener](sparsefilterstream.md#prependlistener)
* [prependOnceListener](sparsefilterstream.md#prependoncelistener)
* [push](sparsefilterstream.md#push)
* [read](sparsefilterstream.md#read)
* [removeAllListeners](sparsefilterstream.md#removealllisteners)
* [removeListener](sparsefilterstream.md#removelistener)
* [resume](sparsefilterstream.md#resume)
* [setDefaultEncoding](sparsefilterstream.md#setdefaultencoding)
* [setEncoding](sparsefilterstream.md#setencoding)
* [setMaxListeners](sparsefilterstream.md#setmaxlisteners)
* [unpipe](sparsefilterstream.md#unpipe)
* [unshift](sparsefilterstream.md#unshift)
* [wrap](sparsefilterstream.md#wrap)
* [write](sparsefilterstream.md#write)
* [listenerCount](sparsefilterstream.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SparseFilterStream**(blocks: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, verify: *`boolean`*, generateChecksums: *`boolean`*, options?: *`TransformOptions`*): [SparseFilterStream](sparsefilterstream.md)

*Overrides Transform.__constructor*

*Defined in [sparse-stream/sparse-filter-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L30)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| blocks | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] | - |
| verify | `boolean` | - |
| generateChecksums | `boolean` | - |
| `Default value` options | `TransformOptions` |  {} |

**Returns:** [SparseFilterStream](sparsefilterstream.md)

___

## Properties

<a id="blocks"></a>

###  blocks

**● blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[blocks](../interfaces/sparsereadable.md#blocks)*

*Defined in [sparse-stream/sparse-filter-stream.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L33)*

___
<a id="position"></a>

### `<Private>` position

**● position**: *`number`* = 0

*Defined in [sparse-stream/sparse-filter-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L30)*

___
<a id="readable"></a>

###  readable

**● readable**: *`boolean`*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[readable](../interfaces/sparsereadable.md#readable)*

*Inherited from Readable.readable*

*Defined in /node_modules/@types/node/base.d.ts:3688*

___
<a id="state"></a>

### `<Private>``<Optional>` state

**● state**: *[SparseReaderState](../interfaces/sparsereaderstate.md)*

*Defined in [sparse-stream/sparse-filter-stream.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L29)*

___
<a id="stateiterator"></a>

### `<Private>` stateIterator

**● stateIterator**: *`Iterator`<[SparseReaderState](../interfaces/sparsereaderstate.md)>*

*Defined in [sparse-stream/sparse-filter-stream.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L28)*

___
<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from Duplex.writable*

*Defined in /node_modules/@types/node/base.d.ts:3855*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:681*

___

## Methods

<a id="__transform"></a>

### `<Private>` __transform

▸ **__transform**(buffer: *`Buffer`*): `void`

*Defined in [sparse-stream/sparse-filter-stream.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |

**Returns:** `void`

___
<a id="_read"></a>

###  _read

▸ **_read**(size: *`number`*): `void`

*Inherited from Readable._read*

*Defined in /node_modules/@types/node/base.d.ts:3690*

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `void`

___
<a id="_transform"></a>

###  _transform

▸ **_transform**(chunk: *`Buffer`*, _encoding: *`string`*, callback: *`function`*): `void`

*Overrides Transform._transform*

*Defined in [sparse-stream/sparse-filter-stream.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `Buffer` |
| _encoding | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="_write"></a>

###  _write

▸ **_write**(chunk: *`any`*, encoding: *`string`*, callback: *`Function`*): `void`

*Inherited from Duplex._write*

*Defined in /node_modules/@types/node/base.d.ts:3857*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| encoding | `string` |
| callback | `Function` |

**Returns:** `void`

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
<a id="end"></a>

###  end

▸ **end**(cb?: *`Function`*): `void`

▸ **end**(chunk: *`any`*, cb?: *`Function`*): `void`

▸ **end**(chunk: *`any`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `void`

*Inherited from Duplex.end*

*Defined in /node_modules/@types/node/base.d.ts:3861*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Duplex.end*

*Defined in /node_modules/@types/node/base.d.ts:3862*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Duplex.end*

*Defined in /node_modules/@types/node/base.d.ts:3863*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `undefined` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `void`

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

*Defined in [sparse-stream/sparse-filter-stream.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-filter-stream.ts#L47)*

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
<a id="setdefaultencoding"></a>

###  setDefaultEncoding

▸ **setDefaultEncoding**(encoding: *`string`*): `this`

*Inherited from Duplex.setDefaultEncoding*

*Defined in /node_modules/@types/node/base.d.ts:3860*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` |

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
<a id="write"></a>

###  write

▸ **write**(chunk: *`any`*, cb?: *`Function`*): `boolean`

▸ **write**(chunk: *`any`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `boolean`

*Inherited from Duplex.write*

*Defined in /node_modules/@types/node/base.d.ts:3858*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

*Inherited from Duplex.write*

*Defined in /node_modules/@types/node/base.d.ts:3859*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `undefined` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

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

