#!/bin/zsh

echo "=== SharePoint ID Finder ==="
echo "This script will help you get the Site ID, Drive ID, and File ID for Microsoft Graph API integration."
echo ""

# Check if .env.local file exists
if [ ! -f .env.local ]; then
  echo "ERROR: .env.local file not found. Please create one using the template below:"
  echo ""
  cat .env.local.temp
  echo ""
  echo "Then run this script again."
  exit 1
fi

# Check if Azure AD credentials are set in .env.local
source .env.local
if [[ -z "$AZURE_TENANT_ID" || -z "$AZURE_CLIENT_ID" || -z "$AZURE_CLIENT_SECRET" ]]; then
  echo "ERROR: Azure AD credentials not set in .env.local file."
  echo "Please update your .env.local file with the following values:"
  echo "AZURE_TENANT_ID=your_tenant_id_here"
  echo "AZURE_CLIENT_ID=your_client_id_here"
  echo "AZURE_CLIENT_SECRET=your_client_secret_here"
  echo ""
  echo "Then run this script again."
  exit 1
fi

# Check if SharePoint configuration is set
if [[ -z "$TENANT_NAME" || -z "$SITE_NAME" ]]; then
  echo "WARNING: SharePoint configuration not fully set in .env.local file."
  echo "Using default values for SharePoint configuration."
  echo ""
fi

# Run the script
echo "Running SharePoint ID finder script..."
echo ""
node scripts/get-sharepoint-ids.js
