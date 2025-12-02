import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'erics-portfolio';

const nextConfig: NextConfig = {

  basePath: isProd ? `/${repoName}` : '',

  trailingSlash: false,

  output: 'export',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;