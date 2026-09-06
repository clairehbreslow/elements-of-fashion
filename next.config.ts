import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/elements-of-fashion/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
