/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  // Custom domain - no basePath needed
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
