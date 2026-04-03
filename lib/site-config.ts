/** Site identity — editorial platform, not operator marketing. */
export const SITE = {
  name: 'Chauffeurs in London',
  descriptor: 'An editorial guide to premium ground transport in London',
  /** Used in metadata & JSON-LD */
  legalName: 'Chauffeurs in London',
  contactEmail:
    process.env.NEXT_PUBLIC_EDITORIAL_EMAIL || 'editorial@chauffeursinlondon.com',
} as const;

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL || 'https://chauffeursinlondon.com';
}
