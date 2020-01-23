#!/bin/bash
# vim: et sts=4 sw=4

# Usage: $0
# Usage: http_proxy=http://172.17.0.1:3142 $0

set -e
set -u

DOCKER=docker
DOCKER_ARGS=()
DOCKER_IMAGE=debian/etcher-sdk/example-builder

user_in_docker_group() {
    id -Gn | grep -q '\bdocker\b'
}


## main

user_in_docker_group || \
    DOCKER='sudo docker'

[ "${http_proxy:-}" ] && \
    DOCKER_ARGS+=(--build-arg "http_proxy=$http_proxy")

$DOCKER build \
    "${DOCKER_ARGS[@]}" \
    --tag "$DOCKER_IMAGE" \
    .
