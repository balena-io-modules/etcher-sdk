[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / BZip2Source

# Class: BZip2Source

[sourceDestination](../modules/sourceDestination.md).BZip2Source

## Hierarchy

- [`CompressedSource`](sourceDestination.CompressedSource.md)

  ↳ **`BZip2Source`**

## Table of contents

### Constructors

- [constructor](sourceDestination.BZip2Source.md#constructor)

### Properties

- [source](sourceDestination.BZip2Source.md#source)
- [captureRejectionSymbol](sourceDestination.BZip2Source.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.BZip2Source.md#capturerejections)
- [defaultMaxListeners](sourceDestination.BZip2Source.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.BZip2Source.md#errormonitor)
- [imageExtensions](sourceDestination.BZip2Source.md#imageextensions)
- [mimetype](sourceDestination.BZip2Source.md#mimetype)
- [requiresRandomReadableSource](sourceDestination.BZip2Source.md#requiresrandomreadablesource)

### Methods

- [[captureRejectionSymbol]](sourceDestination.BZip2Source.md#[capturerejectionsymbol])
- [\_close](sourceDestination.BZip2Source.md#_close)
- [\_getMetadata](sourceDestination.BZip2Source.md#_getmetadata)
- [\_open](sourceDestination.BZip2Source.md#_open)
- [addListener](sourceDestination.BZip2Source.md#addlistener)
- [canCreateReadStream](sourceDestination.BZip2Source.md#cancreatereadstream)
- [canCreateSparseReadStream](sourceDestination.BZip2Source.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](sourceDestination.BZip2Source.md#cancreatesparsewritestream)
- [canCreateWriteStream](sourceDestination.BZip2Source.md#cancreatewritestream)
- [canRead](sourceDestination.BZip2Source.md#canread)
- [canWrite](sourceDestination.BZip2Source.md#canwrite)
- [close](sourceDestination.BZip2Source.md#close)
- [createReadStream](sourceDestination.BZip2Source.md#createreadstream)
- [createSparseReadStream](sourceDestination.BZip2Source.md#createsparsereadstream)
- [createSparseWriteStream](sourceDestination.BZip2Source.md#createsparsewritestream)
- [createTransform](sourceDestination.BZip2Source.md#createtransform)
- [createVerifier](sourceDestination.BZip2Source.md#createverifier)
- [createWriteStream](sourceDestination.BZip2Source.md#createwritestream)
- [emit](sourceDestination.BZip2Source.md#emit)
- [eventNames](sourceDestination.BZip2Source.md#eventnames)
- [getAlignment](sourceDestination.BZip2Source.md#getalignment)
- [getBlocks](sourceDestination.BZip2Source.md#getblocks)
- [getInnerSource](sourceDestination.BZip2Source.md#getinnersource)
- [getMaxListeners](sourceDestination.BZip2Source.md#getmaxlisteners)
- [getMetadata](sourceDestination.BZip2Source.md#getmetadata)
- [getPartitionTable](sourceDestination.BZip2Source.md#getpartitiontable)
- [getSize](sourceDestination.BZip2Source.md#getsize)
- [getSizeFromPartitionTable](sourceDestination.BZip2Source.md#getsizefrompartitiontable)
- [listenerCount](sourceDestination.BZip2Source.md#listenercount)
- [listeners](sourceDestination.BZip2Source.md#listeners)
- [off](sourceDestination.BZip2Source.md#off)
- [on](sourceDestination.BZip2Source.md#on)
- [once](sourceDestination.BZip2Source.md#once)
- [open](sourceDestination.BZip2Source.md#open)
- [prependListener](sourceDestination.BZip2Source.md#prependlistener)
- [prependOnceListener](sourceDestination.BZip2Source.md#prependoncelistener)
- [rawListeners](sourceDestination.BZip2Source.md#rawlisteners)
- [read](sourceDestination.BZip2Source.md#read)
- [removeAllListeners](sourceDestination.BZip2Source.md#removealllisteners)
- [removeListener](sourceDestination.BZip2Source.md#removelistener)
- [setMaxListeners](sourceDestination.BZip2Source.md#setmaxlisteners)
- [write](sourceDestination.BZip2Source.md#write)
- [addAbortListener](sourceDestination.BZip2Source.md#addabortlistener)
- [getEventListeners](sourceDestination.BZip2Source.md#geteventlisteners)
- [getMaxListeners](sourceDestination.BZip2Source.md#getmaxlisteners-1)
- [listenerCount](sourceDestination.BZip2Source.md#listenercount-1)
- [on](sourceDestination.BZip2Source.md#on-1)
- [once](sourceDestination.BZip2Source.md#once-1)
- [register](sourceDestination.BZip2Source.md#register)
- [setMaxListeners](sourceDestination.BZip2Source.md#setmaxlisteners-1)

## Constructors

### constructor

• **new BZip2Source**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceDestination`](sourceDestination.SourceDestination.md) |

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[constructor](sourceDestination.CompressedSource.md#constructor)

#### Defined in

[lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L22)

## Properties

### source

• `Protected` **source**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[source](sourceDestination.CompressedSource.md#source)

#### Defined in

[lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L22)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[captureRejectionSymbol](sourceDestination.CompressedSource.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[captureRejections](sourceDestination.CompressedSource.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[defaultMaxListeners](sourceDestination.CompressedSource.md#defaultmaxlisteners)

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

[CompressedSource](sourceDestination.CompressedSource.md).[errorMonitor](sourceDestination.CompressedSource.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:404

___

### imageExtensions

▪ `Static` `Readonly` **imageExtensions**: `string`[]

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[imageExtensions](sourceDestination.CompressedSource.md#imageextensions)

#### Defined in

[lib/source-destination/source-destination.ts:295](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L295)

___

### mimetype

▪ `Static` `Readonly` **mimetype**: ``"application/x-bzip2"``

#### Overrides

[CompressedSource](sourceDestination.CompressedSource.md).[mimetype](sourceDestination.CompressedSource.md#mimetype)

#### Defined in

[lib/source-destination/bzip2.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/bzip2.ts#L24)

___

### requiresRandomReadableSource

▪ `Static` **requiresRandomReadableSource**: `boolean` = `false`

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[requiresRandomReadableSource](sourceDestination.CompressedSource.md#requiresrandomreadablesource)

#### Defined in

[lib/source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L20)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[[captureRejectionSymbol]](sourceDestination.CompressedSource.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### \_close

▸ `Protected` **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[_close](sourceDestination.CompressedSource.md#_close)

#### Defined in

[lib/source-destination/source-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L30)

___

### \_getMetadata

▸ `Protected` **_getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[_getMetadata](sourceDestination.CompressedSource.md#_getmetadata)

#### Defined in

[lib/source-destination/compressed-source.ts:106](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/compressed-source.ts#L106)

___

### \_open

▸ `Protected` **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[_open](sourceDestination.CompressedSource.md#_open)

#### Defined in

[lib/source-destination/source-source.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L26)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.1.26

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[addListener](sourceDestination.CompressedSource.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:475

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canCreateReadStream](sourceDestination.CompressedSource.md#cancreatereadstream)

#### Defined in

[lib/source-destination/compressed-source.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/compressed-source.ts#L53)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canCreateSparseReadStream](sourceDestination.CompressedSource.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L335)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canCreateSparseWriteStream](sourceDestination.CompressedSource.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:343](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L343)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canCreateWriteStream](sourceDestination.CompressedSource.md#cancreatewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:339](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L339)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canRead](sourceDestination.CompressedSource.md#canread)

#### Defined in

[lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L323)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[canWrite](sourceDestination.CompressedSource.md#canwrite)

#### Defined in

[lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L327)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[close](sourceDestination.CompressedSource.md#close)

#### Defined in

[lib/source-destination/source-destination.ts:411](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L411)

___

### createReadStream

▸ **createReadStream**(`«destructured»?`): `Promise`<[`SourceTransform`](../interfaces/sourceDestination.SourceTransform.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CreateReadStreamOptions`](../interfaces/sourceDestination.CreateReadStreamOptions.md) |

#### Returns

`Promise`<[`SourceTransform`](../interfaces/sourceDestination.SourceTransform.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[createReadStream](sourceDestination.CompressedSource.md#createreadstream)

#### Defined in

[lib/source-destination/compressed-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/compressed-source.ts#L57)

___

### createSparseReadStream

▸ **createSparseReadStream**(`_options?`): `Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`CreateSparseReadStreamOptions`](../interfaces/sourceDestination.CreateSparseReadStreamOptions.md) |

#### Returns

`Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[createSparseReadStream](sourceDestination.CompressedSource.md#createsparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:382](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L382)

___

### createSparseWriteStream

▸ **createSparseWriteStream**(`_options?`): `Promise`<[`SparseWritable`](../interfaces/sparseStream.SparseWritable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |
| `_options.highWaterMark?` | `number` |

#### Returns

`Promise`<[`SparseWritable`](../interfaces/sparseStream.SparseWritable.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[createSparseWriteStream](sourceDestination.CompressedSource.md#createsparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:398](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L398)

___

### createTransform

▸ `Protected` **createTransform**(): `Transform`

#### Returns

`Transform`

#### Overrides

[CompressedSource](sourceDestination.CompressedSource.md).[createTransform](sourceDestination.CompressedSource.md#createtransform)

#### Defined in

[lib/source-destination/bzip2.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/bzip2.ts#L26)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[createVerifier](sourceDestination.CompressedSource.md#createverifier)

#### Defined in

[lib/source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L426)

___

### createWriteStream

▸ **createWriteStream**(`_options?`): `Promise`<`WritableStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |
| `_options.highWaterMark?` | `number` |

#### Returns

`Promise`<`WritableStream`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[createWriteStream](sourceDestination.CompressedSource.md#createwritestream)

#### Defined in

[lib/source-destination/source-destination.ts:392](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L392)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[emit](sourceDestination.CompressedSource.md#emit)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[eventNames](sourceDestination.CompressedSource.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getAlignment](sourceDestination.CompressedSource.md#getalignment)

#### Defined in

[lib/source-destination/source-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L319)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getBlocks](sourceDestination.CompressedSource.md#getblocks)

#### Defined in

[lib/source-destination/source-destination.ts:388](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L388)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getInnerSource](sourceDestination.CompressedSource.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:501](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L501)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.BZip2Source.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getMaxListeners](sourceDestination.CompressedSource.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getMetadata](sourceDestination.CompressedSource.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:347](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L347)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getPartitionTable](sourceDestination.CompressedSource.md#getpartitiontable)

#### Defined in

[lib/source-destination/source-destination.ts:531](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L531)

___

### getSize

▸ `Protected` **getSize**(): `Promise`<`undefined` \| { `isEstimated`: ``true`` ; `size`: `number`  }\>

#### Returns

`Promise`<`undefined` \| { `isEstimated`: ``true`` ; `size`: `number`  }\>

#### Overrides

[CompressedSource](sourceDestination.CompressedSource.md).[getSize](sourceDestination.CompressedSource.md#getsize)

#### Defined in

[lib/source-destination/bzip2.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/bzip2.ts#L30)

___

### getSizeFromPartitionTable

▸ `Protected` **getSizeFromPartitionTable**(): `Promise`<`undefined` \| `number`\>

#### Returns

`Promise`<`undefined` \| `number`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[getSizeFromPartitionTable](sourceDestination.CompressedSource.md#getsizefrompartitiontable)

#### Defined in

[lib/source-destination/compressed-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/compressed-source.ts#L87)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[listenerCount](sourceDestination.CompressedSource.md#listenercount)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[listeners](sourceDestination.CompressedSource.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v10.0.0

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[off](sourceDestination.CompressedSource.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### on

▸ **on**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.1.101

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[on](sourceDestination.CompressedSource.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:506

___

### once

▸ **once**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.3.0

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[once](sourceDestination.CompressedSource.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[open](sourceDestination.CompressedSource.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:404](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L404)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v6.0.0

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[prependListener](sourceDestination.CompressedSource.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v6.0.0

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[prependOnceListener](sourceDestination.CompressedSource.md#prependoncelistener)

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

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[rawListeners](sourceDestination.CompressedSource.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### read

▸ **read**(`_buffer`, `_bufferOffset`, `_length`, `_sourceOffset`): `Promise`<`ReadResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_buffer` | `Buffer` |
| `_bufferOffset` | `number` |
| `_length` | `number` |
| `_sourceOffset` | `number` |

#### Returns

`Promise`<`ReadResult`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[read](sourceDestination.CompressedSource.md#read)

#### Defined in

[lib/source-destination/source-destination.ts:358](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L358)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.1.26

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[removeAllListeners](sourceDestination.CompressedSource.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.1.26

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[removeListener](sourceDestination.CompressedSource.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`BZip2Source`](sourceDestination.BZip2Source.md)

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

[`BZip2Source`](sourceDestination.BZip2Source.md)

**`Since`**

v0.3.5

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[setMaxListeners](sourceDestination.CompressedSource.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:641

___

### write

▸ **write**(`_buffer`, `_bufferOffset`, `_length`, `_fileOffset`): `Promise`<`WriteResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_buffer` | `Buffer` |
| `_bufferOffset` | `number` |
| `_length` | `number` |
| `_fileOffset` | `number` |

#### Returns

`Promise`<`WriteResult`\>

#### Inherited from

[CompressedSource](sourceDestination.CompressedSource.md).[write](sourceDestination.CompressedSource.md#write)

#### Defined in

[lib/source-destination/source-destination.ts:367](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L367)

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

[CompressedSource](sourceDestination.CompressedSource.md).[addAbortListener](sourceDestination.CompressedSource.md#addabortlistener)

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

[CompressedSource](sourceDestination.CompressedSource.md).[getEventListeners](sourceDestination.CompressedSource.md#geteventlisteners)

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

[CompressedSource](sourceDestination.CompressedSource.md).[getMaxListeners](sourceDestination.CompressedSource.md#getmaxlisteners-1)

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

[CompressedSource](sourceDestination.CompressedSource.md).[listenerCount](sourceDestination.CompressedSource.md#listenercount-1)

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

[CompressedSource](sourceDestination.CompressedSource.md).[on](sourceDestination.CompressedSource.md#on-1)

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

[CompressedSource](sourceDestination.CompressedSource.md).[once](sourceDestination.CompressedSource.md#once-1)

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

[CompressedSource](sourceDestination.CompressedSource.md).[once](sourceDestination.CompressedSource.md#once-1)

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

[CompressedSource](sourceDestination.CompressedSource.md).[register](sourceDestination.CompressedSource.md#register)

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

[CompressedSource](sourceDestination.CompressedSource.md).[setMaxListeners](sourceDestination.CompressedSource.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:359
