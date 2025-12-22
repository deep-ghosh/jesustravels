/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['jesustravel.me'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://jesustravel.me',
  },
  // Disable source maps in production for smaller bundle
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
