[etcher-sdk](../README.md) › [Speedometer](speedometer.md)

# Class: Speedometer

## Hierarchy

* **Speedometer**

## Index

### Constructors

* [constructor](speedometer.md#constructor)

### Properties

* [values](speedometer.md#private-values)
* [windowSize](speedometer.md#private-windowsize)

### Methods

* [moment](speedometer.md#private-moment)
* [now](speedometer.md#private-now)
* [removeOldValues](speedometer.md#private-removeoldvalues)
* [speed](speedometer.md#speed)
* [value](speedometer.md#private-value)

## Constructors

###  constructor

\+ **new Speedometer**(`windowSize`: number): *[Speedometer](speedometer.md)*

*Defined in [lib/speedometer.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`windowSize` | number | 5 |

**Returns:** *[Speedometer](speedometer.md)*

## Properties

### `Private` values

• **values**: *Array‹[]›* = []

*Defined in [lib/speedometer.ts:20](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L20)*

___

### `Private` windowSize

• **windowSize**: *number*

*Defined in [lib/speedometer.ts:22](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L22)*

## Methods

### `Private` moment

▸ **moment**(`index`: number): *number*

*Defined in [lib/speedometer.ts:36](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*

___

### `Private` now

▸ **now**(): *number*

*Defined in [lib/speedometer.ts:26](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L26)*

**Returns:** *number*

___

### `Private` removeOldValues

▸ **removeOldValues**(`start`: number): *void*

*Defined in [lib/speedometer.ts:30](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |

**Returns:** *void*

___

###  speed

▸ **speed**(`amount`: number): *number*

*Defined in [lib/speedometer.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

**Returns:** *number*

___

### `Private` value

▸ **value**(`index`: number): *number*

*Defined in [lib/speedometer.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/speedometer.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *number*
