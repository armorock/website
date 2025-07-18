// Simple script to get SharePoint folder information
require('dotenv').config({ path: '.env.local' });
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

async function main() {
  try {
    // Get configuration from environment
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    const folderName = process.argv[2] || 'Website_Quote_Plan_Sets';

    console.log(`Looking for folder: ${folderName}`);
    console.log(`Using Site ID: ${siteId}`);
    console.log(`Using Drive ID: ${driveId}`);

    // Create credential
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    
    // Create authentication provider
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: ['https://graph.microsoft.com/.default']
    });
    
    // Initialize Graph client
    const graphClient = Client.initWithMiddleware({
      authProvider: authProvider
    });

    // List all items in the drive
    const items = await graphClient
      .api(`/sites/${siteId}/drives/${driveId}/root/children`)
      .get();

    console.log(`Found ${items.value.length} items in the drive root:`);

    // Find folders
    const folders = items.value.filter(item => item.folder);
    console.log(`Found ${folders.length} folders:`);
    
    folders.forEach((folder) => {
      console.log(`- ${folder.name} (ID: ${folder.id})`);
      if (folder.name === folderName) {
        console.log('\n=== FOUND THE FOLDER YOU NEED ===');
        console.log(`Folder Name: ${folder.name}`);
        console.log(`Folder ID: ${folder.id}`);
        console.log(`Add to your .env.local:`);
        console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folder.id}`);
      }
    });

    // Check if the folder is nested in another folder
    const allRootItems = items.value;
    console.log('\nAll root items:');
    
    for (const item of allRootItems) {
      console.log(`- ${item.name} (Type: ${item.folder ? 'Folder' : 'File'})`);
      
      // If this is a folder, check its contents
      if (item.folder) {
        try {
          const nestedItems = await graphClient
            .api(`/sites/${siteId}/drives/${driveId}/items/${item.id}/children`)
            .get();
          
          console.log(`  Contents of ${item.name}:`);
          
          for (const nestedItem of nestedItems.value) {
            console.log(`  - ${nestedItem.name} (Type: ${nestedItem.folder ? 'Folder' : 'File'})`);
            
            if (nestedItem.name === folderName) {
              console.log('\n=== FOUND THE FOLDER YOU NEED (NESTED) ===');
              console.log(`Folder Name: ${nestedItem.name}`);
              console.log(`Folder ID: ${nestedItem.id}`);
              console.log(`Add to your .env.local:`);
              console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${nestedItem.id}`);
            }
          }
        } catch (error) {
          console.log(`  Error getting contents of ${item.name}: ${error.message}`);
        }
      }
    }
    
    // Try to search directly for the folder
    try {
      console.log(`\nTrying to find folder '${folderName}' directly...`);
      
      // First try under Shared Documents
      const folderPath = encodeURIComponent(`Shared Documents/${folderName}`);
      const folder = await graphClient
        .api(`/sites/${siteId}/drives/${driveId}/root:/${folderPath}`)
        .get();
        
      console.log('Found folder:');
      console.log(`Name: ${folder.name}`);
      console.log(`ID: ${folder.id}`);
      console.log('\n=== FOLDER FOUND ===');
      console.log(`Add to your .env.local:`);
      console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folder.id}`);
    } catch (error) {
      console.log(`Error finding folder directly: ${error.message}`);
      
      try {
        // Try searching for it
        console.log(`\nSearching for folder named '${folderName}'...`);
        const searchResults = await graphClient
          .api(`/sites/${siteId}/drive/root/search(q='${folderName}')`)
          .get();
          
        console.log(`Search found ${searchResults.value.length} items`);
        
        const foundFolder = searchResults.value.find(item => 
          item.name === folderName && item.folder);
          
        if (foundFolder) {
          console.log('\n=== FOUND THE FOLDER YOU NEED ===');
          console.log(`Folder Name: ${foundFolder.name}`);
          console.log(`Folder ID: ${foundFolder.id}`);
          console.log(`Add to your .env.local:`);
          console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${foundFolder.id}`);
        } else {
          console.log('Folder not found in search results');
        }
      } catch (searchError) {
        console.log(`Search error: ${searchError.message}`);
      }
    }
    
    // Get Excel file info to confirm the file ID you're using
    console.log('\nChecking Excel file information:');
    const excelFileId = process.env.QUOTE_EXCEL_FILE_ID || '01NM6E4D5NWLKJ3V26NFDLUJJPSZQ5YJCK'; // From the get-ids-graph output
    
    try {
      const excelFile = await graphClient
        .api(`/sites/${siteId}/drives/${driveId}/items/${excelFileId}`)
        .get();
        
      console.log('Excel File Info:');
      console.log(`Name: ${excelFile.name}`);
      console.log(`ID: ${excelFile.id}`);
      
      // Get worksheets
      const worksheets = await graphClient
        .api(`/sites/${siteId}/drives/${driveId}/items/${excelFileId}/workbook/worksheets`)
        .get();
        
      console.log(`\nWorksheets in ${excelFile.name}:`);
      worksheets.value.forEach(sheet => {
        console.log(`- ${sheet.name} (ID: ${sheet.id})`);
      });
      
      // Get tables
      try {
        const tables = await graphClient
          .api(`/sites/${siteId}/drives/${driveId}/items/${excelFileId}/workbook/tables`)
          .get();
          
        console.log(`\nTables in ${excelFile.name}:`);
        tables.value.forEach(table => {
          console.log(`- ${table.name} (Worksheet: ${table.worksheet.name})`);
        });
      } catch (tablesError) {
        console.log(`Error getting tables: ${tablesError.message}`);
      }
    } catch (excelError) {
      console.log(`Error getting Excel file: ${excelError.message}`);
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
