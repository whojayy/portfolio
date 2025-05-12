/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  basePath: '/portfolio',
  // Fix the syntax error in the condition
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// Use module.exports for .mjs files
export default nextConfig;