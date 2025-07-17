# Get a Quote Form Integration

This document explains how to set up and test the Get a Quote form functionality, which includes file upload capabilities.

## Prerequisites

Before setting up the Get a Quote form, ensure you have completed the basic Excel integration setup as described in `excel-integration-setup.md`.

## Setup Steps

### 1. Create a folder for file uploads in SharePoint

The Get a Quote form allows users to upload project files, which will be stored in a SharePoint folder.

```bash
# Run the script to create an uploads folder in SharePoint
chmod +x setup-uploads-folder.sh
./setup-uploads-folder.sh
```

This script will:
1. Create a folder called "QuoteUploads" in your SharePoint site
2. Output the folder ID that should be added to your .env.local file

### 2. Create a dedicated Excel file for quote submissions

```bash
# Run the script to create the Excel file for quote submissions
chmod +x setup-quote-excel.sh
./setup-quote-excel.sh
```

This script will:
1. Create a new Excel file called "QuoteFormSubmissions.xlsx"
2. Create a worksheet called "QuoteRequests"
3. Set up a table with appropriate columns
4. Output the Excel file ID, worksheet name, and table name to add to your .env.local file

### 3. Update Environment Variables

Add the following environment variables to your `.env.local` file:

```
# From setup-uploads-folder.sh output
SHAREPOINT_UPLOADS_FOLDER_ID=your-folder-id

# From setup-quote-excel.sh output
QUOTE_EXCEL_FILE_ID=your-excel-file-id
QUOTE_EXCEL_WORKSHEET_NAME=QuoteRequests
QUOTE_EXCEL_TABLE_NAME=QuoteFormSubmission
```

## Form Features

The Get a Quote form includes several features:

1. **File Upload**: Users can upload project plans and specifications
   - Supports PDF, DOC/DOCX, JPG, and PNG files
   - Maximum file size: 10MB
   - Files are stored in SharePoint

2. **Project Details**: A text area where users can describe their project requirements

3. **Contact Information**: Standard contact fields similar to the Connect With Us form

## How It Works

1. User fills out the form and optionally uploads a file
2. On submission, the API:
   - Validates the form data
   - If a file is included, uploads it to the SharePoint folder
   - Records the submission in the Excel spreadsheet, including a link to the uploaded file

## Troubleshooting

If you encounter issues with the form:

- **File Upload Issues**
  - Check browser console for errors
  - Verify the file meets size and type requirements
  - Ensure the SHAREPOINT_UPLOADS_FOLDER_ID is correctly set

- **Form Submission Issues**
  - Check server logs for errors
  - Verify all environment variables are set correctly
  - Ensure the Excel file and table exist with the correct structure

- **Missing File Links in Excel**
  - The file URL column should contain a direct link to the file in SharePoint
  - If empty, check permissions on the uploads folder
