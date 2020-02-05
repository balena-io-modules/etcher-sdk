[etcher-sdk](../README.md) > [SparseWritable](../interfaces/sparsewritable.md)

# Interface: SparseWritable

## Hierarchy

 `WritableStream`

**↳ SparseWritable**

## Implemented by

* [SparseWriteStream](../classes/sparsewritestream.md)

## Index

### Properties

* [writable](sparsewritable.md#writable)

### Methods

* [_write](sparsewritable.md#_write)
* [addListener](sparsewritable.md#addlistener)
* [emit](sparsewritable.md#emit)
* [end](sparsewritable.md#end)
* [eventNames](sparsewritable.md#eventnames)
* [getMaxListeners](sparsewritable.md#getmaxlisteners)
* [listenerCount](sparsewritable.md#listenercount)
* [listeners](sparsewritable.md#listeners)
* [on](sparsewritable.md#on)
* [once](sparsewritable.md#once)
* [prependListener](sparsewritable.md#prependlistener)
* [prependOnceListener](sparsewritable.md#prependoncelistener)
* [removeAllListeners](sparsewritable.md#removealllisteners)
* [removeListener](sparsewritable.md#removelistener)
* [setMaxListeners](sparsewritable.md#setmaxlisteners)
* [write](sparsewritable.md#write)

---

## Properties

<a id="writable"></a>

###  writable

**● writable**: *`boolean`*

*Inherited from WritableStream.writable*

*Defined in /node_modules/@types/node/base.d.ts:367*

___

## Methods

<a id="_write"></a>

###  _write

▸ **_write**(chunk: *[SparseStreamChunk](sparsestreamchunk.md)*, encoding: *`string`*, callback: *`function`*): `void`

*Defined in [sparse-stream/sparse-write-stream.ts:12](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/sparse-stream/sparse-write-stream.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| chunk | [SparseStreamChunk](sparsestreamchunk.md) |
| encoding | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /node_modules/@types/node/base.d.ts:336*

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

*Defined in /node_modules/@types/node/base.d.ts:344*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(cb?: *`Function`*): `void`

▸ **end**(buffer: *`Buffer`*, cb?: *`Function`*): `void`

▸ **end**(str: *`string`*, cb?: *`Function`*): `void`

▸ **end**(str: *`string`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `void`

*Inherited from WritableStream.end*

*Defined in /node_modules/@types/node/base.d.ts:370*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from WritableStream.end*

*Defined in /node_modules/@types/node/base.d.ts:371*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from WritableStream.end*

*Defined in /node_modules/@types/node/base.d.ts:372*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` cb | `Function` |

**Returns:** `void`

*Inherited from WritableStream.end*

*Defined in /node_modules/@types/node/base.d.ts:373*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` encoding | `undefined` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `void`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

*Inherited from EventEmitter.eventNames*

*Defined in /node_modules/@types/node/base.d.ts:349*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:342*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/base.d.ts:345*

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

*Defined in /node_modules/@types/node/base.d.ts:343*

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

*Defined in /node_modules/@types/node/base.d.ts:337*

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

*Defined in /node_modules/@types/node/base.d.ts:338*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Defined in /node_modules/@types/node/base.d.ts:347*

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

*Defined in /node_modules/@types/node/base.d.ts:348*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /node_modules/@types/node/base.d.ts:340*

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

*Defined in /node_modules/@types/node/base.d.ts:339*

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

*Defined in /node_modules/@types/node/base.d.ts:341*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="write"></a>

###  write

▸ **write**(buffer: *`Buffer` \| `string`*, cb?: *`Function`*): `boolean`

▸ **write**(str: *`string`*, encoding?: *`undefined` \| `string`*, cb?: *`Function`*): `boolean`

*Inherited from WritableStream.write*

*Defined in /node_modules/@types/node/base.d.ts:368*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

*Inherited from WritableStream.write*

*Defined in /node_modules/@types/node/base.d.ts:369*

**Parameters:**

| Name | Type |
| ------ | ------ |
| str | `string` |
| `Optional` encoding | `undefined` \| `string` |
| `Optional` cb | `Function` |

**Returns:** `boolean`

___

