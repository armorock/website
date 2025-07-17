#!/bin/bash

# Script to extract folder ID from SharePoint URL

# The SharePoint URL
SHAREPOINT_URL="$1"

if [ -z "$SHAREPOINT_URL" ]; then
  echo "Please provide a SharePoint URL"
  echo "Usage: $0 <sharepoint-url>"
  exit 1
fi

# Extract the domain
DOMAIN=$(echo "$SHAREPOINT_URL" | grep -o 'https://[^/]*' | sed 's/https:\/\///')
echo "SharePoint Domain: $DOMAIN"

# Extract the site path
SITE_PATH=$(echo "$SHAREPOINT_URL" | grep -o '/sites/[^/]*' | sed 's/^\///')
echo "Site Path: $SITE_PATH"

# Extract the 'id' query parameter
ID_PARAM=$(echo "$SHAREPOINT_URL" | grep -o 'id=[^&]*' | sed 's/id=//')
echo "Raw ID Parameter: $ID_PARAM"

# URL decode the ID parameter
DECODED_PATH=$(python3 -c "import urllib.parse; print(urllib.parse.unquote('$ID_PARAM'))")
echo "Decoded Folder Path: $DECODED_PATH"

# Extract just the folder name (last part of the path)
FOLDER_NAME=$(basename "$DECODED_PATH")
echo "Folder Name: $FOLDER_NAME"

echo ""
echo "To get the actual SharePoint folder ID, you need to query the SharePoint API."
echo "The relative path to your folder appears to be:"
RELATIVE_PATH=$(echo "$DECODED_PATH" | sed "s|/sites/Marketing/||")
echo "$RELATIVE_PATH"
echo ""
echo "You can now use this information with the SharePoint REST API to get the folder ID."

# For Microsoft Graph API (requires authentication):
echo "Example Microsoft Graph API call (requires auth):"
echo "GET https://graph.microsoft.com/v1.0/sites/$DOMAIN:$SITE_PATH:/drive/root:/$RELATIVE_PATH"

# For SharePoint REST API (requires authentication):
SITE_URL="https://$DOMAIN/$SITE_PATH"
echo "Example SharePoint REST API call (requires auth):"
echo "GET $SITE_URL/_api/web/GetFolderByServerRelativeUrl('$DECODED_PATH')"
