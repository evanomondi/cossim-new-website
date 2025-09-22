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

If your application requires environment variables, set them in the CapRover dashboard:

1. Go to your app settings
2. Navigate to "App Configs" tab
3. Add environment variables in the "Environmental Variables" section

Common variables you might need:
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

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