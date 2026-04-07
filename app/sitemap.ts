import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-config';
import { getFeaturedCompanies } from '@/lib/featured-companies';
import { getMarketOperators } from '@/lib/market-operators';
import { PILLAR_COMPARISONS, PILLAR_GUIDES } from '@/lib/pillar-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl().replace(/\/$/, '');
  const now = new Date();

  const staticPaths = [
    '/',
    '/guides',
    '/comparisons',
    '/companies',
    '/featured',
    '/chauffeur-services',
    '/editorial-standards',
    '/methodology',
    '/advertise',
    '/get-featured',
    '/topics',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const guidePaths = PILLAR_GUIDES.map((g) => g.href);
  const comparisonPaths = PILLAR_COMPARISONS.map((c) => c.href);
  const companyPaths = getMarketOperators().map((o) => `/companies/${o.slug}`);
  const featuredPaths = getFeaturedCompanies().map((c) => `/featured/${c.slug}`);

  const all = Array.from(
    new Set([...staticPaths, ...guidePaths, ...comparisonPaths, ...companyPaths, ...featuredPaths]),
  );

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
