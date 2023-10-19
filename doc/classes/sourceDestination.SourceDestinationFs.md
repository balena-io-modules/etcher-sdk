[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / SourceDestinationFs

# Class: SourceDestinationFs

[sourceDestination](../modules/sourceDestination.md).SourceDestinationFs

## Table of contents

### Constructors

- [constructor](sourceDestination.SourceDestinationFs.md#constructor)

### Properties

- [source](sourceDestination.SourceDestinationFs.md#source)

### Methods

- [close](sourceDestination.SourceDestinationFs.md#close)
- [fstat](sourceDestination.SourceDestinationFs.md#fstat)
- [open](sourceDestination.SourceDestinationFs.md#open)
- [read](sourceDestination.SourceDestinationFs.md#read)

## Constructors

### constructor

• **new SourceDestinationFs**(`source`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceDestination`](sourceDestination.SourceDestination.md) |

#### Defined in

[lib/source-destination/source-destination.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L112)

## Properties

### source

• `Private` **source**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Defined in

[lib/source-destination/source-destination.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L112)

## Methods

### close

▸ **close**(`_fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fd` | `number` |
| `callback` | (`error`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Defined in

[lib/source-destination/source-destination.ts:122](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L122)

___

### fstat

▸ **fstat**(`_fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fd` | `number` |
| `callback` | (`error`: ``null`` \| `Error`, `stats?`: { `size`: `number`  }) => `void` |

#### Returns

`void`

#### Defined in

[lib/source-destination/source-destination.ts:126](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L126)

___

### open

▸ **open**(`_path`, `_options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_path` | `string` |
| `_options` | `any` |
| `callback` | (`error`: ``null`` \| `Error`, `fd?`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[lib/source-destination/source-destination.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L114)

___

### read

▸ **read**(`_fd`, `buffer`, `bufferOffset`, `length`, `sourceOffset`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fd` | `number` |
| `buffer` | `Buffer` |
| `bufferOffset` | `number` |
| `length` | `number` |
| `sourceOffset` | `number` |
| `callback` | (`error`: ``null`` \| `Error`, `bytesRead?`: `number`, `buffer?`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

[lib/source-destination/source-destination.ts:142](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/source-destination/source-destination.ts#L142)
