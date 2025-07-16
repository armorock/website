require('dotenv').config({ path: '.env.local' });
const axios = require('axios');

async function testSharePointAccess() {
  try {
    console.log('=== SharePoint Access Tester ===');
    console.log('This script tests if your app can access SharePoint with the current permissions.\n');

    // Load configuration from .env.local
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const tenantName = process.env.TENANT_NAME || 'yourcompany';
    
    console.log('Using configuration:');
    console.log(`- Tenant ID: ${tenantId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client ID: ${clientId ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Client Secret: ${clientSecret ? '✓ Set' : '✗ Missing'}`);
    console.log(`- Tenant Name: ${tenantName}`);
    
    // Step 1: Try getting token with resource parameter
    console.log('\n1. Attempting to get token with resource parameter...');
    
    const params1 = new URLSearchParams();
    params1.append('client_id', clientId);
    params1.append('resource', `https://${tenantName}.sharepoint.com`);
    params1.append('client_secret', clientSecret);
    params1.append('grant_type', 'client_credentials');
    
    let token;
    
    try {
      const tokenResponse1 = await axios.post(
        `https://login.microsoftonline.com/${tenantId}/oauth2/token`, // Note: using older v1 endpoint
        params1.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
      token = tokenResponse1.data.access_token;
      console.log('✅ Token acquired successfully with resource parameter');
      console.log(`Token type: ${tokenResponse1.data.token_type}`);
      console.log(`Expires in: ${tokenResponse1.data.expires_in} seconds`);
      console.log(`Resource: ${tokenResponse1.data.resource || 'Not specified'}`);
    } catch (error) {
      console.log('❌ Failed to get token with resource parameter');
      if (error.response) {
        console.log(`Status: ${error.response.status}`);
        console.log('Error data:', error.response.data);
      } else {
        console.log('Error:', error.message);
      }
      
      // Step 1b: Try with scope parameter instead
      console.log('\n1b. Attempting to get token with scope parameter...');
      
      const params2 = new URLSearchParams();
      params2.append('client_id', clientId);
      params2.append('scope', `https://${tenantName}.sharepoint.com/.default`);
      params2.append('client_secret', clientSecret);
      params2.append('grant_type', 'client_credentials');
      
      try {
        const tokenResponse2 = await axios.post(
          `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, // Using v2 endpoint
          params2.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        );
        
        token = tokenResponse2.data.access_token;
        console.log('✅ Token acquired successfully with scope parameter');
      } catch (error) {
        console.log('❌ Failed to get token with scope parameter');
        if (error.response) {
          console.log(`Status: ${error.response.status}`);
          console.log('Error data:', error.response.data);
        } else {
          console.log('Error:', error.message);
        }
        throw new Error('Could not acquire access token with either method');
      }
    }

    // Step 2: Test access to root site
    console.log('\n2. Testing access to root site...');
    
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
      
      console.log('✅ Successfully accessed root site!');
      console.log(`Root site URL: ${rootResponse.data.d.Url}`);
      console.log(`Root site ID: ${rootResponse.data.d.Id}`);
      
      // Step 3: List all available sites
      console.log('\n3. Listing all available sites...');
      
      const webResponse = await axios.get(
        `https://${tenantName}.sharepoint.com/_api/web/webs`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json;odata=verbose'
          }
        }
      );
      
      const sites = webResponse.data.d.results;
      
      if (sites && sites.length > 0) {
        console.log(`Found ${sites.length} sites:`);
        sites.forEach((site, index) => {
          console.log(`\n${index + 1}. ${site.Title}`);
          console.log(`   URL: ${site.ServerRelativeUrl}`);
          console.log(`   Created: ${site.Created}`);
        });
        
        console.log('\nUse one of these site names in your .env.local file');
      } else {
        console.log('No subsites found. Your root site is the only available site.');
      }
    } catch (error) {
      console.log('❌ Failed to access SharePoint site');
      if (error.response) {
        console.log(`Status: ${error.response.status}`);
        console.log('Error data:', error.response.data);
      } else {
        console.log('Error:', error.message);
      }
    }
    
  } catch (error) {
    console.error('Error during SharePoint access test:');
    console.error(error.message);
  }
}

testSharePointAccess().catch(console.error);
