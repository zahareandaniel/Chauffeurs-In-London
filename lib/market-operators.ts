/**
 * Recognised market operators: editorial context, not rankings or paid listings.
 * Inbound links stay on-platform via /companies/*; we do not link to third-party operator websites.
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
  },
  {
    slug: 'bolt',
    name: 'Bolt',
    tagline: 'European mobility platform with ride-hail in London, positioned as an app-first alternative in the PHV marketplace.',
    cardLine:
      'App-led on-demand trips: matching economics and product tiers familiar from other ride platforms.',
    overview:
      'Bolt operates private hire matching in London alongside food and other mobility products in other markets. For London readers it sits in the same mental shelf as other large ride-hail apps: quick matching, upfront pricing habits that vary by demand, and a service class aimed at throughput more than bespoke chauffeur choreography. Procurement teams name it when comparing policy allowances, expensing rules, or traveller choice across competing apps.',
    serviceModel:
      'Technology platform matching riders with TfL-licensed private hire drivers; tiered product options by city.',
    locationsCovered: [
      'London and other UK cities under local licensing',
      'European and other markets where the group operates ride services',
    ],
    typicalUseCases: [
      'Ad-hoc urban trips when policy allows non-exclusive apps',
      'Cost-sensitive legs next to a booked chauffeur day',
      'Benchmarking “app A vs app B” for travel policy drafts',
    ],
    editorialNotes:
      'Useful structural context next to Uber: similar job-to-be-done for many personal and informal legs, different brand ownership and regional footprint. Not a substitute for contract chauffeur when presentation and wait rules are fixed.',
    tradeoffs: [
      'Meet-and-greet and white-glove norms are not the core product design',
      'Peak demand behaviour should be read in the app before client-critical work',
    ],
    editorialPerspective: {
      strengths: [
        'Widely available in London for spontaneous movement inside policy',
        'Gives buyers a second major app label when negotiating vendor diversity or spend caps',
      ],
      limitations: [
        'Variance between drivers and vehicles remains a marketplace trait',
        'High-stakes arrivals often need a dedicated desk regardless of app choice',
      ],
      bestSuitedFor:
        'Informal and personal-adjacent legs where app speed matters and dress-code choreography does not.',
      commonlyUsedFor: ['Short hops', 'Policy comparisons with other ride-hail tools'],
      lessSuitedFor:
        'Fixed-programme chauffeur with named contacts and contractual wait windows.',
    },
  },
  {
    slug: 'ichauffeur',
    name: 'iChauffeur',
    tagline: 'London chauffeur and executive private hire brand with public vehicle-class positioning and airport-led messaging.',
    cardLine:
      'Named London desk: website-led booking and premium PHV framing rather than open ride-hail pooling.',
    overview:
      'iChauffeur is part of the London landscape as a branded chauffeur operator: it sells classed vehicles, airport transfers, and occasion work with clearer executive norms than anonymous app matching. Readers encounter it when moving from generic “get a ride” search into booked chauffeur territory. It illustrates how a single operator brand behaves relative to platforms such as Blacklane and large-scale desks such as Addison Lee.',
    serviceModel:
      'Operator-led private hire with direct booking channels and stated fleet positioning; relationship and repeat business matter more than pure marketplace throughput.',
    locationsCovered: [
      'Greater London and main London airports as core messaging',
      'UK coverage where publicly described',
    ],
    typicalUseCases: [
      'Airport and intercity runs where a named vehicle grade matters',
      'Retail executive buyers who want a chauffeur proposition without a global programme contract',
      'Comparing boutique operator tone with app and volume PHV options',
    ],
    editorialNotes:
      'Also profiled on our featured programme for readers who want full editorial depth; this market context page stays structural. We do not audit individual journeys.',
    tradeoffs: [
      'Capacity on peak days is still an operator question, not a commodity',
      'Bespoke detail depends on what you confirm at booking',
    ],
    editorialPerspective: {
      strengths: [
        'Legible “chauffeur company” reference for London buyers shortlisting named desks',
        'Useful midpoint between mass apps and global programme-only brands',
      ],
      limitations: [
        'Not interchangeable with every multi-city managed-ground RFP without checking scope',
        'Readers should still match TfL expectations and insurance to their own risk appetite',
      ],
      bestSuitedFor:
        'Buyers who want a recognisable London chauffeur brand in the comparison set.',
      commonlyUsedFor: ['Airport-led research', 'Wedding and event adjacent planning'],
      lessSuitedFor:
        'Pure policy discussions that only permit marketplace apps and exclude booked chauffeur.',
    },
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

/** Alphabetical: recognised market names + Trouv (editorial programme). Equal weight in UI. */
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
