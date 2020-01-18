[etcher-sdk](../README.md) > [StreamVerifier](../classes/streamverifier.md)

# Class: StreamVerifier

## Hierarchy

↳  [Verifier](verifier.md)

**↳ StreamVerifier**

## Index

### Constructors

* [constructor](streamverifier.md#constructor)

### Properties

* [checksum](streamverifier.md#checksum)
* [size](streamverifier.md#size)
* [source](streamverifier.md#source)
* [defaultMaxListeners](streamverifier.md#defaultmaxlisteners)

### Methods

* [addListener](streamverifier.md#addlistener)
* [emit](streamverifier.md#emit)
* [eventNames](streamverifier.md#eventnames)
* [getMaxListeners](streamverifier.md#getmaxlisteners)
* [handleEventsAndPipe](streamverifier.md#handleeventsandpipe)
* [listenerCount](streamverifier.md#listenercount)
* [listeners](streamverifier.md#listeners)
* [on](streamverifier.md#on)
* [once](streamverifier.md#once)
* [prependListener](streamverifier.md#prependlistener)
* [prependOnceListener](streamverifier.md#prependoncelistener)
* [removeAllListeners](streamverifier.md#removealllisteners)
* [removeListener](streamverifier.md#removelistener)
* [run](streamverifier.md#run)
* [setMaxListeners](streamverifier.md#setmaxlisteners)
* [listenerCount](streamverifier.md#listenercount-1)

### Object literals

* [progress](streamverifier.md#progress)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StreamVerifier**(source: *[SourceDestination](sourcedestination.md)*, checksum: *`string`*, size: *`number`*): [StreamVerifier](streamverifier.md)

*Defined in [source-destination/source-destination.ts:152](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](sourcedestination.md) |
| checksum | `string` |
| size | `number` |

**Returns:** [StreamVerifier](streamverifier.md)

___

## Properties

<a id="checksum"></a>

### `<Private>` checksum

**● checksum**: *`string`*

*Defined in [source-destination/source-destination.ts:155](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L155)*

___
<a id="size"></a>

### `<Private>` size

**● size**: *`number`*

*Defined in [source-destination/source-destination.ts:156](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L156)*

___
<a id="source"></a>

### `<Private>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Defined in [source-destination/source-destination.ts:154](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L154)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:681*

___

## Methods

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
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/base.d.ts:691*

**Returns:** `number`

___
<a id="handleeventsandpipe"></a>

### `<Protected>` handleEventsAndPipe

▸ **handleEventsAndPipe**(stream: *`ReadableStream`*, meter: *`WritableStream`*): `void`

*Inherited from [Verifier](verifier.md).[handleEventsAndPipe](verifier.md#handleeventsandpipe)*

*Defined in [source-destination/source-destination.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L134)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `ReadableStream` |
| meter | `WritableStream` |

**Returns:** `void`

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
<a id="run"></a>

###  run

▸ **run**(): `Promise`<`void`>

*Overrides [Verifier](verifier.md).[run](verifier.md#run)*

*Defined in [source-destination/source-destination.ts:161](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L161)*

**Returns:** `Promise`<`void`>

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

## Object literals

<a id="progress"></a>

###  progress

**progress**: *`object`*

*Inherited from [Verifier](verifier.md).[progress](verifier.md#progress)*

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L130)*

<a id="progress.bytes"></a>

####  bytes

**● bytes**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L130)*

___
<a id="progress.position"></a>

####  position

**● position**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L130)*

___
<a id="progress.speed"></a>

####  speed

**● speed**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/source-destination/source-destination.ts#L130)*

___

___

