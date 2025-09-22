/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable typed routes for better TypeScript support
  typedRoutes: true,
  
  // Optimize images for production
  images: {
    domains: [], // Add your image domains here if needed
  },
};

export default nextConfig;