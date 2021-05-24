Overall, the structure of the etcher sdk is fairly simple.

This document is a work in progress, so feedback is appreciated.

The most important class you need to remember is `SourceDestination`. This is where the magic happens, and what you need to extend in order to add a device, file, etc. to which the etcher sdk can read/write from.

The class is called `SourceDestination` because it can be either a source or destination to which you can read/write from/to.

If a device can only be read from, you would only implement the `read` functionality, and vice versa for `write`s.

