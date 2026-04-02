/**
 * Default hero images when `cover_image_url` is unset.
 * Sources (CC BY-SA 4.0, Wikimedia Commons):
 * - mercedes-s-class-w223.jpg — "Mercedes s-class w223 black (2).jpg"
 * - mercedes-v-class-w447.jpg — "2023 Mercedes-Benz V-Class 300d (W447) IMG 9814.jpg" (Alexander-93)
 */

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
