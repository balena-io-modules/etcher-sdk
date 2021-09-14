[etcher-sdk](../README.md) › [SparseStreamVerifier](sparsestreamverifier.md)

# Class: SparseStreamVerifier

## Hierarchy

  ↳ [Verifier](verifier.md)

  ↳ **SparseStreamVerifier**

## Index

### Constructors

* [constructor](sparsestreamverifier.md#constructor)

### Properties

* [blocks](sparsestreamverifier.md#private-blocks)
* [source](sparsestreamverifier.md#private-source)
* [defaultMaxListeners](sparsestreamverifier.md#static-defaultmaxlisteners)

### Methods

* [addListener](sparsestreamverifier.md#addlistener)
* [emit](sparsestreamverifier.md#emit)
* [eventNames](sparsestreamverifier.md#eventnames)
* [getMaxListeners](sparsestreamverifier.md#getmaxlisteners)
* [handleEventsAndPipe](sparsestreamverifier.md#protected-handleeventsandpipe)
* [listenerCount](sparsestreamverifier.md#listenercount)
* [listeners](sparsestreamverifier.md#listeners)
* [off](sparsestreamverifier.md#off)
* [on](sparsestreamverifier.md#on)
* [once](sparsestreamverifier.md#once)
* [prependListener](sparsestreamverifier.md#prependlistener)
* [prependOnceListener](sparsestreamverifier.md#prependoncelistener)
* [rawListeners](sparsestreamverifier.md#rawlisteners)
* [removeAllListeners](sparsestreamverifier.md#removealllisteners)
* [removeListener](sparsestreamverifier.md#removelistener)
* [run](sparsestreamverifier.md#run)
* [setMaxListeners](sparsestreamverifier.md#setmaxlisteners)
* [listenerCount](sparsestreamverifier.md#static-listenercount)
* [once](sparsestreamverifier.md#static-once)

### Object literals

* [progress](sparsestreamverifier.md#progress)

## Constructors

###  constructor

\+ **new SparseStreamVerifier**(`source`: [SourceDestination](sourcedestination.md), `blocks`: [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]): *[SparseStreamVerifier](sparsestreamverifier.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/source-destination.ts:229](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L229)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |
`blocks` | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |

**Returns:** *[SparseStreamVerifier](sparsestreamverifier.md)*

## Properties

### `Private` blocks

• **blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L232)*

___

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/source-destination.ts:231](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L231)*

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

### `Protected` handleEventsAndPipe

▸ **handleEventsAndPipe**(`stream`: ReadableStream, `meter`: WritableStream): *void*

*Inherited from [Verifier](verifier.md).[handleEventsAndPipe](verifier.md#protected-handleeventsandpipe)*

*Defined in [lib/source-destination/source-destination.ts:178](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |
`meter` | WritableStream |

**Returns:** *void*

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

###  run

▸ **run**(): *Promise‹void›*

*Overrides [Verifier](verifier.md).[run](verifier.md#abstract-run)*

*Defined in [lib/source-destination/source-destination.ts:237](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L237)*

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

## Object literals

###  progress

### ▪ **progress**: *object*

*Inherited from [Verifier](verifier.md).[progress](verifier.md#progress)*

*Defined in [lib/source-destination/source-destination.ts:169](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L169)*

###  averageSpeed

• **averageSpeed**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:173](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L173)*

###  bytes

• **bytes**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L170)*

###  position

• **position**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L171)*

###  speed

• **speed**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:172](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L172)*
