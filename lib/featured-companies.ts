/**
 * Curated operator profiles for the featured programme.
 * Editorial only, not sold as directory placement.
 */

export type CompanySpecialism = { title: string; body: string };

export type FeaturedCompany = {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  serviceFocus: string[];
  badges: string[];
  editorialSummary: string;
  websiteUrl: string | null;
  overview: string;
  locationsCovered: string[];
  airportExpertise: string[];
  specialisms: CompanySpecialism[];
  editorialNotes: string;
  whyTheyStandOut: string[];
  methodologyNote: string;
};

/** Sample / placeholder entries: same card chrome as live features; badge marks status only. */
export function isEditorialSampleCompany(c: FeaturedCompany): boolean {
  return c.badges.some((b) => b.toLowerCase().includes('sample'));
}

const companies: FeaturedCompany[] = [
  {
    slug: 'trouv',
    name: 'Trouv Chauffeurs',
    location: 'London, UK coverage',
    tagline:
      'Premium chauffeur and private hire with strong airport coverage, executive road programmes, and concierge-style coordination for demanding itineraries.',
    serviceFocus: [
      'Airport transfers',
      'Executive travel',
      'Corporate roadshows',
      'Concierge & partnership bookings',
      'Occasions & events',
    ],
    badges: ['Featured operator', 'Airports', 'Executive travel'],
    editorialSummary:
      'Structured around confirmed pricing disciplines, flight-aware pickups, and consistently presented drivers across London’s main airports. Where readers need an operator that scales from single transfers to multi-day programmes, Trouv Chauffeurs is one of the few we cite by name alongside broader market guidance.',
    websiteUrl: 'https://www.trouv.co.uk',
    overview:
      'Trouv Chauffeurs operates as a premium private hire desk serving London’s airports, business districts, and event venues. The offer sits firmly in the executive segment: larger saloons and MPVs, meet-and-greet in arrivals, and planning support when itineraries move. That is the sort of operational maturity we expect before naming an operator in guidance aimed at finance, legal, and events audiences.',
    locationsCovered: [
      'Greater London & Home Counties access',
      'Heathrow, Gatwick, Stansted, Luton & London City',
      'Scheduled UK intercity by arrangement',
    ],
    airportExpertise: [
      'Terminal-specific routing and realistic buffer times',
      'Meet-and-greet with name boards and controlled hand-off',
      'Flight monitoring and adjusted on-arrival holds',
      'Suitable vehicle mix for luggage-heavy long-haul arrivals',
    ],
    specialisms: [
      {
        title: 'Executive & board programmes',
        body: 'Road moves where slack in the schedule is limited and client-facing presentation matters from kerb to door.',
      },
      {
        title: 'Concierge & partner workflows',
        body: 'Useful where PAs, travel desks, or venue teams need a single accountable desk rather than ad-hoc driver assignment.',
      },
      {
        title: 'Events & fixed-time venues',
        body: 'Collections with dress codes, patience on running times, and vehicles presented to a standard guests notice in photographs.',
      },
    ],
    editorialNotes:
      'We reference Trouv Chauffeurs in airport and corporate guides when a concrete example helps readers move from advice to action. A profile here is not a rating of every future journey; readers should still confirm licensing, insurance, and terms for their own brief.',
    whyTheyStandOut: [
      'Operational framing aligned with how executive buyers actually book: clarity on scope, timing, and vehicle class',
      'Breadth across London’s airport system without narrowing to a single hub',
      'Willingness to sit alongside other operators in our shortlist rather than demanding exclusive placement',
    ],
    methodologyNote:
      'Featured companies are assessed against our public editorial standards. We do not sell placement. Profiles may evolve as facts change.',
  },
  {
    slug: 'meridian-chauffeur-group',
    name: 'Meridian Chauffeur Group',
    location: 'Central & West London',
    tagline: 'West End–weighted executive moves and City liaison work (sample profile structure).',
    serviceFocus: ['City-to-airport', 'Mayfair & Kensington', 'Financial district'],
    badges: ['Editorial sample', 'Layout example'],
    editorialSummary:
      'Placeholder illustrating how we present an operator with a west-central bias. Replace with a vetted partner when onboarding.',
    websiteUrl: null,
    overview:
      'Editorial sample only. A live entry here would summarise verifiable service scope, fleet positioning, and how the operator handles communications, in the same neutral register as any other feature.',
    locationsCovered: ['Mayfair', 'Kensington', 'City of London'],
    airportExpertise: ['Heathrow emphasis', 'London City first-wave'],
    specialisms: [
      {
        title: 'Short-notice executive moves',
        body: 'Sample block for operators that market same-day City coverage.',
      },
    ],
    editorialNotes:
      'Demonstrates profile depth for prospective partners evaluating the programme.',
    whyTheyStandOut: [
      'Shows how airport expertise fields differ between operators on the same grid',
    ],
    methodologyNote: 'Fictional, not a booking recommendation.',
  },
  {
    slug: 'crestline-executive',
    name: 'Crestline Executive',
    location: 'London & South East',
    tagline: 'Group MPV-led operations with Stansted & Luton strength (sample entry).',
    serviceFocus: ['Group MPV', 'Roadshow support', 'Stansted & Luton'],
    badges: ['Editorial sample'],
    editorialSummary:
      'Placeholder contrasting vehicle mix with Heathrow-centric operators. Swap for a verified partner when ready.',
    websiteUrl: null,
    overview:
      'Editorial sample. Live copy would stress factual differentiators: fleet composition, coverage map, and ideal client profile, without superlatives.',
    locationsCovered: ['London', 'Cambridge corridor', 'South East M25'],
    airportExpertise: ['Stansted & Luton', 'Group airport runs'],
    specialisms: [
      {
        title: 'Roadshow-style itineraries',
        body: 'Sample positioning for operators that coordinate multi-stop days.',
      },
    ],
    editorialNotes: 'Illustrative entry for layout comparison.',
    whyTheyStandOut: ['Demonstrates non–West End geographic emphasis in cards.'],
    methodologyNote: 'Fictional example.',
  },
  {
    slug: 'harbour-rowe-mobility',
    name: 'Harbour & Rowe Mobility',
    location: 'Canary Wharf & East London',
    tagline: 'Docklands and Excel-adjacent work (sample operator profile).',
    serviceFocus: ['London City Airport', 'Excel London', 'Corporate east corridor'],
    badges: ['Editorial sample'],
    editorialSummary:
      'Sample profile for operators whose sweet spot is east of the City. Replace with a live partner to diversify geography on the shortlist.',
    websiteUrl: null,
    overview:
      'Editorial sample. Useful to show how we would summarise an operator aligned with London City Airport, Royal Docks, and large-format east venues.',
    locationsCovered: ['Isle of Dogs', 'Stratford corridor', 'City Airport catchment'],
    airportExpertise: ['London City timing windows', 'Excel load-in patterns'],
    specialisms: [
      {
        title: 'Conference & trade-fair timing',
        body: 'Sample copy for peak ingress/egress around major halls.',
      },
    ],
    editorialNotes: 'Structural placeholder; not an active endorsement.',
    whyTheyStandOut: ['Balances the shortlist geographically on the page.'],
    methodologyNote: 'Fictional example.',
  },
  {
    slug: 'albemarle-private-drivers',
    name: 'Albemarle Private Drivers',
    location: 'Belgravia & Knightsbridge',
    tagline: 'Ultra-local prestige moves (sample contrast to airport-first operators).',
    serviceFocus: ['Hotel & residence collections', 'Evening economy', 'Discreet doorwork'],
    badges: ['Editorial sample'],
    editorialSummary:
      'Sample entry for ultra-central, residential-heavy chauffeur positioning, useful when readers compare “airport-first” vs “last-mile polish.”',
    websiteUrl: null,
    overview:
      'Editorial sample. A real profile would document how far in advance the desk books, minimum hire rules, and realistic coverage boundaries.',
    locationsCovered: ['Westminster', 'Kensington & Chelsea', 'short-hop Zone 1'],
    airportExpertise: ['Heathrow & Gatwick by arrangement', 'Not primarily STN/LTN-led'],
    specialisms: [
      {
        title: 'Hotel & residence protocols',
        body: 'Sample block for operators known for lobby discipline and luggage handling standards.',
      },
    ],
    editorialNotes: 'Placeholder to keep the grid at five operators without visual favouritism.',
    whyTheyStandOut: ['Shows how “airport expertise” lists can be honestly thin for central specialists.'],
    methodologyNote: 'Fictional example.',
  },
];

export function getFeaturedCompanies(): FeaturedCompany[] {
  return companies;
}

export function getCompanyBySlug(slug: string): FeaturedCompany | undefined {
  return companies.find((c) => c.slug === slug);
}

/** Trouv slug: single source for picks & article modules */
export const TROUV_SLUG = 'trouv' as const;
