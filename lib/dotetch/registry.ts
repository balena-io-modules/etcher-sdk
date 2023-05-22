// FIXME: this should be refactored

import axios, { AxiosRequestConfig, AxiosBasicCredentials } from 'axios';
import { dockerParseImage, DockerParsedImage } from './docker-parse-image';
import {
	Manifest,
	ManifestInfosFromRegistry,
} from './interface-manifest';
// import { ManifestInfosRepos } from "./appsJson";
import { inspect } from 'util';
import * as crypto from 'crypto';

/**
 * This should authenticate to the registry api, get a token,
 * Get the distribution manifest, the manifest from the registry and get the blobs.
 * How to run:
 * npm i
 * node getManifest.mjs
 * You can also replace scopeo with this.
 */

/**
 * /v2/<name>/manifests/<reference>
 * /v2/<name>/blobs/<digest>
 *
 * Proof of Concept
 * Used a reverse proxy to catch the HTTP requests made by the
 * docker client when pulling a docker image from the registry, here is the output:
 *
 * 1. Get a valid token and make a HEAD request to verify that the manifest exists. Checking manifest
 * Notice how we get back the image Id on Docker-Content-Digest header, as specified in the standard.
 *
 * 2. After validating that the manifest exists just requests a token for each of the layers and it's data: First layer
 */

/**
 * Helpful links to understand the registry and other versions of registry code:
 * https://docs.docker.com/registry/spec/api/
 * https://github.com/dlgmltjr0925/docker-registry-web/blob/cbab3f214d3d47be3c93d1b5ab969f7b711663fc/utils/dockerRegistry.ts
 * https://github.com/TritonDataCenter/node-docker-registry-client/blob/master/lib/registry-client-v2.js
 * https://github.com/moby/moby/issues/9015
 * https://github.com/containers/skopeo/blob/main/cmd/skopeo/copy.go
 * https://github.com/mafintosh/docker-parse-image/blob/master/index.js
 * https://gist.github.com/leodotcloud/9cd3dabdc73ccb498777073a0c8df64a
 * https://github.com/moby/moby/blob/0910306bf970603ce787466a98e4294ba81af841/layer/layer_store.go#L102
 * https://programmer.ink/think/container-principle-understand-layerid-diffid-chainid-cache-id.html
 * https://github.com/productionwentdown/dri/blob/e7a85c5666f45b716be47d112be2578638143fbf/src/api.js
 * https://github.com/viraja1/decentralized_docker_hub_registry/blob/782de6b84532c70c51049b3aec35a177998f089a/daemon/server.js
 * https://github.com/bmonty/docker-manifest
 * https://github.com/viraja1/decentralized_docker_hub_registry/blob/782de6b84532c70c51049b3aec35a177998f089a/hub/server.js
 * https://github.com/plurid/hypod/blob/c69c53ef8c9aa41741144b416d2109c55a5eb7e1/packages/hypod-server/source/server/data/constants/docker/index.ts
 * https://stackoverflow.com/questions/71534322/http-stream-using-axios-node-js
 */

/**
 *
 * @param {string} registry
 * @param {string} namespace
 * @returns
 */
function getRegistryUrl({ registry, namespace }: DockerParsedImage): string {
	if (!registry) {
		throw Error('No registry provided')
	}
	return `https://${registry}/${namespace}/`;
}

/**
 * getImageUrl
 * @param {string} registry
 * @param {string} namespace
 * @param {string} repository
 * @returns {string} imageUrl
 */
// NOTE the double namespace here, the 1st v2 is for docker Version2, the second is for image release Version2
// Not sure how to get the image rel
function getImageUrl({
	registry,
	namespace,
	repository,
}: DockerParsedImage): string {
	// we're only supporting docker api v2 for now
	return `https://${registry}/v2/${namespace}/${repository}`;
}

/**
 * @param image
 * @param layer
 * @returns
 */
export function getUrls(image: string) {
	const parsedImage = dockerParseImage(image);
	const registryUrl = getRegistryUrl(parsedImage);
	const imageUrl = getImageUrl(parsedImage);
	return { registryUrl, imageUrl, parsedImage };
}

/** getAllBlobs
 * /v2/<name>/blobs/<digest>
 */

/**
 * getBlob
 * @param imageUrl
 * @param token
 * @param layer
 * @returns
 */
export async function getBlob(
	imageUrl: string,
	token: string,
	layer: { [key: string]: number | string },
): Promise<NodeJS.ReadableStream> {
	const options: AxiosRequestConfig = {
		method: 'GET',
		responseType: 'stream',
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.docker.image.rootfs.diff.tar.gzip',
			'Accept-Encoding': 'gzip',
			'Docker-Distribution-API-Version': 'registry/2.0',
		},
		url: `${imageUrl}/blobs/${layer.digest}`,
	};
	try {
		const { data, headers } = await axios(options);
		if (
			parseInt(headers['content-length']!, 10) === layer.size &&
			headers['docker-content-digest'] === layer.digest
		) {
			// console.log(
			// 	'==> getBlob stream header/layer sizes match',
			// 	parseInt(headers['content-length']!, 10),
			// 	layer.size,
			// );
			// console.log(
			// 	'==> getBlob stream header/layer digests match',
			// 	headers['docker-content-digest'],
			// 	layer.digest,
			// );
		}
		return data;
	} catch (error) {
		console.error('\n\n==> getBlob error:', inspect(error, true, 2, true));
		throw error;
	}
}

/**
 * getAllBlobs
 * Iterate through the layers and get the blobs.
 * This is getting moved over the the mainland. Should it tho?
 * @param {object} imageUrl - imageUrl per image
 * @param {string} token - token per image
 * @param {string} manifest - manifest per image
 * @returns {Promise}
 */
// async function getAllBlobs(imageUrl: string, token: string, manifest: Manifest): Promise<Object> {
//   try {
//     const tgzLayersDigest = await Promise.all(
//       manifest.layers.map(async (layer) => {
//         const dataBlob = await getBlob(imageUrl, token, layer)
//         return await dataBlob
//       })
//     )
//     return tgzLayersDigest
//   } catch (error) {
//     console.error("\n\n==> getAllBlob error:", inspect(error, true, 2, true))
//     throw error
//   }
// }

/**
 * getConfigManifest
 * This should pull the blob from the registry after checking head.
 * GET /v2/<name>/blobs/<digest>
 * GET example /v2/53b00bed7a4c6897db23eb0e4cf620e3/blobs/sha256:1aa86408ad62437344cee93c2be884ad802fc63e05795876acec6de0bb21f3cc
 * @param imageUrl
 * @param token
 * @param digest
 * @returns
 */
async function getConfigManifest(
	imageUrl: string,
	token: string,
	digest: string,
): Promise<any> {
	const options = {
		method: 'GET',
		url: `${imageUrl}/blobs/${digest}`,
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.docker.image.rootfs.diff.tar.gzip',
			'Docker-Distribution-API-Version': 'registry/2.0',
		},
		transformResponse: (r: any) => r // we don't want axios to parse the response, otherwise hash won't match when reconstructing
	};
	try {
		const { data } = await axios(options);
		const hash = crypto
			.createHash('sha256')
			.update(data)
			.digest('hex');
		if(`sha256:${hash}` !== digest) throw new Error(`digest (${digest}) and hash (sha256:${hash}) don't match`)
		return data;
	} catch (error) {
		console.error('==> getBlob error', error);
		throw error;
	}
}

/**
 *
 * @param imageUrl
 * @param token
 * @returns
 */
async function getManifest(imageUrl: string, token: string): Promise<Manifest> {
	const options = {
		method: 'GET',
		url: `${imageUrl}/manifests/latest`,
		withCredentials: true,
		credentials: 'include',
		headers: {
			Accept: 'application/vnd.docker.distribution.manifest.v2+json',
			Authorization: `Bearer ${token}`,
			'Docker-Distribution-API-Version': 'registry/2.0',
		},
	};

	try {
		const { data } = await axios(options);
		return data;
	} catch (error) {
		console.error('==> getManifest error', error);
		throw new Error(`==> NOPE did not get registry manifest. CATCH: ${error}`);
	}
}

interface AuthRealmServiceResponseType {
	realm: string;
	service: string;
}

/**
 * @param url
 * @param authHeaders
 * @returns
 */
async function getRealmResponse(
	url: string
): Promise<AuthRealmServiceResponseType> {
	// parse auth response for the realm and service params provided by registry
	const options = {
		method: 'GET',
		url,
		validateStatus: (status: number) => status === 401,
	};
	try {
		const { headers } = await axios(options);
		if (headers['www-authenticate'] === undefined) {
			throw new Error('unsupported scheme');
		}
		// Looking for something that looks like this
		// `Bearer realm="https://api.balena-cloud.com/auth/v1/token"
		// ,service="registry2.balena-cloud.com"`
		const authHeader = headers['www-authenticate'].split(' ')[1].split(',');
		const authRealmServiceResponse = {
			realm: authHeader[0].split('=')[1].replace(/\"/g, ''),
			service: authHeader[1].split('=')[1].replace(/\"/g, ''),
		};
		return authRealmServiceResponse;
	} catch (error) {
		console.error('==> getRealmResponse error', error);
		throw new Error(
			`www-authenticate Bearer realm/service missing. ERROR: ${error}`,
		);
	}
}

/**
 * @param image
 * @param auth either a string with a bearer token or an object with username and password for basic auth
 * @returns
 */
export async function pullManifestsFromRegistry(
	image: string,
	auth: string | AxiosBasicCredentials,
): Promise<ManifestInfosFromRegistry> {
	const parsedImage = dockerParseImage(image);
	const registryUrl = getRegistryUrl(parsedImage);
	const imageUrl = getImageUrl(parsedImage);

	const { realm, service } = await getRealmResponse(registryUrl)

	const token = await getToken(
		parsedImage,
		service,
		realm,
		auth,
	);

	const manifest = await getManifest(imageUrl, token);
	
	const configDigest = manifest?.config?.digest;
	const digests = manifest?.layers;

	// We are using this manifest as its V2
	const configManifestV2 = await getConfigManifest(
		imageUrl,
		token,
		configDigest,
	);

	const diffIds = await JSON.parse(configManifestV2).rootfs.diff_ids;

	const imageId = configDigest;
	const imageName = image;

	return {
		manifest,
		digests,
		configDigest,
		configManifestV2,
		imageId,
		imageName,
		diffIds,
		imageUrl,
		token,
	};
}

async function getToken(
	parsedImage: DockerParsedImage,
	service: string,
	realm: string,
	auth: string | AxiosBasicCredentials,
	tag?: string,
) {
	try {
		const { repository, namespace } = parsedImage;

		const options: AxiosRequestConfig = {
			method: 'GET',
			url: realm,
			params: {
				service,
				scope: `repository:${
					namespace ? `${namespace}/` : 'library/'
				}${repository}:${tag || 'pull'}`,
			},
		}

		// add authentication method to options
		if(typeof auth === "string"){
			options.headers = {
				Authorization: `bearer ${auth}`,
			}
		} else {
			options.auth = auth
		}	
		
		const { data } = await axios(options);

		if (!data.token) {
			throw new Error('token registry fail.');
		}
		return await data.token;
	} catch (error) {
		throw new Error(
			`Failed to get authentication token from registry : ${error}`,
		);
	}
}
