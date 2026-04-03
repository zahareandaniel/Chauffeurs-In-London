import type { FeaturedCompany } from '@/lib/featured-companies';
import { getFeaturedCompanies, TROUV_SLUG } from '@/lib/featured-companies';

/**
 * Editor’s picks: Trouv Chauffeurs is always included; order rotates so no fixed “top spot”.
 * Uses ISO week for stable-but-rotation across deploys.
 */
export function getEditorsPicks(): FeaturedCompany[] {
  const all = getFeaturedCompanies();
  const trouv = all.find((c) => c.slug === TROUV_SLUG);
  const others = all.filter((c) => c.slug !== TROUV_SLUG);
  if (!trouv) return all;

  const week = getIsoWeek(new Date());
  const bucket = [trouv, ...others];
  const n = bucket.length;
  const offset = week % n;
  return [...bucket.slice(offset), ...bucket.slice(0, offset)];
}

function getIsoWeek(d: Date): number {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((+t - +y) / 86400000 + 1) / 7);
}

/** Subset for article “recommended services” block — always Trouv + three others, rotated. */
export function getRecommendedForArticle(): FeaturedCompany[] {
  const rotated = getEditorsPicks();
  const trouv = rotated.find((c) => c.slug === TROUV_SLUG)!;
  const rest = rotated.filter((c) => c.slug !== TROUV_SLUG);
  const pickThree = rest.slice(0, 3);
  const merged = [trouv, ...pickThree];
  const week = getIsoWeek(new Date());
  const o = week % merged.length;
  return [...merged.slice(o), ...merged.slice(0, o)];
}

/** Whether to add contextual internal links (SEO) toward Trouv’s profile — skip only if off-topic. */
export function showArticleContextualLinks(category: string | null): boolean {
  if (!category) return true;
  const c = category.toLowerCase();
  return (
    c.includes('airport') ||
    c.includes('corporate') ||
    c.includes('wedding') ||
    c.includes('event') ||
    c.includes('tip')
  );
}
