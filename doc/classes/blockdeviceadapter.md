[etcher-sdk](../README.md) > [BlockDeviceAdapter](../classes/blockdeviceadapter.md)

# Class: BlockDeviceAdapter

## Hierarchy

↳  [Adapter](adapter.md)

**↳ BlockDeviceAdapter**

## Index

### Constructors

* [constructor](blockdeviceadapter.md#constructor)

### Properties

* [drives](blockdeviceadapter.md#drives)
* [includeSystemDrives](blockdeviceadapter.md#includesystemdrives)
* [ready](blockdeviceadapter.md#ready)
* [running](blockdeviceadapter.md#running)
* [defaultMaxListeners](blockdeviceadapter.md#defaultmaxlisteners)

### Methods

* [addListener](blockdeviceadapter.md#addlistener)
* [emit](blockdeviceadapter.md#emit)
* [eventNames](blockdeviceadapter.md#eventnames)
* [getMaxListeners](blockdeviceadapter.md#getmaxlisteners)
* [listDrives](blockdeviceadapter.md#listdrives)
* [listenerCount](blockdeviceadapter.md#listenercount)
* [listeners](blockdeviceadapter.md#listeners)
* [on](blockdeviceadapter.md#on)
* [once](blockdeviceadapter.md#once)
* [prependListener](blockdeviceadapter.md#prependlistener)
* [prependOnceListener](blockdeviceadapter.md#prependoncelistener)
* [removeAllListeners](blockdeviceadapter.md#removealllisteners)
* [removeListener](blockdeviceadapter.md#removelistener)
* [scan](blockdeviceadapter.md#scan)
* [scanLoop](blockdeviceadapter.md#scanloop)
* [setMaxListeners](blockdeviceadapter.md#setmaxlisteners)
* [start](blockdeviceadapter.md#start)
* [stop](blockdeviceadapter.md#stop)
* [listenerCount](blockdeviceadapter.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlockDeviceAdapter**(includeSystemDrives?: *`function`*): [BlockDeviceAdapter](blockdeviceadapter.md)

*Defined in [scanner/adapters/block-device.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L60)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` includeSystemDrives | `function` |  () &#x3D;&gt; false |

**Returns:** [BlockDeviceAdapter](blockdeviceadapter.md)

___

## Properties

<a id="drives"></a>

### `<Private>` drives

**● drives**: *`Map`<`string`, [BlockDevice](blockdevice.md)>* =  new Map()

*Defined in [scanner/adapters/block-device.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L58)*

___
<a id="includesystemdrives"></a>

###  includeSystemDrives

**● includeSystemDrives**: *`function`*

*Defined in [scanner/adapters/block-device.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L62)*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="ready"></a>

### `<Private>` ready

**● ready**: *`boolean`* = false

*Defined in [scanner/adapters/block-device.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L60)*

___
<a id="running"></a>

### `<Private>` running

**● running**: *`boolean`* = false

*Defined in [scanner/adapters/block-device.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L59)*

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
<a id="listdrives"></a>

### `<Private>` listDrives

▸ **listDrives**(): `Promise`<`Map`<`string`, [DrivelistDrive](../interfaces/drivelistdrive.md)>>

*Defined in [scanner/adapters/block-device.ts:107](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L107)*

**Returns:** `Promise`<`Map`<`string`, [DrivelistDrive](../interfaces/drivelistdrive.md)>>

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
<a id="scan"></a>

### `<Private>` scan

▸ **scan**(): `Promise`<`void`>

*Defined in [scanner/adapters/block-device.ts:88](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L88)*

**Returns:** `Promise`<`void`>

___
<a id="scanloop"></a>

### `<Private>` scanLoop

▸ **scanLoop**(): `Promise`<`void`>

*Defined in [scanner/adapters/block-device.ts:77](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L77)*

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
<a id="start"></a>

###  start

▸ **start**(): `void`

*Overrides [Adapter](adapter.md).[start](adapter.md#start)*

*Defined in [scanner/adapters/block-device.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L66)*

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Overrides [Adapter](adapter.md).[stop](adapter.md#stop)*

*Defined in [scanner/adapters/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/6429a60/lib/scanner/adapters/block-device.ts#L71)*

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

