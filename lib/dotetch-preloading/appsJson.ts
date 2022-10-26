/**
 * `Apps.json` is the file that will inform the supervisor of what's has been preloaded, which services should be started and with which config.
 *
 * `Apps.json` content is a subset of the `target state` for a device in a fleet running a given release.
 * Once we have that target fleeet, we need to go down one level to `apps` and keep only that element.
 *
 * In Apps.json we have the list of all the images that makes up a release.
 */

import axios from "axios";

/**
 * Derives Apps.json from target state obtained from the api
 *
 * This requires merge of https://github.com/balena-io/open-balena-api/pull/1081 in open-balena-api
 *
 * @param {string} app_id - app_id
 * @param {string} release_id - release_id
 * @param {string} app_id - app_id === fleet_uuid
 * @param {string} api - api server url
 * @param {string} apiToken - token to access api
 * @returns {json} - apps.json object
 */
const getAppsJson = async ({ app_id, release_id, api, apiToken }: any) => {
	// fleetUUID equals app_id
	const options = {
		url: `https://${api}/device/v3/fleet-state/${app_id}/release/${release_id}`,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiToken}`,
		},
	};

	try {
		const { data } = await axios(options);
		return await data;
	} catch (error) {
		console.error("\n\n==> getAppsJson error:", error);
	}
};

/**
 * Takes a apps.json and returns the list of images for an app & release.
 * If apps_id and/or release_id is unkown it will return first.
 * // TODO: return all instead of first when no app or release is specified.
 */
interface ImageIdsInput {
	appsJson: any; //TODO: get propertype for appsJson V3
	app_id: string;
	release_id: string;
}

interface Image {
	image_name: string;
	image_hash: string;
}

const getImageIds = ({
	appsJson,
	app_id,
	release_id,
}: ImageIdsInput): Image[] => {
	const appId = app_id ?? Object.keys(appsJson.apps)[0];
	const releaseId =
		release_id ?? Object.keys(appsJson.apps?.[appId]?.releases)[0];
	console.log(`==> appId: ${appId} & releaseId: ${releaseId}`);
	const imageKeys = Object.keys(
		appsJson.apps?.[appId]?.releases?.[releaseId]?.services
	);
	const imageNames = imageKeys.map(
		(key) => appsJson.apps?.[appId]?.releases?.[releaseId]?.services[key].image
	);
	return imageNames.map((image) => {
		const [image_name, image_hash] = image.split("@");
		return { image_name, image_hash };
	});
};

export { getAppsJson, getImageIds };
