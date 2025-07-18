#!/bin/bash
cd "$(dirname "$0")"
cd ..

echo "Getting SharePoint IDs and Excel file information..."
./get-ids-graph.sh | grep -A 3 "Armorock_Get_A_Quote_Form.xlsx"

if [ $? -eq 0 ]; then
  echo ""
  echo "======================================"
  echo "Copy the File ID above for QUOTE_EXCEL_FILE_ID in your .env.local"
  echo "Also add QUOTE_EXCEL_WORKSHEET_NAME=Sheet1 (or the actual worksheet name)"
  echo "And QUOTE_EXCEL_TABLE_NAME=QuoteFormSubmission"
  echo "======================================"
else
  echo "Excel file not found in the output"
fi
