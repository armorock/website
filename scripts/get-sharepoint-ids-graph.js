require('dotenv').config({ path: '.env.local' });
const axios = require('axios');

async function getSharePointIDsWithGraph() {
  try {
    console.log('=== SharePoint ID Finder (Using Microsoft Graph API) ===');
    console.log('This script gets SharePoint IDs using Microsoft Graph API instead of SharePoint REST API.\n');

    // Load configuration from .env.local
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const tenantName = process.env.TENANT_NAME || 'armorockllc';
    const siteName = process.env.SITE_NAME || 'Marketing';
    
    console.log('Using configuration:');
    console.log(`- Tenant ID: ${tenantId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client ID: ${clientId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client Secret: ${clientSecret ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Tenant Name: ${tenantName}`);
    console.log(`- Site Name: ${siteName}`);
    
    // Step 1: Get Microsoft Graph API token
    console.log('\nStep 1: Acquiring Microsoft Graph API token...');
    
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('scope', 'https://graph.microsoft.com/.default');
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
      throw new Error('Failed to acquire Microsoft Graph access token');
    }
    
    const token = tokenResponse.data.access_token;
    console.log('✅ Microsoft Graph token acquired successfully');
    
    // Step 2: Get all sites to find the correct one
    console.log('\nStep 2: Searching for your SharePoint site...');
    
    // First try with exact site name
    let siteId = null;
    let driveId = null;
    let siteResponse = null;
    
    try {
      // Try the exact site path first
      siteResponse = await axios.get(
        `https://graph.microsoft.com/v1.0/sites/${tenantName}.sharepoint.com:/sites/${siteName}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        }
      );
      
      siteId = siteResponse.data.id;
      console.log('✅ Site found with exact name match!');
    } catch (error) {
      console.log(`❌ Could not find site at /sites/${siteName}`);
      
      try {
        // If site not found at /sites/siteName, try listing all sites
        console.log('\nListing all available sites...');
        const sitesResponse = await axios.get(
          'https://graph.microsoft.com/v1.0/sites?search=*',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          }
        );
        
        const sites = sitesResponse.data.value;
        if (sites && sites.length > 0) {
          console.log(`\nFound ${sites.length} sites:`);
          
          sites.forEach((site, index) => {
            console.log(`${index + 1}. ${site.displayName}`);
            console.log(`   URL: ${site.webUrl}`);
            console.log(`   Site ID: ${site.id}`);
            console.log('');
          });
          
          // Try to find a site that matches our site name
          const matchingSite = sites.find(site => 
            site.displayName.toLowerCase().includes(siteName.toLowerCase()) ||
            site.webUrl.toLowerCase().includes(`/${siteName.toLowerCase()}`)
          );
          
          if (matchingSite) {
            siteId = matchingSite.id;
            siteResponse = { data: matchingSite };
            console.log(`✅ Found a matching site: ${matchingSite.displayName}`);
          } else {
            // Use the first site as fallback
            siteId = sites[0].id;
            siteResponse = { data: sites[0] };
            console.log(`⚠️ No exact match found. Using the first site: ${sites[0].displayName}`);
          }
        } else {
          throw new Error('No SharePoint sites found. Please verify permissions.');
        }
      } catch (listError) {
        console.log('❌ Failed to list sites');
        if (listError.response) {
          console.log(`Status: ${listError.response.status}`);
          console.log('Error data:', listError.response.data);
        } else {
          console.log('Error:', listError.message);
        }
        throw new Error('Could not find any SharePoint sites');
      }
    }
    
    // Display site information
    console.log('\nSITE INFORMATION:');
    console.log('-----------------');
    console.log(`Site Name: ${siteResponse.data.displayName}`);
    console.log(`Site URL: ${siteResponse.data.webUrl}`);
    console.log(`Site ID: ${siteId}`);
    
    // Step 3: Get drives (document libraries)
    console.log('\nStep 3: Fetching document libraries...');
    
    const drivesResponse = await axios.get(
      `https://graph.microsoft.com/v1.0/sites/${siteId}/drives`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    );
    
    const drives = drivesResponse.data.value;
    
    if (drives && drives.length > 0) {
      console.log('✅ Document libraries retrieved successfully');
      console.log(`\nFound ${drives.length} document libraries:`);
      
      drives.forEach((drive, index) => {
        console.log(`${index + 1}. ${drive.name}`);
        console.log(`   Drive ID: ${drive.id}`);
        console.log(`   Drive Type: ${drive.driveType}`);
        console.log(`   Web URL: ${drive.webUrl}`);
        console.log('');
      });
      
      // Use Documents library or the first available
      const docsLibrary = drives.find(drive => 
        drive.name === 'Documents' || drive.name === 'Shared Documents'
      ) || drives[0];
      
      driveId = docsLibrary.id;
      console.log(`Using document library: ${docsLibrary.name} (ID: ${driveId})`);
      
      // Step 4: List Excel files
      console.log('\nStep 4: Checking for Excel files...');
      
      const filesResponse = await axios.get(
        `https://graph.microsoft.com/v1.0/drives/${driveId}/root/children`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        }
      );
      
      const files = filesResponse.data.value;
      const excelFiles = files.filter(file => 
        file.name.endsWith('.xlsx') || file.name.endsWith('.xls')
      );
      
      if (excelFiles.length > 0) {
        console.log(`\nFound ${excelFiles.length} Excel files:`);
        
        excelFiles.forEach((file, index) => {
          console.log(`${index + 1}. ${file.name}`);
          console.log(`   File ID: ${file.id}`);
          console.log(`   Web URL: ${file.webUrl}`);
          console.log('');
        });
        
        const fileId = excelFiles[0].id;
        console.log(`Using Excel file: ${excelFiles[0].name} (ID: ${fileId})`);
        
        // Print all IDs needed for the .env file
        console.log('\n=== COPY THESE VALUES TO YOUR .env.local FILE ===');
        console.log(`SHAREPOINT_SITE_ID=${siteId}`);
        console.log(`SHAREPOINT_DRIVE_ID=${driveId}`);
        console.log(`EXCEL_FILE_ID=${fileId}`);
        console.log('================================================\n');
      } else {
        console.log('No Excel files found in this library.');
        
        // Print site and drive IDs anyway
        console.log('\n=== COPY THESE VALUES TO YOUR .env.local FILE ===');
        console.log(`SHAREPOINT_SITE_ID=${siteId}`);
        console.log(`SHAREPOINT_DRIVE_ID=${driveId}`);
        console.log('# No Excel files found. Upload an Excel file first or create one via the API');
        console.log('================================================\n');
      }
    } else {
      console.log('No document libraries found in this site.');
    }
  } catch (error) {
    console.error('Error fetching SharePoint IDs:');
    if (error.response) {
      console.log(`Status code: ${error.response.status}`);
      console.log('Response data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('Error message:', error.message);
      console.log('Stack trace:', error.stack);
    }
  }
}

getSharePointIDsWithGraph().catch(console.error);
