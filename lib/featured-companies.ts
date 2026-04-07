/**
 * Curated operator profiles for the featured programme.
 * Editorial only, not sold as directory placement.
 * Outbound website links are exceptional: only Trouv carries a dofollow official-site link from this desk.
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
  /** Official site when we publish a dofollow outbound link; otherwise null. */
  websiteUrl: string | null;
  overview: string;
  locationsCovered: string[];
  airportExpertise: string[];
  specialisms: CompanySpecialism[];
  editorialNotes: string;
  whyTheyStandOut: string[];
  methodologyNote: string;
};

const EDITORIAL_FOOTNOTE =
  'Editorial profile only. We do not link to this operator’s website from this publication. Readers should verify TfL licensing, insurance, and terms independently before booking.';

const TROUV_FOOTNOTE =
  'Featured partner profile: we link to Trouv Chauffeurs’ official site above as the programme’s named partner. Editorial standards still apply; this is not a guarantee of every future journey.';

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
      'Structured around confirmed pricing disciplines, flight-aware pickups, and consistently presented drivers across London’s main airports. Where readers need an operator that scales from single transfers to multi-day programmes, Trouv Chauffeurs is one we cite by name alongside broader market guidance.',
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
      'We reference Trouv Chauffeurs in airport and corporate guides when a concrete example helps readers move from advice to action. A profile here is not a rating of every future journey.',
    whyTheyStandOut: [
      'Operational framing aligned with how executive buyers actually book: clarity on scope, timing, and vehicle class',
      'Breadth across London’s airport system without narrowing to a single hub',
      'Appears on the same template and terms as every other name in this shortlist',
    ],
    methodologyNote: TROUV_FOOTNOTE,
  },
  {
    slug: 'carey',
    name: 'Carey',
    location: 'London & global programme coverage',
    tagline:
      'Executive ground transport brand familiar to corporate travel programmes, with chauffeur-style service and account-led booking in London alongside other business cities.',
    serviceFocus: ['Airport transfers', 'Corporate programmes', 'Multi-city itineraries', 'Executive road moves'],
    badges: ['Profiled operator', 'Corporate', 'Airports'],
    editorialSummary:
      'Carey is a name many travel managers already recognise when headquarters standardises on a single executive ground supplier across regions. We profile it here so London readers can place programme-scale operators next to single-city chauffeur desks on the same editorial grid.',
    websiteUrl: null,
    overview:
      'Carey operates in the global executive transportation segment: advance-booked cars, stated service classes, and account structures aimed at finance and travel desks rather than one-off app trips. In London it competes for mindshare with other premium private hire and chauffeur providers, but the product story is often multi-city consistency and centralised booking rails. This page is descriptive market context only; it is not an audit of every journey or a substitute for your own contracting and TfL checks.',
    locationsCovered: [
      'London and UK airports within programme and retail booking channels as described publicly',
      'International cities where the group maintains executive ground coverage',
    ],
    airportExpertise: [
      'Heathrow, Gatwick, London City and other hubs under typical corporate travel patterns',
      'Meet-and-greet and hold-time norms aligned with managed travel expectations',
    ],
    specialisms: [
      {
        title: 'Programme and travel-desk buyers',
        body: 'Relevant when your organisation wants one named ground standard across London and other markets, with invoicing and escalation paths built for repeat use.',
      },
      {
        title: 'Contrast with local-only desks',
        body: 'Useful benchmark when you compare global programme language with boutique London chauffeur operators that focus on a single metro.',
      },
    ],
    editorialNotes:
      'Included as a recognised participant in the executive ground segment. Copy reflects how the category is generally positioned in procurement; confirm live coverage, terms, and licensing for your own brief.',
    whyTheyStandOut: [
      'Gives readers a familiar programme-scale reference alongside London-centric names on this shortlist',
      'Illustrates how global account narratives differ from single-garage chauffeur positioning',
    ],
    methodologyNote: EDITORIAL_FOOTNOTE,
  },
  {
    slug: 'ichauffeur',
    name: 'iChauffeur',
    location: 'London & UK',
    tagline:
      'London chauffeur operator with a strong consumer and corporate-facing brand around premium vehicles and airport transfers.',
    serviceFocus: ['Airport transfers', 'London zones', 'Weddings & occasions', 'Executive saloons'],
    badges: ['Profiled operator', 'London', 'Airports'],
    editorialSummary:
      'iChauffeur is the sort of named London operator readers find when they move past generic search terms into booked, vehicle-class-specific chauffeur work. We list it to show how boutique branding behaves next to programme desks.',
    websiteUrl: null,
    overview:
      'iChauffeur trades as a premium London chauffeur service with clear positioning on vehicle class, airport coverage, and occasion work. In editorial terms it represents the mid-market between anonymous minicab apps and white-label corporate programmes: still relationship-led, but with public pricing and product pages typical of a specialist desk.',
    locationsCovered: [
      'Greater London and main London airports',
      'UK intercity by arrangement where promoted',
    ],
    airportExpertise: [
      'Heathrow and other London gateways as core messaging',
      'Meet-and-greet framed around named vehicle categories',
    ],
    specialisms: [
      {
        title: 'Retail-leaning executive buyers',
        body: 'Helpful when an individual or small team books directly and wants class clarity without opening a full RFP.',
      },
      {
        title: 'Occasion-adjacent work',
        body: 'Often mentioned alongside weddings and events where vehicle presentation is part of the brief.',
      },
    ],
    editorialNotes:
      'Included as a real London specialist readers may already consider. No outbound links: confirm current fleet and terms with the operator.',
    whyTheyStandOut: [
      'Illustrates how a public chauffeur brand presents next to programme-scale peers',
      'Typical reference for “book a named London desk” research paths',
    ],
    methodologyNote: EDITORIAL_FOOTNOTE,
  },
  {
    slug: 'eg-chauffeurs',
    name: 'EG Chauffeurs',
    location: 'London & South East',
    tagline:
      'Executive chauffeur operator often shortlisted for London airport work, roadshows, and southeast corporate corridors.',
    serviceFocus: ['Executive travel', 'Airports', 'Roadshows', 'MPV & group where offered'],
    badges: ['Profiled operator', 'Executive travel', 'Airports'],
    editorialSummary:
      'EG Chauffeurs sits among the London-area desks buyers name when they want chauffeur presentation without platform randomness. The profile documents typical positioning; it is not an audit of every journey.',
    websiteUrl: null,
    overview:
      'EG Chauffeurs markets executive chauffeur hire with emphasis on punctuality, vehicle class, and client-facing discipline. In the London competitive set it behaves like other premium private hire desks: account work, airport turns, and multi-stop days when booked in advance. We treat it as a factual market reference for readers comparing similar-sounding offers.',
    locationsCovered: [
      'London and surrounding South East catchments',
      'Major London airports within stated service scope',
    ],
    airportExpertise: [
      'Airport transfer framing common to executive PHV licensing',
      'Hold-time and flight-tracking language typical of the segment',
    ],
    specialisms: [
      {
        title: 'Roadshow-style days',
        body: 'Relevant when readers need one desk to keep timing honest across several City or West End legs.',
      },
      {
        title: 'Mixed vehicle requests',
        body: 'Where saloon and people-carrier needs sit in the same programme, operators like EG are often part of the comparison set.',
      },
    ],
    editorialNotes:
      'Real operator profile without external links. Suitability for your brief is always a direct verification task.',
    whyTheyStandOut: [
      'Another data point on how southeast executive desks describe themselves',
      'Helps diversify the shortlist away from a single hub obsession',
    ],
    methodologyNote: EDITORIAL_FOOTNOTE,
  },
  {
    slug: 'westway-chauffeurs',
    name: 'Westway Chauffeur Services',
    location: 'London',
    tagline:
      'Established London chauffeur name associated with airport, corporate, and high-visibility private hire under a long-running brand.',
    serviceFocus: ['Airport transfers', 'Corporate', 'Events', 'City-to-airport'],
    badges: ['Profiled operator', 'London', 'Heritage brand'],
    editorialSummary:
      'Westway is a recognisable London chauffeur label for readers who have seen the market over multiple years. We include it to ground the grid in firms that pre-date many app-only entrants.',
    websiteUrl: null,
    overview:
      'Westway Chauffeur Services is generally understood as a long-running London private hire and chauffeur brand with sustained visibility in airport and corporate channels. Public materials typically emphasise professional drivers, executive vehicle classes, and reliability narratives familiar to buyers comparing heritage operators with newer digital entrants. The profile is descriptive: readers still validate fit, licensing, and service scope directly with the company.',
    locationsCovered: [
      'London-centric routing with airport emphasis',
      'Coverage described in line with TfL private hire norms',
    ],
    airportExpertise: [
      'London airport work as a core part of public positioning',
      'Corporate account patterns familiar to City and West London buyers',
    ],
    specialisms: [
      {
        title: 'Brand familiarity',
        body: 'Useful when stakeholders ask for a named historic London operator as a sanity check against newcomers.',
      },
      {
        title: 'Corporate and event mix',
        body: 'Typical split between recurring account journeys and one-off high-stakes collections.',
      },
    ],
    editorialNotes:
      'Profile reflects commonly understood market positioning, not a mystery shop. Readers contact the operator for live availability and contract detail.',
    whyTheyStandOut: [
      'Anchors the shortlist in operators with multi-year London presence',
      'Complements newer or app-adjacent models elsewhere on the site',
    ],
    methodologyNote: EDITORIAL_FOOTNOTE,
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
