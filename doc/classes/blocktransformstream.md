[etcher-sdk](../README.md) › [BlockTransformStream](blocktransformstream.md)

# Class: BlockTransformStream

## Hierarchy

* Transform

  ↳ **BlockTransformStream**

## Implements

* ReadableStream
* Writable

## Index

### Constructors

* [constructor](blocktransformstream.md#constructor)

### Properties

* [alignedReadableState](blocktransformstream.md#private-alignedreadablestate)
* [bytesRead](blocktransformstream.md#bytesread)
* [bytesWritten](blocktransformstream.md#byteswritten)
* [currentBuffer](blocktransformstream.md#private-currentbuffer)
* [currentBufferPosition](blocktransformstream.md#private-currentbufferposition)
* [readable](blocktransformstream.md#readable)
* [readableFlowing](blocktransformstream.md#readonly-readableflowing)
* [readableHighWaterMark](blocktransformstream.md#readonly-readablehighwatermark)
* [readableLength](blocktransformstream.md#readonly-readablelength)
* [unlockCurrentBuffer](blocktransformstream.md#private-unlockcurrentbuffer)
* [writable](blocktransformstream.md#writable)
* [writableHighWaterMark](blocktransformstream.md#readonly-writablehighwatermark)
* [writableLength](blocktransformstream.md#readonly-writablelength)
* [defaultMaxListeners](blocktransformstream.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](blocktransformstream.md#[symbol.asynciterator])
* [__flush](blocktransformstream.md#private-__flush)
* [_destroy](blocktransformstream.md#_destroy)
* [_final](blocktransformstream.md#_final)
* [_flush](blocktransformstream.md#_flush)
* [_read](blocktransformstream.md#_read)
* [_transform](blocktransformstream.md#_transform)
* [_write](blocktransformstream.md#_write)
* [_writev](blocktransformstream.md#optional-_writev)
* [addListener](blocktransformstream.md#addlistener)
* [cork](blocktransformstream.md#cork)
* [destroy](blocktransformstream.md#destroy)
* [emit](blocktransformstream.md#emit)
* [end](blocktransformstream.md#end)
* [eventNames](blocktransformstream.md#eventnames)
* [getMaxListeners](blocktransformstream.md#getmaxlisteners)
* [isPaused](blocktransformstream.md#ispaused)
* [listenerCount](blocktransformstream.md#listenercount)
* [listeners](blocktransformstream.md#listeners)
* [off](blocktransformstream.md#off)
* [on](blocktransformstream.md#on)
* [once](blocktransformstream.md#once)
* [pause](blocktransformstream.md#pause)
* [pipe](blocktransformstream.md#pipe)
* [prependListener](blocktransformstream.md#prependlistener)
* [prependOnceListener](blocktransformstream.md#prependoncelistener)
* [push](blocktransformstream.md#push)
* [pushChunk](blocktransformstream.md#private-pushchunk)
* [rawListeners](blocktransformstream.md#rawlisteners)
* [read](blocktransformstream.md#read)
* [removeAllListeners](blocktransformstream.md#removealllisteners)
* [removeListener](blocktransformstream.md#removelistener)
* [resume](blocktransformstream.md#resume)
* [setDefaultEncoding](blocktransformstream.md#setdefaultencoding)
* [setEncoding](blocktransformstream.md#setencoding)
* [setMaxListeners](blocktransformstream.md#setmaxlisteners)
* [uncork](blocktransformstream.md#uncork)
* [unpipe](blocktransformstream.md#unpipe)
* [unshift](blocktransformstream.md#unshift)
* [wrap](blocktransformstream.md#wrap)
* [write](blocktransformstream.md#write)
* [alignIfNeeded](blocktransformstream.md#static-alignifneeded)
* [listenerCount](blocktransformstream.md#static-listenercount)
* [once](blocktransformstream.md#static-once)

## Constructors

###  constructor

\+ **new BlockTransformStream**(`__namedParameters`: object): *[BlockTransformStream](blocktransformstream.md)*

*Overrides [SourceTransform](../interfaces/sourcetransform.md).[constructor](../interfaces/sourcetransform.md#constructor)*

*Defined in [lib/block-transform-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L32)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`alignment` | number | - |
`chunkSize` | number | - |
`numBuffers` | number | 2 |

**Returns:** *[BlockTransformStream](blocktransformstream.md)*

## Properties

### `Private` alignedReadableState

• **alignedReadableState**: *[AlignedReadableState](alignedreadablestate.md)*

*Defined in [lib/block-transform-stream.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L29)*

___

###  bytesRead

• **bytesRead**: *number* = 0

*Defined in [lib/block-transform-stream.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L27)*

___

###  bytesWritten

• **bytesWritten**: *number* = 0

*Defined in [lib/block-transform-stream.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L28)*

___

### `Private` currentBuffer

• **currentBuffer**: *[AlignedLockableBuffer](../interfaces/alignedlockablebuffer.md)*

*Defined in [lib/block-transform-stream.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L30)*

___

### `Private` currentBufferPosition

• **currentBufferPosition**: *number* = 0

*Defined in [lib/block-transform-stream.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L31)*

___

###  readable

• **readable**: *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readable](sparsefilterstream.md#readable)*

Defined in node_modules/@types/node/stream.d.ts:20

___

### `Readonly` readableFlowing

• **readableFlowing**: *boolean | null*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readableFlowing](sparsefilterstream.md#readonly-readableflowing)*

Defined in node_modules/@types/node/stream.d.ts:21

___

### `Readonly` readableHighWaterMark

• **readableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readableHighWaterMark](sparsefilterstream.md#readonly-readablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:22

___

### `Readonly` readableLength

• **readableLength**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[readableLength](sparsefilterstream.md#readonly-readablelength)*

Defined in node_modules/@types/node/stream.d.ts:23

___

### `Private` unlockCurrentBuffer

• **unlockCurrentBuffer**: *function*

*Defined in [lib/block-transform-stream.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L32)*

#### Type declaration:

▸ (): *void*

___

###  writable

• **writable**: *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[writable](sparsefilterstream.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:210

___

### `Readonly` writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[writableHighWaterMark](sparsefilterstream.md#readonly-writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:211

___

### `Readonly` writableLength

• **writableLength**: *number*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[writableLength](sparsefilterstream.md#readonly-writablelength)*

Defined in node_modules/@types/node/stream.d.ts:212

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterableIterator‹any›*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[[Symbol.asyncIterator]](sparsefilterstream.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/stream.d.ts:96

**Returns:** *AsyncIterableIterator‹any›*

___

### `Private` __flush

▸ **__flush**(): *void*

*Defined in [lib/block-transform-stream.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L51)*

**Returns:** *void*

___

###  _destroy

▸ **_destroy**(`error`: [Error](notcapable.md#static-error) | null, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_destroy](sparsefilterstream.md#_destroy)*

*Overrides [SparseReadStream](sparsereadstream.md).[_destroy](sparsereadstream.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:216

**Parameters:**

▪ **error**: *[Error](notcapable.md#static-error) | null*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_final](sparsefilterstream.md#_final)*

Defined in node_modules/@types/node/stream.d.ts:217

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  _flush

▸ **_flush**(`callback`: function): *void*

*Overrides [SparseFilterStream](sparsefilterstream.md).[_flush](sparsefilterstream.md#_flush)*

*Defined in [lib/block-transform-stream.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L101)*

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_read](sparsefilterstream.md#_read)*

Defined in node_modules/@types/node/stream.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _transform

▸ **_transform**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `_encoding`: string, `callback`: function): *void*

*Overrides [SourceTransform](../interfaces/sourcetransform.md).[_transform](../interfaces/sourcetransform.md#_transform)*

*Defined in [lib/block-transform-stream.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L93)*

**Parameters:**

▪ **chunk**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer)*

▪ **_encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_write](sparsefilterstream.md#_write)*

Defined in node_modules/@types/node/stream.d.ts:214

**Parameters:**

▪ **chunk**: *any*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[_writev](sparsefilterstream.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:215

**Parameters:**

▪ **chunks**: *Array‹object›*

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:47

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. readable
5. error

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:48

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:49

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:50

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:51

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[addListener](sparsefilterstream.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:52

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

###  cork

▸ **cork**(): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[cork](sparsefilterstream.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:224

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](notcapable.md#static-error)): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[destroy](sparsefilterstream.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: any): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | any |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:57

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:58

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[emit](sparsefilterstream.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:221

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:222

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[end](sparsefilterstream.md#end)*

Defined in node_modules/@types/node/stream.d.ts:223

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

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

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[isPaused](sparsefilterstream.md#ispaused)*

Defined in node_modules/@types/node/stream.d.ts:30

**Returns:** *boolean*

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

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:61

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:62

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:63

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:64

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:65

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[on](sparsefilterstream.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:66

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

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:68

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:69

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:70

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:71

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:72

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[once](sparsefilterstream.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:73

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

###  pause

▸ **pause**(): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[pause](sparsefilterstream.md#pause)*

Defined in node_modules/@types/node/stream.d.ts:28

**Returns:** *this*

___

###  pipe

▸ **pipe**‹**T**›(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [CountingWritable](countingwritable.md).[pipe](countingwritable.md#pipe)*

Defined in node_modules/@types/node/stream.d.ts:5

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

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:75

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:76

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:77

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:78

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:79

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependListener](sparsefilterstream.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:80

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

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:82

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:83

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:84

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:85

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:86

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[prependOnceListener](sparsefilterstream.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:87

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

###  push

▸ **push**(`chunk`: any, `encoding?`: undefined | string): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[push](sparsefilterstream.md#push)*

Defined in node_modules/@types/node/stream.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

### `Private` pushChunk

▸ **pushChunk**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer)): *Promise‹void›*

*Defined in [lib/block-transform-stream.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |

**Returns:** *Promise‹void›*

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

###  read

▸ **read**(`size?`: undefined | number): *any*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[read](sparsefilterstream.md#read)*

Defined in node_modules/@types/node/stream.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

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

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:89

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:90

**Parameters:**

▪ **event**: *"data"*

▪ **listener**: *function*

▸ (`chunk`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *this*

▸ **removeListener**(`event`: "end", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:91

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:92

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:93

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[removeListener](sparsefilterstream.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:94

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

###  resume

▸ **resume**(): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[resume](sparsefilterstream.md#resume)*

Defined in node_modules/@types/node/stream.d.ts:29

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[setDefaultEncoding](sparsefilterstream.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:220

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[setEncoding](sparsefilterstream.md#setencoding)*

Defined in node_modules/@types/node/stream.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

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

###  uncork

▸ **uncork**(): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[uncork](sparsefilterstream.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:225

**Returns:** *void*

___

###  unpipe

▸ **unpipe**(`destination?`: NodeJS.WritableStream): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unpipe](sparsefilterstream.md#unpipe)*

Defined in node_modules/@types/node/stream.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | NodeJS.WritableStream |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: any): *void*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[unshift](sparsefilterstream.md#unshift)*

Defined in node_modules/@types/node/stream.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[wrap](sparsefilterstream.md#wrap)*

Defined in node_modules/@types/node/stream.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[write](sparsefilterstream.md#write)*

Defined in node_modules/@types/node/stream.d.ts:218

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [SparseFilterStream](sparsefilterstream.md).[write](sparsefilterstream.md#write)*

Defined in node_modules/@types/node/stream.d.ts:219

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

___

### `Static` alignIfNeeded

▸ **alignIfNeeded**(`stream`: ReadableStream, `alignment?`: undefined | number, `numBuffers?`: undefined | number): *ReadableStream‹› | [BlockTransformStream](blocktransformstream.md)‹›*

*Defined in [lib/block-transform-stream.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-transform-stream.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |
`alignment?` | undefined &#124; number |
`numBuffers?` | undefined &#124; number |

**Returns:** *ReadableStream‹› | [BlockTransformStream](blocktransformstream.md)‹›*

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

*Overrides [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*
