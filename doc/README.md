[etcher-sdk](README.md)

# etcher-sdk

## Index

### Classes

* [Adapter](classes/adapter.md)
* [AlignedReadableState](classes/alignedreadablestate.md)
* [BZip2Source](classes/bzip2source.md)
* [BalenaS3CompressedSource](classes/balenas3compressedsource.md)
* [BalenaS3Source](classes/balenas3source.md)
* [BalenaS3SourceBase](classes/balenas3sourcebase.md)
* [BlockDevice](classes/blockdevice.md)
* [BlockDeviceAdapter](classes/blockdeviceadapter.md)
* [BlockReadStream](classes/blockreadstream.md)
* [BlockTransformStream](classes/blocktransformstream.md)
* [BlockWriteStream](classes/blockwritestream.md)
* [BlocksVerificationError](classes/blocksverificationerror.md)
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
* [HashStream](classes/hashstream.md)
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
* [SparseTransformStream](classes/sparsetransformstream.md)
* [SparseWriteStream](classes/sparsewritestream.md)
* [Speedometer](classes/speedometer.md)
* [StreamLimiter](classes/streamlimiter.md)
* [StreamVerifier](classes/streamverifier.md)
* [StreamZipSource](classes/streamzipsource.md)
* [UsbBBbootDeviceAdapter](classes/usbbbbootdeviceadapter.md)
* [UsbBBbootDrive](classes/usbbbbootdrive.md)
* [UsbbootDeviceAdapter](classes/usbbootdeviceadapter.md)
* [UsbbootDrive](classes/usbbootdrive.md)
* [VerificationError](classes/verificationerror.md)
* [Verifier](classes/verifier.md)
* [XzSource](classes/xzsource.md)
* [ZipSource](classes/zipsource.md)

### Interfaces

* [AdapterSourceDestination](interfaces/adaptersourcedestination.md)
* [AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)
* [AwsCredentials](interfaces/awscredentials.md)
* [BalenaS3CompressedSourceOptions](interfaces/balenas3compressedsourceoptions.md)
* [BalenaS3SourceOptions](interfaces/balenas3sourceoptions.md)
* [Block](interfaces/block.md)
* [BlocksWithChecksum](interfaces/blockswithchecksum.md)
* [CopyOperation](interfaces/copyoperation.md)
* [CreateReadStreamOptions](interfaces/createreadstreamoptions.md)
* [CreateSparseReadStreamOptions](interfaces/createsparsereadstreamoptions.md)
* [DeviceTypeJSON](interfaces/devicetypejson.md)
* [Dictionary](interfaces/dictionary.md)
* [DrivelistDrive](interfaces/drivelistdrive.md)
* [ExecResult](interfaces/execresult.md)
* [FileOnPartition](interfaces/fileonpartition.md)
* [ImageJSONPart](interfaces/imagejsonpart.md)
* [Metadata](interfaces/metadata.md)
* [MultiDestinationProgress](interfaces/multidestinationprogress.md)
* [MultiDestinationState](interfaces/multidestinationstate.md)
* [PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)
* [ProgressEvent](interfaces/progressevent.md)
* [SourceTransform](interfaces/sourcetransform.md)
* [SparseReadable](interfaces/sparsereadable.md)
* [SparseReaderState](interfaces/sparsereaderstate.md)
* [SparseStreamChunk](interfaces/sparsestreamchunk.md)
* [SparseWritable](interfaces/sparsewritable.md)
* [TmpFileOptions](interfaces/tmpfileoptions.md)
* [TmpFileResult](interfaces/tmpfileresult.md)
* [WifiConfig](interfaces/wificonfig.md)

### Type aliases

* [AnyHasher](README.md#anyhasher)
* [ChecksumType](README.md#checksumtype)
* [ConfigureFunction](README.md#configurefunction)
* [Constructor](README.md#constructor)
* [ImageJSON](README.md#imagejson)
* [Name](README.md#name)
* [OnFailFunction](README.md#onfailfunction)
* [OnProgressFunction](README.md#onprogressfunction)
* [Partition](README.md#partition)
* [WriteStep](README.md#writestep)
* [XXHash](README.md#xxhash)

### Variables

* [CHUNK_SIZE](README.md#const-chunk_size)
* [DECOMPRESSED_IMAGE_PREFIX](README.md#const-decompressed_image_prefix)
* [DEFAULT_ALIGNMENT](README.md#const-default_alignment)
* [DISKPART_DELAY](README.md#const-diskpart_delay)
* [DISKPART_RETRIES](README.md#const-diskpart_retries)
* [DriverlessDeviceAdapter](README.md#const-driverlessdeviceadapter)
* [ESR_IMAGES_PREFIX](README.md#const-esr_images_prefix)
* [IMAGES_PREFIX](README.md#const-images_prefix)
* [ISIZE_LENGTH](README.md#const-isize_length)
* [MBR_LAST_PRIMARY_PARTITION](README.md#const-mbr_last_primary_partition)
* [NO_MATCHING_FILE_MSG](README.md#const-no_matching_file_msg)
* [PATTERN](README.md#const-pattern)
* [PRELOADED_IMAGES_PREFIX](README.md#const-preloaded_images_prefix)
* [PROGRESS_EMISSION_INTERVAL](README.md#const-progress_emission_interval)
* [ProgressBlockReadStream](README.md#const-progressblockreadstream)
* [ProgressBlockWriteStream](README.md#const-progressblockwritestream)
* [ProgressHashStream](README.md#const-progresshashstream)
* [ProgressSparseTransformStream](README.md#const-progresssparsetransformstream)
* [ProgressSparseWriteStream](README.md#const-progresssparsewritestream)
* [ProgressWritable](README.md#const-progresswritable)
* [ProgressWriteStream](README.md#const-progresswritestream)
* [READ_TRIES](README.md#const-read_tries)
* [RETRY_BASE_TIMEOUT](README.md#const-retry_base_timeout)
* [RWMutex](README.md#rwmutex)
* [SCAN_INTERVAL](README.md#const-scan_interval)
* [SPEED_WINDOW](README.md#const-speed_window)
* [TMP_DIR](README.md#const-tmp_dir)
* [TMP_RANDOM_BYTES](README.md#const-tmp_random_bytes)
* [TRIES](README.md#const-tries)
* [UNMOUNT_ON_SUCCESS_TIMEOUT_MS](README.md#const-unmount_on_success_timeout_ms)
* [USBBOOT_RPI_COMPUTE_MODULE_NAMES](README.md#const-usbboot_rpi_compute_module_names)
* [WIN32_FIRST_BYTES_TO_KEEP](README.md#const-win32_first_bytes_to_keep)
* [XXHASH_SEED](README.md#const-xxhash_seed)
* [debug](README.md#const-debug)
* [diskpartMutex](README.md#const-diskpartmutex)
* [getCrc](README.md#const-getcrc)
* [getRaspberrypiUsbboot](README.md#const-getraspberrypiusbboot)
* [getUnmountDisk](README.md#const-getunmountdisk)
* [getXXHash](README.md#const-getxxhash)
* [parseFileIndexAsync](README.md#const-parsefileindexasync)
* [readEndMarker](README.md#const-readendmarker)
* [unbzip2Stream](README.md#unbzip2stream)
* [zlib](README.md#zlib)

### Functions

* [alignedLockableBufferSlice](README.md#alignedlockablebufferslice)
* [asCallback](README.md#ascallback)
* [attachMutex](README.md#attachmutex)
* [blockmapToBlocks](README.md#blockmaptoblocks)
* [blocksLength](README.md#blockslength)
* [blocksVerificationErrorMessage](README.md#blocksverificationerrormessage)
* [clean](README.md#const-clean)
* [cleanupTmpFiles](README.md#cleanuptmpfiles)
* [configure](README.md#configure)
* [copy](README.md#copy)
* [copyFile](README.md#copyfile)
* [createBuffer](README.md#createbuffer)
* [createCompleteOnProgress](README.md#createcompleteonprogress)
* [createHasher](README.md#createhasher)
* [createNetworkConfigFiles](README.md#createnetworkconfigfiles)
* [createSparseReaderStateIterator](README.md#createsparsereaderstateiterator)
* [createTmpRoot](README.md#createtmproot)
* [decompressThenFlash](README.md#decompressthenflash)
* [defaultEnoughSpaceForDecompression](README.md#defaultenoughspacefordecompression)
* [delay](README.md#delay)
* [difference](README.md#difference)
* [driveKey](README.md#drivekey)
* [every](README.md#every)
* [execFileAsync](README.md#const-execfileasync)
* [freeSpace](README.md#freespace)
* [fromCallback](README.md#fromcallback)
* [getAlignment](README.md#getalignment)
* [getDiskDeviceType](README.md#getdiskdevicetype)
* [getEta](README.md#geteta)
* [getFileStreamFromZipStream](README.md#const-getfilestreamfromzipstream)
* [getRootStream](README.md#getrootstream)
* [isAlignedLockableBuffer](README.md#isalignedlockablebuffer)
* [isSourceTransform](README.md#issourcetransform)
* [isTransientError](README.md#istransienterror)
* [isWorthDecompressing](README.md#isworthdecompressing)
* [isntNull](README.md#isntnull)
* [looksLikeComputeModule](README.md#lookslikecomputemodule)
* [makeClassEmitProgressEvents](README.md#makeclassemitprogressevents)
* [matchSupportedExtensions](README.md#matchsupportedextensions)
* [maxBy](README.md#maxby)
* [minBy](README.md#minby)
* [nmWifiConfig](README.md#nmwificonfig)
* [normalizePartition](README.md#normalizepartition)
* [notUndefined](README.md#notundefined)
* [once](README.md#once)
* [pad](README.md#pad)
* [pipeRegularSourceToDestination](README.md#piperegularsourcetodestination)
* [pipeSourceToDestinations](README.md#pipesourcetodestinations)
* [pipeSparseSourceToDestination](README.md#pipesparsesourcetodestination)
* [randomFilePath](README.md#randomfilepath)
* [retryOnTransientError](README.md#retryontransienterror)
* [runDiskpart](README.md#const-rundiskpart)
* [runVerifier](README.md#runverifier)
* [shouldRunOperation](README.md#shouldrunoperation)
* [sparseStreamToBuffer](README.md#sparsestreamtobuffer)
* [streamToBuffer](README.md#streamtobuffer)
* [sumBy](README.md#sumby)
* [tmpFile](README.md#tmpfile)
* [verifyOrGenerateChecksum](README.md#verifyorgeneratechecksum)
* [withDiskpartMutex](README.md#withdiskpartmutex)
* [withTmpFile](README.md#withtmpfile)

## Type aliases

###  AnyHasher

Ƭ **AnyHasher**: *Hash | [XXHash](README.md#xxhash) | XXHash.XXHash64 | XXHash.XXHash3*

*Defined in [lib/sparse-stream/shared.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L56)*

___

###  ChecksumType

Ƭ **ChecksumType**: *"crc32" | "sha1" | "sha256" | "xxhash3"*

*Defined in [lib/sparse-stream/shared.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L25)*

___

###  ConfigureFunction

Ƭ **ConfigureFunction**: *function*

*Defined in [lib/source-destination/configured-source/configured-source.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L45)*

#### Type declaration:

▸ (`disk`: Disk): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`disk` | Disk |

___

###  Constructor

Ƭ **Constructor**: *object*

*Defined in [lib/source-destination/progress.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/progress.ts#L24)*

#### Type declaration:

___

###  ImageJSON

Ƭ **ImageJSON**: *[Dictionary](interfaces/dictionary.md)‹object›*

*Defined in [lib/source-destination/balena-s3-compressed-source.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-compressed-source.ts#L36)*

___

###  Name

Ƭ **Name**: *"balena" | "resin"*

*Defined in [lib/source-destination/balena-s3-source.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L29)*

___

###  OnFailFunction

Ƭ **OnFailFunction**: *function*

*Defined in [lib/multi-write.ts:70](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L70)*

#### Type declaration:

▸ (`destination`: [SourceDestination](classes/sourcedestination.md), `error`: [Error](classes/notcapable.md#static-error)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destination` | [SourceDestination](classes/sourcedestination.md) |
`error` | [Error](classes/notcapable.md#static-error) |

___

###  OnProgressFunction

Ƭ **OnProgressFunction**: *function*

*Defined in [lib/multi-write.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L75)*

#### Type declaration:

▸ (`progress`: [MultiDestinationProgress](interfaces/multidestinationprogress.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [MultiDestinationProgress](interfaces/multidestinationprogress.md) |

___

###  Partition

Ƭ **Partition**: *number | object*

*Defined in [lib/source-destination/configured-source/configure.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configure.ts#L27)*

___

###  WriteStep

Ƭ **WriteStep**: *"decompressing" | "flashing" | "verifying" | "finished"*

*Defined in [lib/multi-write.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L43)*

___

###  XXHash

Ƭ **XXHash**: *typeof xxhash*

*Defined in [lib/lazy.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/lazy.ts#L22)*

## Variables

### `Const` CHUNK_SIZE

• **CHUNK_SIZE**: *number* = 1024 ** 2

*Defined in [lib/constants.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L20)*

___

### `Const` DECOMPRESSED_IMAGE_PREFIX

• **DECOMPRESSED_IMAGE_PREFIX**: *"decompressed-image-"* = "decompressed-image-"

*Defined in [lib/multi-write.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L45)*

___

### `Const` DEFAULT_ALIGNMENT

• **DEFAULT_ALIGNMENT**: *512* = 512

*Defined in [lib/constants.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L24)*

___

### `Const` DISKPART_DELAY

• **DISKPART_DELAY**: *2000* = 2000

*Defined in [lib/diskpart.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L28)*

___

### `Const` DISKPART_RETRIES

• **DISKPART_RETRIES**: *5* = 5

*Defined in [lib/diskpart.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L29)*

___

### `Const` DriverlessDeviceAdapter

• **DriverlessDeviceAdapter**: *undefined | [DriverlessDeviceAdapter$](classes/driverlessdeviceadapter_.md)* = platform === 'win32' ? DriverlessDeviceAdapter$ : undefined

*Defined in [lib/scanner/adapters/driverless.ts:104](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/driverless.ts#L104)*

___

### `Const` ESR_IMAGES_PREFIX

• **ESR_IMAGES_PREFIX**: *"esr-images"* = "esr-images"

*Defined in [lib/source-destination/balena-s3-source.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L31)*

___

### `Const` IMAGES_PREFIX

• **IMAGES_PREFIX**: *"images"* = "images"

*Defined in [lib/source-destination/balena-s3-source.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L32)*

___

### `Const` ISIZE_LENGTH

• **ISIZE_LENGTH**: *4* = 4

*Defined in [lib/source-destination/gzip.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/gzip.ts#L23)*

___

### `Const` MBR_LAST_PRIMARY_PARTITION

• **MBR_LAST_PRIMARY_PARTITION**: *4* = 4

*Defined in [lib/source-destination/configured-source/configure.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configure.ts#L52)*

___

### `Const` NO_MATCHING_FILE_MSG

• **NO_MATCHING_FILE_MSG**: *"Can't find a matching file in this zip archive"* = "Can't find a matching file in this zip archive"

*Defined in [lib/constants.ts:21](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L21)*

___

### `Const` PATTERN

• **PATTERN**: *RegExp‹›* = /PHYSICALDRIVE(\d+)/i

*Defined in [lib/diskpart.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L30)*

___

### `Const` PRELOADED_IMAGES_PREFIX

• **PRELOADED_IMAGES_PREFIX**: *"preloaded-images"* = "preloaded-images"

*Defined in [lib/source-destination/balena-s3-source.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/balena-s3-source.ts#L33)*

___

### `Const` PROGRESS_EMISSION_INTERVAL

• **PROGRESS_EMISSION_INTERVAL**: *number* = 1000 / 4

*Defined in [lib/constants.ts:17](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L17)*

___

### `Const` ProgressBlockReadStream

• **ProgressBlockReadStream**: *(Anonymous class) & [BlockReadStream](classes/blockreadstream.md)* = makeClassEmitProgressEvents(
	BlockReadStream,
	'bytesRead',
	'bytesRead',
)

*Defined in [lib/block-read-stream.ts:122](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-read-stream.ts#L122)*

___

### `Const` ProgressBlockWriteStream

• **ProgressBlockWriteStream**: *(Anonymous class) & [BlockWriteStream](classes/blockwritestream.md)* = makeClassEmitProgressEvents(
	BlockWriteStream,
	'bytesWritten',
	'bytesWritten',
)

*Defined in [lib/block-write-stream.ts:113](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-write-stream.ts#L113)*

___

### `Const` ProgressHashStream

• **ProgressHashStream**: *(Anonymous class) & [CountingHashStream](classes/countinghashstream.md)* = makeClassEmitProgressEvents(
	CountingHashStream,
	'bytesWritten',
	'bytesWritten',
)

*Defined in [lib/source-destination/source-destination.ts:98](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L98)*

___

### `Const` ProgressSparseTransformStream

• **ProgressSparseTransformStream**: *(Anonymous class) & [SparseTransformStream](classes/sparsetransformstream.md)* = makeClassEmitProgressEvents(
	SparseTransformStream,
	'bytesWritten',
	'position',
)

*Defined in [lib/sparse-stream/sparse-transform-stream.ts:85](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-transform-stream.ts#L85)*

___

### `Const` ProgressSparseWriteStream

• **ProgressSparseWriteStream**: *(Anonymous class) & [SparseWriteStream](classes/sparsewritestream.md)* = makeClassEmitProgressEvents(
	SparseWriteStream,
	'bytesWritten',
	'position',
)

*Defined in [lib/sparse-stream/sparse-write-stream.ts:137](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/sparse-write-stream.ts#L137)*

___

### `Const` ProgressWritable

• **ProgressWritable**: *(Anonymous class) & [CountingWritable](classes/countingwritable.md)* = makeClassEmitProgressEvents(
	CountingWritable,
	'bytesWritten',
	'position',
)

*Defined in [lib/source-destination/progress.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/progress.ts#L117)*

___

### `Const` ProgressWriteStream

• **ProgressWriteStream**: *(Anonymous class) & WriteStream* = makeClassEmitProgressEvents(
	WriteStream,
	'bytesWritten',
	'bytesWritten',
)

*Defined in [lib/source-destination/file.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L36)*

___

### `Const` READ_TRIES

• **READ_TRIES**: *5* = 5

*Defined in [lib/source-destination/file.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L42)*

___

### `Const` RETRY_BASE_TIMEOUT

• **RETRY_BASE_TIMEOUT**: *100* = 100

*Defined in [lib/constants.ts:19](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L19)*

___

###  RWMutex

• **RWMutex**: *[RWMutex](README.md#rwmutex)*

*Defined in [lib/aligned-lockable-buffer.ts:2](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L2)*

*Defined in [lib/diskpart.ts:21](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L21)*

___

### `Const` SCAN_INTERVAL

• **SCAN_INTERVAL**: *1000* = 1000

*Defined in [lib/scanner/adapters/block-device.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L26)*

*Defined in [lib/scanner/adapters/driverless.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/driverless.ts#L25)*

___

### `Const` SPEED_WINDOW

• **SPEED_WINDOW**: *2* = 2

*Defined in [lib/constants.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L18)*

___

### `Const` TMP_DIR

• **TMP_DIR**: *string* = join(tmpdir(), 'etcher')

*Defined in [lib/tmp.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L24)*

___

### `Const` TMP_RANDOM_BYTES

• **TMP_RANDOM_BYTES**: *6* = 6

*Defined in [lib/tmp.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L23)*

___

### `Const` TRIES

• **TRIES**: *5* = 5

*Defined in [lib/tmp.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L25)*

___

### `Const` UNMOUNT_ON_SUCCESS_TIMEOUT_MS

• **UNMOUNT_ON_SUCCESS_TIMEOUT_MS**: *2000* = 2000

*Defined in [lib/source-destination/block-device.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L42)*

**`summary`** Time, in milliseconds, to wait before unmounting on success

___

### `Const` USBBOOT_RPI_COMPUTE_MODULE_NAMES

• **USBBOOT_RPI_COMPUTE_MODULE_NAMES**: *string[]* = [
	'0001',
	'RPi-MSD- 0001',
	'File-Stor Gadget',
	'Linux File-Stor_Gadget',
	'Linux File-Stor Gadget',
	'Linux File-Stor Gadget USB Device',
	'Linux File-Stor Gadget Media',
]

*Defined in [lib/scanner/adapters/block-device.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L27)*

___

### `Const` WIN32_FIRST_BYTES_TO_KEEP

• **WIN32_FIRST_BYTES_TO_KEEP**: *number* = 64 * 1024

*Defined in [lib/source-destination/block-device.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L43)*

___

### `Const` XXHASH_SEED

• **XXHASH_SEED**: *1163150152* = 1163150152

*Defined in [lib/constants.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/constants.ts#L23)*

___

### `Const` debug

• **debug**: *IDebugger* = debug_('etcher-sdk:scanner')

*Defined in [lib/diskpart.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L26)*

*Defined in [lib/block-write-stream.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/block-write-stream.ts#L28)*

*Defined in [lib/source-destination/configured-source/configured-source.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configured-source.ts#L43)*

*Defined in [lib/scanner/adapters/block-device.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L24)*

*Defined in [lib/scanner/scanner.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/scanner.ts#L22)*

___

### `Const` diskpartMutex

• **diskpartMutex**: *[RWMutex](README.md#rwmutex)‹›* = new RWMutex()

*Defined in [lib/diskpart.ts:60](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L60)*

___

### `Const` getCrc

• **getCrc**: *function* = once(
	() => require('cyclic-32') as typeof import('cyclic-32'),
)

*Defined in [lib/lazy.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/lazy.ts#L40)*

#### Type declaration:

▸ (): *T*

___

### `Const` getRaspberrypiUsbboot

• **getRaspberrypiUsbboot**: *function* = once(() => {
	try {
		return require('node-raspberrypi-usbboot') as typeof import('node-raspberrypi-usbboot');
	} catch (e) {
		console.warn('Failed to import node-raspberrypi-usbboot:', e);
	}
})

*Defined in [lib/lazy.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/lazy.ts#L24)*

#### Type declaration:

▸ (): *T*

___

### `Const` getUnmountDisk

• **getUnmountDisk**: *function* = once(() =>
	promisify((require('mountutils') as typeof import('mountutils')).unmountDisk),
)

*Defined in [lib/lazy.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/lazy.ts#L36)*

#### Type declaration:

▸ (): *T*

___

### `Const` getXXHash

• **getXXHash**: *function* = once(
	() => require('xxhash-addon') as typeof import('xxhash-addon'),
)

*Defined in [lib/lazy.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/lazy.ts#L32)*

#### Type declaration:

▸ (): *T*

___

### `Const` parseFileIndexAsync

• **parseFileIndexAsync**: *function* = promisify(parseFileIndex)

*Defined in [lib/source-destination/xz.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/xz.ts#L25)*

#### Type declaration:

▸ (`arg1`: T1): *Promise‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`arg1` | T1 |

___

### `Const` readEndMarker

• **readEndMarker**: *[Buffer](interfaces/alignedlockablebuffer.md#buffer)‹›* = Buffer.from(`not the correct data ${Math.random()}`)

*Defined in [lib/source-destination/file.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L43)*

___

###  unbzip2Stream

• **unbzip2Stream**: *[unbzip2Stream](README.md#unbzip2stream)*

*Defined in [lib/source-destination/bzip2.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/bzip2.ts#L18)*

___

###  zlib

• **zlib**: *"zlib"*

*Defined in [lib/stream-limiter.ts:18](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/stream-limiter.ts#L18)*

## Functions

###  alignedLockableBufferSlice

▸ **alignedLockableBufferSlice**(`this`: [AlignedLockableBuffer](interfaces/alignedlockablebuffer.md), `start?`: undefined | number, `end?`: undefined | number): *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)‹›*

*Defined in [lib/aligned-lockable-buffer.ts:11](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [AlignedLockableBuffer](interfaces/alignedlockablebuffer.md) |
`start?` | undefined &#124; number |
`end?` | undefined &#124; number |

**Returns:** *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)‹›*

___

###  asCallback

▸ **asCallback**‹**T**›(`promise`: Promise‹T›, `callback`: function): *Promise‹void›*

*Defined in [lib/utils.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L102)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **promise**: *Promise‹T›*

▪ **callback**: *function*

▸ (`error?`: [Error](classes/notcapable.md#static-error) | null, `value?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](classes/notcapable.md#static-error) &#124; null |
`value?` | T |

**Returns:** *Promise‹void›*

___

###  attachMutex

▸ **attachMutex**(`buf`: [Buffer](interfaces/alignedlockablebuffer.md#buffer), `alignment`: number, `lock`: function, `rlock`: function): *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)*

*Defined in [lib/aligned-lockable-buffer.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L20)*

**Parameters:**

▪ **buf**: *[Buffer](interfaces/alignedlockablebuffer.md#buffer)*

▪ **alignment**: *number*

▪ **lock**: *function*

▸ (): *Promise‹function›*

▪ **rlock**: *function*

▸ (): *Promise‹function›*

**Returns:** *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)*

___

###  blockmapToBlocks

▸ **blockmapToBlocks**(`blockmap`: BlockMap): *[BlocksWithChecksum](interfaces/blockswithchecksum.md)[]*

*Defined in [lib/source-destination/zip.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`blockmap` | BlockMap |

**Returns:** *[BlocksWithChecksum](interfaces/blockswithchecksum.md)[]*

___

###  blocksLength

▸ **blocksLength**(`blocks`: [BlocksWithChecksum](interfaces/blockswithchecksum.md)[]): *number*

*Defined in [lib/sparse-stream/shared.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | [BlocksWithChecksum](interfaces/blockswithchecksum.md)[] |

**Returns:** *number*

___

###  blocksVerificationErrorMessage

▸ **blocksVerificationErrorMessage**(`blocksWithChecksum`: [BlocksWithChecksum](interfaces/blockswithchecksum.md), `checksum`: string): *string*

*Defined in [lib/errors.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/errors.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`blocksWithChecksum` | [BlocksWithChecksum](interfaces/blockswithchecksum.md) |
`checksum` | string |

**Returns:** *string*

___

### `Const` clean

▸ **clean**(`device`: string): *Promise‹void›*

*Defined in [lib/diskpart.ts:100](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L100)*

**`summary`** Clean a device's partition tables

**`example`** 
diskpart.clean('\\\\.\\PhysicalDrive2')
  .then(...)
  .catch(...)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`device` | string | device path |

**Returns:** *Promise‹void›*

___

###  cleanupTmpFiles

▸ **cleanupTmpFiles**(`olderThan`: number, `prefix`: string): *Promise‹void›*

*Defined in [lib/tmp.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`olderThan` | number | Date.now() |
`prefix` | string | "" |

**Returns:** *Promise‹void›*

___

###  configure

▸ **configure**(`disk`: Disk, `partition`: number | undefined, `config`: [Dictionary](interfaces/dictionary.md)‹any›): *Promise‹void›*

*Defined in [lib/source-destination/configured-source/operations/configure.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/configure.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`disk` | Disk |
`partition` | number &#124; undefined |
`config` | [Dictionary](interfaces/dictionary.md)‹any› |

**Returns:** *Promise‹void›*

___

###  copy

▸ **copy**(`diskFrom`: Disk, `partitionFrom`: number | undefined, `pathFrom`: string, `diskTo`: Disk, `partitionTo`: number | undefined, `pathTo`: string): *Promise‹void›*

*Defined in [lib/source-destination/configured-source/operations/copy.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/copy.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`diskFrom` | Disk |
`partitionFrom` | number &#124; undefined |
`pathFrom` | string |
`diskTo` | Disk |
`partitionTo` | number &#124; undefined |
`pathTo` | string |

**Returns:** *Promise‹void›*

___

###  copyFile

▸ **copyFile**(`sourceFs`: typeof Fs, `sourcePath`: string, `destinationFs`: typeof Fs, `destinationPath`: string): *Promise‹void›*

*Defined in [lib/source-destination/configured-source/operations/copy.ts:21](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/copy.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`sourceFs` | typeof Fs |
`sourcePath` | string |
`destinationFs` | typeof Fs |
`destinationPath` | string |

**Returns:** *Promise‹void›*

___

###  createBuffer

▸ **createBuffer**(`size`: number, `alignment`: number): *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)*

*Defined in [lib/aligned-lockable-buffer.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |
`alignment` | number |

**Returns:** *[AlignedLockableBuffer](interfaces/alignedlockablebuffer.md)*

___

###  createCompleteOnProgress

▸ **createCompleteOnProgress**(`onProgress`: function, `sourceMetadata`: [Metadata](interfaces/metadata.md), `state`: [MultiDestinationState](interfaces/multidestinationstate.md), `sparse`: boolean): *$onProgress[]*

*Defined in [lib/multi-write.ts:216](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L216)*

**Parameters:**

▪ **onProgress**: *function*

▸ (`p`: [MultiDestinationProgress](interfaces/multidestinationprogress.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [MultiDestinationProgress](interfaces/multidestinationprogress.md) |

▪ **sourceMetadata**: *[Metadata](interfaces/metadata.md)*

▪ **state**: *[MultiDestinationState](interfaces/multidestinationstate.md)*

▪ **sparse**: *boolean*

**Returns:** *$onProgress[]*

___

###  createHasher

▸ **createHasher**(`checksumType?`: [ChecksumType](README.md#checksumtype)): *undefined | [AnyHasher](README.md#anyhasher)*

*Defined in [lib/sparse-stream/shared.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumType?` | [ChecksumType](README.md#checksumtype) |

**Returns:** *undefined | [AnyHasher](README.md#anyhasher)*

___

###  createNetworkConfigFiles

▸ **createNetworkConfigFiles**(`networks`: any[]): *object*

*Defined in [lib/source-destination/configured-source/operations/configure.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/configure.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`networks` | any[] |

**Returns:** *object*

* **ethernet**: *any[]* = networks.map((n: any) => n.configuration).filter((n: any) => !!n)

* **wifi**: *string[]* = networks
			.filter((n) => !!n.wifiSsid)
			.map((network: WifiConfig, index: number) =>
				nmWifiConfig(index + 1, network),
			)

___

###  createSparseReaderStateIterator

▸ **createSparseReaderStateIterator**(`blocks`: [BlocksWithChecksum](interfaces/blockswithchecksum.md)[], `verify`: boolean, `generateChecksums`: boolean): *Iterator‹[SparseReaderState](interfaces/sparsereaderstate.md)›*

*Defined in [lib/sparse-stream/shared.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | [BlocksWithChecksum](interfaces/blockswithchecksum.md)[] |
`verify` | boolean |
`generateChecksums` | boolean |

**Returns:** *Iterator‹[SparseReaderState](interfaces/sparsereaderstate.md)›*

___

###  createTmpRoot

▸ **createTmpRoot**(): *Promise‹void›*

*Defined in [lib/tmp.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L66)*

**Returns:** *Promise‹void›*

___

###  decompressThenFlash

▸ **decompressThenFlash**(`__namedParameters`: object): *Promise‹[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)›*

*Defined in [lib/multi-write.ts:109](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L109)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`asItIs` | boolean | false |
`configure` | undefined &#124; function | - |
`decompressFirst` | boolean | false |
`destinations` | [SourceDestination](classes/sourcedestination.md)‹›[] | - |
`enoughSpaceForDecompression` | function | defaultEnoughSpaceForDecompression |
`numBuffers` | number | 16 |
`onFail` | function | - |
`onProgress` | function | - |
`source` | [SourceDestination](classes/sourcedestination.md)‹› | - |
`trim` | boolean | false |
`verify` | boolean | false |

**Returns:** *Promise‹[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)›*

___

###  defaultEnoughSpaceForDecompression

▸ **defaultEnoughSpaceForDecompression**(`free`: number, `imageSize?`: undefined | number): *boolean*

*Defined in [lib/multi-write.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`free` | number |
`imageSize?` | undefined &#124; number |

**Returns:** *boolean*

___

###  delay

▸ **delay**(`ms`: number): *Promise‹void›*

*Defined in [lib/utils.ts:128](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹void›*

___

###  difference

▸ **difference**‹**T**›(`setA`: Set‹T›, `setB`: Set‹T›): *Set‹T›*

*Defined in [lib/utils.ts:94](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L94)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`setA` | Set‹T› |
`setB` | Set‹T› |

**Returns:** *Set‹T›*

___

###  driveKey

▸ **driveKey**(`drive`: $Drive): *string*

*Defined in [lib/scanner/adapters/block-device.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`drive` | $Drive |

**Returns:** *string*

___

###  every

▸ **every**‹**T**›(`things`: Iterable‹T›): *boolean*

*Defined in [lib/utils.ts:168](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L168)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`things` | Iterable‹T› |

**Returns:** *boolean*

___

### `Const` execFileAsync

▸ **execFileAsync**(`command`: string, `args`: string[], `options`: ExecFileOptions): *Promise‹[ExecResult](interfaces/execresult.md)›*

*Defined in [lib/diskpart.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L37)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`command` | string | - |
`args` | string[] | [] |
`options` | ExecFileOptions | {} |

**Returns:** *Promise‹[ExecResult](interfaces/execresult.md)›*

___

###  freeSpace

▸ **freeSpace**(): *Promise‹number›*

*Defined in [lib/tmp.ts:140](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L140)*

**Returns:** *Promise‹number›*

___

###  fromCallback

▸ **fromCallback**‹**T**›(`fn`: function): *Promise‹T›*

*Defined in [lib/utils.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L114)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (`callback`: function): *void*

**Parameters:**

▪ **callback**: *function*

▸ (`error?`: [Error](classes/notcapable.md#static-error) | null, `result?`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Error](classes/notcapable.md#static-error) &#124; null |
`result?` | T |

**Returns:** *Promise‹T›*

___

###  getAlignment

▸ **getAlignment**(...`devices`: [SourceDestination](classes/sourcedestination.md)[]): *number | undefined*

*Defined in [lib/multi-write.ts:372](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L372)*

**Parameters:**

Name | Type |
------ | ------ |
`...devices` | [SourceDestination](classes/sourcedestination.md)[] |

**Returns:** *number | undefined*

___

###  getDiskDeviceType

▸ **getDiskDeviceType**(`disk`: Disk): *Promise‹[DeviceTypeJSON](interfaces/devicetypejson.md) | undefined›*

*Defined in [lib/source-destination/configured-source/configure.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configure.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`disk` | Disk |

**Returns:** *Promise‹[DeviceTypeJSON](interfaces/devicetypejson.md) | undefined›*

___

###  getEta

▸ **getEta**(`current`: number, `total`: number, `speed`: number): *number | undefined*

*Defined in [lib/multi-write.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`current` | number |
`total` | number |
`speed` | number |

**Returns:** *number | undefined*

___

### `Const` getFileStreamFromZipStream

▸ **getFileStreamFromZipStream**(`zipStream`: ReadableStream, `match`: function): *Promise‹ZipStreamEntry›*

*Defined in [lib/zip.ts:21](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/zip.ts#L21)*

**Parameters:**

▪ **zipStream**: *ReadableStream*

▪ **match**: *function*

▸ (`filename`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹ZipStreamEntry›*

___

###  getRootStream

▸ **getRootStream**(`stream`: ReadableStream): *ReadableStream*

*Defined in [lib/source-destination/compressed-source.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/compressed-source.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |

**Returns:** *ReadableStream*

___

###  isAlignedLockableBuffer

▸ **isAlignedLockableBuffer**(`buffer`: [Buffer](interfaces/alignedlockablebuffer.md#buffer)): *buffer is AlignedLockableBuffer*

*Defined in [lib/aligned-lockable-buffer.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/aligned-lockable-buffer.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](interfaces/alignedlockablebuffer.md#buffer) |

**Returns:** *buffer is AlignedLockableBuffer*

___

###  isSourceTransform

▸ **isSourceTransform**(`stream`: any): *stream is SourceTransform*

*Defined in [lib/source-destination/compressed-source.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/compressed-source.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | any |

**Returns:** *stream is SourceTransform*

___

###  isTransientError

▸ **isTransientError**(`error`: ErrnoException): *boolean*

*Defined in [lib/errors.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/errors.ts#L66)*

**`summary`** Determine whether an error is considered a
transient occurrence, and the operation should be retried
Errors considered potentially temporary are:
  - Mac OS: ENXIO, EBUSY
  - Windows: ENOENT, UNKNOWN
  - Linux: EIO, EBUSY

**Parameters:**

Name | Type |
------ | ------ |
`error` | ErrnoException |

**Returns:** *boolean*

___

###  isWorthDecompressing

▸ **isWorthDecompressing**(`filename`: string): *boolean*

*Defined in [lib/multi-write.ts:91](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L91)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`filename` | string | "" |

**Returns:** *boolean*

___

###  isntNull

▸ **isntNull**‹**T**›(`x`: T | null): *x is Exclude<T, null>*

*Defined in [lib/source-destination/multi-destination.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/multi-destination.ts#L35)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`x` | T &#124; null |

**Returns:** *x is Exclude<T, null>*

___

###  looksLikeComputeModule

▸ **looksLikeComputeModule**(`description`: string): *boolean*

*Defined in [lib/scanner/adapters/block-device.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/scanner/adapters/block-device.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | string |

**Returns:** *boolean*

___

###  makeClassEmitProgressEvents

▸ **makeClassEmitProgressEvents**‹**T**›(`Cls`: T, `attribute`: string, `positionAttribute`: string, `interval`: number): *(Anonymous class) & T*

*Defined in [lib/source-destination/progress.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/progress.ts#L33)*

**Type parameters:**

▪ **T**: *[Constructor](README.md#constructor)‹EventEmitter›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Cls` | T | - |
`attribute` | string | - |
`positionAttribute` | string | - |
`interval` | number | PROGRESS_EMISSION_INTERVAL |

**Returns:** *(Anonymous class) & T*

___

###  matchSupportedExtensions

▸ **matchSupportedExtensions**(`filename`: string): *boolean*

*Defined in [lib/source-destination/zip.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/zip.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *boolean*

___

###  maxBy

▸ **maxBy**‹**T**›(`things`: Iterable‹T›, `iteratee`: function): *T | undefined*

*Defined in [lib/utils.ts:150](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L150)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **things**: *Iterable‹T›*

▪ **iteratee**: *function*

▸ (`thing`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | T |

**Returns:** *T | undefined*

___

###  minBy

▸ **minBy**‹**T**›(`things`: Iterable‹T›, `iteratee`: function): *T | undefined*

*Defined in [lib/utils.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L134)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **things**: *Iterable‹T›*

▪ **iteratee**: *function*

▸ (`thing`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | T |

**Returns:** *T | undefined*

___

###  nmWifiConfig

▸ **nmWifiConfig**(`index`: number, `options`: [WifiConfig](interfaces/wificonfig.md)): *string*

*Defined in [lib/source-destination/configured-source/operations/configure.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/configure.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`options` | [WifiConfig](interfaces/wificonfig.md) |

**Returns:** *string*

___

###  normalizePartition

▸ **normalizePartition**(`partition`: [Partition](README.md#partition)): *number*

*Defined in [lib/source-destination/configured-source/configure.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configure.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`partition` | [Partition](README.md#partition) |

**Returns:** *number*

___

###  notUndefined

▸ **notUndefined**‹**T**›(`x`: T | undefined): *x is T*

*Defined in [lib/multi-write.ts:368](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L368)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`x` | T &#124; undefined |

**Returns:** *x is T*

___

###  once

▸ **once**‹**T**›(`fn`: function): *function*

*Defined in [lib/utils.ts:177](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L177)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *function*

▸ (): *T*

___

###  pad

▸ **pad**(`num`: number): *string*

*Defined in [lib/source-destination/configured-source/operations/configure.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/operations/configure.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *string*

___

###  pipeRegularSourceToDestination

▸ **pipeRegularSourceToDestination**(`source`: [SourceDestination](classes/sourcedestination.md), `sourceMetadata`: [Metadata](interfaces/metadata.md), `destination`: [MultiDestination](classes/multidestination.md), `verify`: boolean, `numBuffers`: number, `updateState`: function, `onFail`: function, `onProgress`: function, `onRootStreamProgress`: function): *Promise‹void›*

*Defined in [lib/multi-write.ts:379](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L379)*

**Parameters:**

▪ **source**: *[SourceDestination](classes/sourcedestination.md)*

▪ **sourceMetadata**: *[Metadata](interfaces/metadata.md)*

▪ **destination**: *[MultiDestination](classes/multidestination.md)*

▪ **verify**: *boolean*

▪ **numBuffers**: *number*

▪ **updateState**: *function*

▸ (`state?`: [WriteStep](README.md#writestep)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state?` | [WriteStep](README.md#writestep) |

▪ **onFail**: *function*

▸ (`error`: [MultiDestinationError](classes/multidestinationerror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [MultiDestinationError](classes/multidestinationerror.md) |

▪ **onProgress**: *function*

▸ (`progress`: [ProgressEvent](interfaces/progressevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [ProgressEvent](interfaces/progressevent.md) |

▪ **onRootStreamProgress**: *function*

▸ (`progress`: [ProgressEvent](interfaces/progressevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [ProgressEvent](interfaces/progressevent.md) |

**Returns:** *Promise‹void›*

___

###  pipeSourceToDestinations

▸ **pipeSourceToDestinations**(`__namedParameters`: object): *Promise‹[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)›*

*Defined in [lib/multi-write.ts:276](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L276)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`destinations` | [SourceDestination](classes/sourcedestination.md)‹›[] | - |
`numBuffers` | number | 16 |
`onFail` | function | - |
`onProgress` | function | - |
`source` | [SourceDestination](classes/sourcedestination.md)‹› | - |
`verify` | boolean | false |

**Returns:** *Promise‹[PipeSourceToDestinationsResult](interfaces/pipesourcetodestinationsresult.md)›*

___

###  pipeSparseSourceToDestination

▸ **pipeSparseSourceToDestination**(`source`: [SourceDestination](classes/sourcedestination.md), `destination`: [MultiDestination](classes/multidestination.md), `verify`: boolean, `numBuffers`: number, `updateState`: function, `onFail`: function, `onProgress`: function, `onRootStreamProgress`: function): *Promise‹void›*

*Defined in [lib/multi-write.ts:483](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L483)*

**Parameters:**

▪ **source**: *[SourceDestination](classes/sourcedestination.md)*

▪ **destination**: *[MultiDestination](classes/multidestination.md)*

▪ **verify**: *boolean*

▪ **numBuffers**: *number*

▪ **updateState**: *function*

▸ (`state?`: [WriteStep](README.md#writestep)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`state?` | [WriteStep](README.md#writestep) |

▪ **onFail**: *function*

▸ (`error`: [MultiDestinationError](classes/multidestinationerror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [MultiDestinationError](classes/multidestinationerror.md) |

▪ **onProgress**: *function*

▸ (`progress`: [ProgressEvent](interfaces/progressevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [ProgressEvent](interfaces/progressevent.md) |

▪ **onRootStreamProgress**: *function*

▸ (`progress`: [ProgressEvent](interfaces/progressevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [ProgressEvent](interfaces/progressevent.md) |

**Returns:** *Promise‹void›*

___

###  randomFilePath

▸ **randomFilePath**(`prefix`: string, `postfix`: string): *string*

*Defined in [lib/tmp.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | string |
`postfix` | string |

**Returns:** *string*

___

###  retryOnTransientError

▸ **retryOnTransientError**‹**T**›(`fn`: function, `maxRetries`: number, `baseDelay`: number): *Promise‹T›*

*Defined in [lib/errors.ts:77](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/errors.ts#L77)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *Promise‹T›*

▪ **maxRetries**: *number*

▪ **baseDelay**: *number*

**Returns:** *Promise‹T›*

___

### `Const` runDiskpart

▸ **runDiskpart**(`commands`: string[]): *Promise‹void›*

*Defined in [lib/diskpart.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L75)*

**`summary`** Run a diskpart script

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commands` | string[] | list of commands to run  |

**Returns:** *Promise‹void›*

___

###  runVerifier

▸ **runVerifier**(`verifier`: [Verifier](classes/verifier.md), `onFail`: function, `onProgress`: function): *Promise‹void›*

*Defined in [lib/multi-write.ts:523](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L523)*

**Parameters:**

▪ **verifier**: *[Verifier](classes/verifier.md)*

▪ **onFail**: *function*

▸ (`error`: [MultiDestinationError](classes/multidestinationerror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [MultiDestinationError](classes/multidestinationerror.md) |

▪ **onProgress**: *function*

▸ (`progress`: [ProgressEvent](interfaces/progressevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`progress` | [ProgressEvent](interfaces/progressevent.md) |

**Returns:** *Promise‹void›*

___

###  shouldRunOperation

▸ **shouldRunOperation**(`options`: [Dictionary](interfaces/dictionary.md)‹any›, `operation`: [CopyOperation](interfaces/copyoperation.md)): *boolean*

*Defined in [lib/source-destination/configured-source/configure.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/configured-source/configure.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Dictionary](interfaces/dictionary.md)‹any› |
`operation` | [CopyOperation](interfaces/copyoperation.md) |

**Returns:** *boolean*

___

###  sparseStreamToBuffer

▸ **sparseStreamToBuffer**(`stream`: ReadableStream): *Promise‹[Buffer](interfaces/alignedlockablebuffer.md#buffer)›*

*Defined in [lib/utils.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |

**Returns:** *Promise‹[Buffer](interfaces/alignedlockablebuffer.md#buffer)›*

___

###  streamToBuffer

▸ **streamToBuffer**(`stream`: ReadableStream): *Promise‹[Buffer](interfaces/alignedlockablebuffer.md#buffer)›*

*Defined in [lib/utils.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`stream` | ReadableStream |

**Returns:** *Promise‹[Buffer](interfaces/alignedlockablebuffer.md#buffer)›*

___

###  sumBy

▸ **sumBy**‹**T**›(`things`: Iterable‹T›, `iteratee`: function): *number*

*Defined in [lib/utils.ts:157](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/utils.ts#L157)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **things**: *Iterable‹T›*

▪ **iteratee**: *function*

▸ (`thing`: T): *number*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | T |

**Returns:** *number*

___

###  tmpFile

▸ **tmpFile**(`__namedParameters`: object): *Promise‹[TmpFileResult](interfaces/tmpfileresult.md)›*

*Defined in [lib/tmp.ts:84](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L84)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`keepOpen` | boolean | true |
`postfix` | string | ".tmp" |
`prefix` | string | "tmp-" |

**Returns:** *Promise‹[TmpFileResult](interfaces/tmpfileresult.md)›*

___

###  verifyOrGenerateChecksum

▸ **verifyOrGenerateChecksum**(`hasher`: [AnyHasher](README.md#anyhasher) | undefined, `blocks`: [BlocksWithChecksum](interfaces/blockswithchecksum.md), `verify`: boolean, `generateChecksums`: boolean): *void*

*Defined in [lib/sparse-stream/shared.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/sparse-stream/shared.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`hasher` | [AnyHasher](README.md#anyhasher) &#124; undefined |
`blocks` | [BlocksWithChecksum](interfaces/blockswithchecksum.md) |
`verify` | boolean |
`generateChecksums` | boolean |

**Returns:** *void*

___

###  withDiskpartMutex

▸ **withDiskpartMutex**‹**T**›(`fn`: function): *Promise‹T›*

*Defined in [lib/diskpart.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/diskpart.ts#L62)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *Promise‹T›*

___

###  withTmpFile

▸ **withTmpFile**‹**T**›(`options`: [TmpFileOptions](interfaces/tmpfileoptions.md), `fn`: function): *Promise‹T›*

*Defined in [lib/tmp.ts:117](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/tmp.ts#L117)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **options**: *[TmpFileOptions](interfaces/tmpfileoptions.md)*

▪ **fn**: *function*

▸ (`result`: [TmpFileResult](interfaces/tmpfileresult.md)): *Promise‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | [TmpFileResult](interfaces/tmpfileresult.md) |

**Returns:** *Promise‹T›*
