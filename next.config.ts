import Analyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = Analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // for static export
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactCompiler: true,
  poweredByHeader: false,
  reactStrictMode: true,
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    optimizeCss: true,
    cssChunking: true,
  },
});

export default nextConfig;
