[etcher-sdk](../README.md) / [multiWrite](../modules/multiWrite.md) / MultiDestinationProgress

# Interface: MultiDestinationProgress

[multiWrite](../modules/multiWrite.md).MultiDestinationProgress

## Hierarchy

- `MultiDestinationState`

  ↳ **`MultiDestinationProgress`**

## Table of contents

### Properties

- [active](multiWrite.MultiDestinationProgress.md#active)
- [averageSpeed](multiWrite.MultiDestinationProgress.md#averagespeed)
- [blockmappedSize](multiWrite.MultiDestinationProgress.md#blockmappedsize)
- [bytes](multiWrite.MultiDestinationProgress.md#bytes)
- [bytesWritten](multiWrite.MultiDestinationProgress.md#byteswritten)
- [compressedSize](multiWrite.MultiDestinationProgress.md#compressedsize)
- [eta](multiWrite.MultiDestinationProgress.md#eta)
- [failed](multiWrite.MultiDestinationProgress.md#failed)
- [percentage](multiWrite.MultiDestinationProgress.md#percentage)
- [position](multiWrite.MultiDestinationProgress.md#position)
- [rootStreamAverageSpeed](multiWrite.MultiDestinationProgress.md#rootstreamaveragespeed)
- [rootStreamPosition](multiWrite.MultiDestinationProgress.md#rootstreamposition)
- [rootStreamSpeed](multiWrite.MultiDestinationProgress.md#rootstreamspeed)
- [size](multiWrite.MultiDestinationProgress.md#size)
- [sparse](multiWrite.MultiDestinationProgress.md#sparse)
- [speed](multiWrite.MultiDestinationProgress.md#speed)
- [type](multiWrite.MultiDestinationProgress.md#type)

## Properties

### active

• **active**: `number`

#### Inherited from

MultiDestinationState.active

#### Defined in

[lib/multi-write.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L48)

___

### averageSpeed

• **averageSpeed**: `number`

#### Defined in

[lib/multi-write.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L65)

___

### blockmappedSize

• `Optional` **blockmappedSize**: `number`

#### Inherited from

MultiDestinationState.blockmappedSize

#### Defined in

[lib/multi-write.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L53)

___

### bytes

• **bytes**: `number`

#### Defined in

[lib/multi-write.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L62)

___

### bytesWritten

• `Optional` **bytesWritten**: `number`

#### Inherited from

MultiDestinationState.bytesWritten

#### Defined in

[lib/multi-write.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L58)

___

### compressedSize

• `Optional` **compressedSize**: `number`

#### Inherited from

MultiDestinationState.compressedSize

#### Defined in

[lib/multi-write.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L52)

___

### eta

• `Optional` **eta**: `number`

#### Defined in

[lib/multi-write.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L67)

___

### failed

• **failed**: `number`

#### Inherited from

MultiDestinationState.failed

#### Defined in

[lib/multi-write.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L49)

___

### percentage

• `Optional` **percentage**: `number`

#### Defined in

[lib/multi-write.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L66)

___

### position

• **position**: `number`

#### Defined in

[lib/multi-write.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L63)

___

### rootStreamAverageSpeed

• `Optional` **rootStreamAverageSpeed**: `number`

#### Inherited from

MultiDestinationState.rootStreamAverageSpeed

#### Defined in

[lib/multi-write.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L57)

___

### rootStreamPosition

• `Optional` **rootStreamPosition**: `number`

#### Inherited from

MultiDestinationState.rootStreamPosition

#### Defined in

[lib/multi-write.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L55)

___

### rootStreamSpeed

• `Optional` **rootStreamSpeed**: `number`

#### Inherited from

MultiDestinationState.rootStreamSpeed

#### Defined in

[lib/multi-write.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L56)

___

### size

• `Optional` **size**: `number`

#### Inherited from

MultiDestinationState.size

#### Defined in

[lib/multi-write.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L51)

___

### sparse

• `Optional` **sparse**: `boolean`

#### Inherited from

MultiDestinationState.sparse

#### Defined in

[lib/multi-write.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L54)

___

### speed

• **speed**: `number`

#### Defined in

[lib/multi-write.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L64)

___

### type

• **type**: [`WriteStep`](../modules/multiWrite.md#writestep)

#### Inherited from

MultiDestinationState.type

#### Defined in

[lib/multi-write.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/2636458/lib/multi-write.ts#L50)
