/** Site identity: editorial platform, not operator marketing. */
export const SITE = {
  name: 'Chauffeurs in London',
  descriptor: 'An editorial guide to premium ground transport in London',
  /** Used in metadata & JSON-LD */
  legalName: 'Chauffeurs in London',
  contactEmail:
    process.env.NEXT_PUBLIC_EDITORIAL_EMAIL || 'info@chauffeursinlondon.co.uk',
} as const;

const CANONICAL_ORIGIN = 'https://www.chauffeursinlondon.co.uk';

/**
 * Absolute site origin (no trailing slash). Apex `chauffeursinlondon.co.uk` is normalised to `www`
 * so sitemaps, canonicals, and JSON-LD stay consistent even if env uses the bare domain.
 */
export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL || CANONICAL_ORIGIN;
  try {
    const u = new URL(raw);
    const isProdDomain =
      u.hostname === 'chauffeursinlondon.co.uk' || u.hostname === 'www.chauffeursinlondon.co.uk';
    if (isProdDomain) {
      u.protocol = 'https:';
      if (u.hostname === 'chauffeursinlondon.co.uk') {
        u.hostname = 'www.chauffeursinlondon.co.uk';
      }
    }
    const origin = `${u.protocol}//${u.hostname}${u.port ? `:${u.port}` : ''}`;
    return origin.replace(/\/$/, '');
  } catch {
    return CANONICAL_ORIGIN;
  }
}
