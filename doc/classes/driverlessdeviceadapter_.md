[etcher-sdk](../README.md) > [DriverlessDeviceAdapter$](../classes/driverlessdeviceadapter_.md)

# Class: DriverlessDeviceAdapter$

## Hierarchy

↳  [Adapter](adapter.md)

**↳ DriverlessDeviceAdapter$**

## Index

### Properties

* [drives](driverlessdeviceadapter_.md#drives)
* [listDriverlessDevices](driverlessdeviceadapter_.md#listdriverlessdevices)
* [ready](driverlessdeviceadapter_.md#ready)
* [running](driverlessdeviceadapter_.md#running)
* [defaultMaxListeners](driverlessdeviceadapter_.md#defaultmaxlisteners)

### Methods

* [addListener](driverlessdeviceadapter_.md#addlistener)
* [emit](driverlessdeviceadapter_.md#emit)
* [eventNames](driverlessdeviceadapter_.md#eventnames)
* [getMaxListeners](driverlessdeviceadapter_.md#getmaxlisteners)
* [listDrives](driverlessdeviceadapter_.md#listdrives)
* [listenerCount](driverlessdeviceadapter_.md#listenercount)
* [listeners](driverlessdeviceadapter_.md#listeners)
* [on](driverlessdeviceadapter_.md#on)
* [once](driverlessdeviceadapter_.md#once)
* [prependListener](driverlessdeviceadapter_.md#prependlistener)
* [prependOnceListener](driverlessdeviceadapter_.md#prependoncelistener)
* [removeAllListeners](driverlessdeviceadapter_.md#removealllisteners)
* [removeListener](driverlessdeviceadapter_.md#removelistener)
* [scan](driverlessdeviceadapter_.md#scan)
* [scanLoop](driverlessdeviceadapter_.md#scanloop)
* [setMaxListeners](driverlessdeviceadapter_.md#setmaxlisteners)
* [start](driverlessdeviceadapter_.md#start)
* [stop](driverlessdeviceadapter_.md#stop)
* [listenerCount](driverlessdeviceadapter_.md#listenercount-1)

---

## Properties

<a id="drives"></a>

### `<Private>` drives

**● drives**: *`Map`<`string`, [DriverlessDevice](driverlessdevice.md)>* =  new Map()

*Defined in [scanner/adapters/driverless.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L30)*

___
<a id="listdriverlessdevices"></a>

### `<Private>` listDriverlessDevices

**● listDriverlessDevices**: *`any`*

*Defined in [scanner/adapters/driverless.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L33)*

___
<a id="ready"></a>

### `<Private>` ready

**● ready**: *`boolean`* = false

*Defined in [scanner/adapters/driverless.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L32)*

___
<a id="running"></a>

### `<Private>` running

**● running**: *`boolean`* = false

*Defined in [scanner/adapters/driverless.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L31)*

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
<a id="listdrives"></a>

### `<Private>` listDrives

▸ **listDrives**(): `Map`<`string`, `WinUsbDriverlessDevice`>

*Defined in [scanner/adapters/driverless.ts:88](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L88)*

**Returns:** `Map`<`string`, `WinUsbDriverlessDevice`>

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
<a id="scan"></a>

### `<Private>` scan

▸ **scan**(): `void`

*Defined in [scanner/adapters/driverless.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L63)*

**Returns:** `void`

___
<a id="scanloop"></a>

### `<Private>` scanLoop

▸ **scanLoop**(): `Promise`<`void`>

*Defined in [scanner/adapters/driverless.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L46)*

**Returns:** `Promise`<`void`>

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

*Defined in [scanner/adapters/driverless.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L35)*

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Overrides [Adapter](adapter.md).[stop](adapter.md#stop)*

*Defined in [scanner/adapters/driverless.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/1daa03e/lib/scanner/adapters/driverless.ts#L40)*

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

