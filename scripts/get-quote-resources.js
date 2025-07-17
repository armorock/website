// Script to get Excel file information for the Get A Quote form
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

async function main() {
    // Get configuration from environment variables
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const siteId = process.env.SHAREPOINT_SITE_ID;
    const driveId = process.env.SHAREPOINT_DRIVE_ID;
    const excelFileName = 'Armorock_Get_A_Quote_Form.xlsx'; 

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

        // Find the Excel file by name
        console.log(`\nSearching for Excel file: ${excelFileName}`);
        const searchResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/search(q='${excelFileName}')`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!searchResponse.ok) {
            const errorData = await searchResponse.json();
            console.error('Search failed:', errorData);
            process.exit(1);
        }

        const searchData = await searchResponse.json();
        
        if (searchData.value.length === 0) {
            console.log('No files found matching the name');
            
            // Try listing all Excel files
            console.log('\nListing all Excel files in the drive...');
            const filesResponse = await fetch(
                `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );
            
            if (!filesResponse.ok) {
                const errorData = await filesResponse.json();
                console.error('Failed to list files:', errorData);
                process.exit(1);
            }
            
            const filesData = await filesResponse.json();
            const excelFiles = filesData.value.filter(file => 
                file.name.endsWith('.xlsx') || file.name.endsWith('.xls')
            );
            
            if (excelFiles.length === 0) {
                console.log('No Excel files found in the drive root');
            } else {
                console.log(`Found ${excelFiles.length} Excel files:`);
                excelFiles.forEach(file => {
                    console.log(`- ${file.name} (ID: ${file.id})`);
                });
            }
            
            return;
        }

        const excelFile = searchData.value.find(file => 
            file.name === excelFileName &&
            (file.file?.mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
            file.file?.mimeType === 'application/vnd.ms-excel')
        );

        if (!excelFile) {
            console.log('Excel file not found in search results');
            return;
        }

        console.log('Excel file found:');
        console.log(`Name: ${excelFile.name}`);
        console.log(`ID: ${excelFile.id}`);
        console.log(`Web URL: ${excelFile.webUrl}`);

        // Get worksheets
        console.log('\nFetching worksheets...');
        const worksheetsResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${excelFile.id}/workbook/worksheets`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!worksheetsResponse.ok) {
            const errorData = await worksheetsResponse.json();
            console.error('Failed to get worksheets:', errorData);
        } else {
            const worksheetsData = await worksheetsResponse.json();
            console.log(`Found ${worksheetsData.value.length} worksheets:`);
            worksheetsData.value.forEach(worksheet => {
                console.log(`- ${worksheet.name} (ID: ${worksheet.id})`);
            });

            // Save the first worksheet name for later
            const worksheetName = worksheetsData.value[0]?.name || 'Sheet1';

            // Get tables
            console.log('\nFetching tables...');
            const tablesResponse = await fetch(
                `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/items/${excelFile.id}/workbook/tables`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            if (!tablesResponse.ok) {
                const errorData = await tablesResponse.json();
                console.error('Failed to get tables:', errorData);
            } else {
                const tablesData = await tablesResponse.json();
                console.log(`Found ${tablesData.value.length} tables:`);
                
                let tableName = 'QuoteFormSubmission'; // Default table name
                
                tablesData.value.forEach(table => {
                    console.log(`- ${table.name} (Worksheet: ${table.worksheet.name})`);
                    if (table.name === 'QuoteFormSubmission') {
                        tableName = table.name;
                    }
                });

                console.log('\n=== COPY THESE VALUES TO YOUR .env.local FILE ===');
                console.log(`QUOTE_EXCEL_FILE_ID=${excelFile.id}`);
                console.log(`QUOTE_EXCEL_WORKSHEET_NAME=${worksheetName}`);
                console.log(`QUOTE_EXCEL_TABLE_NAME=${tableName}`);
                console.log('================================================');
            }
        }

        // Now try to find the uploads folder
        console.log('\nSearching for the uploads folder...');
        const folderName = 'Website_Quote_Plan_Sets';
        const folderSearchResponse = await fetch(
            `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/search(q='${folderName}')`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!folderSearchResponse.ok) {
            const errorData = await folderSearchResponse.json();
            console.error('Folder search failed:', errorData);
        } else {
            const folderSearchData = await folderSearchResponse.json();
            
            const folder = folderSearchData.value.find(item => 
                item.name === folderName && item.folder
            );
            
            if (folder) {
                console.log('Found uploads folder:');
                console.log(`Name: ${folder.name}`);
                console.log(`ID: ${folder.id}`);
                console.log(`Web URL: ${folder.webUrl}`);
                
                console.log('\n=== ADD THIS TO YOUR .env.local FILE ===');
                console.log(`SHAREPOINT_UPLOADS_FOLDER_ID=${folder.id}`);
                console.log('========================================');
            } else {
                console.log(`Folder '${folderName}' not found in search results`);
                
                // Try listing all folders
                console.log('\nListing all folders in the drive root...');
                const foldersResponse = await fetch(
                    `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children?$filter=folder ne null`,
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
                
                if (!foldersResponse.ok) {
                    const errorData = await foldersResponse.json();
                    console.error('Failed to list folders:', errorData);
                } else {
                    const foldersData = await foldersResponse.json();
                    console.log(`Found ${foldersData.value.length} folders in the root:`);
                    foldersData.value.forEach(folder => {
                        if (folder.folder) {
                            console.log(`- ${folder.name} (ID: ${folder.id})`);
                        }
                    });
                }
            }
        }

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
