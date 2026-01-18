/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/milk-honey',
  assetPrefix: '/milk-honey',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Disable trailing slash for GitHub Pages compatibility
  trailingSlash: false,
};

module.exports = nextConfig;
