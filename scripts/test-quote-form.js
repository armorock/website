// Test the quote form submission API
require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function testQuoteFormSubmission() {
  console.log('=== Quote Form Submission Test ===');
  
  try {
    // Create a small test file
    const testFilePath = path.join(__dirname, 'test-file.pdf');
    const testFileContent = Buffer.from('This is a test PDF file', 'utf8');
    fs.writeFileSync(testFilePath, testFileContent);
    
    // Read the file as base64
    const fileData = fs.readFileSync(testFilePath);
    const base64File = `data:application/pdf;base64,${fileData.toString('base64')}`;
    
    // Create test form data
    const formData = {
      firstName: 'Test',
      lastName: 'User',
      phoneNumber: '555-123-4567',
      company: 'Test Company',
      city: 'Test City',
      state: 'TS',
      rolePosition: 'Tester',
      email: 'test@example.com',
      projectDetails: 'This is a test submission from the API test script.',
      acknowledgement: true,
      fileData: base64File,
      fileName: 'test-file.pdf'
    };
    
    console.log('Submitting test form data...');
    
    // Submit the form data to the API endpoint
    const response = await fetch('http://localhost:3000/api/submit-quote-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const responseText = await response.text();
    
    try {
      const result = JSON.parse(responseText);
      
      if (!response.ok) {
        console.error('Form submission failed:', result);
        process.exit(1);
      }
      
      console.log('✅ Form submission successful!');
      console.log('Response:', JSON.stringify(result, null, 2));
    } catch (e) {
      console.log('Raw response:', responseText);
      if (!response.ok) {
        console.error('Form submission failed with status:', response.status);
        process.exit(1);
      }
    }
    
    // Clean up the test file
    fs.unlinkSync(testFilePath);
    console.log('Test file removed');
    
  } catch (error) {
    console.error('Error during form submission test:', error);
    process.exit(1);
  }
}

testQuoteFormSubmission();
