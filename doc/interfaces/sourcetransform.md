[etcher-sdk](../README.md) › [SourceTransform](sourcetransform.md)

# Interface: SourceTransform

## Hierarchy

* Transform

  ↳ **SourceTransform**

## Implements

* ReadableStream
* Writable

## Index

### Constructors

* [constructor](sourcetransform.md#constructor)

### Properties

* [readable](sourcetransform.md#readable)
* [readableHighWaterMark](sourcetransform.md#readablehighwatermark)
* [sourceStream](sourcetransform.md#sourcestream)
* [writable](sourcetransform.md#writable)
* [writableHighWaterMark](sourcetransform.md#writablehighwatermark)
* [defaultMaxListeners](sourcetransform.md#static-defaultmaxlisteners)

### Methods

* [_destroy](sourcetransform.md#_destroy)
* [_final](sourcetransform.md#_final)
* [_read](sourcetransform.md#_read)
* [_transform](sourcetransform.md#_transform)
* [_write](sourcetransform.md#_write)
* [_writev](sourcetransform.md#optional-_writev)
* [addListener](sourcetransform.md#addlistener)
* [cork](sourcetransform.md#cork)
* [destroy](sourcetransform.md#destroy)
* [emit](sourcetransform.md#emit)
* [end](sourcetransform.md#end)
* [eventNames](sourcetransform.md#eventnames)
* [getMaxListeners](sourcetransform.md#getmaxlisteners)
* [isPaused](sourcetransform.md#ispaused)
* [listenerCount](sourcetransform.md#listenercount)
* [listeners](sourcetransform.md#listeners)
* [on](sourcetransform.md#on)
* [once](sourcetransform.md#once)
* [pause](sourcetransform.md#pause)
* [pipe](sourcetransform.md#pipe)
* [prependListener](sourcetransform.md#prependlistener)
* [prependOnceListener](sourcetransform.md#prependoncelistener)
* [push](sourcetransform.md#push)
* [read](sourcetransform.md#read)
* [removeAllListeners](sourcetransform.md#removealllisteners)
* [removeListener](sourcetransform.md#removelistener)
* [resume](sourcetransform.md#resume)
* [setDefaultEncoding](sourcetransform.md#setdefaultencoding)
* [setEncoding](sourcetransform.md#setencoding)
* [setMaxListeners](sourcetransform.md#setmaxlisteners)
* [uncork](sourcetransform.md#uncork)
* [unpipe](sourcetransform.md#unpipe)
* [unshift](sourcetransform.md#unshift)
* [wrap](sourcetransform.md#wrap)
* [write](sourcetransform.md#write)
* [listenerCount](sourcetransform.md#static-listenercount)

## Constructors

###  constructor

\+ **new SourceTransform**(`opts?`: TransformOptions): *[SourceTransform](sourcetransform.md)*

*Inherited from [SourceTransform](sourcetransform.md).[constructor](sourcetransform.md#constructor)*

*Overrides void*

Defined in node_modules/@types/node/base.d.ts:5622

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | TransformOptions |

**Returns:** *[SourceTransform](sourcetransform.md)*

## Properties

###  readable

• **readable**: *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[readable](../classes/sparsefilterstream.md#readable)*

Defined in node_modules/@types/node/base.d.ts:5422

___

###  readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[readableHighWaterMark](../classes/sparsefilterstream.md#readablehighwatermark)*

Defined in node_modules/@types/node/base.d.ts:5423

___

###  sourceStream

• **sourceStream**: *ReadableStream*

*Defined in [lib/source-destination/compressed-source.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/compressed-source.ts#L27)*

___

###  writable

• **writable**: *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[writable](../classes/sparsefilterstream.md#writable)*

Defined in node_modules/@types/node/base.d.ts:5600

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[writableHighWaterMark](../classes/sparsefilterstream.md#writablehighwatermark)*

Defined in node_modules/@types/node/base.d.ts:5601

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[defaultMaxListeners](../classes/countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:896

## Methods

###  _destroy

▸ **_destroy**(`error`: [Error](../classes/notcapable.md#static-error) | null, `callback`: function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_destroy](../classes/sparsefilterstream.md#_destroy)*

*Overrides [SparseReadStream](../classes/sparsereadstream.md).[_destroy](../classes/sparsereadstream.md#_destroy)*

Defined in node_modules/@types/node/base.d.ts:5605

**Parameters:**

▪ **error**: *[Error](../classes/notcapable.md#static-error) | null*

▪ **callback**: *function*

▸ (`error?`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_final](../classes/sparsefilterstream.md#_final)*

Defined in node_modules/@types/node/base.d.ts:5606

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_read](../classes/sparsefilterstream.md#_read)*

Defined in node_modules/@types/node/base.d.ts:5425

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _transform

▸ **_transform**(`chunk`: any, `encoding`: string, `callback`: Function): *void*

*Inherited from [SourceTransform](sourcetransform.md).[_transform](sourcetransform.md#_transform)*

Defined in node_modules/@types/node/base.d.ts:5624

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | Function |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_write](../classes/sparsefilterstream.md#_write)*

Defined in node_modules/@types/node/base.d.ts:5603

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`err?`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_writev](../classes/sparsefilterstream.md#optional-_writev)*

Defined in node_modules/@types/node/base.d.ts:5604

**Parameters:**

▪ **chunks**: *Array‹object›*

▪ **callback**: *function*

▸ (`err?`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5448

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5449

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5450

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5451

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5452

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[cork](../classes/sparsefilterstream.md#cork)*

Defined in node_modules/@types/node/base.d.ts:5613

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](../classes/notcapable.md#static-error)): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[destroy](../classes/sparsefilterstream.md#destroy)*

*Overrides [SparseReadStream](../classes/sparsereadstream.md).[destroy](../classes/sparsereadstream.md#destroy)*

Defined in node_modules/@types/node/base.d.ts:5625

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5454

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5455

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5456

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5457

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5458

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../classes/notcapable.md#static-error)): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5459

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[end](../classes/sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:5610

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[end](../classes/sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:5611

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[end](../classes/sparsefilterstream.md#end)*

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

*Inherited from [CountingWritable](../classes/countingwritable.md).[eventNames](../classes/countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[getMaxListeners](../classes/countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[isPaused](../classes/sparsefilterstream.md#ispaused)*

Defined in node_modules/@types/node/base.d.ts:5430

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:910

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listeners](../classes/countingwritable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5462

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5463

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5464

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5465

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5466

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5469

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5470

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5471

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5472

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5473

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[pause](../classes/sparsefilterstream.md#pause)*

Defined in node_modules/@types/node/base.d.ts:5428

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [CountingWritable](../classes/countingwritable.md).[pipe](../classes/countingwritable.md#pipe)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5476

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5477

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5478

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5479

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5480

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5483

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5484

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5485

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5486

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5487

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[push](../classes/sparsefilterstream.md#push)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[read](../classes/sparsefilterstream.md#read)*

Defined in node_modules/@types/node/base.d.ts:5426

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[removeAllListeners](../classes/countingwritable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:904

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5490

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5491

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: [Buffer](alignedlockablebuffer.md#buffer) | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5492

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5493

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5494

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](../classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](../classes/notcapable.md#static-error) |

**Returns:** *this*

___

###  resume

▸ **resume**(): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[resume](../classes/sparsefilterstream.md#resume)*

Defined in node_modules/@types/node/base.d.ts:5429

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[setDefaultEncoding](../classes/sparsefilterstream.md#setdefaultencoding)*

Defined in node_modules/@types/node/base.d.ts:5609

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[setEncoding](../classes/sparsefilterstream.md#setencoding)*

Defined in node_modules/@types/node/base.d.ts:5427

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[setMaxListeners](../classes/countingwritable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:905

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  uncork

▸ **uncork**(): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[uncork](../classes/sparsefilterstream.md#uncork)*

Defined in node_modules/@types/node/base.d.ts:5614

**Returns:** *void*

___

###  unpipe

▸ **unpipe**<**T**>(`destination?`: T): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[unpipe](../classes/sparsefilterstream.md#unpipe)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[unshift](../classes/sparsefilterstream.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:5432

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[wrap](../classes/sparsefilterstream.md#wrap)*

Defined in node_modules/@types/node/base.d.ts:5433

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[write](../classes/sparsefilterstream.md#write)*

Defined in node_modules/@types/node/base.d.ts:5607

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[write](../classes/sparsefilterstream.md#write)*

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

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:895

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
