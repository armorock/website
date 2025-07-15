# Setting Up Microsoft Graph API for Excel Integration

This guide walks you through setting up Azure AD app registration and Excel file preparation for the Contact Form submission feature.

## Step 1: Register an App in Azure Portal

1. Sign in to the [Azure Portal](https://portal.azure.com/)
2. Navigate to **Azure Active Directory** > **App registrations** > **New registration**
3. Fill in the following details:
   - **Name**: Armorock Website Form Integration
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: (Leave blank for now)
4. Click **Register**

## Step 2: Configure API Permissions

1. In your newly registered app, go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Choose **Application permissions**
5. Add the following permissions:
   - Files.ReadWrite.All
   - Sites.ReadWrite.All
   - User.Read.All
6. Click **Add permissions**
7. Click **Grant admin consent for [Your Organization]**

## Step 3: Create a Client Secret

1. Navigate to **Certificates & secrets**
2. Under **Client secrets**, click **New client secret**
3. Add a description and select an expiry period (e.g., "Form Integration Secret" for 12 months)
4. Click **Add**
5. **IMPORTANT**: Copy the secret value immediately and store it securely - you won't be able to see it again

## Step 4: Create an Excel File in OneDrive/SharePoint

1. Go to [OneDrive](https://onedrive.live.com/) or your SharePoint site
2. Create a new Excel file named "Form Submissions"
3. Create a table with the following columns:
   - First Name
   - Last Name
   - Phone Number
   - Company
   - City
   - State
   - Role/Position
   - Email
   - Lunch and Learns
   - Plant Tours
   - Virtual Meetings
   - Submission Date
4. Format the table as a proper Excel table (Insert > Table)
5. Name the table "FormSubmissionsTable" (Table Design > Table Name)
6. Save the file

## Step 5: Get the File ID

1. In OneDrive/SharePoint, right-click on the Excel file and select "Details" or "Properties"
2. Look for the file ID in the URL - it will be a long string of characters 
   (Example: `https://1drv.ms/x/s!AaBbCcDdEeFf1234567?e=abcdef` - the ID would be `AaBbCcDdEeFf1234567`)

## Step 6: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (copy from `.env.local.example`)
2. Add the following variables with your values:
   ```
   AZURE_TENANT_ID=your_tenant_id_here
   AZURE_CLIENT_ID=your_client_id_here
   AZURE_CLIENT_SECRET=your_client_secret_here
   EXCEL_FILE_ID=your_excel_file_id_here
   EXCEL_WORKSHEET_NAME=Sheet1
   EXCEL_TABLE_NAME=FormSubmissionsTable
   ```
   - The Tenant ID and Client ID can be found in the "Overview" page of your app registration
   - The Client Secret is the value you saved in Step 3
   - The File ID is what you found in Step 5
   - The Worksheet name is typically "Sheet1" unless you renamed it
   - The Table name should be "FormSubmissionsTable" as set in Step 4

## Step 7: Test the Integration

1. Restart your development server after adding environment variables
2. Submit a test form on the Connect with Us page
3. Check your Excel file to verify the data was added correctly
4. Check the console logs for any errors if the submission fails

## Troubleshooting

- **Permission errors**: Make sure you've granted admin consent for all required permissions
- **Authentication errors**: Verify your Tenant ID, Client ID, and Client Secret are correct
- **File not found**: Double-check the Excel File ID
- **Table not found**: Ensure the table name matches exactly what you set in Excel
- **Worksheet not found**: Confirm the worksheet name is correct (case-sensitive)
