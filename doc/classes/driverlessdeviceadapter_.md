[etcher-sdk](../README.md) › [DriverlessDeviceAdapter$](driverlessdeviceadapter_.md)

# Class: DriverlessDeviceAdapter$

## Hierarchy

  ↳ [Adapter](adapter.md)

  ↳ **DriverlessDeviceAdapter$**

## Index

### Properties

* [drives](driverlessdeviceadapter_.md#private-drives)
* [listDriverlessDevices](driverlessdeviceadapter_.md#private-listdriverlessdevices)
* [ready](driverlessdeviceadapter_.md#private-ready)
* [running](driverlessdeviceadapter_.md#private-running)
* [defaultMaxListeners](driverlessdeviceadapter_.md#static-defaultmaxlisteners)

### Methods

* [addListener](driverlessdeviceadapter_.md#addlistener)
* [emit](driverlessdeviceadapter_.md#emit)
* [eventNames](driverlessdeviceadapter_.md#eventnames)
* [getMaxListeners](driverlessdeviceadapter_.md#getmaxlisteners)
* [listDrives](driverlessdeviceadapter_.md#private-listdrives)
* [listenerCount](driverlessdeviceadapter_.md#listenercount)
* [listeners](driverlessdeviceadapter_.md#listeners)
* [off](driverlessdeviceadapter_.md#off)
* [on](driverlessdeviceadapter_.md#on)
* [once](driverlessdeviceadapter_.md#once)
* [prependListener](driverlessdeviceadapter_.md#prependlistener)
* [prependOnceListener](driverlessdeviceadapter_.md#prependoncelistener)
* [rawListeners](driverlessdeviceadapter_.md#rawlisteners)
* [removeAllListeners](driverlessdeviceadapter_.md#removealllisteners)
* [removeListener](driverlessdeviceadapter_.md#removelistener)
* [scan](driverlessdeviceadapter_.md#private-scan)
* [scanLoop](driverlessdeviceadapter_.md#private-scanloop)
* [setMaxListeners](driverlessdeviceadapter_.md#setmaxlisteners)
* [start](driverlessdeviceadapter_.md#start)
* [stop](driverlessdeviceadapter_.md#stop)
* [listenerCount](driverlessdeviceadapter_.md#static-listenercount)

## Properties

### `Private` drives

• **drives**: *Map‹string, [DriverlessDevice](driverlessdevice.md)›* = new Map()

*Defined in [lib/scanner/adapters/driverless.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L29)*

___

### `Private` listDriverlessDevices

• **listDriverlessDevices**: *any*

*Defined in [lib/scanner/adapters/driverless.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L32)*

___

### `Private` ready

• **ready**: *boolean* = false

*Defined in [lib/scanner/adapters/driverless.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L31)*

___

### `Private` running

• **running**: *boolean* = false

*Defined in [lib/scanner/adapters/driverless.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L30)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

### `Private` listDrives

▸ **listDrives**(): *Map‹string, WinUsbDriverlessDevice›*

*Defined in [lib/scanner/adapters/driverless.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L87)*

**Returns:** *Map‹string, WinUsbDriverlessDevice›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[off](countingwritable.md#off)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[off](../interfaces/sparsereadable.md#off)*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](countingwritable.md).[rawListeners](countingwritable.md#rawlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` scan

▸ **scan**(): *void*

*Defined in [lib/scanner/adapters/driverless.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L62)*

**Returns:** *void*

___

### `Private` scanLoop

▸ **scanLoop**(): *Promise‹void›*

*Defined in [lib/scanner/adapters/driverless.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L45)*

**Returns:** *Promise‹void›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *void*

*Overrides [Adapter](adapter.md).[start](adapter.md#abstract-start)*

*Defined in [lib/scanner/adapters/driverless.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L34)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Adapter](adapter.md).[stop](adapter.md#abstract-stop)*

*Defined in [lib/scanner/adapters/driverless.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/00d0c25/lib/scanner/adapters/driverless.ts#L39)*

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
