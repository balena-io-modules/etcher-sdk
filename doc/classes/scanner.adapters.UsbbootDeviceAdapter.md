[etcher-sdk](../README.md) / [scanner](../modules/scanner.md) / [adapters](../modules/scanner.adapters.md) / UsbbootDeviceAdapter

# Class: UsbbootDeviceAdapter

[scanner](../modules/scanner.md).[adapters](../modules/scanner.adapters.md).UsbbootDeviceAdapter

## Hierarchy

- [`Adapter`](scanner.adapters.Adapter.md)

  ↳ **`UsbbootDeviceAdapter`**

## Table of contents

### Constructors

- [constructor](scanner.adapters.UsbbootDeviceAdapter.md#constructor)

### Properties

- [drives](scanner.adapters.UsbbootDeviceAdapter.md#drives)
- [scanner](scanner.adapters.UsbbootDeviceAdapter.md#scanner)
- [captureRejectionSymbol](scanner.adapters.UsbbootDeviceAdapter.md#capturerejectionsymbol)
- [captureRejections](scanner.adapters.UsbbootDeviceAdapter.md#capturerejections)
- [defaultMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#defaultmaxlisteners)
- [errorMonitor](scanner.adapters.UsbbootDeviceAdapter.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](scanner.adapters.UsbbootDeviceAdapter.md#[capturerejectionsymbol])
- [addListener](scanner.adapters.UsbbootDeviceAdapter.md#addlistener)
- [emit](scanner.adapters.UsbbootDeviceAdapter.md#emit)
- [eventNames](scanner.adapters.UsbbootDeviceAdapter.md#eventnames)
- [getMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#getmaxlisteners)
- [listenerCount](scanner.adapters.UsbbootDeviceAdapter.md#listenercount)
- [listeners](scanner.adapters.UsbbootDeviceAdapter.md#listeners)
- [off](scanner.adapters.UsbbootDeviceAdapter.md#off)
- [on](scanner.adapters.UsbbootDeviceAdapter.md#on)
- [onAttach](scanner.adapters.UsbbootDeviceAdapter.md#onattach)
- [onDetach](scanner.adapters.UsbbootDeviceAdapter.md#ondetach)
- [once](scanner.adapters.UsbbootDeviceAdapter.md#once)
- [prependListener](scanner.adapters.UsbbootDeviceAdapter.md#prependlistener)
- [prependOnceListener](scanner.adapters.UsbbootDeviceAdapter.md#prependoncelistener)
- [rawListeners](scanner.adapters.UsbbootDeviceAdapter.md#rawlisteners)
- [removeAllListeners](scanner.adapters.UsbbootDeviceAdapter.md#removealllisteners)
- [removeListener](scanner.adapters.UsbbootDeviceAdapter.md#removelistener)
- [setMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#setmaxlisteners)
- [start](scanner.adapters.UsbbootDeviceAdapter.md#start)
- [stop](scanner.adapters.UsbbootDeviceAdapter.md#stop)
- [addAbortListener](scanner.adapters.UsbbootDeviceAdapter.md#addabortlistener)
- [getEventListeners](scanner.adapters.UsbbootDeviceAdapter.md#geteventlisteners)
- [getMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#getmaxlisteners-1)
- [listenerCount](scanner.adapters.UsbbootDeviceAdapter.md#listenercount-1)
- [on](scanner.adapters.UsbbootDeviceAdapter.md#on-1)
- [once](scanner.adapters.UsbbootDeviceAdapter.md#once-1)
- [setMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#setmaxlisteners-1)

## Constructors

### constructor

• **new UsbbootDeviceAdapter**()

#### Overrides

[Adapter](scanner.adapters.Adapter.md).[constructor](scanner.adapters.Adapter.md#constructor)

#### Defined in

[lib/scanner/adapters/usbboot.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L30)

## Properties

### drives

• `Private` **drives**: `Map`<`UsbbootDevice`, [`UsbbootDrive`](sourceDestination.UsbbootDrive.md)\>

#### Defined in

[lib/scanner/adapters/usbboot.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L27)

___

### scanner

• `Private` `Optional` **scanner**: `UsbbootScanner`

#### Defined in

[lib/scanner/adapters/usbboot.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L28)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[captureRejectionSymbol](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[captureRejections](scanner.adapters.Adapter.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[defaultMaxListeners](scanner.adapters.Adapter.md#defaultmaxlisteners)

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

[Adapter](scanner.adapters.Adapter.md).[errorMonitor](scanner.adapters.Adapter.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:404

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

[Adapter](scanner.adapters.Adapter.md).[[captureRejectionSymbol]](scanner.adapters.Adapter.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.1.26

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[addListener](scanner.adapters.Adapter.md#addlistener)

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

[Adapter](scanner.adapters.Adapter.md).[emit](scanner.adapters.Adapter.md#emit)

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

[Adapter](scanner.adapters.Adapter.md).[eventNames](scanner.adapters.Adapter.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](scanner.adapters.UsbbootDeviceAdapter.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[getMaxListeners](scanner.adapters.Adapter.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:647

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

[Adapter](scanner.adapters.Adapter.md).[listenerCount](scanner.adapters.Adapter.md#listenercount)

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

[Adapter](scanner.adapters.Adapter.md).[listeners](scanner.adapters.Adapter.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### off

▸ **off**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v10.0.0

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[off](scanner.adapters.Adapter.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### on

▸ **on**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.1.101

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[on](scanner.adapters.Adapter.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:506

___

### onAttach

▸ `Private` **onAttach**(`device`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `UsbbootDevice` |

#### Returns

`void`

#### Defined in

[lib/scanner/adapters/usbboot.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L53)

___

### onDetach

▸ `Private` **onDetach**(`device`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `UsbbootDevice` |

#### Returns

`void`

#### Defined in

[lib/scanner/adapters/usbboot.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L62)

___

### once

▸ **once**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.3.0

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[once](scanner.adapters.Adapter.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:535

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v6.0.0

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[prependListener](scanner.adapters.Adapter.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:759

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v6.0.0

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[prependOnceListener](scanner.adapters.Adapter.md#prependoncelistener)

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

[Adapter](scanner.adapters.Adapter.md).[rawListeners](scanner.adapters.Adapter.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.1.26

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[removeAllListeners](scanner.adapters.Adapter.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.1.26

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[removeListener](scanner.adapters.Adapter.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:615

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

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

[`UsbbootDeviceAdapter`](scanner.adapters.UsbbootDeviceAdapter.md)

**`Since`**

v0.3.5

#### Inherited from

[Adapter](scanner.adapters.Adapter.md).[setMaxListeners](scanner.adapters.Adapter.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:641

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[Adapter](scanner.adapters.Adapter.md).[start](scanner.adapters.Adapter.md#start)

#### Defined in

[lib/scanner/adapters/usbboot.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L45)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[Adapter](scanner.adapters.Adapter.md).[stop](scanner.adapters.Adapter.md#stop)

#### Defined in

[lib/scanner/adapters/usbboot.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/usbboot.ts#L49)

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

[Adapter](scanner.adapters.Adapter.md).[addAbortListener](scanner.adapters.Adapter.md#addabortlistener)

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

[Adapter](scanner.adapters.Adapter.md).[getEventListeners](scanner.adapters.Adapter.md#geteventlisteners)

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

[Adapter](scanner.adapters.Adapter.md).[getMaxListeners](scanner.adapters.Adapter.md#getmaxlisteners-1)

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

[Adapter](scanner.adapters.Adapter.md).[listenerCount](scanner.adapters.Adapter.md#listenercount-1)

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

[Adapter](scanner.adapters.Adapter.md).[on](scanner.adapters.Adapter.md#on-1)

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

[Adapter](scanner.adapters.Adapter.md).[once](scanner.adapters.Adapter.md#once-1)

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

[Adapter](scanner.adapters.Adapter.md).[once](scanner.adapters.Adapter.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:204

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

[Adapter](scanner.adapters.Adapter.md).[setMaxListeners](scanner.adapters.Adapter.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:359