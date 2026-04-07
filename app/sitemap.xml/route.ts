import { siteUrl } from '@/lib/site-config';
import { getFeaturedCompanies } from '@/lib/featured-companies';
import { getMarketOperators } from '@/lib/market-operators';
import { PILLAR_COMPARISONS, PILLAR_GUIDES } from '@/lib/pillar-content';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const base = siteUrl().replace(/\/$/, '');
  const now = new Date().toISOString();

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

  const allPaths = Array.from(
    new Set([...staticPaths, ...guidePaths, ...comparisonPaths, ...companyPaths, ...featuredPaths]),
  );

  const urls = allPaths
    .map((path) => {
      const changefreq = path === '/' ? 'weekly' : 'monthly';
      const priority = path === '/' ? '1.0' : '0.7';
      const loc = escapeXml(`${base}${path}`);
      return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
