#!/bin/bash
cd "$(dirname "$0")"
cd ..
# Install node-fetch if not already installed
if ! npm list node-fetch &>/dev/null; then
  echo "Installing node-fetch..."
  npm install node-fetch@2
fi

# Check if a folder name was passed as an argument
if [ $# -eq 1 ]; then
  node scripts/find-folder-id.js "$1"
else
  node scripts/find-folder-id.js
fi
