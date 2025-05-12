/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Always use the basePath in all environments
  basePath: '/portfolio',
  
  // Always use the assetPrefix in all environments for GitHub Pages
  assetPrefix: '/portfolio',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// Use CommonJS exports for .js files
module.exports = nextConfig;