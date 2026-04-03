/**
 * Recognised market operators: editorial context, not rankings or paid listings.
 * Inbound links stay on-platform via /companies/*; outbound links live on profile pages only.
 */

export type EditorialPerspective = {
  strengths: string[];
  limitations: string[];
  bestSuitedFor: string;
  commonlyUsedFor: string[];
  lessSuitedFor: string;
};

export type MarketOperator = {
  slug: string;
  name: string;
  tagline: string;
  /** One line for cards / article lists */
  cardLine: string;
  overview: string;
  serviceModel: string;
  locationsCovered: string[];
  typicalUseCases: string[];
  editorialNotes: string;
  /** Framed as trade-offs / fit, not attacks */
  tradeoffs: string[];
  editorialPerspective: EditorialPerspective;
  websiteUrl: string;
};

const MARKET_OPERATORS: MarketOperator[] = [
  {
    slug: 'blacklane',
    name: 'Blacklane',
    tagline: 'Global booking platform for consistent chauffeur-style ground transport.',
    cardLine:
      'International platform model: book ahead in many cities under one account and tariff logic.',
    overview:
      'Blacklane sits in the segment between ad-hoc ride-hail and bespoke local chauffeur desks. It aggregates professional-driver services through a central booking layer, which appeals to travel managers who need repeatability across airports and time zones rather than negotiating each market separately. In London it operates in the same competitive set as premium PHV and chauffeur operators but with productised pricing and route structures familiar to global programmes.',
    serviceModel:
      'Technology platform connecting passengers with licensed partner fleets; advance booking and account features are central to the model.',
    locationsCovered: [
      'Global network city coverage',
      'Strong presence in major European & US business centres',
      'London & UK airports within platform pricing bands',
    ],
    typicalUseCases: [
      'Multi-city programmes needing one booking workflow',
      'Airport transfers with confirmed pricing before travel',
      'Guests where consistency matters more than hyper-local tailoring',
    ],
    editorialNotes:
      'We reference Blacklane when readers need vocabulary for “platform chauffeur” as distinct from single-city private hire. The desk does not audit their London supply daily; treat availability and vehicle class as questions to confirm at booking.',
    tradeoffs: [
      'Centralised product rules can simplify procurement but reduce room for truly bespoke routing',
      'Peak anomalies (closures, diversions) still depend on local partner execution',
    ],
    editorialPerspective: {
      strengths: [
        'Single workflow for travellers who repeat the same booking pattern in several cities',
        'Advance pricing bands that help finance teams forecast ground spend',
      ],
      limitations: [
        'Execution quality still routes through local partners, so edge cases need explicit confirmation',
        'Highly bespoke itineraries may feel constrained compared with a dedicated chauffeur desk',
      ],
      bestSuitedFor:
        'Programme-led travel where repeatability and account billing matter more than one-off theatrics.',
      commonlyUsedFor: [
        'Airport transfers for visitors under a house travel policy',
        'Multi-leg business trips that need one receipting style',
      ],
      lessSuitedFor:
        'Occasions where you want a named dispatcher who reshapes the day in real time without platform guardrails.',
    },
    websiteUrl: 'https://www.blacklane.com',
  },
  {
    slug: 'addison-lee',
    name: 'Addison Lee',
    tagline: 'Large-scale UK private hire with deep London roots and corporate account heritage.',
    cardLine:
      'High-volume UK operator: corporate accounts, airport work, and broad driver supply in London.',
    overview:
      'Addison Lee has operated at meaningful scale in London for decades, enough history that many finance and events teams already hold an account. Its offer spans executive saloons through to larger people-movers, which makes it a useful reference when explaining how volume operators route airport work and corporate programmes differently from boutique chauffeur desks. It is not interchangeable with every premium chauffeur promise, but it is a serious structural presence in the market.',
    serviceModel:
      'Private hire operator at scale with app, account, and dispatcher-led fulfilment; strong UK density.',
    locationsCovered: [
      'London & surrounding areas (primary strength)',
      'UK airports and intercity where network extends',
      'Corporate account billing as a core design pattern',
    ],
    typicalUseCases: [
      'Frequent London airport runs under a house account',
      'Event and roadshow patterns needing multiple concurrent vehicles',
      'Organisations that already standardise on a named UK-wide desk',
    ],
    editorialNotes:
      'Mentioned here as market context: familiarity for procurement teams rather than a universal recommendation. Vehicle presentation and driver consistency should still be validated against your own standard.',
    tradeoffs: [
      'Scale can mean variability at the edge of the network unless account terms are tight',
      'Less “white-glove single-desk” in feel than smaller chauffeur specialists',
    ],
    editorialPerspective: {
      strengths: [
        'Depth of UK supply and long-standing corporate billing rails',
        'Breadth of vehicle classes for concurrent event or roadshow demand',
      ],
      limitations: [
        'High-volume operations can feel different from a boutique chauffeur promise unless terms are explicit',
        'Buyers seeking ultra-personal single-point planning may still prefer a smaller desk',
      ],
      bestSuitedFor:
        'London-heavy organisations that already treat PHV as a managed category with named standards.',
      commonlyUsedFor: [
        'House-account airport turns',
        'Scaling vehicle count for conferences or delegations',
      ],
      lessSuitedFor:
        'Briefs where the primary ask is bespoke white-glove choreography with minimal self-serve.',
    },
    websiteUrl: 'https://www.addisonlee.com',
  },
  {
    slug: 'savoya',
    name: 'Savoya',
    tagline: 'US-originated executive ground transport focused on corporate and aviation-adjacent moves.',
    cardLine:
      'Corporate ground programme DNA from the US; useful reference for global mobility comparisons.',
    overview:
      'Savoya is best understood as part of the North American executive transport ecosystem, where managed ground, aviation timing, and corporate travel policies intersect. UK readers encounter it when US headquarters names a preferred ground partner or when comparing how American programmes think about “chauffeur” versus European norms. We list it to anchor that vocabulary, not to imply equivalent street-level coverage in every London postcode.',
    serviceModel:
      'Managed corporate ground transport with platform scheduling and supplier coordination; US-centric heritage with select global reach.',
    locationsCovered: [
      'Primary depth in major US metros',
      'Select international routes via partner supply',
      'London coverage should be confirmed case-by-case for specialised briefs',
    ],
    typicalUseCases: [
      'US–UK programmes where the travelling firm already standardises on Savoya domestically',
      'Executive moves where private-aviation timing discipline is part of the brief',
      'Mobility teams building cross-border RFP language',
    ],
    editorialNotes:
      'Useful for readers translating American RFP language into London procurement discussions. Always confirm current London fulfilment and insurance framing directly with the provider.',
    tradeoffs: [
      'International trips may route through partner networks; briefing detail matters',
      'Product language from the US does not always map one-to-one to TfL categories',
    ],
    editorialPerspective: {
      strengths: [
        'Shared vocabulary for US-led mobility and aviation-adjacent programmes',
        'Useful anchor when headquarters names a standard ground brand',
      ],
      limitations: [
        'London depth may not mirror US density; confirm supply before relying on it for critical arrivals',
        'Cross-border trips often need explicit handover notes between networks',
      ],
      bestSuitedFor:
        'Organisations standardising ground policy across the Atlantic and needing a common label.',
      commonlyUsedFor: [
        'RFP alignment discussions',
        'Traveller journeys that start in US-managed programmes and continue in London',
      ],
      lessSuitedFor:
        'Readers who only need a purely local London operator map with no US policy overlay.',
    },
    websiteUrl: 'https://www.savoya.com',
  },
  {
    slug: 'wheely',
    name: 'Wheely',
    tagline: 'App-first premium private hire positioned closer to chauffeur presentation than mass ride-hail.',
    cardLine:
      'Premium app-led proposition: quality tiers and experience design closer to executive expectations.',
    overview:
      'Wheely markets itself as a step up in presentation and vehicle norms compared with general ride-hail, priced and productised accordingly. In London conversations it often appears when buyers want app convenience but resist the randomness of open-pool matching. The model still depends on supply availability and surge-like economics at busy moments; understanding those mechanics is part of using it responsibly for client-facing work.',
    serviceModel:
      'Mobile app booking with graded vehicle classes and partner-driver supply; technology-led UX.',
    locationsCovered: [
      'London (primary European city context for this profile)',
      'Selected cities internationally; check live coverage for each itinerary',
    ],
    typicalUseCases: [
      'Same-day London moves where app speed matters but vehicle class must be controlled',
      'Individuals comfortable self-booking without a dedicated account manager',
      'Short hops where presentation still matters but a full chauffeur desk is excessive',
    ],
    editorialNotes:
      'Named as a recognised premium-app option, not as a substitute for white-glove programme desks on every occasion. Confirm driver dress, wait policies, and cancellation rules before client-critical runs.',
    tradeoffs: [
      'Dynamic supply means “what you get” can shift by time and zone',
      'Less bespoke itinerary choreography than relationship-led chauffeur operations',
    ],
    editorialPerspective: {
      strengths: [
        'Fast self-serve bookings with clearer class tiers than open ride-hail marketplaces',
        'Useful when an app is non-negotiable but presentation still matters',
      ],
      limitations: [
        'Economics and wait behaviour can still swing with supply',
        'Less natural for programmes that expect a named contact reshaping the day',
      ],
      bestSuitedFor:
        'Individual travellers and small teams who accept app-led booking in exchange for speed.',
      commonlyUsedFor: [
        'Same-day central London hops',
        'Situations where you want a defined vehicle class without opening a full RFP',
      ],
      lessSuitedFor:
        'Large programmes that need central invoicing nuance and dedicated account governance.',
    },
    websiteUrl: 'https://wheely.com',
  },
  {
    slug: 'uber',
    name: 'Uber',
    tagline: 'Mass-market mobility platform: breadth and speed before tailored chauffeur presentation.',
    cardLine:
      'Ubiquitous app-led transport: convenience and availability as the primary design goal.',
    overview:
      'Uber is the default mental model for on-demand rides in most global cities. In chauffeur-industry writing it matters as contrast, not contempt: many executive buyers still use Uber for certain legs while commissioning dedicated chauffeur for others. Its strength is shallow wait times and predictable app economics at personal-trip scale; its fit weakens when name-board meet-and-greets, dress codes, or multi-hour holds are non-negotiable.',
    serviceModel:
      'Platform marketplace matching riders with independent drivers; product tiers (e.g. UberXL, premium options) vary by market.',
    locationsCovered: ['Extensive London & UK coverage', 'Global cities with local regulatory frameworks'],
    typicalUseCases: [
      'Informal or personal travel where schedule flexibility is high',
      'Last-mile hops when presentation requirements are modest',
      'Benchmark discussions when comparing “app” vs “chauffeur desk” economics',
    ],
    editorialNotes:
      'Referenced so readers can place Uber in the same landscape as dedicated chauffeur: different job-to-be-done, often coexisting in one traveller’s week. Not framed as inferior; framed as a different service class.',
    tradeoffs: [
      'Airport meet-and-greet choreography is not the platform’s native design centre',
      'High-stakes client collections usually warrant a specialist contract and single point of contact',
    ],
    editorialPerspective: {
      strengths: [
        'Very wide London coverage and quick matching for ad-hoc trips',
        'Low friction for travellers who already live inside the app ecosystem',
      ],
      limitations: [
        'Service design prioritises throughput rather than bespoke arrival rituals',
        'Variance between trips remains a feature of marketplace supply',
      ],
      bestSuitedFor:
        'Personal or informal legs where speed and simplicity outweigh white-glove requirements.',
      commonlyUsedFor: [
        'Short urban hops',
        'Personal travel adjacent to a business itinerary',
      ],
      lessSuitedFor:
        'Client-facing arrivals where name boards, attire, and wait policies are contractually fixed.',
    },
    websiteUrl: 'https://www.uber.com',
  },
];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function getMarketOperators(): MarketOperator[] {
  return MARKET_OPERATORS;
}

export function getMarketOperatorBySlug(slug: string): MarketOperator | undefined {
  return MARKET_OPERATORS.find((o) => o.slug === slug);
}

/** Alphabetical: five recognised market names + Trouv (editorial programme). Equal weight in UI. */
export type RecommendedServiceRow = {
  name: string;
  href: string;
  line: string;
  programmeLabel: string;
};

const TROUV_RECOMMENDATION_ROW: RecommendedServiceRow = {
  name: 'Trouv Chauffeurs',
  href: '/featured/trouv',
  line:
    'London-centred private hire and chauffeur desk: airport coverage, corporate programmes, and occasion work under one editorially reviewed profile.',
  programmeLabel: 'Editorial feature',
};

/**
 * Trouv plus three rotating market operators (four cards). On a market profile, pass excludeMarketSlug.
 * On Trouv’s featured profile, pass omitTrouv so the list does not repeat the same page.
 */
export function getConversionRecommendations(options?: {
  excludeMarketSlug?: string;
  omitTrouv?: boolean;
  seed?: string;
}): RecommendedServiceRow[] {
  const seed = options?.seed ?? 'chauffeurs-in-london';
  const pool = MARKET_OPERATORS.filter((o) => o.slug !== options?.excludeMarketSlug);
  const count = Math.min(3, pool.length);
  const h = hashString(seed);
  const n = pool.length;
  const start = n ? h % n : 0;
  const idxs: number[] = [];
  for (let k = 0; idxs.length < count; k++) {
    idxs.push((start + k) % n);
  }
  const picked = idxs.map((i) => pool[i]);
  const marketRows: RecommendedServiceRow[] = picked.map((o) => ({
    name: o.name,
    href: `/companies/${o.slug}`,
    line: o.cardLine,
    programmeLabel: 'Market context',
  }));
  const rows = options?.omitTrouv ? marketRows : [...marketRows, TROUV_RECOMMENDATION_ROW];
  return rows.sort((a, b) => a.name.localeCompare(b.name));
}

export function getBalancedRecommendedServices(): RecommendedServiceRow[] {
  const market: RecommendedServiceRow[] = MARKET_OPERATORS.map((o) => ({
    name: o.name,
    href: `/companies/${o.slug}`,
    line: o.cardLine,
    programmeLabel: 'Market context',
  }));
  return [...market, TROUV_RECOMMENDATION_ROW].sort((a, b) => a.name.localeCompare(b.name));
}
