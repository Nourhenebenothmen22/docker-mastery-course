import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig;

  return [
    { url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${url}/roadmap`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${url}/commands`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${url}/labs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${url}/deployment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
