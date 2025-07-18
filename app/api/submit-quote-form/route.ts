import { NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

// Types for quote form data
interface QuoteFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company: string;
  city: string;
  state: string;
  rolePosition: string;
  email: string;
  projectDetails: string;
  acknowledgement: boolean;
  fileData?: string; // Base64 encoded file data
  fileName?: string;
}

// Configuration for Microsoft Graph API
const TENANT_ID = process.env.AZURE_TENANT_ID || '';
const CLIENT_ID = process.env.AZURE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET || '';
const SITE_ID = process.env.SHAREPOINT_SITE_ID || '';
const DRIVE_ID = process.env.SHAREPOINT_DRIVE_ID || '';
const EXCEL_FILE_ID = process.env.QUOTE_EXCEL_FILE_ID || process.env.EXCEL_FILE_ID || '';
const EXCEL_WORKSHEET_NAME = process.env.QUOTE_EXCEL_WORKSHEET_NAME || 'QuoteRequests';
const EXCEL_TABLE_NAME = process.env.QUOTE_EXCEL_TABLE_NAME || 'QuoteFormSubmission';
const UPLOADS_FOLDER_ID = process.env.SHAREPOINT_UPLOADS_FOLDER_ID || '';

// Get access token for Microsoft Graph API
async function getAccessToken(): Promise<string> {
  const tokenEndpoint = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  
  const formData = new URLSearchParams({
    client_id: CLIENT_ID,
    scope: 'https://graph.microsoft.com/.default',
    client_secret: CLIENT_SECRET,
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

// Create a Microsoft Graph client
async function getAuthenticatedClient(): Promise<Client> {
  const accessToken = await getAccessToken();
  
  return Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    }
  });
}

// Upload file to SharePoint
async function uploadFileToSharePoint(
  fileData: string,
  fileName: string
): Promise<string | null> {
  try {
    const client = await getAuthenticatedClient();
    
    // Remove data URI prefix to get just the Base64 content
    const base64Data = fileData.split(';base64,').pop() || '';
    
    // Convert Base64 to binary data
    const binaryData = Buffer.from(base64Data, 'base64');
    
    // Create a unique filename to avoid overwriting
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const uniqueFileName = `${timestamp}-${fileName}`;
    
    // Upload file to SharePoint
    const uploadResponse = await client
      .api(`/sites/${SITE_ID}/drives/${DRIVE_ID}/items/${UPLOADS_FOLDER_ID}:/${uniqueFileName}:/content`)
      .put(binaryData);
    
    console.log('File uploaded successfully:', uploadResponse);
    
    // Return the URL to the uploaded file or the file ID
    return uploadResponse.webUrl || uploadResponse.id || null;
  } catch (error) {
    console.error('Error uploading file to SharePoint:', error);
    return null;
  }
}

// Add row to Excel table
async function addRowToExcel(formData: QuoteFormData, fileUrl?: string): Promise<void> {
  try {
    const client = await getAuthenticatedClient();
    
    // Format data for Excel - convert boolean values to "Yes"/"No" strings
    const rowData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      company: formData.company,
      city: formData.city,
      state: formData.state,
      rolePosition: formData.rolePosition,
      email: formData.email,
      planSet: fileUrl || '', // URL to the uploaded plan set file
      projectDetails: formData.projectDetails || '',
      submissionDate: new Date().toISOString()
    };

    // Add row to Excel table
    await client
      .api(`/sites/${SITE_ID}/drives/${DRIVE_ID}/items/${EXCEL_FILE_ID}/workbook/worksheets/${EXCEL_WORKSHEET_NAME}/tables/${EXCEL_TABLE_NAME}/rows`)
      .post({
        values: [
          [
            rowData.firstName,
            rowData.lastName,
            rowData.phoneNumber,
            rowData.company,
            rowData.city,
            rowData.state,
            rowData.rolePosition,
            rowData.email,
            rowData.planSet,
            rowData.projectDetails
          ]
        ]
      });
      
    console.log('Data successfully added to Excel');
  } catch (error) {
    console.error('Error adding row to Excel:', error);
    throw error;
  }
}

// API route handler
export async function POST(req: Request) {
  try {
    // Check for required environment variables
    if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET || !SITE_ID || !DRIVE_ID || !EXCEL_FILE_ID) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const formData: QuoteFormData = await req.json();
    
    // Basic validation
    if (!formData.email || !formData.firstName || !formData.lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate that either plan set or project details are provided
    if (!formData.fileData && (!formData.projectDetails || !formData.projectDetails.trim())) {
      return NextResponse.json(
        { error: 'You must provide either a plan set, project details, or both' },
        { status: 400 }
      );
    }

    // Handle file upload if provided
    let fileUrl: string | null = null;
    if (formData.fileData && formData.fileName) {
      fileUrl = await uploadFileToSharePoint(formData.fileData, formData.fileName);
    }

    // Add form data to Excel
    await addRowToExcel(formData, fileUrl || undefined);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
