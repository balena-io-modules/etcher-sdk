#!/bin/bash
# vim: et sts=4 sw=4

# Usage: $0 [EXAMPLE...]

set -e
set -u

DEFAULT_EXAMPLES="file-to-file http-zip scanner"
EXAMPLES=${@:-$DEFAULT_EXAMPLES}

log() { tput bold; echo "⏵⏵⏵ $@"; tput sgr0; }

log "Get dependency tree  --  [ ⏵ npm install ]"
export npm_config_cache=$(pwd)/node_cache
npm install

log "Package examples: $EXAMPLES  --  [ ⏵ pkg ... ]"
export PKG_CACHE_PATH=$(pwd)/pkg_cache
for example in $EXAMPLES; do
    pkg -t node12-linux-x64 build/examples/${example}.js
done
