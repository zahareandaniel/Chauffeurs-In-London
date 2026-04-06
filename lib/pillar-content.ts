/**
 * Pillar guides and comparisons for homepage cards and cross-linking.
 * Read times are estimates for display only.
 */

export type PillarGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  href: string;
};

export type PillarComparison = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  href: string;
};

export const PILLAR_GUIDES: PillarGuide[] = [
  {
    slug: 'chauffeur-services-london',
    title: 'Chauffeur services in London',
    description:
      'What the capital’s executive ground transport market consists of, who uses it, and how to read quality without directory noise.',
    category: 'Market guide',
    readMinutes: 10,
    href: '/guides/chauffeur-services-london',
  },
  {
    slug: 'chauffeur-service-types-london',
    title: 'Chauffeur service types in London',
    description:
      'Platform apps, volume operators, private desks, and ride-hail as distinct tiers, with editorial framing for when each fits.',
    category: 'Market structure',
    readMinutes: 12,
    href: '/guides/chauffeur-service-types-london',
  },
  {
    slug: 'executive-transport-london',
    title: 'Executive transport in London',
    description:
      'How boards, travel desks, and events teams buy ground transport when discretion, timing, and consistency matter.',
    category: 'Buyers',
    readMinutes: 9,
    href: '/guides/executive-transport-london',
  },
  {
    slug: 'professional-chauffeur-standards',
    title: 'Professional chauffeur standards',
    description:
      'TfL licensing context, vehicle presentation, wait and cancellation norms, and what “professional” means in practice.',
    category: 'Standards',
    readMinutes: 11,
    href: '/guides/professional-chauffeur-standards',
  },
];

export const PILLAR_COMPARISONS: PillarComparison[] = [
  {
    slug: 'uber-vs-chauffeur-london',
    title: 'Uber vs chauffeur in London',
    description:
      'App-led marketplace supply versus relationship-led chauffeur desks: booking, reliability, and service class without a scorecard.',
    category: 'Comparison',
    readMinutes: 14,
    href: '/comparisons/uber-vs-chauffeur-london',
  },
  {
    slug: 'wheely-vs-chauffeur-london',
    title: 'Wheely vs chauffeur in London',
    description:
      'Premium app tiers and partner supply compared with dedicated chauffeur operations for client-facing London work.',
    category: 'Comparison',
    readMinutes: 12,
    href: '/comparisons/wheely-vs-chauffeur-london',
  },
  {
    slug: 'blacklane-vs-private-chauffeur',
    title: 'Blacklane vs private chauffeur',
    description:
      'Global platform booking versus local private-hire desks: procurement fit, routing, and where each model tends to win.',
    category: 'Comparison',
    readMinutes: 13,
    href: '/comparisons/blacklane-vs-private-chauffeur',
  },
  {
    slug: 'ride-hailing-vs-executive-chauffeur',
    title: 'Ride-hailing vs executive chauffeur',
    description:
      'A framework for when throughput-first apps are enough, and when contracts, waits, and presentation require a chauffeur layer.',
    category: 'Comparison',
    readMinutes: 12,
    href: '/comparisons/ride-hailing-vs-executive-chauffeur',
  },
];

/** Homepage “recognised operators” row: canonical slugs only. */
export const HOMEPAGE_RECOGNISED_OPERATOR_SLUGS = [
  'blacklane',
  'addison-lee',
  'wheely',
  'savoya',
  'uber-executive',
  'trouv-chauffeurs',
] as const;
