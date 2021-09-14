[etcher-sdk](../README.md) › [Metadata](metadata.md)

# Interface: Metadata

## Hierarchy

* **Metadata**

## Index

### Properties

* [blockMap](metadata.md#optional-blockmap)
* [blockmappedSize](metadata.md#optional-blockmappedsize)
* [blocks](metadata.md#optional-blocks)
* [bytesToZeroOutFromTheBeginning](metadata.md#optional-bytestozerooutfromthebeginning)
* [checksum](metadata.md#optional-checksum)
* [checksumType](metadata.md#optional-checksumtype)
* [compressedSize](metadata.md#optional-compressedsize)
* [format](metadata.md#optional-format)
* [instructions](metadata.md#optional-instructions)
* [isCompressed](metadata.md#optional-iscompressed)
* [isEtch](metadata.md#optional-isetch)
* [isSizeEstimated](metadata.md#optional-issizeestimated)
* [lastModified](metadata.md#optional-lastmodified)
* [logo](metadata.md#optional-logo)
* [name](metadata.md#optional-name)
* [osVersion](metadata.md#optional-osversion)
* [recommendedDriveSize](metadata.md#optional-recommendeddrivesize)
* [releaseNotesUrl](metadata.md#optional-releasenotesurl)
* [size](metadata.md#optional-size)
* [supervisorVersion](metadata.md#optional-supervisorversion)
* [supportUrl](metadata.md#optional-supporturl)
* [url](metadata.md#optional-url)
* [version](metadata.md#optional-version)

## Properties

### `Optional` blockMap

• **blockMap**? : *BlockMap*

*Defined in [lib/source-destination/metadata.ts:28](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L28)*

___

### `Optional` blockmappedSize

• **blockmappedSize**? : *undefined | number*

*Defined in [lib/source-destination/metadata.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L26)*

___

### `Optional` blocks

• **blocks**? : *[BlocksWithChecksum](blockswithchecksum.md)[]*

*Defined in [lib/source-destination/metadata.ts:29](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L29)*

___

### `Optional` bytesToZeroOutFromTheBeginning

• **bytesToZeroOutFromTheBeginning**? : *undefined | number*

*Defined in [lib/source-destination/metadata.ts:32](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L32)*

___

### `Optional` checksum

• **checksum**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:33](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L33)*

___

### `Optional` checksumType

• **checksumType**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:34](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L34)*

___

### `Optional` compressedSize

• **compressedSize**? : *undefined | number*

*Defined in [lib/source-destination/metadata.ts:25](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L25)*

___

### `Optional` format

• **format**? : *"zip" | "gzip"*

*Defined in [lib/source-destination/metadata.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L44)*

___

### `Optional` instructions

• **instructions**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L30)*

___

### `Optional` isCompressed

• **isCompressed**? : *undefined | false | true*

*Defined in [lib/source-destination/metadata.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L24)*

___

### `Optional` isEtch

• **isEtch**? : *undefined | false | true*

*Defined in [lib/source-destination/metadata.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L40)*

___

### `Optional` isSizeEstimated

• **isSizeEstimated**? : *undefined | false | true*

*Defined in [lib/source-destination/metadata.ts:23](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L23)*

___

### `Optional` lastModified

• **lastModified**? : *Date*

*Defined in [lib/source-destination/metadata.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L43)*

___

### `Optional` logo

• **logo**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:31](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L31)*

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:27](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L27)*

___

### `Optional` osVersion

• **osVersion**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L42)*

___

### `Optional` recommendedDriveSize

• **recommendedDriveSize**? : *undefined | number*

*Defined in [lib/source-destination/metadata.ts:35](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L35)*

___

### `Optional` releaseNotesUrl

• **releaseNotesUrl**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L36)*

___

### `Optional` size

• **size**? : *undefined | number*

*Defined in [lib/source-destination/metadata.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L22)*

___

### `Optional` supervisorVersion

• **supervisorVersion**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L41)*

___

### `Optional` supportUrl

• **supportUrl**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L37)*

___

### `Optional` url

• **url**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L38)*

___

### `Optional` version

• **version**? : *undefined | string*

*Defined in [lib/source-destination/metadata.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/source-destination/metadata.ts#L39)*
