require('dotenv').config({ path: '.env.local' }); // Load your existing env variables
require('isomorphic-fetch');
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');

// Replace these with your actual values
const TENANT_NAME = process.env.TENANT_NAME || 'yourcompany'; // e.g., 'contoso' from contoso.sharepoint.com
const SITE_NAME = process.env.SITE_NAME || 'YourSiteName'; // The name of your SharePoint site
const EXCEL_FILE_NAME = process.env.EXCEL_FILE_NAME || 'FormSubmissions.xlsx'; // Your Excel file name

async function getSharePointIds() {
  try {
    // Initialize authentication using your existing credentials
    // Create an authentication provider
    const client = Client.init({
      authProvider: (done) => {
        // Call the callback with the token or error
        getAccessToken().then(token => {
          done(null, token);
        }).catch(error => {
          done(error, null);
        });
      }
    });

    // Function to get access token
    async function getAccessToken() {
      const tokenEndpoint = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`;
      
      const formData = new URLSearchParams({
        client_id: process.env.AZURE_CLIENT_ID,
        scope: 'https://graph.microsoft.com/.default',
        client_secret: process.env.AZURE_CLIENT_SECRET,
        grant_type: 'client_credentials'
      });

      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString()
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Token acquisition failed:', errorData);
        throw new Error('Failed to acquire access token');
      }

      const data = await response.json();
      return data.access_token;
    }
    
    console.log('Fetching site information...');
    
    // Step 1: Get site ID
    const site = await client.api(`/sites/${TENANT_NAME}.sharepoint.com:/sites/${SITE_NAME}`)
      .get();
    
    console.log('\nSITE INFORMATION:');
    console.log('-----------------');
    console.log(`Site Name: ${site.displayName}`);
    console.log(`Site ID: ${site.id}`);
    console.log(`Web URL: ${site.webUrl}`);
    
    // Step 2: Get drives (document libraries)
    const drives = await client.api(`/sites/${site.id}/drives`)
      .get();
    
    console.log('\nAVAILABLE DOCUMENT LIBRARIES:');
    console.log('-----------------------------');
    
    // Print all available drives/libraries
    drives.value.forEach((drive, index) => {
      console.log(`${index + 1}. ${drive.name}`);
      console.log(`   Drive ID: ${drive.id}`);
      console.log(`   Drive Type: ${drive.driveType}`);
      console.log(`   Web URL: ${drive.webUrl}`);
      console.log('');
    });
    
    // Assuming we want the first drive (usually "Documents")
    const selectedDrive = drives.value[0];
    
    // Step 3: List files in the root of the selected drive
    console.log(`\nFILES IN "${selectedDrive.name}":`)
    console.log('-----------------------------');
    
    const files = await client.api(`/sites/${site.id}/drives/${selectedDrive.id}/root/children`)
      .get();
    
    files.value.forEach((file, index) => {
      console.log(`${index + 1}. ${file.name} (${file.file ? 'File' : 'Folder'})`);
      console.log(`   File ID: ${file.id}`);
      console.log(`   Web URL: ${file.webUrl}`);
      console.log('');
    });
    
    // Step 4: Try to find the Excel file
    const excelFile = files.value.find(f => f.name === EXCEL_FILE_NAME);
    
    if (excelFile) {
      console.log('\nEXCEL FILE FOUND:');
      console.log('-----------------');
      console.log(`File Name: ${excelFile.name}`);
      console.log(`File ID: ${excelFile.id}`);
      console.log(`Web URL: ${excelFile.webUrl}`);
    } else {
      console.log(`\nExcel file "${EXCEL_FILE_NAME}" not found in the root folder.`);
      console.log('You may need to search in subfolders or check the file name.');
      console.log('Available files:');
      files.value.filter(f => f.file && f.name.endsWith('.xlsx')).forEach(f => {
        console.log(`- ${f.name} (ID: ${f.id})`);
      });
    }
    
    // Print summary of environment variables needed
    console.log('\n\n=== COPY THESE VALUES TO YOUR .env.local FILE ===');
    console.log(`AZURE_TENANT_ID=${process.env.AZURE_TENANT_ID}`);
    console.log(`AZURE_CLIENT_ID=${process.env.AZURE_CLIENT_ID}`);
    console.log(`AZURE_CLIENT_SECRET=<your-client-secret-here>`);
    console.log(`SHAREPOINT_SITE_ID=${site.id}`);
    console.log(`SHAREPOINT_DRIVE_ID=${selectedDrive.id}`);
    if (excelFile) {
      console.log(`EXCEL_FILE_ID=${excelFile.id}`);
    }
    console.log('================================================\n');
    
  } catch (error) {
    console.error('Error fetching SharePoint IDs:', error.message);
    if (error.response) {
      console.error('Response details:', JSON.stringify(error.response.data, null, 2));
    } else if (error.stack) {
      console.error('Stack trace:', error.stack);
    }
  }
}

getSharePointIds().catch(console.error);
