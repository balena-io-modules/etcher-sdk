[etcher-sdk](../README.md) › [BlockWriteStream](blockwritestream.md)

# Class: BlockWriteStream

## Hierarchy

* Writable

  ↳ **BlockWriteStream**

## Implements

* WritableStream

## Index

### Constructors

* [constructor](blockwritestream.md#constructor)

### Properties

* [_buffers](blockwritestream.md#private-_buffers)
* [_bytes](blockwritestream.md#private-_bytes)
* [_firstBuffers](blockwritestream.md#private-_firstbuffers)
* [bytesWritten](blockwritestream.md#byteswritten)
* [destination](blockwritestream.md#private-destination)
* [firstBytesToKeep](blockwritestream.md#firstbytestokeep)
* [maxRetries](blockwritestream.md#private-maxretries)
* [writable](blockwritestream.md#writable)
* [defaultMaxListeners](blockwritestream.md#static-defaultmaxlisteners)

### Methods

* [__final](blockwritestream.md#private-__final)
* [__write](blockwritestream.md#private-__write)
* [_final](blockwritestream.md#_final)
* [_write](blockwritestream.md#_write)
* [addListener](blockwritestream.md#addlistener)
* [destroy](blockwritestream.md#destroy)
* [emit](blockwritestream.md#emit)
* [end](blockwritestream.md#end)
* [eventNames](blockwritestream.md#eventnames)
* [getMaxListeners](blockwritestream.md#getmaxlisteners)
* [listenerCount](blockwritestream.md#listenercount)
* [listeners](blockwritestream.md#listeners)
* [on](blockwritestream.md#on)
* [once](blockwritestream.md#once)
* [pipe](blockwritestream.md#pipe)
* [prependListener](blockwritestream.md#prependlistener)
* [prependOnceListener](blockwritestream.md#prependoncelistener)
* [removeAllListeners](blockwritestream.md#removealllisteners)
* [removeListener](blockwritestream.md#removelistener)
* [setDefaultEncoding](blockwritestream.md#setdefaultencoding)
* [setMaxListeners](blockwritestream.md#setmaxlisteners)
* [write](blockwritestream.md#write)
* [writeBuffers](blockwritestream.md#private-writebuffers)
* [writeChunk](blockwritestream.md#private-writechunk)
* [listenerCount](blockwritestream.md#static-listenercount)

## Constructors

###  constructor

\+ **new BlockWriteStream**(`destination`: [BlockDevice](blockdevice.md), `firstBytesToKeep`: number, `maxRetries`: number): *[BlockWriteStream](blockwritestream.md)*

*Overrides [CountingWritable](countingwritable.md).[constructor](countingwritable.md#constructor)*

*Defined in [lib/block-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`destination` | [BlockDevice](blockdevice.md) | - |
`firstBytesToKeep` | number | 0 |
`maxRetries` | number | 5 |

**Returns:** *[BlockWriteStream](blockwritestream.md)*

## Properties

### `Private` _buffers

• **_buffers**: *Buffer[]* = []

*Defined in [lib/block-write-stream.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L36)*

___

### `Private` _bytes

• **_bytes**: *number* = 0

*Defined in [lib/block-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L37)*

___

### `Private` _firstBuffers

• **_firstBuffers**: *Buffer[]* = []

*Defined in [lib/block-write-stream.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L35)*

___

###  bytesWritten

• **bytesWritten**: *number* = 0

*Defined in [lib/block-write-stream.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L34)*

___

### `Private` destination

• **destination**: *[BlockDevice](blockdevice.md)*

*Defined in [lib/block-write-stream.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L40)*

___

###  firstBytesToKeep

• **firstBytesToKeep**: *number*

*Defined in [lib/block-write-stream.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L41)*

___

### `Private` maxRetries

• **maxRetries**: *number*

*Defined in [lib/block-write-stream.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L42)*

___

###  writable

• **writable**: *boolean*

*Inherited from [CountingWritable](countingwritable.md).[writable](countingwritable.md#writable)*

Defined in node_modules/@types/node/base.d.ts:3770

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

## Methods

### `Private` __final

▸ **__final**(): *Promise‹void›*

*Defined in [lib/block-write-stream.ts:141](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L141)*

**Returns:** *Promise‹void›*

___

### `Private` __write

▸ **__write**(`buffer`: Buffer): *Promise‹void›*

*Defined in [lib/block-write-stream.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |

**Returns:** *Promise‹void›*

___

###  _final

▸ **_final**(`callback`: function): *void*

*Defined in [lib/block-write-stream.ts:165](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L165)*

**`summary`** Write buffered data before a stream ends, called by stream internals

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](notcapable.md#static-error) | void): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) &#124; void |

**Returns:** *void*

___

###  _write

▸ **_write**(`buffer`: Buffer, `_encoding`: string, `callback`: function): *void*

*Overrides void*

*Defined in [lib/block-write-stream.ts:133](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L133)*

**Parameters:**

▪ **buffer**: *Buffer*

▪ **_encoding**: *string*

▪ **callback**: *function*

▸ (`error`: [Error](notcapable.md#static-error) | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) &#124; undefined |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: Function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3790

Event emitter
The defined events on documents including:
  1. close
  2. drain
  3. error
  4. finish
  5. pipe
  6. unpipe

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3791

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3792

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3793

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

Defined in node_modules/@types/node/base.d.ts:3794

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[addListener](countingwritable.md#addlistener)*

*Overrides [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3795

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

Defined in node_modules/@types/node/base.d.ts:3796

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

###  destroy

▸ **destroy**(`error?`: [Error](notcapable.md#static-error)): *this*

*Inherited from [SparseWriteStream](sparsewritestream.md).[destroy](sparsewritestream.md#destroy)*

*Defined in [typings/readable-stream/index.d.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/typings/readable-stream/index.d.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](notcapable.md#static-error) |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3798

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3799

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "drain", `chunk`: Buffer | string): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3800

**Parameters:**

Name | Type |
------ | ------ |
`event` | "drain" |
`chunk` | Buffer &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](notcapable.md#static-error)): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3801

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`err` | [Error](notcapable.md#static-error) |

**Returns:** *boolean*

▸ **emit**(`event`: "finish"): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3802

**Parameters:**

Name | Type |
------ | ------ |
`event` | "finish" |

**Returns:** *boolean*

▸ **emit**(`event`: "pipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3803

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pipe" |
`src` | Readable |

**Returns:** *boolean*

▸ **emit**(`event`: "unpipe", `src`: Readable): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[emit](countingwritable.md#emit)*

*Overrides [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3804

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

Defined in node_modules/@types/node/base.d.ts:3776

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: Function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:3777

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [CountingWritable](countingwritable.md).[end](countingwritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:3778

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

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

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string, `listener`: Function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3806

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3807

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3808

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3809

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

Defined in node_modules/@types/node/base.d.ts:3810

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[on](countingwritable.md#on)*

*Overrides [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3811

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

Defined in node_modules/@types/node/base.d.ts:3812

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

▸ **once**(`event`: string, `listener`: Function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3814

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3815

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3816

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3817

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

Defined in node_modules/@types/node/base.d.ts:3818

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#once)*

*Overrides [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3819

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

Defined in node_modules/@types/node/base.d.ts:3820

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

Defined in node_modules/@types/node/base.d.ts:3673

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

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3822

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3823

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3824

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3825

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

Defined in node_modules/@types/node/base.d.ts:3826

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependListener](countingwritable.md#prependlistener)*

*Overrides [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3827

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

Defined in node_modules/@types/node/base.d.ts:3828

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

▸ **prependOnceListener**(`event`: string, `listener`: Function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3830

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3831

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3832

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3833

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

Defined in node_modules/@types/node/base.d.ts:3834

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[prependOnceListener](countingwritable.md#prependoncelistener)*

*Overrides [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3835

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

Defined in node_modules/@types/node/base.d.ts:3836

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

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: Function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3838

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3839

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "drain", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3840

**Parameters:**

▪ **event**: *"drain"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3841

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

Defined in node_modules/@types/node/base.d.ts:3842

**Parameters:**

▪ **event**: *"finish"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "pipe", `listener`: function): *this*

*Inherited from [CountingWritable](countingwritable.md).[removeListener](countingwritable.md#removelistener)*

*Overrides [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3843

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

Defined in node_modules/@types/node/base.d.ts:3844

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

Defined in node_modules/@types/node/base.d.ts:3775

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`chunk`: any, `cb?`: Function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:3773

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [CountingWritable](countingwritable.md).[write](countingwritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:3774

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *boolean*

___

### `Private` writeBuffers

▸ **writeBuffers**(): *Promise‹void›*

*Defined in [lib/block-write-stream.ts:82](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L82)*

**Returns:** *Promise‹void›*

___

### `Private` writeChunk

▸ **writeChunk**(`buffer`: Buffer, `position`: number, `flushing`: boolean): *Promise‹void›*

*Defined in [lib/block-write-stream.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/block-write-stream.ts#L50)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | Buffer | - |
`position` | number | - |
`flushing` | boolean | false |

**Returns:** *Promise‹void›*

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
