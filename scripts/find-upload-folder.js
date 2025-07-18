// Script to find a specific folder in SharePoint
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function main() {
    // Get configuration from environment variables
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    
    // The folder we're looking for
    const folderName = "Website_Quote_Plan_Sets";

    if (!tenantId || !clientId || !clientSecret || !siteId || !driveId) {
        console.error('Missing required environment variables');
        process.exit(1);
    }

    try {
        // Get access token
        console.log('Getting access token...');
        const tokenResponse = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: clientId,
                scope: 'https://graph.microsoft.com/.default',
                client_secret: clientSecret,
                grant_type: 'client_credentials'
            })
        });

        if (!tokenResponse.ok) {
            const errorData = await tokenResponse.json();
            console.error('Token acquisition failed:', errorData);
            process.exit(1);
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
        console.log('Access token acquired successfully');

        // List all items in the root of the drive
        console.log(`\nListing all items in the drive root...`);
        const rootItemsResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!rootItemsResponse.ok) {
            const errorData = await rootItemsResponse.json();
            console.error('Failed to list items:', errorData);
            process.exit(1);
        }

        const rootItemsData = await rootItemsResponse.json();
        
        console.log(`Found ${rootItemsData.value.length} items in the drive root.`);
        
        // Check if our folder is in the root
        const rootFolder = rootItemsData.value.find(item => 
            item.name === folderName && item.folder
        );
        
        if (rootFolder) {
            console.log(`Found folder "${folderName}" in the root:`);
            console.log(`Folder ID: ${rootFolder.id}`);
            console.log(`\n=== ADD THIS TO YOUR .env.local FILE ===`);
            console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${rootFolder.id}`);
            console.log(`========================================`);
            return;
        }
        
        // If not in the root, check all folders in the root for our target folder
        const rootFolders = rootItemsData.value.filter(item => item.folder);
        console.log(`\nChecking ${rootFolders.length} folders in the root for "${folderName}"...`);
        
        for (const folder of rootFolders) {
            console.log(`Checking contents of folder: ${folder.name}`);
            
            const folderItemsResponse = await fetch(
                `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${folder.id}/children`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            
            if (!folderItemsResponse.ok) {
                console.log(`Error checking folder ${folder.name}: ${folderItemsResponse.statusText}`);
                continue;
            }
            
            const folderItemsData = await folderItemsResponse.json();
            const subFolders = folderItemsData.value.filter(item => item.folder);
            
            console.log(`Found ${folderItemsData.value.length} items in folder "${folder.name}", including ${subFolders.length} subfolder(s)`);
            
            // Check if our target folder is in this folder
            const targetFolder = folderItemsData.value.find(item => 
                item.name === folderName && item.folder
            );
            
            if (targetFolder) {
                console.log(`\n✅ Found folder "${folderName}" in folder "${folder.name}"!`);
                console.log(`Folder ID: ${targetFolder.id}`);
                console.log(`\n=== ADD THIS TO YOUR .env.local FILE ===`);
                console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${targetFolder.id}`);
                console.log(`========================================`);
                return;
            }
            
            // List all items in this folder so the user can see what's there
            console.log(`Items in folder "${folder.name}":`);
            folderItemsData.value.forEach(item => {
                console.log(`- ${item.name} (${item.folder ? "Folder" : "File"})`);
            });
        }
        
        // If we got here, the folder wasn't found
        console.log(`\n❌ The folder "${folderName}" was not found in the drive.`);
        console.log(`Please check the folder name and ensure it exists in your SharePoint site.`);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
