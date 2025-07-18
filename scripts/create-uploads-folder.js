// This script creates a folder in SharePoint for file uploads and gets its ID
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function main() {
    // Get configuration from environment variables
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    const folderName = process.env.UPLOADS_FOLDER_NAME || 'QuoteUploads';

    if (!tenantId || !clientId || !clientSecret || !siteId || !driveId) {
        console.error('Missing required environment variables');
        process.exit(1);
    }

    try {
        // Get access token
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

        // Check if folder already exists
        console.log(`Checking if ${folderName} folder exists...`);
        const checkFolderResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:/Shared%20Documents/${folderName}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (checkFolderResponse.ok) {
            // Folder exists
            const folderData = await checkFolderResponse.json();
            console.log(`Folder "${folderName}" already exists`);
            console.log(`Folder ID: ${folderData.id}`);
            console.log(`Add this to your .env.local file:`);
            console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folderData.id}`);
            return;
        }

        // Create the folder
        console.log(`Creating ${folderName} folder...`);
        const createFolderResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: folderName,
                    folder: {},
                    "@microsoft.graph.conflictBehavior": "rename"
                })
            }
        );

        if (!createFolderResponse.ok) {
            const errorData = await createFolderResponse.json();
            console.error('Failed to create folder:', errorData);
            process.exit(1);
        }

        const folderData = await createFolderResponse.json();
        console.log(`Successfully created "${folderName}" folder`);
        console.log(`Folder ID: ${folderData.id}`);
        console.log(`Add this to your .env.local file:`);
        console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folderData.id}`);

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
