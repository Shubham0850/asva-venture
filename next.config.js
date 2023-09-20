/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingslash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '80',
        pathname: '/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
