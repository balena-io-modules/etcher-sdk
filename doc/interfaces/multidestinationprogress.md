[etcher-sdk](../README.md) › [MultiDestinationProgress](multidestinationprogress.md)

# Interface: MultiDestinationProgress

## Hierarchy

* [MultiDestinationState](multidestinationstate.md)

  ↳ **MultiDestinationProgress**

## Index

### Properties

* [active](multidestinationprogress.md#active)
* [averageSpeed](multidestinationprogress.md#averagespeed)
* [blockmappedSize](multidestinationprogress.md#optional-blockmappedsize)
* [bytes](multidestinationprogress.md#bytes)
* [bytesWritten](multidestinationprogress.md#optional-byteswritten)
* [compressedSize](multidestinationprogress.md#optional-compressedsize)
* [eta](multidestinationprogress.md#optional-eta)
* [failed](multidestinationprogress.md#failed)
* [percentage](multidestinationprogress.md#optional-percentage)
* [position](multidestinationprogress.md#position)
* [rootStreamAverageSpeed](multidestinationprogress.md#optional-rootstreamaveragespeed)
* [rootStreamPosition](multidestinationprogress.md#optional-rootstreamposition)
* [rootStreamSpeed](multidestinationprogress.md#optional-rootstreamspeed)
* [size](multidestinationprogress.md#optional-size)
* [sparse](multidestinationprogress.md#optional-sparse)
* [speed](multidestinationprogress.md#speed)
* [type](multidestinationprogress.md#type)

## Properties

###  active

• **active**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[active](multidestinationstate.md#active)*

*Defined in [lib/multi-write.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L48)*

___

###  averageSpeed

• **averageSpeed**: *number*

*Defined in [lib/multi-write.ts:65](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L65)*

___

### `Optional` blockmappedSize

• **blockmappedSize**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[blockmappedSize](multidestinationstate.md#optional-blockmappedsize)*

*Defined in [lib/multi-write.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L53)*

___

###  bytes

• **bytes**: *number*

*Defined in [lib/multi-write.ts:62](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L62)*

___

### `Optional` bytesWritten

• **bytesWritten**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[bytesWritten](multidestinationstate.md#optional-byteswritten)*

*Defined in [lib/multi-write.ts:58](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L58)*

___

### `Optional` compressedSize

• **compressedSize**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[compressedSize](multidestinationstate.md#optional-compressedsize)*

*Defined in [lib/multi-write.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L52)*

___

### `Optional` eta

• **eta**? : *undefined | number*

*Defined in [lib/multi-write.ts:67](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L67)*

___

###  failed

• **failed**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[failed](multidestinationstate.md#failed)*

*Defined in [lib/multi-write.ts:49](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L49)*

___

### `Optional` percentage

• **percentage**? : *undefined | number*

*Defined in [lib/multi-write.ts:66](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L66)*

___

###  position

• **position**: *number*

*Defined in [lib/multi-write.ts:63](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L63)*

___

### `Optional` rootStreamAverageSpeed

• **rootStreamAverageSpeed**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[rootStreamAverageSpeed](multidestinationstate.md#optional-rootstreamaveragespeed)*

*Defined in [lib/multi-write.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L57)*

___

### `Optional` rootStreamPosition

• **rootStreamPosition**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[rootStreamPosition](multidestinationstate.md#optional-rootstreamposition)*

*Defined in [lib/multi-write.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L55)*

___

### `Optional` rootStreamSpeed

• **rootStreamSpeed**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[rootStreamSpeed](multidestinationstate.md#optional-rootstreamspeed)*

*Defined in [lib/multi-write.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L56)*

___

### `Optional` size

• **size**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[size](multidestinationstate.md#optional-size)*

*Defined in [lib/multi-write.ts:51](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L51)*

___

### `Optional` sparse

• **sparse**? : *undefined | false | true*

*Inherited from [MultiDestinationState](multidestinationstate.md).[sparse](multidestinationstate.md#optional-sparse)*

*Defined in [lib/multi-write.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L54)*

___

###  speed

• **speed**: *number*

*Defined in [lib/multi-write.ts:64](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L64)*

___

###  type

• **type**: *[WriteStep](../README.md#writestep)*

*Inherited from [MultiDestinationState](multidestinationstate.md).[type](multidestinationstate.md#type)*

*Defined in [lib/multi-write.ts:50](https://github.com/balena-io-modules/etcher-sdk/blob/96443cd/lib/multi-write.ts#L50)*
