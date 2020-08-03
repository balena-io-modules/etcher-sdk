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

### Object literals

* [progress](multidestinationverifier.md#progress)

## Constructors

###  constructor

\+ **new MultiDestinationVerifier**(`source`: [MultiDestination](multidestination.md), `checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[MultiDestinationVerifier](multidestinationverifier.md)*

*Defined in [lib/source-destination/multi-destination.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L47)*

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

*Defined in [lib/source-destination/multi-destination.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L47)*

___

### `Private` verifiers

• **verifiers**: *Set‹[Verifier](verifier.md)›* = new Set()

*Defined in [lib/source-destination/multi-destination.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L46)*

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

### `Private` emitProgress

▸ **emitProgress**(): *void*

*Defined in [lib/source-destination/multi-destination.ts:80](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L80)*

**Returns:** *void*

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

### `Protected` handleEventsAndPipe

▸ **handleEventsAndPipe**(`stream`: ReadableStream, `meter`: WritableStream): *void*

*Inherited from [Verifier](verifier.md).[handleEventsAndPipe](verifier.md#protected-handleeventsandpipe)*

*Defined in [lib/source-destination/source-destination.ts:156](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |
`meter` | WritableStream |

**Returns:** *void*

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

### `Private` oneVerifierFinished

▸ **oneVerifierFinished**(`verifier`: [Verifier](verifier.md)): *void*

*Defined in [lib/source-destination/multi-destination.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`verifier` | [Verifier](verifier.md) |

**Returns:** *void*

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

###  run

▸ **run**(): *Promise‹void›*

*Overrides [Verifier](verifier.md).[run](verifier.md#abstract-run)*

*Defined in [lib/source-destination/multi-destination.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/multi-destination.ts#L89)*

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

## Object literals

###  progress

### ▪ **progress**: *object*

*Inherited from [Verifier](verifier.md).[progress](verifier.md#progress)*

*Defined in [lib/source-destination/source-destination.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L147)*

###  averageSpeed

• **averageSpeed**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:151](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L151)*

###  bytes

• **bytes**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:148](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L148)*

###  position

• **position**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:149](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L149)*

###  speed

• **speed**: *number* = 0

*Defined in [lib/source-destination/source-destination.ts:150](https://github.com/balena-io-modules/etcher-sdk/blob/247d322/lib/source-destination/source-destination.ts#L150)*
