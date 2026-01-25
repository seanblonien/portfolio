import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
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
  // cacheComponents: true,
  experimental: {
    taint: true,
    turbopackFileSystemCacheForDev: true,
    inlineCss: true,
    cssChunking: true,
    optimizePackageImports: [
      'lucide-react',
      '@vercel/analytics',
      '@vercel/speed-insights',
      '@radix-ui',
    ],
  },
};

export default nextConfig;
