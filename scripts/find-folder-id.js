// Get SharePoint folder ID using Microsoft Graph API
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function main() {
    // Get configuration from environment variables
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    const folderName = process.argv[2] || 'Website_Quote_Plan_Sets'; // Accept folder name as command line argument

    if (!tenantId || !clientId || !clientSecret || !siteId || !driveId) {
        console.error('Missing required environment variables');
        console.log('Make sure you have AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, SHAREPOINT_SITE_ID, and SHAREPOINT_DRIVE_ID in your .env.local file');
        process.exit(1);
    }

    console.log('=== SharePoint Folder ID Finder ===');
    console.log(`Searching for folder: ${folderName}`);
    
    try {
        // Get access token
        console.log('\nStep 1: Acquiring Microsoft Graph API token...');
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
        console.log('✅ Microsoft Graph token acquired successfully');

        // Get all folders in the drive
        console.log('\nStep 2: Searching for your folder in SharePoint...');
        
        // First, try to find it directly
        const folderResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:/Shared%20Documents/${folderName}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (folderResponse.ok) {
            const folderData = await folderResponse.json();
            console.log('✅ Folder found with exact name match!');
            console.log('\nFOLDER INFORMATION:');
            console.log('-----------------');
            console.log(`Folder Name: ${folderData.name}`);
            console.log(`Folder ID: ${folderData.id}`);
            console.log(`Web URL: ${folderData.webUrl}`);
            
            console.log('\n=== COPY THIS VALUE TO YOUR .env.local FILE ===');
            console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folderData.id}`);
            console.log('===============================================');
            return;
        }
        
        // If not found directly, list all items and filter for folders
        console.log('Folder not found directly, searching in all items...');
        const itemsResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!itemsResponse.ok) {
            const errorData = await itemsResponse.json();
            console.error('Failed to get drive items:', errorData);
            process.exit(1);
        }

        const itemsData = await itemsResponse.json();
        
        // Filter for folders
        const folders = itemsData.value.filter(item => item.folder);
        
        console.log(`\nFound ${folders.length} folders in the root directory.`);
        
        // Look for our specific folder
        const targetFolder = folders.find(folder => folder.name === folderName);
        
        if (targetFolder) {
            console.log('✅ Folder found!');
            console.log('\nFOLDER INFORMATION:');
            console.log('-----------------');
            console.log(`Folder Name: ${targetFolder.name}`);
            console.log(`Folder ID: ${targetFolder.id}`);
            console.log(`Web URL: ${targetFolder.webUrl}`);
            
            console.log('\n=== COPY THIS VALUE TO YOUR .env.local FILE ===');
            console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${targetFolder.id}`);
            console.log('===============================================');
        } else {
            // If still not found, try to list all items in the drive recursively
            console.log('Folder not found in root directory. Searching in all items...');
            const allItemsResponse = await fetch(
                `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/root/children?$expand=children`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            
            if (!allItemsResponse.ok) {
                const errorData = await allItemsResponse.json();
                console.error('Failed to get all drive items:', errorData);
                process.exit(1);
            }
            
            const allItemsData = await allItemsResponse.json();
            
            console.log('Available items in the drive:');
            allItemsData.value.forEach(item => {
                console.log(`- ${item.name} (${item.folder ? 'Folder' : 'File'})`);
            });
            
            console.log('\n❌ The specified folder could not be found.');
            console.log('Please check the folder name and ensure it exists in your SharePoint site.');
        }

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
