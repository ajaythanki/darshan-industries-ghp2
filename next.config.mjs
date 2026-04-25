/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  // Configure for GitHub Pages deployment
  basePath: '/darshan-industries-ghp2',
  // Remove assetPrefix to fix public folder images
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
