[etcher-sdk](../README.md) / [errors](../modules/errors.md) / VerificationError

# Class: VerificationError

[errors](../modules/errors.md).VerificationError

## Hierarchy

- `Error`

  ↳ **`VerificationError`**

  ↳↳ [`ChecksumVerificationError`](errors.ChecksumVerificationError.md)

  ↳↳ [`BlocksVerificationError`](errors.BlocksVerificationError.md)

## Table of contents

### Constructors

- [constructor](errors.VerificationError.md#constructor)

### Properties

- [code](errors.VerificationError.md#code)
- [message](errors.VerificationError.md#message)
- [name](errors.VerificationError.md#name)
- [stack](errors.VerificationError.md#stack)
- [prepareStackTrace](errors.VerificationError.md#preparestacktrace)
- [stackTraceLimit](errors.VerificationError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.VerificationError.md#capturestacktrace)

## Constructors

### constructor

• **new VerificationError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

## Properties

### code

• **code**: `string` = `'EVALIDATION'`

#### Defined in

[lib/errors.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/errors.ts#L25)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
