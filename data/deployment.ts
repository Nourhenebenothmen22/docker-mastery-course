import type { DeploymentGuide } from '@/types';

export const deploymentGuides: DeploymentGuide[] = [
  {
    title: 'GitHub Pages',
    description: 'Deploy as a static site with GitHub Actions. Requires static export configuration.',
  },
  {
    title: 'Netlify',
    description: 'Simpler deployment with automatic builds from Git. No static export required.',
  },
];
