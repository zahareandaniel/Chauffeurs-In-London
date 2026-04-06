import { SITE } from './site-config';

/** Primary IA: header and mobile drawer. */
export const PRIMARY_NAV = [
  { href: '/guides', label: 'Guides' },
  { href: '/comparisons', label: 'Comparisons' },
  { href: '/companies', label: 'Companies' },
  { href: '/editorial-standards', label: 'Editorial standards' },
] as const;

/** Right-aligned, visually quieter. */
export const SECONDARY_NAV = [{ href: '/advertise', label: 'Advertise' }] as const;

export const FOOTER_PRIMARY = [
  { href: '/guides', label: 'Guides' },
  { href: '/comparisons', label: 'Comparisons' },
  { href: '/companies', label: 'Companies' },
  { href: '/editorial-standards', label: 'Editorial standards' },
  { href: '/advertise', label: 'Advertise' },
  { href: '/get-featured', label: 'Get featured' },
] as const;

export const FOOTER_SECONDARY = [
  { href: '/methodology', label: 'Methodology' },
  { href: '/contact', label: 'Editorial contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/blog', label: 'Journal archive' },
] as const;

/** @deprecated Use FOOTER_PRIMARY / FOOTER_SECONDARY */
export const PLATFORM_LINKS = FOOTER_SECONDARY;

export function siteTagline(): string {
  return SITE.descriptor;
}
