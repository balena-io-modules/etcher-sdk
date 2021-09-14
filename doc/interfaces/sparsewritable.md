[etcher-sdk](../README.md) › [SparseWritable](sparsewritable.md)

# Interface: SparseWritable

## Hierarchy

* WritableStream

  ↳ **SparseWritable**

## Implemented by

* [SparseTransformStream](../classes/sparsetransformstream.md)
* [SparseWriteStream](../classes/sparsewritestream.md)

## Index

### Properties

* [writable](sparsewritable.md#writable)

### Methods

* [_write](sparsewritable.md#_write)
* [addListener](sparsewritable.md#addlistener)
* [emit](sparsewritable.md#emit)
* [end](sparsewritable.md#end)
* [eventNames](sparsewritable.md#eventnames)
* [getMaxListeners](sparsewritable.md#getmaxlisteners)
* [listenerCount](sparsewritable.md#listenercount)
* [listeners](sparsewritable.md#listeners)
* [off](sparsewritable.md#off)
* [on](sparsewritable.md#on)
* [once](sparsewritable.md#once)
* [prependListener](sparsewritable.md#prependlistener)
* [prependOnceListener](sparsewritable.md#prependoncelistener)
* [rawListeners](sparsewritable.md#rawlisteners)
* [removeAllListeners](sparsewritable.md#removealllisteners)
* [removeListener](sparsewritable.md#removelistener)
* [setMaxListeners](sparsewritable.md#setmaxlisteners)
* [write](sparsewritable.md#write)

## Properties

###  writable

• **writable**: *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[writable](sparsewritable.md#writable)*

Defined in node_modules/@types/node/globals.d.ts:588

## Methods

###  _write

▸ **_write**(`chunk`: [SparseStreamChunk](sparsestreamchunk.md), `encoding`: string, `callback`: function): *void*

*Defined in [lib/sparse-stream/shared.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L49)*

**Parameters:**

▪ **chunk**: *[SparseStreamChunk](sparsestreamchunk.md)*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`err?`: [Error](../classes/notcapable.md#static-error) | null): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../classes/notcapable.md#static-error) &#124; null |

**Returns:** *void*

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

###  end

▸ **end**(`cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/globals.d.ts:591

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`buffer`: [Buffer](alignedlockablebuffer.md#buffer), `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/globals.d.ts:592

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](alignedlockablebuffer.md#buffer) |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`str`: string, `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/globals.d.ts:593

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`str`: string, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/globals.d.ts:594

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *void*

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

###  write

▸ **write**(`buffer`: [Buffer](alignedlockablebuffer.md#buffer) | string, `cb?`: Function): *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[write](sparsewritable.md#write)*

Defined in node_modules/@types/node/globals.d.ts:589

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](alignedlockablebuffer.md#buffer) &#124; string |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`str`: string, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[write](sparsewritable.md#write)*

Defined in node_modules/@types/node/globals.d.ts:590

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *boolean*
