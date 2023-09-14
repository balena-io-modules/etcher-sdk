import { Pack, pack } from "tar-stream";
import { pullManifestsFromRegistry } from './registry';
import { ExtendedManifests, Image } from './interface-manifest';
import { computeDockerLayers, streamDockerLayers, Layer } from './layers';
import { AxiosBasicCredentials } from "axios";

/** dotEtch version, will be sent as the first file on stream */
const VERSION = '1.0'

/**
 * Main Processing function
 *
 * Beware that, as we're outputing to a tar stream, order of operation is important.
 * Operations can't be made async.
 *
 * Order of files in an `.etch` tar stream is :
 * 1. manifest
 * 2. base os image - can be zipped; name of the file should match the one specified in the manifest
 * 3. /inject/_partitions_/_foldersOrFilesToInject_ - injectables assets
 */

/**
 * PromisePacker
 * Promisify tar-stream.pack.entry ( https://www.npmjs.com/package/tar-stream )
 */

const promisePacker =
	(pack: Pack, injectFolder?: string) => (header: any, value: any) =>
		new Promise((resolve, reject) => {
			if (header.name.includes('sha256:')) {
				console.log(`=> FIXME!! pack header.name: ${header.name}`);
			}
			// add the root injectable folder in front of the name when injecting files
			if (injectFolder) {
				header.name = `${injectFolder}/${header.name}`;
			}
			pack.entry(header, value, (error: any) => {
				if (error) {
					reject(error);
				}
				resolve(true);
			});
		});

/** 
 * Prepare Etch Stream
 * Create the stream to be use by all other function
 * @param outputStream Writable output stream (can be a file or http response or ...) 
 * @returns tar-stream pack writable stream
 */
const prepareEtchStream = async (): Promise<Pack> => {
	const packStream = pack();

	// stream manifest
	const packer = promisePacker(packStream);
	await packer(
		{
			name: `/VERSION`,
			mode: 0o777,
		},
		VERSION
	);

	console.log("==> dotEtch Stream Ready @prepareEtchStream");
	return packStream;
};

const closeEtchStream = async (packStream: Pack) => {
	// close tarball
	await packStream.finalize();
	console.log("==> dotEtch Stream Closed @closeEtchStream");
};

const streamBaseImage = async (
	packStream: Pack,
	baseImageStream: NodeJS.ReadableStream,
	baseImageSize: number,
	baseImageName: string
): Promise<void> =>
	new Promise(async (resolve, reject) => {
		// Beware that knowing the file size in advance is mandatory
		const baseImageStreamEntry = packStream.entry({
			name: baseImageName,
			mode: 0o644,
			size: baseImageSize,
		});

		console.log("== Start streaming base image @streamBaseImage ==");

		baseImageStream.pipe(baseImageStreamEntry);

		baseImageStream.on("end", function () {
			// we're good we can continue the process
			console.log("== End of base image streaming @streamBaseImage ==");
			resolve();
		});

		baseImageStream.on("error", function (error) {
			// something went wrong
			reject(error);
		});
	});

/** 
 * Stream Preloading Docker Assets prepared at previous stage, 
 * needs to be done on a prepared DotEtch stream with a base image already streamed
 * (cf readme) */
const streamDockerAssets = async (
	packStream: Pack,
	dataPartition: number | string,
	manifests: ExtendedManifests[],
	layers: Layer[],
): Promise<void> =>
	new Promise(async (resolve, reject) => {
		try {
			console.log('==> STARTING @streamPreloadAssets');

			// prepare packer :
			const injectPath = `inject/${dataPartition}`;

			// download and process layers
			// this is where most of the work is happening
			// will stream content of the layers directly to packStream
			// everything before this point can be parallelise with streaming the base image
			// this step MUST be right AFTER the base image stream is done
			// will return a bunch of file to inject later (all the generated metadata file)
			const layersFilesToInject = await streamDockerLayers(
				manifests,
				layers,
				packStream,
				injectPath,
			);

			// prepare images files to inject (same as for layers but for images)
			const dockerImageOverlay2Imagedb = 'docker/image/overlay2/imagedb';
			const imagesFilesToInject = manifests
				.map(({ configManifestV2, imageId }: any) => {
					const shortImageId = imageId.split(':')[1];
					return [
						{
							header: {
								name: `${dockerImageOverlay2Imagedb}/content/sha256/${shortImageId}`,
								mode: 0o644,
							},
							content: configManifestV2, //this is the raw data as received from registry, if we parse as json then stringify the hash won't match anymore
						},
						{
							header: {
								name: `${dockerImageOverlay2Imagedb}/metadata/sha256/${shortImageId}/lastUpdated`,
								mode: 0o644,
							},
							content: new Date().toISOString(),
						},
					];
				})
				.flat();

			/**
			 * generate repositories.json snipets for each images, merge everything and prepare file to be injected
			 * /var/lib/docker/image/overlay2/repositories.json
			 * That file informs balena-engine of what images are availble in its local store
			 * and maps images name(s) (including tag) to an image digest.
			 *
			 * Here we generate a complete repositories.json for all the preloaded images, including the supervisor.
			 *
			 * We will overwrite the orignal repositories.json which has been created at the balenaos build.
			 *
			 * One small difference between the original and the one we create is that we don't tag the supevisor with its hash.
			 * Which shouldn't have any impact, but is worth noting "au cas où"
			 *
			 * Relative path of repositories.json as injected in the resin-data partition
			 * On a running device it would be /var/lib/docker/image/overlay2/repositories.json
			 * 
			 */

			const repositories: any = {};
			for (const {
				imageId,
				imageName,
				imageHash,
				isSupervisor,
				supervisorVersion,
			} of manifests) {
				// prepare repositories
				repositories[imageName] = {
					[`${imageName}:latest`]: `${imageId}`,
				};
				if (imageHash !== 'latest') {
					repositories[imageName][
						`${imageName}:@${imageHash}`
					] = `${imageId}`;
				}

				/* TODO: `isSupervisor` and `supervisorVersion`are both balena specific and can be kept undefined in all other situation
				 * including when using balena's hostApps (not yet supported on balenaos)
			 	 * Once balena moves to hostapps this exception can be remove
				 */
				if (isSupervisor) {
					repositories['balena_supervisor'] = {
						[`balena_supervisor:${supervisorVersion}`]: imageId,
					};
				}
			}

			// prepare other metadata files
			const generalFilesToInject = [
				{
					header: {
						name: 'docker/image/overlay2/repositories.json',
						mode: 0o644,
					},
					content: JSON.stringify({
						Repositories: repositories,
					}),
				},
			];

			console.log('---> Add metadata files and folders');
			// inject all metadata files and folders
			// one at a time on the stream
			await streamFiles(
				packStream,
				dataPartition,
				[
					...layersFilesToInject,
					...imagesFilesToInject,
					...generalFilesToInject,
				]
			);

			// we're done with the preload assets
			console.log('==> FINISHED @streamPreloadAssets');

			resolve();
		} catch (error) {
			console.log("couldn't make assets", error);
			reject();
		}
	});

	/** 
	 * Stream Preloading Arbitrary Assets
	 * needs to be done on a prepared DotEtch stream with a base image already streamed
	 * (cf readme) */
	const streamFiles = async (
		packStream: Pack,
		dataPartition: number | string,
		files: any[]
	): Promise<void> => new Promise(async (resolve, reject) => {
		try {
			console.log('==> STARTING @streamFiles');

			// prepare packer :
			const injectPath = `inject/${dataPartition}`;
			const packFile = promisePacker(packStream, injectPath); // promise
			
			for (const { header, content } of files) {
				await packFile(header, content);
			}

			resolve()

			console.log('==> FINISHED @streamFiles');
		} catch (error) {
			console.error(error)
			reject()
		}
	})

	const getManifestsForImages = (images: Image[], auth: AxiosBasicCredentials | string) => new Promise(async (resolve, reject) => {
		try {
			// get image manifests for all requested images
			const manifests: ExtendedManifests[] = [];
			console.log(`== Downloading Manifests @getManifests ==`);
			for (const image in images) {
				if (!Object.prototype.hasOwnProperty.call(images, image)) return
				
				const imageName = images[image].imageName;

				console.log(
					`=> ${parseInt(image, 10) + 1} / ${images.length} : ${imageName}`,
				);
					
				// auth is the credentials that we'll use to get a registry token, exchange api will be indicated by the registry
				const manifestInfo = await pullManifestsFromRegistry(
					imageName,
					auth,
				);
				manifests.push({
					...manifestInfo,
					...images[image],
				});
			}
			console.log(`== Downloading Manifests @getManifests DONE ==`);

			resolve(manifests);
		} catch(error) {
			console.log("Failed to get manifests", error)
			reject()
		}
	})

export { prepareEtchStream, streamBaseImage, streamFiles, closeEtchStream, streamDockerAssets, getManifestsForImages, computeDockerLayers};
