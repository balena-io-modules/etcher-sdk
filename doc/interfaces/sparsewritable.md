[etcher-sdk](../README.md) › [SparseWritable](sparsewritable.md)

# Interface: SparseWritable

## Hierarchy

* WritableStream

  ↳ **SparseWritable**

## Implemented by

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
* [on](sparsewritable.md#on)
* [once](sparsewritable.md#once)
* [prependListener](sparsewritable.md#prependlistener)
* [prependOnceListener](sparsewritable.md#prependoncelistener)
* [removeAllListeners](sparsewritable.md#removealllisteners)
* [removeListener](sparsewritable.md#removelistener)
* [setMaxListeners](sparsewritable.md#setmaxlisteners)
* [write](sparsewritable.md#write)

## Properties

###  writable

• **writable**: *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[writable](sparsewritable.md#writable)*

Defined in node_modules/@types/node/base.d.ts:367

## Methods

###  _write

▸ **_write**(`chunk`: [SparseStreamChunk](sparsestreamchunk.md), `encoding`: string, `callback`: function): *void*

*Defined in [lib/sparse-stream/sparse-write-stream.ts:12](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/sparse-stream/sparse-write-stream.ts#L12)*

**Parameters:**

▪ **chunk**: *[SparseStreamChunk](sparsestreamchunk.md)*

▪ **encoding**: *string*

▪ **callback**: *function*

▸ (`err?`: [Error](../classes/notcapable.md#static-error) | void): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](../classes/notcapable.md#static-error) &#124; void |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[addListener](sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:336

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseReadable](sparsereadable.md).[emit](sparsereadable.md#emit)*

Defined in node_modules/@types/node/base.d.ts:344

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

Defined in node_modules/@types/node/base.d.ts:370

**Parameters:**

Name | Type |
------ | ------ |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`buffer`: Buffer, `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:371

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`str`: string, `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:372

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`cb?` | Function |

**Returns:** *void*

▸ **end**(`str`: string, `encoding?`: undefined | string, `cb?`: Function): *void*

*Inherited from [SparseWritable](sparsewritable.md).[end](sparsewritable.md#end)*

Defined in node_modules/@types/node/base.d.ts:373

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Inherited from [SparseReadable](sparsereadable.md).[eventNames](sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:349

**Returns:** *string | symbol[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [SparseReadable](sparsereadable.md).[getMaxListeners](sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:342

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [SparseReadable](sparsereadable.md).[listenerCount](sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:345

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [SparseReadable](sparsereadable.md).[listeners](sparsereadable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:343

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[on](sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[once](sparsereadable.md#once)*

Defined in node_modules/@types/node/base.d.ts:338

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[prependListener](sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:347

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[prependOnceListener](sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:348

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeAllListeners](sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:340

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: Function): *this*

*Inherited from [SparseReadable](sparsereadable.md).[removeListener](sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:339

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [SparseReadable](sparsereadable.md).[setMaxListeners](sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:341

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`buffer`: Buffer | string, `cb?`: Function): *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[write](sparsewritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:368

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer &#124; string |
`cb?` | Function |

**Returns:** *boolean*

▸ **write**(`str`: string, `encoding?`: undefined | string, `cb?`: Function): *boolean*

*Inherited from [SparseWritable](sparsewritable.md).[write](sparsewritable.md#write)*

Defined in node_modules/@types/node/base.d.ts:369

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`encoding?` | undefined &#124; string |
`cb?` | Function |

**Returns:** *boolean*
