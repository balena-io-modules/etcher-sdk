[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / SourceDisk

# Class: SourceDisk

[sourceDestination](../modules/sourceDestination.md).SourceDisk

## Hierarchy

- `Disk`

  ↳ **`SourceDisk`**

## Table of contents

### Constructors

- [constructor](sourceDestination.SourceDisk.md#constructor)

### Properties

- [capacity](sourceDestination.SourceDisk.md#capacity)
- [discardIsZero](sourceDestination.SourceDisk.md#discardiszero)
- [knownChunks](sourceDestination.SourceDisk.md#knownchunks)
- [readOnly](sourceDestination.SourceDisk.md#readonly)
- [recordReads](sourceDestination.SourceDisk.md#recordreads)
- [recordWrites](sourceDestination.SourceDisk.md#recordwrites)
- [source](sourceDestination.SourceDisk.md#source)

### Methods

- [\_flush](sourceDestination.SourceDisk.md#_flush)
- [\_getCapacity](sourceDestination.SourceDisk.md#_getcapacity)
- [\_read](sourceDestination.SourceDisk.md#_read)
- [\_write](sourceDestination.SourceDisk.md#_write)
- [discard](sourceDestination.SourceDisk.md#discard)
- [flush](sourceDestination.SourceDisk.md#flush)
- [getCapacity](sourceDestination.SourceDisk.md#getcapacity)
- [getDiscardedChunks](sourceDestination.SourceDisk.md#getdiscardedchunks)
- [getRanges](sourceDestination.SourceDisk.md#getranges)
- [getStream](sourceDestination.SourceDisk.md#getstream)
- [getTransformStream](sourceDestination.SourceDisk.md#gettransformstream)
- [read](sourceDestination.SourceDisk.md#read)
- [write](sourceDestination.SourceDisk.md#write)

## Constructors

### constructor

• **new SourceDisk**(`source`): [`SourceDisk`](sourceDestination.SourceDisk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceDestination`](sourceDestination.SourceDestination.md) |

#### Returns

[`SourceDisk`](sourceDestination.SourceDisk.md)

#### Overrides

Disk.constructor

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L52)

## Properties

### capacity

• **capacity**: ``null`` \| `number`

#### Inherited from

Disk.capacity

#### Defined in

node_modules/file-disk/build/index.d.ts:32

___

### discardIsZero

• **discardIsZero**: `boolean`

#### Inherited from

Disk.discardIsZero

#### Defined in

node_modules/file-disk/build/index.d.ts:30

___

### knownChunks

• `Readonly` **knownChunks**: `DiskChunk`[]

#### Inherited from

Disk.knownChunks

#### Defined in

node_modules/file-disk/build/index.d.ts:31

___

### readOnly

• **readOnly**: `boolean`

#### Inherited from

Disk.readOnly

#### Defined in

node_modules/file-disk/build/index.d.ts:27

___

### recordReads

• **recordReads**: `boolean`

#### Inherited from

Disk.recordReads

#### Defined in

node_modules/file-disk/build/index.d.ts:29

___

### recordWrites

• **recordWrites**: `boolean`

#### Inherited from

Disk.recordWrites

#### Defined in

node_modules/file-disk/build/index.d.ts:28

___

### source

• `Private` **source**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L52)

## Methods

### \_flush

▸ **_flush**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

Disk.\_flush

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:94](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L94)

___

### \_getCapacity

▸ **_getCapacity**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Overrides

Disk.\_getCapacity

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L67)

___

### \_read

▸ **_read**(`buffer`, `bufferOffset`, `length`, `fileOffset`): `Promise`<`ReadResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `fileOffset` | `number` |

#### Returns

`Promise`<`ReadResult`\>

#### Overrides

Disk.\_read

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L76)

___

### \_write

▸ **_write**(`_buffer`, `_bufferOffset`, `_length`, `_fileOffset`): `Promise`<`WriteResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_buffer` | `Buffer` |
| `_bufferOffset` | `number` |
| `_length` | `number` |
| `_fileOffset` | `number` |

#### Returns

`Promise`<`WriteResult`\>

#### Overrides

Disk.\_write

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L85)

___

### discard

▸ **discard**(`offset`, `length`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `length` | `number` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Disk.discard

#### Defined in

node_modules/file-disk/build/index.d.ts:42

___

### flush

▸ **flush**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Disk.flush

#### Defined in

node_modules/file-disk/build/index.d.ts:41

___

### getCapacity

▸ **getCapacity**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

Disk.getCapacity

#### Defined in

node_modules/file-disk/build/index.d.ts:43

___

### getDiscardedChunks

▸ **getDiscardedChunks**(): `DiskChunk`[]

#### Returns

`DiskChunk`[]

#### Inherited from

Disk.getDiscardedChunks

#### Defined in

node_modules/file-disk/build/index.d.ts:45

___

### getRanges

▸ **getRanges**(`blockSize`): `Promise`<`Range`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockSize` | `number` |

#### Returns

`Promise`<`Range`[]\>

#### Inherited from

Disk.getRanges

#### Defined in

node_modules/file-disk/build/index.d.ts:46

___

### getStream

▸ **getStream**(`position?`, `length?`, `highWaterMark?`): `Promise`<`DiskStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | `number` |
| `length?` | ``null`` \| `number` |
| `highWaterMark?` | `number` |

#### Returns

`Promise`<`DiskStream`\>

#### Inherited from

Disk.getStream

#### Defined in

node_modules/file-disk/build/index.d.ts:44

___

### getTransformStream

▸ **getTransformStream**(): `Transform`

#### Returns

`Transform`

#### Inherited from

Disk.getTransformStream

#### Defined in

node_modules/file-disk/build/index.d.ts:38

___

### read

▸ **read**(`buffer`, `_bufferOffset`, `length`, `fileOffset`): `Promise`<`ReadResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `_bufferOffset` | `number` |
| `length` | `number` |
| `fileOffset` | `number` |

#### Returns

`Promise`<`ReadResult`\>

#### Inherited from

Disk.read

#### Defined in

node_modules/file-disk/build/index.d.ts:39

___

### write

▸ **write**(`buffer`, `bufferOffset`, `length`, `fileOffset`): `Promise`<`WriteResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `fileOffset` | `number` |

#### Returns

`Promise`<`WriteResult`\>

#### Inherited from

Disk.write

#### Defined in

node_modules/file-disk/build/index.d.ts:40
