[etcher-sdk](../README.md) › [MultiDestinationProgress](multidestinationprogress.md)

# Interface: MultiDestinationProgress

## Hierarchy

* [MultiDestinationState](multidestinationstate.md)

  ↳ **MultiDestinationProgress**

## Index

### Properties

* [active](multidestinationprogress.md#active)
* [blockmappedSize](multidestinationprogress.md#optional-blockmappedsize)
* [bytes](multidestinationprogress.md#bytes)
* [compressedSize](multidestinationprogress.md#optional-compressedsize)
* [eta](multidestinationprogress.md#optional-eta)
* [failed](multidestinationprogress.md#failed)
* [flashing](multidestinationprogress.md#flashing)
* [percentage](multidestinationprogress.md#optional-percentage)
* [position](multidestinationprogress.md#position)
* [rootStreamPosition](multidestinationprogress.md#optional-rootstreamposition)
* [rootStreamSpeed](multidestinationprogress.md#optional-rootstreamspeed)
* [size](multidestinationprogress.md#optional-size)
* [sparse](multidestinationprogress.md#optional-sparse)
* [speed](multidestinationprogress.md#speed)
* [successful](multidestinationprogress.md#successful)
* [totalSpeed](multidestinationprogress.md#totalspeed)
* [type](multidestinationprogress.md#type)
* [verifying](multidestinationprogress.md#verifying)

## Properties

###  active

• **active**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[active](multidestinationstate.md#active)*

*Defined in [lib/multi-write.ts:37](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L37)*

___

### `Optional` blockmappedSize

• **blockmappedSize**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[blockmappedSize](multidestinationstate.md#optional-blockmappedsize)*

*Defined in [lib/multi-write.ts:45](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L45)*

___

###  bytes

• **bytes**: *number*

*Defined in [lib/multi-write.ts:52](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L52)*

___

### `Optional` compressedSize

• **compressedSize**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[compressedSize](multidestinationstate.md#optional-compressedsize)*

*Defined in [lib/multi-write.ts:44](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L44)*

___

### `Optional` eta

• **eta**? : *undefined | number*

*Defined in [lib/multi-write.ts:57](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L57)*

___

###  failed

• **failed**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[failed](multidestinationstate.md#failed)*

*Defined in [lib/multi-write.ts:40](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L40)*

___

###  flashing

• **flashing**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[flashing](multidestinationstate.md#flashing)*

*Defined in [lib/multi-write.ts:38](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L38)*

___

### `Optional` percentage

• **percentage**? : *undefined | number*

*Defined in [lib/multi-write.ts:56](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L56)*

___

###  position

• **position**: *number*

*Defined in [lib/multi-write.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L53)*

___

### `Optional` rootStreamPosition

• **rootStreamPosition**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[rootStreamPosition](multidestinationstate.md#optional-rootstreamposition)*

*Defined in [lib/multi-write.ts:47](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L47)*

___

### `Optional` rootStreamSpeed

• **rootStreamSpeed**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[rootStreamSpeed](multidestinationstate.md#optional-rootstreamspeed)*

*Defined in [lib/multi-write.ts:48](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L48)*

___

### `Optional` size

• **size**? : *undefined | number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[size](multidestinationstate.md#optional-size)*

*Defined in [lib/multi-write.ts:43](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L43)*

___

### `Optional` sparse

• **sparse**? : *undefined | false | true*

*Inherited from [MultiDestinationState](multidestinationstate.md).[sparse](multidestinationstate.md#optional-sparse)*

*Defined in [lib/multi-write.ts:46](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L46)*

___

###  speed

• **speed**: *number*

*Defined in [lib/multi-write.ts:54](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L54)*

___

###  successful

• **successful**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[successful](multidestinationstate.md#successful)*

*Defined in [lib/multi-write.ts:41](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L41)*

___

###  totalSpeed

• **totalSpeed**: *number*

*Defined in [lib/multi-write.ts:55](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L55)*

___

###  type

• **type**: *[WriteStep](../README.md#writestep)*

*Inherited from [MultiDestinationState](multidestinationstate.md).[type](multidestinationstate.md#type)*

*Defined in [lib/multi-write.ts:42](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L42)*

___

###  verifying

• **verifying**: *number*

*Inherited from [MultiDestinationState](multidestinationstate.md).[verifying](multidestinationstate.md#verifying)*

*Defined in [lib/multi-write.ts:39](https://github.com/balena-io-modules/etcher-sdk/blob/e5355bd/lib/multi-write.ts#L39)*
