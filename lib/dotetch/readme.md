# .Etch

## Generation

Entry is `index.ts`

You're responsible for managing the lifecycle :

1. call `prepareEtchStream`, it will return a "PackStream" [which is a `pack` from tar-stream](https://github.com/mafintosh/tar-stream).
2. pipe the stream from 1. to an output `packStream.pipe(outputStream)` (output stream can be a file, a http response, ...)
3. call `startEtchStream` with those mandatory parameters :
  - `packStream` (from previous step)
  - `baseImageStream` readable stream for the baseimage (either .img or a .img in a zip),
  - `baseImageSize` size of the baseImage in bytes,
  - `baseImageName` name of the baseImage file

4. wait for 2 to finish streaming the baseImage
5. stream any number of file you want to inject using `PackStream` from step 1. Those files will be injected on top of the base image's by etcher at flash. You need to place them at the right place in the stream which is :
   `/inject/**partitionNumber**/path/to/file`. At flash time, `/inject/` will be dropped and `**partitionNumber**` will determine in which partition your files will be written `/path/to/file` is relative to the root of that partition. You can use any function availble on a `tar-stream pack` (writing files, symlinks, hardlinks, folders, setting permissions, etc. ). Note that you don't need to spcecifically create folders before putting files in it, they will be created if they don't exist.

  Note that there's a few helper function in the lib: 
  - `promisePacker` which wraps `tar-stream.pack` in a promise so you can `await` it
  - `streamFiles` which lets you easily inject arbitrary files
  - `streamDockerAssets` which takes a list of docker images (and credentials) and stream them (cf section about docker)

6. call `closeEtchStream` to properly close the tar stream.

## Usage with Docker / Balena
This whole .etch feature has been developed by [balena](https://www.balena.io) in order to permet automatic preloading of balenaOS images with a user application (made of multiple docker images).

Therefore we have built an on-stream docker pull replacement which can be called using `streamDockerAssets`.

You first need to get the manifests for all images using `getManifestsForImages`. 
If your images are not public, you'll need to provide authentication, either a bearer token or a `{username: string, password: string}` basic auth object to retrieve your manifests and images.

## VERSION
First file pushed on the stream is `VERSION`. It contains a single string in the format `major:minor` (i.e. `1.0`).
It indicate to consumer what feature will be supported.

Minors should be compatible and majors indicates breaking changes.