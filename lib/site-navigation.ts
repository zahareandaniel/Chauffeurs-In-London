import { SITE } from './site-config';

/** Primary IA — keep in sync across header, footer, and mobile. */
export const PRIMARY_NAV = [
  { href: '/blog', label: 'Journal' },
  { href: '/topics', label: 'Topics' },
  { href: '/chauffeur-services', label: 'Chauffeur services' },
  { href: '/featured', label: 'Featured operators' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'Standards' },
  { href: '/get-featured', label: 'Get featured' },
  { href: '/contact', label: 'Contact' },
] as const;

export const PLATFORM_LINKS = [
  { href: '/about', label: 'Editorial standards' },
  { href: '/get-featured', label: 'Request a feature' },
  { href: '/contact', label: 'Contact the desk' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export function siteTagline(): string {
  return SITE.descriptor;
}
