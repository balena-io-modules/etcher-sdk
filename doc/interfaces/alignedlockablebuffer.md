[etcher-sdk](../README.md) › [AlignedLockableBuffer](alignedlockablebuffer.md)

# Interface: AlignedLockableBuffer

## Hierarchy

* [Buffer](alignedlockablebuffer.md#buffer)

  ↳ **AlignedLockableBuffer**

## Indexable

* \[ **index**: *number*\]: number

## Index

### Properties

* [BYTES_PER_ELEMENT](alignedlockablebuffer.md#readonly-bytes_per_element)
* [Buffer](alignedlockablebuffer.md#buffer)
* [alignment](alignedlockablebuffer.md#alignment)
* [buffer](alignedlockablebuffer.md#readonly-buffer)
* [byteLength](alignedlockablebuffer.md#readonly-bytelength)
* [byteOffset](alignedlockablebuffer.md#readonly-byteoffset)
* [constructor](alignedlockablebuffer.md#constructor)
* [length](alignedlockablebuffer.md#readonly-length)
* [lock](alignedlockablebuffer.md#lock)
* [rlock](alignedlockablebuffer.md#rlock)
* [slice](alignedlockablebuffer.md#slice)

### Methods

* [compare](alignedlockablebuffer.md#compare)
* [copy](alignedlockablebuffer.md#copy)
* [copyWithin](alignedlockablebuffer.md#copywithin)
* [entries](alignedlockablebuffer.md#entries)
* [equals](alignedlockablebuffer.md#equals)
* [every](alignedlockablebuffer.md#every)
* [fill](alignedlockablebuffer.md#fill)
* [filter](alignedlockablebuffer.md#filter)
* [find](alignedlockablebuffer.md#find)
* [findIndex](alignedlockablebuffer.md#findindex)
* [forEach](alignedlockablebuffer.md#foreach)
* [includes](alignedlockablebuffer.md#includes)
* [indexOf](alignedlockablebuffer.md#indexof)
* [join](alignedlockablebuffer.md#join)
* [keys](alignedlockablebuffer.md#keys)
* [lastIndexOf](alignedlockablebuffer.md#lastindexof)
* [map](alignedlockablebuffer.md#map)
* [readDoubleBE](alignedlockablebuffer.md#readdoublebe)
* [readDoubleLE](alignedlockablebuffer.md#readdoublele)
* [readFloatBE](alignedlockablebuffer.md#readfloatbe)
* [readFloatLE](alignedlockablebuffer.md#readfloatle)
* [readInt16BE](alignedlockablebuffer.md#readint16be)
* [readInt16LE](alignedlockablebuffer.md#readint16le)
* [readInt32BE](alignedlockablebuffer.md#readint32be)
* [readInt32LE](alignedlockablebuffer.md#readint32le)
* [readInt8](alignedlockablebuffer.md#readint8)
* [readIntBE](alignedlockablebuffer.md#readintbe)
* [readIntLE](alignedlockablebuffer.md#readintle)
* [readUInt16BE](alignedlockablebuffer.md#readuint16be)
* [readUInt16LE](alignedlockablebuffer.md#readuint16le)
* [readUInt32BE](alignedlockablebuffer.md#readuint32be)
* [readUInt32LE](alignedlockablebuffer.md#readuint32le)
* [readUInt8](alignedlockablebuffer.md#readuint8)
* [readUIntBE](alignedlockablebuffer.md#readuintbe)
* [readUIntLE](alignedlockablebuffer.md#readuintle)
* [reduce](alignedlockablebuffer.md#reduce)
* [reduceRight](alignedlockablebuffer.md#reduceright)
* [reverse](alignedlockablebuffer.md#reverse)
* [set](alignedlockablebuffer.md#set)
* [some](alignedlockablebuffer.md#some)
* [sort](alignedlockablebuffer.md#sort)
* [subarray](alignedlockablebuffer.md#subarray)
* [swap16](alignedlockablebuffer.md#swap16)
* [swap32](alignedlockablebuffer.md#swap32)
* [swap64](alignedlockablebuffer.md#swap64)
* [toJSON](alignedlockablebuffer.md#tojson)
* [toLocaleString](alignedlockablebuffer.md#tolocalestring)
* [toString](alignedlockablebuffer.md#tostring)
* [valueOf](alignedlockablebuffer.md#valueof)
* [values](alignedlockablebuffer.md#values)
* [write](alignedlockablebuffer.md#write)
* [writeDoubleBE](alignedlockablebuffer.md#writedoublebe)
* [writeDoubleLE](alignedlockablebuffer.md#writedoublele)
* [writeFloatBE](alignedlockablebuffer.md#writefloatbe)
* [writeFloatLE](alignedlockablebuffer.md#writefloatle)
* [writeInt16BE](alignedlockablebuffer.md#writeint16be)
* [writeInt16LE](alignedlockablebuffer.md#writeint16le)
* [writeInt32BE](alignedlockablebuffer.md#writeint32be)
* [writeInt32LE](alignedlockablebuffer.md#writeint32le)
* [writeInt8](alignedlockablebuffer.md#writeint8)
* [writeIntBE](alignedlockablebuffer.md#writeintbe)
* [writeIntLE](alignedlockablebuffer.md#writeintle)
* [writeUInt16BE](alignedlockablebuffer.md#writeuint16be)
* [writeUInt16LE](alignedlockablebuffer.md#writeuint16le)
* [writeUInt32BE](alignedlockablebuffer.md#writeuint32be)
* [writeUInt32LE](alignedlockablebuffer.md#writeuint32le)
* [writeUInt8](alignedlockablebuffer.md#writeuint8)
* [writeUIntBE](alignedlockablebuffer.md#writeuintbe)
* [writeUIntLE](alignedlockablebuffer.md#writeuintle)

## Properties

### `Readonly` BYTES_PER_ELEMENT

• **BYTES_PER_ELEMENT**: *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[BYTES_PER_ELEMENT](alignedlockablebuffer.md#readonly-bytes_per_element)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2042

The size in bytes of each element in the array.

___

###  Buffer

• **Buffer**: *object*

Defined in node_modules/@types/node/globals.d.ts:295

Raw data is stored in instances of the Buffer class.
A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'

#### Type declaration:

* **new __type**(`str`: string, `encoding?`: undefined | string): *[Buffer](alignedlockablebuffer.md#buffer)*

* **new __type**(`size`: number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **new __type**(`array`: Uint8Array): *[Buffer](alignedlockablebuffer.md#buffer)*

* **new __type**(`arrayBuffer`: ArrayBuffer | SharedArrayBuffer): *[Buffer](alignedlockablebuffer.md#buffer)*

* **new __type**(`array`: ReadonlyArray‹any›): *[Buffer](alignedlockablebuffer.md#buffer)*

* **new __type**(`buffer`: [Buffer](alignedlockablebuffer.md#buffer)): *[Buffer](alignedlockablebuffer.md#buffer)*

* **poolSize**: *number*

* **prototype**: *[Buffer](alignedlockablebuffer.md#buffer)*

* **alloc**(`size`: number, `fill?`: string | [Buffer](alignedlockablebuffer.md#buffer) | number, `encoding?`: undefined | string): *[Buffer](alignedlockablebuffer.md#buffer)*

* **allocUnsafe**(`size`: number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **allocUnsafeSlow**(`size`: number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **byteLength**(`string`: string | NodeJS.TypedArray | DataView | ArrayBuffer | SharedArrayBuffer, `encoding?`: undefined | string): *number*

* **compare**(`buf1`: Uint8Array, `buf2`: Uint8Array): *number*

* **concat**(`list`: ReadonlyArray‹Uint8Array›, `totalLength?`: undefined | number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **from**(`arrayBuffer`: ArrayBuffer | SharedArrayBuffer, `byteOffset?`: undefined | number, `length?`: undefined | number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **from**(`data`: ReadonlyArray‹any›): *[Buffer](alignedlockablebuffer.md#buffer)*

* **from**(`data`: Uint8Array): *[Buffer](alignedlockablebuffer.md#buffer)*

* **from**(`obj`: object | object, `byteOffset?`: undefined | number, `length?`: undefined | number): *[Buffer](alignedlockablebuffer.md#buffer)*

* **from**(`str`: string, `encoding?`: undefined | string): *[Buffer](alignedlockablebuffer.md#buffer)*

* **isBuffer**(`obj`: any): *obj is Buffer*

* **isEncoding**(`encoding`: string): *boolean | undefined*

* **of**(...`items`: number[]): *[Buffer](alignedlockablebuffer.md#buffer)*

___

###  alignment

• **alignment**: *number*

*Defined in [lib/aligned-lockable-buffer.ts:5](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L5)*

___

### `Readonly` buffer

• **buffer**: *ArrayBufferLike*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[buffer](alignedlockablebuffer.md#readonly-buffer)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2047

The ArrayBuffer instance referenced by the array.

___

### `Readonly` byteLength

• **byteLength**: *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[byteLength](alignedlockablebuffer.md#readonly-bytelength)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2052

The length in bytes of the array.

___

### `Readonly` byteOffset

• **byteOffset**: *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[byteOffset](alignedlockablebuffer.md#readonly-byteoffset)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2057

The offset in bytes of the array.

___

###  constructor

• **constructor**: *typeof Buffer*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[constructor](alignedlockablebuffer.md#constructor)*

Defined in node_modules/@types/node/globals.d.ts:234

___

### `Readonly` length

• **length**: *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[length](alignedlockablebuffer.md#readonly-length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2156

The length of the array.

___

###  lock

• **lock**: *function*

*Defined in [lib/aligned-lockable-buffer.ts:6](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L6)*

#### Type declaration:

▸ (): *Promise‹function›*

___

###  rlock

• **rlock**: *function*

*Defined in [lib/aligned-lockable-buffer.ts:7](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L7)*

#### Type declaration:

▸ (): *Promise‹function›*

___

###  slice

• **slice**: *function*

*Overrides void*

*Defined in [lib/aligned-lockable-buffer.ts:8](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L8)*

#### Type declaration:

▸ (`start?`: undefined | number, `end?`: undefined | number): *[AlignedLockableBuffer](alignedlockablebuffer.md)*

**Parameters:**

Name | Type |
------ | ------ |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

## Methods

###  compare

▸ **compare**(`otherBuffer`: Uint8Array, `targetStart?`: undefined | number, `targetEnd?`: undefined | number, `sourceStart?`: undefined | number, `sourceEnd?`: undefined | number): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[compare](alignedlockablebuffer.md#compare)*

Defined in node_modules/@types/node/globals.d.ts:239

**Parameters:**

Name | Type |
------ | ------ |
`otherBuffer` | Uint8Array |
`targetStart?` | undefined &#124; number |
`targetEnd?` | undefined &#124; number |
`sourceStart?` | undefined &#124; number |
`sourceEnd?` | undefined &#124; number |

**Returns:** *number*

___

###  copy

▸ **copy**(`targetBuffer`: Uint8Array, `targetStart?`: undefined | number, `sourceStart?`: undefined | number, `sourceEnd?`: undefined | number): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[copy](alignedlockablebuffer.md#copy)*

Defined in node_modules/@types/node/globals.d.ts:240

**Parameters:**

Name | Type |
------ | ------ |
`targetBuffer` | Uint8Array |
`targetStart?` | undefined &#124; number |
`sourceStart?` | undefined &#124; number |
`sourceEnd?` | undefined &#124; number |

**Returns:** *number*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[copyWithin](alignedlockablebuffer.md#copywithin)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2068

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[]›*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[entries](alignedlockablebuffer.md#entries)*

Defined in node_modules/@types/node/globals.d.ts:284

**Returns:** *IterableIterator‹[]›*

___

###  equals

▸ **equals**(`otherBuffer`: Uint8Array): *boolean*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[equals](alignedlockablebuffer.md#equals)*

Defined in node_modules/@types/node/globals.d.ts:238

**Parameters:**

Name | Type |
------ | ------ |
`otherBuffer` | Uint8Array |

**Returns:** *boolean*

___

###  every

▸ **every**(`predicate`: function, `thisArg?`: any): *boolean*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[every](alignedlockablebuffer.md#every)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2078

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **predicate**: *function*

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: any, `offset?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[fill](alignedlockablebuffer.md#fill)*

*Overrides void*

Defined in node_modules/@types/node/globals.d.ts:281

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`offset?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *this*

___

###  filter

▸ **filter**(`predicate`: function, `thisArg?`: any): *Uint8Array*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[filter](alignedlockablebuffer.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2097

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **predicate**: *function*

A function that accepts up to three arguments. The filter method calls
the predicate function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *Uint8Array*

___

###  find

▸ **find**(`predicate`: function, `thisArg?`: any): *number | undefined*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[find](alignedlockablebuffer.md#find)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2108

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`value`: number, `index`: number, `obj`: Uint8Array): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | Uint8Array |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[findIndex](alignedlockablebuffer.md#findindex)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2119

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: number, `index`: number, `obj`: Uint8Array): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`obj` | Uint8Array |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[forEach](alignedlockablebuffer.md#foreach)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2128

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`value`: string | number | [Buffer](alignedlockablebuffer.md#buffer), `byteOffset?`: undefined | number, `encoding?`: undefined | string): *boolean*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[includes](alignedlockablebuffer.md#includes)*

Defined in node_modules/@types/node/globals.d.ts:285

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; [Buffer](alignedlockablebuffer.md#buffer) |
`byteOffset?` | undefined &#124; number |
`encoding?` | undefined &#124; string |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`value`: string | number | Uint8Array, `byteOffset?`: undefined | number, `encoding?`: undefined | string): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[indexOf](alignedlockablebuffer.md#indexof)*

*Overrides void*

Defined in node_modules/@types/node/globals.d.ts:282

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; Uint8Array |
`byteOffset?` | undefined &#124; number |
`encoding?` | undefined &#124; string |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[join](alignedlockablebuffer.md#join)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2143

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[keys](alignedlockablebuffer.md#keys)*

Defined in node_modules/@types/node/globals.d.ts:286

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`value`: string | number | Uint8Array, `byteOffset?`: undefined | number, `encoding?`: undefined | string): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[lastIndexOf](alignedlockablebuffer.md#lastindexof)*

*Overrides void*

Defined in node_modules/@types/node/globals.d.ts:283

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; Uint8Array |
`byteOffset?` | undefined &#124; number |
`encoding?` | undefined &#124; string |

**Returns:** *number*

___

###  map

▸ **map**(`callbackfn`: function, `thisArg?`: any): *Uint8Array*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[map](alignedlockablebuffer.md#map)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2166

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *Uint8Array*

___

###  readDoubleBE

▸ **readDoubleBE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readDoubleBE](alignedlockablebuffer.md#readdoublebe)*

Defined in node_modules/@types/node/globals.d.ts:263

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readDoubleLE

▸ **readDoubleLE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readDoubleLE](alignedlockablebuffer.md#readdoublele)*

Defined in node_modules/@types/node/globals.d.ts:262

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readFloatBE

▸ **readFloatBE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readFloatBE](alignedlockablebuffer.md#readfloatbe)*

Defined in node_modules/@types/node/globals.d.ts:261

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readFloatLE

▸ **readFloatLE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readFloatLE](alignedlockablebuffer.md#readfloatle)*

Defined in node_modules/@types/node/globals.d.ts:260

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readInt16BE

▸ **readInt16BE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readInt16BE](alignedlockablebuffer.md#readint16be)*

Defined in node_modules/@types/node/globals.d.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readInt16LE

▸ **readInt16LE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readInt16LE](alignedlockablebuffer.md#readint16le)*

Defined in node_modules/@types/node/globals.d.ts:256

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readInt32BE

▸ **readInt32BE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readInt32BE](alignedlockablebuffer.md#readint32be)*

Defined in node_modules/@types/node/globals.d.ts:259

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readInt32LE

▸ **readInt32LE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readInt32LE](alignedlockablebuffer.md#readint32le)*

Defined in node_modules/@types/node/globals.d.ts:258

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readInt8

▸ **readInt8**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readInt8](alignedlockablebuffer.md#readint8)*

Defined in node_modules/@types/node/globals.d.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readIntBE

▸ **readIntBE**(`offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readIntBE](alignedlockablebuffer.md#readintbe)*

Defined in node_modules/@types/node/globals.d.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readIntLE

▸ **readIntLE**(`offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readIntLE](alignedlockablebuffer.md#readintle)*

Defined in node_modules/@types/node/globals.d.ts:248

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUInt16BE

▸ **readUInt16BE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUInt16BE](alignedlockablebuffer.md#readuint16be)*

Defined in node_modules/@types/node/globals.d.ts:252

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUInt16LE

▸ **readUInt16LE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUInt16LE](alignedlockablebuffer.md#readuint16le)*

Defined in node_modules/@types/node/globals.d.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUInt32BE

▸ **readUInt32BE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUInt32BE](alignedlockablebuffer.md#readuint32be)*

Defined in node_modules/@types/node/globals.d.ts:254

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUInt32LE

▸ **readUInt32LE**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUInt32LE](alignedlockablebuffer.md#readuint32le)*

Defined in node_modules/@types/node/globals.d.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUInt8

▸ **readUInt8**(`offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUInt8](alignedlockablebuffer.md#readuint8)*

Defined in node_modules/@types/node/globals.d.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUIntBE

▸ **readUIntBE**(`offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUIntBE](alignedlockablebuffer.md#readuintbe)*

Defined in node_modules/@types/node/globals.d.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  readUIntLE

▸ **readUIntLE**(`offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[readUIntLE](alignedlockablebuffer.md#readuintle)*

Defined in node_modules/@types/node/globals.d.ts:246

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduce](alignedlockablebuffer.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2178

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

**Returns:** *number*

▸ **reduce**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduce](alignedlockablebuffer.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2179

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduce**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduce](alignedlockablebuffer.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2191

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduceRight](alignedlockablebuffer.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2203

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

**Returns:** *number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: number): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduceRight](alignedlockablebuffer.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2204

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: number, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | number |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

▪ **initialValue**: *number*

**Returns:** *number*

▸ **reduceRight**‹**U**›(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reduceRight](alignedlockablebuffer.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2216

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: number, `currentIndex`: number, `array`: Uint8Array): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | number |
`currentIndex` | number |
`array` | Uint8Array |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *Uint8Array*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[reverse](alignedlockablebuffer.md#reverse)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2221

Reverses the elements in an Array.

**Returns:** *Uint8Array*

___

###  set

▸ **set**(`array`: ArrayLike‹number›, `offset?`: undefined | number): *void*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[set](alignedlockablebuffer.md#set)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2228

Sets a value or an array of values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | ArrayLike‹number› | A typed or untyped array of values to set. |
`offset?` | undefined &#124; number | The index in the current array at which the values are to be written.  |

**Returns:** *void*

___

###  some

▸ **some**(`predicate`: function, `thisArg?`: any): *boolean*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[some](alignedlockablebuffer.md#some)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2245

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **predicate**: *function*

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: number, `index`: number, `array`: Uint8Array): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`index` | number |
`array` | Uint8Array |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[sort](alignedlockablebuffer.md#sort)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2256

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  subarray

▸ **subarray**(`begin?`: undefined | number, `end?`: undefined | number): *Uint8Array*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[subarray](alignedlockablebuffer.md#subarray)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2264

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`begin?` | undefined &#124; number | The index of the beginning of the array. |
`end?` | undefined &#124; number | The index of the end of the array.  |

**Returns:** *Uint8Array*

___

###  swap16

▸ **swap16**(): *[Buffer](alignedlockablebuffer.md#buffer)*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[swap16](alignedlockablebuffer.md#swap16)*

Defined in node_modules/@types/node/globals.d.ts:264

**Returns:** *[Buffer](alignedlockablebuffer.md#buffer)*

___

###  swap32

▸ **swap32**(): *[Buffer](alignedlockablebuffer.md#buffer)*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[swap32](alignedlockablebuffer.md#swap32)*

Defined in node_modules/@types/node/globals.d.ts:265

**Returns:** *[Buffer](alignedlockablebuffer.md#buffer)*

___

###  swap64

▸ **swap64**(): *[Buffer](alignedlockablebuffer.md#buffer)*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[swap64](alignedlockablebuffer.md#swap64)*

Defined in node_modules/@types/node/globals.d.ts:266

**Returns:** *[Buffer](alignedlockablebuffer.md#buffer)*

___

###  toJSON

▸ **toJSON**(): *object*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[toJSON](alignedlockablebuffer.md#tojson)*

Defined in node_modules/@types/node/globals.d.ts:237

**Returns:** *object*

* **data**: *any[]*

* **type**: *"Buffer"*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[toLocaleString](alignedlockablebuffer.md#tolocalestring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2269

Converts a number to a string by using the current locale.

**Returns:** *string*

___

###  toString

▸ **toString**(`encoding?`: undefined | string, `start?`: undefined | number, `end?`: undefined | number): *string*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[toString](alignedlockablebuffer.md#tostring)*

*Overrides void*

Defined in node_modules/@types/node/globals.d.ts:236

**Parameters:**

Name | Type |
------ | ------ |
`encoding?` | undefined &#124; string |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *Uint8Array*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[valueOf](alignedlockablebuffer.md#valueof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:2277

Returns the primitive value of the specified object.

**Returns:** *Uint8Array*

___

###  values

▸ **values**(): *IterableIterator‹number›*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[values](alignedlockablebuffer.md#values)*

Defined in node_modules/@types/node/globals.d.ts:287

**Returns:** *IterableIterator‹number›*

___

###  write

▸ **write**(`string`: string, `offset?`: undefined | number, `length?`: undefined | number, `encoding?`: undefined | string): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[write](alignedlockablebuffer.md#write)*

Defined in node_modules/@types/node/globals.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`offset?` | undefined &#124; number |
`length?` | undefined &#124; number |
`encoding?` | undefined &#124; string |

**Returns:** *number*

___

###  writeDoubleBE

▸ **writeDoubleBE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeDoubleBE](alignedlockablebuffer.md#writedoublebe)*

Defined in node_modules/@types/node/globals.d.ts:280

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeDoubleLE

▸ **writeDoubleLE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeDoubleLE](alignedlockablebuffer.md#writedoublele)*

Defined in node_modules/@types/node/globals.d.ts:279

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeFloatBE

▸ **writeFloatBE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeFloatBE](alignedlockablebuffer.md#writefloatbe)*

Defined in node_modules/@types/node/globals.d.ts:278

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeFloatLE

▸ **writeFloatLE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeFloatLE](alignedlockablebuffer.md#writefloatle)*

Defined in node_modules/@types/node/globals.d.ts:277

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeInt16BE

▸ **writeInt16BE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeInt16BE](alignedlockablebuffer.md#writeint16be)*

Defined in node_modules/@types/node/globals.d.ts:274

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeInt16LE

▸ **writeInt16LE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeInt16LE](alignedlockablebuffer.md#writeint16le)*

Defined in node_modules/@types/node/globals.d.ts:273

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeInt32BE

▸ **writeInt32BE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeInt32BE](alignedlockablebuffer.md#writeint32be)*

Defined in node_modules/@types/node/globals.d.ts:276

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeInt32LE

▸ **writeInt32LE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeInt32LE](alignedlockablebuffer.md#writeint32le)*

Defined in node_modules/@types/node/globals.d.ts:275

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeInt8

▸ **writeInt8**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeInt8](alignedlockablebuffer.md#writeint8)*

Defined in node_modules/@types/node/globals.d.ts:272

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeIntBE

▸ **writeIntBE**(`value`: number, `offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeIntBE](alignedlockablebuffer.md#writeintbe)*

Defined in node_modules/@types/node/globals.d.ts:245

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeIntLE

▸ **writeIntLE**(`value`: number, `offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeIntLE](alignedlockablebuffer.md#writeintle)*

Defined in node_modules/@types/node/globals.d.ts:244

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUInt16BE

▸ **writeUInt16BE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUInt16BE](alignedlockablebuffer.md#writeuint16be)*

Defined in node_modules/@types/node/globals.d.ts:269

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUInt16LE

▸ **writeUInt16LE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUInt16LE](alignedlockablebuffer.md#writeuint16le)*

Defined in node_modules/@types/node/globals.d.ts:268

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUInt32BE

▸ **writeUInt32BE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUInt32BE](alignedlockablebuffer.md#writeuint32be)*

Defined in node_modules/@types/node/globals.d.ts:271

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUInt32LE

▸ **writeUInt32LE**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUInt32LE](alignedlockablebuffer.md#writeuint32le)*

Defined in node_modules/@types/node/globals.d.ts:270

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUInt8

▸ **writeUInt8**(`value`: number, `offset`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUInt8](alignedlockablebuffer.md#writeuint8)*

Defined in node_modules/@types/node/globals.d.ts:267

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUIntBE

▸ **writeUIntBE**(`value`: number, `offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUIntBE](alignedlockablebuffer.md#writeuintbe)*

Defined in node_modules/@types/node/globals.d.ts:243

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*

___

###  writeUIntLE

▸ **writeUIntLE**(`value`: number, `offset`: number, `byteLength`: number, `noAssert?`: undefined | false | true): *number*

*Inherited from [AlignedLockableBuffer](alignedlockablebuffer.md).[writeUIntLE](alignedlockablebuffer.md#writeuintle)*

Defined in node_modules/@types/node/globals.d.ts:242

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`offset` | number |
`byteLength` | number |
`noAssert?` | undefined &#124; false &#124; true |

**Returns:** *number*
