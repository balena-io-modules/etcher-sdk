[etcher-sdk](../README.md) > [CountingWritable](../classes/countingwritable.md)

# Class: CountingWritable

## Hierarchy

 `Writable`

**↳ CountingWritable**

## Implements

* `WritableStream`

## Index

### Constructors

* [constructor](countingwritable.md#constructor)

### Properties

* [bytesWritten](countingwritable.md#byteswritten)
* [position](countingwritable.md#position)
* [writable](countingwritable.md#writable)
* [defaultMaxListeners](countingwritable.md#defaultmaxlisteners)

### Methods

* [_write](countingwritable.md#_write)
* [addListener](countingwritable.md#addlistener)
* [emit](countingwritable.md#emit)
* [end](countingwritable.md#end)
* [eventNames](countingwritable.md#eventnames)
* [getMaxListeners](countingwritable.md#getmaxlisteners)
* [listenerCount](countingwritable.md#listenercount)
* [listeners](countingwritable.md#listeners)
* [on](countingwritable.md#on)
* [once](countingwritable.md#once)
* [pipe](countingwritable.md#pipe)
* [prependListener](countingwritable.md#prependlistener)
* [prependOnceListener](countingwritable.md#prependoncelistener)
* [removeAllListeners](countingwritable.md#removealllisteners)
* [removeListener](countingwritable.md#removelistener)
* [setDefaultEncoding](countingwritable.md#setdefaultencoding)
* [setMaxListeners](countingwritable.md#setmaxlisteners)
* [write](countingwritable.md#write)
* [listenerCount](countingwritable.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CountingWritable**(opts?: *`WritableOptions`*): [CountingWritable](countingwritable.md)

*Inherited from Writable.__constructor*

*Defined in /node_modules/@types/node/base.d.ts:3770*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opts | `WritableOptions` |

**Returns:** [CountingWritable](countingwritable.md)

___

## Properties

<a id="byteswritten"></a>

###  bytesWritten

**● bytesWritten**: *`number`* = 0

*Defined in [source-destination/progress.ts:92](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/progress.ts#L92)*

___
<a id="position"></a>

###  position

**● position**: *`number` \| `undefined`*

*Defined in [source-destination/progress.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/progress.ts#L93)*

___
<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from Writable.writable*

*Defined in /node_modules/@types/node/base.d.ts:3770*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:681*

___

## Methods

<a id="_write"></a>

###  _write

▸ **_write**(chunk: *`Buffer` \| `Chunk`*, _enc: *`string`*, callback: *`function`*): `void`

*Overrides Writable._write*

*Defined in [source-destination/progress.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/progress.ts#L95)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `Buffer` \| `Chunk` |
| _enc | `string` |
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

*Defined in /node_modules/@types/node/base.d.ts:3790*

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

*Defined in /node_modules/@types/node/base.d.ts:3791*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3792*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3793*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3794*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3795*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:3796*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "unpipe" |
| listener | `function` |

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

*Defined in /node_modules/@types/node/base.d.ts:3798*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3799*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3800*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| chunk | `Buffer` \| `string` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3801*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| err | `Error` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3802*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3803*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| src | `Readable` |

**Returns:** `boolean`

*Inherited from Writable.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/base.d.ts:3804*

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

*Defined in /node_modules/@types/node/base.d.ts:3776*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /node_modules/@types/node/base.d.ts:3777*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from Writable.end*

*Defined in /node_modules/@types/node/base.d.ts:3778*

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

*Defined in /node_modules/@types/node/base.d.ts:694*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:691*

**Returns:** `number`

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

▸ **on**(event: *`string`*, listener: *`Function`*): `this`

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"drain"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

▸ **on**(event: *"finish"*, listener: *`function`*): `this`

▸ **on**(event: *"pipe"*, listener: *`function`*): `this`

▸ **on**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3806*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3807*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3808*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3809*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3810*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3811*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/base.d.ts:3812*

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

*Defined in /node_modules/@types/node/base.d.ts:3814*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3815*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3816*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3817*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3818*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3819*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/base.d.ts:3820*

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

*Defined in /node_modules/@types/node/base.d.ts:3673*

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

*Defined in /node_modules/@types/node/base.d.ts:3822*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3823*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3824*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3825*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3826*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3827*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:3828*

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

*Defined in /node_modules/@types/node/base.d.ts:3830*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3831*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3832*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3833*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3834*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3835*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/base.d.ts:3836*

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

▸ **removeListener**(event: *"drain"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"error"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"finish"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"pipe"*, listener: *`function`*): `this`

▸ **removeListener**(event: *"unpipe"*, listener: *`function`*): `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3838*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |
| listener | `Function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3839*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3840*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "drain" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3841*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3842*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "finish" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3843*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "pipe" |
| listener | `function` |

**Returns:** `this`

*Inherited from Writable.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/base.d.ts:3844*

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

*Defined in /node_modules/@types/node/base.d.ts:3775*

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

*Defined in /node_modules/@types/node/base.d.ts:690*

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

*Defined in /node_modules/@types/node/base.d.ts:3773*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | `any` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

*Inherited from Writable.write*

*Defined in /node_modules/@types/node/base.d.ts:3774*

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

