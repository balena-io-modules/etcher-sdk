[etcher-sdk](../README.md) › [SparseWriteStream](sparsewritestream.md)

# Class: SparseWriteStream

## Hierarchy

* Writable

  ↳ **SparseWriteStream**

## Implements

* WritableStream
* [SparseWritable](../interfaces/sparsewritable.md)

## Index

### Constructors

* [constructor](sparsewritestream.md#constructor)

### Properties

* [_firstChunks](sparsewritestream.md#private-_firstchunks)
* [bytesWritten](sparsewritestream.md#byteswritten)
* [destination](sparsewritestream.md#private-destination)
* [firstBytesToKeep](sparsewritestream.md#firstbytestokeep)
* [maxRetries](sparsewritestream.md#private-maxretries)
* [position](sparsewritestream.md#position)
* [writable](sparsewritestream.md#writable)
* [writableHighWaterMark](sparsewritestream.md#readonly-writablehighwatermark)
* [writableLength](sparsewritestream.md#readonly-writablelength)
* [defaultMaxListeners](sparsewritestream.md#static-defaultmaxlisteners)

### Methods

* [__final](sparsewritestream.md#private-__final)
* [__write](sparsewritestream.md#private-__write)
* [_destroy](sparsewritestream.md#_destroy)
* [_final](sparsewritestream.md#_final)
* [_write](sparsewritestream.md#_write)
* [_writev](sparsewritestream.md#optional-_writev)
* [addListener](sparsewritestream.md#addlistener)
* [copyChunk](sparsewritestream.md#private-copychunk)
* [cork](sparsewritestream.md#cork)
* [destroy](sparsewritestream.md#destroy)
* [emit](sparsewritestream.md#emit)
* [end](sparsewritestream.md#end)
* [eventNames](sparsewritestream.md#eventnames)
* [getMaxListeners](sparsewritestream.md#getmaxlisteners)
* [listenerCount](sparsewritestream.md#listenercount)
* [listeners](sparsewritestream.md#listeners)
* [off](sparsewritestream.md#off)
* [on](sparsewritestream.md#on)
* [once](sparsewritestream.md#once)
* [pipe](sparsewritestream.md#pipe)
* [prependListener](sparsewritestream.md#prependlistener)
* [prependOnceListener](sparsewritestream.md#prependoncelistener)
* [rawListeners](sparsewritestream.md#rawlisteners)
* [removeAllListeners](sparsewritestream.md#removealllisteners)
* [removeListener](sparsewritestream.md#removelistener)
* [setDefaultEncoding](sparsewritestream.md#setdefaultencoding)
* [setMaxListeners](sparsewritestream.md#setmaxlisteners)
* [uncork](sparsewritestream.md#uncork)
* [write](sparsewritestream.md#write)
* [writeChunk](sparsewritestream.md#private-writechunk)
* [listenerCount](sparsewritestream.md#static-listenercount)
* [once](sparsewritestream.md#static-once)

## Constructors

###  constructor

\+ **new SparseWriteStream**(`__namedParameters`: object): *[SparseWriteStream](sparsewritestream.md)*

*Overrides [CountingWritable](countingwritable.md).[constructor](countingwritable.md#constructor)*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L18)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`destination` | [SourceDestination](sourcedestination.md)‹› | - |
`firstBytesToKeep` | number | 0 |
`highWaterMark` | undefined &#124; number | - |
`maxRetries` | number | 5 |

**Returns:** *[SparseWriteStream](sparsewritestream.md)*

## Properties

### `Private` _firstChunks

• **_firstChunks**: *[SparseStreamChunk](../interfaces/sparsestreamchunk.md)[]* = []

*Defined in [lib/sparse-stream/sparse-write-stream.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L18)*

___

###  bytesWritten

• **bytesWritten**: *number* = 0

*Defined in [lib/sparse-stream/sparse-write-stream.ts:17](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L17)*

___

### `Private` destination

• **destination**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:13](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L13)*

___

###  firstBytesToKeep

• **firstBytesToKeep**: *number*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:14](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L14)*

___

### `Private` maxRetries

• **maxRetries**: *number*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:15](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L15)*

___

###  position

• **position**: *number*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:16](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L16)*

___

###  writable

• **writable**: *boolean*

*Implementation of [SparseWritable](../interfaces/sparsewritable.md).[writable](../interfaces/sparsewritable.md#writable)*

*Inherited from [CountingWritable](countingwritable.md).[writable](countingwritable.md#writable)*

Defined in node_modules/@types/node/stream.d.ts:110

___

### `Readonly` writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [CountingWritable](countingwritable.md).[writableHighWaterMark](countingwritable.md#readonly-writablehighwatermark)*

Defined in node_modules/@types/node/stream.d.ts:111

___

### `Readonly` writableLength

• **writableLength**: *number*

*Inherited from [CountingWritable](countingwritable.md).[writableLength](countingwritable.md#readonly-writablelength)*

Defined in node_modules/@types/node/stream.d.ts:112

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

## Methods

### `Private` __final

▸ **__final**(): *Promise‹void›*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:118](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L118)*

**Returns:** *Promise‹void›*

___

### `Private` __write

▸ **__write**(`chunk`: [SparseStreamChunk](../interfaces/sparsestreamchunk.md)): *Promise‹void›*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:73](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [SparseStreamChunk](../interfaces/sparsestreamchunk.md) |

**Returns:** *Promise‹void›*

___

###  _destroy

▸ **_destroy**(`error`: [Error](notcapable.md#static-error) | null, `callback`: function): *void*

*Inherited from [CountingWritable](countingwritable.md).[_destroy](countingwritable.md#_destroy)*

Defined in node_modules/@types/node/stream.d.ts:116

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

*Overrides [CountingWritable](countingwritable.md).[_final](countingwritable.md#_final)*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:132](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L132)*

**`summary`** Write buffered data before a stream ends, called by stream internals

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: [SparseStreamChunk](../interfaces/sparsestreamchunk.md), `_enc`: string, `callback`: function): *void*

*Overrides void*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L110)*

**Parameters:**

▪ **chunk**: *[SparseStreamChunk](../interfaces/sparsestreamchunk.md)*

▪ **_enc**: *string*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; null |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [CountingWritable](countingwritable.md).[_writev](countingwritable.md#optional-_writev)*

Defined in node_modules/@types/node/stream.d.ts:115

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

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:138

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:139

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:140

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **addListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:141

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:142

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:143

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/stream.d.ts:144

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

### `Private` copyChunk

▸ **copyChunk**(`chunk`: [SparseStreamChunk](../interfaces/sparsestreamchunk.md)): *[SparseStreamChunk](../interfaces/sparsestreamchunk.md)*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [SparseStreamChunk](../interfaces/sparsestreamchunk.md) |

**Returns:** *[SparseStreamChunk](../interfaces/sparsestreamchunk.md)*

___

###  cork

▸ **cork**(): *void*

*Inherited from [CountingWritable](countingwritable.md).[cork](countingwritable.md#cork)*

Defined in node_modules/@types/node/stream.d.ts:124

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](notcapable.md#static-error)): *void*

*Inherited from [CountingWritable](countingwritable.md).[destroy](countingwritable.md#destroy)*

Defined in node_modules/@types/node/stream.d.ts:126

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:146

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:147

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:148

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:149

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:150

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:151

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/stream.d.ts:152

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: undefined | function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/stream.d.ts:121

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: undefined | function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/stream.d.ts:122

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/stream.d.ts:123

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

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

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

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

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

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:154

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:155

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:156

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **on**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:157

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:158

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:159

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/stream.d.ts:160

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

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:162

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:163

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:164

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **once**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:165

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:166

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:167

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/stream.d.ts:168

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

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:170

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:171

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:172

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **prependListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:173

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:174

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:175

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/stream.d.ts:176

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

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:178

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:179

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:180

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:181

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:182

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:183

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/stream.d.ts:184

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

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

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

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

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

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:186

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:187

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:188

**Parameters:**

▪ **event**: *"error"*

▪ **listener**: *function*

▸ (`err`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *this*

▸ **removeListener**(`event`: "finish", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:189

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:190

**Parameters:**

▪ **event**: *"pipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: "unpipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:191

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/stream.d.ts:192

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

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [CountingWritable](countingwritable.md).[setDefaultEncoding](countingwritable.md#setdefaultencoding)*

Defined in node_modules/@types/node/stream.d.ts:120

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [SparseWritable](../interfaces/sparsewritable.md)*

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

*Inherited from [CountingWritable](countingwritable.md).[uncork](countingwritable.md#uncork)*

Defined in node_modules/@types/node/stream.d.ts:125

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: any, `cb?`: undefined | function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/stream.d.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: undefined | function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/stream.d.ts:119

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | undefined &#124; function |

**Returns:** *boolean*

___

### `Private` writeChunk

▸ **writeChunk**(`chunk`: [SparseStreamChunk](../interfaces/sparsestreamchunk.md), `flushing`: boolean): *Promise‹void›*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`chunk` | [SparseStreamChunk](../interfaces/sparsestreamchunk.md) | - |
`flushing` | boolean | false |

**Returns:** *Promise‹void›*

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
