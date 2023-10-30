[etcher-sdk](../README.md) / sparseStream

# Namespace: sparseStream

## Table of contents

### Classes

- [SparseFilterStream](../classes/sparseStream.SparseFilterStream.md)
- [SparseReadStream](../classes/sparseStream.SparseReadStream.md)
- [SparseWriteStream](../classes/sparseStream.SparseWriteStream.md)

### Interfaces

- [Block](../interfaces/sparseStream.Block.md)
- [BlocksWithChecksum](../interfaces/sparseStream.BlocksWithChecksum.md)
- [SparseReadable](../interfaces/sparseStream.SparseReadable.md)
- [SparseReaderState](../interfaces/sparseStream.SparseReaderState.md)
- [SparseStreamChunk](../interfaces/sparseStream.SparseStreamChunk.md)
- [SparseWritable](../interfaces/sparseStream.SparseWritable.md)

### Type Aliases

- [ChecksumType](sparseStream.md#checksumtype)

### Variables

- [ProgressSparseWriteStream](sparseStream.md#progresssparsewritestream)

### Functions

- [blocksLength](sparseStream.md#blockslength)
- [createSparseReaderStateIterator](sparseStream.md#createsparsereaderstateiterator)

## Type Aliases

### ChecksumType

Ƭ **ChecksumType**: ``"crc32"`` \| ``"sha1"`` \| ``"sha256"`` \| ``"xxhash3"``

#### Defined in

[lib/sparse-stream/shared.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/shared.ts#L25)

## Variables

### ProgressSparseWriteStream

• `Const` **ProgressSparseWriteStream**: (...`args`: `any`[]) => `__class`<typeof [`SparseWriteStream`](../classes/sparseStream.SparseWriteStream.md)\> & typeof [`SparseWriteStream`](../classes/sparseStream.SparseWriteStream.md)

#### Defined in

[lib/sparse-stream/sparse-write-stream.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/sparse-write-stream.ts#L137)

## Functions

### blocksLength

▸ **blocksLength**(`blocks`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | [`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[] |

#### Returns

`number`

#### Defined in

[lib/sparse-stream/shared.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/shared.ts#L117)

___

### createSparseReaderStateIterator

▸ **createSparseReaderStateIterator**(`blocks`, `verify`, `generateChecksums`): `Iterator`<[`SparseReaderState`](../interfaces/sparseStream.SparseReaderState.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | [`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)[] |
| `verify` | `boolean` |
| `generateChecksums` | `boolean` |

#### Returns

`Iterator`<[`SparseReaderState`](../interfaces/sparseStream.SparseReaderState.md)\>

#### Defined in

[lib/sparse-stream/shared.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/sparse-stream/shared.ts#L75)
