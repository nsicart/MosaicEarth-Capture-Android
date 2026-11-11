#!/usr/bin/env bash
set -euo pipefail
output=${1:?Pass the path for the experimental Brush AAR}
source=https://raw.githubusercontent.com/SuleMareVientu/opensplat-android/1ea9bbb829d0a4d4a5e4783d3fec1eeb71834d90/samples/android-demo/libs/brush-aar-release.aar
expected=b86218bda0c3408328211ffde471c6543add711f9cba8f11419dd48978031ef1
temp=$(mktemp)
trap 'rm -f "$temp"' EXIT
curl --fail --silent --show-error --location "$source" -o "$temp"
printf '%s  %s\n' "$expected" "$temp" | sha256sum --check --status
install -m 0644 "$temp" "$output"
