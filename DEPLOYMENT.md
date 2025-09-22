# CapRover Deployment Guide

This guide will help you deploy the Cossim website to CapRover, a self-hosted PaaS platform.

## Prerequisites

1. **CapRover Server**: You need a CapRover instance running on your server
2. **Domain**: A domain or subdomain pointing to your CapRover server
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Deployment Files

The following files have been configured for CapRover deployment:

- `captain-definition` - CapRover deployment configuration
- `Dockerfile` - Multi-stage Docker build for Next.js
- `.dockerignore` - Optimizes Docker build by excluding unnecessary files
- `next.config.mjs` - Updated for standalone output mode

## Deployment Steps

### Method 1: Deploy from Git Repository (Recommended)

1. **Access CapRover Dashboard**
   - Open your CapRover dashboard (usually at `https://captain.yourdomain.com`)
   - Login with your credentials

2. **Create New App**
   - Go to "Apps" section
   - Click "Create New App"
   - Enter app name: `cossim-website` (or your preferred name)
   - Click "Create New App"

3. **Configure Git Deployment**
   - In your app settings, go to "Deployment" tab
   - Select "Deploy from Github/Bitbucket/Gitlab"
   - Enter your repository URL
   - Set branch to `main` (or your deployment branch)
   - Click "Save & Update"

4. **Trigger Deployment**
   - Click "Force Build" to start the deployment
   - Monitor the build logs for any issues

### Method 2: Deploy via Tarball Upload

1. **Prepare the Code**
   ```bash
   # Create a tarball of your project
   tar -czf cossim-website.tar.gz --exclude=node_modules --exclude=.git .
   ```

2. **Upload to CapRover**
   - In your app settings, go to "Deployment" tab
   - Select "Upload tar file"
   - Upload the `cossim-website.tar.gz` file
   - Click "Upload & Deploy"

## Environment Variables

Your application requires environment variables for Google Sheets integration and other features. Set them in the CapRover dashboard:

1. Go to your app settings
2. Navigate to "App Configs" tab
3. Add environment variables in the "Environmental Variables" section

### Required Environment Variables

**Basic Configuration:**
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_FORM_MODE=sheets
```

**Google Sheets API Configuration:**
```
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
```

### Setting Up Google Sheets Integration

1. **Follow Setup Guide**: Complete the steps in `GOOGLE_SHEETS_SETUP.md` to:
   - Create a Google Cloud project
   - Set up a service account
   - Create and configure your Google Spreadsheet
   - Generate the required credentials

2. **Configure Environment Variables in CapRover**:
   - Copy the values from your service account JSON file
   - Paste the `client_email` as `GOOGLE_SHEETS_CLIENT_EMAIL`
   - Paste the entire `private_key` (including headers) as `GOOGLE_SHEETS_PRIVATE_KEY`
   - Get your spreadsheet ID from the URL and set as `GOOGLE_SPREADSHEET_ID`

3. **Important Notes**:
   - The private key should include `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Keep the `\n` characters as literal `\n` (not actual line breaks)
   - Ensure your service account has "Editor" access to the spreadsheet

### Optional Environment Variables

**For Email Integration (if using Resend):**
```
RESEND_API_KEY=your_resend_api_key_here
```

**For No-Code Form Services (fallback):**
```
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-endpoint.com
```

### Environment Variables Template

Reference the `.env.production.example` file for a complete template with all required variables and detailed instructions.

## Domain Configuration

1. **Enable HTTPS**
   - In app settings, go to "HTTP Settings"
   - Enable "HTTPS" and "Force HTTPS"
   - Enable "Websocket Support" if needed

2. **Custom Domain** (Optional)
   - In "HTTP Settings", add your custom domain
   - Make sure your domain's DNS points to your CapRover server

## Build Configuration

The Dockerfile is optimized for production with:
- Multi-stage build to reduce image size
- Node.js 20 Alpine base image
- PNPM package manager
- Standalone output for optimal Docker deployment
- Non-root user for security

## Monitoring and Logs

- **View Logs**: Go to your app → "Logs" tab
- **Monitor Resources**: Check "Monitoring" tab for CPU/Memory usage
- **App Info**: View deployment status and container information

## Troubleshooting

### Build Failures

1. **Check Build Logs**
   - Review the deployment logs in CapRover dashboard
   - Look for specific error messages

2. **Common Issues**
   - **Memory Issues**: Increase app memory in "App Configs"
   - **Build Timeout**: Increase build timeout in CapRover settings
   - **Dependencies**: Ensure all dependencies are in `package.json`

### Runtime Issues

1. **App Won't Start**
   - Check if port 3000 is correctly exposed
   - Verify environment variables
   - Review application logs

2. **Performance Issues**
   - Monitor resource usage
   - Consider scaling up the container
   - Check for memory leaks in logs

### Google Sheets Integration Issues

1. **Contact Form Submission Failures**
   - **Error: "Google Spreadsheet ID not configured"**
     - Verify `GOOGLE_SPREADSHEET_ID` is set in environment variables
     - Check that the spreadsheet ID is correct (from the URL)
   
   - **Error: "Failed to submit contact form"**
     - Check that `GOOGLE_SHEETS_CLIENT_EMAIL` and `GOOGLE_SHEETS_PRIVATE_KEY` are set correctly
     - Verify the service account has "Editor" access to the spreadsheet
     - Ensure the private key format is correct with proper `\n` characters
   
   - **Authentication Errors**
     - Verify the service account email is correct
     - Check that the private key includes the full header and footer
     - Ensure the Google Sheets API is enabled in your Google Cloud project

2. **Data Not Appearing in Spreadsheet**
   - Check that the spreadsheet has the correct column headers (see GOOGLE_SHEETS_SETUP.md)
   - Verify the service account has been shared with the spreadsheet
   - Check the application logs for specific error messages

3. **API Quota Issues**
   - Monitor your Google Sheets API usage in Google Cloud Console
   - Consider implementing rate limiting if you expect high traffic
   - Check for any quota limits in your Google Cloud project

## Scaling

To scale your application:
1. Go to "App Configs"
2. Adjust "Instance Count" for horizontal scaling
3. Increase "Memory" and "CPU" for vertical scaling

## Backup and Updates

### Updating the Application
1. Push changes to your Git repository
2. In CapRover, click "Force Build" to redeploy
3. Monitor the deployment process

### Backup
- CapRover automatically keeps previous versions
- You can rollback to previous deployments if needed

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **HTTPS**: Always enable HTTPS in production
3. **Updates**: Keep CapRover and your application dependencies updated
4. **Firewall**: Ensure proper firewall configuration on your server

## Support

For CapRover-specific issues:
- [CapRover Documentation](https://caprover.com/docs/)
- [CapRover GitHub](https://github.com/caprover/caprover)

For application-specific issues:
- Check the application logs in CapRover dashboard
- Review Next.js deployment documentation