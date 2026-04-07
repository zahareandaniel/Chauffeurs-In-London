import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl().replace(/\/$/, '');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
