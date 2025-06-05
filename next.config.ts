import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  typescript: {
    // Temporarily ignore TypeScript errors during development
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
