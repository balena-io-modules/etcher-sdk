[etcher-sdk](../README.md) / [scanner](../modules/scanner.md) / [adapters](../modules/scanner.adapters.md) / DrivelistDrive

# Interface: DrivelistDrive

[scanner](../modules/scanner.md).[adapters](../modules/scanner.adapters.md).DrivelistDrive

## Hierarchy

- `Drive`

  ↳ **`DrivelistDrive`**

## Table of contents

### Properties

- [blockSize](scanner.adapters.DrivelistDrive.md#blocksize)
- [busType](scanner.adapters.DrivelistDrive.md#bustype)
- [busVersion](scanner.adapters.DrivelistDrive.md#busversion)
- [description](scanner.adapters.DrivelistDrive.md#description)
- [device](scanner.adapters.DrivelistDrive.md#device)
- [devicePath](scanner.adapters.DrivelistDrive.md#devicepath)
- [displayName](scanner.adapters.DrivelistDrive.md#displayname)
- [enumerator](scanner.adapters.DrivelistDrive.md#enumerator)
- [error](scanner.adapters.DrivelistDrive.md#error)
- [icon](scanner.adapters.DrivelistDrive.md#icon)
- [isCard](scanner.adapters.DrivelistDrive.md#iscard)
- [isReadOnly](scanner.adapters.DrivelistDrive.md#isreadonly)
- [isRemovable](scanner.adapters.DrivelistDrive.md#isremovable)
- [isSCSI](scanner.adapters.DrivelistDrive.md#isscsi)
- [isSystem](scanner.adapters.DrivelistDrive.md#issystem)
- [isUAS](scanner.adapters.DrivelistDrive.md#isuas)
- [isUSB](scanner.adapters.DrivelistDrive.md#isusb)
- [isVirtual](scanner.adapters.DrivelistDrive.md#isvirtual)
- [logicalBlockSize](scanner.adapters.DrivelistDrive.md#logicalblocksize)
- [mountpoints](scanner.adapters.DrivelistDrive.md#mountpoints)
- [partitionTableType](scanner.adapters.DrivelistDrive.md#partitiontabletype)
- [raw](scanner.adapters.DrivelistDrive.md#raw)
- [size](scanner.adapters.DrivelistDrive.md#size)

## Properties

### blockSize

• **blockSize**: `number`

#### Inherited from

$Drive.blockSize

#### Defined in

node_modules/drivelist/js/index.d.ts:6

___

### busType

• **busType**: `string`

#### Inherited from

$Drive.busType

#### Defined in

node_modules/drivelist/js/index.d.ts:7

___

### busVersion

• **busVersion**: ``null``

#### Inherited from

$Drive.busVersion

#### Defined in

node_modules/drivelist/js/index.d.ts:8

___

### description

• **description**: `string`

#### Inherited from

$Drive.description

#### Defined in

node_modules/drivelist/js/index.d.ts:9

___

### device

• **device**: `string`

#### Inherited from

$Drive.device

#### Defined in

node_modules/drivelist/js/index.d.ts:10

___

### devicePath

• **devicePath**: ``null`` \| `string`

#### Inherited from

$Drive.devicePath

#### Defined in

node_modules/drivelist/js/index.d.ts:11

___

### displayName

• **displayName**: `string`

#### Defined in

[lib/scanner/adapters/block-device.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/block-device.ts#L59)

___

### enumerator

• **enumerator**: `string`

#### Inherited from

$Drive.enumerator

#### Defined in

node_modules/drivelist/js/index.d.ts:12

___

### error

• **error**: ``null``

#### Inherited from

$Drive.error

#### Defined in

node_modules/drivelist/js/index.d.ts:13

___

### icon

• `Optional` **icon**: `string`

#### Defined in

[lib/scanner/adapters/block-device.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/scanner/adapters/block-device.ts#L60)

___

### isCard

• **isCard**: ``null``

#### Inherited from

$Drive.isCard

#### Defined in

node_modules/drivelist/js/index.d.ts:14

___

### isReadOnly

• **isReadOnly**: `boolean`

#### Inherited from

$Drive.isReadOnly

#### Defined in

node_modules/drivelist/js/index.d.ts:15

___

### isRemovable

• **isRemovable**: `boolean`

#### Inherited from

$Drive.isRemovable

#### Defined in

node_modules/drivelist/js/index.d.ts:16

___

### isSCSI

• **isSCSI**: ``null`` \| `boolean`

#### Inherited from

$Drive.isSCSI

#### Defined in

node_modules/drivelist/js/index.d.ts:17

___

### isSystem

• **isSystem**: `boolean`

#### Inherited from

$Drive.isSystem

#### Defined in

node_modules/drivelist/js/index.d.ts:18

___

### isUAS

• **isUAS**: ``null``

#### Inherited from

$Drive.isUAS

#### Defined in

node_modules/drivelist/js/index.d.ts:19

___

### isUSB

• **isUSB**: ``null`` \| `boolean`

#### Inherited from

$Drive.isUSB

#### Defined in

node_modules/drivelist/js/index.d.ts:20

___

### isVirtual

• **isVirtual**: ``null`` \| `boolean`

#### Inherited from

$Drive.isVirtual

#### Defined in

node_modules/drivelist/js/index.d.ts:21

___

### logicalBlockSize

• **logicalBlockSize**: `number`

#### Inherited from

$Drive.logicalBlockSize

#### Defined in

node_modules/drivelist/js/index.d.ts:22

___

### mountpoints

• **mountpoints**: `Mountpoint`[]

#### Inherited from

$Drive.mountpoints

#### Defined in

node_modules/drivelist/js/index.d.ts:23

___

### partitionTableType

• **partitionTableType**: ``null`` \| ``"mbr"`` \| ``"gpt"``

#### Inherited from

$Drive.partitionTableType

#### Defined in

node_modules/drivelist/js/index.d.ts:26

___

### raw

• **raw**: `string`

#### Inherited from

$Drive.raw

#### Defined in

node_modules/drivelist/js/index.d.ts:24

___

### size

• **size**: ``null`` \| `number`

#### Inherited from

$Drive.size

#### Defined in

node_modules/drivelist/js/index.d.ts:25
