/** @type {import('next').NextConfig} */
const REPO_NAME = 'docker-mastery-course';

const isGithubPages = process.env.DEPLOY_TARGET === 'github';
const basePath = isGithubPages ? `/${REPO_NAME}` : '';
const assetPrefix = isGithubPages ? `/${REPO_NAME}/` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
