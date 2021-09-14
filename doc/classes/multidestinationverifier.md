[etcher-sdk](../README.md) › [MultiDestinationVerifier](multidestinationverifier.md)

# Class: MultiDestinationVerifier

## Hierarchy

  ↳ [Verifier](verifier.md)

  ↳ **MultiDestinationVerifier**

## Index

### Constructors

* [constructor](multidestinationverifier.md#constructor)

### Properties

* [timer](multidestinationverifier.md#private-timer)
* [verifiers](multidestinationverifier.md#private-verifiers)
* [defaultMaxListeners](multidestinationverifier.md#static-defaultmaxlisteners)

### Methods

* [addListener](multidestinationverifier.md#addlistener)
* [emit](multidestinationverifier.md#emit)
* [emitProgress](multidestinationverifier.md#private-emitprogress)
* [eventNames](multidestinationverifier.md#eventnames)
* [getMaxListeners](multidestinationverifier.md#getmaxlisteners)
* [handleEventsAndPipe](multidestinationverifier.md#protected-handleeventsandpipe)
* [listenerCount](multidestinationverifier.md#listenercount)
* [listeners](multidestinationverifier.md#listeners)
* [off](multidestinationverifier.md#off)
* [on](multidestinationverifier.md#on)
* [once](multidestinationverifier.md#once)
* [oneVerifierFinished](multidestinationverifier.md#private-oneverifierfinished)
* [prependListener](multidestinationverifier.md#prependlistener)
* [prependOnceListener](multidestinationverifier.md#prependoncelistener)
* [rawListeners](multidestinationverifier.md#rawlisteners)
* [removeAllListeners](multidestinationverifier.md#removealllisteners)
* [removeListener](multidestinationverifier.md#removelistener)
* [run](multidestinationverifier.md#run)
* [setMaxListeners](multidestinationverifier.md#setmaxlisteners)
* [listenerCount](multidestinationverifier.md#static-listenercount)
* [once](multidestinationverifier.md#static-once)

### Object literals

* [progress](multidestinationverifier.md#progress)

## Constructors

###  constructor

\+ **new MultiDestinationVerifier**(`source`: [MultiDestination](multidestination.md), `checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[MultiDestinationVerifier](multidestinationverifier.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/multi-destination.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [MultiDestination](multidestination.md) |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[MultiDestinationVerifier](multidestinationverifier.md)*

## Properties

### `Private` timer

• **timer**: *Timer*

*Defined in [lib/source-destination/multi-destination.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L47)*

___

### `Private` verifiers

• **verifiers**: *Set‹[Verifier](verifier.md)›* = new Set()

*Defined in [lib/source-destination/multi-destination.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L46)*

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

### `Private` emitProgress

▸ **emitProgress**(): *void*

*Defined in [lib/source-destination/multi-destination.ts:80](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L80)*

**Returns:** *void*

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

### `Private` oneVerifierFinished

▸ **oneVerifierFinished**(`verifier`: [Verifier](verifier.md)): *void*

*Defined in [lib/source-destination/multi-destination.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`verifier` | [Verifier](verifier.md) |

**Returns:** *void*

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

*Defined in [lib/source-destination/multi-destination.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L89)*

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
