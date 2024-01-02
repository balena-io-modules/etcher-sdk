[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / CountingHashStream

# Class: CountingHashStream

[sourceDestination](../modules/sourceDestination.md).CountingHashStream

## Hierarchy

- `HashStream`

  ↳ **`CountingHashStream`**

## Table of contents

### Constructors

- [constructor](sourceDestination.CountingHashStream.md#constructor)

### Properties

- [allowHalfOpen](sourceDestination.CountingHashStream.md#allowhalfopen)
- [bytesWritten](sourceDestination.CountingHashStream.md#byteswritten)
- [closed](sourceDestination.CountingHashStream.md#closed)
- [destroyed](sourceDestination.CountingHashStream.md#destroyed)
- [errored](sourceDestination.CountingHashStream.md#errored)
- [readable](sourceDestination.CountingHashStream.md#readable)
- [readableAborted](sourceDestination.CountingHashStream.md#readableaborted)
- [readableDidRead](sourceDestination.CountingHashStream.md#readabledidread)
- [readableEncoding](sourceDestination.CountingHashStream.md#readableencoding)
- [readableEnded](sourceDestination.CountingHashStream.md#readableended)
- [readableFlowing](sourceDestination.CountingHashStream.md#readableflowing)
- [readableHighWaterMark](sourceDestination.CountingHashStream.md#readablehighwatermark)
- [readableLength](sourceDestination.CountingHashStream.md#readablelength)
- [readableObjectMode](sourceDestination.CountingHashStream.md#readableobjectmode)
- [writable](sourceDestination.CountingHashStream.md#writable)
- [writableCorked](sourceDestination.CountingHashStream.md#writablecorked)
- [writableEnded](sourceDestination.CountingHashStream.md#writableended)
- [writableFinished](sourceDestination.CountingHashStream.md#writablefinished)
- [writableHighWaterMark](sourceDestination.CountingHashStream.md#writablehighwatermark)
- [writableLength](sourceDestination.CountingHashStream.md#writablelength)
- [writableNeedDrain](sourceDestination.CountingHashStream.md#writableneeddrain)
- [writableObjectMode](sourceDestination.CountingHashStream.md#writableobjectmode)
- [captureRejectionSymbol](sourceDestination.CountingHashStream.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.CountingHashStream.md#capturerejections)
- [defaultMaxListeners](sourceDestination.CountingHashStream.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.CountingHashStream.md#errormonitor)

### Methods

- [[asyncDispose]](sourceDestination.CountingHashStream.md#[asyncdispose])
- [[asyncIterator]](sourceDestination.CountingHashStream.md#[asynciterator])
- [[captureRejectionSymbol]](sourceDestination.CountingHashStream.md#[capturerejectionsymbol])
- [\_\_transform](sourceDestination.CountingHashStream.md#__transform)
- [\_construct](sourceDestination.CountingHashStream.md#_construct)
- [\_destroy](sourceDestination.CountingHashStream.md#_destroy)
- [\_final](sourceDestination.CountingHashStream.md#_final)
- [\_flush](sourceDestination.CountingHashStream.md#_flush)
- [\_read](sourceDestination.CountingHashStream.md#_read)
- [\_transform](sourceDestination.CountingHashStream.md#_transform)
- [\_write](sourceDestination.CountingHashStream.md#_write)
- [\_writev](sourceDestination.CountingHashStream.md#_writev)
- [addListener](sourceDestination.CountingHashStream.md#addlistener)
- [asIndexedPairs](sourceDestination.CountingHashStream.md#asindexedpairs)
- [compose](sourceDestination.CountingHashStream.md#compose)
- [cork](sourceDestination.CountingHashStream.md#cork)
- [destroy](sourceDestination.CountingHashStream.md#destroy)
- [drop](sourceDestination.CountingHashStream.md#drop)
- [emit](sourceDestination.CountingHashStream.md#emit)
- [end](sourceDestination.CountingHashStream.md#end)
- [eventNames](sourceDestination.CountingHashStream.md#eventnames)
- [every](sourceDestination.CountingHashStream.md#every)
- [filter](sourceDestination.CountingHashStream.md#filter)
- [find](sourceDestination.CountingHashStream.md#find)
- [flatMap](sourceDestination.CountingHashStream.md#flatmap)
- [forEach](sourceDestination.CountingHashStream.md#foreach)
- [getMaxListeners](sourceDestination.CountingHashStream.md#getmaxlisteners)
- [isPaused](sourceDestination.CountingHashStream.md#ispaused)
- [iterator](sourceDestination.CountingHashStream.md#iterator)
- [listenerCount](sourceDestination.CountingHashStream.md#listenercount)
- [listeners](sourceDestination.CountingHashStream.md#listeners)
- [map](sourceDestination.CountingHashStream.md#map)
- [off](sourceDestination.CountingHashStream.md#off)
- [on](sourceDestination.CountingHashStream.md#on)
- [once](sourceDestination.CountingHashStream.md#once)
- [pause](sourceDestination.CountingHashStream.md#pause)
- [pipe](sourceDestination.CountingHashStream.md#pipe)
- [prependListener](sourceDestination.CountingHashStream.md#prependlistener)
- [prependOnceListener](sourceDestination.CountingHashStream.md#prependoncelistener)
- [push](sourceDestination.CountingHashStream.md#push)
- [rawListeners](sourceDestination.CountingHashStream.md#rawlisteners)
- [read](sourceDestination.CountingHashStream.md#read)
- [reduce](sourceDestination.CountingHashStream.md#reduce)
- [removeAllListeners](sourceDestination.CountingHashStream.md#removealllisteners)
- [removeListener](sourceDestination.CountingHashStream.md#removelistener)
- [resume](sourceDestination.CountingHashStream.md#resume)
- [setDefaultEncoding](sourceDestination.CountingHashStream.md#setdefaultencoding)
- [setEncoding](sourceDestination.CountingHashStream.md#setencoding)
- [setMaxListeners](sourceDestination.CountingHashStream.md#setmaxlisteners)
- [some](sourceDestination.CountingHashStream.md#some)
- [take](sourceDestination.CountingHashStream.md#take)
- [toArray](sourceDestination.CountingHashStream.md#toarray)
- [uncork](sourceDestination.CountingHashStream.md#uncork)
- [unpipe](sourceDestination.CountingHashStream.md#unpipe)
- [unshift](sourceDestination.CountingHashStream.md#unshift)
- [wrap](sourceDestination.CountingHashStream.md#wrap)
- [write](sourceDestination.CountingHashStream.md#write)
- [addAbortListener](sourceDestination.CountingHashStream.md#addabortlistener)
- [from](sourceDestination.CountingHashStream.md#from)
- [fromWeb](sourceDestination.CountingHashStream.md#fromweb)
- [getEventListeners](sourceDestination.CountingHashStream.md#geteventlisteners)
- [getMaxListeners](sourceDestination.CountingHashStream.md#getmaxlisteners-1)
- [isDisturbed](sourceDestination.CountingHashStream.md#isdisturbed)
- [listenerCount](sourceDestination.CountingHashStream.md#listenercount-1)
- [on](sourceDestination.CountingHashStream.md#on-1)
- [once](sourceDestination.CountingHashStream.md#once-1)
- [setMaxListeners](sourceDestination.CountingHashStream.md#setmaxlisteners-1)
- [toWeb](sourceDestination.CountingHashStream.md#toweb)

## Constructors

### constructor

• **new CountingHashStream**(`seed`, `outEnc`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `Buffer` |
| `outEnc` | `string` \| `Buffer` |

#### Inherited from

HashStream.constructor

#### Defined in

[lib/source-destination/source-destination.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L47)

## Properties

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `false`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`Since`**

v0.9.4

#### Inherited from

HashStream.allowHalfOpen

#### Defined in

node_modules/@types/node/stream.d.ts:1060

___

### bytesWritten

• **bytesWritten**: `number` = `0`

#### Defined in

[lib/source-destination/source-destination.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L67)

___

### closed

• `Readonly` **closed**: `boolean`

#### Inherited from

HashStream.closed

#### Defined in

node_modules/@types/node/stream.d.ts:1049

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`Since`**

v8.0.0

#### Inherited from

HashStream.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:145

___

### errored

• `Readonly` **errored**: ``null`` \| `Error`

#### Inherited from

HashStream.errored

#### Defined in

node_modules/@types/node/stream.d.ts:1050

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`Since`**

v11.4.0

#### Inherited from

HashStream.readable

#### Defined in

node_modules/@types/node/stream.d.ts:101

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`Since`**

v16.8.0

#### Inherited from

HashStream.readableAborted

#### Defined in

node_modules/@types/node/stream.d.ts:95

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`Since`**

v16.7.0, v14.18.0

#### Inherited from

HashStream.readableDidRead

#### Defined in

node_modules/@types/node/stream.d.ts:107

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`Since`**

v12.7.0

#### Inherited from

HashStream.readableEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:112

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`Since`**

v12.9.0

#### Inherited from

HashStream.readableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:117

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`Since`**

v9.4.0

#### Inherited from

HashStream.readableFlowing

#### Defined in

node_modules/@types/node/stream.d.ts:123

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`Since`**

v9.3.0

#### Inherited from

HashStream.readableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:128

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

HashStream.readableLength

#### Defined in

node_modules/@types/node/stream.d.ts:135

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`Since`**

v12.3.0

#### Inherited from

HashStream.readableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:140

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

HashStream.writable

#### Defined in

node_modules/@types/node/stream.d.ts:1041

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

HashStream.writableCorked

#### Defined in

node_modules/@types/node/stream.d.ts:1047

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

HashStream.writableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:1042

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

HashStream.writableFinished

#### Defined in

node_modules/@types/node/stream.d.ts:1043

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

HashStream.writableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:1044

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

HashStream.writableLength

#### Defined in

node_modules/@types/node/stream.d.ts:1045

___

### writableNeedDrain

• `Readonly` **writableNeedDrain**: `boolean`

#### Inherited from

HashStream.writableNeedDrain

#### Defined in

node_modules/@types/node/stream.d.ts:1048

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

HashStream.writableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:1046

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

#### Inherited from

HashStream.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:405

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

HashStream.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:410

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

HashStream.defaultMaxListeners

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

HashStream.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:404

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`<`void`\>

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`<`void`\>

**`Since`**

v18.18.0

#### Inherited from

HashStream.[asyncDispose]

#### Defined in

node_modules/@types/node/stream.d.ts:682

___

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

HashStream.[asyncIterator]

#### Defined in

node_modules/@types/node/stream.d.ts:677

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

HashStream.[captureRejectionSymbol]

#### Defined in

node_modules/@types/node/events.d.ts:115

___

### \_\_transform

▸ **__transform**(`chunk`, `encoding`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `AlignedLockableBuffer` \| `Buffer` |
| `encoding` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/source-destination/source-destination.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L69)

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_construct

#### Defined in

node_modules/@types/node/stream.d.ts:157

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:1103

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_final

#### Defined in

node_modules/@types/node/stream.d.ts:1104

___

### \_flush

▸ **_flush**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_flush

#### Defined in

[lib/source-destination/source-destination.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L60)

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

HashStream.\_read

#### Defined in

node_modules/@types/node/stream.d.ts:158

___

### \_transform

▸ **_transform**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `AlignedLockableBuffer` \| `Buffer` |
| `encoding` | `string` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

HashStream.\_transform

#### Defined in

[lib/source-destination/source-destination.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L86)

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_write

#### Defined in

node_modules/@types/node/stream.d.ts:1095

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

HashStream.\_writev

#### Defined in

node_modules/@types/node/stream.d.ts:1096

___

### addListener

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

Event emitter
The defined events on documents including:
1.  close
2.  data
3.  drain
4.  end
5.  error
6.  finish
7.  pause
8.  pipe
9.  readable
10. resume
11. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1128

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1129

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1130

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1131

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1132

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1133

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1134

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1135

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1136

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1137

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1138

▸ **addListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:1139

___

### asIndexedPairs

▸ **asIndexedPairs**(`options?`): `Readable`

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> |

#### Returns

`Readable`

a stream of indexed pairs.

**`Since`**

v17.5.0

#### Inherited from

HashStream.asIndexedPairs

#### Defined in

node_modules/@types/node/stream.d.ts:572

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

HashStream.compose

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

HashStream.cork

#### Defined in

node_modules/@types/node/stream.d.ts:1111

___

### destroy

▸ **destroy**(`error?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v8.0.0

#### Inherited from

HashStream.destroy

#### Defined in

node_modules/@types/node/stream.d.ts:609

___

### drop

▸ **drop**(`limit`, `options?`): `Readable`

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | the number of chunks to drop from the readable. |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> | - |

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

**`Since`**

v17.5.0

#### Inherited from

HashStream.drop

#### Defined in

node_modules/@types/node/stream.d.ts:558

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1140

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1141

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1142

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1143

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1144

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1145

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1146

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1147

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1148

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1149

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1150

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

HashStream.emit

#### Defined in

node_modules/@types/node/stream.d.ts:1151

___

### end

▸ **end**(`cb?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.end

#### Defined in

node_modules/@types/node/stream.d.ts:1108

▸ **end**(`chunk`, `cb?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.end

#### Defined in

node_modules/@types/node/stream.d.ts:1109

▸ **end**(`chunk`, `encoding?`, `cb?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.end

#### Defined in

node_modules/@types/node/stream.d.ts:1110

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

HashStream.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:794

___

### every

▸ **every**(`fn`, `options?`): `Promise`<`boolean`\>

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `boolean` \| `Promise`<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Promise`<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

**`Since`**

v17.5.0

#### Inherited from

HashStream.every

#### Defined in

node_modules/@types/node/stream.d.ts:537

___

### filter

▸ **filter**(`fn`, `options?`): `Readable`

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `boolean` \| `Promise`<`boolean`\> | a function to filter chunks from the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

**`Since`**

v17.4.0, v16.14.0

#### Inherited from

HashStream.filter

#### Defined in

node_modules/@types/node/stream.d.ts:465

___

### find

▸ **find**<`T`\>(`fn`, `options?`): `Promise`<`undefined` \| `T`\>

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => data is T | a function to call on each chunk of the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Promise`<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

**`Since`**

v17.5.0

#### Inherited from

HashStream.find

#### Defined in

node_modules/@types/node/stream.d.ts:520

▸ **find**(`fn`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `boolean` \| `Promise`<`boolean`\> |
| `options?` | `ArrayOptions` |

#### Returns

`Promise`<`any`\>

#### Inherited from

HashStream.find

#### Defined in

node_modules/@types/node/stream.d.ts:524

___

### flatMap

▸ **flatMap**(`fn`, `options?`): `Readable`

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `any` | a function to map over every chunk in the stream. May be async. May be a stream or generator. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

**`Since`**

v17.5.0

#### Inherited from

HashStream.flatMap

#### Defined in

node_modules/@types/node/stream.d.ts:551

___

### forEach

▸ **forEach**(`fn`, `options?`): `Promise`<`void`\>

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `void` \| `Promise`<`void`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Promise`<`void`\>

a promise for when the stream has finished.

**`Since`**

v17.5.0

#### Inherited from

HashStream.forEach

#### Defined in

node_modules/@types/node/stream.d.ts:484

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.CountingHashStream.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

HashStream.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:647

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

**`Since`**

v0.11.14

#### Inherited from

HashStream.isPaused

#### Defined in

node_modules/@types/node/stream.d.ts:318

___

### iterator

▸ **iterator**(`options?`): `AsyncIterableIterator`<`any`\>

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.destroyOnReturn?` | `boolean` | When set to `false`, calling `return` on the async iterator, or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream. **Default: `true`**. |

#### Returns

`AsyncIterableIterator`<`any`\>

**`Since`**

v16.3.0

#### Inherited from

HashStream.iterator

#### Defined in

node_modules/@types/node/stream.d.ts:448

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

HashStream.listenerCount

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

HashStream.listeners

#### Defined in

node_modules/@types/node/events.d.ts:660

___

### map

▸ **map**(`fn`, `options?`): `Readable`

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `any` | a function to map over every chunk in the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Readable`

a stream mapped with the function *fn*.

**`Since`**

v17.4.0, v16.14.0

#### Inherited from

HashStream.map

#### Defined in

node_modules/@types/node/stream.d.ts:456

___

### off

▸ **off**(`eventName`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v10.0.0

#### Inherited from

HashStream.off

#### Defined in

node_modules/@types/node/events.d.ts:620

___

### on

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1152

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1153

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1154

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1155

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1156

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1157

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1158

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1159

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1160

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1161

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1162

▸ **on**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.on

#### Defined in

node_modules/@types/node/stream.d.ts:1163

___

### once

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1164

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1165

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1166

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1167

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1168

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1169

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1170

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1171

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1172

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1173

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1174

▸ **once**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.once

#### Defined in

node_modules/@types/node/stream.d.ts:1175

___

### pause

▸ **pause**(): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.9.4

#### Inherited from

HashStream.pause

#### Defined in

node_modules/@types/node/stream.d.ts:282

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

HashStream.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:29

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1176

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1177

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1178

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1179

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1180

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1181

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1182

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1183

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1184

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1185

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1186

▸ **prependListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:1187

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1188

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1189

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1190

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1191

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1192

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1193

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1194

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1195

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1196

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1197

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1198

▸ **prependOnceListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:1199

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

HashStream.push

#### Defined in

node_modules/@types/node/stream.d.ts:438

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

HashStream.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](../interfaces/sourceDestination.SourceTransform.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

**`Since`**

v0.9.4

#### Inherited from

HashStream.read

#### Defined in

node_modules/@types/node/stream.d.ts:235

___

### reduce

▸ **reduce**<`T`\>(`fn`, `initial?`, `options?`): `Promise`<`T`\>

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`previous`: `any`, `data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `T` | a reducer function to call over every chunk in the stream. Async or not. |
| `initial?` | `undefined` | the initial value to use in the reduction. |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> | - |

#### Returns

`Promise`<`T`\>

a promise for the final value of the reduction.

**`Since`**

v17.5.0

#### Inherited from

HashStream.reduce

#### Defined in

node_modules/@types/node/stream.d.ts:587

▸ **reduce**<`T`\>(`fn`, `initial`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`previous`: `T`, `data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `T` |
| `initial` | `T` |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

HashStream.reduce

#### Defined in

node_modules/@types/node/stream.d.ts:592

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

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

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.1.26

#### Inherited from

HashStream.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:631

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1200

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1201

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1202

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1203

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1204

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1205

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1206

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1207

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1208

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1209

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1210

▸ **removeListener**(`event`, `listener`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:1211

___

### resume

▸ **resume**(): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.9.4

#### Inherited from

HashStream.resume

#### Defined in

node_modules/@types/node/stream.d.ts:301

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

#### Inherited from

HashStream.setDefaultEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:1107

___

### setEncoding

▸ **setEncoding**(`encoding`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.9.4

#### Inherited from

HashStream.setEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:260

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

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

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.3.5

#### Inherited from

HashStream.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:641

___

### some

▸ **some**(`fn`, `options?`): `Promise`<`boolean`\>

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`data`: `any`, `options?`: `Pick`<`ArrayOptions`, ``"signal"``\>) => `boolean` \| `Promise`<`boolean`\> | a function to call on each chunk of the stream. Async or not. |
| `options?` | `ArrayOptions` | - |

#### Returns

`Promise`<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

**`Since`**

v17.5.0

#### Inherited from

HashStream.some

#### Defined in

node_modules/@types/node/stream.d.ts:506

___

### take

▸ **take**(`limit`, `options?`): `Readable`

This method returns a new stream with the first *limit* chunks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | the number of chunks to take from the readable. |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> | - |

#### Returns

`Readable`

a stream with *limit* chunks taken.

**`Since`**

v17.5.0

#### Inherited from

HashStream.take

#### Defined in

node_modules/@types/node/stream.d.ts:565

___

### toArray

▸ **toArray**(`options?`): `Promise`<`any`[]\>

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Pick`<`ArrayOptions`, ``"signal"``\> |

#### Returns

`Promise`<`any`[]\>

a promise containing an array with the contents of the stream.

**`Since`**

v17.5.0

#### Inherited from

HashStream.toArray

#### Defined in

node_modules/@types/node/stream.d.ts:496

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

HashStream.uncork

#### Defined in

node_modules/@types/node/stream.d.ts:1112

___

### unpipe

▸ **unpipe**(`destination?`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](../interfaces/sourceDestination.SourceTransform.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | `WritableStream` | Optional specific stream to unpipe |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.9.4

#### Inherited from

HashStream.unpipe

#### Defined in

node_modules/@types/node/stream.d.ts:345

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](../interfaces/sourceDestination.SourceTransform.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](../interfaces/sourceDestination.SourceTransform.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](../interfaces/sourceDestination.SourceTransform.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

**`Since`**

v0.9.11

#### Inherited from

HashStream.unshift

#### Defined in

node_modules/@types/node/stream.d.ts:411

___

### wrap

▸ **wrap**(`stream`): [`CountingHashStream`](sourceDestination.CountingHashStream.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](../interfaces/sourceDestination.SourceTransform.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `ReadableStream` | An "old style" readable stream |

#### Returns

[`CountingHashStream`](sourceDestination.CountingHashStream.md)

**`Since`**

v0.9.4

#### Inherited from

HashStream.wrap

#### Defined in

node_modules/@types/node/stream.d.ts:437

___

### write

▸ **write**(`chunk`, `encoding?`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

HashStream.write

#### Defined in

node_modules/@types/node/stream.d.ts:1105

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

HashStream.write

#### Defined in

node_modules/@types/node/stream.d.ts:1106

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

HashStream.addAbortListener

#### Defined in

node_modules/@types/node/events.d.ts:394

___

### from

▸ `Static` **from**(`src`): `Duplex`

A utility method for creating duplex streams.

- `Stream` converts writable stream into writable `Duplex` and readable stream
  to `Duplex`.
- `Blob` converts into readable `Duplex`.
- `string` converts into readable `Duplex`.
- `ArrayBuffer` converts into readable `Duplex`.
- `AsyncIterable` converts into a readable `Duplex`. Cannot yield `null`.
- `AsyncGeneratorFunction` converts into a readable/writable transform
  `Duplex`. Must take a source `AsyncIterable` as first parameter. Cannot yield
  `null`.
- `AsyncFunction` converts into a writable `Duplex`. Must return
  either `null` or `undefined`
- `Object ({ writable, readable })` converts `readable` and
  `writable` into `Stream` and then combines them into `Duplex` where the
  `Duplex` will write to the `writable` and read from the `readable`.
- `Promise` converts into readable `Duplex`. Value `null` is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` \| `Object` \| `ArrayBuffer` \| `Promise`<`any`\> \| `AsyncGeneratorFunction` \| `Blob` \| `Stream` \| `Iterable`<`any`\> \| `AsyncIterable`<`any`\> |

#### Returns

`Duplex`

**`Since`**

v16.8.0

#### Inherited from

HashStream.from

#### Defined in

node_modules/@types/node/stream.d.ts:1083

___

### fromWeb

▸ `Static` **fromWeb**(`readableStream`, `options?`): `Readable`

A utility method for creating a `Readable` from a web `ReadableStream`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `readableStream` | `ReadableStream`<`any`\> |
| `options?` | `Pick`<`ReadableOptions`, ``"signal"`` \| ``"encoding"`` \| ``"highWaterMark"`` \| ``"objectMode"``\> |

#### Returns

`Readable`

**`Since`**

v17.0.0

#### Inherited from

HashStream.fromWeb

#### Defined in

node_modules/@types/node/stream.d.ts:75

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

HashStream.getEventListeners

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

HashStream.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:341

___

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream` \| `Readable` |

#### Returns

`boolean`

**`Since`**

v16.8.0

#### Inherited from

HashStream.isDisturbed

#### Defined in

node_modules/@types/node/stream.d.ts:83

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

HashStream.listenerCount

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

HashStream.on

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

HashStream.once

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

HashStream.once

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

HashStream.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### toWeb

▸ `Static` **toWeb**(`streamReadable`): `ReadableStream`<`any`\>

A utility method for creating a web `ReadableStream` from a `Readable`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamReadable` | `Readable` |

#### Returns

`ReadableStream`<`any`\>

**`Since`**

v17.0.0

#### Inherited from

HashStream.toWeb

#### Defined in

node_modules/@types/node/stream.d.ts:89