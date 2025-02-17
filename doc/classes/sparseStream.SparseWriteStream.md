[etcher-sdk](../README.md) / [sparseStream](../modules/sparseStream.md) / SparseWriteStream

# Class: SparseWriteStream

[sparseStream](../modules/sparseStream.md).SparseWriteStream

## Hierarchy

- `Writable`

  ↳ **`SparseWriteStream`**

## Implements

- [`SparseWritable`](../interfaces/sparseStream.SparseWritable.md)

## Table of contents

### Constructors

- [constructor](sparseStream.SparseWriteStream.md#constructor)

### Properties

- [\_firstChunks](sparseStream.SparseWriteStream.md#_firstchunks)
- [bytesWritten](sparseStream.SparseWriteStream.md#byteswritten)
- [closed](sparseStream.SparseWriteStream.md#closed)
- [destination](sparseStream.SparseWriteStream.md#destination)
- [destroyed](sparseStream.SparseWriteStream.md#destroyed)
- [errored](sparseStream.SparseWriteStream.md#errored)
- [firstBytesToKeep](sparseStream.SparseWriteStream.md#firstbytestokeep)
- [maxRetries](sparseStream.SparseWriteStream.md#maxretries)
- [position](sparseStream.SparseWriteStream.md#position)
- [writable](sparseStream.SparseWriteStream.md#writable)
- [writableCorked](sparseStream.SparseWriteStream.md#writablecorked)
- [writableEnded](sparseStream.SparseWriteStream.md#writableended)
- [writableFinished](sparseStream.SparseWriteStream.md#writablefinished)
- [writableHighWaterMark](sparseStream.SparseWriteStream.md#writablehighwatermark)
- [writableLength](sparseStream.SparseWriteStream.md#writablelength)
- [writableNeedDrain](sparseStream.SparseWriteStream.md#writableneeddrain)
- [writableObjectMode](sparseStream.SparseWriteStream.md#writableobjectmode)
- [captureRejectionSymbol](sparseStream.SparseWriteStream.md#capturerejectionsymbol)
- [captureRejections](sparseStream.SparseWriteStream.md#capturerejections)
- [defaultMaxListeners](sparseStream.SparseWriteStream.md#defaultmaxlisteners)
- [errorMonitor](sparseStream.SparseWriteStream.md#errormonitor)

### Methods

- [[captureRejectionSymbol]](sparseStream.SparseWriteStream.md#[capturerejectionsymbol])
- [\_\_final](sparseStream.SparseWriteStream.md#__final)
- [\_\_write](sparseStream.SparseWriteStream.md#__write)
- [\_construct](sparseStream.SparseWriteStream.md#_construct)
- [\_destroy](sparseStream.SparseWriteStream.md#_destroy)
- [\_final](sparseStream.SparseWriteStream.md#_final)
- [\_write](sparseStream.SparseWriteStream.md#_write)
- [\_writev](sparseStream.SparseWriteStream.md#_writev)
- [addListener](sparseStream.SparseWriteStream.md#addlistener)
- [compose](sparseStream.SparseWriteStream.md#compose)
- [copyChunk](sparseStream.SparseWriteStream.md#copychunk)
- [cork](sparseStream.SparseWriteStream.md#cork)
- [destroy](sparseStream.SparseWriteStream.md#destroy)
- [emit](sparseStream.SparseWriteStream.md#emit)
- [end](sparseStream.SparseWriteStream.md#end)
- [eventNames](sparseStream.SparseWriteStream.md#eventnames)
- [getMaxListeners](sparseStream.SparseWriteStream.md#getmaxlisteners)
- [listenerCount](sparseStream.SparseWriteStream.md#listenercount)
- [listeners](sparseStream.SparseWriteStream.md#listeners)
- [off](sparseStream.SparseWriteStream.md#off)
- [on](sparseStream.SparseWriteStream.md#on)
- [once](sparseStream.SparseWriteStream.md#once)
- [pipe](sparseStream.SparseWriteStream.md#pipe)
- [prependListener](sparseStream.SparseWriteStream.md#prependlistener)
- [prependOnceListener](sparseStream.SparseWriteStream.md#prependoncelistener)
- [rawListeners](sparseStream.SparseWriteStream.md#rawlisteners)
- [removeAllListeners](sparseStream.SparseWriteStream.md#removealllisteners)
- [removeListener](sparseStream.SparseWriteStream.md#removelistener)
- [setDefaultEncoding](sparseStream.SparseWriteStream.md#setdefaultencoding)
- [setMaxListeners](sparseStream.SparseWriteStream.md#setmaxlisteners)
- [uncork](sparseStream.SparseWriteStream.md#uncork)
- [write](sparseStream.SparseWriteStream.md#write)
- [writeChunk](sparseStream.SparseWriteStream.md#writechunk)
- [addAbortListener](sparseStream.SparseWriteStream.md#addabortlistener)
- [fromWeb](sparseStream.SparseWriteStream.md#fromweb)
- [getEventListeners](sparseStream.SparseWriteStream.md#geteventlisteners)
- [getMaxListeners](sparseStream.SparseWriteStream.md#getmaxlisteners-1)
- [listenerCount](sparseStream.SparseWriteStream.md#listenercount-1)
- [on](sparseStream.SparseWriteStream.md#on-1)
- [once](sparseStream.SparseWriteStream.md#once-1)
- [setMaxListeners](sparseStream.SparseWriteStream.md#setmaxlisteners-1)
- [toWeb](sparseStream.SparseWriteStream.md#toweb)

## Constructors

### constructor

• **new SparseWriteStream**(`«destructured»`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `destination` | [`SourceDestination`](sourceDestination.SourceDestination.md) |
| › `firstBytesToKeep?` | `number` |
| › `highWaterMark?` | `number` |
| › `maxRetries?` | `number` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Overrides

Writable.constructor

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L20)

## Properties

### \_firstChunks

• `Private` **\_firstChunks**: [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md)[] = `[]`

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L18)

___

### bytesWritten

• **bytesWritten**: `number` = `0`

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:17](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L17)

___

### closed

• `Readonly` **closed**: `boolean`

Is `true` after `'close'` has been emitted.

**`Since`**

v18.0.0

#### Inherited from

Writable.closed

#### Defined in

node_modules/@types/node/stream.d.ts:704

___

### destination

• `Private` **destination**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:13](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L13)

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`Since`**

v8.0.0

#### Inherited from

Writable.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:699

___

### errored

• `Readonly` **errored**: ``null`` \| `Error`

Returns error if the stream has been destroyed with an error.

**`Since`**

v18.0.0

#### Inherited from

Writable.errored

#### Defined in

node_modules/@types/node/stream.d.ts:709

___

### firstBytesToKeep

• **firstBytesToKeep**: `number`

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:14](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L14)

___

### maxRetries

• `Private` **maxRetries**: `number`

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:15](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L15)

___

### position

• **position**: `number`

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:16](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L16)

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

**`Since`**

v11.4.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[writable](../interfaces/sparseStream.SparseWritable.md#writable)

#### Inherited from

Writable.writable

#### Defined in

node_modules/@types/node/stream.d.ts:660

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`Since`**

v13.2.0, v12.16.0

#### Inherited from

Writable.writableCorked

#### Defined in

node_modules/@types/node/stream.d.ts:694

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`Since`**

v12.9.0

#### Inherited from

Writable.writableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:666

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`Since`**

v12.6.0

#### Inherited from

Writable.writableFinished

#### Defined in

node_modules/@types/node/stream.d.ts:671

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`Since`**

v9.3.0

#### Inherited from

Writable.writableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:676

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

Writable.writableLength

#### Defined in

node_modules/@types/node/stream.d.ts:683

___

### writableNeedDrain

• `Readonly` **writableNeedDrain**: `boolean`

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

Writable.writableNeedDrain

#### Defined in

node_modules/@types/node/stream.d.ts:714

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`Since`**

v12.3.0

#### Inherited from

Writable.writableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:688

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

Writable.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:402

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

Writable.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:409

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

Writable.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:446

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](scanner.adapters.Adapter.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

Writable.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:395

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

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[[captureRejectionSymbol]](../interfaces/sparseStream.SparseWritable.md#[capturerejectionsymbol])

#### Inherited from

Writable.[captureRejectionSymbol]

#### Defined in

node_modules/@types/node/events.d.ts:112

___

### \_\_final

▸ **__final**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:118](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L118)

___

### \_\_write

▸ **__write**(`chunk`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:73](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L73)

___

### \_construct

▸ **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

Writable.\_construct

#### Defined in

node_modules/@types/node/stream.d.ts:724

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

Writable.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:725

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

**`Summary`**

Write buffered data before a stream ends, called by stream internals

#### Overrides

Writable.\_final

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:132](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L132)

___

### \_write

▸ **_write**(`chunk`, `_enc`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md) |
| `_enc` | `string` |
| `callback` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[_write](../interfaces/sparseStream.SparseWritable.md#_write)

#### Overrides

Writable.\_write

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L110)

___

### \_writev

▸ **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

Writable.\_writev

#### Defined in

node_modules/@types/node/stream.d.ts:717

___

### addListener

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[addListener](../interfaces/sparseStream.SparseWritable.md#addlistener)

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:892

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:893

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:894

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:895

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:896

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:897

▸ **addListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.addListener

#### Inherited from

Writable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:898

___

### compose

▸ **compose**<`T`\>(`stream`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ReadableStream` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ComposeFnParam` \| `T` \| `Iterable`<`T`\> \| `AsyncIterable`<`T`\> |
| `options?` | `Object` |
| `options.signal` | `AbortSignal` |

#### Returns

`T`

#### Inherited from

Writable.compose

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### copyChunk

▸ **copyChunk**(`chunk`): [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md) |

#### Returns

[`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md)

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L60)

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](sourceDestination.CountingWritable.md#uncork) or [end](sourceDestination.CountingWritable.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Inherited from

Writable.cork

#### Defined in

node_modules/@types/node/stream.d.ts:830

___

### destroy

▸ **destroy**(`error?`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Optional, an error to emit with `'error'` event. |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v8.0.0

#### Inherited from

Writable.destroy

#### Defined in

node_modules/@types/node/stream.d.ts:881

___

### emit

▸ **emit**(`event`): `boolean`

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
| `event` | ``"close"`` |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[emit](../interfaces/sparseStream.SparseWritable.md#emit)

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:899

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:900

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:901

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:902

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:903

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:904

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Implementation of

SparseWritable.emit

#### Inherited from

Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:905

___

### end

▸ **end**(`cb?`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](sourceDestination.CountingWritable.md#write) method after calling [end](sourceDestination.CountingWritable.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.9.4

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[end](../interfaces/sparseStream.SparseWritable.md#end)

#### Inherited from

Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:813

▸ **end**(`chunk`, `cb?`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[end](../interfaces/sparseStream.SparseWritable.md#end)

#### Inherited from

Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:814

▸ **end**(`chunk`, `encoding`, `cb?`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[end](../interfaces/sparseStream.SparseWritable.md#end)

#### Inherited from

Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:815

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

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[eventNames](../interfaces/sparseStream.SparseWritable.md#eventnames)

#### Inherited from

Writable.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:870

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sparseStream.SparseWriteStream.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[getMaxListeners](../interfaces/sparseStream.SparseWritable.md#getmaxlisteners)

#### Inherited from

Writable.getMaxListeners

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

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[listenerCount](../interfaces/sparseStream.SparseWritable.md#listenercount)

#### Inherited from

Writable.listenerCount

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

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[listeners](../interfaces/sparseStream.SparseWritable.md#listeners)

#### Inherited from

Writable.listeners

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### off

▸ **off**(`eventName`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v10.0.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[off](../interfaces/sparseStream.SparseWritable.md#off)

#### Inherited from

Writable.off

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### on

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.1.101

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[on](../interfaces/sparseStream.SparseWritable.md#on)

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:906

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:907

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:908

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:909

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:910

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:911

▸ **on**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.on

#### Inherited from

Writable.on

#### Defined in

node_modules/@types/node/stream.d.ts:912

___

### once

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.3.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[once](../interfaces/sparseStream.SparseWritable.md#once)

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:913

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:914

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:915

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:916

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:917

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:918

▸ **once**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.once

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/stream.d.ts:919

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

Writable.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:29

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v6.0.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[prependListener](../interfaces/sparseStream.SparseWritable.md#prependlistener)

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:920

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:921

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:922

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:923

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:924

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:925

▸ **prependListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependListener

#### Inherited from

Writable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:926

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v6.0.0

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[prependOnceListener](../interfaces/sparseStream.SparseWritable.md#prependoncelistener)

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:927

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:928

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:929

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:930

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:931

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:932

▸ **prependOnceListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.prependOnceListener

#### Inherited from

Writable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:933

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

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[rawListeners](../interfaces/sparseStream.SparseWritable.md#rawlisteners)

#### Inherited from

Writable.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:766

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.1.26

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[removeAllListeners](../interfaces/sparseStream.SparseWritable.md#removealllisteners)

#### Inherited from

Writable.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:706

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.1.26

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[removeListener](../interfaces/sparseStream.SparseWritable.md#removelistener)

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:934

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:935

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:936

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:937

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:938

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:939

▸ **removeListener**(`event`, `listener`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

#### Implementation of

SparseWritable.removeListener

#### Inherited from

Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:940

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.11.15

#### Inherited from

Writable.setDefaultEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:790

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SparseWriteStream`](sparseStream.SparseWriteStream.md)

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

[`SparseWriteStream`](sparseStream.SparseWriteStream.md)

**`Since`**

v0.3.5

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[setMaxListeners](../interfaces/sparseStream.SparseWritable.md#setmaxlisteners)

#### Inherited from

Writable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:716

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](sourceDestination.CountingWritable.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

**`Since`**

v0.11.2

#### Inherited from

Writable.uncork

#### Defined in

node_modules/@types/node/stream.d.ts:864

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](../interfaces/sourceDestination.SourceTransform.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

**`Since`**

v0.9.4

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[write](../interfaces/sparseStream.SparseWritable.md#write)

#### Inherited from

Writable.write

#### Defined in

node_modules/@types/node/stream.d.ts:783

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Implementation of

[SparseWritable](../interfaces/sparseStream.SparseWritable.md).[write](../interfaces/sparseStream.SparseWritable.md#write)

#### Inherited from

Writable.write

#### Defined in

node_modules/@types/node/stream.d.ts:784

___

### writeChunk

▸ **writeChunk**(`chunk`, `flushing?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chunk` | [`SparseStreamChunk`](../interfaces/sparseStream.SparseStreamChunk.md) | `undefined` |
| `flushing` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/sparse-stream/sparse-write-stream.ts#L37)

___

### addAbortListener

▸ **addAbortListener**(`signal`, `resource`): `Disposable`

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

v20.5.0

#### Inherited from

Writable.addAbortListener

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### fromWeb

▸ **fromWeb**(`writableStream`, `options?`): `Writable`

A utility method for creating a `Writable` from a web `WritableStream`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `writableStream` | `WritableStream`<`any`\> |
| `options?` | `Pick`<`WritableOptions`, ``"signal"`` \| ``"highWaterMark"`` \| ``"objectMode"`` \| ``"decodeStrings"``\> |

#### Returns

`Writable`

**`Since`**

v17.0.0

#### Inherited from

Writable.fromWeb

#### Defined in

node_modules/@types/node/stream.d.ts:1006

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
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

Writable.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:308

___

### getMaxListeners

▸ **getMaxListeners**(`emitter`): `number`

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

v19.9.0

#### Inherited from

Writable.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:337

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

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

Writable.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:280

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

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
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

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

Writable.on

#### Defined in

node_modules/@types/node/events.d.ts:258

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

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
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

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

Writable.once

#### Defined in

node_modules/@types/node/events.d.ts:193

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

Writable.once

#### Defined in

node_modules/@types/node/events.d.ts:198

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

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

Writable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:352

___

### toWeb

▸ **toWeb**(`streamWritable`): `WritableStream`<`any`\>

A utility method for creating a web `WritableStream` from a `Writable`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamWritable` | `Writable` |

#### Returns

`WritableStream`<`any`\>

**`Since`**

v17.0.0

#### Inherited from

Writable.toWeb

#### Defined in

node_modules/@types/node/stream.d.ts:1015
