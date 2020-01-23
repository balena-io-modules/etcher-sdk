#!/bin/bash
# vim: et sts=4 sw=4

# Usage: $0 [CMD...]

set -e
set -u

DEFAULT_CMD=./build-examples.sh
CMD=${@:-$DEFAULT_CMD}

DOCKER=docker
DOCKER_IMAGE=debian/etcher-sdk/example-builder

user_in_docker_group() {
    id -Gn | grep -q '\bdocker\b'
}


## main

user_in_docker_group || \
    DOCKER='sudo docker'

$DOCKER run --rm -it \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/$(pwd) \
    -w $(pwd) \
    $DOCKER_IMAGE \
    $CMD
