/** @type {import('next').NextConfig} */
const repoName = process.env.REPO_NAME || '';
const basePath = repoName ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
