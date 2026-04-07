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
    '/insights',
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

  const HUB_PATHS = new Set(['/guides', '/comparisons', '/insights', '/companies']);
  const CORNERSTONE_PATHS = new Set([
    '/guides/chauffeur-services-london',
    '/guides/chauffeur-service-types-london',
    '/comparisons/uber-vs-chauffeur-london',
    '/comparisons/ride-hailing-vs-executive-chauffeur',
    '/methodology',
    '/editorial-standards',
  ]);

  const urlBlocks = allPaths.map((path) => {
    const changefreq = path === '/' || HUB_PATHS.has(path) ? 'weekly' : 'monthly';
    const priority = path === '/' ? '1.0' : HUB_PATHS.has(path) ? '0.9' : CORNERSTONE_PATHS.has(path) ? '0.8' : '0.7';
    const loc = escapeXml(`${base}${path}`);
    return (
      `  <url>\n` +
      `    <loc>${loc}</loc>\n` +
      `    <lastmod>${now}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority}</priority>\n` +
      `  </url>`
    );
  });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urlBlocks.join('\n')}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      // text/xml + nosniff: Safari often renders application/xml as a text dump; crawlers accept both.
      'Content-Type': 'text/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
