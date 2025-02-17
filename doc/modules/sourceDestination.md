[etcher-sdk](../README.md) / sourceDestination

# Namespace: sourceDestination

## Table of contents

### Classes

- [BZip2Source](../classes/sourceDestination.BZip2Source.md)
- [BalenaS3CompressedSource](../classes/sourceDestination.BalenaS3CompressedSource.md)
- [BalenaS3Source](../classes/sourceDestination.BalenaS3Source.md)
- [BalenaS3SourceBase](../classes/sourceDestination.BalenaS3SourceBase.md)
- [BlockDevice](../classes/sourceDestination.BlockDevice.md)
- [CompressedSource](../classes/sourceDestination.CompressedSource.md)
- [ConfiguredSource](../classes/sourceDestination.ConfiguredSource.md)
- [CountingHashStream](../classes/sourceDestination.CountingHashStream.md)
- [CountingWritable](../classes/sourceDestination.CountingWritable.md)
- [DmgSource](../classes/sourceDestination.DmgSource.md)
- [DriverlessDevice](../classes/sourceDestination.DriverlessDevice.md)
- [File](../classes/sourceDestination.File.md)
- [GZipSource](../classes/sourceDestination.GZipSource.md)
- [Http](../classes/sourceDestination.Http.md)
- [MultiDestination](../classes/sourceDestination.MultiDestination.md)
- [MultiDestinationError](../classes/sourceDestination.MultiDestinationError.md)
- [MultiDestinationVerifier](../classes/sourceDestination.MultiDestinationVerifier.md)
- [RandomAccessZipSource](../classes/sourceDestination.RandomAccessZipSource.md)
- [SingleUseStreamSource](../classes/sourceDestination.SingleUseStreamSource.md)
- [SourceDestination](../classes/sourceDestination.SourceDestination.md)
- [SourceDestinationFs](../classes/sourceDestination.SourceDestinationFs.md)
- [SourceDisk](../classes/sourceDestination.SourceDisk.md)
- [SourceSource](../classes/sourceDestination.SourceSource.md)
- [SparseStreamVerifier](../classes/sourceDestination.SparseStreamVerifier.md)
- [StreamVerifier](../classes/sourceDestination.StreamVerifier.md)
- [StreamZipSource](../classes/sourceDestination.StreamZipSource.md)
- [UsbBBbootDrive](../classes/sourceDestination.UsbBBbootDrive.md)
- [UsbbootDrive](../classes/sourceDestination.UsbbootDrive.md)
- [Verifier](../classes/sourceDestination.Verifier.md)
- [XzSource](../classes/sourceDestination.XzSource.md)
- [ZipSource](../classes/sourceDestination.ZipSource.md)

### Interfaces

- [AwsCredentials](../interfaces/sourceDestination.AwsCredentials.md)
- [BalenaS3CompressedSourceOptions](../interfaces/sourceDestination.BalenaS3CompressedSourceOptions.md)
- [BalenaS3SourceOptions](../interfaces/sourceDestination.BalenaS3SourceOptions.md)
- [CreateReadStreamOptions](../interfaces/sourceDestination.CreateReadStreamOptions.md)
- [CreateSparseReadStreamOptions](../interfaces/sourceDestination.CreateSparseReadStreamOptions.md)
- [Metadata](../interfaces/sourceDestination.Metadata.md)
- [ProgressEvent](../interfaces/sourceDestination.ProgressEvent.md)
- [SourceTransform](../interfaces/sourceDestination.SourceTransform.md)

### Type Aliases

- [ConfigureFunction](sourceDestination.md#configurefunction)
- [Constructor](sourceDestination.md#constructor)
- [ImageJSON](sourceDestination.md#imagejson)

### Variables

- [ProgressHashStream](sourceDestination.md#progresshashstream)
- [ProgressWritable](sourceDestination.md#progresswritable)
- [ProgressWriteStream](sourceDestination.md#progresswritestream)

### Functions

- [createHasher](sourceDestination.md#createhasher)
- [getRootStream](sourceDestination.md#getrootstream)
- [isSourceTransform](sourceDestination.md#issourcetransform)
- [makeClassEmitProgressEvents](sourceDestination.md#makeclassemitprogressevents)
- [matchSupportedExtensions](sourceDestination.md#matchsupportedextensions)

## Type Aliases

### ConfigureFunction

Ƭ **ConfigureFunction**: (`disk`: `Disk`) => `Promise`<`void`\>

#### Type declaration

▸ (`disk`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `disk` | `Disk` |

##### Returns

`Promise`<`void`\>

#### Defined in

[lib/source-destination/configured-source/configured-source.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/configured-source/configured-source.ts#L49)

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[lib/source-destination/progress.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/progress.ts#L24)

___

### ImageJSON

Ƭ **ImageJSON**: [`Dictionary`](../interfaces/utils.Dictionary.md)<{ `parts`: `ImageJSONPart`[]  }\>

#### Defined in

[lib/source-destination/balena-s3-compressed-source.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/balena-s3-compressed-source.ts#L36)

## Variables

### ProgressHashStream

• `Const` **ProgressHashStream**: (...`args`: `any`[]) => `__class`<typeof [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)\> & typeof [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)

#### Defined in

[lib/source-destination/source-destination.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L95)

___

### ProgressWritable

• `Const` **ProgressWritable**: (...`args`: `any`[]) => `__class`<typeof [`CountingWritable`](../classes/sourceDestination.CountingWritable.md)\> & typeof [`CountingWritable`](../classes/sourceDestination.CountingWritable.md)

#### Defined in

[lib/source-destination/progress.ts:119](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/progress.ts#L119)

___

### ProgressWriteStream

• `Const` **ProgressWriteStream**: (...`args`: `any`[]) => `__class`<typeof `WriteStream`\> & typeof `WriteStream`

#### Defined in

[lib/source-destination/file.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/file.ts#L36)

## Functions

### createHasher

▸ **createHasher**(): `__class`<typeof [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)\> & [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)

#### Returns

`__class`<typeof [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)\> & [`CountingHashStream`](../classes/sourceDestination.CountingHashStream.md)

#### Defined in

[lib/source-destination/source-destination.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/source-destination.ts#L101)

___

### getRootStream

▸ **getRootStream**(`stream`): `NodeJS.ReadableStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream` |

#### Returns

`NodeJS.ReadableStream`

#### Defined in

[lib/source-destination/compressed-source.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/compressed-source.ts#L35)

___

### isSourceTransform

▸ **isSourceTransform**(`stream`): stream is SourceTransform

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `any` |

#### Returns

stream is SourceTransform

#### Defined in

[lib/source-destination/compressed-source.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/compressed-source.ts#L31)

___

### makeClassEmitProgressEvents

▸ **makeClassEmitProgressEvents**<`T`\>(`Cls`, `attribute`, `positionAttribute`, `interval?`): (...`args`: `any`[]) => `__class`<`T`\> & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](sourceDestination.md#constructor)<`EventEmitter`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `Cls` | `T` | `undefined` |
| `attribute` | `string` | `undefined` |
| `positionAttribute` | `string` | `undefined` |
| `interval` | `number` | `PROGRESS_EMISSION_INTERVAL` |

#### Returns

(...`args`: `any`[]) => `__class`<`T`\> & `T`

#### Defined in

[lib/source-destination/progress.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/progress.ts#L33)

___

### matchSupportedExtensions

▸ **matchSupportedExtensions**(`filename`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/source-destination/zip.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/zip.ts#L62)
