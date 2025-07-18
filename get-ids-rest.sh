#!/bin/zsh

echo "=== SharePoint ID Finder - Method 5 (REST API) ==="
echo "This script will help you get the Site ID, Drive ID, and File ID for Microsoft Graph API integration."
echo ""

# Check if .env.local file exists
if [ ! -f .env.local ]; then
  echo "ERROR: .env.local file not found. Please create one with your Azure credentials."
  exit 1
fi

# Run the script
node scripts/get-sharepoint-ids-rest.js
