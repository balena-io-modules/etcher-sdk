
#  etcher-sdk

## Index

### Enumerations

* [OpenFlags](enums/openflags.md)

### Classes

* [Adapter](classes/adapter.md)
* [BZip2Source](classes/bzip2source.md)
* [BalenaS3Source](classes/balenas3source.md)
* [BlockDevice](classes/blockdevice.md)
* [BlockDeviceAdapter](classes/blockdeviceadapter.md)
* [BlockReadStream](classes/blockreadstream.md)
* [BlockTransformStream](classes/blocktransformstream.md)
* [BlockWriteStream](classes/blockwritestream.md)
* [BlocksVerificationError](classes/blocksverificationerror.md)
* [CRC32Hasher](classes/crc32hasher.md)
* [ChecksumVerificationError](classes/checksumverificationerror.md)
* [CompressedSource](classes/compressedsource.md)
* [ConfiguredSource](classes/configuredsource.md)
* [CountingHashStream](classes/countinghashstream.md)
* [CountingWritable](classes/countingwritable.md)
* [DmgSource](classes/dmgsource.md)
* [DriverlessDevice](classes/driverlessdevice.md)
* [DriverlessDeviceAdapter$](classes/driverlessdeviceadapter_.md)
* [File](classes/file.md)
* [GZipSource](classes/gzipsource.md)
* [Http](classes/http.md)
* [MultiDestination](classes/multidestination.md)
* [MultiDestinationError](classes/multidestinationerror.md)
* [MultiDestinationVerifier](classes/multidestinationverifier.md)
* [NotCapable](classes/notcapable.md)
* [RandomAccessZipSource](classes/randomaccesszipsource.md)
* [Scanner](classes/scanner.md)
* [SingleUseStreamSource](classes/singleusestreamsource.md)
* [SourceDestination](classes/sourcedestination.md)
* [SourceDestinationFs](classes/sourcedestinationfs.md)
* [SourceDisk](classes/sourcedisk.md)
* [SourceRandomAccessReader](classes/sourcerandomaccessreader.md)
* [SourceSource](classes/sourcesource.md)
* [SparseFilterStream](classes/sparsefilterstream.md)
* [SparseReadStream](classes/sparsereadstream.md)
* [SparseStreamVerifier](classes/sparsestreamverifier.md)
* [SparseWriteStream](classes/sparsewritestream.md)
* [StreamLimiter](classes/streamlimiter.md)
* [StreamVerifier](classes/streamverifier.md)
* [StreamZipSource](classes/streamzipsource.md)
* [UsbbootDeviceAdapter](classes/usbbootdeviceadapter.md)
* [UsbbootDrive](classes/usbbootdrive.md)
* [VerificationError](classes/verificationerror.md)
* [Verifier](classes/verifier.md)
* [XzSource](classes/xzsource.md)
* [ZipSource](classes/zipsource.md)

### Interfaces

* [AdapterSourceDestination](interfaces/adaptersourcedestination.md)
* [Block](interfaces/block.md)
* [BlocksWithChecksum](interfaces/blockswithchecksum.md)
* [DrivelistDrive](interfaces/drivelistdrive.md)
* [ExecResult](interfaces/execresult.md)
* [Metadata](interfaces/metadata.md)
* [MultiDestinationProgress](interfaces/multidestinationprogress.md)
* [MultiDestinationState](interfaces/multidestinationstate.md)
* [Operation](interfaces/operation.md)
* [PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)
* [ProgressEvent](interfaces/progressevent.md)
* [SourceTransform](interfaces/sourcetransform.md)
* [SparseReadable](interfaces/sparsereadable.md)
* [SparseReaderState](interfaces/sparsereaderstate.md)
* [SparseStreamChunk](interfaces/sparsestreamchunk.md)
* [SparseWritable](interfaces/sparsewritable.md)
* [TmpFileResult](interfaces/tmpfileresult.md)
* [WifiConfig](interfaces/wificonfig.md)

### Type aliases

* [AnyHasher](#anyhasher)
* [ChecksumType](#checksumtype)
* [ConfigureFunction](#configurefunction)
* [Constructor](#constructor)
* [Name](#name)
* [OnFailFunction](#onfailfunction)
* [OnProgressFunction](#onprogressfunction)
* [OperationCommand](#operationcommand)
* [WriteStep](#writestep)

### Variables

* [BITS](#bits)
* [CHUNK_SIZE](#chunk_size)
* [DEFAULT_BLOCK_SIZE](#default_block_size)
* [DISKPART_DELAY](#diskpart_delay)
* [DISKPART_RETRIES](#diskpart_retries)
* [DriverlessDeviceAdapter](#driverlessdeviceadapter)
* [ISIZE_LENGTH](#isize_length)
* [MBR_LAST_PRIMARY_PARTITION](#mbr_last_primary_partition)
* [NETWORK_SETTINGS_KEYS](#network_settings_keys)
* [NO_MATCHING_FILE_MSG](#no_matching_file_msg)
* [PARTITION_FIELDS](#partition_fields)
* [PATTERN](#pattern)
* [PROGRESS_EMISSION_INTERVAL](#progress_emission_interval)
* [ProgressBlockReadStream](#progressblockreadstream)
* [ProgressBlockWriteStream](#progressblockwritestream)
* [ProgressHashStream](#progresshashstream)
* [ProgressSparseWriteStream](#progresssparsewritestream)
* [ProgressWritable](#progresswritable)
* [ProgressWriteStream](#progresswritestream)
* [RETRY_BASE_TIMEOUT](#retry_base_timeout)
* [SCAN_INTERVAL](#scan_interval)
* [TMP_DIR](#tmp_dir)
* [TMP_RANDOM_BYTES](#tmp_random_bytes)
* [TRIES](#tries)
* [UNMOUNT_ON_SUCCESS_TIMEOUT_MS](#unmount_on_success_timeout_ms)
* [USBBOOT_RPI_COMPUTE_MODULE_NAMES](#usbboot_rpi_compute_module_names)
* [USE_ALIGNED_IO](#use_aligned_io)
* [UsbbootScanner](#usbbootscanner)
* [WIN32_FIRST_BYTES_TO_KEEP](#win32_first_bytes_to_keep)
* [XXHASH_SEED](#xxhash_seed)
* [debug](#debug)
* [parseFileIndexAsync](#parsefileindexasync)
* [unmountDiskAsync](#unmountdiskasync)

### Functions

* [asCallback](#ascallback)
* [blockmapToBlocks](#blockmaptoblocks)
* [blocksLength](#blockslength)
* [blocksVerificationErrorMessage](#blocksverificationerrormessage)
* [clean](#clean)
* [close](#close)
* [configure](#configure)
* [copy](#copy)
* [createHasher](#createhasher)
* [createNetworkConfigFiles](#createnetworkconfigfiles)
* [createSparseReaderStateIterator](#createsparsereaderstateiterator)
* [difference](#difference)
* [driveKey](#drivekey)
* [execFileAsync](#execfileasync)
* [execute](#execute)
* [executeOperation](#executeoperation)
* [fstat](#fstat)
* [fsync](#fsync)
* [getDiskDeviceType](#getdiskdevicetype)
* [getEta](#geteta)
* [getFileStreamFromZipStream](#getfilestreamfromzipstream)
* [getPartitionIndex](#getpartitionindex)
* [getRootStream](#getrootstream)
* [isSourceTransform](#issourcetransform)
* [isTransientError](#istransienterror)
* [isntNull](#isntnull)
* [looksLikeComputeModule](#lookslikecomputemodule)
* [makeClassEmitProgressEvents](#makeclassemitprogressevents)
* [matchSupportedExtensions](#matchsupportedextensions)
* [nmWifiConfig](#nmwificonfig)
* [open](#open)
* [pad](#pad)
* [pipeRegularSourceToDestination](#piperegularsourcetodestination)
* [pipeSourceToDestinations](#pipesourcetodestinations)
* [pipeSparseSourceToDestination](#pipesparsesourcetodestination)
* [randomFilePath](#randomfilepath)
* [read](#read)
* [readFile](#readfile)
* [require](#require)
* [runDiskpart](#rundiskpart)
* [runVerifier](#runverifier)
* [sparseStreamToBuffer](#sparsestreamtobuffer)
* [stat](#stat)
* [streamToBuffer](#streamtobuffer)
* [tmpFile](#tmpfile)
* [tmpFileDisposer](#tmpfiledisposer)
* [unlink](#unlink)
* [verifyOrGenerateChecksum](#verifyorgeneratechecksum)
* [write](#write)
* [writeFile](#writefile)

### Object literals

* [ACTIONS](#actions)

---

## Type aliases

<a id="anyhasher"></a>

###  AnyHasher

**Ƭ AnyHasher**: *[CRC32Hasher](classes/crc32hasher.md) \| `Hash` \| `XXHash` \| `XXHash64`*

*Defined in [sparse-stream/shared.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L66)*

___
<a id="checksumtype"></a>

###  ChecksumType

**Ƭ ChecksumType**: *"crc32" \| "sha1" \| "sha256" \| "xxhash32" \| "xxhash64"*

*Defined in [sparse-stream/shared.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L26)*

___
<a id="configurefunction"></a>

###  ConfigureFunction

**Ƭ ConfigureFunction**: *`function`*

*Defined in [source-destination/configured-source/configured-source.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L41)*

#### Type declaration
▸(disk: *`Disk`*, config: *`any`*): `Promise`<`void`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| disk | `Disk` |
| config | `any` |

**Returns:** `Promise`<`void`>

___
<a id="constructor"></a>

###  Constructor

**Ƭ Constructor**: *`object`*

*Defined in [source-destination/progress.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/progress.ts#L25)*

#### Type declaration

___
<a id="name"></a>

###  Name

**Ƭ Name**: *"balena" \| "resin"*

*Defined in [source-destination/balena-s3-source.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/balena-s3-source.ts#L25)*

___
<a id="onfailfunction"></a>

###  OnFailFunction

**Ƭ OnFailFunction**: *`function`*

*Defined in [multi-write.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L60)*

#### Type declaration
▸(destination: *[SourceDestination](classes/sourcedestination.md)*, error: *`Error`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| destination | [SourceDestination](classes/sourcedestination.md) |
| error | `Error` |

**Returns:** `void`

___
<a id="onprogressfunction"></a>

###  OnProgressFunction

**Ƭ OnProgressFunction**: *`function`*

*Defined in [multi-write.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L65)*

#### Type declaration
▸(progress: *[MultiDestinationProgress](interfaces/multidestinationprogress.md)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| progress | [MultiDestinationProgress](interfaces/multidestinationprogress.md) |

**Returns:** `void`

___
<a id="operationcommand"></a>

###  OperationCommand

**Ƭ OperationCommand**: *"configure" \| "copy"*

*Defined in [source-destination/configured-source/configure.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L28)*

___
<a id="writestep"></a>

###  WriteStep

**Ƭ WriteStep**: *"flashing" \| "verifying" \| "finished"*

*Defined in [multi-write.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L34)*

___

## Variables

<a id="bits"></a>

### `<Const>` BITS

**● BITS**: *`64` \| `32`* =  arch === 'x64' || arch === 'aarch64' ? 64 : 32

*Defined in [source-destination/source-destination.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L45)*

___
<a id="chunk_size"></a>

### `<Const>` CHUNK_SIZE

**● CHUNK_SIZE**: *`number`* =  1024 ** 2

*Defined in [constants.ts:19](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/constants.ts#L19)*

___
<a id="default_block_size"></a>

### `<Const>` DEFAULT_BLOCK_SIZE

**● DEFAULT_BLOCK_SIZE**: *`512`* = 512

*Defined in [source-destination/block-device.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/block-device.ts#L41)*

___
<a id="diskpart_delay"></a>

### `<Const>` DISKPART_DELAY

**● DISKPART_DELAY**: *`2000`* = 2000

*Defined in [diskpart.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L27)*

___
<a id="diskpart_retries"></a>

### `<Const>` DISKPART_RETRIES

**● DISKPART_RETRIES**: *`5`* = 5

*Defined in [diskpart.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L28)*

___
<a id="driverlessdeviceadapter"></a>

### `<Const>` DriverlessDeviceAdapter

**● DriverlessDeviceAdapter**: *`undefined` \| [DriverlessDeviceAdapter$](classes/driverlessdeviceadapter_.md)* = 
	platform === 'win32' ? DriverlessDeviceAdapter$ : undefined

*Defined in [scanner/adapters/driverless.ts:100](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/driverless.ts#L100)*

___
<a id="isize_length"></a>

### `<Const>` ISIZE_LENGTH

**● ISIZE_LENGTH**: *`4`* = 4

*Defined in [source-destination/gzip.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/gzip.ts#L23)*

___
<a id="mbr_last_primary_partition"></a>

### `<Const>` MBR_LAST_PRIMARY_PARTITION

**● MBR_LAST_PRIMARY_PARTITION**: *`4`* = 4

*Defined in [source-destination/configured-source/configure.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L36)*

___
<a id="network_settings_keys"></a>

### `<Const>` NETWORK_SETTINGS_KEYS

**● NETWORK_SETTINGS_KEYS**: *`string`[]* =  [
	'wifiSsid',
	'wifiKey',
	'ip',
	'netmask',
	'gateway',
	'routeMetric',
]

*Defined in [source-destination/configured-source/operations/configure.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/configure.ts#L23)*

___
<a id="no_matching_file_msg"></a>

### `<Const>` NO_MATCHING_FILE_MSG

**● NO_MATCHING_FILE_MSG**: *"Can&#x27;t find a matching file in this zip archive"* = "Can't find a matching file in this zip archive"

*Defined in [constants.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/constants.ts#L20)*

___
<a id="partition_fields"></a>

### `<Const>` PARTITION_FIELDS

**● PARTITION_FIELDS**: *`string`[]* =  ['partition', 'to.partition', 'from.partition']

*Defined in [source-destination/configured-source/configure.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L35)*

___
<a id="pattern"></a>

### `<Const>` PATTERN

**● PATTERN**: *`RegExp`* =  /PHYSICALDRIVE(\d+)/i

*Defined in [diskpart.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L29)*

___
<a id="progress_emission_interval"></a>

### `<Const>` PROGRESS_EMISSION_INTERVAL

**● PROGRESS_EMISSION_INTERVAL**: *`number`* =  1000 / 2

*Defined in [constants.ts:17](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/constants.ts#L17)*

___
<a id="progressblockreadstream"></a>

### `<Const>` ProgressBlockReadStream

**● ProgressBlockReadStream**: *`(Anonymous class)` & [BlockReadStream](classes/blockreadstream.md)* =  makeClassEmitProgressEvents(
	BlockReadStream,
	'bytesRead',
	'bytesRead',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [block-read-stream.ts:98](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/block-read-stream.ts#L98)*

___
<a id="progressblockwritestream"></a>

### `<Const>` ProgressBlockWriteStream

**● ProgressBlockWriteStream**: *`(Anonymous class)` & [BlockWriteStream](classes/blockwritestream.md)* =  makeClassEmitProgressEvents(
	BlockWriteStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [block-write-stream.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/block-write-stream.ts#L170)*

___
<a id="progresshashstream"></a>

### `<Const>` ProgressHashStream

**● ProgressHashStream**: *`(Anonymous class)` & [CountingHashStream](classes/countinghashstream.md)* =  makeClassEmitProgressEvents(
	CountingHashStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [source-destination/source-destination.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L58)*

___
<a id="progresssparsewritestream"></a>

### `<Const>` ProgressSparseWriteStream

**● ProgressSparseWriteStream**: *`(Anonymous class)` & [SparseWriteStream](classes/sparsewritestream.md)* =  makeClassEmitProgressEvents(
	SparseWriteStream,
	'bytesWritten',
	'position',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [sparse-stream/sparse-write-stream.ts:120](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/sparse-write-stream.ts#L120)*

___
<a id="progresswritable"></a>

### `<Const>` ProgressWritable

**● ProgressWritable**: *`(Anonymous class)` & [CountingWritable](classes/countingwritable.md)* =  makeClassEmitProgressEvents(
	CountingWritable,
	'bytesWritten',
	'position',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [source-destination/progress.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/progress.ts#L110)*

___
<a id="progresswritestream"></a>

### `<Const>` ProgressWriteStream

**● ProgressWriteStream**: *`any`* =  makeClassEmitProgressEvents(
	// type definitions for node 6 export fs.WriteStream as an interface, but it's a class.
	// @ts-ignore
	fs.WriteStream,
	'bytesWritten',
	'bytesWritten',
	PROGRESS_EMISSION_INTERVAL,
)

*Defined in [source-destination/file.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/file.ts#L36)*

___
<a id="retry_base_timeout"></a>

### `<Const>` RETRY_BASE_TIMEOUT

**● RETRY_BASE_TIMEOUT**: *`100`* = 100

*Defined in [constants.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/constants.ts#L18)*

___
<a id="scan_interval"></a>

### `<Const>` SCAN_INTERVAL

**● SCAN_INTERVAL**: *`1000`* = 1000

*Defined in [scanner/adapters/block-device.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/block-device.ts#L27)*
*Defined in [scanner/adapters/driverless.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/driverless.ts#L26)*

___
<a id="tmp_dir"></a>

### `<Const>` TMP_DIR

**● TMP_DIR**: *`string`* =  tmpdir()

*Defined in [tmp.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L25)*

___
<a id="tmp_random_bytes"></a>

### `<Const>` TMP_RANDOM_BYTES

**● TMP_RANDOM_BYTES**: *`6`* = 6

*Defined in [tmp.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L24)*

___
<a id="tries"></a>

### `<Const>` TRIES

**● TRIES**: *`5`* = 5

*Defined in [tmp.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L26)*

___
<a id="unmount_on_success_timeout_ms"></a>

### `<Const>` UNMOUNT_ON_SUCCESS_TIMEOUT_MS

**● UNMOUNT_ON_SUCCESS_TIMEOUT_MS**: *`2000`* = 2000

*Defined in [source-destination/block-device.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/block-device.ts#L40)*

*__summary__*: Time, in milliseconds, to wait before unmounting on success

___
<a id="usbboot_rpi_compute_module_names"></a>

### `<Const>` USBBOOT_RPI_COMPUTE_MODULE_NAMES

**● USBBOOT_RPI_COMPUTE_MODULE_NAMES**: *`string`[]* =  [
	'0001',
	'RPi-MSD- 0001',
	'File-Stor Gadget',
	'Linux File-Stor_Gadget',
	'Linux File-Stor Gadget',
	'Linux File-Stor Gadget USB Device',
	'Linux File-Stor Gadget Media',
]

*Defined in [scanner/adapters/block-device.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/block-device.ts#L28)*

___
<a id="use_aligned_io"></a>

### `<Const>` USE_ALIGNED_IO

**● USE_ALIGNED_IO**: *`boolean`* =  platform() === 'win32' || platform() === 'darwin'

*Defined in [source-destination/block-device.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/block-device.ts#L43)*

___
<a id="usbbootscanner"></a>

### `<Let>` UsbbootScanner

**● UsbbootScanner**: *`UsbbootScanner` \| `undefined`*

*Defined in [scanner/adapters/usbboot.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/usbboot.ts#L27)*

___
<a id="win32_first_bytes_to_keep"></a>

### `<Const>` WIN32_FIRST_BYTES_TO_KEEP

**● WIN32_FIRST_BYTES_TO_KEEP**: *`number`* =  64 * 1024

*Defined in [source-destination/block-device.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/block-device.ts#L42)*

___
<a id="xxhash_seed"></a>

### `<Const>` XXHASH_SEED

**● XXHASH_SEED**: *`1163150152`* = 1163150152

*Defined in [constants.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/constants.ts#L22)*

___
<a id="debug"></a>

### `<Const>` debug

**● debug**: *`IDebugger`* =  _debug('etcher-sdk:configured-source')

*Defined in [diskpart.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L25)*
*Defined in [block-write-stream.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/block-write-stream.ts#L31)*
*Defined in [scanner/adapters/block-device.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/block-device.ts#L25)*
*Defined in [scanner/scanner.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/scanner.ts#L22)*
*Defined in [source-destination/configured-source/configured-source.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L39)*

___
<a id="parsefileindexasync"></a>

### `<Const>` parseFileIndexAsync

**● parseFileIndexAsync**: *`function`* =  promisify(parseFileIndex)

*Defined in [source-destination/xz.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/xz.ts#L24)*

#### Type declaration
▸(arg1: *`A1`*): `Bluebird`<`T`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg1 | `A1` |

**Returns:** `Bluebird`<`T`>

___
<a id="unmountdiskasync"></a>

### `<Const>` unmountDiskAsync

**● unmountDiskAsync**: *`function`* =  promisify(unmountDisk)

*Defined in [source-destination/block-device.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/block-device.ts#L45)*

#### Type declaration
▸(arg1: *`A1`*): `Bluebird`<`T`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| arg1 | `A1` |

**Returns:** `Bluebird`<`T`>

___

## Functions

<a id="ascallback"></a>

###  asCallback

▸ **asCallback**(promise: *`Promise`<`any`>*, callback: *`function`*): `void`

*Defined in [utils.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/utils.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promise | `Promise`<`any`> |
| callback | `function` |

**Returns:** `void`

___
<a id="blockmaptoblocks"></a>

###  blockmapToBlocks

▸ **blockmapToBlocks**(blockmap: *`BlockMap`*): [BlocksWithChecksum](interfaces/blockswithchecksum.md)[]

*Defined in [source-destination/zip.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/zip.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blockmap | `BlockMap` |

**Returns:** [BlocksWithChecksum](interfaces/blockswithchecksum.md)[]

___
<a id="blockslength"></a>

###  blocksLength

▸ **blocksLength**(blocks: *[BlocksWithChecksum](interfaces/blockswithchecksum.md)[]*): `number`

*Defined in [sparse-stream/shared.ts:128](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blocks | [BlocksWithChecksum](interfaces/blockswithchecksum.md)[] |

**Returns:** `number`

___
<a id="blocksverificationerrormessage"></a>

###  blocksVerificationErrorMessage

▸ **blocksVerificationErrorMessage**(blocksWithChecksum: *[BlocksWithChecksum](interfaces/blockswithchecksum.md)*, checksum: *`string`*): `string`

*Defined in [errors.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/errors.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blocksWithChecksum | [BlocksWithChecksum](interfaces/blockswithchecksum.md) |
| checksum | `string` |

**Returns:** `string`

___
<a id="clean"></a>

### `<Const>` clean

▸ **clean**(device: *`string`*): `Promise`<`void`>

*Defined in [diskpart.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L86)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| device | `string` |  device path |

**Returns:** `Promise`<`void`>

___
<a id="close"></a>

###  close

▸ **close**(fd: *`number`*): `Promise`<`void`>

*Defined in [fs.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fd | `number` |

**Returns:** `Promise`<`void`>

___
<a id="configure"></a>

### `<Const>` configure

▸ **configure**(disk: *`Disk`*, options?: *`object`*): `Promise`<`void`>

*Defined in [source-destination/configured-source/configure.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L87)*

**Parameters:**

**disk: `Disk`**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` config | `any` |

**Returns:** `Promise`<`void`>

___
<a id="copy"></a>

### `<Const>` copy

▸ **copy**(sourceFs: *`AsyncFsLike`*, sourcePath: *`string`*, destinationFs: *`AsyncFsLike`*, destinationPath: *`string`*): `Promise`<`void`>

*Defined in [source-destination/configured-source/operations/copy.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/copy.ts#L22)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sourceFs | `AsyncFsLike` |
| sourcePath | `string` |
| destinationFs | `AsyncFsLike` |
| destinationPath | `string` |

**Returns:** `Promise`<`void`>

___
<a id="createhasher"></a>

###  createHasher

▸ **createHasher**(checksumType?: *[ChecksumType](#checksumtype)*): `undefined` \| [AnyHasher](#anyhasher)

*Defined in [sparse-stream/shared.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` checksumType | [ChecksumType](#checksumtype) |

**Returns:** `undefined` \| [AnyHasher](#anyhasher)

___
<a id="createnetworkconfigfiles"></a>

### `<Const>` createNetworkConfigFiles

▸ **createNetworkConfigFiles**(networks: *`any`*): `object`

*Defined in [source-destination/configured-source/operations/configure.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/configure.ts#L95)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| networks | `any` |

**Returns:** `object`

___
<a id="createsparsereaderstateiterator"></a>

###  createSparseReaderStateIterator

▸ **createSparseReaderStateIterator**(blocks: *[BlocksWithChecksum](interfaces/blockswithchecksum.md)[]*, verify: *`boolean`*, generateChecksums: *`boolean`*): `Iterator`<[SparseReaderState](interfaces/sparsereaderstate.md)>

*Defined in [sparse-stream/shared.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| blocks | [BlocksWithChecksum](interfaces/blockswithchecksum.md)[] |
| verify | `boolean` |
| generateChecksums | `boolean` |

**Returns:** `Iterator`<[SparseReaderState](interfaces/sparsereaderstate.md)>

___
<a id="difference"></a>

###  difference

▸ **difference**<`T`>(setA: *`Set`<`T`>*, setB: *`Set`<`T`>*): `Set`<`T`>

*Defined in [utils.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/utils.ts#L56)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| setA | `Set`<`T`> |
| setB | `Set`<`T`> |

**Returns:** `Set`<`T`>

___
<a id="drivekey"></a>

### `<Const>` driveKey

▸ **driveKey**(drive: *`$Drive`*): `string`

*Defined in [scanner/adapters/block-device.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/block-device.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| drive | `$Drive` |

**Returns:** `string`

___
<a id="execfileasync"></a>

### `<Const>` execFileAsync

▸ **execFileAsync**(command: *`string`*, args?: *`string`[]*, options?: *`ExecFileOptions`*): `Promise`<[ExecResult](interfaces/execresult.md)>

*Defined in [diskpart.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L36)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| command | `string` | - |
| `Default value` args | `string`[] |  [] |
| `Default value` options | `ExecFileOptions` |  {} |

**Returns:** `Promise`<[ExecResult](interfaces/execresult.md)>

___
<a id="execute"></a>

### `<Const>` execute

▸ **execute**(operation: *`any`*, disk: *`Disk`*): `Promise`<`void`>

▸ **execute**(operation: *`any`*, disk: *`Disk`*): `Promise`<`void`>

*Defined in [source-destination/configured-source/operations/configure.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/configure.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| operation | `any` |
| disk | `Disk` |

**Returns:** `Promise`<`void`>

*Defined in [source-destination/configured-source/operations/copy.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/copy.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| operation | `any` |
| disk | `Disk` |

**Returns:** `Promise`<`void`>

___
<a id="executeoperation"></a>

### `<Const>` executeOperation

▸ **executeOperation**(operation: *[Operation](interfaces/operation.md)*, disk: *`Disk`*): `Promise`<`void`>

*Defined in [source-destination/configured-source/configure.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| operation | [Operation](interfaces/operation.md) |
| disk | `Disk` |

**Returns:** `Promise`<`void`>

___
<a id="fstat"></a>

###  fstat

▸ **fstat**(fd: *`number`*): `Promise`<`Stats`>

*Defined in [fs.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fd | `number` |

**Returns:** `Promise`<`Stats`>

___
<a id="fsync"></a>

###  fsync

▸ **fsync**(fd: *`number`*): `Promise`<`void`>

*Defined in [fs.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fd | `number` |

**Returns:** `Promise`<`void`>

___
<a id="getdiskdevicetype"></a>

### `<Const>` getDiskDeviceType

▸ **getDiskDeviceType**(disk: *`Disk`*): `Promise`<`any`>

*Defined in [source-destination/configured-source/configure.ts:68](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L68)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| disk | `Disk` |

**Returns:** `Promise`<`any`>

___
<a id="geteta"></a>

###  getEta

▸ **getEta**(current: *`number`*, total: *`number`*, speed: *`number`*): `number` \| `undefined`

*Defined in [multi-write.ts:72](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| current | `number` |
| total | `number` |
| speed | `number` |

**Returns:** `number` \| `undefined`

___
<a id="getfilestreamfromzipstream"></a>

### `<Const>` getFileStreamFromZipStream

▸ **getFileStreamFromZipStream**(zipStream: *`ReadableStream`*, match: *`function`*): `Promise`<`ZipStreamEntry`>

*Defined in [zip.ts:21](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/zip.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| zipStream | `ReadableStream` |
| match | `function` |

**Returns:** `Promise`<`ZipStreamEntry`>

___
<a id="getpartitionindex"></a>

### `<Const>` getPartitionIndex

▸ **getPartitionIndex**(partition: *`number` \| `object`*): `number`

*Defined in [source-destination/configured-source/configure.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| partition | `number` \| `object` |

**Returns:** `number`

___
<a id="getrootstream"></a>

###  getRootStream

▸ **getRootStream**(stream: *`ReadableStream`*): `ReadableStream`

*Defined in [source-destination/compressed-source.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/compressed-source.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `ReadableStream` |

**Returns:** `ReadableStream`

___
<a id="issourcetransform"></a>

###  isSourceTransform

▸ **isSourceTransform**(stream: *`any`*): `boolean`

*Defined in [source-destination/compressed-source.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/compressed-source.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `any` |

**Returns:** `boolean`

___
<a id="istransienterror"></a>

###  isTransientError

▸ **isTransientError**(error: *`ErrnoException`*): `boolean`

*Defined in [errors.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/errors.ts#L67)*

*__summary__*: Determine whether an error is considered a transient occurrence, and the operation should be retried Errors considered potentially temporary are:

*   Mac OS: ENXIO, EBUSY
*   Windows: ENOENT, UNKNOWN
*   Linux: EIO, EBUSY

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `ErrnoException` |

**Returns:** `boolean`

___
<a id="isntnull"></a>

###  isntNull

▸ **isntNull**(x: *`any`*): `boolean`

*Defined in [source-destination/multi-destination.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/multi-destination.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `any` |

**Returns:** `boolean`

___
<a id="lookslikecomputemodule"></a>

###  looksLikeComputeModule

▸ **looksLikeComputeModule**(description: *`string`*): `boolean`

*Defined in [scanner/adapters/block-device.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/block-device.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| description | `string` |

**Returns:** `boolean`

___
<a id="makeclassemitprogressevents"></a>

###  makeClassEmitProgressEvents

▸ **makeClassEmitProgressEvents**<`T`>(Cls: *`T`*, attribute: *`string`*, positionAttribute: *`string`*, interval: *`number`*): `(Anonymous class)` & `T`

*Defined in [source-destination/progress.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/progress.ts#L33)*

**Type parameters:**

#### T :  [Constructor](#constructor)<`EventEmitter`>
**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | `T` |
| attribute | `string` |
| positionAttribute | `string` |
| interval | `number` |

**Returns:** `(Anonymous class)` & `T`

___
<a id="matchsupportedextensions"></a>

###  matchSupportedExtensions

▸ **matchSupportedExtensions**(filename: *`string`*): `boolean`

*Defined in [source-destination/zip.ts:61](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/zip.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| filename | `string` |

**Returns:** `boolean`

___
<a id="nmwificonfig"></a>

### `<Const>` nmWifiConfig

▸ **nmWifiConfig**(index: *`number`*, options: *[WifiConfig](interfaces/wificonfig.md)*): `string`

*Defined in [source-destination/configured-source/operations/configure.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/configure.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |
| options | [WifiConfig](interfaces/wificonfig.md) |

**Returns:** `string`

___
<a id="open"></a>

###  open

▸ **open**(path: *`string` \| `Buffer`*, flags: *`string` \| `number`*, mode?: *`number`*): `Promise`<`number`>

*Defined in [fs.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L58)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| path | `string` \| `Buffer` | - |
| flags | `string` \| `number` | - |
| `Default value` mode | `number` | 438 |

**Returns:** `Promise`<`number`>

___
<a id="pad"></a>

### `<Const>` pad

▸ **pad**(num: *`number`*): `string`

*Defined in [source-destination/configured-source/operations/configure.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/operations/configure.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| num | `number` |

**Returns:** `string`

___
<a id="piperegularsourcetodestination"></a>

###  pipeRegularSourceToDestination

▸ **pipeRegularSourceToDestination**(source: *[SourceDestination](classes/sourcedestination.md)*, sourceMetadata: *[Metadata](interfaces/metadata.md)*, destination: *[MultiDestination](classes/multidestination.md)*, verify: *`boolean`*, updateState: *`function`*, onFail: *`function`*, onProgress: *`function`*, _onRootStreamProgress: *`function`*): `Promise`<`void`>

*Defined in [multi-write.ts:218](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L218)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](classes/sourcedestination.md) |
| sourceMetadata | [Metadata](interfaces/metadata.md) |
| destination | [MultiDestination](classes/multidestination.md) |
| verify | `boolean` |
| updateState | `function` |
| onFail | `function` |
| onProgress | `function` |
| _onRootStreamProgress | `function` |

**Returns:** `Promise`<`void`>

___
<a id="pipesourcetodestinations"></a>

###  pipeSourceToDestinations

▸ **pipeSourceToDestinations**(source: *[SourceDestination](classes/sourcedestination.md)*, destinations: *[SourceDestination](classes/sourcedestination.md)[]*, onFail: *[OnFailFunction](#onfailfunction)*, onProgress: *[OnProgressFunction](#onprogressfunction)*, verify?: *`boolean`*): `Promise`<[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)>

*Defined in [multi-write.ts:82](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L82)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| source | [SourceDestination](classes/sourcedestination.md) | - |
| destinations | [SourceDestination](classes/sourcedestination.md)[] | - |
| onFail | [OnFailFunction](#onfailfunction) | - |
| onProgress | [OnProgressFunction](#onprogressfunction) | - |
| `Default value` verify | `boolean` | false |

**Returns:** `Promise`<[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)>

___
<a id="pipesparsesourcetodestination"></a>

###  pipeSparseSourceToDestination

▸ **pipeSparseSourceToDestination**(source: *[SourceDestination](classes/sourcedestination.md)*, destination: *[SourceDestination](classes/sourcedestination.md)*, verify: *`boolean`*, updateState: *`function`*, onFail: *`function`*, onProgress: *`function`*, _onRootStreamProgress: *`function`*): `Promise`<`void`>

*Defined in [multi-write.ts:306](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L306)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](classes/sourcedestination.md) |
| destination | [SourceDestination](classes/sourcedestination.md) |
| verify | `boolean` |
| updateState | `function` |
| onFail | `function` |
| onProgress | `function` |
| _onRootStreamProgress | `function` |

**Returns:** `Promise`<`void`>

___
<a id="randomfilepath"></a>

### `<Const>` randomFilePath

▸ **randomFilePath**(): `string`

*Defined in [tmp.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L28)*

**Returns:** `string`

___
<a id="read"></a>

###  read

▸ **read**(fd: *`number`*, buf: *`Buffer`*, offset: *`number`*, length: *`number`*, position: *`number`*): `Promise`<`ReadResult`>

*Defined in [fs.ts:76](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fd | `number` |
| buf | `Buffer` |
| offset | `number` |
| length | `number` |
| position | `number` |

**Returns:** `Promise`<`ReadResult`>

___
<a id="readfile"></a>

###  readFile

▸ **readFile**(path: *`string`*, options?: *`object` \| `undefined`*): `Promise`<`string` \| `Buffer`>

*Defined in [fs.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L103)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| path | `string` | - |
| `Default value` options | `object` \| `undefined` |  {encoding: null,flag: &#x27;r&#x27;,} |

**Returns:** `Promise`<`string` \| `Buffer`>

___
<a id="require"></a>

###  require

▸ **require**(moduleName: *`string`*): `any`

*Defined in [scanner/adapters/usbboot.ts:17](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/scanner/adapters/usbboot.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| moduleName | `string` |

**Returns:** `any`

___
<a id="rundiskpart"></a>

### `<Const>` runDiskpart

▸ **runDiskpart**(commands: *`string`[]*): `Promise`<`void`>

*Defined in [diskpart.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/diskpart.ts#L63)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| commands | `string`[] |  list of commands to run |

**Returns:** `Promise`<`void`>

___
<a id="runverifier"></a>

###  runVerifier

▸ **runVerifier**(verifier: *[Verifier](classes/verifier.md)*, onFail: *`function`*, onProgress: *`function`*): `Promise`<`void`>

*Defined in [multi-write.ts:338](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/multi-write.ts#L338)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| verifier | [Verifier](classes/verifier.md) |
| onFail | `function` |
| onProgress | `function` |

**Returns:** `Promise`<`void`>

___
<a id="sparsestreamtobuffer"></a>

###  sparseStreamToBuffer

▸ **sparseStreamToBuffer**(stream: *`ReadableStream`*): `Promise`<`Buffer`>

*Defined in [utils.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/utils.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `ReadableStream` |

**Returns:** `Promise`<`Buffer`>

___
<a id="stat"></a>

###  stat

▸ **stat**(path: *`string` \| `Buffer`*): `Promise`<`Stats`>

*Defined in [fs.ts:126](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `Buffer` |

**Returns:** `Promise`<`Stats`>

___
<a id="streamtobuffer"></a>

###  streamToBuffer

▸ **streamToBuffer**(stream: *`ReadableStream`*): `Promise`<`Buffer`>

*Defined in [utils.ts:19](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/utils.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| stream | `ReadableStream` |

**Returns:** `Promise`<`Buffer`>

___
<a id="tmpfile"></a>

### `<Const>` tmpFile

▸ **tmpFile**(keepOpen?: *`boolean`*): `Promise`<[TmpFileResult](interfaces/tmpfileresult.md)>

*Defined in [tmp.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L37)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keepOpen | `boolean` | true |

**Returns:** `Promise`<[TmpFileResult](interfaces/tmpfileresult.md)>

___
<a id="tmpfiledisposer"></a>

### `<Const>` tmpFileDisposer

▸ **tmpFileDisposer**(keepOpen?: *`boolean`*): `Disposer`<[TmpFileResult](interfaces/tmpfileresult.md)>

*Defined in [tmp.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/tmp.ts#L65)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` keepOpen | `boolean` | true |

**Returns:** `Disposer`<[TmpFileResult](interfaces/tmpfileresult.md)>

___
<a id="unlink"></a>

###  unlink

▸ **unlink**(path: *`string` \| `Buffer`*): `Promise`<`void`>

*Defined in [fs.ts:156](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L156)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` \| `Buffer` |

**Returns:** `Promise`<`void`>

___
<a id="verifyorgeneratechecksum"></a>

###  verifyOrGenerateChecksum

▸ **verifyOrGenerateChecksum**(hasher: *[AnyHasher](#anyhasher) \| `undefined`*, blocks: *[BlocksWithChecksum](interfaces/blockswithchecksum.md)*, verify: *`boolean`*, generateChecksums: *`boolean`*): `void`

*Defined in [sparse-stream/shared.ts:112](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/sparse-stream/shared.ts#L112)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hasher | [AnyHasher](#anyhasher) \| `undefined` |
| blocks | [BlocksWithChecksum](interfaces/blockswithchecksum.md) |
| verify | `boolean` |
| generateChecksums | `boolean` |

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(fd: *`number`*, buf: *`Buffer`*, offset: *`number`*, length: *`number`*, position: *`number`*): `Promise`<`WriteResult`>

*Defined in [fs.ts:168](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L168)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fd | `number` |
| buf | `Buffer` |
| offset | `number` |
| length | `number` |
| position | `number` |

**Returns:** `Promise`<`WriteResult`>

___
<a id="writefile"></a>

###  writeFile

▸ **writeFile**(path: *`string`*, data: *`string` \| `Buffer`*, options?: *`object`*): `Promise`<`void`>

*Defined in [fs.ts:140](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/fs.ts#L140)*

**Parameters:**

**path: `string`**

**data: `string` \| `Buffer`**

**`Default value` options: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| encoding | `string` | &quot;utf8&quot; |
| flag | `string` | &quot;w&quot; |
| mode | `number` | 438 |

**Returns:** `Promise`<`void`>

___

## Object literals

<a id="actions"></a>

### `<Const>` ACTIONS

**ACTIONS**: *`object`*

*Defined in [source-destination/configured-source/configure.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L38)*

<a id="actions.configure"></a>

####  configure

**● configure**: *[execute]()* =  configureAction

*Defined in [source-destination/configured-source/configure.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L39)*

___
<a id="actions.copy"></a>

####  copy

**● copy**: *[execute]()* =  copyAction

*Defined in [source-destination/configured-source/configure.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configure.ts#L40)*

___

___

