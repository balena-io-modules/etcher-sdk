[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / MultiDestinationError

# Class: MultiDestinationError

[sourceDestination](../modules/sourceDestination.md).MultiDestinationError

## Hierarchy

- `Error`

  ↳ **`MultiDestinationError`**

## Table of contents

### Constructors

- [constructor](sourceDestination.MultiDestinationError.md#constructor)

### Properties

- [destination](sourceDestination.MultiDestinationError.md#destination)
- [error](sourceDestination.MultiDestinationError.md#error)
- [message](sourceDestination.MultiDestinationError.md#message)
- [name](sourceDestination.MultiDestinationError.md#name)
- [stack](sourceDestination.MultiDestinationError.md#stack)
- [prepareStackTrace](sourceDestination.MultiDestinationError.md#preparestacktrace)
- [stackTraceLimit](sourceDestination.MultiDestinationError.md#stacktracelimit)

### Methods

- [captureStackTrace](sourceDestination.MultiDestinationError.md#capturestacktrace)

## Constructors

### constructor

• **new MultiDestinationError**(`error`, `destination`): [`MultiDestinationError`](sourceDestination.MultiDestinationError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `destination` | [`SourceDestination`](sourceDestination.SourceDestination.md) |

#### Returns

[`MultiDestinationError`](sourceDestination.MultiDestinationError.md)

#### Overrides

Error.constructor

#### Defined in

[lib/source-destination/multi-destination.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/multi-destination.ts#L40)

## Properties

### destination

• **destination**: [`SourceDestination`](sourceDestination.SourceDestination.md)

#### Defined in

[lib/source-destination/multi-destination.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/multi-destination.ts#L42)

___

### error

• **error**: `Error`

#### Defined in

[lib/source-destination/multi-destination.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/multi-destination.ts#L41)

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

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
