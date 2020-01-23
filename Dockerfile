FROM debian:buster-slim

ARG DEBIAN_FRONTEND=noninteractive
ARG NODE_VERSION=v12.14.1

# Install tooling for "npm install"
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    build-essential \
    ca-certificates \
    git \
    python3 \
    wget \
    xz-utils

# Install Node.js
RUN wget -q -O- https://nodejs.org/dist/$NODE_VERSION/node-$NODE_VERSION-linux-x64.tar.xz | tar -xJ -C /opt

# Update environment
ENV PATH="/opt/node-$NODE_VERSION-linux-x64/bin:$PATH"
ENV NO_UPDATE_NOTIFIER=

# Install additional node packages
RUN npm install -g \
    license-checker \
    pkg
