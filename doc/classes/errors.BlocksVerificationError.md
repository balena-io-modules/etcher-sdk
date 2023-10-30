[etcher-sdk](../README.md) / [errors](../modules/errors.md) / BlocksVerificationError

# Class: BlocksVerificationError

[errors](../modules/errors.md).BlocksVerificationError

## Hierarchy

- [`VerificationError`](errors.VerificationError.md)

  ↳ **`BlocksVerificationError`**

## Table of contents

### Constructors

- [constructor](errors.BlocksVerificationError.md#constructor)

### Properties

- [blocks](errors.BlocksVerificationError.md#blocks)
- [checksum](errors.BlocksVerificationError.md#checksum)
- [code](errors.BlocksVerificationError.md#code)
- [message](errors.BlocksVerificationError.md#message)
- [name](errors.BlocksVerificationError.md#name)
- [stack](errors.BlocksVerificationError.md#stack)
- [prepareStackTrace](errors.BlocksVerificationError.md#preparestacktrace)
- [stackTraceLimit](errors.BlocksVerificationError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.BlocksVerificationError.md#capturestacktrace)

## Constructors

### constructor

• **new BlocksVerificationError**(`blocks`, `checksum`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | [`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md) |
| `checksum` | `string` |

#### Overrides

[VerificationError](errors.VerificationError.md).[constructor](errors.VerificationError.md#constructor)

#### Defined in

[lib/errors.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L50)

## Properties

### blocks

• `Readonly` **blocks**: [`BlocksWithChecksum`](../interfaces/sparseStream.BlocksWithChecksum.md)

#### Defined in

[lib/errors.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L51)

___

### checksum

• `Readonly` **checksum**: `string`

#### Defined in

[lib/errors.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L52)

___

### code

• **code**: `string` = `'EVALIDATION'`

#### Inherited from

[VerificationError](errors.VerificationError.md).[code](errors.VerificationError.md#code)

#### Defined in

[lib/errors.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L25)

___

### message

• **message**: `string`

#### Inherited from

[VerificationError](errors.VerificationError.md).[message](errors.VerificationError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

[VerificationError](errors.VerificationError.md).[name](errors.VerificationError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[VerificationError](errors.VerificationError.md).[stack](errors.VerificationError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[VerificationError](errors.VerificationError.md).[prepareStackTrace](errors.VerificationError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[VerificationError](errors.VerificationError.md).[stackTraceLimit](errors.VerificationError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[VerificationError](errors.VerificationError.md).[captureStackTrace](errors.VerificationError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
