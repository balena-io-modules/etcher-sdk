[etcher-sdk](../README.md) › [SparseReadable](sparsereadable.md)

# Interface: SparseReadable

## Hierarchy

* ReadableStream

  ↳ **SparseReadable**

## Implemented by

* [SparseFilterStream](../classes/sparsefilterstream.md)
* [SparseReadStream](../classes/sparsereadstream.md)
* [SparseTransformStream](../classes/sparsetransformstream.md)

## Index

### Properties

* [blocks](sparsereadable.md#blocks)
* [readable](sparsereadable.md#readable)

### Methods

* [[Symbol.asyncIterator]](sparsereadable.md#[symbol.asynciterator])
* [addListener](sparsereadable.md#addlistener)
* [emit](sparsereadable.md#emit)
* [eventNames](sparsereadable.md#eventnames)
* [getMaxListeners](sparsereadable.md#getmaxlisteners)
* [isPaused](sparsereadable.md#ispaused)
* [listenerCount](sparsereadable.md#listenercount)
* [listeners](sparsereadable.md#listeners)
* [off](sparsereadable.md#off)
* [on](sparsereadable.md#on)
* [once](sparsereadable.md#once)
* [pause](sparsereadable.md#pause)
* [pipe](sparsereadable.md#pipe)
* [prependListener](sparsereadable.md#prependlistener)
* [prependOnceListener](sparsereadable.md#prependoncelistener)
* [push](sparsereadable.md#push)
* [rawListeners](sparsereadable.md#rawlisteners)
* [read](sparsereadable.md#read)
* [removeAllListeners](sparsereadable.md#removealllisteners)
* [removeListener](sparsereadable.md#removelistener)
* [resume](sparsereadable.md#resume)
* [setEncoding](sparsereadable.md#setencoding)
* [setMaxListeners](sparsereadable.md#setmaxlisteners)
* [unpipe](sparsereadable.md#unpipe)
* [unshift](sparsereadable.md#unshift)
* [wrap](sparsereadable.md#wrap)

## Properties

###  blocks

• **blocks**: *[BlocksWithChecksum](blockswithchecksum.md)[]*

*Defined in [lib/sparse-stream/shared.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L44)*

___

###  readable

• **readable**: *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[readable](sparsereadable.md#readable)*

Defined in node_modules/@types/node/globals.d.ts:573

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterableIterator‹string | [Buffer](alignedlockablebuffer.md#buffer)›*

*Inherited from [SparseReadable](sparsereadable.md).[[Symbol.asyncIterator]](sparsereadable.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/globals.d.ts:584

**Returns:** *AsyncIterableIterator‹string | [Buffer](alignedlockablebuffer.md#buffer)›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

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

*Inherited from [SparseReadable](sparsereadable.md).[emit](sparsereadable.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [SparseReadable](sparsereadable.md).[eventNames](sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[isPaused](sparsereadable.md#ispaused)*

Defined in node_modules/@types/node/globals.d.ts:578

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[listeners](sparsereadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[off](sparsereadable.md#off)*

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

*Inherited from [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

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

*Inherited from [SparseReadable](sparsereadable.md).[once](sparsereadable.md#once)*

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

###  pause

▸ **pause**(): *this*

*Inherited from [SparseReadable](sparsereadable.md).[pause](sparsereadable.md#pause)*

Defined in node_modules/@types/node/globals.d.ts:576

**Returns:** *this*

___

###  pipe

▸ **pipe**‹**T**›(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [SparseReadable](sparsereadable.md).[pipe](sparsereadable.md#pipe)*

Defined in node_modules/@types/node/globals.d.ts:579

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

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[prependListener](sparsereadable.md#prependlistener)*

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

*Inherited from [SparseReadable](sparsereadable.md).[prependOnceListener](sparsereadable.md#prependoncelistener)*

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

###  push

▸ **push**(`chunk`: [SparseStreamChunk](sparsestreamchunk.md)): *boolean*

*Defined in [lib/sparse-stream/shared.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [SparseStreamChunk](sparsestreamchunk.md) |

**Returns:** *boolean*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[rawListeners](sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`size?`: undefined | number): *string | [Buffer](alignedlockablebuffer.md#buffer)*

*Inherited from [SparseReadable](sparsereadable.md).[read](sparsereadable.md#read)*

Defined in node_modules/@types/node/globals.d.ts:574

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *string | [Buffer](alignedlockablebuffer.md#buffer)*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

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

###  resume

▸ **resume**(): *this*

*Inherited from [SparseReadable](sparsereadable.md).[resume](sparsereadable.md#resume)*

Defined in node_modules/@types/node/globals.d.ts:577

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setEncoding](sparsereadable.md#setencoding)*

Defined in node_modules/@types/node/globals.d.ts:575

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**(`destination?`: WritableStream): *this*

*Inherited from [SparseReadable](sparsereadable.md).[unpipe](sparsereadable.md#unpipe)*

Defined in node_modules/@types/node/globals.d.ts:580

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | WritableStream |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: string): *void*

*Inherited from [SparseReadable](sparsereadable.md).[unshift](sparsereadable.md#unshift)*

Defined in node_modules/@types/node/globals.d.ts:581

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string |

**Returns:** *void*

▸ **unshift**(`chunk`: [Buffer](alignedlockablebuffer.md#buffer)): *void*

*Inherited from [SparseReadable](sparsereadable.md).[unshift](sparsereadable.md#unshift)*

Defined in node_modules/@types/node/globals.d.ts:582

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [SparseReadable](sparsereadable.md).[wrap](sparsereadable.md#wrap)*

Defined in node_modules/@types/node/globals.d.ts:583

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*
