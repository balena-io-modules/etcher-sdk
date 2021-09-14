[etcher-sdk](../README.md) › [SourceRandomAccessReader](sourcerandomaccessreader.md)

# Class: SourceRandomAccessReader

## Hierarchy

* RandomAccessReader

  ↳ **SourceRandomAccessReader**

## Index

### Constructors

* [constructor](sourcerandomaccessreader.md#constructor)

### Properties

* [source](sourcerandomaccessreader.md#private-source)
* [defaultMaxListeners](sourcerandomaccessreader.md#static-defaultmaxlisteners)

### Methods

* [_readStreamForRange](sourcerandomaccessreader.md#_readstreamforrange)
* [addListener](sourcerandomaccessreader.md#addlistener)
* [close](sourcerandomaccessreader.md#close)
* [createReadStream](sourcerandomaccessreader.md#createreadstream)
* [emit](sourcerandomaccessreader.md#emit)
* [eventNames](sourcerandomaccessreader.md#eventnames)
* [getMaxListeners](sourcerandomaccessreader.md#getmaxlisteners)
* [listenerCount](sourcerandomaccessreader.md#listenercount)
* [listeners](sourcerandomaccessreader.md#listeners)
* [off](sourcerandomaccessreader.md#off)
* [on](sourcerandomaccessreader.md#on)
* [once](sourcerandomaccessreader.md#once)
* [prependListener](sourcerandomaccessreader.md#prependlistener)
* [prependOnceListener](sourcerandomaccessreader.md#prependoncelistener)
* [rawListeners](sourcerandomaccessreader.md#rawlisteners)
* [read](sourcerandomaccessreader.md#read)
* [removeAllListeners](sourcerandomaccessreader.md#removealllisteners)
* [removeListener](sourcerandomaccessreader.md#removelistener)
* [setMaxListeners](sourcerandomaccessreader.md#setmaxlisteners)
* [listenerCount](sourcerandomaccessreader.md#static-listenercount)
* [once](sourcerandomaccessreader.md#static-once)

## Constructors

###  constructor

\+ **new SourceRandomAccessReader**(`source`: [SourceDestination](sourcedestination.md)): *[SourceRandomAccessReader](sourcerandomaccessreader.md)*

*Overrides [Verifier](verifier.md).[constructor](verifier.md#constructor)*

*Defined in [lib/source-destination/zip.ts:130](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | [SourceDestination](sourcedestination.md) |

**Returns:** *[SourceRandomAccessReader](sourcerandomaccessreader.md)*

## Properties

### `Private` source

• **source**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/zip.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L131)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

## Methods

###  _readStreamForRange

▸ **_readStreamForRange**(`start`: number, `end`: number): *PassThrough‹›*

*Overrides void*

*Defined in [lib/source-destination/zip.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *PassThrough‹›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

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

###  close

▸ **close**(`callback`: function): *void*

*Inherited from [SourceRandomAccessReader](sourcerandomaccessreader.md).[close](sourcerandomaccessreader.md#close)*

Defined in node_modules/@types/yauzl/index.d.ts:15

**Parameters:**

▪ **callback**: *function*

▸ (`err?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

___

###  createReadStream

▸ **createReadStream**(`options`: object): *void*

*Inherited from [SourceRandomAccessReader](sourcerandomaccessreader.md).[createReadStream](sourcerandomaccessreader.md#createreadstream)*

Defined in node_modules/@types/yauzl/index.d.ts:13

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`end` | number |
`start` | number |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `offset`: number, `length`: number, `position`: number, `callback`: function): *void*

*Inherited from [SourceRandomAccessReader](sourcerandomaccessreader.md).[read](sourcerandomaccessreader.md#read)*

Defined in node_modules/@types/yauzl/index.d.ts:14

**Parameters:**

▪ **buffer**: *[Buffer](../interfaces/alignedlockablebuffer.md#buffer)*

▪ **offset**: *number*

▪ **length**: *number*

▪ **position**: *number*

▪ **callback**: *function*

▸ (`err?`: [Error](notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [Error](notcapable.md#static-error) |

**Returns:** *void*

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

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

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

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

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

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*
