[etcher-sdk](../README.md) > [MultiDestinationVerifier](../classes/multidestinationverifier.md)

# Class: MultiDestinationVerifier

## Hierarchy

↳  [Verifier](verifier.md)

**↳ MultiDestinationVerifier**

## Index

### Constructors

* [constructor](multidestinationverifier.md#constructor)

### Properties

* [timer](multidestinationverifier.md#timer)
* [verifiers](multidestinationverifier.md#verifiers)
* [defaultMaxListeners](multidestinationverifier.md#defaultmaxlisteners)

### Methods

* [addListener](multidestinationverifier.md#addlistener)
* [emit](multidestinationverifier.md#emit)
* [emitProgress](multidestinationverifier.md#emitprogress)
* [eventNames](multidestinationverifier.md#eventnames)
* [getMaxListeners](multidestinationverifier.md#getmaxlisteners)
* [handleEventsAndPipe](multidestinationverifier.md#handleeventsandpipe)
* [listenerCount](multidestinationverifier.md#listenercount)
* [listeners](multidestinationverifier.md#listeners)
* [on](multidestinationverifier.md#on)
* [once](multidestinationverifier.md#once)
* [oneVerifierFinished](multidestinationverifier.md#oneverifierfinished)
* [prependListener](multidestinationverifier.md#prependlistener)
* [prependOnceListener](multidestinationverifier.md#prependoncelistener)
* [removeAllListeners](multidestinationverifier.md#removealllisteners)
* [removeListener](multidestinationverifier.md#removelistener)
* [run](multidestinationverifier.md#run)
* [setMaxListeners](multidestinationverifier.md#setmaxlisteners)
* [listenerCount](multidestinationverifier.md#listenercount-1)

### Object literals

* [progress](multidestinationverifier.md#progress)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MultiDestinationVerifier**(source: *[MultiDestination](multidestination.md)*, checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [MultiDestinationVerifier](multidestinationverifier.md)

*Defined in [source-destination/multi-destination.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [MultiDestination](multidestination.md) |
| checksumOrBlocks | `string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
| `Optional` size | `undefined` \| `number` |

**Returns:** [MultiDestinationVerifier](multidestinationverifier.md)

___

## Properties

<a id="timer"></a>

### `<Private>` timer

**● timer**: *`Timer`*

*Defined in [source-destination/multi-destination.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L43)*

___
<a id="verifiers"></a>

### `<Private>` verifiers

**● verifiers**: *`Set`<[Verifier](verifier.md)>* =  new Set()

*Defined in [source-destination/multi-destination.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L42)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:715*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:717*

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

*Defined in /node_modules/@types/node/index.d.ts:727*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="emitprogress"></a>

### `<Private>` emitProgress

▸ **emitProgress**(): `void`

*Defined in [source-destination/multi-destination.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L76)*

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
<a id="handleeventsandpipe"></a>

### `<Protected>` handleEventsAndPipe

▸ **handleEventsAndPipe**(stream: *`ReadableStream`*, meter: *`WritableStream`*): `void`

*Inherited from [Verifier](verifier.md).[handleEventsAndPipe](verifier.md#handleeventsandpipe)*

*Defined in [source-destination/source-destination.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L134)*

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

▸ **on**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:718*

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

*Defined in /node_modules/@types/node/index.d.ts:719*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="oneverifierfinished"></a>

### `<Private>` oneVerifierFinished

▸ **oneVerifierFinished**(verifier: *[Verifier](verifier.md)*): `void`

*Defined in [source-destination/multi-destination.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| verifier | [Verifier](verifier.md) |

**Returns:** `void`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:720*

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

*Defined in /node_modules/@types/node/index.d.ts:721*

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

*Defined in /node_modules/@types/node/index.d.ts:723*

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

*Defined in /node_modules/@types/node/index.d.ts:722*

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

*Defined in [source-destination/multi-destination.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/multi-destination.ts#L86)*

**Returns:** `Promise`<`void`>

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

## Object literals

<a id="progress"></a>

###  progress

**progress**: *`object`*

*Inherited from [Verifier](verifier.md).[progress](verifier.md#progress)*

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L130)*

<a id="progress.bytes"></a>

####  bytes

**● bytes**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L130)*

___
<a id="progress.position"></a>

####  position

**● position**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L130)*

___
<a id="progress.speed"></a>

####  speed

**● speed**: *`number`* = 0

*Defined in [source-destination/source-destination.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/5821ce5/lib/source-destination/source-destination.ts#L130)*

___

___

