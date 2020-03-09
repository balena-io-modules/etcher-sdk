[etcher-sdk](../README.md) › [SparseReadStream](sparsereadstream.md)

# Class: SparseReadStream

## Hierarchy

* Readable

  ↳ **SparseReadStream**

## Implements

* ReadableStream
* [SparseReadable](../interfaces/sparsereadable.md)

## Index

### Constructors

* [constructor](sparsereadstream.md#constructor)

### Properties

* [blocks](sparsereadstream.md#blocks)
* [chunkSize](sparsereadstream.md#private-chunksize)
* [positionInBlock](sparsereadstream.md#private-positioninblock)
* [readable](sparsereadstream.md#readable)
* [source](sparsereadstream.md#private-source)
* [state](sparsereadstream.md#private-optional-state)
* [stateIterator](sparsereadstream.md#private-stateiterator)
* [defaultMaxListeners](sparsereadstream.md#static-defaultmaxlisteners)

### Methods

* [__read](sparsereadstream.md#private-__read)
* [_read](sparsereadstream.md#_read)
* [addListener](sparsereadstream.md#addlistener)
* [emit](sparsereadstream.md#emit)
* [eventNames](sparsereadstream.md#eventnames)
* [getMaxListeners](sparsereadstream.md#getmaxlisteners)
* [isPaused](sparsereadstream.md#ispaused)
* [listenerCount](sparsereadstream.md#listenercount)
* [listeners](sparsereadstream.md#listeners)
* [nextBlock](sparsereadstream.md#private-nextblock)
* [on](sparsereadstream.md#on)
* [once](sparsereadstream.md#once)
* [pause](sparsereadstream.md#pause)
* [pipe](sparsereadstream.md#pipe)
* [prependListener](sparsereadstream.md#prependlistener)
* [prependOnceListener](sparsereadstream.md#prependoncelistener)
* [push](sparsereadstream.md#push)
* [read](sparsereadstream.md#read)
* [removeAllListeners](sparsereadstream.md#removealllisteners)
* [removeListener](sparsereadstream.md#removelistener)
* [resume](sparsereadstream.md#resume)
* [setEncoding](sparsereadstream.md#setencoding)
* [setMaxListeners](sparsereadstream.md#setmaxlisteners)
* [unpipe](sparsereadstream.md#unpipe)
* [unshift](sparsereadstream.md#unshift)
* [wrap](sparsereadstream.md#wrap)
* [listenerCount](sparsereadstream.md#static-listenercount)

## Constructors

###  constructor

\+ **new SparseReadStream**(`source`: [SourceDestination](sourcedestination.md), `blocks`: [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `chunkSize`: number, `verify`: boolean, `generateChecksums`: boolean, `options`: ReadableOptions): *[SparseReadStream](sparsereadstream.md)*

*Overrides void*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`source` | [SourceDestination](sourcedestination.md) | - |
`blocks` | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] | - |
`chunkSize` | number | - |
`verify` | boolean | - |
`generateChecksums` | boolean | - |
`options` | ReadableOptions | {} |

**Returns:** *[SparseReadStream](sparsereadstream.md)*

## Properties

###  blocks

• **blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[blocks](../interfaces/sparsereadable.md#blocks)*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L36)*

___

### `Private` chunkSize

• **chunkSize**: *number*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L37)*

___

### `Private` positionInBlock

• **positionInBlock**: *number* = 0

*Defined in [lib/sparse-stream/sparse-read-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L32)*

___

###  readable

• **readable**: *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[readable](../interfaces/sparsereadable.md#readable)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readable](sparsefilterstream.md#readable)*

Defined in node_modules/@types/node/base.d.ts:3688

___

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L35)*

___

### `Private` `Optional` state

• **state**? : *[SparseReaderState](../interfaces/sparsereaderstate.md)*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L31)*

___

### `Private` stateIterator

• **stateIterator**: *Iterator‹[SparseReaderState](../interfaces/sparsereaderstate.md)›*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L30)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

## Methods

### `Private` __read

▸ **__read**(): *Promise‹[SparseStreamChunk](../interfaces/sparsestreamchunk.md) | null›*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L65)*

**Returns:** *Promise‹[SparseStreamChunk](../interfaces/sparsestreamchunk.md) | null›*

___

###  _read

▸ **_read**(): *Promise‹void›*

*Overrides [SparseFilterStream](sparsefilterstream.md).[_read](sparsefilterstream.md#_read)*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L51)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3711

Event emitter
The defined events on documents including:
  1. close
  2. data
  3. end
  4. readable
  5. error

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3712

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3713

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3714

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3715

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3716

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3718

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3719

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: Buffer | string): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3720

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | Buffer &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3721

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3722

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3723

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[isPaused](sparsefilterstream.md#ispaused)*

Defined in node_modules/@types/node/base.d.ts:3695

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### `Private` nextBlock

▸ **nextBlock**(): *void*

*Defined in [lib/sparse-stream/sparse-read-stream.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/d5cf67e/lib/sparse-stream/sparse-read-stream.ts#L60)*

**Returns:** *void*

___

###  on

▸ **on**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3725

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3726

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3727

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3728

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3729

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3730

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3732

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3733

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3734

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3735

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3736

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3737

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[pause](sparsefilterstream.md#pause)*

Defined in node_modules/@types/node/base.d.ts:3693

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[pipe](sparsefilterstream.md#pipe)*

*Overrides [CountingWritable](countingwritable.md).[pipe](countingwritable.md#pipe)*

Defined in node_modules/@types/node/base.d.ts:3696

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | T |
`options?` | undefined &#124; object |

**Returns:** *T*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3739

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3740

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3741

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3742

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3743

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3744

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3746

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3747

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3748

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3749

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3750

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3751

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[push](sparsefilterstream.md#push)*

Defined in node_modules/@types/node/base.d.ts:3700

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  read

▸ **read**(`size?`: undefined | number): *any*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[read](sparsefilterstream.md#read)*

Defined in node_modules/@types/node/base.d.ts:3691

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3753

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3754

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3755

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: Buffer | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer &#124; string |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3756

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3757

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3758

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  resume

▸ **resume**(): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[resume](sparsefilterstream.md#resume)*

Defined in node_modules/@types/node/base.d.ts:3694

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[setEncoding](sparsefilterstream.md#setencoding)*

Defined in node_modules/@types/node/base.d.ts:3692

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**<**T**>(`destination?`: T): *void*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unpipe](sparsefilterstream.md#unpipe)*

Defined in node_modules/@types/node/base.d.ts:3697

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | T |

**Returns:** *void*

___

###  unshift

▸ **unshift**(`chunk`: any): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unshift](sparsefilterstream.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:3698

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *Readable*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[wrap](sparsefilterstream.md#wrap)*

Defined in node_modules/@types/node/base.d.ts:3699

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *Readable*

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
