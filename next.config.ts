import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io', 'assets.aceternity.com', 'ui.aceternity.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
