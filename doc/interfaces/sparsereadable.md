[etcher-sdk](../README.md) > [SparseReadable](../interfaces/sparsereadable.md)

# Interface: SparseReadable

## Hierarchy

 `ReadableStream`

**↳ SparseReadable**

## Implemented by

* [SparseFilterStream](../classes/sparsefilterstream.md)
* [SparseReadStream](../classes/sparsereadstream.md)

## Index

### Properties

* [blocks](sparsereadable.md#blocks)
* [readable](sparsereadable.md#readable)

### Methods

* [addListener](sparsereadable.md#addlistener)
* [emit](sparsereadable.md#emit)
* [eventNames](sparsereadable.md#eventnames)
* [getMaxListeners](sparsereadable.md#getmaxlisteners)
* [isPaused](sparsereadable.md#ispaused)
* [listenerCount](sparsereadable.md#listenercount)
* [listeners](sparsereadable.md#listeners)
* [on](sparsereadable.md#on)
* [once](sparsereadable.md#once)
* [pause](sparsereadable.md#pause)
* [pipe](sparsereadable.md#pipe)
* [prependListener](sparsereadable.md#prependlistener)
* [prependOnceListener](sparsereadable.md#prependoncelistener)
* [push](sparsereadable.md#push)
* [read](sparsereadable.md#read)
* [removeAllListeners](sparsereadable.md#removealllisteners)
* [removeListener](sparsereadable.md#removelistener)
* [resume](sparsereadable.md#resume)
* [setEncoding](sparsereadable.md#setencoding)
* [setMaxListeners](sparsereadable.md#setmaxlisteners)
* [unpipe](sparsereadable.md#unpipe)
* [unshift](sparsereadable.md#unshift)
* [wrap](sparsereadable.md#wrap)

---

## Properties

<a id="blocks"></a>

###  blocks

**● blocks**: *[BlocksWithChecksum](blockswithchecksum.md)[]*

*Defined in [sparse-stream/shared.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/sparse-stream/shared.ts#L50)*

___
<a id="readable"></a>

###  readable

**● readable**: *`boolean`*

*Inherited from ReadableStream.readable*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:386*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:369*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:377*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:382*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:375*

**Returns:** `number`

___
<a id="ispaused"></a>

###  isPaused

▸ **isPaused**(): `boolean`

*Inherited from ReadableStream.isPaused*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:391*

**Returns:** `boolean`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:378*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:376*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:370*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:371*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `this`

*Inherited from ReadableStream.pause*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:389*

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`undefined` \| `object`*): `T`

*Inherited from ReadableStream.pipe*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:392*

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

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:380*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:381*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="push"></a>

###  push

▸ **push**(chunk: *[SparseStreamChunk](sparsestreamchunk.md)*): `boolean`

*Defined in [sparse-stream/shared.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/sparse-stream/shared.ts#L51)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | [SparseStreamChunk](sparsestreamchunk.md) |

**Returns:** `boolean`

___
<a id="read"></a>

###  read

▸ **read**(size?: *`undefined` \| `number`*): `string` \| `Buffer`

*Inherited from ReadableStream.read*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:387*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` size | `undefined` \| `number` |

**Returns:** `string` \| `Buffer`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:373*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:372*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `this`

*Inherited from ReadableStream.resume*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:390*

**Returns:** `this`

___
<a id="setencoding"></a>

###  setEncoding

▸ **setEncoding**(encoding: *`string` \| `null`*): `void`

*Inherited from ReadableStream.setEncoding*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:388*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` \| `null` |

**Returns:** `void`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:374*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="unpipe"></a>

###  unpipe

▸ **unpipe**<`T`>(destination?: *[T]()*): `void`

*Inherited from ReadableStream.unpipe*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:393*

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

▸ **unshift**(chunk: *`string`*): `void`

▸ **unshift**(chunk: *`Buffer`*): `void`

*Inherited from ReadableStream.unshift*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:394*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `string` |

**Returns:** `void`

*Inherited from ReadableStream.unshift*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:395*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `Buffer` |

**Returns:** `void`

___
<a id="wrap"></a>

###  wrap

▸ **wrap**(oldStream: *`ReadableStream`*): `ReadableStream`

*Inherited from ReadableStream.wrap*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:396*

**Parameters:**

| Name | Type |
| ------ | ------ |
| oldStream | `ReadableStream` |

**Returns:** `ReadableStream`

___

