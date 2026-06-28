import type { SiteConfig } from '@/types';

function getSiteUrl(): string {
  if (process.env.DEPLOY_TARGET === 'github') {
    return 'https://nourhenebenothmen22.github.io/docker-mastery-course';
  }
  return 'https://docker-mastery.vercel.app';
}

export const siteConfig: SiteConfig = {
  name: 'Docker Mastery',
  description:
    'Master Docker from fundamentals to real-world production. Learn containers, images, Docker Compose, networking, volumes, and CI/CD with hands-on labs.',
  url: getSiteUrl(),
  author: {
    name: 'Nourhene Ben Othmen',
    linkedin: 'https://www.linkedin.com/in/nourhene-ben-othmen-dev/',
    github: 'https://github.com/Nourhenebenothmen22',
    instagram: 'https://www.instagram.com/nourhene_ben_othmen/',
    whatsapp: 'https://wa.me/21832010',
  },
};
