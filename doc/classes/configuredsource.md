[etcher-sdk](../README.md) > [ConfiguredSource](../classes/configuredsource.md)

# Class: ConfiguredSource

## Hierarchy

↳  [SourceSource](sourcesource.md)

**↳ ConfiguredSource**

## Index

### Constructors

* [constructor](configuredsource.md#constructor)

### Properties

* [checksumType](configuredsource.md#checksumtype)
* [chunkSize](configuredsource.md#chunksize)
* [config](configuredsource.md#config)
* [configure](configuredsource.md#configure)
* [createStreamFromDisk](configuredsource.md#createstreamfromdisk)
* [disk](configuredsource.md#disk)
* [shouldTrimPartitions](configuredsource.md#shouldtrimpartitions)
* [source](configuredsource.md#source)
* [defaultMaxListeners](configuredsource.md#defaultmaxlisteners)
* [imageExtensions](configuredsource.md#imageextensions)
* [mimetype](configuredsource.md#mimetype)
* [requiresRandomReadableSource](configuredsource.md#requiresrandomreadablesource)

### Methods

* [_close](configuredsource.md#_close)
* [_getMetadata](configuredsource.md#_getmetadata)
* [_open](configuredsource.md#_open)
* [addListener](configuredsource.md#addlistener)
* [canCreateReadStream](configuredsource.md#cancreatereadstream)
* [canCreateSparseReadStream](configuredsource.md#cancreatesparsereadstream)
* [canCreateSparseWriteStream](configuredsource.md#cancreatesparsewritestream)
* [canCreateWriteStream](configuredsource.md#cancreatewritestream)
* [canRead](configuredsource.md#canread)
* [canWrite](configuredsource.md#canwrite)
* [close](configuredsource.md#close)
* [createReadStream](configuredsource.md#createreadstream)
* [createSparseReadStream](configuredsource.md#createsparsereadstream)
* [createSparseReadStreamFromDisk](configuredsource.md#createsparsereadstreamfromdisk)
* [createSparseReadStreamFromStream](configuredsource.md#createsparsereadstreamfromstream)
* [createSparseWriteStream](configuredsource.md#createsparsewritestream)
* [createVerifier](configuredsource.md#createverifier)
* [createWriteStream](configuredsource.md#createwritestream)
* [emit](configuredsource.md#emit)
* [eventNames](configuredsource.md#eventnames)
* [getBlocks](configuredsource.md#getblocks)
* [getBlocksWithChecksumType](configuredsource.md#getblockswithchecksumtype)
* [getInnerSource](configuredsource.md#getinnersource)
* [getMaxListeners](configuredsource.md#getmaxlisteners)
* [getMetadata](configuredsource.md#getmetadata)
* [getPartitionTable](configuredsource.md#getpartitiontable)
* [listenerCount](configuredsource.md#listenercount)
* [listeners](configuredsource.md#listeners)
* [on](configuredsource.md#on)
* [once](configuredsource.md#once)
* [open](configuredsource.md#open)
* [prependListener](configuredsource.md#prependlistener)
* [prependOnceListener](configuredsource.md#prependoncelistener)
* [read](configuredsource.md#read)
* [removeAllListeners](configuredsource.md#removealllisteners)
* [removeListener](configuredsource.md#removelistener)
* [setMaxListeners](configuredsource.md#setmaxlisteners)
* [trimPartitions](configuredsource.md#trimpartitions)
* [write](configuredsource.md#write)
* [listenerCount](configuredsource.md#listenercount-1)
* [register](configuredsource.md#register)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ConfiguredSource**(source: *[SourceDestination](sourcedestination.md)*, shouldTrimPartitions: *`boolean`*, createStreamFromDisk: *`boolean`*, configure?: *[ConfigureFunction](../#configurefunction) \| "legacy"*, config?: *`any`*, checksumType?: *[ChecksumType](../#checksumtype)*, chunkSize?: *`number`*): [ConfiguredSource](configuredsource.md)

*Overrides [SourceSource](sourcesource.md).[constructor](sourcesource.md#constructor)*

*Defined in [source-destination/configured-source/configured-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L87)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| source | [SourceDestination](sourcedestination.md) | - |
| shouldTrimPartitions | `boolean` | - |
| createStreamFromDisk | `boolean` | - |
| `Optional` configure | [ConfigureFunction](../#configurefunction) \| "legacy" | - |
| `Optional` config | `any` | - |
| `Default value` checksumType | [ChecksumType](../#checksumtype) | &quot;xxhash64&quot; |
| `Default value` chunkSize | `number` |  CHUNK_SIZE |

**Returns:** [ConfiguredSource](configuredsource.md)

___

## Properties

<a id="checksumtype"></a>

### `<Private>` checksumType

**● checksumType**: *[ChecksumType](../#checksumtype)*

*Defined in [source-destination/configured-source/configured-source.ts:96](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L96)*

___
<a id="chunksize"></a>

### `<Private>` chunkSize

**● chunkSize**: *`number`*

*Defined in [source-destination/configured-source/configured-source.ts:97](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L97)*

___
<a id="config"></a>

### `<Private>``<Optional>` config

**● config**: *`any`*

*Defined in [source-destination/configured-source/configured-source.ts:95](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L95)*

___
<a id="configure"></a>

### `<Private>``<Optional>` configure

**● configure**: *[ConfigureFunction](../#configurefunction)*

*Defined in [source-destination/configured-source/configured-source.ts:87](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L87)*

___
<a id="createstreamfromdisk"></a>

### `<Private>` createStreamFromDisk

**● createStreamFromDisk**: *`boolean`*

*Defined in [source-destination/configured-source/configured-source.ts:93](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L93)*

___
<a id="disk"></a>

### `<Private>` disk

**● disk**: *[SourceDisk](sourcedisk.md)*

*Defined in [source-destination/configured-source/configured-source.ts:86](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L86)*

___
<a id="shouldtrimpartitions"></a>

### `<Private>` shouldTrimPartitions

**● shouldTrimPartitions**: *`boolean`*

*Defined in [source-destination/configured-source/configured-source.ts:92](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L92)*

___
<a id="source"></a>

### `<Protected>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Inherited from [SourceSource](sourcesource.md).[source](sourcesource.md#source)*

*Defined in [source-destination/source-source.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-source.ts#L22)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:715*

___
<a id="imageextensions"></a>

### `<Static>` imageExtensions

**● imageExtensions**: *`string`[]* =  [
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

*Inherited from [SourceDestination](sourcedestination.md).[imageExtensions](sourcedestination.md#imageextensions)*

*Defined in [source-destination/source-destination.ts:234](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L234)*

___
<a id="mimetype"></a>

### `<Static>``<Optional>` mimetype

**● mimetype**: *`undefined` \| `string`*

*Inherited from [SourceDestination](sourcedestination.md).[mimetype](sourcedestination.md#mimetype)*

*Defined in [source-destination/source-destination.ts:246](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L246)*

___
<a id="requiresrandomreadablesource"></a>

### `<Static>` requiresRandomReadableSource

**● requiresRandomReadableSource**: *`boolean`* = false

*Inherited from [SourceSource](sourcesource.md).[requiresRandomReadableSource](sourcesource.md#requiresrandomreadablesource)*

*Defined in [source-destination/source-source.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-source.ts#L20)*

___

## Methods

<a id="_close"></a>

### `<Protected>` _close

▸ **_close**(): `Promise`<`void`>

*Overrides [SourceSource](sourcesource.md).[_close](sourcesource.md#_close)*

*Defined in [source-destination/configured-source/configured-source.ts:248](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L248)*

**Returns:** `Promise`<`void`>

___
<a id="_getmetadata"></a>

### `<Protected>` _getMetadata

▸ **_getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Overrides [SourceDestination](sourcedestination.md).[_getMetadata](sourcedestination.md#_getmetadata)*

*Defined in [source-destination/configured-source/configured-source.ts:196](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L196)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="_open"></a>

### `<Protected>` _open

▸ **_open**(): `Promise`<`void`>

*Overrides [SourceSource](sourcesource.md).[_open](sourcesource.md#_open)*

*Defined in [source-destination/configured-source/configured-source.ts:237](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L237)*

**Returns:** `Promise`<`void`>

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /node_modules/@types/node/index.d.ts:717*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="cancreatereadstream"></a>

###  canCreateReadStream

▸ **canCreateReadStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateReadStream](sourcedestination.md#cancreatereadstream)*

*Defined in [source-destination/configured-source/configured-source.ts:131](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L131)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsereadstream"></a>

###  canCreateSparseReadStream

▸ **canCreateSparseReadStream**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canCreateSparseReadStream](sourcedestination.md#cancreatesparsereadstream)*

*Defined in [source-destination/configured-source/configured-source.ts:135](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L135)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatesparsewritestream"></a>

###  canCreateSparseWriteStream

▸ **canCreateSparseWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateSparseWriteStream](sourcedestination.md#cancreatesparsewritestream)*

*Defined in [source-destination/source-destination.ts:278](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L278)*

**Returns:** `Promise`<`boolean`>

___
<a id="cancreatewritestream"></a>

###  canCreateWriteStream

▸ **canCreateWriteStream**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canCreateWriteStream](sourcedestination.md#cancreatewritestream)*

*Defined in [source-destination/source-destination.ts:274](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L274)*

**Returns:** `Promise`<`boolean`>

___
<a id="canread"></a>

###  canRead

▸ **canRead**(): `Promise`<`boolean`>

*Overrides [SourceDestination](sourcedestination.md).[canRead](sourcedestination.md#canread)*

*Defined in [source-destination/configured-source/configured-source.ts:127](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L127)*

**Returns:** `Promise`<`boolean`>

___
<a id="canwrite"></a>

###  canWrite

▸ **canWrite**(): `Promise`<`boolean`>

*Inherited from [SourceDestination](sourcedestination.md).[canWrite](sourcedestination.md#canwrite)*

*Defined in [source-destination/source-destination.ts:262](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L262)*

**Returns:** `Promise`<`boolean`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[close](sourcedestination.md#close)*

*Defined in [source-destination/source-destination.ts:344](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L344)*

**Returns:** `Promise`<`void`>

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(...args: *`any`[]*): `Promise`<`ReadableStream`>

*Overrides [SourceDestination](sourcedestination.md).[createReadStream](sourcedestination.md#createreadstream)*

*Defined in [source-destination/configured-source/configured-source.ts:148](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L148)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `Promise`<`ReadableStream`>

___
<a id="createsparsereadstream"></a>

###  createSparseReadStream

▸ **createSparseReadStream**(generateChecksums: *`boolean`*): `Promise`<[SparseReadStream](sparsereadstream.md) \| [SparseFilterStream](sparsefilterstream.md)>

*Overrides [SourceDestination](sourcedestination.md).[createSparseReadStream](sourcedestination.md#createsparsereadstream)*

*Defined in [source-destination/configured-source/configured-source.ts:186](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L186)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| generateChecksums | `boolean` |

**Returns:** `Promise`<[SparseReadStream](sparsereadstream.md) \| [SparseFilterStream](sparsefilterstream.md)>

___
<a id="createsparsereadstreamfromdisk"></a>

### `<Private>` createSparseReadStreamFromDisk

▸ **createSparseReadStreamFromDisk**(generateChecksums: *`boolean`*): `Promise`<[SparseReadStream](sparsereadstream.md)>

*Defined in [source-destination/configured-source/configured-source.ts:160](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| generateChecksums | `boolean` |

**Returns:** `Promise`<[SparseReadStream](sparsereadstream.md)>

___
<a id="createsparsereadstreamfromstream"></a>

### `<Private>` createSparseReadStreamFromStream

▸ **createSparseReadStreamFromStream**(generateChecksums: *`boolean`*): `Promise`<[SparseFilterStream](sparsefilterstream.md)>

*Defined in [source-destination/configured-source/configured-source.ts:172](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L172)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| generateChecksums | `boolean` |

**Returns:** `Promise`<[SparseFilterStream](sparsefilterstream.md)>

___
<a id="createsparsewritestream"></a>

###  createSparseWriteStream

▸ **createSparseWriteStream**(): `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

*Inherited from [SourceDestination](sourcedestination.md).[createSparseWriteStream](sourcedestination.md#createsparsewritestream)*

*Defined in [source-destination/source-destination.ts:333](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L333)*

**Returns:** `Promise`<[SparseWritable](../interfaces/sparsewritable.md)>

___
<a id="createverifier"></a>

###  createVerifier

▸ **createVerifier**(checksumOrBlocks: *`string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]*, size?: *`undefined` \| `number`*): [Verifier](verifier.md)

*Inherited from [SourceDestination](sourcedestination.md).[createVerifier](sourcedestination.md#createverifier)*

*Defined in [source-destination/source-destination.ts:359](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L359)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| checksumOrBlocks | `string` \| [BlocksWithChecksum](../interfaces/blockswithchecksum.md)[] |
| `Optional` size | `undefined` \| `number` |

**Returns:** [Verifier](verifier.md)

___
<a id="createwritestream"></a>

###  createWriteStream

▸ **createWriteStream**(): `Promise`<`WritableStream`>

*Inherited from [SourceDestination](sourcedestination.md).[createWriteStream](sourcedestination.md#createwritestream)*

*Defined in [source-destination/source-destination.ts:329](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L329)*

**Returns:** `Promise`<`WritableStream`>

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /node_modules/@types/node/index.d.ts:727*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getblocks"></a>

###  getBlocks

▸ **getBlocks**(): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Overrides [SourceDestination](sourcedestination.md).[getBlocks](sourcedestination.md#getblocks)*

*Defined in [source-destination/configured-source/configured-source.ts:108](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L108)*

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getblockswithchecksumtype"></a>

### `<Private>` getBlocksWithChecksumType

▸ **getBlocksWithChecksumType**(generateChecksums: *`boolean`*): `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

*Defined in [source-destination/configured-source/configured-source.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| generateChecksums | `boolean` |

**Returns:** `Promise`<[BlocksWithChecksum](../interfaces/blockswithchecksum.md)[]>

___
<a id="getinnersource"></a>

###  getInnerSource

▸ **getInnerSource**(): `Promise`<[SourceDestination](sourcedestination.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getInnerSource](sourcedestination.md#getinnersource)*

*Defined in [source-destination/source-destination.ts:426](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L426)*

**Returns:** `Promise`<[SourceDestination](sourcedestination.md)>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="getmetadata"></a>

###  getMetadata

▸ **getMetadata**(): `Promise`<[Metadata](../interfaces/metadata.md)>

*Inherited from [SourceDestination](sourcedestination.md).[getMetadata](sourcedestination.md#getmetadata)*

*Defined in [source-destination/source-destination.ts:282](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L282)*

**Returns:** `Promise`<[Metadata](../interfaces/metadata.md)>

___
<a id="getpartitiontable"></a>

###  getPartitionTable

▸ **getPartitionTable**(): `Promise`<`GetPartitionsResult` \| `undefined`>

*Inherited from [SourceDestination](sourcedestination.md).[getPartitionTable](sourcedestination.md#getpartitiontable)*

*Defined in [source-destination/source-destination.ts:447](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L447)*

**Returns:** `Promise`<`GetPartitionsResult` \| `undefined`>

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/index.d.ts:729*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /node_modules/@types/node/index.d.ts:726*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /node_modules/@types/node/index.d.ts:718*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /node_modules/@types/node/index.d.ts:719*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="open"></a>

###  open

▸ **open**(): `Promise`<`void`>

*Inherited from [SourceDestination](sourcedestination.md).[open](sourcedestination.md#open)*

*Defined in [source-destination/source-destination.ts:337](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L337)*

**Returns:** `Promise`<`void`>

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /node_modules/@types/node/index.d.ts:720*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /node_modules/@types/node/index.d.ts:721*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="read"></a>

###  read

▸ **read**(buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*): `Promise`<`ReadResult`>

*Overrides [SourceDestination](sourcedestination.md).[read](sourcedestination.md#read)*

*Defined in [source-destination/configured-source/configured-source.ts:139](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L139)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| sourceOffset | `number` |

**Returns:** `Promise`<`ReadResult`>

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /node_modules/@types/node/index.d.ts:723*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /node_modules/@types/node/index.d.ts:722*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /node_modules/@types/node/index.d.ts:724*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="trimpartitions"></a>

### `<Private>` trimPartitions

▸ **trimPartitions**(): `Promise`<`void`>

*Defined in [source-destination/configured-source/configured-source.ts:203](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/configured-source/configured-source.ts#L203)*

**Returns:** `Promise`<`void`>

___
<a id="write"></a>

###  write

▸ **write**(_buffer: *`Buffer`*, _bufferOffset: *`number`*, _length: *`number`*, _fileOffset: *`number`*): `Promise`<`WriteResult`>

*Inherited from [SourceDestination](sourcedestination.md).[write](sourcedestination.md#write)*

*Defined in [source-destination/source-destination.ts:302](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _buffer | `Buffer` |
| _bufferOffset | `number` |
| _length | `number` |
| _fileOffset | `number` |

**Returns:** `Promise`<`WriteResult`>

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /node_modules/@types/node/index.d.ts:714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___
<a id="register"></a>

### `<Static>` register

▸ **register**(Cls: *[SourceSource](sourcesource.md)*): `void`

*Inherited from [SourceDestination](sourcedestination.md).[register](sourcedestination.md#register)*

*Defined in [source-destination/source-destination.ts:252](https://github.com/balena-io-modules/etcher-sdk/blob/a5ff273/lib/source-destination/source-destination.ts#L252)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Cls | [SourceSource](sourcesource.md) |

**Returns:** `void`

___

