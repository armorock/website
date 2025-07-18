// This script creates a new Excel file with a table for quote form submissions
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function main() {
    // Get configuration from environment variables
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    const excelFileName = process.env.QUOTE_EXCEL_FILE_NAME || 'QuoteFormSubmissions.xlsx';
    const worksheetName = process.env.QUOTE_EXCEL_WORKSHEET_NAME || 'QuoteRequests';
    const tableName = process.env.QUOTE_EXCEL_TABLE_NAME || 'QuoteFormSubmission';

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

        // Create Excel file
        console.log(`Creating Excel file: ${excelFileName}`);
        const createFileResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:/Shared%20Documents/${excelFileName}:/content`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                },
                body: Buffer.from('', 'utf8') // Empty Excel file
            }
        );

        if (!createFileResponse.ok) {
            const errorData = await createFileResponse.json();
            console.error('Failed to create Excel file:', errorData);
            process.exit(1);
        }

        const fileData = await createFileResponse.json();
        console.log(`Successfully created Excel file with ID: ${fileData.id}`);

        // Wait a moment for the file to be properly created
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Add worksheet
        console.log(`Creating worksheet: ${worksheetName}`);
        const worksheetResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${fileData.id}/workbook/worksheets`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: worksheetName
                })
            }
        );

        if (!worksheetResponse.ok) {
            const errorData = await worksheetResponse.json();
            console.error('Failed to create worksheet:', errorData);
            // Continue anyway, the default sheet might be usable
        }

        // Add table headers
        console.log(`Creating table: ${tableName}`);
        const headers = [
            'First Name', 
            'Last Name', 
            'Phone Number', 
            'Company', 
            'City', 
            'State', 
            'Role/Position', 
            'Email', 
            'Project Details', 
            'Acknowledgement', 
            'File URL', 
            'File Name', 
            'Submission Date'
        ];
        
        // Add table
        const addTableResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${fileData.id}/workbook/worksheets/${worksheetName}/tables/add`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: `A1:M1`,
                    hasHeaders: true
                })
            }
        );

        if (!addTableResponse.ok) {
            const errorData = await addTableResponse.json();
            console.error('Failed to create table:', errorData);
            process.exit(1);
        }

        const tableData = await addTableResponse.json();
        console.log(`Successfully created table with ID: ${tableData.id}`);

        // Add table headers
        const updateHeadersResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${fileData.id}/workbook/worksheets/${worksheetName}/range(address='A1:M1')`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    values: [headers]
                })
            }
        );

        if (!updateHeadersResponse.ok) {
            const errorData = await updateHeadersResponse.json();
            console.error('Failed to update headers:', errorData);
            process.exit(1);
        }

        // Rename the table
        const renameTableResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${fileData.id}/workbook/tables/${tableData.id}`,
            {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: tableName
                })
            }
        );

        if (!renameTableResponse.ok) {
            const errorData = await renameTableResponse.json();
            console.error('Failed to rename table:', errorData);
            // Continue anyway, the default name might be usable
        }

        console.log(`\nExcel setup complete!`);
        console.log(`Add these to your .env.local file:`);
        console.log(`QUOTE_EXCEL_FILE_ID=${fileData.id}`);
        console.log(`QUOTE_EXCEL_WORKSHEET_NAME=${worksheetName}`);
        console.log(`QUOTE_EXCEL_TABLE_NAME=${tableName}`);

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
