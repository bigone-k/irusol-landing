#!/usr/bin/env bash
set -euo pipefail

# Always run from the script directory.
cd "$(dirname "$0")"

echo "[1/3] install project..."
npm install

echo "[2/3] Building project..."
npm run build

echo "[3/3] Starting development server..."
npm run dev