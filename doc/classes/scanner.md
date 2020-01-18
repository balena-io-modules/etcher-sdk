[etcher-sdk](../README.md) > [Scanner](../classes/scanner.md)

# Class: Scanner

## Hierarchy

 `EventEmitter`

**↳ Scanner**

## Index

### Constructors

* [constructor](scanner.md#constructor)

### Properties

* [adapters](scanner.md#adapters)
* [drives](scanner.md#drives)
* [defaultMaxListeners](scanner.md#defaultmaxlisteners)

### Methods

* [addListener](scanner.md#addlistener)
* [emit](scanner.md#emit)
* [eventNames](scanner.md#eventnames)
* [getBy](scanner.md#getby)
* [getMaxListeners](scanner.md#getmaxlisteners)
* [listenerCount](scanner.md#listenercount)
* [listeners](scanner.md#listeners)
* [on](scanner.md#on)
* [onAttach](scanner.md#onattach)
* [onDetach](scanner.md#ondetach)
* [once](scanner.md#once)
* [prependListener](scanner.md#prependlistener)
* [prependOnceListener](scanner.md#prependoncelistener)
* [removeAllListeners](scanner.md#removealllisteners)
* [removeListener](scanner.md#removelistener)
* [setMaxListeners](scanner.md#setmaxlisteners)
* [start](scanner.md#start)
* [stop](scanner.md#stop)
* [listenerCount](scanner.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Scanner**(adapters: *[Adapter](adapter.md)[]*): [Scanner](scanner.md)

*Defined in [scanner/scanner.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L25)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| adapters | [Adapter](adapter.md)[] |

**Returns:** [Scanner](scanner.md)

___

## Properties

<a id="adapters"></a>

### `<Private>` adapters

**● adapters**: *[Adapter](adapter.md)[]*

*Defined in [scanner/scanner.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L27)*

___
<a id="drives"></a>

###  drives

**● drives**: *`Set`<[AdapterSourceDestination](../interfaces/adaptersourcedestination.md)>* =  new Set()

*Defined in [scanner/scanner.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L25)*

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
<a id="getby"></a>

###  getBy

▸ **getBy**(field: *"raw" \| "device" \| "devicePath"*, value: *`string`*): [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) \| `undefined`

*Defined in [scanner/scanner.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| field | "raw" \| "device" \| "devicePath" |
| value | `string` |

**Returns:** [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) \| `undefined`

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
<a id="onattach"></a>

### `<Private>` onAttach

▸ **onAttach**(drive: *[AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*): `void`

*Defined in [scanner/scanner.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| drive | [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) |

**Returns:** `void`

___
<a id="ondetach"></a>

### `<Private>` onDetach

▸ **onDetach**(drive: *[AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*): `void`

*Defined in [scanner/scanner.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| drive | [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) |

**Returns:** `void`

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
<a id="start"></a>

###  start

▸ **start**(): `Promise`<`void`>

*Defined in [scanner/scanner.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L57)*

**Returns:** `Promise`<`void`>

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [scanner/scanner.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/scanner/scanner.ts#L74)*

**Returns:** `void`

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

