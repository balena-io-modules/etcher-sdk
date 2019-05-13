[etcher-sdk](../README.md) > [SourceDisk](../classes/sourcedisk.md)

# Class: SourceDisk

## Hierarchy

 `Disk`

**↳ SourceDisk**

## Index

### Constructors

* [constructor](sourcedisk.md#constructor)

### Properties

* [capacity](sourcedisk.md#capacity)
* [discardIsZero](sourcedisk.md#discardiszero)
* [knownChunks](sourcedisk.md#knownchunks)
* [readOnly](sourcedisk.md#readonly)
* [recordReads](sourcedisk.md#recordreads)
* [recordWrites](sourcedisk.md#recordwrites)
* [source](sourcedisk.md#source)

### Methods

* [_flush](sourcedisk.md#_flush)
* [_getCapacity](sourcedisk.md#_getcapacity)
* [_read](sourcedisk.md#_read)
* [_write](sourcedisk.md#_write)
* [discard](sourcedisk.md#discard)
* [flush](sourcedisk.md#flush)
* [getCapacity](sourcedisk.md#getcapacity)
* [getDiscardedChunks](sourcedisk.md#getdiscardedchunks)
* [getRanges](sourcedisk.md#getranges)
* [getStream](sourcedisk.md#getstream)
* [getTransformStream](sourcedisk.md#gettransformstream)
* [read](sourcedisk.md#read)
* [write](sourcedisk.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourceDisk**(source: *[SourceDestination](sourcedestination.md)*): [SourceDisk](sourcedisk.md)

*Overrides Disk.__constructor*

*Defined in [source-destination/configured-source/configured-source.ts:43](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](sourcedestination.md) |

**Returns:** [SourceDisk](sourcedisk.md)

___

## Properties

<a id="capacity"></a>

###  capacity

**● capacity**: *`number` \| `null`*

*Inherited from Disk.capacity*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:26*

___
<a id="discardiszero"></a>

###  discardIsZero

**● discardIsZero**: *`boolean`*

*Inherited from Disk.discardIsZero*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:24*

___
<a id="knownchunks"></a>

###  knownChunks

**● knownChunks**: *`DiskChunk`[]*

*Inherited from Disk.knownChunks*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:25*

___
<a id="readonly"></a>

###  readOnly

**● readOnly**: *`boolean`*

*Inherited from Disk.readOnly*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:21*

___
<a id="recordreads"></a>

###  recordReads

**● recordReads**: *`boolean`*

*Inherited from Disk.recordReads*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:23*

___
<a id="recordwrites"></a>

###  recordWrites

**● recordWrites**: *`boolean`*

*Inherited from Disk.recordWrites*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:22*

___
<a id="source"></a>

### `<Private>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Defined in [source-destination/configured-source/configured-source.ts:44](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L44)*

___

## Methods

<a id="_flush"></a>

### `<Protected>` _flush

▸ **_flush**(): `Promise`<`void`>

*Overrides Disk._flush*

*Defined in [source-destination/configured-source/configured-source.ts:80](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L80)*

**Returns:** `Promise`<`void`>

___
<a id="_getcapacity"></a>

### `<Protected>` _getCapacity

▸ **_getCapacity**(): `Promise`<`number`>

*Overrides Disk._getCapacity*

*Defined in [source-destination/configured-source/configured-source.ts:53](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L53)*

**Returns:** `Promise`<`number`>

___
<a id="_read"></a>

### `<Protected>` _read

▸ **_read**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`ReadResult`>

*Overrides Disk._read*

*Defined in [source-destination/configured-source/configured-source.ts:62](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| fileOffset | `number` |

**Returns:** `Promise`<`ReadResult`>

___
<a id="_write"></a>

### `<Protected>` _write

▸ **_write**(_buffer: *`Buffer`*, _bufferOffset: *`number`*, _length: *`number`*, _fileOffset: *`number`*): `Promise`<`WriteResult`>

*Overrides Disk._write*

*Defined in [source-destination/configured-source/configured-source.ts:71](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/configured-source/configured-source.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _buffer | `Buffer` |
| _bufferOffset | `number` |
| _length | `number` |
| _fileOffset | `number` |

**Returns:** `Promise`<`WriteResult`>

___
<a id="discard"></a>

###  discard

▸ **discard**(offset: *`number`*, length: *`number`*): `Promise`<`void`>

*Inherited from Disk.discard*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:36*

**Parameters:**

| Name | Type |
| ------ | ------ |
| offset | `number` |
| length | `number` |

**Returns:** `Promise`<`void`>

___
<a id="flush"></a>

###  flush

▸ **flush**(): `Promise`<`void`>

*Inherited from Disk.flush*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:35*

**Returns:** `Promise`<`void`>

___
<a id="getcapacity"></a>

###  getCapacity

▸ **getCapacity**(): `Promise`<`number`>

*Inherited from Disk.getCapacity*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:37*

**Returns:** `Promise`<`number`>

___
<a id="getdiscardedchunks"></a>

###  getDiscardedChunks

▸ **getDiscardedChunks**(): `DiskChunk`[]

*Inherited from Disk.getDiscardedChunks*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:39*

**Returns:** `DiskChunk`[]

___
<a id="getranges"></a>

###  getRanges

▸ **getRanges**(blockSize: *`number`*): `Promise`<`Range`[]>

*Inherited from Disk.getRanges*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:40*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockSize | `number` |

**Returns:** `Promise`<`Range`[]>

___
<a id="getstream"></a>

###  getStream

▸ **getStream**(position?: *`undefined` \| `number`*, length?: *`number` \| `null`*, highWaterMark?: *`undefined` \| `number`*): `Promise`<`DiskStream`>

*Inherited from Disk.getStream*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:38*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` position | `undefined` \| `number` |
| `Optional` length | `number` \| `null` |
| `Optional` highWaterMark | `undefined` \| `number` |

**Returns:** `Promise`<`DiskStream`>

___
<a id="gettransformstream"></a>

###  getTransformStream

▸ **getTransformStream**(): `Transform`

*Inherited from Disk.getTransformStream*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:32*

**Returns:** `Transform`

___
<a id="read"></a>

###  read

▸ **read**(buffer: *`Buffer`*, _bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`fs.ReadResult`>

*Inherited from Disk.read*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:33*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| _bufferOffset | `number` |
| length | `number` |
| fileOffset | `number` |

**Returns:** `Promise`<`fs.ReadResult`>

___
<a id="write"></a>

###  write

▸ **write**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, fileOffset: *`number`*): `Promise`<`fs.WriteResult`>

*Inherited from Disk.write*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/file-disk/build/index.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| fileOffset | `number` |

**Returns:** `Promise`<`fs.WriteResult`>

___

