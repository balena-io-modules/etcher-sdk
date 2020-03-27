[etcher-sdk](../README.md) › [ChecksumVerificationError](checksumverificationerror.md)

# Class: ChecksumVerificationError

## Hierarchy

  ↳ [VerificationError](verificationerror.md)

  ↳ **ChecksumVerificationError**

## Index

### Constructors

* [constructor](checksumverificationerror.md#constructor)

### Properties

* [checksum](checksumverificationerror.md#checksum)
* [code](checksumverificationerror.md#code)
* [expectedChecksum](checksumverificationerror.md#expectedchecksum)
* [message](checksumverificationerror.md#message)
* [name](checksumverificationerror.md#name)
* [stack](checksumverificationerror.md#optional-stack)

## Constructors

###  constructor

\+ **new ChecksumVerificationError**(`message`: string, `checksum`: string, `expectedChecksum`: string): *[ChecksumVerificationError](checksumverificationerror.md)*

*Defined in [lib/errors.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/errors.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`checksum` | string |
`expectedChecksum` | string |

**Returns:** *[ChecksumVerificationError](checksumverificationerror.md)*

## Properties

###  checksum

• **checksum**: *string*

*Defined in [lib/errors.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/errors.ts#L30)*

___

###  code

• **code**: *string* = "EVALIDATION"

*Inherited from [VerificationError](verificationerror.md).[code](verificationerror.md#code)*

*Defined in [lib/errors.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/errors.ts#L24)*

___

###  expectedChecksum

• **expectedChecksum**: *string*

*Defined in [lib/errors.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/1a7a17c/lib/errors.ts#L31)*

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

Defined in node_modules/typescript/lib/lib.es5.d.ts:975
