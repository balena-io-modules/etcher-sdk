[etcher-sdk](../README.md) > [SourceRandomAccessReader](../classes/sourcerandomaccessreader.md)

# Class: SourceRandomAccessReader

## Hierarchy

 `RandomAccessReader`

**↳ SourceRandomAccessReader**

## Index

### Constructors

* [constructor](sourcerandomaccessreader.md#constructor)

### Properties

* [source](sourcerandomaccessreader.md#source)
* [defaultMaxListeners](sourcerandomaccessreader.md#defaultmaxlisteners)

### Methods

* [_readStreamForRange](sourcerandomaccessreader.md#_readstreamforrange)
* [addListener](sourcerandomaccessreader.md#addlistener)
* [close](sourcerandomaccessreader.md#close)
* [createReadStream](sourcerandomaccessreader.md#createreadstream)
* [emit](sourcerandomaccessreader.md#emit)
* [eventNames](sourcerandomaccessreader.md#eventnames)
* [getMaxListeners](sourcerandomaccessreader.md#getmaxlisteners)
* [listenerCount](sourcerandomaccessreader.md#listenercount)
* [listeners](sourcerandomaccessreader.md#listeners)
* [on](sourcerandomaccessreader.md#on)
* [once](sourcerandomaccessreader.md#once)
* [prependListener](sourcerandomaccessreader.md#prependlistener)
* [prependOnceListener](sourcerandomaccessreader.md#prependoncelistener)
* [read](sourcerandomaccessreader.md#read)
* [removeAllListeners](sourcerandomaccessreader.md#removealllisteners)
* [removeListener](sourcerandomaccessreader.md#removelistener)
* [setMaxListeners](sourcerandomaccessreader.md#setmaxlisteners)
* [listenerCount](sourcerandomaccessreader.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SourceRandomAccessReader**(source: *[SourceDestination](sourcedestination.md)*): [SourceRandomAccessReader](sourcerandomaccessreader.md)

*Defined in [source-destination/zip.ts:128](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/zip.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | [SourceDestination](sourcedestination.md) |

**Returns:** [SourceRandomAccessReader](sourcerandomaccessreader.md)

___

## Properties

<a id="source"></a>

### `<Private>` source

**● source**: *[SourceDestination](sourcedestination.md)*

*Defined in [source-destination/zip.ts:129](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/zip.ts#L129)*

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:715*

___

## Methods

<a id="_readstreamforrange"></a>

###  _readStreamForRange

▸ **_readStreamForRange**(start: *`number`*, end: *`number`*): `PassThrough`

*Overrides RandomAccessReader._readStreamForRange*

*Defined in [source-destination/zip.ts:133](https://github.com/resin-io-modules/etcher-sdk/blob/e34af4f/lib/source-destination/zip.ts#L133)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| start | `number` |
| end | `number` |

**Returns:** `PassThrough`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:717*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="close"></a>

###  close

▸ **close**(callback: *`function`*): `void`

*Inherited from RandomAccessReader.close*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/yauzl/index.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `function` |

**Returns:** `void`

___
<a id="createreadstream"></a>

###  createReadStream

▸ **createReadStream**(options: *`object`*): `void`

*Inherited from RandomAccessReader.createReadStream*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/yauzl/index.d.ts:13*

**Parameters:**

**options: `object`**

| Name | Type |
| ------ | ------ |
| end | `number` |
| start | `number` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:727*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:728*

**Returns:** (`string` \| `symbol`)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:725*

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:729*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:726*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:718*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:719*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`Function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:720*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:721*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `Function` |

**Returns:** `this`

___
<a id="read"></a>

###  read

▸ **read**(buffer: *`Buffer`*, offset: *`number`*, length: *`number`*, position: *`number`*, callback: *`function`*): `void`

*Inherited from RandomAccessReader.read*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/yauzl/index.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | `Buffer` |
| offset | `number` |
| length | `number` |
| position | `number` |
| callback | `function` |

**Returns:** `void`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:723*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:722*

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

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:724*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /home/alexis/dev/resin.io/etcher-sdk-2/node_modules/@types/node/index.d.ts:714*

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

