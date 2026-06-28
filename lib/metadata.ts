import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

interface PageSEOParams {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
}: PageSEOParams): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle ?? `${title} | ${siteConfig.name}`,
      description: ogDescription ?? description,
      url,
      images: [
        {
          url: '/docker-logo.png',
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? `${title} | ${siteConfig.name}`,
      description: ogDescription ?? description,
      images: ['/docker-logo.png'],
    },
    alternates: {
      canonical: url,
    },
  };
}
