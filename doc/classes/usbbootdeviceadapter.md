[etcher-sdk](../README.md) › [UsbbootDeviceAdapter](usbbootdeviceadapter.md)

# Class: UsbbootDeviceAdapter

## Hierarchy

  ↳ [Adapter](adapter.md)

  ↳ **UsbbootDeviceAdapter**

## Index

### Constructors

* [constructor](usbbootdeviceadapter.md#constructor)

### Properties

* [drives](usbbootdeviceadapter.md#private-drives)
* [scanner](usbbootdeviceadapter.md#private-optional-scanner)
* [defaultMaxListeners](usbbootdeviceadapter.md#static-defaultmaxlisteners)

### Methods

* [addListener](usbbootdeviceadapter.md#addlistener)
* [emit](usbbootdeviceadapter.md#emit)
* [eventNames](usbbootdeviceadapter.md#eventnames)
* [getMaxListeners](usbbootdeviceadapter.md#getmaxlisteners)
* [listenerCount](usbbootdeviceadapter.md#listenercount)
* [listeners](usbbootdeviceadapter.md#listeners)
* [off](usbbootdeviceadapter.md#off)
* [on](usbbootdeviceadapter.md#on)
* [onAttach](usbbootdeviceadapter.md#private-onattach)
* [onDetach](usbbootdeviceadapter.md#private-ondetach)
* [once](usbbootdeviceadapter.md#once)
* [prependListener](usbbootdeviceadapter.md#prependlistener)
* [prependOnceListener](usbbootdeviceadapter.md#prependoncelistener)
* [rawListeners](usbbootdeviceadapter.md#rawlisteners)
* [removeAllListeners](usbbootdeviceadapter.md#removealllisteners)
* [removeListener](usbbootdeviceadapter.md#removelistener)
* [setMaxListeners](usbbootdeviceadapter.md#setmaxlisteners)
* [start](usbbootdeviceadapter.md#start)
* [stop](usbbootdeviceadapter.md#stop)
* [listenerCount](usbbootdeviceadapter.md#static-listenercount)
* [once](usbbootdeviceadapter.md#static-once)

## Constructors

###  constructor

\+ **new UsbbootDeviceAdapter**(): *[UsbbootDeviceAdapter](usbbootdeviceadapter.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/scanner/adapters/usbboot.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L28)*

**Returns:** *[UsbbootDeviceAdapter](usbbootdeviceadapter.md)*

## Properties

### `Private` drives

• **drives**: *Map‹UsbbootDevice, [UsbbootDrive](usbbootdrive.md)›* = new Map()

*Defined in [lib/scanner/adapters/usbboot.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L27)*

___

### `Private` `Optional` scanner

• **scanner**? : *UsbbootScannerType*

*Defined in [lib/scanner/adapters/usbboot.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L28)*

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

### `Private` onAttach

▸ **onAttach**(`device`: UsbbootDevice): *void*

*Defined in [lib/scanner/adapters/usbboot.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`device` | UsbbootDevice |

**Returns:** *void*

___

### `Private` onDetach

▸ **onDetach**(`device`: UsbbootDevice): *void*

*Defined in [lib/scanner/adapters/usbboot.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`device` | UsbbootDevice |

**Returns:** *void*

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

*Defined in [lib/scanner/adapters/usbboot.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L45)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *void*

*Overrides [Adapter](adapter.md).[stop](adapter.md#abstract-stop)*

*Defined in [lib/scanner/adapters/usbboot.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/usbboot.ts#L49)*

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
