import { getManifests } from "./registry";
import {
	buildRepositories,
	repositoriesJsonInjectionPath,
} from "./repositoriesjson";
import { streamBaseImage } from "./baseImage";
import { getAppsJson, getImageIds } from "./appsJson";
import { getLayers, downloadProcessLayers } from "./layers";
import { promisePacker, getTarballStream } from "./packer";
import { getImagesConfigurationFiles } from "./images";
import { getSupervisorImageNameFor } from "./supervisor";

interface PreloadOptions {
	outputStream: NodeJS.WritableStream;
	balenaosStream: NodeJS.ReadableStream;
	balenaosSize: number;
	app_id: string;
	release_id: string;
	api: string;
	token: string;
	arch: string;
	balenaosRef: string;
	dataPartition: number;
	supervisorVersion: string;
	user: string;
	password: string;
	callback?: Function;
}

/**
 * Main Processing function
 *
 * Beware that, as we're outputing to a tar stream, order of operation is important.
 * So most operations can't be made async, while some could be made in parrallel to speed things up
 * but should be eventually written synchroneous.
 *
 * Order of files in an `.etch` tar stream is :
 * 0. manifest.json - contains the name of the baseimage and a list of the inject folders
 * 1. base os image - can be zipped; name of the file should match the one specified in the manifest
 * 2. /inject/_partitions_/_foldersOrFilesToInject_ - injectables assets
 */

const streamPreloadingAssets = async ({
	outputStream,
	balenaosStream,
	balenaosSize,
	supervisorVersion,
	arch,
	app_id,
	release_id,
	balenaosRef,
	dataPartition = 6,
	api,
	token,
	user,
	password,
	callback,
}: PreloadOptions): Promise<void> => {
	// ##############
	// Processing
	// ##############
	console.log("==> STARTING @streamPreloadingAssets");

	// prepare tarball packer
	const injectPath = `inject/${dataPartition}`;
	const packStream = getTarballStream(outputStream); // streamable
	const packFile = promisePacker(packStream, injectPath); // promise
	const packManifest = promisePacker(packStream); // promise

	// 0. create and stream a manifest
	const manifest = {
		image: balenaosRef,
		inject: [
			{
				partition: dataPartition,
				partitionName: "resin-data",
				inject: dataPartition,
			},
		],
	};

	await packManifest(
		{ name: "manifest.json", mode: 644 },
		JSON.stringify(manifest)
	);

	// Beware that knowing the file size in advance is mandatory
	const baseImageStreamEntry = packStream.entry({
		// TOOD: name: `${balenaosRef}.img`, // switch when inject.mjs select baseimage from manifest (currently hardcoded)
		name: `${balenaosRef}.gz`,
		mode: 644,
		size: balenaosSize,
	});

	// TODO: optimizatinon : // streamBaseImage with all the metadata retrieval and processing (up to getLayers)
	await streamBaseImage({
		pipeStreamFrom: balenaosStream,
		pipeStreamTo: baseImageStreamEntry,
	});

	// get apps.json
	const appsJson = await getAppsJson({ app_id, release_id });

	// extract image_ids from appsJson
	const images = getImageIds({ appsJson, app_id, release_id });

	// get the supervisor image
	const baseImages = [
		{
			image_name: await getSupervisorImageNameFor({
				version: supervisorVersion,
				arch,
				api,
				token,
			}),
			image_hash: "latest",
			isSupervisor: true,
			supervisorVersion,
		},
	];

	// get manifests from registry for all images including pre-pre-loaded images (the ones inside the base image)
	const imagesbaseAndPreload = [...baseImages, ...images];
	const manifests = await getManifests(imagesbaseAndPreload, user, password);

	// precompute layers metadata for all layers
	const layers = await getLayers(manifests);

	// download and process layers, this is where most of the work is happening
	const layersInjectableFiles = await downloadProcessLayers({
		manifests,
		layers,
		packStream,
		injectPath,
	});

	// prepare images files
	const imagesInjectableFiles = getImagesConfigurationFiles(manifests);

	// generate repositories.json snipets for each images, merge everything and inject result
	const newRepositoriesJson = buildRepositories({ manifests });

	// prepare global metadata files
	const globalInjectable = [
		{
			header: { name: repositoriesJsonInjectionPath, mode: 644 },
			content: JSON.stringify(newRepositoriesJson),
		},
		{
			header: { name: "apps.json", mode: 644 },
			content: JSON.stringify(appsJson),
		},
	];

	// inject all metadata files and folders
	for (const { header, content } of [
		...layersInjectableFiles,
		...imagesInjectableFiles,
		...globalInjectable,
	]) {
		await packFile(header, content);
	}

	// close tarball
	await packStream.finalize();
	console.log("==> FINISHED @streamPreloadingAssets");
	console.log(
		"==> change consoleLevel log levels in logger.mjs for less verbose logging"
	);

	if (callback) callback();
};

export { streamPreloadingAssets };
