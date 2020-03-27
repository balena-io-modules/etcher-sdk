[etcher-sdk](../README.md) › [SparseFilterStream](sparsefilterstream.md)

# Class: SparseFilterStream

## Hierarchy

* Transform

  ↳ **SparseFilterStream**

## Implements

* ReadableStream
* Writable
* [SparseReadable](../interfaces/sparsereadable.md)

## Index

### Constructors

* [constructor](sparsefilterstream.md#constructor)

### Properties

* [blocks](sparsefilterstream.md#blocks)
* [position](sparsefilterstream.md#private-position)
* [readable](sparsefilterstream.md#readable)
* [readableHighWaterMark](sparsefilterstream.md#readablehighwatermark)
* [state](sparsefilterstream.md#private-optional-state)
* [stateIterator](sparsefilterstream.md#private-stateiterator)
* [writable](sparsefilterstream.md#writable)
* [writableHighWaterMark](sparsefilterstream.md#writablehighwatermark)
* [defaultMaxListeners](sparsefilterstream.md#static-defaultmaxlisteners)

### Methods

* [__transform](sparsefilterstream.md#private-__transform)
* [_destroy](sparsefilterstream.md#_destroy)
* [_final](sparsefilterstream.md#_final)
* [_read](sparsefilterstream.md#_read)
* [_transform](sparsefilterstream.md#_transform)
* [_write](sparsefilterstream.md#_write)
* [_writev](sparsefilterstream.md#optional-_writev)
* [addListener](sparsefilterstream.md#addlistener)
* [cork](sparsefilterstream.md#cork)
* [destroy](sparsefilterstream.md#destroy)
* [emit](sparsefilterstream.md#emit)
* [end](sparsefilterstream.md#end)
* [eventNames](sparsefilterstream.md#eventnames)
* [getMaxListeners](sparsefilterstream.md#getmaxlisteners)
* [isPaused](sparsefilterstream.md#ispaused)
* [listenerCount](sparsefilterstream.md#listenercount)
* [listeners](sparsefilterstream.md#listeners)
* [nextBlock](sparsefilterstream.md#private-nextblock)
* [on](sparsefilterstream.md#on)
* [once](sparsefilterstream.md#once)
* [pause](sparsefilterstream.md#pause)
* [pipe](sparsefilterstream.md#pipe)
* [prependListener](sparsefilterstream.md#prependlistener)
* [prependOnceListener](sparsefilterstream.md#prependoncelistener)
* [push](sparsefilterstream.md#push)
* [read](sparsefilterstream.md#read)
* [removeAllListeners](sparsefilterstream.md#removealllisteners)
* [removeListener](sparsefilterstream.md#removelistener)
* [resume](sparsefilterstream.md#resume)
* [setDefaultEncoding](sparsefilterstream.md#setdefaultencoding)
* [setEncoding](sparsefilterstream.md#setencoding)
* [setMaxListeners](sparsefilterstream.md#setmaxlisteners)
* [uncork](sparsefilterstream.md#uncork)
* [unpipe](sparsefilterstream.md#unpipe)
* [unshift](sparsefilterstream.md#unshift)
* [wrap](sparsefilterstream.md#wrap)
* [write](sparsefilterstream.md#write)
* [listenerCount](sparsefilterstream.md#static-listenercount)

## Constructors

###  constructor

\+ **new SparseFilterStream**(`__namedParameters`: object): *[SparseFilterStream](sparsefilterstream.md)*

*Overrides [SourceTransform](../interfaces/sourcetransform.md).[constructor](../interfaces/sourcetransform.md#constructor)*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L30)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blocks` | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`generateChecksums` | boolean |
`verify` | boolean |

**Returns:** *[SparseFilterStream](sparsefilterstream.md)*

## Properties

###  blocks

• **blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[blocks](../interfaces/sparsereadable.md#blocks)*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L27)*

___

### `Private` position

• **position**: *number* = 0

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L30)*

___

###  readable

• **readable**: *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md).[readable](../interfaces/sparsereadable.md#readable)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readable](sparsefilterstream.md#readable)*

Defined in node_modules/@types/node/base.d.ts:5422

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readableHighWaterMark](sparsefilterstream.md#readablehighwatermark)*

Defined in node_modules/@types/node/base.d.ts:5423

___

### `Private` `Optional` state

• **state**? : *[SparseReaderState](../interfaces/sparsereaderstate.md)*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L29)*

___

### `Private` stateIterator

• **stateIterator**: *Iterator‹[SparseReaderState](../interfaces/sparsereaderstate.md)›*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L28)*

___

###  writable

• **writable**: *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[writable](sparsefilterstream.md#writable)*

Defined in node_modules/@types/node/base.d.ts:5600

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[writableHighWaterMark](sparsefilterstream.md#writablehighwatermark)*

Defined in node_modules/@types/node/base.d.ts:5601

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:896

## Methods

### `Private` __transform

▸ **__transform**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer)): *void*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |

**Returns:** *void*

___

###  _destroy

▸ **_destroy**(`error`: [Error](notcapable.md#static-error) | null, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_destroy](sparsefilterstream.md#_destroy)*

*Overrides [SparseReadStream](sparsereadstream.md).[_destroy](sparsereadstream.md#_destroy)*

Defined in node_modules/@types/node/base.d.ts:5605

**Parameters:**

▪ **error**: *[Error](notcapable.md#static-error) | null*

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: Function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_final](sparsefilterstream.md#_final)*

Defined in node_modules/@types/node/base.d.ts:5606

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_read](sparsefilterstream.md#_read)*

Defined in node_modules/@types/node/base.d.ts:5425

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _transform

▸ **_transform**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_encoding`: string, `callback`: function): *void*

*Overrides [SourceTransform](../interfaces/sourcetransform.md).[_transform](../interfaces/sourcetransform.md#_transform)*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L55)*

**Parameters:**

▪ **chunk**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer)*

▪ **_encoding**: *string*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_write](sparsefilterstream.md#_write)*

Defined in node_modules/@types/node/base.d.ts:5603

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`err?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_writev](sparsefilterstream.md#optional-_writev)*

Defined in node_modules/@types/node/base.d.ts:5604

**Parameters:**

▪ **chunks**: *Array‹object›*

▪ **callback**: *function*

▸ (`err?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5447

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5448

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5449

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5450

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5451

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5452

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

###  cork

▸ **cork**(): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[cork](sparsefilterstream.md#cork)*

Defined in node_modules/@types/node/base.d.ts:5613

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](notcapable.md#static-error)): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[destroy](sparsefilterstream.md#destroy)*

*Overrides [SparseReadStream](sparsereadstream.md).[destroy](sparsereadstream.md#destroy)*

Defined in node_modules/@types/node/base.d.ts:5625

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5454

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5455

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5456

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5457

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5458

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5459

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: Function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:5610

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:5611

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:5612

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[isPaused](sparsefilterstream.md#ispaused)*

Defined in node_modules/@types/node/base.d.ts:5430

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:910

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

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### `Private` nextBlock

▸ **nextBlock**(): *void*

*Defined in [lib/sparse-stream/sparse-filter-stream.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/sparse-filter-stream.ts#L51)*

**Returns:** *void*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5461

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5462

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5463

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5464

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5465

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5466

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

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5468

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5469

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5470

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5471

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5472

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5473

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

Defined in node_modules/@types/node/base.d.ts:5428

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [CountingWritable](countingwritable.md).[pipe](countingwritable.md#pipe)*

Defined in node_modules/@types/node/base.d.ts:5407

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

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5475

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5476

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5477

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5478

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5479

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5480

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

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5482

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5483

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5484

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5485

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5486

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5487

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

Defined in node_modules/@types/node/base.d.ts:5434

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

Defined in node_modules/@types/node/base.d.ts:5426

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

Defined in node_modules/@types/node/base.d.ts:904

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5489

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5490

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5491

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5492

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5493

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5494

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

Defined in node_modules/@types/node/base.d.ts:5429

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[setDefaultEncoding](sparsefilterstream.md#setdefaultencoding)*

Defined in node_modules/@types/node/base.d.ts:5609

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[setEncoding](sparsefilterstream.md#setencoding)*

Defined in node_modules/@types/node/base.d.ts:5427

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:905

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[uncork](sparsefilterstream.md#uncork)*

Defined in node_modules/@types/node/base.d.ts:5614

**Returns:** *void*

___

###  unpipe

▸ **unpipe**<**T**>(`destination?`: T): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unpipe](sparsefilterstream.md#unpipe)*

Defined in node_modules/@types/node/base.d.ts:5431

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | T |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unshift](sparsefilterstream.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:5432

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Implementation of [SparseReadable](../interfaces/sparsereadable.md)*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[wrap](sparsefilterstream.md#wrap)*

Defined in node_modules/@types/node/base.d.ts:5433

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[write](sparsefilterstream.md#write)*

Defined in node_modules/@types/node/base.d.ts:5607

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[write](sparsefilterstream.md#write)*

Defined in node_modules/@types/node/base.d.ts:5608

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *boolean*

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
