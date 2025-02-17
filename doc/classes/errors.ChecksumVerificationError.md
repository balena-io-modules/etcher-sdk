[etcher-sdk](../README.md) / [errors](../modules/errors.md) / ChecksumVerificationError

# Class: ChecksumVerificationError

[errors](../modules/errors.md).ChecksumVerificationError

## Hierarchy

- [`VerificationError`](errors.VerificationError.md)

  ↳ **`ChecksumVerificationError`**

## Table of contents

### Constructors

- [constructor](errors.ChecksumVerificationError.md#constructor)

### Properties

- [checksum](errors.ChecksumVerificationError.md#checksum)
- [code](errors.ChecksumVerificationError.md#code)
- [expectedChecksum](errors.ChecksumVerificationError.md#expectedchecksum)
- [message](errors.ChecksumVerificationError.md#message)
- [name](errors.ChecksumVerificationError.md#name)
- [stack](errors.ChecksumVerificationError.md#stack)
- [prepareStackTrace](errors.ChecksumVerificationError.md#preparestacktrace)
- [stackTraceLimit](errors.ChecksumVerificationError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.ChecksumVerificationError.md#capturestacktrace)

## Constructors

### constructor

• **new ChecksumVerificationError**(`message`, `checksum`, `expectedChecksum`): [`ChecksumVerificationError`](errors.ChecksumVerificationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `checksum` | `string` |
| `expectedChecksum` | `string` |

#### Returns

[`ChecksumVerificationError`](errors.ChecksumVerificationError.md)

#### Overrides

[VerificationError](errors.VerificationError.md).[constructor](errors.VerificationError.md#constructor)

#### Defined in

[lib/errors.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/errors.ts#L29)

## Properties

### checksum

• **checksum**: `string`

#### Defined in

[lib/errors.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/errors.ts#L31)

___

### code

• **code**: `string` = `'EVALIDATION'`

#### Inherited from

[VerificationError](errors.VerificationError.md).[code](errors.VerificationError.md#code)

#### Defined in

[lib/errors.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/errors.ts#L25)

___

### expectedChecksum

• **expectedChecksum**: `string`

#### Defined in

[lib/errors.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/errors.ts#L32)

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

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[VerificationError](errors.VerificationError.md).[stackTraceLimit](errors.VerificationError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

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

node_modules/@types/node/globals.d.ts:21
