# .Etch

## Genration

Entry is `dotEtchStream.ts`

You're responsible for managing the lifecycle :

1. call `prepareEtchStream` passing an writable stream (i.e. response to an http query), it will return a "PackStream" [which is a `pack` from tar-stream](https://github.com/mafintosh/tar-stream).
2. call `startEtchStream` with those mandatory parameters :

- `packStream` (from previous step)
  - `baseImageStream` readable stream for the baseimage (either .img or a .img in a zip),
  - `baseImageSize` size of the baseImage in bytes,
  - `baseImageName` name of the baseImage file

3. wait for 2 to finish streaming the baseImage
4. stream any number of file you want to inject using `PackStream` from step 1. Those files will be injected on top of the base image's by etcher at flash. You need to place them at the right place in the stream which is :
   `/inject/**partitionNumber**/path/to/file`. At flash time, `/inject/` will be dropped and `**partitionNumber**` will determine in which partition you're file will be written `/path/to/file` is relative to the root of that partition. You can use any function availble on a `tar-stream pack` (writing files, symlinks, hardlinks, folders, setting permissions, etc. ). Note that you don't need to spcecifically create folders before putting files in it, they will be created if they don't exist.
5. call `closeEtchStream` to properly close the tar stream.

Balena Preload notes :

- 4.  call `streamPreloadAssets` from preloading in step 4.
