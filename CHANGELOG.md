## v0.1.0 - 2018-08-28

* Fix(ci): Install libudev-dev on ci [Alexis Svinartchouk]
* Fix(progress): Fallback to source progress on gzip streams [Alexis Svinartchouk]
* Fix(scanner): Export DriverlessDevice [Alexis Svinartchouk]
* Use the BlockDevice or File in read and write streams, not the fd [Alexis Svinartchouk]

## v0.1.7 - 2018-08-30

* Feat(gzip): Add isSizeEstimated=true in gzip images metadata [Alexis Svinartchouk]

## v0.1.6 - 2018-08-30

* Fix(block-write-stream): Fix block-write-stream tests [Alexis Svinartchouk]

## v0.1.5 - 2018-08-29

* Fix(block-write-stream): Write 1MiB blocks [Alexis Svinartchouk]

## v0.1.4 - 2018-08-29

* Fix(block-read-stream): Read 1MiB blocks instead of 64KiB blocks [Alexis Svinartchouk]

## v0.1.3 - 2018-08-28

* Update(drivelist): Update drivelist to ^6.4.1 [Alexis Svinartchouk]

## v0.1.2 - 2018-08-28

* Fix(file): Use BlockReadStream for File instances [Alexis Svinartchouk]

## v0.1.1 - 2018-08-28

* Fix(block-device): Don't unmount the drive before flashing on win32 [Alexis Svinartchouk]

* Fix(test): Don't crash if libusb is not available [Alexis Svinartchouk]
* Fix(examples): Fix the scanner example [Alexis Svinartchouk]
* Feat(progress): Report source file progress [Alexis Svinartchouk]
* Fix(progress): Fix makeClassEmitProgressEvents when start != 0 [Alexis Svinartchouk]
* Fix(lint): Add missing semicolons [Alexis Svinartchouk]
* Fix(examples): Update the spinner with the last progress event [Alexis Svinartchouk]
* Fix(lib): Fix type error with @types/bluebird@3.5.23 [Alexis Svinartchouk]
* Fix(lib): Fix getInnerSource for .DMG images [Alexis Svinartchouk]
* Chore(package): Clean build folder before building [Alexis Svinartchouk]
* Chore(package): Update readme, package, add license [Jonas Hermsmeier]
* Ci: Add .resinci.yml to control node build matrices [John (Jack) Brown]
* Fix(lib): Make block-write-stream chunk inputs [Jonas Hermsmeier]
* Chore(package): Add editorconfig [Jonas Hermsmeier]
* Refactor(constants): Reduce progress update frequency to 2 Hz [Jonas Hermsmeier]
