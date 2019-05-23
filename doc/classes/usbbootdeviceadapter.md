[etcher-sdk](../README.md) > [UsbbootDeviceAdapter](../classes/usbbootdeviceadapter.md)

# Class: UsbbootDeviceAdapter

## Hierarchy

↳  [Adapter](adapter.md)

**↳ UsbbootDeviceAdapter**

## Index

### Constructors

* [constructor](usbbootdeviceadapter.md#constructor)

### Properties

* [drives](usbbootdeviceadapter.md#drives)
* [scanner](usbbootdeviceadapter.md#scanner)
* [defaultMaxListeners](usbbootdeviceadapter.md#defaultmaxlisteners)

### Methods

* [addListener](usbbootdeviceadapter.md#addlistener)
* [emit](usbbootdeviceadapter.md#emit)
* [eventNames](usbbootdeviceadapter.md#eventnames)
* [getMaxListeners](usbbootdeviceadapter.md#getmaxlisteners)
* [listenerCount](usbbootdeviceadapter.md#listenercount)
* [listeners](usbbootdeviceadapter.md#listeners)
* [on](usbbootdeviceadapter.md#on)
* [onAttach](usbbootdeviceadapter.md#onattach)
* [onDetach](usbbootdeviceadapter.md#ondetach)
* [once](usbbootdeviceadapter.md#once)
* [prependListener](usbbootdeviceadapter.md#prependlistener)
* [prependOnceListener](usbbootdeviceadapter.md#prependoncelistener)
* [removeAllListeners](usbbootdeviceadapter.md#removealllisteners)
* [removeListener](usbbootdeviceadapter.md#removelistener)
* [setMaxListeners](usbbootdeviceadapter.md#setmaxlisteners)
* [start](usbbootdeviceadapter.md#start)
* [stop](usbbootdeviceadapter.md#stop)
* [listenerCount](usbbootdeviceadapter.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UsbbootDeviceAdapter**(): [UsbbootDeviceAdapter](usbbootdeviceadapter.md)

*Defined in [scanner/adapters/usbboot.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L37)*

**Returns:** [UsbbootDeviceAdapter](usbbootdeviceadapter.md)

___

## Properties

<a id="drives"></a>

### `<Private>` drives

**● drives**: *`Map`<`UsbbootDevice`, [UsbbootDrive](usbbootdrive.md)>* =  new Map()

*Defined in [scanner/adapters/usbboot.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L36)*

___
<a id="scanner"></a>

### `<Private>` scanner

**● scanner**: *`UsbbootScannerType`*

*Defined in [scanner/adapters/usbboot.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L37)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:715*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:717*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:727*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:729*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:726*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:718*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="onattach"></a>

### `<Private>` onAttach

▸ **onAttach**(device: *`UsbbootDevice`*): `void`

*Defined in [scanner/adapters/usbboot.ts:61](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| device | `UsbbootDevice` |

**Returns:** `void`

___
<a id="ondetach"></a>

### `<Private>` onDetach

▸ **onDetach**(device: *`UsbbootDevice`*): `void`

*Defined in [scanner/adapters/usbboot.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| device | `UsbbootDevice` |

**Returns:** `void`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:719*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:720*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:721*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:723*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:722*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:724*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Overrides [Adapter](adapter.md).[start](adapter.md#start)*

*Defined in [scanner/adapters/usbboot.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L53)*

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Overrides [Adapter](adapter.md).[stop](adapter.md#stop)*

*Defined in [scanner/adapters/usbboot.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/usbboot.ts#L57)*

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

