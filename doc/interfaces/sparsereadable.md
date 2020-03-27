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

* [addListener](sparsereadable.md#addlistener)
* [emit](sparsereadable.md#emit)
* [eventNames](sparsereadable.md#eventnames)
* [getMaxListeners](sparsereadable.md#getmaxlisteners)
* [isPaused](sparsereadable.md#ispaused)
* [listenerCount](sparsereadable.md#listenercount)
* [listeners](sparsereadable.md#listeners)
* [on](sparsereadable.md#on)
* [once](sparsereadable.md#once)
* [pause](sparsereadable.md#pause)
* [pipe](sparsereadable.md#pipe)
* [prependListener](sparsereadable.md#prependlistener)
* [prependOnceListener](sparsereadable.md#prependoncelistener)
* [push](sparsereadable.md#push)
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

*Defined in [lib/sparse-stream/shared.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/shared.ts#L50)*

___

###  readable

• **readable**: *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[readable](sparsereadable.md#readable)*

Defined in node_modules/@types/node/base.d.ts:401

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:384

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

Defined in node_modules/@types/node/base.d.ts:392

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

Defined in node_modules/@types/node/base.d.ts:397

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:390

**Returns:** *number*

___

###  isPaused

▸ **isPaused**(): *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[isPaused](sparsereadable.md#ispaused)*

Defined in node_modules/@types/node/base.d.ts:406

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:393

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[listeners](sparsereadable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:391

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:385

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

Defined in node_modules/@types/node/base.d.ts:386

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

Defined in node_modules/@types/node/base.d.ts:404

**Returns:** *this*

___

###  pipe

▸ **pipe**<**T**>(`destination`: T, `options?`: undefined | object): *T*

*Inherited from [SparseReadable](sparsereadable.md).[pipe](sparsereadable.md#pipe)*

Defined in node_modules/@types/node/base.d.ts:407

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

Defined in node_modules/@types/node/base.d.ts:395

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

Defined in node_modules/@types/node/base.d.ts:396

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

*Defined in [lib/sparse-stream/shared.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/sparse-stream/shared.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [SparseStreamChunk](sparsestreamchunk.md) |

**Returns:** *boolean*

___

###  read

▸ **read**(`size?`: undefined | number): *string | [Buffer](alignedlockablebuffer.md#buffer)*

*Inherited from [SparseReadable](sparsereadable.md).[read](sparsereadable.md#read)*

Defined in node_modules/@types/node/base.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`size?` | undefined &#124; number |

**Returns:** *string | [Buffer](alignedlockablebuffer.md#buffer)*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:388

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:387

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

Defined in node_modules/@types/node/base.d.ts:405

**Returns:** *this*

___

###  setEncoding

▸ **setEncoding**(`encoding`: string): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setEncoding](sparsereadable.md#setencoding)*

Defined in node_modules/@types/node/base.d.ts:403

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | string |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:389

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  unpipe

▸ **unpipe**<**T**>(`destination?`: T): *this*

*Inherited from [SparseReadable](sparsereadable.md).[unpipe](sparsereadable.md#unpipe)*

Defined in node_modules/@types/node/base.d.ts:408

**Type parameters:**

▪ **T**: *WritableStream*

**Parameters:**

Name | Type |
------ | ------ |
`destination?` | T |

**Returns:** *this*

___

###  unshift

▸ **unshift**(`chunk`: string): *void*

*Inherited from [SparseReadable](sparsereadable.md).[unshift](sparsereadable.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:409

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | string |

**Returns:** *void*

▸ **unshift**(`chunk`: [Buffer](alignedlockablebuffer.md#buffer)): *void*

*Inherited from [SparseReadable](sparsereadable.md).[unshift](sparsereadable.md#unshift)*

Defined in node_modules/@types/node/base.d.ts:410

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | [Buffer](alignedlockablebuffer.md#buffer) |

**Returns:** *void*

___

###  wrap

▸ **wrap**(`oldStream`: ReadableStream): *this*

*Inherited from [SparseReadable](sparsereadable.md).[wrap](sparsereadable.md#wrap)*

Defined in node_modules/@types/node/base.d.ts:411

**Parameters:**

Name | Type |
------ | ------ |
`oldStream` | ReadableStream |

**Returns:** *this*
