[etcher-sdk](../README.md) › [CountingWritable](countingwritable.md)

# Class: CountingWritable

## Hierarchy

* Writable

  ↳ **CountingWritable**

## Implements

* WritableStream

## Index

### Constructors

* [constructor](countingwritable.md#constructor)

### Properties

* [bytesWritten](countingwritable.md#byteswritten)
* [position](countingwritable.md#position)
* [writable](countingwritable.md#writable)
* [writableHighWaterMark](countingwritable.md#writablehighwatermark)
* [defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)

### Methods

* [_destroy](countingwritable.md#_destroy)
* [_final](countingwritable.md#_final)
* [_write](countingwritable.md#_write)
* [_writev](countingwritable.md#optional-_writev)
* [addListener](countingwritable.md#addlistener)
* [cork](countingwritable.md#cork)
* [destroy](countingwritable.md#destroy)
* [emit](countingwritable.md#emit)
* [end](countingwritable.md#end)
* [eventNames](countingwritable.md#eventnames)
* [getMaxListeners](countingwritable.md#getmaxlisteners)
* [listenerCount](countingwritable.md#listenercount)
* [listeners](countingwritable.md#listeners)
* [on](countingwritable.md#on)
* [once](countingwritable.md#once)
* [pipe](countingwritable.md#pipe)
* [prependListener](countingwritable.md#prependlistener)
* [prependOnceListener](countingwritable.md#prependoncelistener)
* [removeAllListeners](countingwritable.md#removealllisteners)
* [removeListener](countingwritable.md#removelistener)
* [setDefaultEncoding](countingwritable.md#setdefaultencoding)
* [setMaxListeners](countingwritable.md#setmaxlisteners)
* [uncork](countingwritable.md#uncork)
* [write](countingwritable.md#write)
* [listenerCount](countingwritable.md#static-listenercount)

## Constructors

###  constructor

\+ **new CountingWritable**(`opts?`: WritableOptions): *[CountingWritable](countingwritable.md)*

*Inherited from [CountingWritable](countingwritable.md).[constructor](countingwritable.md#constructor)*

Defined in node_modules/@types/node/base.d.ts:5509

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | WritableOptions |

**Returns:** *[CountingWritable](countingwritable.md)*

## Properties

###  bytesWritten

• **bytesWritten**: *number* = 0

*Defined in [lib/source-destination/progress.ts:92](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/progress.ts#L92)*

___

###  position

• **position**: *number | undefined*

*Defined in [lib/source-destination/progress.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/progress.ts#L93)*

___

###  writable

• **writable**: *boolean*

*Inherited from [CountingWritable](countingwritable.md).[writable](countingwritable.md#writable)*

Defined in node_modules/@types/node/base.d.ts:5508

___

###  writableHighWaterMark

• **writableHighWaterMark**: *number*

*Inherited from [CountingWritable](countingwritable.md).[writableHighWaterMark](countingwritable.md#writablehighwatermark)*

Defined in node_modules/@types/node/base.d.ts:5509

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:896

## Methods

###  _destroy

▸ **_destroy**(`error`: [Error](notcapable.md#static-error) | null, `callback`: function): *void*

*Inherited from [CountingWritable](countingwritable.md).[_destroy](countingwritable.md#_destroy)*

Defined in node_modules/@types/node/base.d.ts:5513

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

*Inherited from [CountingWritable](countingwritable.md).[_final](countingwritable.md#_final)*

Defined in node_modules/@types/node/base.d.ts:5514

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | Chunk, `_enc`: string, `callback`: function): *void*

*Overrides void*

*Defined in [lib/source-destination/progress.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/source-destination/progress.ts#L95)*

**Parameters:**

▪ **chunk**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer) | Chunk*

▪ **_enc**: *string*

▪ **callback**: *function*

▸ (`err?`: [Error](notcapable.md#static-error) | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](notcapable.md#static-error) &#124; undefined |

**Returns:** *void*

___

### `Optional` _writev

▸ **_writev**(`chunks`: Array‹object›, `callback`: function): *void*

*Inherited from [CountingWritable](countingwritable.md).[_writev](countingwritable.md#optional-_writev)*

Defined in node_modules/@types/node/base.d.ts:5512

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

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5535

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

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

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5536

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5537

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5538

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

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5539

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5540

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

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:5541

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

___

###  cork

▸ **cork**(): *void*

*Inherited from [CountingWritable](countingwritable.md).[cork](countingwritable.md#cork)*

Defined in node_modules/@types/node/base.d.ts:5521

**Returns:** *void*

___

###  destroy

▸ **destroy**(`error?`: [Error](notcapable.md#static-error)): *void*

*Inherited from [CountingWritable](countingwritable.md).[destroy](countingwritable.md#destroy)*

Defined in node_modules/@types/node/base.d.ts:5523

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5543

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5544

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain", `chunk`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer) | string): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5545

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |
`chunk` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5546

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5547

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5548

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:5549

**Parameters:**

Name | Type |
------ | ------ |
`event` | "unpipe" |
`src` | Readable |

**Returns:** *boolean*

___

###  end

▸ **end**(`cb?`: Function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:5518

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: Function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:5519

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:5520

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

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:909

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:906

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

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

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:907

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5551

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

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5552

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5553

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5554

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

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5555

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5556

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

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:5557

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5559

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

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5560

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5561

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5562

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

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5563

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5564

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

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:5565

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

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

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5567

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

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5568

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5569

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5570

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

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5571

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5572

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

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:5573

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5575

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

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5576

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5577

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5578

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

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5579

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5580

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

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:5581

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

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

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5583

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

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5584

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5585

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5586

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

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5587

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5588

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

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:5589

**Parameters:**

▪ **event**: *"unpipe"*

▪ **listener**: *function*

▸ (`src`: Readable): *void*

**Parameters:**

Name | Type |
------ | ------ |
`src` | Readable |

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [CountingWritable](countingwritable.md).[setDefaultEncoding](countingwritable.md#setdefaultencoding)*

Defined in node_modules/@types/node/base.d.ts:5517

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

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

*Inherited from [CountingWritable](countingwritable.md).[uncork](countingwritable.md#uncork)*

Defined in node_modules/@types/node/base.d.ts:5522

**Returns:** *void*

___

###  write

▸ **write**(`chunk`: any, `cb?`: Function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:5515

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:5516

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
