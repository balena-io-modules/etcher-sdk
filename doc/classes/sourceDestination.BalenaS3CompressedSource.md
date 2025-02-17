[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / BalenaS3CompressedSource

# Class: BalenaS3CompressedSource

[sourceDestination](../modules/sourceDestination.md).BalenaS3CompressedSource

## Hierarchy

- [`BalenaS3SourceBase`](sourceDestination.BalenaS3SourceBase.md)

  ↳ **`BalenaS3CompressedSource`**

## Table of contents

### Constructors

- [constructor](sourceDestination.BalenaS3CompressedSource.md#constructor)

### Properties

- [axiosInstance](sourceDestination.BalenaS3CompressedSource.md#axiosinstance)
- [bucket](sourceDestination.BalenaS3CompressedSource.md#bucket)
- [buildId](sourceDestination.BalenaS3CompressedSource.md#buildid)
- [configuration](sourceDestination.BalenaS3CompressedSource.md#configuration)
- [configuredParts](sourceDestination.BalenaS3CompressedSource.md#configuredparts)
- [deviceType](sourceDestination.BalenaS3CompressedSource.md#devicetype)
- [deviceTypeJSON](sourceDestination.BalenaS3CompressedSource.md#devicetypejson)
- [filename](sourceDestination.BalenaS3CompressedSource.md#filename)
- [filenamePrefix](sourceDestination.BalenaS3CompressedSource.md#filenameprefix)
- [format](sourceDestination.BalenaS3CompressedSource.md#format)
- [host](sourceDestination.BalenaS3CompressedSource.md#host)
- [imageJSON](sourceDestination.BalenaS3CompressedSource.md#imagejson)
- [imageType](sourceDestination.BalenaS3CompressedSource.md#imagetype)
- [lastModified](sourceDestination.BalenaS3CompressedSource.md#lastmodified)
- [osVersion](sourceDestination.BalenaS3CompressedSource.md#osversion)
- [prefix](sourceDestination.BalenaS3CompressedSource.md#prefix)
- [release](sourceDestination.BalenaS3CompressedSource.md#release)
- [size](sourceDestination.BalenaS3CompressedSource.md#size)
- [supervisorVersion](sourceDestination.BalenaS3CompressedSource.md#supervisorversion)
- [captureRejectionSymbol](sourceDestination.BalenaS3CompressedSource.md#capturerejectionsymbol)
- [captureRejections](sourceDestination.BalenaS3CompressedSource.md#capturerejections)
- [defaultMaxListeners](sourceDestination.BalenaS3CompressedSource.md#defaultmaxlisteners)
- [errorMonitor](sourceDestination.BalenaS3CompressedSource.md#errormonitor)
- [imageExtensions](sourceDestination.BalenaS3CompressedSource.md#imageextensions)
- [mimetype](sourceDestination.BalenaS3CompressedSource.md#mimetype)

### Accessors

- [imageSuffix](sourceDestination.BalenaS3CompressedSource.md#imagesuffix)

### Methods

- [[captureRejectionSymbol]](sourceDestination.BalenaS3CompressedSource.md#[capturerejectionsymbol])
- [\_close](sourceDestination.BalenaS3CompressedSource.md#_close)
- [\_getMetadata](sourceDestination.BalenaS3CompressedSource.md#_getmetadata)
- [\_open](sourceDestination.BalenaS3CompressedSource.md#_open)
- [addListener](sourceDestination.BalenaS3CompressedSource.md#addlistener)
- [canCreateReadStream](sourceDestination.BalenaS3CompressedSource.md#cancreatereadstream)
- [canCreateSparseReadStream](sourceDestination.BalenaS3CompressedSource.md#cancreatesparsereadstream)
- [canCreateSparseWriteStream](sourceDestination.BalenaS3CompressedSource.md#cancreatesparsewritestream)
- [canCreateWriteStream](sourceDestination.BalenaS3CompressedSource.md#cancreatewritestream)
- [canRead](sourceDestination.BalenaS3CompressedSource.md#canread)
- [canWrite](sourceDestination.BalenaS3CompressedSource.md#canwrite)
- [close](sourceDestination.BalenaS3CompressedSource.md#close)
- [configure](sourceDestination.BalenaS3CompressedSource.md#configure)
- [createGzipStream](sourceDestination.BalenaS3CompressedSource.md#creategzipstream)
- [createReadStream](sourceDestination.BalenaS3CompressedSource.md#createreadstream)
- [createSparseReadStream](sourceDestination.BalenaS3CompressedSource.md#createsparsereadstream)
- [createSparseWriteStream](sourceDestination.BalenaS3CompressedSource.md#createsparsewritestream)
- [createStream](sourceDestination.BalenaS3CompressedSource.md#createstream)
- [createVerifier](sourceDestination.BalenaS3CompressedSource.md#createverifier)
- [createWriteStream](sourceDestination.BalenaS3CompressedSource.md#createwritestream)
- [createZipStream](sourceDestination.BalenaS3CompressedSource.md#createzipstream)
- [download](sourceDestination.BalenaS3CompressedSource.md#download)
- [emit](sourceDestination.BalenaS3CompressedSource.md#emit)
- [eventNames](sourceDestination.BalenaS3CompressedSource.md#eventnames)
- [extractDeflateToDisk](sourceDestination.BalenaS3CompressedSource.md#extractdeflatetodisk)
- [findImagePart](sourceDestination.BalenaS3CompressedSource.md#findimagepart)
- [findPart](sourceDestination.BalenaS3CompressedSource.md#findpart)
- [findPartitionPart](sourceDestination.BalenaS3CompressedSource.md#findpartitionpart)
- [getAlignment](sourceDestination.BalenaS3CompressedSource.md#getalignment)
- [getBlocks](sourceDestination.BalenaS3CompressedSource.md#getblocks)
- [getDeviceTypeJSON](sourceDestination.BalenaS3CompressedSource.md#getdevicetypejson)
- [getFilename](sourceDestination.BalenaS3CompressedSource.md#getfilename)
- [getImageJSON](sourceDestination.BalenaS3CompressedSource.md#getimagejson)
- [getInnerSource](sourceDestination.BalenaS3CompressedSource.md#getinnersource)
- [getMaxListeners](sourceDestination.BalenaS3CompressedSource.md#getmaxlisteners)
- [getMetadata](sourceDestination.BalenaS3CompressedSource.md#getmetadata)
- [getOsVersion](sourceDestination.BalenaS3CompressedSource.md#getosversion)
- [getPartStream](sourceDestination.BalenaS3CompressedSource.md#getpartstream)
- [getPartitionTable](sourceDestination.BalenaS3CompressedSource.md#getpartitiontable)
- [getParts](sourceDestination.BalenaS3CompressedSource.md#getparts)
- [getSize](sourceDestination.BalenaS3CompressedSource.md#getsize)
- [getSupervisorVersion](sourceDestination.BalenaS3CompressedSource.md#getsupervisorversion)
- [getUrl](sourceDestination.BalenaS3CompressedSource.md#geturl)
- [listenerCount](sourceDestination.BalenaS3CompressedSource.md#listenercount)
- [listeners](sourceDestination.BalenaS3CompressedSource.md#listeners)
- [off](sourceDestination.BalenaS3CompressedSource.md#off)
- [on](sourceDestination.BalenaS3CompressedSource.md#on)
- [once](sourceDestination.BalenaS3CompressedSource.md#once)
- [open](sourceDestination.BalenaS3CompressedSource.md#open)
- [prependListener](sourceDestination.BalenaS3CompressedSource.md#prependlistener)
- [prependOnceListener](sourceDestination.BalenaS3CompressedSource.md#prependoncelistener)
- [rawListeners](sourceDestination.BalenaS3CompressedSource.md#rawlisteners)
- [read](sourceDestination.BalenaS3CompressedSource.md#read)
- [removeAllListeners](sourceDestination.BalenaS3CompressedSource.md#removealllisteners)
- [removeListener](sourceDestination.BalenaS3CompressedSource.md#removelistener)
- [setMaxListeners](sourceDestination.BalenaS3CompressedSource.md#setmaxlisteners)
- [write](sourceDestination.BalenaS3CompressedSource.md#write)
- [addAbortListener](sourceDestination.BalenaS3CompressedSource.md#addabortlistener)
- [getEventListeners](sourceDestination.BalenaS3CompressedSource.md#geteventlisteners)
- [getMaxListeners](sourceDestination.BalenaS3CompressedSource.md#getmaxlisteners-1)
- [isESRVersion](sourceDestination.BalenaS3CompressedSource.md#isesrversion)
- [listenerCount](sourceDestination.BalenaS3CompressedSource.md#listenercount-1)
- [on](sourceDestination.BalenaS3CompressedSource.md#on-1)
- [once](sourceDestination.BalenaS3CompressedSource.md#once-1)
- [register](sourceDestination.BalenaS3CompressedSource.md#register)
- [setMaxListeners](sourceDestination.BalenaS3CompressedSource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new BalenaS3CompressedSource**(`«destructured»`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`BalenaS3CompressedSourceOptions`](../interfaces/sourceDestination.BalenaS3CompressedSourceOptions.md) |

#### Returns

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

#### Overrides

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[constructor](sourceDestination.BalenaS3SourceBase.md#constructor)

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:73](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L73)

## Properties

### axiosInstance

• `Protected` **axiosInstance**: `AxiosInstance`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[axiosInstance](sourceDestination.BalenaS3SourceBase.md#axiosinstance)

#### Defined in

[lib/source-destination/balena-s3-source.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L60)

___

### bucket

• `Readonly` **bucket**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[bucket](sourceDestination.BalenaS3SourceBase.md#bucket)

#### Defined in

[lib/source-destination/balena-s3-source.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L54)

___

### buildId

• `Readonly` **buildId**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[buildId](sourceDestination.BalenaS3SourceBase.md#buildid)

#### Defined in

[lib/source-destination/balena-s3-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L57)

___

### configuration

• `Private` `Optional` **configuration**: [`Dictionary`](../interfaces/utils.Dictionary.md)<`any`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L62)

___

### configuredParts

• `Private` **configuredParts**: `Map`<`string`, { `buffer`: `Buffer` ; `crc`: `number` ; `zLen`: `number`  }\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L63)

___

### deviceType

• `Readonly` **deviceType**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[deviceType](sourceDestination.BalenaS3SourceBase.md#devicetype)

#### Defined in

[lib/source-destination/balena-s3-source.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L56)

___

### deviceTypeJSON

• `Private` **deviceTypeJSON**: `DeviceTypeJSON`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L58)

___

### filename

• `Private` **filename**: `string`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L71)

___

### filenamePrefix

• `Private` `Optional` **filenamePrefix**: `string`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L60)

___

### format

• `Private` **format**: ``"gzip"`` \| ``"zip"``

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L59)

___

### host

• `Readonly` **host**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[host](sourceDestination.BalenaS3SourceBase.md#host)

#### Defined in

[lib/source-destination/balena-s3-source.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L53)

___

### imageJSON

• `Private` **imageJSON**: [`ImageJSON`](../modules/sourceDestination.md#imagejson)

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L57)

___

### imageType

• `Optional` `Readonly` **imageType**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[imageType](sourceDestination.BalenaS3SourceBase.md#imagetype)

#### Defined in

[lib/source-destination/balena-s3-source.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L59)

___

### lastModified

• `Private` **lastModified**: `Date`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L68)

___

### osVersion

• `Private` **osVersion**: `string`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:69](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L69)

___

### prefix

• `Readonly` **prefix**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[prefix](sourceDestination.BalenaS3SourceBase.md#prefix)

#### Defined in

[lib/source-destination/balena-s3-source.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L55)

___

### release

• `Optional` `Readonly` **release**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[release](sourceDestination.BalenaS3SourceBase.md#release)

#### Defined in

[lib/source-destination/balena-s3-source.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L58)

___

### size

• `Private` **size**: `number`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L70)

___

### supervisorVersion

• `Private` **supervisorVersion**: `string`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L67)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](scanner.adapters.Adapter.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[captureRejectionSymbol](sourceDestination.BalenaS3SourceBase.md#capturerejectionsymbol)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[captureRejections](sourceDestination.BalenaS3SourceBase.md#capturerejections)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[defaultMaxListeners](sourceDestination.BalenaS3SourceBase.md#defaultmaxlisteners)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[errorMonitor](sourceDestination.BalenaS3SourceBase.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:395

___

### imageExtensions

▪ `Static` `Readonly` **imageExtensions**: `string`[]

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[imageExtensions](sourceDestination.BalenaS3SourceBase.md#imageextensions)

#### Defined in

[lib/source-destination/source-destination.ts:293](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L293)

___

### mimetype

▪ `Static` `Optional` `Readonly` **mimetype**: `string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[mimetype](sourceDestination.BalenaS3SourceBase.md#mimetype)

#### Defined in

[lib/source-destination/source-destination.ts:305](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L305)

## Accessors

### imageSuffix

• `get` **imageSuffix**(): `string`

#### Returns

`string`

#### Inherited from

BalenaS3SourceBase.imageSuffix

#### Defined in

[lib/source-destination/balena-s3-source.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L104)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[[captureRejectionSymbol]](sourceDestination.BalenaS3SourceBase.md#[capturerejectionsymbol])

#### Defined in

node_modules/@types/node/events.d.ts:112

___

### \_close

▸ **_close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[_close](sourceDestination.BalenaS3SourceBase.md#_close)

#### Defined in

[lib/source-destination/source-destination.ts:420](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L420)

___

### \_getMetadata

▸ **_getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Overrides

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[_getMetadata](sourceDestination.BalenaS3SourceBase.md#_getmetadata)

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L102)

___

### \_open

▸ **_open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[_open](sourceDestination.BalenaS3SourceBase.md#_open)

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:238](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L238)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[addListener](sourceDestination.BalenaS3SourceBase.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:545

___

### canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canCreateReadStream](sourceDestination.BalenaS3SourceBase.md#cancreatereadstream)

#### Defined in

[lib/source-destination/balena-s3-source.ts:108](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L108)

___

### canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canCreateSparseReadStream](sourceDestination.BalenaS3SourceBase.md#cancreatesparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L333)

___

### canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canCreateSparseWriteStream](sourceDestination.BalenaS3SourceBase.md#cancreatesparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:341](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L341)

___

### canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canCreateWriteStream](sourceDestination.BalenaS3SourceBase.md#cancreatewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L337)

___

### canRead

▸ **canRead**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canRead](sourceDestination.BalenaS3SourceBase.md#canread)

#### Defined in

[lib/source-destination/source-destination.ts:321](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L321)

___

### canWrite

▸ **canWrite**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[canWrite](sourceDestination.BalenaS3SourceBase.md#canwrite)

#### Defined in

[lib/source-destination/source-destination.ts:325](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L325)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[close](sourceDestination.BalenaS3SourceBase.md#close)

#### Defined in

[lib/source-destination/source-destination.ts:409](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L409)

___

### configure

▸ **configure**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:192](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L192)

___

### createGzipStream

▸ **createGzipStream**(`fake`): `Promise`<`GzipStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fake` | `boolean` |

#### Returns

`Promise`<`GzipStream`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:305](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L305)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[createReadStream](sourceDestination.BalenaS3SourceBase.md#createreadstream)

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:316](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L316)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[createSparseReadStream](sourceDestination.BalenaS3SourceBase.md#createsparsereadstream)

#### Defined in

[lib/source-destination/source-destination.ts:380](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L380)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[createSparseWriteStream](sourceDestination.BalenaS3SourceBase.md#createsparsewritestream)

#### Defined in

[lib/source-destination/source-destination.ts:396](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L396)

___

### createStream

▸ **createStream**(`fake?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fake` | `boolean` | `false` |

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:310](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L310)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[createVerifier](sourceDestination.BalenaS3SourceBase.md#createverifier)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[createWriteStream](sourceDestination.BalenaS3SourceBase.md#createwritestream)

#### Defined in

[lib/source-destination/source-destination.ts:390](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L390)

___

### createZipStream

▸ **createZipStream**(`fake`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fake` | `boolean` |

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:298](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L298)

___

### download

▸ **download**(`path`, `responseType?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `responseType?` | ``"stream"`` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[download](sourceDestination.BalenaS3SourceBase.md#download)

#### Defined in

[lib/source-destination/balena-s3-source.ts:120](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L120)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[emit](sourceDestination.BalenaS3SourceBase.md#emit)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[eventNames](sourceDestination.BalenaS3SourceBase.md#eventnames)

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

[lib/source-destination/balena-s3-compressed-source.ts:182](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L182)

___

### findImagePart

▸ **findImagePart**(`imageJSON`, `image`): `ImageJSONPart`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageJSON` | [`ImageJSON`](../modules/sourceDestination.md#imagejson) |
| `image` | `string` |

#### Returns

`ImageJSONPart`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:163](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L163)

___

### findPart

▸ **findPart**(`definition`): `ImageJSONPart`

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `FileOnPartition` |

#### Returns

`ImageJSONPart`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L171)

___

### findPartitionPart

▸ **findPartitionPart**(`imageJSON`, `partition`): `ImageJSONPart`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageJSON` | [`ImageJSON`](../modules/sourceDestination.md#imagejson) |
| `partition` | `number` |

#### Returns

`ImageJSONPart`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L147)

___

### getAlignment

▸ **getAlignment**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getAlignment](sourceDestination.BalenaS3SourceBase.md#getalignment)

#### Defined in

[lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L317)

___

### getBlocks

▸ **getBlocks**(): `Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Returns

`Promise`<[`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[]\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getBlocks](sourceDestination.BalenaS3SourceBase.md#getblocks)

#### Defined in

[lib/source-destination/source-destination.ts:386](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L386)

___

### getDeviceTypeJSON

▸ **getDeviceTypeJSON**(): `Promise`<`DeviceTypeJSON`\>

#### Returns

`Promise`<`DeviceTypeJSON`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:133](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L133)

___

### getFilename

▸ **getFilename**(): `string`

#### Returns

`string`

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L89)

___

### getImageJSON

▸ **getImageJSON**(): `Promise`<[`ImageJSON`](../modules/sourceDestination.md#imagejson)\>

#### Returns

`Promise`<[`ImageJSON`](../modules/sourceDestination.md#imagejson)\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L127)

___

### getInnerSource

▸ **getInnerSource**(): `Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Returns

`Promise`<[`SourceDestination`](sourceDestination.SourceDestination.md)\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getInnerSource](sourceDestination.BalenaS3SourceBase.md#getinnersource)

#### Defined in

[lib/source-destination/source-destination.ts:499](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L499)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](sourceDestination.BalenaS3CompressedSource.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getMaxListeners](sourceDestination.BalenaS3SourceBase.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:722

___

### getMetadata

▸ **getMetadata**(): `Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Returns

`Promise`<[`Metadata`](../interfaces/sourceDestination.Metadata.md)\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getMetadata](sourceDestination.BalenaS3SourceBase.md#getmetadata)

#### Defined in

[lib/source-destination/source-destination.ts:345](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L345)

___

### getOsVersion

▸ **getOsVersion**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:122](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L122)

___

### getPartStream

▸ **getPartStream**(`filename`): `Promise`<`ReadableStream`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`Promise`<`ReadableStream`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L137)

___

### getPartitionTable

▸ **getPartitionTable**(): `Promise`<`undefined` \| `GetPartitionsResult`\>

#### Returns

`Promise`<`undefined` \| `GetPartitionsResult`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getPartitionTable](sourceDestination.BalenaS3SourceBase.md#getpartitiontable)

#### Defined in

[lib/source-destination/source-destination.ts:529](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L529)

___

### getParts

▸ **getParts**(`fake`): `Promise`<{ `filename`: `string` ; `parts`: { `crc`: `number` ; `filename`: `string` ; `len`: `number` ; `partitionIndex?`: `string` ; `stream`: `Buffer` \| `ReadableStream` ; `zLen`: `number`  }[]  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fake` | `boolean` |

#### Returns

`Promise`<{ `filename`: `string` ; `parts`: { `crc`: `number` ; `filename`: `string` ; `len`: `number` ; `partitionIndex?`: `string` ; `stream`: `Buffer` \| `ReadableStream` ; `zLen`: `number`  }[]  }[]\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:275](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L275)

___

### getSize

▸ **getSize**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L85)

___

### getSupervisorVersion

▸ **getSupervisorVersion**(): `Promise`<{ `lastModified`: `Date` ; `supervisorVersion`: `any`  }\>

#### Returns

`Promise`<{ `lastModified`: `Date` ; `supervisorVersion`: `any`  }\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L115)

___

### getUrl

▸ **getUrl**(`path`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getUrl](sourceDestination.BalenaS3SourceBase.md#geturl)

#### Defined in

[lib/source-destination/balena-s3-source.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L124)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[listenerCount](sourceDestination.BalenaS3SourceBase.md#listenercount)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[listeners](sourceDestination.BalenaS3SourceBase.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:735

___

### off

▸ **off**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v10.0.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[off](sourceDestination.BalenaS3SourceBase.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:695

___

### on

▸ **on**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.1.101

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[on](sourceDestination.BalenaS3SourceBase.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:577

___

### once

▸ **once**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.3.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[once](sourceDestination.BalenaS3SourceBase.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### open

▸ **open**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[open](sourceDestination.BalenaS3SourceBase.md#open)

#### Defined in

[lib/source-destination/source-destination.ts:402](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L402)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v6.0.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[prependListener](sourceDestination.BalenaS3SourceBase.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:834

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v6.0.0

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[prependOnceListener](sourceDestination.BalenaS3SourceBase.md#prependoncelistener)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[rawListeners](sourceDestination.BalenaS3SourceBase.md#rawlisteners)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[read](sourceDestination.BalenaS3SourceBase.md#read)

#### Defined in

[lib/source-destination/source-destination.ts:356](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L356)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[removeAllListeners](sourceDestination.BalenaS3SourceBase.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:706

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.1.26

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[removeListener](sourceDestination.BalenaS3SourceBase.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:690

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

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

[`BalenaS3CompressedSource`](sourceDestination.BalenaS3CompressedSource.md)

**`Since`**

v0.3.5

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[setMaxListeners](sourceDestination.BalenaS3SourceBase.md#setmaxlisteners)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[write](sourceDestination.BalenaS3SourceBase.md#write)

#### Defined in

[lib/source-destination/source-destination.ts:365](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L365)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[addAbortListener](sourceDestination.BalenaS3SourceBase.md#addabortlistener)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getEventListeners](sourceDestination.BalenaS3SourceBase.md#geteventlisteners)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[getMaxListeners](sourceDestination.BalenaS3SourceBase.md#getmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:337

___

### isESRVersion

▸ **isESRVersion**(`buildId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buildId` | `string` |

#### Returns

`boolean`

#### Inherited from

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[isESRVersion](sourceDestination.BalenaS3SourceBase.md#isesrversion)

#### Defined in

[lib/source-destination/balena-s3-source.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-source.ts#L112)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[listenerCount](sourceDestination.BalenaS3SourceBase.md#listenercount-1)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[on](sourceDestination.BalenaS3SourceBase.md#on-1)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[once](sourceDestination.BalenaS3SourceBase.md#once-1)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[once](sourceDestination.BalenaS3SourceBase.md#once-1)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[register](sourceDestination.BalenaS3SourceBase.md#register)

#### Defined in

[lib/source-destination/source-destination.ts:311](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L311)

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

[BalenaS3SourceBase](sourceDestination.BalenaS3SourceBase.md).[setMaxListeners](sourceDestination.BalenaS3SourceBase.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:352
