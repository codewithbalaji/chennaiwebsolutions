import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com', 'ui.aceternity.com', 'images.unsplash.com','res.cloudinary.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
