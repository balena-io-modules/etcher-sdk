[etcher-sdk](../README.md) / [scanner](../modules/scanner.md) / [adapters](../modules/scanner.adapters.md) / AdapterSourceDestination

# Interface: AdapterSourceDestination

[scanner](../modules/scanner.md).[adapters](../modules/scanner.adapters.md).AdapterSourceDestination

## Hierarchy

- [`SourceDestination`](../classes/sourceDestination.SourceDestination.md)

  ↳ **`AdapterSourceDestination`**

## Implemented by

- [`BlockDevice`](../classes/sourceDestination.BlockDevice.md)
- [`DriverlessDevice`](../classes/sourceDestination.DriverlessDevice.md)
- [`UsbBBbootDrive`](../classes/sourceDestination.UsbBBbootDrive.md)
- [`UsbbootDrive`](../classes/sourceDestination.UsbbootDrive.md)

## Table of contents

### Properties

- [description](scanner.adapters.AdapterSourceDestination.md#description)
- [device](scanner.adapters.AdapterSourceDestination.md#device)
- [devicePath](scanner.adapters.AdapterSourceDestination.md#devicepath)
- [emitsProgress](scanner.adapters.AdapterSourceDestination.md#emitsprogress)
- [isSystem](scanner.adapters.AdapterSourceDestination.md#issystem)
- [mountpoints](scanner.adapters.AdapterSourceDestination.md#mountpoints)
- [raw](scanner.adapters.AdapterSourceDestination.md#raw)
- [size](scanner.adapters.AdapterSourceDestination.md#size)

### Methods

- [[captureRejectionSymbol]](scanner.adapters.AdapterSourceDestination.md#[capturerejectionsymbol])
- [\_close](scanner.adapters.AdapterSourceDestination.md#_close)
- [\_getMetadata](scanner.adapters.AdapterSourceDestination.md#_getmetadata)
- [\_open](scanner.adapters.AdapterSourceDestination.md#_open)
- [addListener](scanner.adapters.AdapterSourceDestination.md#addlistener)
- [canCreateReadStream](scanner.adapters.AdapterSourceDestination.md#cancreatereadstream)
- [canCreateSparseReadStream](scanner.adapters.AdapterSourceDestination.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](scanner.adapters.AdapterSourceDestination.md#cancreatesparsewritestream)
- [canCreateWriteStream](scanner.adapters.AdapterSourceDestination.md#cancreatewritestream)
- [canRead](scanner.adapters.AdapterSourceDestination.md#canread)
- [canWrite](scanner.adapters.AdapterSourceDestination.md#canwrite)
- [close](scanner.adapters.AdapterSourceDestination.md#close)
- [createReadStream](scanner.adapters.AdapterSourceDestination.md#createreadstream)
- [createSparseReadStream](scanner.adapters.AdapterSourceDestination.md#createsparsereadstream)
- [createSparseWriteStream](scanner.adapters.AdapterSourceDestination.md#createsparsewritestream)
- [createVerifier](scanner.adapters.AdapterSourceDestination.md#createverifier)
- [createWriteStream](scanner.adapters.AdapterSourceDestination.md#createwritestream)
- [emit](scanner.adapters.AdapterSourceDestination.md#emit)
- [eventNames](scanner.adapters.AdapterSourceDestination.md#eventnames)
- [getAlignment](scanner.adapters.AdapterSourceDestination.md#getalignment)
- [getBlocks](scanner.adapters.AdapterSourceDestination.md#getblocks)
- [getInnerSource](scanner.adapters.AdapterSourceDestination.md#getinnersource)
- [getMaxListeners](scanner.adapters.AdapterSourceDestination.md#getmaxlisteners)
- [getMetadata](scanner.adapters.AdapterSourceDestination.md#getmetadata)
- [getPartitionTable](scanner.adapters.AdapterSourceDestination.md#getpartitiontable)
- [listenerCount](scanner.adapters.AdapterSourceDestination.md#listenercount)
- [listeners](scanner.adapters.AdapterSourceDestination.md#listeners)
- [off](scanner.adapters.AdapterSourceDestination.md#off)
- [on](scanner.adapters.AdapterSourceDestination.md#on)
- [once](scanner.adapters.AdapterSourceDestination.md#once)
- [open](scanner.adapters.AdapterSourceDestination.md#open)
- [prependListener](scanner.adapters.AdapterSourceDestination.md#prependlistener)
- [prependOnceListener](scanner.adapters.AdapterSourceDestination.md#prependoncelistener)
- [rawListeners](scanner.adapters.AdapterSourceDestination.md#rawlisteners)
- [read](scanner.adapters.AdapterSourceDestination.md#read)
- [removeAllListeners](scanner.adapters.AdapterSourceDestination.md#removealllisteners)
- [removeListener](scanner.adapters.AdapterSourceDestination.md#removelistener)
- [setMaxListeners](scanner.adapters.AdapterSourceDestination.md#setmaxlisteners)
- [write](scanner.adapters.AdapterSourceDestination.md#write)

## Properties

### description

• **description**: `string`

#### Defined in

[lib/scanner/adapters/adapter.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L27)

___

### device

• **device**: ``null`` \| `string`

#### Defined in

[lib/scanner/adapters/adapter.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L24)

___

### devicePath

• **devicePath**: ``null`` \| `string`

#### Defined in

[lib/scanner/adapters/adapter.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L25)

___

### emitsProgress

• **emitsProgress**: `boolean`

#### Defined in

[lib/scanner/adapters/adapter.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L30)

___

### isSystem

• **isSystem**: `boolean`

#### Defined in

[lib/scanner/adapters/adapter.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L26)

___

### mountpoints

• **mountpoints**: { `path`: `string`  }[]

#### Defined in

[lib/scanner/adapters/adapter.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L28)

___

### raw

• **raw**: ``null`` \| `string`

#### Defined in

[lib/scanner/adapters/adapter.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L23)

___

### size

• **size**: ``null`` \| `number`

#### Defined in

[lib/scanner/adapters/adapter.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/scanner/adapters/adapter.ts#L29)

## Methods

### [captureRejectionSymbol]

▸ **[captureRejectionSymbol]**(`error`, `event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[[captureRejectionSymbol]](../classes/sourceDestination.SourceDestination.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:112

___

### \_close

▸ **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[_close](../classes/sourceDestination.SourceDestination.md#_close)

#### Defined in

[lib/source-destination/source-destination.ts:420](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L420)

___

### \_getMetadata

▸ **_getMetadata**(): `Promise`<[`Metadata`](sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](sourceDestination.Metadata.md)\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[_getMetadata](../classes/sourceDestination.SourceDestination.md#_getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:352](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L352)

___

### \_open

▸ **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[_open](../classes/sourceDestination.SourceDestination.md#_open)

#### Defined in

[lib/source-destination/source-destination.ts:416](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L416)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[addListener](../classes/sourceDestination.SourceDestination.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:545

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canCreateReadStream](../classes/sourceDestination.SourceDestination.md#cancreatereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L329)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canCreateSparseReadStream](../classes/sourceDestination.SourceDestination.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L333)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canCreateSparseWriteStream](../classes/sourceDestination.SourceDestination.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:341](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L341)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canCreateWriteStream](../classes/sourceDestination.SourceDestination.md#cancreatewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L337)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canRead](../classes/sourceDestination.SourceDestination.md#canread)

#### Defined in

[lib/source-destination/source-destination.ts:321](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L321)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[canWrite](../classes/sourceDestination.SourceDestination.md#canwrite)

#### Defined in

[lib/source-destination/source-destination.ts:325](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L325)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[close](../classes/sourceDestination.SourceDestination.md#close)

#### Defined in

[lib/source-destination/source-destination.ts:409](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L409)

___

### createReadStream

▸ **createReadStream**(`_options?`): `Promise`<`ReadableStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`CreateReadStreamOptions`](sourceDestination.CreateReadStreamOptions.md) |

#### Returns

`Promise`<`ReadableStream`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[createReadStream](../classes/sourceDestination.SourceDestination.md#createreadstream)

#### Defined in

[lib/source-destination/source-destination.ts:374](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L374)

___

### createSparseReadStream

▸ **createSparseReadStream**(`_options?`): `Promise`<[`SparseReadable`](sparseStream.SparseReadable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | [`CreateSparseReadStreamOptions`](sourceDestination.CreateSparseReadStreamOptions.md) |

#### Returns

`Promise`<[`SparseReadable`](sparseStream.SparseReadable.md)\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[createSparseReadStream](../classes/sourceDestination.SourceDestination.md#createsparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:380](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L380)

___

### createSparseWriteStream

▸ **createSparseWriteStream**(`_options?`): `Promise`<[`SparseWritable`](sparseStream.SparseWritable.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |
| `_options.highWaterMark?` | `number` |

#### Returns

`Promise`<[`SparseWritable`](sparseStream.SparseWritable.md)\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[createSparseWriteStream](../classes/sourceDestination.SourceDestination.md#createsparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:396](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L396)

___

### createVerifier

▸ **createVerifier**(`checksumOrBlocks`, `size?`): [`Verifier`](../classes/sourceDestination.Verifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `checksumOrBlocks` | `string` \| [`BlocksWithChecksum`](sparseStream.BlocksWithChecksum.md)[] |
| `size?` | `number` |

#### Returns

[`Verifier`](../classes/sourceDestination.Verifier.md)

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[createVerifier](../classes/sourceDestination.SourceDestination.md#createverifier)

#### Defined in

[lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L424)

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[createWriteStream](../classes/sourceDestination.SourceDestination.md#createwritestream)

#### Defined in

[lib/source-destination/source-destination.ts:390](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L390)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[emit](../classes/sourceDestination.SourceDestination.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[eventNames](../classes/sourceDestination.SourceDestination.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:870

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getAlignment](../classes/sourceDestination.SourceDestination.md#getalignment)

#### Defined in

[lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L317)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](sparseStream.BlocksWithChecksum.md)[]\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getBlocks](../classes/sourceDestination.SourceDestination.md#getblocks)

#### Defined in

[lib/source-destination/source-destination.ts:386](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L386)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](../classes/sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](../classes/sourceDestination.SourceDestination.md)\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getInnerSource](../classes/sourceDestination.SourceDestination.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:499](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L499)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getMaxListeners](../classes/sourceDestination.SourceDestination.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:722

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](sourceDestination.Metadata.md)\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getMetadata](../classes/sourceDestination.SourceDestination.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:345](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L345)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[getPartitionTable](../classes/sourceDestination.SourceDestination.md#getpartitiontable)

#### Defined in

[lib/source-destination/source-destination.ts:529](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L529)

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[listenerCount](../classes/sourceDestination.SourceDestination.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:816

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[listeners](../classes/sourceDestination.SourceDestination.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### off

▸ **off**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v10.0.0

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[off](../classes/sourceDestination.SourceDestination.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### on

▸ **on**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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
import { EventEmitter } from 'node:events';
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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.1.101

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[on](../classes/sourceDestination.SourceDestination.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:577

___

### once

▸ **once**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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
import { EventEmitter } from 'node:events';
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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.3.0

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[once](../classes/sourceDestination.SourceDestination.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[open](../classes/sourceDestination.SourceDestination.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:402](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L402)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[prependListener](../classes/sourceDestination.SourceDestination.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:834

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[prependOnceListener](../classes/sourceDestination.SourceDestination.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:850

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[rawListeners](../classes/sourceDestination.SourceDestination.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:766

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[read](../classes/sourceDestination.SourceDestination.md#read)

#### Defined in

[lib/source-destination/source-destination.ts:356](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L356)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[removeAllListeners](../classes/sourceDestination.SourceDestination.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:706

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
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
import { EventEmitter } from 'node:events';
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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[removeListener](../classes/sourceDestination.SourceDestination.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

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

[`AdapterSourceDestination`](scanner.adapters.AdapterSourceDestination.md)

**`Since`**

v0.3.5

#### Inherited from

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[setMaxListeners](../classes/sourceDestination.SourceDestination.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:716

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

[SourceDestination](../classes/sourceDestination.SourceDestination.md).[write](../classes/sourceDestination.SourceDestination.md#write)

#### Defined in

[lib/source-destination/source-destination.ts:365](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L365)
