[etcher-sdk](../README.md) › [BlockDeviceAdapter](blockdeviceadapter.md)

# Class: BlockDeviceAdapter

## Hierarchy

  ↳ [Adapter](adapter.md)

  ↳ **BlockDeviceAdapter**

## Index

### Constructors

* [constructor](blockdeviceadapter.md#constructor)

### Properties

* [drives](blockdeviceadapter.md#private-drives)
* [includeSystemDrives](blockdeviceadapter.md#includesystemdrives)
* [oDirect](blockdeviceadapter.md#private-odirect)
* [oWrite](blockdeviceadapter.md#private-owrite)
* [ready](blockdeviceadapter.md#private-ready)
* [running](blockdeviceadapter.md#private-running)
* [unmountOnSuccess](blockdeviceadapter.md#private-unmountonsuccess)
* [defaultMaxListeners](blockdeviceadapter.md#static-defaultmaxlisteners)

### Methods

* [addListener](blockdeviceadapter.md#addlistener)
* [emit](blockdeviceadapter.md#emit)
* [eventNames](blockdeviceadapter.md#eventnames)
* [getMaxListeners](blockdeviceadapter.md#getmaxlisteners)
* [listDrives](blockdeviceadapter.md#private-listdrives)
* [listenerCount](blockdeviceadapter.md#listenercount)
* [listeners](blockdeviceadapter.md#listeners)
* [off](blockdeviceadapter.md#off)
* [on](blockdeviceadapter.md#on)
* [once](blockdeviceadapter.md#once)
* [prependListener](blockdeviceadapter.md#prependlistener)
* [prependOnceListener](blockdeviceadapter.md#prependoncelistener)
* [rawListeners](blockdeviceadapter.md#rawlisteners)
* [removeAllListeners](blockdeviceadapter.md#removealllisteners)
* [removeListener](blockdeviceadapter.md#removelistener)
* [scan](blockdeviceadapter.md#private-scan)
* [scanLoop](blockdeviceadapter.md#private-scanloop)
* [setMaxListeners](blockdeviceadapter.md#setmaxlisteners)
* [start](blockdeviceadapter.md#start)
* [stop](blockdeviceadapter.md#stop)
* [listenerCount](blockdeviceadapter.md#static-listenercount)
* [once](blockdeviceadapter.md#static-once)

## Constructors

###  constructor

\+ **new BlockDeviceAdapter**(`__namedParameters`: object): *[BlockDeviceAdapter](blockdeviceadapter.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/scanner/adapters/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L71)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`direct` | boolean | true |
`unmountOnSuccess` | boolean | false |
`write` | boolean | false |
`includeSystemDrives` |  | - |

**Returns:** *[BlockDeviceAdapter](blockdeviceadapter.md)*

## Properties

### `Private` drives

• **drives**: *Map‹string, [BlockDevice](blockdevice.md)›* = new Map()

*Defined in [lib/scanner/adapters/block-device.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L69)*

___

###  includeSystemDrives

• **includeSystemDrives**: *function*

*Defined in [lib/scanner/adapters/block-device.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L65)*

#### Type declaration:

▸ (): *boolean*

___

### `Private` oDirect

• **oDirect**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L68)*

___

### `Private` oWrite

• **oWrite**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L67)*

___

### `Private` ready

• **ready**: *boolean* = false

*Defined in [lib/scanner/adapters/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L71)*

___

### `Private` running

• **running**: *boolean* = false

*Defined in [lib/scanner/adapters/block-device.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L70)*

___

### `Private` unmountOnSuccess

• **unmountOnSuccess**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L66)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

### `Private` listDrives

▸ **listDrives**(): *Promise‹Map‹string, [DrivelistDrive](../interfaces/drivelistdrive.md)››*

*Defined in [lib/scanner/adapters/block-device.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L137)*

**Returns:** *Promise‹Map‹string, [DrivelistDrive](../interfaces/drivelistdrive.md)››*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[off](../interfaces/sparsereadable.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/globals.d.ts:555

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/globals.d.ts:556

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:567

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:568

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

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

▸ **scan**(): *Promise‹void›*

*Defined in [lib/scanner/adapters/block-device.ts:113](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L113)*

**Returns:** *Promise‹void›*

___

### `Private` scanLoop

▸ **scanLoop**(): *Promise‹void›*

*Defined in [lib/scanner/adapters/block-device.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L102)*

**Returns:** *Promise‹void›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *void*

*Overrides [Adapter](adapter.md).[start](adapter.md#abstract-start)*

*Defined in [lib/scanner/adapters/block-device.ts:91](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L91)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Adapter](adapter.md).[stop](adapter.md#abstract-stop)*

*Defined in [lib/scanner/adapters/block-device.ts:96](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L96)*

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

___

### `Static` once

▸ **once**(`emitter`: NodeEventTarget, `event`: string | symbol): *Promise‹any[]›*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*
