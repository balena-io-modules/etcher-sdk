[etcher-sdk](../README.md) / tmp

# Namespace: tmp

## Table of contents

### Interfaces

- [TmpFileOptions](../interfaces/tmp.TmpFileOptions.md)
- [TmpFileResult](../interfaces/tmp.TmpFileResult.md)

### Functions

- [cleanupTmpFiles](tmp.md#cleanuptmpfiles)
- [freeSpace](tmp.md#freespace)
- [tmpFile](tmp.md#tmpfile)
- [withTmpFile](tmp.md#withtmpfile)

## Functions

### cleanupTmpFiles

▸ **cleanupTmpFiles**(`olderThan?`, `prefix?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `olderThan` | `number` | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/tmp.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/tmp.ts#L39)

___

### freeSpace

▸ **freeSpace**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[lib/tmp.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/tmp.ts#L139)

___

### tmpFile

▸ **tmpFile**(`«destructured»`): `Promise`<[`TmpFileResult`](../interfaces/tmp.TmpFileResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TmpFileOptions`](../interfaces/tmp.TmpFileOptions.md) |

#### Returns

`Promise`<[`TmpFileResult`](../interfaces/tmp.TmpFileResult.md)\>

#### Defined in

[lib/tmp.ts:84](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/tmp.ts#L84)

___

### withTmpFile

▸ **withTmpFile**<`T`\>(`options`, `fn`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TmpFileOptions`](../interfaces/tmp.TmpFileOptions.md) |
| `fn` | (`result`: [`TmpFileResult`](../interfaces/tmp.TmpFileResult.md)) => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[lib/tmp.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/tmp.ts#L117)
