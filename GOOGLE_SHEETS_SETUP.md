# Google Sheets Integration Setup Guide

## Overview
This guide will help you set up Google Sheets integration for your contact form. Contact form submissions will be automatically saved to a Google Spreadsheet.

## Prerequisites
- Google account
- Google Cloud Console access
- A Google Spreadsheet to store the data

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `cossim-sheets-service`
   - Description: `Service account for Cossim contact form Google Sheets integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. In the "Credentials" page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Choose "JSON" format and click "Create"
6. Download the JSON file and keep it secure

## Step 4: Create and Configure Google Spreadsheet

1. Create a new Google Spreadsheet
2. Rename it to "Cossim Contact Form Submissions"
3. Set up the header row in Sheet1 with these columns:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Company
   F1: Service
   G1: Company Size
   H1: Message
   ```
4. Share the spreadsheet with your service account:
   - Click "Share" button
   - Add the service account email (from the JSON file: `client_email`)
   - Give it "Editor" permissions
   - Uncheck "Notify people"

## Step 5: Get Spreadsheet ID

1. Open your Google Spreadsheet
2. Copy the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```
   The SPREADSHEET_ID is the long string between `/d/` and `/edit`

## Step 6: Set Up Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following variables from your JSON key file:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here

# Set form mode to use Google Sheets
NEXT_PUBLIC_FORM_MODE=sheets
```

**Important Notes:**
- The private key should include the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Keep the quotes around the private key
- The `\n` characters in the private key should be literal `\n` (not actual line breaks)

## Step 7: Test the Integration

1. Start your development server: `pnpm dev`
2. Go to the contact page: `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Check your Google Spreadsheet to see if the data appears

## Troubleshooting

### Common Issues:

1. **"Failed to submit contact form" error:**
   - Check that all environment variables are set correctly
   - Verify the service account has access to the spreadsheet
   - Check the browser console for detailed error messages

2. **"Google Spreadsheet ID not configured" error:**
   - Make sure `GOOGLE_SPREADSHEET_ID` is set in `.env.local`

3. **Authentication errors:**
   - Verify the service account email and private key are correct
   - Ensure the private key format is correct (with `\n` characters)

4. **Permission errors:**
   - Make sure the service account has "Editor" access to the spreadsheet
   - Verify the spreadsheet is shared with the service account email

### Checking Logs:

1. Open browser developer tools (F12)
2. Go to the Console tab
3. Submit the form and check for any error messages
4. Server-side errors will appear in your terminal where you're running `pnpm dev`

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your service account JSON file secure
- The `.env.local` file is already in `.gitignore` by default in Next.js projects
- Consider using environment-specific configurations for production

## Data Structure

The spreadsheet will store data in this format:
- **Timestamp**: When the form was submitted (ISO format)
- **Name**: Contact's full name
- **Email**: Contact's email address
- **Phone**: Contact's phone number (optional)
- **Company**: Contact's company name (optional)
- **Service**: Selected service interest
- **Company Size**: Selected company size
- **Message**: Contact's message

## Next Steps

Once the integration is working:
1. Consider setting up email notifications when new submissions arrive
2. Add data validation and sanitization
3. Implement backup strategies for your data
4. Set up monitoring for failed submissions