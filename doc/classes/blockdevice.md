[etcher-sdk](../README.md) › [BlockDevice](blockdevice.md)

# Class: BlockDevice

## Hierarchy

  ↳ [File](file.md)

  ↳ **BlockDevice**

## Implements

* [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)

## Index

### Constructors

* [constructor](blockdevice.md#constructor)

### Properties

* [alignment](blockdevice.md#readonly-alignment)
* [drive](blockdevice.md#private-drive)
* [emitsProgress](blockdevice.md#emitsprogress)
* [fileHandle](blockdevice.md#protected-filehandle)
* [oDirect](blockdevice.md#odirect)
* [oWrite](blockdevice.md#owrite)
* [path](blockdevice.md#readonly-path)
* [unmountOnSuccess](blockdevice.md#private-unmountonsuccess)
* [defaultMaxListeners](blockdevice.md#static-defaultmaxlisteners)
* [imageExtensions](blockdevice.md#static-readonly-imageextensions)
* [mimetype](blockdevice.md#static-optional-readonly-mimetype)

### Accessors

* [description](blockdevice.md#description)
* [device](blockdevice.md#device)
* [devicePath](blockdevice.md#devicepath)
* [isSystem](blockdevice.md#issystem)
* [mountpoints](blockdevice.md#mountpoints)
* [raw](blockdevice.md#raw)
* [size](blockdevice.md#size)

### Methods

* [_close](blockdevice.md#protected-_close)
* [_getMetadata](blockdevice.md#protected-_getmetadata)
* [_open](blockdevice.md#protected-_open)
* [addListener](blockdevice.md#addlistener)
* [alignOffsetAfter](blockdevice.md#private-alignoffsetafter)
* [alignOffsetBefore](blockdevice.md#private-alignoffsetbefore)
* [alignedRead](blockdevice.md#private-alignedread)
* [alignedWrite](blockdevice.md#private-alignedwrite)
* [canCreateReadStream](blockdevice.md#cancreatereadstream)
* [canCreateSparseReadStream](blockdevice.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](blockdevice.md#cancreatesparsewritestream)
* [canCreateWriteStream](blockdevice.md#cancreatewritestream)
* [canRead](blockdevice.md#canread)
* [canWrite](blockdevice.md#canwrite)
* [close](blockdevice.md#close)
* [createReadStream](blockdevice.md#createreadstream)
* [createSparseReadStream](blockdevice.md#createsparsereadstream)
* [createSparseWriteStream](blockdevice.md#createsparsewritestream)
* [createVerifier](blockdevice.md#createverifier)
* [createWriteStream](blockdevice.md#createwritestream)
* [emit](blockdevice.md#emit)
* [eventNames](blockdevice.md#eventnames)
* [getAlignment](blockdevice.md#getalignment)
* [getBlocks](blockdevice.md#getblocks)
* [getInnerSource](blockdevice.md#getinnersource)
* [getMaxListeners](blockdevice.md#getmaxlisteners)
* [getMetadata](blockdevice.md#getmetadata)
* [getOpenFlags](blockdevice.md#protected-getopenflags)
* [getPartitionTable](blockdevice.md#getpartitiontable)
* [listenerCount](blockdevice.md#listenercount)
* [listeners](blockdevice.md#listeners)
* [off](blockdevice.md#off)
* [offsetIsAligned](blockdevice.md#private-offsetisaligned)
* [on](blockdevice.md#on)
* [once](blockdevice.md#once)
* [open](blockdevice.md#open)
* [prependListener](blockdevice.md#prependlistener)
* [prependOnceListener](blockdevice.md#prependoncelistener)
* [rawListeners](blockdevice.md#rawlisteners)
* [read](blockdevice.md#read)
* [removeAllListeners](blockdevice.md#removealllisteners)
* [removeListener](blockdevice.md#removelistener)
* [setMaxListeners](blockdevice.md#setmaxlisteners)
* [write](blockdevice.md#write)
* [listenerCount](blockdevice.md#static-listenercount)
* [once](blockdevice.md#static-once)
* [register](blockdevice.md#static-register)

## Constructors

###  constructor

\+ **new BlockDevice**(`__namedParameters`: object): *[BlockDevice](blockdevice.md)*

*Overrides [File](file.md).[constructor](file.md#constructor)*

*Defined in [lib/source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L50)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`direct` | boolean | true |
`drive` | Drive | - |
`unmountOnSuccess` | boolean | false |
`write` | boolean | false |

**Returns:** *[BlockDevice](blockdevice.md)*

## Properties

### `Readonly` alignment

• **alignment**: *number*

*Defined in [lib/source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L50)*

___

### `Private` drive

• **drive**: *[DrivelistDrive](../interfaces/drivelistdrive.md)*

*Defined in [lib/source-destination/block-device.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L46)*

___

###  emitsProgress

• **emitsProgress**: *boolean* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [lib/source-destination/block-device.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L49)*

___

### `Protected` fileHandle

• **fileHandle**: *fs.FileHandle*

*Inherited from [File](file.md).[fileHandle](file.md#protected-filehandle)*

*Defined in [lib/source-destination/file.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L48)*

___

###  oDirect

• **oDirect**: *boolean*

*Defined in [lib/source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L48)*

___

###  oWrite

• **oWrite**: *boolean*

*Inherited from [File](file.md).[oWrite](file.md#owrite)*

*Defined in [lib/source-destination/file.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L47)*

___

### `Readonly` path

• **path**: *string*

*Inherited from [File](file.md).[path](file.md#readonly-path)*

*Defined in [lib/source-destination/file.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L46)*

___

### `Private` unmountOnSuccess

• **unmountOnSuccess**: *boolean*

*Defined in [lib/source-destination/block-device.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L47)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[defaultMaxListeners](../interfaces/adaptersourcedestination.md#static-defaultmaxlisteners)*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:20

___

### `Static` `Readonly` imageExtensions

▪ **imageExtensions**: *string[]* = [
		'img',
		'iso',
		'bin',
		'dsk',
		'hddimg',
		'raw',
		'dmg',
		'sdcard',
		'rpi-sdimg',
		'wic',
	]

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[imageExtensions](../interfaces/adaptersourcedestination.md#static-readonly-imageextensions)*

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-readonly-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:296](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L296)*

___

### `Static` `Optional` `Readonly` mimetype

▪ **mimetype**? : *undefined | string*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mimetype](../interfaces/adaptersourcedestination.md#static-optional-readonly-mimetype)*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-readonly-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:308](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L308)*

## Accessors

###  description

• **get description**(): *string*

*Defined in [lib/source-destination/block-device.ts:115](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L115)*

**Returns:** *string*

___

###  device

• **get device**(): *string*

*Defined in [lib/source-destination/block-device.ts:107](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L107)*

**Returns:** *string*

___

###  devicePath

• **get devicePath**(): *string | null*

*Defined in [lib/source-destination/block-device.ts:111](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L111)*

**Returns:** *string | null*

___

###  isSystem

• **get isSystem**(): *boolean*

*Defined in [lib/source-destination/block-device.ts:99](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L99)*

**Returns:** *boolean*

___

###  mountpoints

• **get mountpoints**(): *Mountpoint[]*

*Defined in [lib/source-destination/block-device.ts:119](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L119)*

**Returns:** *Mountpoint[]*

___

###  raw

• **get raw**(): *string*

*Defined in [lib/source-destination/block-device.ts:103](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L103)*

**Returns:** *string*

___

###  size

• **get size**(): *number | null*

*Defined in [lib/source-destination/block-device.ts:123](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L123)*

**Returns:** *number | null*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_close](file.md#protected-_close)*

*Defined in [lib/source-destination/block-device.ts:188](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L188)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_getMetadata](file.md#protected-_getmetadata)*

*Defined in [lib/source-destination/block-device.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L127)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_open](file.md#protected-_open)*

*Defined in [lib/source-destination/block-device.ts:170](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L170)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` alignOffsetAfter

▸ **alignOffsetAfter**(`offset`: number): *number*

*Defined in [lib/source-destination/block-device.ts:209](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L209)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

### `Private` alignOffsetBefore

▸ **alignOffsetBefore**(`offset`: number): *number*

*Defined in [lib/source-destination/block-device.ts:205](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

### `Private` alignedRead

▸ **alignedRead**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Defined in [lib/source-destination/block-device.ts:213](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

### `Private` alignedWrite

▸ **alignedWrite**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Defined in [lib/source-destination/block-device.ts:246](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

###  canCreateReadStream

▸ **canCreateReadStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [File](file.md).[canCreateReadStream](file.md#cancreatereadstream)*

*Overrides [SourceSource](sourcesource.md).[canCreateReadStream](sourcesource.md#cancreatereadstream)*

*Defined in [lib/source-destination/file.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L71)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:336](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L336)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canCreateSparseWriteStream](file.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/block-device.ts:142](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L142)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canCreateWriteStream](file.md#cancreatewritestream)*

*Defined in [lib/source-destination/block-device.ts:138](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L138)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [File](file.md).[canRead](file.md#canread)*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/file.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L63)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canWrite](file.md#canwrite)*

*Defined in [lib/source-destination/block-device.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L134)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:412](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L412)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`__namedParameters`: object): *Promise‹ReadableStream›*

*Inherited from [File](file.md).[createReadStream](file.md#createreadstream)*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/file.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/file.ts#L147)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`alignment` | undefined &#124; number | - |
`emitProgress` | boolean | false |
`end` | undefined &#124; number | - |
`numBuffers` | undefined &#124; number | - |
`start` | number | 0 |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_options`: [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md)): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:383](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L383)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_options` | [CreateSparseReadStreamOptions](../interfaces/createsparsereadstreamoptions.md) | {} |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(`__namedParameters`: object): *Promise‹[SparseWriteStream](sparsewritestream.md)›*

*Overrides [File](file.md).[createSparseWriteStream](file.md#createsparsewritestream)*

*Defined in [lib/source-destination/block-device.ts:158](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L158)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark` | undefined &#124; number |

**Returns:** *Promise‹[SparseWriteStream](sparsewritestream.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:427](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L427)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(`__namedParameters`: object): *Promise‹[BlockWriteStream](blockwritestream.md)›*

*Overrides [File](file.md).[createWriteStream](file.md#createwritestream)*

*Defined in [lib/source-destination/block-device.ts:146](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L146)*

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`highWaterMark` | undefined &#124; number |

**Returns:** *Promise‹[BlockWriteStream](blockwritestream.md)›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  getAlignment

▸ **getAlignment**(): *undefined | number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [SourceSource](sourcesource.md).[getAlignment](sourcesource.md#getalignment)*

*Defined in [lib/source-destination/block-device.ts:74](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L74)*

**Returns:** *undefined | number*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:389](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L389)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:497](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L497)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:348](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L348)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` getOpenFlags

▸ **getOpenFlags**(): *number*

*Overrides [File](file.md).[getOpenFlags](file.md#protected-getopenflags)*

*Defined in [lib/source-destination/block-device.ts:80](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L80)*

**Returns:** *number*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:518](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L518)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[off](../interfaces/sparsereadable.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` offsetIsAligned

▸ **offsetIsAligned**(`offset`: number): *boolean*

*Defined in [lib/source-destination/block-device.ts:201](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *boolean*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  open

▸ **open**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[open](sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:405](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L405)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:567

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:568

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[rawListeners](../interfaces/sparsereadable.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  read

▸ **read**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[read](file.md#read)*

*Defined in [lib/source-destination/block-device.ts:233](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L233)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`buffer`: [Buffer](../interfaces/alignedlockablebuffer.md#buffer), `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[write](file.md#write)*

*Defined in [lib/source-destination/block-device.ts:262](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/block-device.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | [Buffer](../interfaces/alignedlockablebuffer.md#buffer) |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

___

### `Static` once

▸ **once**(`emitter`: NodeEventTarget, `event`: string | symbol): *Promise‹any[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[once](countingwritable.md#static-once)*

Defined in node_modules/@types/node/events.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*

___

### `Static` register

▸ **register**(`Cls`: typeof SourceSource): *void*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:314](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/source-destination.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
