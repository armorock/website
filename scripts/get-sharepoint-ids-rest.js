require('dotenv').config({ path: '.env.local' });
const axios = require('axios');

async function getSharePointIds() {
  try {
    console.log('=== SharePoint ID Finder (Method 5 - SharePoint REST API) ===');
    console.log('Fetching SharePoint IDs using SharePoint REST API...\n');

    // Load configuration from .env.local
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const tenantName = process.env.TENANT_NAME || 'yourcompany';
    const siteName = process.env.SITE_NAME || 'YourSiteName';
    
    console.log('Using configuration:');
    console.log(`- Tenant ID: ${tenantId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client ID: ${clientId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client Secret: ${clientSecret ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Tenant Name: ${tenantName}`);
    console.log(`- Site Name: ${siteName}`);
    console.log('\nStep 1: Acquiring access token...');

    // Step 1: Get access token using client credentials flow
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    // Use resource instead of scope for SharePoint access
    params.append('resource', `https://${tenantName}.sharepoint.com`);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');
    
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    if (!tokenResponse.data || !tokenResponse.data.access_token) {
      throw new Error('Failed to acquire access token');
    }
    
    const token = tokenResponse.data.access_token;
    console.log('✅ Access token acquired successfully');

    // Step 2a: First try to access the root site to verify permissions
    console.log('\nStep 2a: Verifying access to the root site...');
    try {
      const rootResponse = await axios.get(
        `https://${tenantName}.sharepoint.com/_api/site`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json;odata=verbose'
          }
        }
      );
      console.log('✅ Root site access verified successfully');
      console.log(`Root site URL: ${rootResponse.data.d.Url}`);
    } catch (error) {
      console.log('❌ Failed to access root site. This indicates a permissions issue.');
      if (error.response) {
        console.log(`Status: ${error.response.status}`);
        console.log(`Response data:`, error.response.data);
      }
      console.log('Will try to access the specific site anyway...');
    }

    // Step 2b: Get specific site information
    console.log('\nStep 2b: Fetching site information...');
    let siteResponse;
    try {
      siteResponse = await axios.get(
        `https://${tenantName}.sharepoint.com/sites/${siteName}/_api/site`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json;odata=verbose'
          }
        }
      );
      
      const siteId = siteResponse.data.d.Id;
      const siteUrl = siteResponse.data.d.Url;
      const webId = siteResponse.data.d.WebId;
    
    console.log('✅ Site information retrieved successfully');
    console.log('\nSITE INFORMATION:');
    console.log('-----------------');
    console.log(`Site Name: ${siteName}`);
    console.log(`Site URL: ${siteUrl}`);
    console.log(`Site ID: ${siteId}`);
    console.log(`Web ID: ${webId}`);
    
    // Create Microsoft Graph format Site ID
    const graphSiteId = `${tenantName}.sharepoint.com,${siteId},${webId}`;
    console.log(`\nMicrosoft Graph Site ID: ${graphSiteId}`);

    // Step 3: Get document library (drive) information
    console.log('\nStep 3: Fetching document libraries...');
    const librariesResponse = await axios.get(
      `https://${tenantName}.sharepoint.com/sites/${siteName}/_api/web/lists?$filter=BaseTemplate eq 101`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json;odata=verbose'
        }
      }
    );
    
    console.log('✅ Document libraries retrieved successfully');
    console.log('\nAVAILABLE DOCUMENT LIBRARIES:');
    console.log('-----------------------------');
    
    // Print all document libraries
    const libraries = librariesResponse.data.d.results;
    libraries.forEach((library, index) => {
      console.log(`${index + 1}. ${library.Title}`);
      console.log(`   Library ID: ${library.Id}`);
      console.log(`   Created: ${library.Created}`);
      console.log(`   Item Count: ${library.ItemCount}`);
      console.log('');
    });
    
    // Usually "Documents" or "Shared Documents" is the main library
    const documentsLibrary = libraries.find(lib => 
      lib.Title === 'Documents' || 
      lib.Title === 'Shared Documents' || 
      lib.Title.includes('Document')
    ) || libraries[0];
    
    console.log(`Using library: ${documentsLibrary.Title} (ID: ${documentsLibrary.Id})`);
    
    // Step 4: Get files in the library
    console.log('\nStep 4: Fetching files in the library...');
    const filesResponse = await axios.get(
      `https://${tenantName}.sharepoint.com/sites/${siteName}/_api/web/lists(guid'${documentsLibrary.Id}')/items?$expand=File&$select=Id,Title,File/Name,File/ServerRelativeUrl,File/UniqueId,File/Length`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json;odata=verbose'
        }
      }
    );
    
    const files = filesResponse.data.d.results.filter(item => item.File);
    
    console.log('✅ Files retrieved successfully');
    console.log(`\nFILES IN "${documentsLibrary.Title}" (${files.length} files):`);
    console.log('-----------------------------');
    
    // Print files with focus on Excel files
    const excelFiles = files.filter(file => file.File.Name.toLowerCase().endsWith('.xlsx'));
    
    if (excelFiles.length > 0) {
      console.log('\nEXCEL FILES:');
      excelFiles.forEach((file, index) => {
        console.log(`${index + 1}. ${file.File.Name}`);
        console.log(`   File ID: ${file.File.UniqueId}`);
        console.log(`   File Path: ${file.File.ServerRelativeUrl}`);
        console.log(`   File Size: ${(file.File.Length / 1024).toFixed(2)} KB`);
        console.log('');
      });
    } else {
      console.log('No Excel files found in this library.');
      
      // Show other files if no Excel files found
      console.log('\nOTHER FILES:');
      files.slice(0, 5).forEach((file, index) => {
        console.log(`${index + 1}. ${file.File.Name}`);
        console.log(`   File ID: ${file.File.UniqueId}`);
        console.log('');
      });
      
      if (files.length > 5) {
        console.log(`...and ${files.length - 5} more files`);
      }
    }
    
    // Step 5: Summary
    console.log('\n=== SUMMARY OF IDs FOR MICROSOFT GRAPH API ===');
    console.log(`SHAREPOINT_SITE_ID=${graphSiteId}`);
    console.log(`SHAREPOINT_DRIVE_ID=${documentsLibrary.Id}`);
    
    if (excelFiles.length > 0) {
      console.log(`EXCEL_FILE_ID=${excelFiles[0].File.UniqueId} # ${excelFiles[0].File.Name}`);
    } else {
      console.log('# No Excel files found. Upload your Excel file first, then run this script again');
    }
    
    console.log('\n=== COPY THESE VALUES TO YOUR .env.local FILE ===\n');
    
  } catch (error) {
    console.error('Error fetching SharePoint IDs:');
    if (error.response) {
      console.error(`Status code: ${error.response.status}`);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
  }
}

getSharePointIds().catch(console.error);
