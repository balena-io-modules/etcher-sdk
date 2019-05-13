[etcher-sdk](../README.md) > [SourceDestinationFs](../classes/sourcedestinationfs.md)

# Class: SourceDestinationFs

## Hierarchy

**SourceDestinationFs**

## Index

### Constructors

* [constructor](sourcedestinationfs.md#constructor)

### Properties

* [source](sourcedestinationfs.md#source)

### Methods

* [close](sourcedestinationfs.md#close)
* [fstat](sourcedestinationfs.md#fstat)
* [open](sourcedestinationfs.md#open)
* [read](sourcedestinationfs.md#read)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourceDestinationFs**(source: *[SourceDestination](sourcedestination.md)*): [SourceDestinationFs](sourcedestinationfs.md)

*Defined in [source-destination/source-destination.ts:74](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](sourcedestination.md) |

**Returns:** [SourceDestinationFs](sourcedestinationfs.md)

___

## Properties

<a id="source"></a>

### `<Private>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Defined in [source-destination/source-destination.ts:76](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L76)*

___

## Methods

<a id="close"></a>

###  close

▸ **close**(_fd: *`number`*, callback: *`function`*): `void`

*Defined in [source-destination/source-destination.ts:86](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _fd | `number` |
| callback | `function` |

**Returns:** `void`

___
<a id="fstat"></a>

###  fstat

▸ **fstat**(_fd: *`number`*, callback: *`function`*): `void`

*Defined in [source-destination/source-destination.ts:90](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _fd | `number` |
| callback | `function` |

**Returns:** `void`

___
<a id="open"></a>

###  open

▸ **open**(_path: *`string`*, _options: *`any`*, callback: *`function`*): `void`

*Defined in [source-destination/source-destination.ts:78](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _path | `string` |
| _options | `any` |
| callback | `function` |

**Returns:** `void`

___
<a id="read"></a>

###  read

▸ **read**(_fd: *`number`*, buffer: *`Buffer`*, bufferOffset: *`number`*, length: *`number`*, sourceOffset: *`number`*, callback: *`function`*): `void`

*Defined in [source-destination/source-destination.ts:106](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/source-destination.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _fd | `number` |
| buffer | `Buffer` |
| bufferOffset | `number` |
| length | `number` |
| sourceOffset | `number` |
| callback | `function` |

**Returns:** `void`

___

