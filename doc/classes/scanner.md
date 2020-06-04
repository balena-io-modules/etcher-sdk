[etcher-sdk](../README.md) › [Scanner](scanner.md)

# Class: Scanner

## Hierarchy

* EventEmitter

  ↳ **Scanner**

## Index

### Constructors

* [constructor](scanner.md#constructor)

### Properties

* [adapters](scanner.md#private-adapters)
* [drives](scanner.md#drives)
* [defaultMaxListeners](scanner.md#static-defaultmaxlisteners)

### Methods

* [addListener](scanner.md#addlistener)
* [emit](scanner.md#emit)
* [eventNames](scanner.md#eventnames)
* [getBy](scanner.md#getby)
* [getMaxListeners](scanner.md#getmaxlisteners)
* [listenerCount](scanner.md#listenercount)
* [listeners](scanner.md#listeners)
* [off](scanner.md#off)
* [on](scanner.md#on)
* [onAttach](scanner.md#private-onattach)
* [onDetach](scanner.md#private-ondetach)
* [once](scanner.md#once)
* [prependListener](scanner.md#prependlistener)
* [prependOnceListener](scanner.md#prependoncelistener)
* [rawListeners](scanner.md#rawlisteners)
* [removeAllListeners](scanner.md#removealllisteners)
* [removeListener](scanner.md#removelistener)
* [setMaxListeners](scanner.md#setmaxlisteners)
* [start](scanner.md#start)
* [stop](scanner.md#stop)
* [listenerCount](scanner.md#static-listenercount)

## Constructors

###  constructor

\+ **new Scanner**(`adapters`: [Adapter](adapter.md)[]): *[Scanner](scanner.md)*

*Defined in [lib/scanner/scanner.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`adapters` | [Adapter](adapter.md)[] |

**Returns:** *[Scanner](scanner.md)*

## Properties

### `Private` adapters

• **adapters**: *[Adapter](adapter.md)[]*

*Defined in [lib/scanner/scanner.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L27)*

___

###  drives

• **drives**: *Set‹[AdapterSourceDestination](../interfaces/adaptersourcedestination.md)›* = new Set()

*Defined in [lib/scanner/scanner.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L25)*

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

###  getBy

▸ **getBy**(`field`: "raw" | "device" | "devicePath", `value`: string): *[AdapterSourceDestination](../interfaces/adaptersourcedestination.md) | undefined*

*Defined in [lib/scanner/scanner.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | "raw" &#124; "device" &#124; "devicePath" |
`value` | string |

**Returns:** *[AdapterSourceDestination](../interfaces/adaptersourcedestination.md) | undefined*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

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

### `Private` onAttach

▸ **onAttach**(`drive`: [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)): *void*

*Defined in [lib/scanner/scanner.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`drive` | [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) |

**Returns:** *void*

___

### `Private` onDetach

▸ **onDetach**(`drive`: [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)): *void*

*Defined in [lib/scanner/scanner.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`drive` | [AdapterSourceDestination](../interfaces/adaptersourcedestination.md) |

**Returns:** *void*

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

▸ **start**(): *Promise‹void›*

*Defined in [lib/scanner/scanner.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L57)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

*Defined in [lib/scanner/scanner.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/656fcec/lib/scanner/scanner.ts#L74)*

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
