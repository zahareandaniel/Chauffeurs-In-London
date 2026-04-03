/**
 * Content hubs — crawlable IA for airport, city, and editorial series.
 * Links align with existing article slugs from seed content.
 */

export type HubLink = { label: string; href: string; description?: string };

export type ContentHub = {
  id: string;
  title: string;
  description: string;
  links: HubLink[];
};

export const GUIDE_HUBS: ContentHub[] = [
  {
    id: 'airport-transfers',
    title: 'Airport transfer guides',
    description:
      'Terminal context, timing, and what to expect when you book chauffeur transfers to and from London airports.',
    links: [
      {
        label: 'Heathrow: complete chauffeur guide',
        href: '/blog/heathrow-airport-transfers-complete-guide',
      },
      {
        label: 'Gatwick from Central London',
        href: '/blog/gatwick-airport-transfers-london',
      },
      {
        label: 'London City Airport — business traveller notes',
        href: '/blog/london-city-airport-transfers',
      },
    ],
  },
  {
    id: 'london-chauffeur',
    title: 'London chauffeur service',
    description:
      'How the London market works: standards, expectations, and how to shortlist operators with care.',
    links: [
      {
        label: 'Chauffeur service in London — featured shortlist',
        href: '/chauffeur-services',
      },
      {
        label: 'Chauffeur services in London — 2025 overview',
        href: '/blog/best-chauffeur-services-london-2025',
      },
      {
        label: 'Corporate chauffeur hire — what to expect',
        href: '/blog/corporate-chauffeur-hire-london',
      },
      {
        label: 'Black car service vs black cab',
        href: '/blog/black-car-service-london-vs-black-cab',
      },
    ],
  },
  {
    id: 'events-occasions',
    title: 'Events, weddings & occasions',
    description:
      'Transport planning for fixed-time occasions where presentation and patience matter.',
    links: [
      {
        label: 'Wedding car hire in London',
        href: '/blog/wedding-car-hire-london',
      },
      {
        label: 'Chauffeurs for London events',
        href: '/blog/chauffeur-services-london-events',
      },
    ],
  },
  {
    id: 'industry',
    title: 'Industry & comparisons',
    description:
      'Editorial comparisons and frameworks — written for readers who need clarity, not slogans.',
    links: [
      {
        label: 'Featured operators (editorial desk)',
        href: '/featured',
      },
      {
        label: 'Chauffeur services — compare shortlist',
        href: '/chauffeur-services',
      },
      {
        label: 'Trouv Chauffeurs — profile',
        href: '/featured/trouv',
      },
      {
        label: 'Editorial standards',
        href: '/about',
      },
    ],
  },
];

/** Category filters used across journal — stable slugs for URLs */
export const JOURNAL_CATEGORIES = [
  'All',
  'Airport Transfers',
  'Corporate',
  'Wedding',
  'Events',
  'Tips',
] as const;
