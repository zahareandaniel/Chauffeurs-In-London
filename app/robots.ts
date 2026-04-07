import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl().replace(/\/$/, '');
  const apex = base.replace('https://www.chauffeursinlondon.co.uk', 'https://chauffeursinlondon.co.uk');
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin'],
      },
    ],
    sitemap: [`${base}/sitemap.xml`, `${apex}/sitemap.xml`],
  };
}
