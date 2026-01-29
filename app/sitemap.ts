import { MetadataRoute } from 'next';
import { content } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = content.meta.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
