[etcher-sdk](../README.md) / utils

# Namespace: utils

## Table of contents

### Interfaces

- [Dictionary](../interfaces/utils.Dictionary.md)

### Functions

- [asCallback](utils.md#ascallback)
- [delay](utils.md#delay)
- [difference](utils.md#difference)
- [every](utils.md#every)
- [fromCallback](utils.md#fromcallback)
- [maxBy](utils.md#maxby)
- [minBy](utils.md#minby)
- [once](utils.md#once)
- [sparseStreamToBuffer](utils.md#sparsestreamtobuffer)
- [streamToBuffer](utils.md#streamtobuffer)
- [sumBy](utils.md#sumby)

## Functions

### asCallback

▸ **asCallback**<`T`\>(`promise`, `callback`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |
| `callback` | (`error?`: ``null`` \| `Error`, `value?`: `T`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/utils.ts:102](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L102)

___

### delay

▸ **delay**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/utils.ts:128](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L128)

___

### difference

▸ **difference**<`T`\>(`setA`, `setB`): `Set`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`Set`<`T`\>

#### Defined in

[lib/utils.ts:94](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L94)

___

### every

▸ **every**<`T`\>(`things`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `things` | `Iterable`<`T`\> |

#### Returns

`boolean`

#### Defined in

[lib/utils.ts:168](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L168)

___

### fromCallback

▸ **fromCallback**<`T`\>(`fn`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`callback`: (`error?`: ``null`` \| `Error`, `result?`: `T`) => `void`) => `void` |

#### Returns

`Promise`<`T`\>

#### Defined in

[lib/utils.ts:114](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L114)

___

### maxBy

▸ **maxBy**<`T`\>(`things`, `iteratee`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `things` | `Iterable`<`T`\> |
| `iteratee` | (`thing`: `T`) => `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[lib/utils.ts:150](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L150)

___

### minBy

▸ **minBy**<`T`\>(`things`, `iteratee`): `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `things` | `Iterable`<`T`\> |
| `iteratee` | (`thing`: `T`) => `number` |

#### Returns

`T` \| `undefined`

#### Defined in

[lib/utils.ts:134](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L134)

___

### once

▸ **once**<`T`\>(`fn`): () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `T` |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

#### Defined in

[lib/utils.ts:177](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L177)

___

### sparseStreamToBuffer

▸ **sparseStreamToBuffer**(`stream`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[lib/utils.ts:53](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L53)

___

### streamToBuffer

▸ **streamToBuffer**(`stream`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `ReadableStream` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[lib/utils.ts:24](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L24)

___

### sumBy

▸ **sumBy**<`T`\>(`things`, `iteratee`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `things` | `Iterable`<`T`\> |
| `iteratee` | (`thing`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[lib/utils.ts:157](https://github.com/balena-io-modules/etcher-sdk/blob/a70e73b/lib/utils.ts#L157)
