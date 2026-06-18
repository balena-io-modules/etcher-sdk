[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / URLCompressedSource

# Class: URLCompressedSource

[sourceDestination](../modules/sourceDestination.md).URLCompressedSource

URLCompressedSource - Downloads and streams compressed images from direct URLs
Similar to BalenaS3CompressedSource but uses pre-configured URLs instead of S3 paths

Supports regular disk images (zipped or gzipped) and edison zip archives (zip only as it contains many files).
No random reads, you can't use this with ConfiguredSource.
Instead it handles the configuration on its own.
Partial compressed files are streamed from URLs.
If a partition (or disk image in the zip archive for edisons) needs configuration, it is downloaded, decompressed and recompressed.
The complete compressed stream is created from the partial compressed files from URLs and the configured parts described above.

## Hierarchy

- [`SourceDestination`](sourceDestination.SourceDestination.md)

  ↳ **`URLCompressedSource`**

## Table of contents

### Constructors

- [constructor](sourceDestination.URLCompressedSource.md#constructor)

### Properties

- [buildId](sourceDestination.URLCompressedSource.md#buildid)
- [configuration](sourceDestination.URLCompressedSource.md#configuration)
- [configuredParts](sourceDestination.URLCompressedSource.md#configuredparts)
- [deviceType](sourceDestination.URLCompressedSource.md#devicetype)
- [deviceTypeJSON](sourceDestination.URLCompressedSource.md#devicetypejson)
- [filename](sourceDestination.URLCompressedSource.md#filename)
- [filenamePrefix](sourceDestination.URLCompressedSource.md#filenameprefix)
- [format](sourceDestination.URLCompressedSource.md#format)
- [imageJSON](sourceDestination.URLCompressedSource.md#imagejson)
- [lastModified](sourceDestination.URLCompressedSource.md#lastmodified)
- [osVersion](sourceDestination.URLCompressedSource.md#osversion)
- [size](sourceDestination.URLCompressedSource.md#size)
- [supervisorVersion](sourceDestination.URLCompressedSource.md#supervisorversion)
- [urls](sourceDestination.URLCompressedSource.md#urls)
- [captureRejectionSymbol](sourceDestination.URLCompressedSource.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.URLCompressedSource.md#capturerejections)
- [defaultMaxListeners](sourceDestination.URLCompressedSource.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.URLCompressedSource.md#errormonitor)
- [imageExtensions](sourceDestination.URLCompressedSource.md#imageextensions)
- [mimetype](sourceDestination.URLCompressedSource.md#mimetype)

### Methods

- [[captureRejectionSymbol]](sourceDestination.URLCompressedSource.md#[capturerejectionsymbol])
- [\_close](sourceDestination.URLCompressedSource.md#_close)
- [\_getMetadata](sourceDestination.URLCompressedSource.md#_getmetadata)
- [\_open](sourceDestination.URLCompressedSource.md#_open)
- [addListener](sourceDestination.URLCompressedSource.md#addlistener)
- [canCreateReadStream](sourceDestination.URLCompressedSource.md#cancreatereadstream)
- [canCreateSparseReadStream](sourceDestination.URLCompressedSource.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](sourceDestination.URLCompressedSource.md#cancreatesparsewritestream)
- [canCreateWriteStream](sourceDestination.URLCompressedSource.md#cancreatewritestream)
- [canRead](sourceDestination.URLCompressedSource.md#canread)
- [canWrite](sourceDestination.URLCompressedSource.md#canwrite)
- [close](sourceDestination.URLCompressedSource.md#close)
- [configure](sourceDestination.URLCompressedSource.md#configure)
- [createReadStream](sourceDestination.URLCompressedSource.md#createreadstream)
- [createSparseReadStream](sourceDestination.URLCompressedSource.md#createsparsereadstream)
- [createSparseWriteStream](sourceDestination.URLCompressedSource.md#createsparsewritestream)
- [createStream](sourceDestination.URLCompressedSource.md#createstream)
- [createVerifier](sourceDestination.URLCompressedSource.md#createverifier)
- [createWriteStream](sourceDestination.URLCompressedSource.md#createwritestream)
- [download](sourceDestination.URLCompressedSource.md#download)
- [emit](sourceDestination.URLCompressedSource.md#emit)
- [eventNames](sourceDestination.URLCompressedSource.md#eventnames)
- [extractDeflateToDisk](sourceDestination.URLCompressedSource.md#extractdeflatetodisk)
- [findImagePart](sourceDestination.URLCompressedSource.md#findimagepart)
- [findPart](sourceDestination.URLCompressedSource.md#findpart)
- [findPartitionPart](sourceDestination.URLCompressedSource.md#findpartitionpart)
- [getAlignment](sourceDestination.URLCompressedSource.md#getalignment)
- [getBlocks](sourceDestination.URLCompressedSource.md#getblocks)
- [getDeviceTypeJSON](sourceDestination.URLCompressedSource.md#getdevicetypejson)
- [getFilename](sourceDestination.URLCompressedSource.md#getfilename)
- [getImageJSON](sourceDestination.URLCompressedSource.md#getimagejson)
- [getInnerSource](sourceDestination.URLCompressedSource.md#getinnersource)
- [getMaxListeners](sourceDestination.URLCompressedSource.md#getmaxlisteners)
- [getMetadata](sourceDestination.URLCompressedSource.md#getmetadata)
- [getOsVersion](sourceDestination.URLCompressedSource.md#getosversion)
- [getPartStream](sourceDestination.URLCompressedSource.md#getpartstream)
- [getPartitionTable](sourceDestination.URLCompressedSource.md#getpartitiontable)
- [getParts](sourceDestination.URLCompressedSource.md#getparts)
- [getSize](sourceDestination.URLCompressedSource.md#getsize)
- [getSupervisorVersion](sourceDestination.URLCompressedSource.md#getsupervisorversion)
- [listenerCount](sourceDestination.URLCompressedSource.md#listenercount)
- [listeners](sourceDestination.URLCompressedSource.md#listeners)
- [off](sourceDestination.URLCompressedSource.md#off)
- [on](sourceDestination.URLCompressedSource.md#on)
- [once](sourceDestination.URLCompressedSource.md#once)
- [open](sourceDestination.URLCompressedSource.md#open)
- [prependListener](sourceDestination.URLCompressedSource.md#prependlistener)
- [prependOnceListener](sourceDestination.URLCompressedSource.md#prependoncelistener)
- [rawListeners](sourceDestination.URLCompressedSource.md#rawlisteners)
- [read](sourceDestination.URLCompressedSource.md#read)
- [removeAllListeners](sourceDestination.URLCompressedSource.md#removealllisteners)
- [removeListener](sourceDestination.URLCompressedSource.md#removelistener)
- [setMaxListeners](sourceDestination.URLCompressedSource.md#setmaxlisteners)
- [write](sourceDestination.URLCompressedSource.md#write)
- [addAbortListener](sourceDestination.URLCompressedSource.md#addabortlistener)
- [getEventListeners](sourceDestination.URLCompressedSource.md#geteventlisteners)
- [getMaxListeners](sourceDestination.URLCompressedSource.md#getmaxlisteners-1)
- [listenerCount](sourceDestination.URLCompressedSource.md#listenercount-1)
- [on](sourceDestination.URLCompressedSource.md#on-1)
- [once](sourceDestination.URLCompressedSource.md#once-1)
- [register](sourceDestination.URLCompressedSource.md#register)
- [setMaxListeners](sourceDestination.URLCompressedSource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new URLCompressedSource**(`«destructured»`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`URLCompressedSourceOptions`](../interfaces/sourceDestination.URLCompressedSourceOptions.md) |

#### Returns

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

#### Overrides

[SourceDestination](sourceDestination.SourceDestination.md).[constructor](sourceDestination.SourceDestination.md#constructor)

#### Defined in

[lib/source-destination/url-compressed-source.ts:91](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L91)

## Properties

### buildId

• `Readonly` **buildId**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L70)

___

### configuration

• `Private` `Optional` **configuration**: `Record`<`string`, `any`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L76)

___

### configuredParts

• `Private` **configuredParts**: `Map`<`string`, { `buffer`: `Buffer` ; `crc`: `number` ; `zLen`: `number`  }\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:77](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L77)

___

### deviceType

• `Readonly` **deviceType**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L69)

___

### deviceTypeJSON

• `Private` **deviceTypeJSON**: `DeviceTypeJSON`

#### Defined in

[lib/source-destination/url-compressed-source.ts:84](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L84)

___

### filename

• `Private` **filename**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L89)

___

### filenamePrefix

• `Private` `Optional` **filenamePrefix**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L74)

___

### format

• `Private` **format**: ``"gzip"`` \| ``"zip"``

#### Defined in

[lib/source-destination/url-compressed-source.ts:73](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L73)

___

### imageJSON

• `Private` **imageJSON**: [`ImageJSON`](../modules/sourceDestination.md#imagejson)

#### Defined in

[lib/source-destination/url-compressed-source.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L83)

___

### lastModified

• `Private` **lastModified**: `Date`

#### Defined in

[lib/source-destination/url-compressed-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L87)

___

### osVersion

• `Private` **osVersion**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L86)

___

### size

• `Private` **size**: `number`

#### Defined in

[lib/source-destination/url-compressed-source.ts:88](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L88)

___

### supervisorVersion

• `Private` **supervisorVersion**: `string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L85)

___

### urls

• `Private` **urls**: [`URLSourceConfig`](../interfaces/sourceDestination.URLSourceConfig.md)

#### Defined in

[lib/source-destination/url-compressed-source.ts:72](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L72)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[captureRejectionSymbol](sourceDestination.SourceDestination.md#capturerejectionsymbol)

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

[SourceDestination](sourceDestination.SourceDestination.md).[captureRejections](sourceDestination.SourceDestination.md#capturerejections)

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

[SourceDestination](sourceDestination.SourceDestination.md).[defaultMaxListeners](sourceDestination.SourceDestination.md#defaultmaxlisteners)

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

[SourceDestination](sourceDestination.SourceDestination.md).[errorMonitor](sourceDestination.SourceDestination.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:395

___

### imageExtensions

▪ `Static` `Readonly` **imageExtensions**: `string`[]

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[imageExtensions](sourceDestination.SourceDestination.md#imageextensions)

#### Defined in

[lib/source-destination/source-destination.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L293)

___

### mimetype

▪ `Static` `Optional` `Readonly` **mimetype**: `string`

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[mimetype](sourceDestination.SourceDestination.md#mimetype)

#### Defined in

[lib/source-destination/source-destination.ts:305](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L305)

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

[SourceDestination](sourceDestination.SourceDestination.md).[[captureRejectionSymbol]](sourceDestination.SourceDestination.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:112

___

### \_close

▸ **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[_close](sourceDestination.SourceDestination.md#_close)

#### Defined in

[lib/source-destination/source-destination.ts:420](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L420)

___

### \_getMetadata

▸ **_getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Overrides

[SourceDestination](sourceDestination.SourceDestination.md).[_getMetadata](sourceDestination.SourceDestination.md#_getmetadata)

#### Defined in

[lib/source-destination/url-compressed-source.ts:120](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L120)

___

### \_open

▸ **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[SourceDestination](sourceDestination.SourceDestination.md).[_open](sourceDestination.SourceDestination.md#_open)

#### Defined in

[lib/source-destination/url-compressed-source.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L274)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[addListener](sourceDestination.SourceDestination.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:545

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Overrides

[SourceDestination](sourceDestination.SourceDestination.md).[canCreateReadStream](sourceDestination.SourceDestination.md#cancreatereadstream)

#### Defined in

[lib/source-destination/url-compressed-source.ts:398](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L398)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[canCreateSparseReadStream](sourceDestination.SourceDestination.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L333)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[canCreateSparseWriteStream](sourceDestination.SourceDestination.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:341](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L341)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[canCreateWriteStream](sourceDestination.SourceDestination.md#cancreatewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L337)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[canRead](sourceDestination.SourceDestination.md#canread)

#### Defined in

[lib/source-destination/source-destination.ts:321](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L321)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[canWrite](sourceDestination.SourceDestination.md#canwrite)

#### Defined in

[lib/source-destination/source-destination.ts:325](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L325)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[close](sourceDestination.SourceDestination.md#close)

#### Defined in

[lib/source-destination/source-destination.ts:409](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L409)

___

### configure

▸ **configure**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:224](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L224)

___

### createReadStream

▸ **createReadStream**(`options?`): `Promise`<`Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateReadStreamOptions`](../interfaces/sourceDestination.CreateReadStreamOptions.md) |

#### Returns

`Promise`<`Readable`\>

#### Overrides

[SourceDestination](sourceDestination.SourceDestination.md).[createReadStream](sourceDestination.SourceDestination.md#createreadstream)

#### Defined in

[lib/source-destination/url-compressed-source.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L383)

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

[SourceDestination](sourceDestination.SourceDestination.md).[createSparseReadStream](sourceDestination.SourceDestination.md#createsparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:380](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L380)

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

[SourceDestination](sourceDestination.SourceDestination.md).[createSparseWriteStream](sourceDestination.SourceDestination.md#createsparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:396](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L396)

___

### createStream

▸ **createStream**(): `Promise`<`GzipStream` \| `RawDeflateZipStream`\>

#### Returns

`Promise`<`GzipStream` \| `RawDeflateZipStream`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L368)

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

[SourceDestination](sourceDestination.SourceDestination.md).[createVerifier](sourceDestination.SourceDestination.md#createverifier)

#### Defined in

[lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L424)

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

[SourceDestination](sourceDestination.SourceDestination.md).[createWriteStream](sourceDestination.SourceDestination.md#createwritestream)

#### Defined in

[lib/source-destination/source-destination.ts:390](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L390)

___

### download

▸ **download**(`key`): `Promise`<`AxiosResponse`<`any`, `any`, {}\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"VERSION"`` \| ``"VERSION_HOSTOS"`` \| ``"device-type.json"`` \| ``"image.json"`` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`, {}\>\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L171)

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

[SourceDestination](sourceDestination.SourceDestination.md).[emit](sourceDestination.SourceDestination.md#emit)

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

[SourceDestination](sourceDestination.SourceDestination.md).[eventNames](sourceDestination.SourceDestination.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:870

___

### extractDeflateToDisk

▸ **extractDeflateToDisk**(`filename`): `Promise`<`BufferDisk`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`Promise`<`BufferDisk`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:214](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L214)

___

### findImagePart

▸ **findImagePart**(`imageJSON`, `image`): [`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageJSON` | [`ImageJSON`](../modules/sourceDestination.md#imagejson) |
| `image` | `string` |

#### Returns

[`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Defined in

[lib/source-destination/url-compressed-source.ts:195](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L195)

___

### findPart

▸ **findPart**(`definition`): [`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `FileOnPartition` |

#### Returns

[`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Defined in

[lib/source-destination/url-compressed-source.ts:203](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L203)

___

### findPartitionPart

▸ **findPartitionPart**(`imageJSON`, `partition`): [`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageJSON` | [`ImageJSON`](../modules/sourceDestination.md#imagejson) |
| `partition` | `number` |

#### Returns

[`ImageJSONPart`](../interfaces/sourceDestination.ImageJSONPart.md)

#### Defined in

[lib/source-destination/url-compressed-source.ts:179](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L179)

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getAlignment](sourceDestination.SourceDestination.md#getalignment)

#### Defined in

[lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L317)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getBlocks](sourceDestination.SourceDestination.md#getblocks)

#### Defined in

[lib/source-destination/source-destination.ts:386](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L386)

___

### getDeviceTypeJSON

▸ **getDeviceTypeJSON**(): `Promise`<`DeviceTypeJSON`\>

#### Returns

`Promise`<`DeviceTypeJSON`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:149](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L149)

___

### getFilename

▸ **getFilename**(): `string`

#### Returns

`string`

#### Defined in

[lib/source-destination/url-compressed-source.ts:108](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L108)

___

### getImageJSON

▸ **getImageJSON**(): `Promise`<[`ImageJSON`](../modules/sourceDestination.md#imagejson)\>

#### Returns

`Promise`<[`ImageJSON`](../modules/sourceDestination.md#imagejson)\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:145](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L145)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getInnerSource](sourceDestination.SourceDestination.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:499](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L499)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.URLCompressedSource.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getMaxListeners](sourceDestination.SourceDestination.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:722

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getMetadata](sourceDestination.SourceDestination.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:345](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L345)

___

### getOsVersion

▸ **getOsVersion**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:140](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L140)

___

### getPartStream

▸ **getPartStream**(`filename`): `Promise`<`Readable`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`Promise`<`Readable`\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:153](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L153)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[getPartitionTable](sourceDestination.SourceDestination.md#getpartitiontable)

#### Defined in

[lib/source-destination/source-destination.ts:529](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L529)

___

### getParts

▸ **getParts**(): `Promise`<{ `filename`: `string` ; `parts`: { `crc`: `number` ; `filename`: `string` ; `len`: `number` ; `partitionIndex?`: `string` ; `stream`: `Buffer` \| `Readable` ; `zLen`: `number`  }[]  }[]\>

#### Returns

`Promise`<{ `filename`: `string` ; `parts`: { `crc`: `number` ; `filename`: `string` ; `len`: `number` ; `partitionIndex?`: `string` ; `stream`: `Buffer` \| `Readable` ; `zLen`: `number`  }[]  }[]\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:347](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L347)

___

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Defined in

[lib/source-destination/url-compressed-source.ts:328](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L328)

___

### getSupervisorVersion

▸ **getSupervisorVersion**(): `Promise`<{ `lastModified`: `Date` ; `supervisorVersion`: `any`  }\>

#### Returns

`Promise`<{ `lastModified`: `Date` ; `supervisorVersion`: `any`  }\>

#### Defined in

[lib/source-destination/url-compressed-source.ts:133](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/url-compressed-source.ts#L133)

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

[SourceDestination](sourceDestination.SourceDestination.md).[listenerCount](sourceDestination.SourceDestination.md#listenercount)

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

[SourceDestination](sourceDestination.SourceDestination.md).[listeners](sourceDestination.SourceDestination.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### off

▸ **off**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v10.0.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[off](sourceDestination.SourceDestination.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### on

▸ **on**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.1.101

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[on](sourceDestination.SourceDestination.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:577

___

### once

▸ **once**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.3.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[once](sourceDestination.SourceDestination.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[open](sourceDestination.SourceDestination.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:402](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L402)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[prependListener](sourceDestination.SourceDestination.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:834

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v6.0.0

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[prependOnceListener](sourceDestination.SourceDestination.md#prependoncelistener)

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

[SourceDestination](sourceDestination.SourceDestination.md).[rawListeners](sourceDestination.SourceDestination.md#rawlisteners)

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

[SourceDestination](sourceDestination.SourceDestination.md).[read](sourceDestination.SourceDestination.md#read)

#### Defined in

[lib/source-destination/source-destination.ts:356](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L356)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[removeAllListeners](sourceDestination.SourceDestination.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:706

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[removeListener](sourceDestination.SourceDestination.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

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

[`URLCompressedSource`](sourceDestination.URLCompressedSource.md)

**`Since`**

v0.3.5

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[setMaxListeners](sourceDestination.SourceDestination.md#setmaxlisteners)

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

[SourceDestination](sourceDestination.SourceDestination.md).[write](sourceDestination.SourceDestination.md#write)

#### Defined in

[lib/source-destination/source-destination.ts:365](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L365)

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

[SourceDestination](sourceDestination.SourceDestination.md).[addAbortListener](sourceDestination.SourceDestination.md#addabortlistener)

#### Defined in

node_modules/@types/node/events.d.ts:387

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

[SourceDestination](sourceDestination.SourceDestination.md).[getEventListeners](sourceDestination.SourceDestination.md#geteventlisteners)

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

[SourceDestination](sourceDestination.SourceDestination.md).[getMaxListeners](sourceDestination.SourceDestination.md#getmaxlisteners-1)

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

[SourceDestination](sourceDestination.SourceDestination.md).[listenerCount](sourceDestination.SourceDestination.md#listenercount-1)

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

[SourceDestination](sourceDestination.SourceDestination.md).[on](sourceDestination.SourceDestination.md#on-1)

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

[SourceDestination](sourceDestination.SourceDestination.md).[once](sourceDestination.SourceDestination.md#once-1)

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

[SourceDestination](sourceDestination.SourceDestination.md).[once](sourceDestination.SourceDestination.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:198

___

### register

▸ **register**(`Cls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Cls` | typeof [`SourceSource`](sourceDestination.SourceSource.md) |

#### Returns

`void`

#### Inherited from

[SourceDestination](sourceDestination.SourceDestination.md).[register](sourceDestination.SourceDestination.md#register)

#### Defined in

[lib/source-destination/source-destination.ts:311](https://github.com/balena-io-modules/etcher-sdk/blob/00df1fd/lib/source-destination/source-destination.ts#L311)

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

[SourceDestination](sourceDestination.SourceDestination.md).[setMaxListeners](sourceDestination.SourceDestination.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:352
