[etcher-sdk](../README.md) › [MultiDestinationError](multidestinationerror.md)

# Class: MultiDestinationError

## Hierarchy

* [Error](notcapable.md#static-error)

  ↳ **MultiDestinationError**

## Index

### Constructors

* [constructor](multidestinationerror.md#constructor)

### Properties

* [destination](multidestinationerror.md#destination)
* [error](multidestinationerror.md#error)
* [message](multidestinationerror.md#message)
* [name](multidestinationerror.md#name)
* [stack](multidestinationerror.md#optional-stack)
* [Error](multidestinationerror.md#static-error)

## Constructors

###  constructor

\+ **new MultiDestinationError**(`error`: [Error](notcapable.md#static-error), `destination`: [SourceDestination](sourcedestination.md)): *[MultiDestinationError](multidestinationerror.md)*

*Defined in [lib/source-destination/multi-destination.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](notcapable.md#static-error) |
`destination` | [SourceDestination](sourcedestination.md) |

**Returns:** *[MultiDestinationError](multidestinationerror.md)*

## Properties

###  destination

• **destination**: *[SourceDestination](sourcedestination.md)*

*Defined in [lib/source-destination/multi-destination.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L40)*

___

###  error

• **error**: *[Error](notcapable.md#static-error)*

*Defined in [lib/source-destination/multi-destination.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L40)*

___

###  message

• **message**: *string*

*Inherited from [NotCapable](notcapable.md).[message](notcapable.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [NotCapable](notcapable.md).[name](notcapable.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [NotCapable](notcapable.md).[stack](notcapable.md#optional-stack)*

*Overrides [NotCapable](notcapable.md).[stack](notcapable.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
