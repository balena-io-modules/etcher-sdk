/**
 * Supervisor is currently the only image pre-loaded on HOST OS at build time
 *
 * We need to know which supervisor image is installed on the device.
 * Idealy we'd also know the `chache_id` for each layer so we can dedupe when downloading / installing users images.
 *
 * As we cannot currently do that easily(*) the next best thing is to preload the supervisor again (overwriting the layerdb and duplicating cache (overlay2 folder)).
 * This is wasteful as all the layers for supervisor will be transfered twice but it's the safest.
 *
 * To make that less wasteful, we can easily optimise by checking first if we have duplicated layers between SV and user apps and only repreload SV if it's the case. ( //TODO )
 *
 * To make the call we need :
 * - supervisor version -> from S3 (VERSION)
 * - device arch -> from S3 (device-type.json)
 * - api env (bob, balena-machine, prod, ...) -> from env
 * - auth token -> from env; //TODO: retrieve from user / password
 *
 * We retrieve SV image name from the api using the [same method as the one used by meta-balena when building balenaos.img](https://github.com/balena-os/meta-balena/blob/a1084cfc437eb601cbb9f3de7822d916e08351de/meta-balena-common/recipes-containers/balena-supervisor/balena-supervisor.bb#L68)
 * curl "https://api.${_api_env}/v6/supervisor_release?\$top=1&\$select=image_name&\$filter=(supervisor_version%20eq%20%27${_version}%27)%20and%20(is_for__device_type/any(ifdt:ifdt/is_of__cpu_architecture/any(ioca:ioca/slug%20eq%20%27${_arch}%27)))" \ -H "Content-Type: application/json" -H "Authorization: Bearer `cat ~/.balena/token`"
 *
 * Note that what we do here will be deprecated and should only be used for the PoC : https://jel.ly.fish/facc0db4-57a6-4e5d-a45a-cbda5c9e7a76?event=f79c9c8d-d2b1-4470-9d8a-cad7c7c9f2f0
 *
 */

import axios from "axios";

interface supervisorImageNameIn {
	version: string;
	arch: string;
	api?: string;
	token?: string;
}

/**
 * Fetch the supervisor image name (pullable url) from api for a version and arch
 *
 */
const getSupervisorImageNameFor = async ({
	version,
	arch,
	api,
	token,
}: supervisorImageNameIn): Promise<string | undefined> => {
	const options = {
		headers: {
			Authorization: `Bearer ${token}`,
			ContentType: "application/json",
		},
		url: `https://${
			api ?? "api.balena-cloud.com"
		}/v6/supervisor_release?\$top=1&\$select=image_name&\$filter=(supervisor_version%20eq%20%27${version}%27)%20and%20(is_for__device_type/any(ifdt:ifdt/is_of__cpu_architecture/any(ioca:ioca/slug%20eq%20%27${arch}%27)))`,
	};
	try {
		const { data } = await axios(options);
		return data?.d?.[0]?.image_name;
	} catch (error) {
		console.error("\n\n==> getBlob error:", error);
	}
};

export { getSupervisorImageNameFor };
