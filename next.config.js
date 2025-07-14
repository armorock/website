const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  optimizeFonts: true,
};

module.exports = nextConfig;
