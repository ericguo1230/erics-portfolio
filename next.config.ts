import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/erics-portfolio' : '',
  assetPrefix: isProd ? "/erics-portfolio/" : "",

  trailingSlash: true,
  
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
