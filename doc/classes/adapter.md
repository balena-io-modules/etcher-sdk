[etcher-sdk](../README.md) › [Adapter](adapter.md)

# Class: Adapter

## Hierarchy

* EventEmitter

  ↳ **Adapter**

  ↳ [BlockDeviceAdapter](blockdeviceadapter.md)

  ↳ [UsbbootDeviceAdapter](usbbootdeviceadapter.md)

  ↳ [DriverlessDeviceAdapter$](driverlessdeviceadapter_.md)

## Index

### Properties

* [defaultMaxListeners](adapter.md#static-defaultmaxlisteners)

### Methods

* [addListener](adapter.md#addlistener)
* [emit](adapter.md#emit)
* [eventNames](adapter.md#eventnames)
* [getMaxListeners](adapter.md#getmaxlisteners)
* [listenerCount](adapter.md#listenercount)
* [listeners](adapter.md#listeners)
* [on](adapter.md#on)
* [once](adapter.md#once)
* [prependListener](adapter.md#prependlistener)
* [prependOnceListener](adapter.md#prependoncelistener)
* [removeAllListeners](adapter.md#removealllisteners)
* [removeListener](adapter.md#removelistener)
* [setMaxListeners](adapter.md#setmaxlisteners)
* [start](adapter.md#abstract-start)
* [stop](adapter.md#abstract-stop)
* [listenerCount](adapter.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:683

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/base.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

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

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:684

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/base.d.ts:685

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:686

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:687

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:688

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Abstract` start

▸ **start**(): *void*

*Defined in [lib/scanner/adapters/adapter.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/scanner/adapters/adapter.ts#L34)*

**Returns:** *void*

___

### `Abstract` stop

▸ **stop**(): *void*

*Defined in [lib/scanner/adapters/adapter.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/scanner/adapters/adapter.ts#L35)*

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:680

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
