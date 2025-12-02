import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'erics-portfolio'; // Ensure this matches your repo name exactly

const nextConfig: NextConfig = {
  // 1. USE ONLY BASEPATH
  basePath: isProd ? `/${repoName}` : '',
  
  // 2. REMOVE ASSETPREFIX (It is redundant and often causes double-pathing issues)
  // assetPrefix: isProd ? `/${repoName}/` : "", 

  // 3. CAREFUL WITH TRAILING SLASH
  // Try setting this to false first. If you need it for specific reasons, 
  // ensure your GitHub Actions workflow handles it correctly.
  trailingSlash: false,

  // 4. CHECK OUTPUT DIR
  output: 'export',
  
  // 5. REMOVE DISTDIR (unless you are 100% sure your deploy script uses it)
  // distDir: 'dist', 
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;