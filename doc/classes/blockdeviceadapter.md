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
* [on](blockdeviceadapter.md#on)
* [once](blockdeviceadapter.md#once)
* [prependListener](blockdeviceadapter.md#prependlistener)
* [prependOnceListener](blockdeviceadapter.md#prependoncelistener)
* [removeAllListeners](blockdeviceadapter.md#removealllisteners)
* [removeListener](blockdeviceadapter.md#removelistener)
* [scan](blockdeviceadapter.md#private-scan)
* [scanLoop](blockdeviceadapter.md#private-scanloop)
* [setMaxListeners](blockdeviceadapter.md#setmaxlisteners)
* [start](blockdeviceadapter.md#start)
* [stop](blockdeviceadapter.md#stop)
* [listenerCount](blockdeviceadapter.md#static-listenercount)

## Constructors

###  constructor

\+ **new BlockDeviceAdapter**(`includeSystemDrives`: function, `unmountOnSuccess`: boolean, `oWrite`: boolean, `oDirect`: boolean): *[BlockDeviceAdapter](blockdeviceadapter.md)*

*Defined in [lib/scanner/adapters/block-device.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L60)*

**Parameters:**

▪`Default value`  **includeSystemDrives**: *function*= () => false

▸ (): *boolean*

▪`Default value`  **unmountOnSuccess**: *boolean*= false

▪`Default value`  **oWrite**: *boolean*= false

▪`Default value`  **oDirect**: *boolean*= true

**Returns:** *[BlockDeviceAdapter](blockdeviceadapter.md)*

## Properties

### `Private` drives

• **drives**: *Map‹string, [BlockDevice](blockdevice.md)›* = new Map()

*Defined in [lib/scanner/adapters/block-device.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L58)*

___

###  includeSystemDrives

• **includeSystemDrives**: *function*

*Defined in [lib/scanner/adapters/block-device.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L63)*

#### Type declaration:

▸ (): *boolean*

___

### `Private` oDirect

• **oDirect**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L66)*

___

### `Private` oWrite

• **oWrite**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L65)*

___

### `Private` ready

• **ready**: *boolean* = false

*Defined in [lib/scanner/adapters/block-device.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L60)*

___

### `Private` running

• **running**: *boolean* = false

*Defined in [lib/scanner/adapters/block-device.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L59)*

___

### `Private` unmountOnSuccess

• **unmountOnSuccess**: *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L64)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:896

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:898

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

Defined in node_modules/@types/node/base.d.ts:908

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

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

### `Private` listDrives

▸ **listDrives**(): *Promise‹Map‹string, [DrivelistDrive](../interfaces/drivelistdrive.md)››*

*Defined in [lib/scanner/adapters/block-device.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L117)*

**Returns:** *Promise‹Map‹string, [DrivelistDrive](../interfaces/drivelistdrive.md)››*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:910

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

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:899

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

Defined in node_modules/@types/node/base.d.ts:900

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

Defined in node_modules/@types/node/base.d.ts:901

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

Defined in node_modules/@types/node/base.d.ts:902

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

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:904

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

Defined in node_modules/@types/node/base.d.ts:903

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

*Defined in [lib/scanner/adapters/block-device.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L93)*

**Returns:** *Promise‹void›*

___

### `Private` scanLoop

▸ **scanLoop**(): *Promise‹void›*

*Defined in [lib/scanner/adapters/block-device.ts:82](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L82)*

**Returns:** *Promise‹void›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:905

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *void*

*Overrides [Adapter](adapter.md).[start](adapter.md#abstract-start)*

*Defined in [lib/scanner/adapters/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L71)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Adapter](adapter.md).[stop](adapter.md#abstract-stop)*

*Defined in [lib/scanner/adapters/block-device.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/scanner/adapters/block-device.ts#L76)*

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:895

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
