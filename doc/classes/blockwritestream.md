[etcher-sdk](../README.md) > [BlockWriteStream](../classes/blockwritestream.md)

# Class: BlockWriteStream

## Hierarchy

 `Writable`

**↳ BlockWriteStream**

## Implements

* `WritableStream`

## Index

### Constructors

* [constructor](blockwritestream.md#constructor)

### Properties

* [_buffers](blockwritestream.md#_buffers)
* [_bytes](blockwritestream.md#_bytes)
* [_firstBuffers](blockwritestream.md#_firstbuffers)
* [bytesWritten](blockwritestream.md#byteswritten)
* [destination](blockwritestream.md#destination)
* [firstBytesToKeep](blockwritestream.md#firstbytestokeep)
* [maxRetries](blockwritestream.md#maxretries)
* [writable](blockwritestream.md#writable)
* [defaultMaxListeners](blockwritestream.md#defaultmaxlisteners)

### Methods

* [__final](blockwritestream.md#__final)
* [__write](blockwritestream.md#__write)
* [_final](blockwritestream.md#_final)
* [_write](blockwritestream.md#_write)
* [addListener](blockwritestream.md#addlistener)
* [destroy](blockwritestream.md#destroy)
* [emit](blockwritestream.md#emit)
* [end](blockwritestream.md#end)
* [eventNames](blockwritestream.md#eventnames)
* [getMaxListeners](blockwritestream.md#getmaxlisteners)
* [listenerCount](blockwritestream.md#listenercount)
* [listeners](blockwritestream.md#listeners)
* [on](blockwritestream.md#on)
* [once](blockwritestream.md#once)
* [pipe](blockwritestream.md#pipe)
* [prependListener](blockwritestream.md#prependlistener)
* [prependOnceListener](blockwritestream.md#prependoncelistener)
* [removeAllListeners](blockwritestream.md#removealllisteners)
* [removeListener](blockwritestream.md#removelistener)
* [setDefaultEncoding](blockwritestream.md#setdefaultencoding)
* [setMaxListeners](blockwritestream.md#setmaxlisteners)
* [write](blockwritestream.md#write)
* [writeBuffers](blockwritestream.md#writebuffers)
* [writeChunk](blockwritestream.md#writechunk)
* [listenerCount](blockwritestream.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlockWriteStream**(destination: *[BlockDevice](blockdevice.md)*, firstBytesToKeep?: *`number`*, maxRetries?: *`number`*): [BlockWriteStream](blockwritestream.md)

*Overrides Writable.__constructor*

*Defined in [block-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L37)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| destination | [BlockDevice](blockdevice.md) | - |
| `Default value` firstBytesToKeep | `number` | 0 |
| `Default value` maxRetries | `number` | 5 |

**Returns:** [BlockWriteStream](blockwritestream.md)

___

## Properties

<a id="_buffers"></a>

### `<Private>` _buffers

**● _buffers**: *`Buffer`[]* =  []

*Defined in [block-write-stream.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L36)*

___
<a id="_bytes"></a>

### `<Private>` _bytes

**● _bytes**: *`number`* = 0

*Defined in [block-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L37)*

___
<a id="_firstbuffers"></a>

### `<Private>` _firstBuffers

**● _firstBuffers**: *`Buffer`[]* =  []

*Defined in [block-write-stream.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L35)*

___
<a id="byteswritten"></a>

###  bytesWritten

**● bytesWritten**: *`number`* = 0

*Defined in [block-write-stream.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L34)*

___
<a id="destination"></a>

### `<Private>` destination

**● destination**: *[BlockDevice](blockdevice.md)*

*Defined in [block-write-stream.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L40)*

___
<a id="firstbytestokeep"></a>

###  firstBytesToKeep

**● firstBytesToKeep**: *`number`*

*Defined in [block-write-stream.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L41)*

___
<a id="maxretries"></a>

### `<Private>` maxRetries

**● maxRetries**: *`number`*

*Defined in [block-write-stream.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L42)*

___
<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from Writable.writable*

*Defined in /node_modules/@types/node/index.d.ts:3800*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:715*

___

## Methods

<a id="__final"></a>

### `<Private>` __final

▸ **__final**(): `Promise`<`void`>

*Defined in [block-write-stream.ts:141](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L141)*

**Returns:** `Promise`<`void`>

___
<a id="__write"></a>

### `<Private>` __write

▸ **__write**(buffer: *`Buffer`*): `Promise`<`void`>

*Defined in [block-write-stream.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |

**Returns:** `Promise`<`void`>

___
<a id="_final"></a>

###  _final

▸ **_final**(callback: *`function`*): `void`

*Defined in [block-write-stream.ts:165](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L165)*

*__summary__*: Write buffered data before a stream ends, called by stream internals

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="_write"></a>

###  _write

▸ **_write**(buffer: *`Buffer`*, _encoding: *`string`*, callback: *`function`*): `void`

*Overrides Writable._write*

*Defined in [block-write-stream.ts:133](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L133)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| _encoding | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

▸ **addListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **addListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **addListener**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3820*

Event emitter The defined events on documents including:

1.  close
2.  drain
3.  error
4.  finish
5.  pipe
6.  unpipe

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3821*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3822*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3823*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3824*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3825*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:3826*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(error?: *[Error](notcapable.md#error)*): `this`

*Inherited from Writable.destroy*

*Defined in [/typings/readable-stream/index.d.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/typings/readable-stream/index.d.ts#L18)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` error | [Error](notcapable.md#error) |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"drain"*, chunk: *`Buffer` \| `string`*): `boolean`

▸ **emit**(event: *"error"*, err: *`Error`*): `boolean`

▸ **emit**(event: *"finish"*): `boolean`

▸ **emit**(event: *"pipe"*, src: *`Readable`*): `boolean`

▸ **emit**(event: *"unpipe"*, src: *`Readable`*): `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3828*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3829*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3830*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| chunk | `Buffer` \| `string` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3831*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3832*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3833*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| src | `Readable` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:3834*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| src | `Readable` |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(cb?: *`Function`*): `void`

▸ **end**(chunk: *`any`*, cb?: *`Function`*): `void`

▸ **end**(chunk: *`any`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `void`

*Inherited from Writable.end*

*Defined in /node_modules/@types/node/index.d.ts:3806*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /node_modules/@types/node/index.d.ts:3807*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /node_modules/@types/node/index.d.ts:3808*

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

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

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

▸ **on**(event: *`string`*, listener: *`Function`*): `this`

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"drain"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: *"finish"*, listener: *`function`*): `this`

▸ **on**(event: *"pipe"*, listener: *`function`*): `this`

▸ **on**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3836*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3837*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3838*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3839*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3840*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3841*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:3842*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string`*, listener: *`Function`*): `this`

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"drain"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

▸ **once**(event: *"finish"*, listener: *`function`*): `this`

▸ **once**(event: *"pipe"*, listener: *`function`*): `this`

▸ **once**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3844*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3845*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3846*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3847*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3848*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3849*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:3850*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

___
<a id="pipe"></a>

###  pipe

▸ **pipe**<`T`>(destination: *`T`*, options?: *`undefined` \| `object`*): `T`

*Inherited from internal.pipe*

*Defined in /node_modules/@types/node/index.d.ts:3703*

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

▸ **prependListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **prependListener**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3852*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3853*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3854*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3855*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3856*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3857*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:3858*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **prependOnceListener**(event: *"close"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"error"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3860*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3861*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3862*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3863*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3864*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3865*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:3866*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

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

▸ **removeListener**(event: *`string`*, listener: *`Function`*): `this`

▸ **removeListener**(event: *"close"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3868*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3869*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3870*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3871*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3872*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3873*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:3874*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

**Returns:** `this`

___
<a id="setdefaultencoding"></a>

###  setDefaultEncoding

▸ **setDefaultEncoding**(encoding: *`string`*): `this`

*Inherited from Writable.setDefaultEncoding*

*Defined in /node_modules/@types/node/index.d.ts:3805*

**Parameters:**

| Name | Type |
| ------ | ------ |
| encoding | `string` |

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

▸ **write**(chunk: *`any`*, cb?: *`Function`*): `boolean`

▸ **write**(chunk: *`any`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `boolean`

*Inherited from Writable.write*

*Defined in /node_modules/@types/node/index.d.ts:3803*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

*Inherited from Writable.write*

*Defined in /node_modules/@types/node/index.d.ts:3804*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` encoding | `undefined` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

___
<a id="writebuffers"></a>

### `<Private>` writeBuffers

▸ **writeBuffers**(): `Promise`<`void`>

*Defined in [block-write-stream.ts:82](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L82)*

**Returns:** `Promise`<`void`>

___
<a id="writechunk"></a>

### `<Private>` writeChunk

▸ **writeChunk**(buffer: *`Buffer`*, position: *`number`*, flushing?: *`boolean`*): `Promise`<`void`>

*Defined in [block-write-stream.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/block-write-stream.ts#L50)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| buffer | `Buffer` | - |
| position | `number` | - |
| `Default value` flushing | `boolean` | false |

**Returns:** `Promise`<`void`>

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

