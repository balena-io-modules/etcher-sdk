[etcher-sdk](../README.md) / [sparseStream](../modules/sparseStream.md) / SparseReadable

# Interface: SparseReadable

[sparseStream](../modules/sparseStream.md).SparseReadable

## Hierarchy

- `ReadableStream`

  ↳ **`SparseReadable`**

## Implemented by

- [`SparseFilterStream`](../classes/sparseStream.SparseFilterStream.md)
- [`SparseReadStream`](../classes/sparseStream.SparseReadStream.md)

## Table of contents

### Properties

- [blocks](sparseStream.SparseReadable.md#blocks)
- [readable](sparseStream.SparseReadable.md#readable)

### Methods

- [[asyncIterator]](sparseStream.SparseReadable.md#[asynciterator])
- [[captureRejectionSymbol]](sparseStream.SparseReadable.md#[capturerejectionsymbol])
- [addListener](sparseStream.SparseReadable.md#addlistener)
- [emit](sparseStream.SparseReadable.md#emit)
- [eventNames](sparseStream.SparseReadable.md#eventnames)
- [getMaxListeners](sparseStream.SparseReadable.md#getmaxlisteners)
- [isPaused](sparseStream.SparseReadable.md#ispaused)
- [listenerCount](sparseStream.SparseReadable.md#listenercount)
- [listeners](sparseStream.SparseReadable.md#listeners)
- [off](sparseStream.SparseReadable.md#off)
- [on](sparseStream.SparseReadable.md#on)
- [once](sparseStream.SparseReadable.md#once)
- [pause](sparseStream.SparseReadable.md#pause)
- [pipe](sparseStream.SparseReadable.md#pipe)
- [prependListener](sparseStream.SparseReadable.md#prependlistener)
- [prependOnceListener](sparseStream.SparseReadable.md#prependoncelistener)
- [push](sparseStream.SparseReadable.md#push)
- [rawListeners](sparseStream.SparseReadable.md#rawlisteners)
- [read](sparseStream.SparseReadable.md#read)
- [removeAllListeners](sparseStream.SparseReadable.md#removealllisteners)
- [removeListener](sparseStream.SparseReadable.md#removelistener)
- [resume](sparseStream.SparseReadable.md#resume)
- [setEncoding](sparseStream.SparseReadable.md#setencoding)
- [setMaxListeners](sparseStream.SparseReadable.md#setmaxlisteners)
- [unpipe](sparseStream.SparseReadable.md#unpipe)
- [unshift](sparseStream.SparseReadable.md#unshift)
- [wrap](sparseStream.SparseReadable.md#wrap)

## Properties

### blocks

• **blocks**: [`BlocksWithChecksum`](sparseStream.BlocksWithChecksum.md)[]

#### Defined in

[lib/sparse-stream/shared.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/shared.ts#L44)

___

### readable

• **readable**: `boolean`

#### Inherited from

NodeJS.ReadableStream.readable

#### Defined in

node_modules/@types/node/globals.d.ts:230

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

NodeJS.ReadableStream.[asyncIterator]

#### Defined in

node_modules/@types/node/globals.d.ts:240

___

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

NodeJS.ReadableStream.[captureRejectionSymbol]

#### Defined in

node_modules/@types/node/events.d.ts:470

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.ReadableStream.addListener

#### Defined in

node_modules/@types/node/events.d.ts:475

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

NodeJS.ReadableStream.emit

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

NodeJS.ReadableStream.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:794

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

NodeJS.ReadableStream.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NodeJS.ReadableStream.isPaused

#### Defined in

node_modules/@types/node/globals.d.ts:235

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

NodeJS.ReadableStream.listenerCount

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

NodeJS.ReadableStream.listeners

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v10.0.0

#### Inherited from

NodeJS.ReadableStream.off

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### on

▸ **on**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.1.101

#### Inherited from

NodeJS.ReadableStream.on

#### Defined in

node_modules/@types/node/events.d.ts:506

___

### once

▸ **once**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.3.0

#### Inherited from

NodeJS.ReadableStream.once

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### pause

▸ **pause**(): [`SparseReadable`](sparseStream.SparseReadable.md)

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

#### Inherited from

NodeJS.ReadableStream.pause

#### Defined in

node_modules/@types/node/globals.d.ts:233

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

NodeJS.ReadableStream.pipe

#### Defined in

node_modules/@types/node/globals.d.ts:236

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v6.0.0

#### Inherited from

NodeJS.ReadableStream.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v6.0.0

#### Inherited from

NodeJS.ReadableStream.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:775

___

### push

▸ **push**(`chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SparseStreamChunk`](sparseStream.SparseStreamChunk.md) |

#### Returns

`boolean`

#### Defined in

[lib/sparse-stream/shared.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/shared.ts#L45)

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

NodeJS.ReadableStream.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### read

▸ **read**(`size?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`string` \| `Buffer`

#### Inherited from

NodeJS.ReadableStream.read

#### Defined in

node_modules/@types/node/globals.d.ts:231

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.ReadableStream.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.ReadableStream.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### resume

▸ **resume**(): [`SparseReadable`](sparseStream.SparseReadable.md)

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

#### Inherited from

NodeJS.ReadableStream.resume

#### Defined in

node_modules/@types/node/globals.d.ts:234

___

### setEncoding

▸ **setEncoding**(`encoding`): [`SparseReadable`](sparseStream.SparseReadable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

#### Inherited from

NodeJS.ReadableStream.setEncoding

#### Defined in

node_modules/@types/node/globals.d.ts:232

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SparseReadable`](sparseStream.SparseReadable.md)

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

[`SparseReadable`](sparseStream.SparseReadable.md)

**`Since`**

v0.3.5

#### Inherited from

NodeJS.ReadableStream.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:641

___

### unpipe

▸ **unpipe**(`destination?`): [`SparseReadable`](sparseStream.SparseReadable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | `WritableStream` |

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

#### Inherited from

NodeJS.ReadableStream.unpipe

#### Defined in

node_modules/@types/node/globals.d.ts:237

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

NodeJS.ReadableStream.unshift

#### Defined in

node_modules/@types/node/globals.d.ts:238

___

### wrap

▸ **wrap**(`oldStream`): [`SparseReadable`](sparseStream.SparseReadable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | `ReadableStream` |

#### Returns

[`SparseReadable`](sparseStream.SparseReadable.md)

#### Inherited from

NodeJS.ReadableStream.wrap

#### Defined in

node_modules/@types/node/globals.d.ts:239
