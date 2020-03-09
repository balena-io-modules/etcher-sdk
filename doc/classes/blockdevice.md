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

* [blockSize](blockdevice.md#blocksize)
* [drive](blockdevice.md#private-drive)
* [emitsProgress](blockdevice.md#emitsprogress)
* [fd](blockdevice.md#protected-fd)
* [unmountOnSuccess](blockdevice.md#private-unmountonsuccess)
* [OpenFlags](blockdevice.md#static-openflags)
* [defaultMaxListeners](blockdevice.md#static-defaultmaxlisteners)
* [imageExtensions](blockdevice.md#static-imageextensions)
* [mimetype](blockdevice.md#static-optional-mimetype)

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
* [getBlocks](blockdevice.md#getblocks)
* [getInnerSource](blockdevice.md#getinnersource)
* [getMaxListeners](blockdevice.md#getmaxlisteners)
* [getMetadata](blockdevice.md#getmetadata)
* [getPartitionTable](blockdevice.md#getpartitiontable)
* [listenerCount](blockdevice.md#listenercount)
* [listeners](blockdevice.md#listeners)
* [offsetIsAligned](blockdevice.md#private-offsetisaligned)
* [on](blockdevice.md#on)
* [once](blockdevice.md#once)
* [open](blockdevice.md#open)
* [prependListener](blockdevice.md#prependlistener)
* [prependOnceListener](blockdevice.md#prependoncelistener)
* [read](blockdevice.md#read)
* [removeAllListeners](blockdevice.md#removealllisteners)
* [removeListener](blockdevice.md#removelistener)
* [setMaxListeners](blockdevice.md#setmaxlisteners)
* [write](blockdevice.md#write)
* [listenerCount](blockdevice.md#static-listenercount)
* [register](blockdevice.md#static-register)

## Constructors

###  constructor

\+ **new BlockDevice**(`drive`: [DrivelistDrive](../interfaces/drivelistdrive.md), `unmountOnSuccess`: boolean): *[BlockDevice](blockdevice.md)*

*Overrides [File](file.md).[constructor](file.md#constructor)*

*Defined in [lib/source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L48)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`drive` | [DrivelistDrive](../interfaces/drivelistdrive.md) | - |
`unmountOnSuccess` | boolean | false |

**Returns:** *[BlockDevice](blockdevice.md)*

## Properties

###  blockSize

• **blockSize**: *number* = 512

*Inherited from [File](file.md).[blockSize](file.md#blocksize)*

*Defined in [lib/source-destination/file.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L58)*

___

### `Private` drive

• **drive**: *[DrivelistDrive](../interfaces/drivelistdrive.md)*

*Defined in [lib/source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L50)*

___

###  emitsProgress

• **emitsProgress**: *boolean* = false

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[emitsProgress](../interfaces/adaptersourcedestination.md#emitsprogress)*

*Defined in [lib/source-destination/block-device.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L48)*

___

### `Protected` fd

• **fd**: *number*

*Inherited from [File](file.md).[fd](file.md#protected-fd)*

*Defined in [lib/source-destination/file.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L57)*

___

### `Private` unmountOnSuccess

• **unmountOnSuccess**: *boolean*

*Defined in [lib/source-destination/block-device.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L50)*

___

### `Static` OpenFlags

▪ **OpenFlags**: *[OpenFlags](../enums/openflags.md)* = OpenFlags

*Inherited from [File](file.md).[OpenFlags](file.md#static-openflags)*

*Defined in [lib/source-destination/file.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L56)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[defaultMaxListeners](../interfaces/adaptersourcedestination.md#static-defaultmaxlisteners)*

*Inherited from [CountingWritable](countingwritable.md).[defaultMaxListeners](countingwritable.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:681

___

### `Static` imageExtensions

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

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[imageExtensions](../interfaces/adaptersourcedestination.md#static-imageextensions)*

*Inherited from [SourceSource](sourcesource.md).[imageExtensions](sourcesource.md#static-imageextensions)*

*Defined in [lib/source-destination/source-destination.ts:232](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L232)*

___

### `Static` `Optional` mimetype

▪ **mimetype**? : *undefined | string*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md).[mimetype](../interfaces/adaptersourcedestination.md#static-optional-mimetype)*

*Inherited from [SourceSource](sourcesource.md).[mimetype](sourcesource.md#static-optional-mimetype)*

*Defined in [lib/source-destination/source-destination.ts:244](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L244)*

## Accessors

###  description

• **get description**(): *string*

*Defined in [lib/source-destination/block-device.ts:71](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L71)*

**Returns:** *string*

___

###  device

• **get device**(): *string*

*Defined in [lib/source-destination/block-device.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L63)*

**Returns:** *string*

___

###  devicePath

• **get devicePath**(): *string | null*

*Defined in [lib/source-destination/block-device.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L67)*

**Returns:** *string | null*

___

###  isSystem

• **get isSystem**(): *boolean*

*Defined in [lib/source-destination/block-device.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L55)*

**Returns:** *boolean*

___

###  mountpoints

• **get mountpoints**(): *Array‹object›*

*Defined in [lib/source-destination/block-device.ts:75](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L75)*

**Returns:** *Array‹object›*

___

###  raw

• **get raw**(): *string*

*Defined in [lib/source-destination/block-device.ts:59](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L59)*

**Returns:** *string*

___

###  size

• **get size**(): *number | null*

*Defined in [lib/source-destination/block-device.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L79)*

**Returns:** *number | null*

## Methods

### `Protected` _close

▸ **_close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_close](file.md#protected-_close)*

*Defined in [lib/source-destination/block-device.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L127)*

**Returns:** *Promise‹void›*

___

### `Protected` _getMetadata

▸ **_getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_getMetadata](file.md#protected-_getmetadata)*

*Defined in [lib/source-destination/block-device.ts:83](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L83)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

### `Protected` _open

▸ **_open**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[_open](file.md#protected-_open)*

*Defined in [lib/source-destination/block-device.ts:119](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L119)*

**Returns:** *Promise‹void›*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[addListener](sourcesource.md#addlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[addListener](../interfaces/sparsereadable.md#addlistener)*

Defined in node_modules/@types/node/base.d.ts:683

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

### `Private` alignOffsetAfter

▸ **alignOffsetAfter**(`offset`: number): *number*

*Defined in [lib/source-destination/block-device.ts:147](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

### `Private` alignOffsetBefore

▸ **alignOffsetBefore**(`offset`: number): *number*

*Defined in [lib/source-destination/block-device.ts:143](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *number*

___

### `Private` alignedRead

▸ **alignedRead**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Defined in [lib/source-destination/block-device.ts:151](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

### `Private` alignedWrite

▸ **alignedWrite**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Defined in [lib/source-destination/block-device.ts:187](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
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

*Defined in [lib/source-destination/file.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L87)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[canCreateSparseReadStream](sourcesource.md#cancreatesparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:268](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L268)*

**Returns:** *Promise‹boolean›*

___

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canCreateSparseWriteStream](file.md#cancreatesparsewritestream)*

*Defined in [lib/source-destination/block-device.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L97)*

**Returns:** *Promise‹boolean›*

___

###  canCreateWriteStream

▸ **canCreateWriteStream**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canCreateWriteStream](file.md#cancreatewritestream)*

*Defined in [lib/source-destination/block-device.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L93)*

**Returns:** *Promise‹boolean›*

___

###  canRead

▸ **canRead**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [File](file.md).[canRead](file.md#canread)*

*Overrides [SourceSource](sourcesource.md).[canRead](sourcesource.md#canread)*

*Defined in [lib/source-destination/file.ts:79](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L79)*

**Returns:** *Promise‹boolean›*

___

###  canWrite

▸ **canWrite**(): *Promise‹boolean›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[canWrite](file.md#canwrite)*

*Defined in [lib/source-destination/block-device.ts:89](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L89)*

**Returns:** *Promise‹boolean›*

___

###  close

▸ **close**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[close](sourcesource.md#close)*

*Defined in [lib/source-destination/source-destination.ts:342](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L342)*

**Returns:** *Promise‹void›*

___

###  createReadStream

▸ **createReadStream**(`emitProgress`: boolean, `start`: number, `end?`: undefined | number): *Promise‹ReadableStream›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [File](file.md).[createReadStream](file.md#createreadstream)*

*Overrides [SourceSource](sourcesource.md).[createReadStream](sourcesource.md#createreadstream)*

*Defined in [lib/source-destination/file.ts:124](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/file.ts#L124)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`emitProgress` | boolean | false |
`start` | number | 0 |
`end?` | undefined &#124; number | - |

**Returns:** *Promise‹ReadableStream›*

___

###  createSparseReadStream

▸ **createSparseReadStream**(`_generateChecksums`: boolean): *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[createSparseReadStream](sourcesource.md#createsparsereadstream)*

*Defined in [lib/source-destination/source-destination.ts:317](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L317)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_generateChecksums` | boolean | false |

**Returns:** *Promise‹[SparseReadable](../interfaces/sparsereadable.md)›*

___

###  createSparseWriteStream

▸ **createSparseWriteStream**(): *Promise‹[SparseWriteStream](sparsewritestream.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[createSparseWriteStream](file.md#createsparsewritestream)*

*Defined in [lib/source-destination/block-device.ts:110](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L110)*

**Returns:** *Promise‹[SparseWriteStream](sparsewritestream.md)›*

___

###  createVerifier

▸ **createVerifier**(`checksumOrBlocks`: string | [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[], `size?`: undefined | number): *[Verifier](verifier.md)*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[createVerifier](sourcesource.md#createverifier)*

*Defined in [lib/source-destination/source-destination.ts:357](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`checksumOrBlocks` | string &#124; [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
`size?` | undefined &#124; number |

**Returns:** *[Verifier](verifier.md)*

___

###  createWriteStream

▸ **createWriteStream**(): *Promise‹[BlockWriteStream](blockwritestream.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[createWriteStream](file.md#createwritestream)*

*Defined in [lib/source-destination/block-device.ts:101](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L101)*

**Returns:** *Promise‹[BlockWriteStream](blockwritestream.md)›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[emit](sourcesource.md#emit)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[emit](../interfaces/sparsereadable.md#emit)*

Defined in node_modules/@types/node/base.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[eventNames](countingwritable.md#eventnames)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[eventNames](../interfaces/sparsereadable.md#eventnames)*

Defined in node_modules/@types/node/base.d.ts:694

**Returns:** *string | symbol[]*

___

###  getBlocks

▸ **getBlocks**(): *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getBlocks](sourcesource.md#getblocks)*

*Defined in [lib/source-destination/source-destination.ts:323](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L323)*

**Returns:** *Promise‹[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]›*

___

###  getInnerSource

▸ **getInnerSource**(): *Promise‹[SourceDestination](sourcedestination.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getInnerSource](sourcesource.md#getinnersource)*

*Defined in [lib/source-destination/source-destination.ts:424](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L424)*

**Returns:** *Promise‹[SourceDestination](sourcedestination.md)›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[getMaxListeners](countingwritable.md#getmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[getMaxListeners](../interfaces/sparsereadable.md#getmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:691

**Returns:** *number*

___

###  getMetadata

▸ **getMetadata**(): *Promise‹[Metadata](../interfaces/metadata.md)›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getMetadata](sourcesource.md#getmetadata)*

*Defined in [lib/source-destination/source-destination.ts:280](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L280)*

**Returns:** *Promise‹[Metadata](../interfaces/metadata.md)›*

___

###  getPartitionTable

▸ **getPartitionTable**(): *Promise‹GetPartitionsResult | undefined›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[getPartitionTable](sourcesource.md#getpartitiontable)*

*Defined in [lib/source-destination/source-destination.ts:445](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L445)*

**Returns:** *Promise‹GetPartitionsResult | undefined›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listenerCount](../interfaces/sparsereadable.md#listenercount)*

Defined in node_modules/@types/node/base.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[listeners](countingwritable.md#listeners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[listeners](../interfaces/sparsereadable.md#listeners)*

Defined in node_modules/@types/node/base.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### `Private` offsetIsAligned

▸ **offsetIsAligned**(`offset`: number): *boolean*

*Defined in [lib/source-destination/block-device.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`offset` | number |

**Returns:** *boolean*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[on](sourcesource.md#on)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[on](../interfaces/sparsereadable.md#on)*

Defined in node_modules/@types/node/base.d.ts:684

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[once](sourcesource.md#once)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[once](../interfaces/sparsereadable.md#once)*

Defined in node_modules/@types/node/base.d.ts:685

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  open

▸ **open**(): *Promise‹void›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[open](sourcesource.md#open)*

*Defined in [lib/source-destination/source-destination.ts:335](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L335)*

**Returns:** *Promise‹void›*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[prependListener](sourcesource.md#prependlistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependListener](../interfaces/sparsereadable.md#prependlistener)*

Defined in node_modules/@types/node/base.d.ts:686

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[prependOnceListener](sourcesource.md#prependoncelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[prependOnceListener](../interfaces/sparsereadable.md#prependoncelistener)*

Defined in node_modules/@types/node/base.d.ts:687

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  read

▸ **read**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `sourceOffset`: number): *Promise‹ReadResult›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[read](file.md#read)*

*Defined in [lib/source-destination/block-device.ts:171](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`bufferOffset` | number |
`length` | number |
`sourceOffset` | number |

**Returns:** *Promise‹ReadResult›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[removeAllListeners](countingwritable.md#removealllisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeAllListeners](../interfaces/sparsereadable.md#removealllisteners)*

Defined in node_modules/@types/node/base.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: Function): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[removeListener](sourcesource.md#removelistener)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[removeListener](../interfaces/sparsereadable.md#removelistener)*

Defined in node_modules/@types/node/base.d.ts:688

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`listener` | Function |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[setMaxListeners](countingwritable.md#setmaxlisteners)*

*Overrides [SparseReadable](../interfaces/sparsereadable.md).[setMaxListeners](../interfaces/sparsereadable.md#setmaxlisteners)*

Defined in node_modules/@types/node/base.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  write

▸ **write**(`buffer`: Buffer, `bufferOffset`: number, `length`: number, `fileOffset`: number): *Promise‹WriteResult›*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Overrides [File](file.md).[write](file.md#write)*

*Defined in [lib/source-destination/block-device.ts:203](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/block-device.ts#L203)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Buffer |
`bufferOffset` | number |
`length` | number |
`fileOffset` | number |

**Returns:** *Promise‹WriteResult›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [CountingWritable](countingwritable.md).[listenerCount](countingwritable.md#static-listenercount)*

Defined in node_modules/@types/node/base.d.ts:680

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

___

### `Static` register

▸ **register**(`Cls`: typeof SourceSource): *void*

*Implementation of [AdapterSourceDestination](../interfaces/adaptersourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[register](sourcesource.md#static-register)*

*Defined in [lib/source-destination/source-destination.ts:250](https://github.com/balena-io-modules/etcher-sdk/blob/2f08b24/lib/source-destination/source-destination.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`Cls` | typeof SourceSource |

**Returns:** *void*
