/**
 * Cover resolution: DB `cover_image_url` → else per-slug AI art in /images/blog/ai → else Mercedes stock photos.
 * AI artwork is generated (no real vehicle branding); stock photos CC BY-SA 4.0, see mercedes-*.jpg comment below.
 */

/** One AI hero image per seeded article slug (JPEGs in `public/images/blog/ai/`). */
const AI_COVER_BY_SLUG: Record<string, string> = {
  'best-chauffeur-services-london-2025': '/images/blog/ai/best-chauffeur-services-london-2025.jpg',
  'heathrow-airport-transfers-complete-guide':
    '/images/blog/ai/heathrow-airport-transfers-complete-guide.jpg',
  'corporate-chauffeur-hire-london': '/images/blog/ai/corporate-chauffeur-hire-london.jpg',
  'wedding-car-hire-london': '/images/blog/ai/wedding-car-hire-london.jpg',
  'gatwick-airport-transfers-london': '/images/blog/ai/gatwick-airport-transfers-london.jpg',
  'black-car-service-london-vs-black-cab':
    '/images/blog/ai/black-car-service-london-vs-black-cab.jpg',
  'chauffeur-services-london-events': '/images/blog/ai/chauffeur-services-london-events.jpg',
  'london-city-airport-transfers': '/images/blog/ai/london-city-airport-transfers.jpg',
};

/** Fallback when slug has no AI cover and no DB URL (CC BY-SA 4.0, Wikimedia Commons). */
const DEFAULT_COVERS = [
  '/images/blog/mercedes-s-class-w223.jpg',
  '/images/blog/mercedes-v-class-w447.jpg',
] as const;

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** Local path or remote URL to show as the article cover. */
export function articleCoverSrc(article: {
  slug: string;
  cover_image_url: string | null;
}): string {
  if (article.cover_image_url) return article.cover_image_url;
  const ai = AI_COVER_BY_SLUG[article.slug];
  if (ai) return ai;
  return DEFAULT_COVERS[slugHash(article.slug) % DEFAULT_COVERS.length];
}

export function articleCoverAbsoluteUrl(
  article: { slug: string; cover_image_url: string | null },
  siteOrigin: string,
): string {
  const src = articleCoverSrc(article);
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const base = siteOrigin.replace(/\/$/, '');
  return `${base}${src}`;
}
