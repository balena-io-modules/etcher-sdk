export interface Manifests {
	manifests: Manifest[];
}

export interface Manifest {
	schemaVersion: number;
	mediaType: string;
	config: ManifestConfig;
	layers: ManifestConfig[];
}

export interface ManifestConfig {
	mediaType: MediaType;
	size: number;
	digest: string;
}

export enum MediaType {
	ApplicationVndDockerContainerImageV1JSON = 'application/vnd.docker.container.image.v1+json',
	ApplicationVndDockerImageRootfsDiffTarGzip = 'application/vnd.docker.image.rootfs.diff.tar.gzip',
}

export interface ConfigManifestV2 {
	architecture: string;
	config: ContainerConf;
	container: string;
	container_config: ContainerConf;
	created: string;
	docker_version: string;
	history: History[];
	os: string;
	rootfs: Rootfs;
}

export interface ContainerConf {
	Hostname: string;
	Domainname: string;
	User: string;
	AttachStdin: boolean;
	AttachStdout: boolean;
	AttachStderr: boolean;
	Tty: boolean;
	OpenStdin: boolean;
	StdinOnce: boolean;
	Env: string[];
	Cmd: string[];
	Image: string;
	Volumes: null;
	WorkingDir: string;
	Entrypoint: string[];
	OnBuild: null;
	Labels: Labels;
}

export interface Labels {
	'io.balena.architecture': string;
	'io.balena.device-type': string;
	'io.balena.qemu.version': string;
}

export interface History {
	created: string;
	created_by: string;
	empty_layer?: boolean;
}

export interface Rootfs {
	type: string;
	diff_ids: string[];
}

export interface Manifest {
	schemaVersion: number;
	mediaType: string;
	config: ManifestConfig;
	layers: ManifestConfig[];
}

export interface ManifestConfig {
	mediaType: MediaType;
	size: number;
	digest: string;
}

export interface ManifestsAll {
	manifestInfosFromRegistry: ManifestInfosFromRegistry[];
}

export interface ManifestInfosFromRegistry {
	manifest: Manifest;
	digests: ManifestConfig[];
	configDigest: string;
	configManifestV2: ConfigManifestV2;
	imageId: string;
	imageName: string;
	diffIds: string[];
	imageUrl: string;
	token: string;
}

export interface ExtendedManifests extends ManifestInfosFromRegistry {
	imageHash: string;
	imageName: string;
	isSupervisor?: boolean;
	supervisorVersion?: string;
}

export interface Image {
	imageHash: string;
	imageName: string;
	isSupervisor?: boolean;
	supervisorVersion?: string;
}

export interface RepositoriesBase {
	Repositories: Repositories;
}

export interface Repositories {
	[key: string]: { [key: string]: string };
}
