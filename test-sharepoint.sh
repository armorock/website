#!/bin/zsh

echo "=== SharePoint Access Tester ==="
echo "This script will test if your app can access SharePoint with the current permissions."
echo ""

# Check if .env.local file exists
if [ ! -f .env.local ]; then
  echo "ERROR: .env.local file not found. Please create one with your Azure credentials."
  exit 1
fi

# Run the script
node scripts/test-sharepoint-access.js
