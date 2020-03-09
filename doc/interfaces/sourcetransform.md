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
* [sourceStream](sourcetransform.md#sourcestream)
* [writable](sourcetransform.md#writable)
* [defaultMaxListeners](sourcetransform.md#static-defaultmaxlisteners)

### Methods

* [_read](sourcetransform.md#_read)
* [_transform](sourcetransform.md#_transform)
* [_write](sourcetransform.md#_write)
* [addListener](sourcetransform.md#addlistener)
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

Defined in node_modules/@types/node/base.d.ts:3871

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | TransformOptions |

**Returns:** *[SourceTransform](sourcetransform.md)*

## Properties

###  readable

• **readable**: *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[readable](../classes/sparsefilterstream.md#readable)*

Defined in node_modules/@types/node/base.d.ts:3688

___

###  sourceStream

• **sourceStream**: *ReadableStream*

*Defined in [lib/source-destination/compressed-source.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/compressed-source.ts#L26)*

___

###  writable

• **writable**: *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[writable](../classes/sparsefilterstream.md#writable)*

Defined in node_modules/@types/node/base.d.ts:3855

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[defaultMaxListeners](../classes/countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

## Methods

###  _read

▸ **_read**(`size`: number): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_read](../classes/sparsefilterstream.md#_read)*

Defined in node_modules/@types/node/base.d.ts:3690

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

###  _transform

▸ **_transform**(`chunk`: any, `encoding`: string, `callback`: Function): *void*

*Inherited from [SourceTransform](sourcetransform.md).[_transform](sourcetransform.md#_transform)*

Defined in node_modules/@types/node/base.d.ts:3873

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | Function |

**Returns:** *void*

___

###  _write

▸ **_write**(`chunk`: any, `encoding`: string, `callback`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[_write](../classes/sparsefilterstream.md#_write)*

Defined in node_modules/@types/node/base.d.ts:3857

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`encoding` | string |
`callback` | Function |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3712

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3714

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3715

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[addListener](../classes/sparsefilterstream.md#addlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[addListener](../classes/sourcesource.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:3716

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3718

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3719

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `chunk`: Buffer | string): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3720

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`chunk` | Buffer &#124; string |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3721

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "readable"): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3722

**Parameters:**

Name | Type |
------ | ------ |
`event` | "readable" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `err`: [Error](../classes/notcapable.md#static-error)): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[emit](../classes/sparsefilterstream.md#emit)*

*Overrides [SourceSource](../classes/sourcesource.md).[emit](../classes/sourcesource.md#emit)*

Defined in node_modules/@types/node/base.d.ts:3723

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

Defined in node_modules/@types/node/base.d.ts:3861

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[end](../classes/sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:3862

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[end](../classes/sparsefilterstream.md#end)*

Defined in node_modules/@types/node/base.d.ts:3863

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

*Inherited from [CountingWritable](../classes/countingwritable.md).[eventNames](../classes/countingwritable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[getMaxListeners](../classes/countingwritable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[isPaused](../classes/sparsefilterstream.md#ispaused)*

Defined in node_modules/@types/node/base.d.ts:3695

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listenerCount](../classes/countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [CountingWritable](../classes/countingwritable.md).[listeners](../classes/countingwritable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3725

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3726

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3728

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3729

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[on](../classes/sparsefilterstream.md#on)*

*Overrides [SourceSource](../classes/sourcesource.md).[on](../classes/sourcesource.md#on)*

Defined in node_modules/@types/node/base.d.ts:3730

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

▸ **once**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3732

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3733

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3735

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3736

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[once](../classes/sparsefilterstream.md#once)*

*Overrides [SourceSource](../classes/sourcesource.md).[once](../classes/sourcesource.md#once)*

Defined in node_modules/@types/node/base.d.ts:3737

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

Defined in node_modules/@types/node/base.d.ts:3693

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[pipe](../classes/sparsefilterstream.md#pipe)*

*Overrides [CountingWritable](../classes/countingwritable.md).[pipe](../classes/countingwritable.md#pipe)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3739

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3740

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3742

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3743

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependListener](../classes/sparsefilterstream.md#prependlistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependListener](../classes/sourcesource.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:3744

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

▸ **prependOnceListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3746

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3747

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3749

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3750

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[prependOnceListener](../classes/sparsefilterstream.md#prependoncelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[prependOnceListener](../classes/sourcesource.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:3751

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[read](../classes/sparsefilterstream.md#read)*

Defined in node_modules/@types/node/base.d.ts:3691

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[removeAllListeners](../classes/countingwritable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string, `listener`: Function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3753

**Parameters:**

Name | Type |
------ | ------ |
`event` | string |
`listener` | Function |

**Returns:** *this*

▸ **removeListener**(`event`: "close", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3754

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "data", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3756

**Parameters:**

▪ **event**: *"end"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "readable", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3757

**Parameters:**

▪ **event**: *"readable"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **removeListener**(`event`: "error", `listener`: function): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[removeListener](../classes/sparsefilterstream.md#removelistener)*

*Overrides [SourceSource](../classes/sourcesource.md).[removeListener](../classes/sourcesource.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:3758

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

Defined in node_modules/@types/node/base.d.ts:3694

**Returns:** *this*

___

###  setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: string): *this*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[setDefaultEncoding](../classes/sparsefilterstream.md#setdefaultencoding)*

Defined in node_modules/@types/node/base.d.ts:3860

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[setEncoding](../classes/sparsefilterstream.md#setencoding)*

Defined in node_modules/@types/node/base.d.ts:3692

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [CountingWritable](../classes/countingwritable.md).[setMaxListeners](../classes/countingwritable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**<**T**>(`destination?`: T): *void*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[unpipe](../classes/sparsefilterstream.md#unpipe)*

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

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[unshift](../classes/sparsefilterstream.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:3698

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *Readable*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[wrap](../classes/sparsefilterstream.md#wrap)*

Defined in node_modules/@types/node/base.d.ts:3699

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *Readable*

___

###  write

▸ **write**(`chunk`: any, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[write](../classes/sparsefilterstream.md#write)*

Defined in node_modules/@types/node/base.d.ts:3858

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | any |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`chunk`: any, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [SparseFilterStream](../classes/sparsefilterstream.md).[write](../classes/sparsefilterstream.md#write)*

Defined in node_modules/@types/node/base.d.ts:3859

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

Defined in node_modules/@types/node/base.d.ts:680

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
