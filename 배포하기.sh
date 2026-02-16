#!/usr/bin/env bash
set -euo pipefail

# Always run from the script directory.
cd "$(dirname "$0")"

DATE="$(date +%Y%m%d)"

git add .
git commit -m "push ${DATE}"
git push origin main