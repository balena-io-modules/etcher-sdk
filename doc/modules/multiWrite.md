[etcher-sdk](../README.md) / multiWrite

# Namespace: multiWrite

## Table of contents

### Interfaces

- [MultiDestinationProgress](../interfaces/multiWrite.MultiDestinationProgress.md)
- [PipeSourceToDestinationsResult](../interfaces/multiWrite.PipeSourceToDestinationsResult.md)

### Type Aliases

- [OnFailFunction](multiWrite.md#onfailfunction)
- [OnProgressFunction](multiWrite.md#onprogressfunction)
- [WriteStep](multiWrite.md#writestep)

### Variables

- [DECOMPRESSED\_IMAGE\_PREFIX](multiWrite.md#decompressed_image_prefix)

### Functions

- [decompressThenFlash](multiWrite.md#decompressthenflash)
- [pipeSourceToDestinations](multiWrite.md#pipesourcetodestinations)

## Type Aliases

### OnFailFunction

Ƭ **OnFailFunction**: (`destination`: [`SourceDestination`](../classes/sourceDestination.SourceDestination.md), `error`: `Error`) => `void`

#### Type declaration

▸ (`destination`, `error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`SourceDestination`](../classes/sourceDestination.SourceDestination.md) |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[lib/multi-write.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L70)

___

### OnProgressFunction

Ƭ **OnProgressFunction**: (`progress`: [`MultiDestinationProgress`](../interfaces/multiWrite.MultiDestinationProgress.md)) => `void`

#### Type declaration

▸ (`progress`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | [`MultiDestinationProgress`](../interfaces/multiWrite.MultiDestinationProgress.md) |

##### Returns

`void`

#### Defined in

[lib/multi-write.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L75)

___

### WriteStep

Ƭ **WriteStep**: ``"decompressing"`` \| ``"flashing"`` \| ``"verifying"`` \| ``"finished"``

#### Defined in

[lib/multi-write.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L43)

## Variables

### DECOMPRESSED\_IMAGE\_PREFIX

• `Const` **DECOMPRESSED\_IMAGE\_PREFIX**: ``"decompressed-image-"``

#### Defined in

[lib/multi-write.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L45)

## Functions

### decompressThenFlash

▸ **decompressThenFlash**(`«destructured»`): `Promise`<[`PipeSourceToDestinationsResult`](../interfaces/multiWrite.PipeSourceToDestinationsResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asItIs?` | `boolean` |
| › `configure?` | [`ConfigureFunction`](sourceDestination.md#configurefunction) |
| › `decompressFirst?` | `boolean` |
| › `destinations` | [`SourceDestination`](../classes/sourceDestination.SourceDestination.md)[] |
| › `enoughSpaceForDecompression?` | (`free`: `number`, `imageSize?`: `number`) => `boolean` |
| › `numBuffers?` | `number` |
| › `onFail` | [`OnFailFunction`](multiWrite.md#onfailfunction) |
| › `onProgress` | [`OnProgressFunction`](multiWrite.md#onprogressfunction) |
| › `source` | [`SourceDestination`](../classes/sourceDestination.SourceDestination.md) |
| › `trim?` | `boolean` |
| › `verify?` | `boolean` |

#### Returns

`Promise`<[`PipeSourceToDestinationsResult`](../interfaces/multiWrite.PipeSourceToDestinationsResult.md)\>

#### Defined in

[lib/multi-write.ts:109](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L109)

___

### pipeSourceToDestinations

▸ **pipeSourceToDestinations**(`«destructured»`): `Promise`<[`PipeSourceToDestinationsResult`](../interfaces/multiWrite.PipeSourceToDestinationsResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `destinations` | [`SourceDestination`](../classes/sourceDestination.SourceDestination.md)[] |
| › `numBuffers?` | `number` |
| › `onFail` | [`OnFailFunction`](multiWrite.md#onfailfunction) |
| › `onProgress` | [`OnProgressFunction`](multiWrite.md#onprogressfunction) |
| › `source` | [`SourceDestination`](../classes/sourceDestination.SourceDestination.md) |
| › `verify?` | `boolean` |

#### Returns

`Promise`<[`PipeSourceToDestinationsResult`](../interfaces/multiWrite.PipeSourceToDestinationsResult.md)\>

#### Defined in

[lib/multi-write.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/multi-write.ts#L276)
