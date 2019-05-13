[etcher-sdk](../README.md) > [ChecksumVerificationError](../classes/checksumverificationerror.md)

# Class: ChecksumVerificationError

## Hierarchy

↳  [VerificationError](verificationerror.md)

**↳ ChecksumVerificationError**

## Index

### Constructors

* [constructor](checksumverificationerror.md#constructor)

### Properties

* [checksum](checksumverificationerror.md#checksum)
* [code](checksumverificationerror.md#code)
* [expectedChecksum](checksumverificationerror.md#expectedchecksum)
* [message](checksumverificationerror.md#message)
* [name](checksumverificationerror.md#name)
* [stack](checksumverificationerror.md#stack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ChecksumVerificationError**(message: *`string`*, checksum: *`string`*, expectedChecksum: *`string`*): [ChecksumVerificationError](checksumverificationerror.md)

*Defined in [errors.ts:27](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/errors.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |
| checksum | `string` |
| expectedChecksum | `string` |

**Returns:** [ChecksumVerificationError](checksumverificationerror.md)

___

## Properties

<a id="checksum"></a>

###  checksum

**● checksum**: *`string`*

*Defined in [errors.ts:30](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/errors.ts#L30)*

___
<a id="code"></a>

###  code

**● code**: *`string`* = "EVALIDATION"

*Inherited from [VerificationError](verificationerror.md).[code](verificationerror.md#code)*

*Defined in [errors.ts:24](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/errors.ts#L24)*

___
<a id="expectedchecksum"></a>

###  expectedChecksum

**● expectedChecksum**: *`string`*

*Defined in [errors.ts:31](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/errors.ts#L31)*

___
<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from Error.message*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:964*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from Error.name*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:963*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`undefined` \| `string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___

