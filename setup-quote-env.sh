#!/bin/bash

# Set the environment variables needed for the Get a Quote form
# This assumes you've already set up the basic environment variables for SharePoint access

# Quote Excel file ID
QUOTE_EXCEL_FILE_ID="01NM6E4D5NWLKJ3V26NFDLUJJPSZQ5YJCK"  # From the output of get-ids-graph.sh for Armorock_Get_A_Quote_Form.xlsx
QUOTE_EXCEL_WORKSHEET_NAME="Sheet1"  # Default worksheet name, change if needed
QUOTE_EXCEL_TABLE_NAME="QuoteFormSubmission"  # The name of your table

# Create a temporary .env.updates file
cat > .env.updates << EOF
# Get a Quote Form configuration
QUOTE_EXCEL_FILE_ID=${QUOTE_EXCEL_FILE_ID}
QUOTE_EXCEL_WORKSHEET_NAME=${QUOTE_EXCEL_WORKSHEET_NAME}
QUOTE_EXCEL_TABLE_NAME=${QUOTE_EXCEL_TABLE_NAME}
# Note: You still need to manually add SHAREPOINT_UPLOADS_FOLDER_ID after finding the folder ID
EOF

# Display the necessary environment variables
echo "=== Add these to your .env.local file ==="
cat .env.updates
echo "========================================="
echo ""
echo "These values have also been saved to .env.updates"
echo ""
echo "IMPORTANT: You still need to find and add the SHAREPOINT_UPLOADS_FOLDER_ID"
echo "Visit your SharePoint site and locate the 'Website_Quote_Plan_Sets' folder"
echo "The ID can be found in the URL when viewing folder properties"

# Cleanup
# rm .env.updates
