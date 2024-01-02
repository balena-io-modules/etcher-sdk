[etcher-sdk](../README.md) / errors

# Namespace: errors

## Table of contents

### Classes

- [BlocksVerificationError](../classes/errors.BlocksVerificationError.md)
- [ChecksumVerificationError](../classes/errors.ChecksumVerificationError.md)
- [NotCapable](../classes/errors.NotCapable.md)
- [VerificationError](../classes/errors.VerificationError.md)

### Functions

- [retryOnTransientError](errors.md#retryontransienterror)

## Functions

### retryOnTransientError

▸ **retryOnTransientError**<`T`\>(`fn`, `maxRetries`, `baseDelay`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`T`\> |
| `maxRetries` | `number` |
| `baseDelay` | `number` |

#### Returns

`Promise`<`T`\>

#### Defined in

[lib/errors.ts:77](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L77)