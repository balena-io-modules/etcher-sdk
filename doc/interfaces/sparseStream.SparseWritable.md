[etcher-sdk](../README.md) / [sparseStream](../modules/sparseStream.md) / SparseWritable

# Interface: SparseWritable

[sparseStream](../modules/sparseStream.md).SparseWritable

## Hierarchy

- `WritableStream`

  ↳ **`SparseWritable`**

## Implemented by

- [`SparseWriteStream`](../classes/sparseStream.SparseWriteStream.md)

## Table of contents

### Properties

- [writable](sparseStream.SparseWritable.md#writable)

### Methods

- [[captureRejectionSymbol]](sparseStream.SparseWritable.md#[capturerejectionsymbol])
- [\_write](sparseStream.SparseWritable.md#_write)
- [addListener](sparseStream.SparseWritable.md#addlistener)
- [emit](sparseStream.SparseWritable.md#emit)
- [end](sparseStream.SparseWritable.md#end)
- [eventNames](sparseStream.SparseWritable.md#eventnames)
- [getMaxListeners](sparseStream.SparseWritable.md#getmaxlisteners)
- [listenerCount](sparseStream.SparseWritable.md#listenercount)
- [listeners](sparseStream.SparseWritable.md#listeners)
- [off](sparseStream.SparseWritable.md#off)
- [on](sparseStream.SparseWritable.md#on)
- [once](sparseStream.SparseWritable.md#once)
- [prependListener](sparseStream.SparseWritable.md#prependlistener)
- [prependOnceListener](sparseStream.SparseWritable.md#prependoncelistener)
- [rawListeners](sparseStream.SparseWritable.md#rawlisteners)
- [removeAllListeners](sparseStream.SparseWritable.md#removealllisteners)
- [removeListener](sparseStream.SparseWritable.md#removelistener)
- [setMaxListeners](sparseStream.SparseWritable.md#setmaxlisteners)
- [write](sparseStream.SparseWritable.md#write)

## Properties

### writable

• **writable**: `boolean`

#### Inherited from

NodeJS.WritableStream.writable

#### Defined in

node_modules/@types/node/globals.d.ts:287

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

NodeJS.WritableStream.[captureRejectionSymbol]

#### Defined in

node_modules/@types/node/events.d.ts:540

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SparseStreamChunk`](sparseStream.SparseStreamChunk.md) |
| `encoding` | `string` |
| `callback` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Defined in

[lib/sparse-stream/shared.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/shared.ts#L49)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.WritableStream.addListener

#### Defined in

node_modules/@types/node/events.d.ts:545

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

NodeJS.WritableStream.emit

#### Defined in

node_modules/@types/node/events.d.ts:807

___

### end

▸ **end**(`cb?`): [`SparseWritable`](sparseStream.SparseWritable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`SparseWritable`](sparseStream.SparseWritable.md)

#### Inherited from

NodeJS.WritableStream.end

#### Defined in

node_modules/@types/node/globals.d.ts:290

▸ **end**(`data`, `cb?`): [`SparseWritable`](sparseStream.SparseWritable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |
| `cb?` | () => `void` |

#### Returns

[`SparseWritable`](sparseStream.SparseWritable.md)

#### Inherited from

NodeJS.WritableStream.end

#### Defined in

node_modules/@types/node/globals.d.ts:291

▸ **end**(`str`, `encoding?`, `cb?`): [`SparseWritable`](sparseStream.SparseWritable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`SparseWritable`](sparseStream.SparseWritable.md)

#### Inherited from

NodeJS.WritableStream.end

#### Defined in

node_modules/@types/node/globals.d.ts:292

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

NodeJS.WritableStream.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:870

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

NodeJS.WritableStream.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:722

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

NodeJS.WritableStream.listenerCount

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

NodeJS.WritableStream.listeners

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### off

▸ **off**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v10.0.0

#### Inherited from

NodeJS.WritableStream.off

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### on

▸ **on**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.1.101

#### Inherited from

NodeJS.WritableStream.on

#### Defined in

node_modules/@types/node/events.d.ts:577

___

### once

▸ **once**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.3.0

#### Inherited from

NodeJS.WritableStream.once

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v6.0.0

#### Inherited from

NodeJS.WritableStream.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:834

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v6.0.0

#### Inherited from

NodeJS.WritableStream.prependOnceListener

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

NodeJS.WritableStream.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:766

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.WritableStream.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:706

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.1.26

#### Inherited from

NodeJS.WritableStream.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SparseWritable`](sparseStream.SparseWritable.md)

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

[`SparseWritable`](sparseStream.SparseWritable.md)

**`Since`**

v0.3.5

#### Inherited from

NodeJS.WritableStream.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:716

___

### write

▸ **write**(`buffer`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `string` \| `Uint8Array` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

NodeJS.WritableStream.write

#### Defined in

node_modules/@types/node/globals.d.ts:288

▸ **write**(`str`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`err?`: ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

NodeJS.WritableStream.write

#### Defined in

node_modules/@types/node/globals.d.ts:289
