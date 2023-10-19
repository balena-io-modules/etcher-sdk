[etcher-sdk](../README.md) / migrator

# Namespace: migrator

## Table of contents

### Enumerations

- [MigrateResult](../enums/migrator.MigrateResult.md)
- [WifiAuthType](../enums/migrator.WifiAuthType.md)

### Interfaces

- [ConnectionProfile](../interfaces/migrator.ConnectionProfile.md)
- [MigrateOptions](../interfaces/migrator.MigrateOptions.md)

### Functions

- [migrate](migrator.md#migrate)

## Functions

### migrate

▸ **migrate**(`imagePath`, `windowsPartition?`, `deviceName?`, `efiLabel?`, `options?`): `Promise`<[`MigrateResult`](../enums/migrator.MigrateResult.md)\>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imagePath` | `string` | `undefined` | balenaOS flasher image to use as source |
| `windowsPartition` | `string` | `'C'` | partition label of the device where we want to add the new data; defauls to "C" |
| `deviceName` | `string` | `'\\\\.\\PhysicalDrive0'` | storage device name, default: '\\.\PhysicalDrive0' |
| `efiLabel` | `string` | `'M'` | label to use when mounting the EFI partition, in case the default "M" is already in use; letter following efiLabel is used when mounting boot partition to write host config |
| `options` | [`MigrateOptions`](../interfaces/migrator.MigrateOptions.md) | `undefined` | various options to qualify how migrate runs |

#### Returns

`Promise`<[`MigrateResult`](../enums/migrator.MigrateResult.md)\>

OK if no errors, FAIL on error

**`Summary`**

Sets up a UEFI based computer running Windows to switch to balenaOS, and then reboots to execute the switch.
!!! WARNING !!! Running this function will OVERWRITE AND DESTROY the operating system running on this computer.

Migration copies a balenaOS boot partition and rootA partition from an image file to
the computer's storage, as well as a bootloader to trigger booting into the boot
partition. The migration is executed as a sequence of tasks as shown below, and begins
with an implicit "analyze" task that always is performed.

After a reboot, the computer may boot to the Windows system paritition, or it may
boot to the newly copied flasher boot parition. So we must allow for failover in either case.

The migration outputs useful status messages to the console. Migration catches
errors thrown within, outputs them to the console, and returns MigrateResult.ERROR.

The migration may be re-run on a computer to support development or a failure in the
original run. A task may be omitted by listing it in the options.omitTasks parameter.

* shrink -- shrink existing Windows partition as needed to accommodate the new partitions
* copy -- create/copy partitions from image, and add failover to Windows for boot partition
* config -- write host configuration like networking to boot partition
* bootloader -- copy/setup grub bootloader to EFI system partition
* reboot -- actually execute the reboot

#### Defined in

[lib/migrator/index.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/migrator/index.ts#L147)
