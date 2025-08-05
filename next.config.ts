import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false
  }
};

export default nextConfig;
