[etcher-sdk](../README.md) > [BlocksVerificationError](../classes/blocksverificationerror.md)

# Class: BlocksVerificationError

## Hierarchy

↳  [VerificationError](verificationerror.md)

**↳ BlocksVerificationError**

## Index

### Constructors

* [constructor](blocksverificationerror.md#constructor)

### Properties

* [blocks](blocksverificationerror.md#blocks)
* [checksum](blocksverificationerror.md#checksum)
* [code](blocksverificationerror.md#code)
* [message](blocksverificationerror.md#message)
* [name](blocksverificationerror.md#name)
* [stack](blocksverificationerror.md#stack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlocksVerificationError**(blocks: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)*, checksum: *`string`*): [BlocksVerificationError](blocksverificationerror.md)

*Defined in [errors.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/errors.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blocks | [BlocksWithChecksum](../interfaces/blockswithchecksum.md) |
| checksum | `string` |

**Returns:** [BlocksVerificationError](blocksverificationerror.md)

___

## Properties

<a id="blocks"></a>

###  blocks

**● blocks**: *[BlocksWithChecksum](../interfaces/blockswithchecksum.md)*

*Defined in [errors.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/errors.ts#L50)*

___
<a id="checksum"></a>

###  checksum

**● checksum**: *`string`*

*Defined in [errors.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/errors.ts#L51)*

___
<a id="code"></a>

###  code

**● code**: *`string`* = "EVALIDATION"

*Inherited from [VerificationError](verificationerror.md).[code](verificationerror.md#code)*

*Defined in [errors.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/050d15d/lib/errors.ts#L24)*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in /node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:964*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`undefined` \| `string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___

