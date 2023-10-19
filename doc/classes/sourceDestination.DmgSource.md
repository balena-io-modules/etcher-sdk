[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / DmgSource

# Class: DmgSource

[sourceDestination](../modules/sourceDestination.md).DmgSource

## Hierarchy

- [`SourceSource`](sourceDestination.SourceSource.md)

  ↳ **`DmgSource`**

## Table of contents

### Constructors

- [constructor](sourceDestination.DmgSource.md#constructor)

### Properties

- [image](sourceDestination.DmgSource.md#image)
- [source](sourceDestination.DmgSource.md#source)
- [captureRejectionSymbol](sourceDestination.DmgSource.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.DmgSource.md#capturerejections)
- [defaultMaxListeners](sourceDestination.DmgSource.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.DmgSource.md#errormonitor)
- [imageExtensions](sourceDestination.DmgSource.md#imageextensions)
- [mappedBlockTypes](sourceDestination.DmgSource.md#mappedblocktypes)
- [mimetype](sourceDestination.DmgSource.md#mimetype)
- [requiresRandomReadableSource](sourceDestination.DmgSource.md#requiresrandomreadablesource)

### Methods

- [[captureRejectionSymbol]](sourceDestination.DmgSource.md#[capturerejectionsymbol])
- [\_close](sourceDestination.DmgSource.md#_close)
- [\_getMetadata](sourceDestination.DmgSource.md#_getmetadata)
- [\_open](sourceDestination.DmgSource.md#_open)
- [addListener](sourceDestination.DmgSource.md#addlistener)
- [canCreateReadStream](sourceDestination.DmgSource.md#cancreatereadstream)
- [canCreateSparseReadStream](sourceDestination.DmgSource.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](sourceDestination.DmgSource.md#cancreatesparsewritestream)
- [canCreateWriteStream](sourceDestination.DmgSource.md#cancreatewritestream)
- [canRead](sourceDestination.DmgSource.md#canread)
- [canWrite](sourceDestination.DmgSource.md#canwrite)
- [close](sourceDestination.DmgSource.md#close)
- [createReadStream](sourceDestination.DmgSource.md#createreadstream)
- [createSparseReadStream](sourceDestination.DmgSource.md#createsparsereadstream)
- [createSparseWriteStream](sourceDestination.DmgSource.md#createsparsewritestream)
- [createVerifier](sourceDestination.DmgSource.md#createverifier)
- [createWriteStream](sourceDestination.DmgSource.md#createwritestream)
- [emit](sourceDestination.DmgSource.md#emit)
- [eventNames](sourceDestination.DmgSource.md#eventnames)
- [getAlignment](sourceDestination.DmgSource.md#getalignment)
- [getBlocks](sourceDestination.DmgSource.md#getblocks)
- [getInnerSource](sourceDestination.DmgSource.md#getinnersource)
- [getMaxListeners](sourceDestination.DmgSource.md#getmaxlisteners)
- [getMetadata](sourceDestination.DmgSource.md#getmetadata)
- [getPartitionTable](sourceDestination.DmgSource.md#getpartitiontable)
- [listenerCount](sourceDestination.DmgSource.md#listenercount)
- [listeners](sourceDestination.DmgSource.md#listeners)
- [off](sourceDestination.DmgSource.md#off)
- [on](sourceDestination.DmgSource.md#on)
- [once](sourceDestination.DmgSource.md#once)
- [open](sourceDestination.DmgSource.md#open)
- [prependListener](sourceDestination.DmgSource.md#prependlistener)
- [prependOnceListener](sourceDestination.DmgSource.md#prependoncelistener)
- [rawListeners](sourceDestination.DmgSource.md#rawlisteners)
- [read](sourceDestination.DmgSource.md#read)
- [removeAllListeners](sourceDestination.DmgSource.md#removealllisteners)
- [removeListener](sourceDestination.DmgSource.md#removelistener)
- [setMaxListeners](sourceDestination.DmgSource.md#setmaxlisteners)
- [write](sourceDestination.DmgSource.md#write)
- [addAbortListener](sourceDestination.DmgSource.md#addabortlistener)
- [getEventListeners](sourceDestination.DmgSource.md#geteventlisteners)
- [getMaxListeners](sourceDestination.DmgSource.md#getmaxlisteners-1)
- [listenerCount](sourceDestination.DmgSource.md#listenercount-1)
- [on](sourceDestination.DmgSource.md#on-1)
- [once](sourceDestination.DmgSource.md#once-1)
- [register](sourceDestination.DmgSource.md#register)
- [setMaxListeners](sourceDestination.DmgSource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new DmgSource**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceDestination`](sourceDestination.SourceDestination.md) |

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[constructor](sourceDestination.SourceSource.md#constructor)

#### Defined in

[lib/source-destination/dmg.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L56)

## Properties

### image

• `Private` **image**: `Image`

#### Defined in

[lib/source-destination/dmg.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L54)

___

### source

• `Protected` **source**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[source](sourceDestination.SourceSource.md#source)

#### Defined in

[lib/source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L22)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[captureRejectionSymbol](sourceDestination.SourceSource.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[captureRejections](sourceDestination.SourceSource.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[defaultMaxListeners](sourceDestination.SourceSource.md#defaultmaxlisteners)

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

[SourceSource](sourceDestination.SourceSource.md).[errorMonitor](sourceDestination.SourceSource.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:404

___

### imageExtensions

▪ `Static` `Readonly` **imageExtensions**: `string`[]

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[imageExtensions](sourceDestination.SourceSource.md#imageextensions)

#### Defined in

[lib/source-destination/source-destination.ts:295](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L295)

___

### mappedBlockTypes

▪ `Static` `Private` **mappedBlockTypes**: `BLOCK`[]

#### Defined in

[lib/source-destination/dmg.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L44)

___

### mimetype

▪ `Static` `Readonly` **mimetype**: ``"application/x-apple-diskimage"``

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[mimetype](sourceDestination.SourceSource.md#mimetype)

#### Defined in

[lib/source-destination/dmg.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L53)

___

### requiresRandomReadableSource

▪ `Static` **requiresRandomReadableSource**: `boolean` = `true`

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[requiresRandomReadableSource](sourceDestination.SourceSource.md#requiresrandomreadablesource)

#### Defined in

[lib/source-destination/dmg.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L52)

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

[SourceSource](sourceDestination.SourceSource.md).[[captureRejectionSymbol]](sourceDestination.SourceSource.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### \_close

▸ `Protected` **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[_close](sourceDestination.SourceSource.md#_close)

#### Defined in

[lib/source-destination/source-source.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-source.ts#L30)

___

### \_getMetadata

▸ `Protected` **_getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[_getMetadata](sourceDestination.SourceSource.md#_getmetadata)

#### Defined in

[lib/source-destination/dmg.ts:144](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L144)

___

### \_open

▸ `Protected` **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[_open](sourceDestination.SourceSource.md#_open)

#### Defined in

[lib/source-destination/dmg.ts:152](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L152)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[addListener](sourceDestination.SourceSource.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:475

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[canCreateReadStream](sourceDestination.SourceSource.md#cancreatereadstream)

#### Defined in

[lib/source-destination/dmg.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L60)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[canCreateSparseReadStream](sourceDestination.SourceSource.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/dmg.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L64)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[canCreateSparseWriteStream](sourceDestination.SourceSource.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:343](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L343)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[canCreateWriteStream](sourceDestination.SourceSource.md#cancreatewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:339](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L339)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[canRead](sourceDestination.SourceSource.md#canread)

#### Defined in

[lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L323)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[canWrite](sourceDestination.SourceSource.md#canwrite)

#### Defined in

[lib/source-destination/source-destination.ts:327](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L327)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[close](sourceDestination.SourceSource.md#close)

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

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[createReadStream](sourceDestination.SourceSource.md#createreadstream)

#### Defined in

[lib/source-destination/dmg.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L68)

___

### createSparseReadStream

▸ **createSparseReadStream**(`«destructured»?`): `Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CreateSparseReadStreamOptions`](../interfaces/sourceDestination.CreateSparseReadStreamOptions.md) |

#### Returns

`Promise`<[`SparseReadable`](../interfaces/sparseStream.SparseReadable.md)\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[createSparseReadStream](sourceDestination.SourceSource.md#createsparsereadstream)

#### Defined in

[lib/source-destination/dmg.ts:81](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L81)

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

[SourceSource](sourceDestination.SourceSource.md).[createSparseWriteStream](sourceDestination.SourceSource.md#createsparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:398](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L398)

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

[SourceSource](sourceDestination.SourceSource.md).[createVerifier](sourceDestination.SourceSource.md#createverifier)

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

[SourceSource](sourceDestination.SourceSource.md).[createWriteStream](sourceDestination.SourceSource.md#createwritestream)

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

[SourceSource](sourceDestination.SourceSource.md).[emit](sourceDestination.SourceSource.md#emit)

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

[SourceSource](sourceDestination.SourceSource.md).[eventNames](sourceDestination.SourceSource.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[getAlignment](sourceDestination.SourceSource.md#getalignment)

#### Defined in

[lib/source-destination/source-destination.ts:319](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L319)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Overrides

[SourceSource](sourceDestination.SourceSource.md).[getBlocks](sourceDestination.SourceSource.md#getblocks)

#### Defined in

[lib/source-destination/dmg.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/dmg.ts#L104)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[getInnerSource](sourceDestination.SourceSource.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:501](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L501)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.DmgSource.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[getMaxListeners](sourceDestination.SourceSource.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[getMetadata](sourceDestination.SourceSource.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:347](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L347)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[getPartitionTable](sourceDestination.SourceSource.md#getpartitiontable)

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

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[listenerCount](sourceDestination.SourceSource.md#listenercount)

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

[SourceSource](sourceDestination.SourceSource.md).[listeners](sourceDestination.SourceSource.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v10.0.0

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[off](sourceDestination.SourceSource.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### on

▸ **on**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.1.101

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[on](sourceDestination.SourceSource.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:506

___

### once

▸ **once**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.3.0

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[once](sourceDestination.SourceSource.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[open](sourceDestination.SourceSource.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:404](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L404)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[prependListener](sourceDestination.SourceSource.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[prependOnceListener](sourceDestination.SourceSource.md#prependoncelistener)

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

[SourceSource](sourceDestination.SourceSource.md).[rawListeners](sourceDestination.SourceSource.md#rawlisteners)

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

[SourceSource](sourceDestination.SourceSource.md).[read](sourceDestination.SourceSource.md#read)

#### Defined in

[lib/source-destination/source-destination.ts:358](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L358)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[removeAllListeners](sourceDestination.SourceSource.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[removeListener](sourceDestination.SourceSource.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`DmgSource`](sourceDestination.DmgSource.md)

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

[`DmgSource`](sourceDestination.DmgSource.md)

**`Since`**

v0.3.5

#### Inherited from

[SourceSource](sourceDestination.SourceSource.md).[setMaxListeners](sourceDestination.SourceSource.md#setmaxlisteners)

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

[SourceSource](sourceDestination.SourceSource.md).[write](sourceDestination.SourceSource.md#write)

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

[SourceSource](sourceDestination.SourceSource.md).[addAbortListener](sourceDestination.SourceSource.md#addabortlistener)

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

[SourceSource](sourceDestination.SourceSource.md).[getEventListeners](sourceDestination.SourceSource.md#geteventlisteners)

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

[SourceSource](sourceDestination.SourceSource.md).[getMaxListeners](sourceDestination.SourceSource.md#getmaxlisteners-1)

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

[SourceSource](sourceDestination.SourceSource.md).[listenerCount](sourceDestination.SourceSource.md#listenercount-1)

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

[SourceSource](sourceDestination.SourceSource.md).[on](sourceDestination.SourceSource.md#on-1)

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

[SourceSource](sourceDestination.SourceSource.md).[once](sourceDestination.SourceSource.md#once-1)

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

[SourceSource](sourceDestination.SourceSource.md).[once](sourceDestination.SourceSource.md#once-1)

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

[SourceSource](sourceDestination.SourceSource.md).[register](sourceDestination.SourceSource.md#register)

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

[SourceSource](sourceDestination.SourceSource.md).[setMaxListeners](sourceDestination.SourceSource.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:359
