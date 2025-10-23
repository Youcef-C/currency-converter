import type { NextConfig } from 'next';

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/|\/$/g, '') || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath et assetPrefix activés seulement si précisé (utile pour GitHub Pages)
  ...(repoBase
    ? {
        basePath: `/${repoBase}`,
        assetPrefix: `/${repoBase}/`,
      }
    : {}),
  trailingSlash: true,
  reactCompiler: true,
};

export default nextConfig;
