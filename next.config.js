/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  output: 'export',
  distDir: 'dist'
}

module.exports = nextConfig 