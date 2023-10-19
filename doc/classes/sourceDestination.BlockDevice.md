[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / BlockDevice

# Class: BlockDevice

[sourceDestination](../modules/sourceDestination.md).BlockDevice

## Hierarchy

- [`File`](sourceDestination.File.md)

  ↳ **`BlockDevice`**

## Implements

- [`AdapterSourceDestination`](../interfaces/scanner.adapters.AdapterSourceDestination.md)

## Table of contents

### Constructors

- [constructor](sourceDestination.BlockDevice.md#constructor)

### Properties

- [alignment](sourceDestination.BlockDevice.md#alignment)
- [drive](sourceDestination.BlockDevice.md#drive)
- [emitsProgress](sourceDestination.BlockDevice.md#emitsprogress)
- [fileHandle](sourceDestination.BlockDevice.md#filehandle)
- [keepOriginal](sourceDestination.BlockDevice.md#keeporiginal)
- [oDirect](sourceDestination.BlockDevice.md#odirect)
- [oWrite](sourceDestination.BlockDevice.md#owrite)
- [path](sourceDestination.BlockDevice.md#path)
- [unmountOnSuccess](sourceDestination.BlockDevice.md#unmountonsuccess)
- [captureRejectionSymbol](sourceDestination.BlockDevice.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.BlockDevice.md#capturerejections)
- [defaultMaxListeners](sourceDestination.BlockDevice.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.BlockDevice.md#errormonitor)
- [imageExtensions](sourceDestination.BlockDevice.md#imageextensions)
- [mimetype](sourceDestination.BlockDevice.md#mimetype)

### Accessors

- [description](sourceDestination.BlockDevice.md#description)
- [device](sourceDestination.BlockDevice.md#device)
- [devicePath](sourceDestination.BlockDevice.md#devicepath)
- [isSystem](sourceDestination.BlockDevice.md#issystem)
- [mountpoints](sourceDestination.BlockDevice.md#mountpoints)
- [raw](sourceDestination.BlockDevice.md#raw)
- [size](sourceDestination.BlockDevice.md#size)

### Methods

- [[captureRejectionSymbol]](sourceDestination.BlockDevice.md#[capturerejectionsymbol])
- [\_close](sourceDestination.BlockDevice.md#_close)
- [\_getMetadata](sourceDestination.BlockDevice.md#_getmetadata)
- [\_open](sourceDestination.BlockDevice.md#_open)
- [addListener](sourceDestination.BlockDevice.md#addlistener)
- [alignOffsetAfter](sourceDestination.BlockDevice.md#alignoffsetafter)
- [alignOffsetBefore](sourceDestination.BlockDevice.md#alignoffsetbefore)
- [alignedRead](sourceDestination.BlockDevice.md#alignedread)
- [alignedWrite](sourceDestination.BlockDevice.md#alignedwrite)
- [canCreateReadStream](sourceDestination.BlockDevice.md#cancreatereadstream)
- [canCreateSparseReadStream](sourceDestination.BlockDevice.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](sourceDestination.BlockDevice.md#cancreatesparsewritestream)
- [canCreateWriteStream](sourceDestination.BlockDevice.md#cancreatewritestream)
- [canRead](sourceDestination.BlockDevice.md#canread)
- [canWrite](sourceDestination.BlockDevice.md#canwrite)
- [close](sourceDestination.BlockDevice.md#close)
- [createReadStream](sourceDestination.BlockDevice.md#createreadstream)
- [createSparseReadStream](sourceDestination.BlockDevice.md#createsparsereadstream)
- [createSparseWriteStream](sourceDestination.BlockDevice.md#createsparsewritestream)
- [createVerifier](sourceDestination.BlockDevice.md#createverifier)
- [createWriteStream](sourceDestination.BlockDevice.md#createwritestream)
- [emit](sourceDestination.BlockDevice.md#emit)
- [eventNames](sourceDestination.BlockDevice.md#eventnames)
- [getAlignment](sourceDestination.BlockDevice.md#getalignment)
- [getBlocks](sourceDestination.BlockDevice.md#getblocks)
- [getInnerSource](sourceDestination.BlockDevice.md#getinnersource)
- [getMaxListeners](sourceDestination.BlockDevice.md#getmaxlisteners)
- [getMetadata](sourceDestination.BlockDevice.md#getmetadata)
- [getOpenFlags](sourceDestination.BlockDevice.md#getopenflags)
- [getPartitionTable](sourceDestination.BlockDevice.md#getpartitiontable)
- [listenerCount](sourceDestination.BlockDevice.md#listenercount)
- [listeners](sourceDestination.BlockDevice.md#listeners)
- [off](sourceDestination.BlockDevice.md#off)
- [offsetIsAligned](sourceDestination.BlockDevice.md#offsetisaligned)
- [on](sourceDestination.BlockDevice.md#on)
- [once](sourceDestination.BlockDevice.md#once)
- [open](sourceDestination.BlockDevice.md#open)
- [prependListener](sourceDestination.BlockDevice.md#prependlistener)
- [prependOnceListener](sourceDestination.BlockDevice.md#prependoncelistener)
- [rawListeners](sourceDestination.BlockDevice.md#rawlisteners)
- [read](sourceDestination.BlockDevice.md#read)
- [removeAllListeners](sourceDestination.BlockDevice.md#removealllisteners)
- [removeListener](sourceDestination.BlockDevice.md#removelistener)
- [setMaxListeners](sourceDestination.BlockDevice.md#setmaxlisteners)
- [write](sourceDestination.BlockDevice.md#write)
- [addAbortListener](sourceDestination.BlockDevice.md#addabortlistener)
- [getEventListeners](sourceDestination.BlockDevice.md#geteventlisteners)
- [getMaxListeners](sourceDestination.BlockDevice.md#getmaxlisteners-1)
- [listenerCount](sourceDestination.BlockDevice.md#listenercount-1)
- [on](sourceDestination.BlockDevice.md#on-1)
- [once](sourceDestination.BlockDevice.md#once-1)
- [register](sourceDestination.BlockDevice.md#register)
- [setMaxListeners](sourceDestination.BlockDevice.md#setmaxlisteners-1)

## Constructors

### constructor

• **new BlockDevice**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `direct?` | `boolean` |
| › `drive` | `Drive` |
| › `keepOriginal?` | `boolean` |
| › `unmountOnSuccess?` | `boolean` |
| › `write?` | `boolean` |

#### Overrides

[File](sourceDestination.File.md).[constructor](sourceDestination.File.md#constructor)

#### Defined in

[lib/source-destination/block-device.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L53)

## Properties

### alignment

• `Readonly` **alignment**: `number`

#### Defined in

[lib/source-destination/block-device.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L51)

___

### drive

• `Private` **drive**: `Drive`

#### Defined in

[lib/source-destination/block-device.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L46)

___

### emitsProgress

• **emitsProgress**: `boolean` = `false`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[emitsProgress](../interfaces/scanner.adapters.AdapterSourceDestination.md#emitsprogress)

#### Defined in

[lib/source-destination/block-device.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L49)

___

### fileHandle

• `Protected` **fileHandle**: `FileHandle`

#### Inherited from

[File](sourceDestination.File.md).[fileHandle](sourceDestination.File.md#filehandle)

#### Defined in

[lib/source-destination/file.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L48)

___

### keepOriginal

• `Private` **keepOriginal**: `boolean` = `false`

#### Defined in

[lib/source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L50)

___

### oDirect

• **oDirect**: `boolean`

#### Defined in

[lib/source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L48)

___

### oWrite

• **oWrite**: `boolean`

#### Inherited from

[File](sourceDestination.File.md).[oWrite](sourceDestination.File.md#owrite)

#### Defined in

[lib/source-destination/file.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L47)

___

### path

• `Readonly` **path**: `string`

#### Inherited from

[File](sourceDestination.File.md).[path](sourceDestination.File.md#path)

#### Defined in

[lib/source-destination/file.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L46)

___

### unmountOnSuccess

• `Private` **unmountOnSuccess**: `boolean`

#### Defined in

[lib/source-destination/block-device.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L47)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Inherited from

[File](sourceDestination.File.md).[captureRejectionSymbol](sourceDestination.File.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[File](sourceDestination.File.md).[captureRejections](sourceDestination.File.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[File](sourceDestination.File.md).[defaultMaxListeners](sourceDestination.File.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:411

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](scanner.adapters.Adapter.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[File](sourceDestination.File.md).[errorMonitor](sourceDestination.File.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:404

___

### imageExtensions

▪ `Static` `Readonly` **imageExtensions**: `string`[]

#### Inherited from

[File](sourceDestination.File.md).[imageExtensions](sourceDestination.File.md#imageextensions)

#### Defined in

[lib/source-destination/source-destination.ts:295](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L295)

___

### mimetype

▪ `Static` `Optional` `Readonly` **mimetype**: `string`

#### Inherited from

[File](sourceDestination.File.md).[mimetype](sourceDestination.File.md#mimetype)

#### Defined in

[lib/source-destination/source-destination.ts:307](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L307)

## Accessors

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[description](../interfaces/scanner.adapters.AdapterSourceDestination.md#description)

#### Defined in

[lib/source-destination/block-device.ts:119](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L119)

___

### device

• `get` **device**(): `string`

#### Returns

`string`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[device](../interfaces/scanner.adapters.AdapterSourceDestination.md#device)

#### Defined in

[lib/source-destination/block-device.ts:111](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L111)

___

### devicePath

• `get` **devicePath**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[devicePath](../interfaces/scanner.adapters.AdapterSourceDestination.md#devicepath)

#### Defined in

[lib/source-destination/block-device.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L115)

___

### isSystem

• `get` **isSystem**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[isSystem](../interfaces/scanner.adapters.AdapterSourceDestination.md#issystem)

#### Defined in

[lib/source-destination/block-device.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L103)

___

### mountpoints

• `get` **mountpoints**(): `Mountpoint`[]

#### Returns

`Mountpoint`[]

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[mountpoints](../interfaces/scanner.adapters.AdapterSourceDestination.md#mountpoints)

#### Defined in

[lib/source-destination/block-device.ts:123](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L123)

___

### raw

• `get` **raw**(): `string`

#### Returns

`string`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[raw](../interfaces/scanner.adapters.AdapterSourceDestination.md#raw)

#### Defined in

[lib/source-destination/block-device.ts:107](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L107)

___

### size

• `get` **size**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[size](../interfaces/scanner.adapters.AdapterSourceDestination.md#size)

#### Defined in

[lib/source-destination/block-device.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L127)

## Methods

### [captureRejectionSymbol]

▸ `Optional` **[captureRejectionSymbol]**(`error`, `event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[[captureRejectionSymbol]](../interfaces/scanner.adapters.AdapterSourceDestination.md#[capturerejectionsymbol])

#### Inherited from

[File](sourceDestination.File.md).[[captureRejectionSymbol]](sourceDestination.File.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### \_close

▸ `Protected` **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[_close](../interfaces/scanner.adapters.AdapterSourceDestination.md#_close)

#### Overrides

[File](sourceDestination.File.md).[_close](sourceDestination.File.md#_close)

#### Defined in

[lib/source-destination/block-device.ts:199](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L199)

___

### \_getMetadata

▸ `Protected` **_getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[_getMetadata](../interfaces/scanner.adapters.AdapterSourceDestination.md#_getmetadata)

#### Overrides

[File](sourceDestination.File.md).[_getMetadata](sourceDestination.File.md#_getmetadata)

#### Defined in

[lib/source-destination/block-device.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L131)

___

### \_open

▸ `Protected` **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[_open](../interfaces/scanner.adapters.AdapterSourceDestination.md#_open)

#### Overrides

[File](sourceDestination.File.md).[_open](sourceDestination.File.md#_open)

#### Defined in

[lib/source-destination/block-device.ts:179](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L179)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.1.26

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[addListener](../interfaces/scanner.adapters.AdapterSourceDestination.md#addlistener)

#### Inherited from

[File](sourceDestination.File.md).[addListener](sourceDestination.File.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:475

___

### alignOffsetAfter

▸ `Private` **alignOffsetAfter**(`offset`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

[lib/source-destination/block-device.ts:220](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L220)

___

### alignOffsetBefore

▸ `Private` **alignOffsetBefore**(`offset`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

[lib/source-destination/block-device.ts:216](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L216)

___

### alignedRead

▸ `Private` **alignedRead**(`buffer`, `bufferOffset`, `length`, `sourceOffset`): `Promise`<`ReadResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `sourceOffset` | `number` |

#### Returns

`Promise`<`ReadResult`\>

#### Defined in

[lib/source-destination/block-device.ts:224](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L224)

___

### alignedWrite

▸ `Private` **alignedWrite**(`buffer`, `bufferOffset`, `length`, `fileOffset`): `Promise`<`WriteResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `fileOffset` | `number` |

#### Returns

`Promise`<`WriteResult`\>

#### Defined in

[lib/source-destination/block-device.ts:257](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L257)

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canCreateReadStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#cancreatereadstream)

#### Inherited from

[File](sourceDestination.File.md).[canCreateReadStream](sourceDestination.File.md#cancreatereadstream)

#### Defined in

[lib/source-destination/file.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L71)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canCreateSparseReadStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#cancreatesparsereadstream)

#### Inherited from

[File](sourceDestination.File.md).[canCreateSparseReadStream](sourceDestination.File.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L335)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canCreateSparseWriteStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#cancreatesparsewritestream)

#### Overrides

[File](sourceDestination.File.md).[canCreateSparseWriteStream](sourceDestination.File.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/block-device.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L146)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canCreateWriteStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#cancreatewritestream)

#### Overrides

[File](sourceDestination.File.md).[canCreateWriteStream](sourceDestination.File.md#cancreatewritestream)

#### Defined in

[lib/source-destination/block-device.ts:142](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L142)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canRead](../interfaces/scanner.adapters.AdapterSourceDestination.md#canread)

#### Inherited from

[File](sourceDestination.File.md).[canRead](sourceDestination.File.md#canread)

#### Defined in

[lib/source-destination/file.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L63)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[canWrite](../interfaces/scanner.adapters.AdapterSourceDestination.md#canwrite)

#### Overrides

[File](sourceDestination.File.md).[canWrite](sourceDestination.File.md#canwrite)

#### Defined in

[lib/source-destination/block-device.ts:138](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L138)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[close](../interfaces/scanner.adapters.AdapterSourceDestination.md#close)

#### Inherited from

[File](sourceDestination.File.md).[close](sourceDestination.File.md#close)

#### Defined in

[lib/source-destination/source-destination.ts:411](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L411)

___

### createReadStream

▸ **createReadStream**(`«destructured»?`): `Promise`<`ReadableStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CreateReadStreamOptions`](../interfaces/sourceDestination.CreateReadStreamOptions.md) |

#### Returns

`Promise`<`ReadableStream`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[createReadStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#createreadstream)

#### Inherited from

[File](sourceDestination.File.md).[createReadStream](sourceDestination.File.md#createreadstream)

#### Defined in

[lib/source-destination/file.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/file.ts#L147)

___

### createSparseReadStream

▸ **createSparseReadStream**(`_options?`): `Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`CreateSparseReadStreamOptions`](../interfaces/sourceDestination.CreateSparseReadStreamOptions.md) |

#### Returns

`Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[createSparseReadStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#createsparsereadstream)

#### Inherited from

[File](sourceDestination.File.md).[createSparseReadStream](sourceDestination.File.md#createsparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:382](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L382)

___

### createSparseWriteStream

▸ **createSparseWriteStream**(`«destructured»?`): `Promise`<[`SparseWriteStream`](sparseStream.SparseWriteStream.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `highWaterMark?` | `number` |

#### Returns

`Promise`<[`SparseWriteStream`](sparseStream.SparseWriteStream.md)\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[createSparseWriteStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#createsparsewritestream)

#### Overrides

[File](sourceDestination.File.md).[createSparseWriteStream](sourceDestination.File.md#createsparsewritestream)

#### Defined in

[lib/source-destination/block-device.ts:167](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L167)

___

### createVerifier

▸ **createVerifier**(`checksumOrBlocks`, `size?`): [`Verifier`](sourceDestination.Verifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `checksumOrBlocks` | `string` \| [`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[] |
| `size?` | `number` |

#### Returns

[`Verifier`](sourceDestination.Verifier.md)

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[createVerifier](../interfaces/scanner.adapters.AdapterSourceDestination.md#createverifier)

#### Inherited from

[File](sourceDestination.File.md).[createVerifier](sourceDestination.File.md#createverifier)

#### Defined in

[lib/source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L426)

___

### createWriteStream

▸ **createWriteStream**(`«destructured»?`): `Promise`<`BlockWriteStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `highWaterMark?` | `number` |
| › `startOffset?` | `number` |

#### Returns

`Promise`<`BlockWriteStream`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[createWriteStream](../interfaces/scanner.adapters.AdapterSourceDestination.md#createwritestream)

#### Overrides

[File](sourceDestination.File.md).[createWriteStream](sourceDestination.File.md#createwritestream)

#### Defined in

[lib/source-destination/block-device.ts:150](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L150)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[emit](../interfaces/scanner.adapters.AdapterSourceDestination.md#emit)

#### Inherited from

[File](sourceDestination.File.md).[emit](sourceDestination.File.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:731

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[eventNames](../interfaces/scanner.adapters.AdapterSourceDestination.md#eventnames)

#### Inherited from

[File](sourceDestination.File.md).[eventNames](sourceDestination.File.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getAlignment](../interfaces/scanner.adapters.AdapterSourceDestination.md#getalignment)

#### Overrides

[File](sourceDestination.File.md).[getAlignment](sourceDestination.File.md#getalignment)

#### Defined in

[lib/source-destination/block-device.ts:78](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L78)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getBlocks](../interfaces/scanner.adapters.AdapterSourceDestination.md#getblocks)

#### Inherited from

[File](sourceDestination.File.md).[getBlocks](sourceDestination.File.md#getblocks)

#### Defined in

[lib/source-destination/source-destination.ts:388](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L388)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getInnerSource](../interfaces/scanner.adapters.AdapterSourceDestination.md#getinnersource)

#### Inherited from

[File](sourceDestination.File.md).[getInnerSource](sourceDestination.File.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:501](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L501)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.BlockDevice.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getMaxListeners](../interfaces/scanner.adapters.AdapterSourceDestination.md#getmaxlisteners)

#### Inherited from

[File](sourceDestination.File.md).[getMaxListeners](sourceDestination.File.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getMetadata](../interfaces/scanner.adapters.AdapterSourceDestination.md#getmetadata)

#### Inherited from

[File](sourceDestination.File.md).[getMetadata](sourceDestination.File.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:347](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L347)

___

### getOpenFlags

▸ `Protected` **getOpenFlags**(): `number`

#### Returns

`number`

#### Overrides

[File](sourceDestination.File.md).[getOpenFlags](sourceDestination.File.md#getopenflags)

#### Defined in

[lib/source-destination/block-device.ts:84](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L84)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[getPartitionTable](../interfaces/scanner.adapters.AdapterSourceDestination.md#getpartitiontable)

#### Inherited from

[File](sourceDestination.File.md).[getPartitionTable](sourceDestination.File.md#getpartitiontable)

#### Defined in

[lib/source-destination/source-destination.ts:531](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L531)

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[listenerCount](../interfaces/scanner.adapters.AdapterSourceDestination.md#listenercount)

#### Inherited from

[File](sourceDestination.File.md).[listenerCount](sourceDestination.File.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:741

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[listeners](../interfaces/scanner.adapters.AdapterSourceDestination.md#listeners)

#### Inherited from

[File](sourceDestination.File.md).[listeners](sourceDestination.File.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v10.0.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[off](../interfaces/scanner.adapters.AdapterSourceDestination.md#off)

#### Inherited from

[File](sourceDestination.File.md).[off](sourceDestination.File.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### offsetIsAligned

▸ `Private` **offsetIsAligned**(`offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/source-destination/block-device.ts:212](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L212)

___

### on

▸ **on**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.1.101

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[on](../interfaces/scanner.adapters.AdapterSourceDestination.md#on)

#### Inherited from

[File](sourceDestination.File.md).[on](sourceDestination.File.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:506

___

### once

▸ **once**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.3.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[once](../interfaces/scanner.adapters.AdapterSourceDestination.md#once)

#### Inherited from

[File](sourceDestination.File.md).[once](sourceDestination.File.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[open](../interfaces/scanner.adapters.AdapterSourceDestination.md#open)

#### Inherited from

[File](sourceDestination.File.md).[open](sourceDestination.File.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:404](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L404)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v6.0.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[prependListener](../interfaces/scanner.adapters.AdapterSourceDestination.md#prependlistener)

#### Inherited from

[File](sourceDestination.File.md).[prependListener](sourceDestination.File.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v6.0.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[prependOnceListener](../interfaces/scanner.adapters.AdapterSourceDestination.md#prependoncelistener)

#### Inherited from

[File](sourceDestination.File.md).[prependOnceListener](sourceDestination.File.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:775

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[rawListeners](../interfaces/scanner.adapters.AdapterSourceDestination.md#rawlisteners)

#### Inherited from

[File](sourceDestination.File.md).[rawListeners](sourceDestination.File.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### read

▸ **read**(`buffer`, `bufferOffset`, `length`, `sourceOffset`): `Promise`<`ReadResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `sourceOffset` | `number` |

#### Returns

`Promise`<`ReadResult`\>

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[read](../interfaces/scanner.adapters.AdapterSourceDestination.md#read)

#### Overrides

[File](sourceDestination.File.md).[read](sourceDestination.File.md#read)

#### Defined in

[lib/source-destination/block-device.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L244)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.1.26

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[removeAllListeners](../interfaces/scanner.adapters.AdapterSourceDestination.md#removealllisteners)

#### Inherited from

[File](sourceDestination.File.md).[removeAllListeners](sourceDestination.File.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BlockDevice`](sourceDestination.BlockDevice.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.1.26

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[removeListener](../interfaces/scanner.adapters.AdapterSourceDestination.md#removelistener)

#### Inherited from

[File](sourceDestination.File.md).[removeListener](sourceDestination.File.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`BlockDevice`](sourceDestination.BlockDevice.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`BlockDevice`](sourceDestination.BlockDevice.md)

**`Since`**

v0.3.5

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[setMaxListeners](../interfaces/scanner.adapters.AdapterSourceDestination.md#setmaxlisteners)

#### Inherited from

[File](sourceDestination.File.md).[setMaxListeners](sourceDestination.File.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:641

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

#### Implementation of

[AdapterSourceDestination](../interfaces/scanner.adapters.AdapterSourceDestination.md).[write](../interfaces/scanner.adapters.AdapterSourceDestination.md#write)

#### Overrides

[File](sourceDestination.File.md).[write](sourceDestination.File.md#write)

#### Defined in

[lib/source-destination/block-device.ts:273](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/block-device.ts#L273)

___

### addAbortListener

▸ `Static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

**`Since`**

v18.18.0

#### Inherited from

[File](sourceDestination.File.md).[addAbortListener](sourceDestination.File.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:394

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[File](sourceDestination.File.md).[getEventListeners](sourceDestination.File.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:312

___

### getMaxListeners

▸ `Static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v18.17.0

#### Inherited from

[File](sourceDestination.File.md).[getMaxListeners](sourceDestination.File.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:341

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[File](sourceDestination.File.md).[listenerCount](sourceDestination.File.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:284

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[File](sourceDestination.File.md).[on](sourceDestination.File.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:263

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[File](sourceDestination.File.md).[once](sourceDestination.File.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:199

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[File](sourceDestination.File.md).[once](sourceDestination.File.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:204

___

### register

▸ `Static` **register**(`Cls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Cls` | typeof [`SourceSource`](sourceDestination.SourceSource.md) |

#### Returns

`void`

#### Inherited from

[File](sourceDestination.File.md).[register](sourceDestination.File.md#register)

#### Defined in

[lib/source-destination/source-destination.ts:313](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L313)

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

[File](sourceDestination.File.md).[setMaxListeners](sourceDestination.File.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:359
