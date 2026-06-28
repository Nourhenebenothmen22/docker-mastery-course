import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import PageHeader from '@/components/shared/PageHeader';
import CodeBlock from '@/components/shared/CodeBlock';
import { createPageMetadata } from '@/lib/metadata';
import { GitHubIcon, ArrowRightIcon, CodeIcon } from '@/data/icons';

export const metadata: Metadata = createPageMetadata({
  title: 'Deployment Guide - GitHub Pages & Netlify',
  description:
    'Learn how to deploy your Next.js Docker course website to GitHub Pages and Netlify. Step-by-step guide with configuration files and CI/CD setup.',
  path: '/deployment',
});

export default function DeploymentPage() {
  return (
    <section className="section-padding">
      <Container>
        <PageHeader
          title="Deployment Guide"
          subtitle="Learn how to deploy this Next.js website to GitHub Pages and Netlify."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <a href="#github-pages" className="glass-card p-6 group">
            <div className="w-14 h-14 rounded-xl bg-docker-500/10 flex items-center justify-center text-docker-400 mb-4 group-hover:bg-docker-500/20 group-hover:scale-110 transition-all duration-300">
              <GitHubIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub Pages</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deploy as a static site with GitHub Actions. Requires static export configuration.
            </p>
            <span className="inline-flex items-center gap-1 text-docker-400 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
              View Guide <ArrowRightIcon className="w-4 h-4" />
            </span>
          </a>

          <a href="#netlify" className="glass-card p-6 group">
            <div className="w-14 h-14 rounded-xl bg-docker-500/10 flex items-center justify-center text-docker-400 mb-4 group-hover:bg-docker-500/20 group-hover:scale-110 transition-all duration-300">
              <CodeIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Netlify</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simpler deployment with automatic builds from Git. No static export required.
            </p>
            <span className="inline-flex items-center gap-1 text-docker-400 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
              View Guide <ArrowRightIcon className="w-4 h-4" />
            </span>
          </a>
        </div>

        <section id="github-pages" className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GitHubIcon className="w-8 h-8 text-gray-300" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deploy to GitHub Pages</h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full mb-8" />

          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">1. Static Export Configuration</h3>
              <p className="text-gray-400 text-sm mb-4">
                GitHub Pages serves only static files. Configure Next.js for static export in{' '}
                <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">next.config.js</code>:
              </p>
              <CodeBlock
                title="next.config.js"
                language="javascript"
                code={`/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;`}
              />
              <div className="mt-3 space-y-2">
                <p className="text-gray-400 text-sm">
                  <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">output: &apos;export&apos;</code>{' '}
                  generates a static <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">out/</code> folder.
                </p>
                <p className="text-gray-400 text-sm">
                  <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">images.unoptimized: true</code>{' '}
                  is required because GitHub Pages does not support Next.js Image Optimization.
                </p>
                <p className="text-gray-400 text-sm">
                  <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">trailingSlash: true</code>{' '}
                  ensures paths resolve correctly on GitHub Pages.
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">2. GitHub Repository Setup</h3>
              <p className="text-gray-400 text-sm mb-4">Create a repository and push your code:</p>
              <CodeBlock
                title="bash"
                language="bash"
                code={`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main`}
              />
              <p className="text-gray-400 text-sm mt-3">
                Go to Settings &gt; Pages and set Source to <strong>GitHub Actions</strong>.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">3. GitHub Actions Workflow</h3>
              <p className="text-gray-400 text-sm mb-4">
                Create{' '}
                <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">.github/workflows/deploy.yml</code>:
              </p>
              <CodeBlock
                title=".github/workflows/deploy.yml"
                language="yaml"
                code={`name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
        with:
          static_site_generator: next
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4`}
              />
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">4. Common Errors</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <p className="text-red-300 text-sm font-semibold">Image Optimization Error</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Next.js Image Optimization requires a server. Add{' '}
                    <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">images.unoptimized: true</code>{' '}
                    to next.config.js.
                  </p>
                </div>
                <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <p className="text-red-300 text-sm font-semibold">404 on Page Reload</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Add <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">trailingSlash: true</code>{' '}
                    to next.config.js or use a 404.html fallback.
                  </p>
                </div>
                <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <p className="text-red-300 text-sm font-semibold">No &quot;/&quot; path found</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Ensure your build output is set to{' '}
                    <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">./out</code> and uploaded correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="netlify">
          <div className="flex items-center gap-3 mb-6">
            <CodeIcon className="w-8 h-8 text-docker-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Deploy to Netlify</h2>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-docker-500 to-blue-600 rounded-full mb-8" />

          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">1. Netlify Configuration</h3>
              <p className="text-gray-400 text-sm mb-4">
                Create a{' '}
                <code className="text-docker-300 bg-dark-800 px-1.5 py-0.5 rounded">netlify.toml</code> file in the
                project root:
              </p>
              <CodeBlock
                title="netlify.toml"
                language="toml"
                code={`[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"`}
              />
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">2. Deploy via Git</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm">
                <li>
                  Create a Netlify account at{' '}
                  <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-docker-400 hover:underline">
                    app.netlify.com
                  </a>
                </li>
                <li>Click <strong>Add new site &gt; Import an existing project</strong></li>
                <li>Connect your GitHub repository</li>
                <li>
                  Netlify automatically detects settings from{' '}
                  <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">netlify.toml</code>
                </li>
                <li>Build command: <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">npm run build</code></li>
                <li>Publish directory: <code className="text-docker-300 bg-dark-800 px-1 py-0.5 rounded">out</code></li>
                <li>Click <strong>Deploy site</strong></li>
              </ol>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">3. Deploy via CLI</h3>
              <p className="text-gray-400 text-sm mb-4">
                Alternative: use the Netlify CLI for manual deployment.
              </p>
              <CodeBlock
                title="bash"
                language="bash"
                code={`npm install -g netlify-cli
netlify login
netlify init
npm run build
netlify deploy --prod --dir=out`}
              />
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">4. Environment Variables (Optional)</h3>
              <p className="text-gray-400 text-sm mb-4">
                If you need to set environment variables (e.g., API keys), configure them in Netlify under:
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Site settings &gt; Environment variables</strong>
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 p-6 glass-card">
          <h3 className="text-lg font-bold text-white mb-2">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-800 rounded-lg border border-white/5">
              <h4 className="text-docker-400 font-semibold mb-2">GitHub Pages</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>+ Free and integrated with GitHub</li>
                <li>+ Good for documentation sites</li>
                <li>- Requires static export</li>
                <li>- No server-side features</li>
                <li>- Image optimization disabled</li>
              </ul>
            </div>
            <div className="p-4 bg-dark-800 rounded-lg border border-white/5">
              <h4 className="text-docker-400 font-semibold mb-2">Netlify</h4>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>+ Easier setup for Next.js</li>
                <li>+ Supports server-side features</li>
                <li>+ Automatic CI/CD from Git</li>
                <li>+ Built-in form handling</li>
                <li>+ Preview deployments</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
