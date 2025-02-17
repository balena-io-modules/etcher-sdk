[etcher-sdk](../README.md) / [sourceDestination](../modules/sourceDestination.md) / Metadata

# Interface: Metadata

[sourceDestination](../modules/sourceDestination.md).Metadata

## Table of contents

### Properties

- [arch](sourceDestination.Metadata.md#arch)
- [blockMap](sourceDestination.Metadata.md#blockmap)
- [blockmappedSize](sourceDestination.Metadata.md#blockmappedsize)
- [blocks](sourceDestination.Metadata.md#blocks)
- [bytesToZeroOutFromTheBeginning](sourceDestination.Metadata.md#bytestozerooutfromthebeginning)
- [checksum](sourceDestination.Metadata.md#checksum)
- [checksumType](sourceDestination.Metadata.md#checksumtype)
- [compressedSize](sourceDestination.Metadata.md#compressedsize)
- [format](sourceDestination.Metadata.md#format)
- [instructions](sourceDestination.Metadata.md#instructions)
- [isCompressed](sourceDestination.Metadata.md#iscompressed)
- [isEtch](sourceDestination.Metadata.md#isetch)
- [isSizeEstimated](sourceDestination.Metadata.md#issizeestimated)
- [lastModified](sourceDestination.Metadata.md#lastmodified)
- [logo](sourceDestination.Metadata.md#logo)
- [name](sourceDestination.Metadata.md#name)
- [osVersion](sourceDestination.Metadata.md#osversion)
- [recommendedDriveSize](sourceDestination.Metadata.md#recommendeddrivesize)
- [releaseNotesUrl](sourceDestination.Metadata.md#releasenotesurl)
- [size](sourceDestination.Metadata.md#size)
- [supervisorVersion](sourceDestination.Metadata.md#supervisorversion)
- [supportUrl](sourceDestination.Metadata.md#supporturl)
- [url](sourceDestination.Metadata.md#url)
- [version](sourceDestination.Metadata.md#version)

## Properties

### arch

• `Optional` **arch**: `string`

#### Defined in

[lib/source-destination/metadata.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L45)

___

### blockMap

• `Optional` **blockMap**: `BlockMap`

#### Defined in

[lib/source-destination/metadata.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L28)

___

### blockmappedSize

• `Optional` **blockmappedSize**: `number`

#### Defined in

[lib/source-destination/metadata.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L26)

___

### blocks

• `Optional` **blocks**: [`BlocksWithChecksum`](sparseStream.BlocksWithChecksum.md)[]

#### Defined in

[lib/source-destination/metadata.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L29)

___

### bytesToZeroOutFromTheBeginning

• `Optional` **bytesToZeroOutFromTheBeginning**: `number`

#### Defined in

[lib/source-destination/metadata.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L32)

___

### checksum

• `Optional` **checksum**: `string`

#### Defined in

[lib/source-destination/metadata.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L33)

___

### checksumType

• `Optional` **checksumType**: `string`

#### Defined in

[lib/source-destination/metadata.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L34)

___

### compressedSize

• `Optional` **compressedSize**: `number`

#### Defined in

[lib/source-destination/metadata.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L25)

___

### format

• `Optional` **format**: ``"gzip"`` \| ``"zip"``

#### Defined in

[lib/source-destination/metadata.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L44)

___

### instructions

• `Optional` **instructions**: `string`

#### Defined in

[lib/source-destination/metadata.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L30)

___

### isCompressed

• `Optional` **isCompressed**: `boolean`

#### Defined in

[lib/source-destination/metadata.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L24)

___

### isEtch

• `Optional` **isEtch**: `boolean`

#### Defined in

[lib/source-destination/metadata.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L40)

___

### isSizeEstimated

• `Optional` **isSizeEstimated**: `boolean`

#### Defined in

[lib/source-destination/metadata.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L23)

___

### lastModified

• `Optional` **lastModified**: `Date`

#### Defined in

[lib/source-destination/metadata.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L43)

___

### logo

• `Optional` **logo**: `string`

#### Defined in

[lib/source-destination/metadata.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L31)

___

### name

• `Optional` **name**: `string`

#### Defined in

[lib/source-destination/metadata.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L27)

___

### osVersion

• `Optional` **osVersion**: `string`

#### Defined in

[lib/source-destination/metadata.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L42)

___

### recommendedDriveSize

• `Optional` **recommendedDriveSize**: `number`

#### Defined in

[lib/source-destination/metadata.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L35)

___

### releaseNotesUrl

• `Optional` **releaseNotesUrl**: `string`

#### Defined in

[lib/source-destination/metadata.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L36)

___

### size

• `Optional` **size**: `number`

#### Defined in

[lib/source-destination/metadata.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L22)

___

### supervisorVersion

• `Optional` **supervisorVersion**: `string`

#### Defined in

[lib/source-destination/metadata.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L41)

___

### supportUrl

• `Optional` **supportUrl**: `string`

#### Defined in

[lib/source-destination/metadata.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L37)

___

### url

• `Optional` **url**: `string`

#### Defined in

[lib/source-destination/metadata.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L38)

___

### version

• `Optional` **version**: `string`

#### Defined in

[lib/source-destination/metadata.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/source-destination/metadata.ts#L39)
