import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import RecommendedChauffeurServices from '@/components/editorial/RecommendedChauffeurServices';
import ClusterLinks from '@/components/editorial/ClusterLinks';
import { getMarketOperatorBySlug, getMarketOperators, getConversionRecommendations } from '@/lib/market-operators';
import { siteUrl } from '@/lib/site-config';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getMarketOperators().map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const op = getMarketOperatorBySlug(params.slug);
  if (!op) return {};
  const base = siteUrl().replace(/\/$/, '');
  return {
    title: `${op.name}, market context`,
    description: op.cardLine,
    alternates: { canonical: `${base}/companies/${op.slug}` },
    openGraph: {
      title: `${op.name} | Recognised operator context`,
      description: op.tagline,
      url: `${base}/companies/${op.slug}`,
      type: 'article',
    },
  };
}

export default function MarketOperatorPage({ params }: Props) {
  const op = getMarketOperatorBySlug(params.slug);
  if (!op) notFound();

  const base = siteUrl().replace(/\/$/, '');
  const recommended = getConversionRecommendations({
    excludeMarketSlug: op.slug,
    omitTrouv: op.slug === 'trouv-chauffeurs',
    seed: op.slug,
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${op.name}, editorial market context`,
    description: op.overview.slice(0, 300),
    author: { '@type': 'Organization', name: 'Chauffeurs in London', url: base },
    about: {
      '@type': 'Organization',
      name: op.name,
      url: `${base}/companies/${op.slug}`,
    },
  };

  if (op.slug === 'trouv-chauffeurs') {
    return (
      <>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <article className="max-w-content mx-auto">
            <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/companies" className="hover:text-ink">
                    Recognised operators
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink">Trouv Chauffeurs</li>
              </ol>
            </nav>

            <header className="mt-10 max-w-readable">
              <h1 className="font-display mt-2 text-display-lg font-medium text-ink">Trouv Chauffeurs</h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                London-based chauffeur service focused on airport transfers, corporate travel, and event
                logistics with flight-aware planning.
              </p>
            </header>

            <div className="mt-12 max-w-3xl space-y-10 text-base leading-[1.85] text-ink-muted">
              <section>
                <h2 className="editorial-label">Overview</h2>
                <p className="mt-4">
                  Trouv Chauffeurs operates within London&apos;s executive chauffeur segment, where
                  services are structured around consistency, presentation, and operational clarity rather
                  than on-demand availability.
                </p>
                <p className="mt-4">
                  The model is built around confirmed pricing, flight-aware pickups, and standardised
                  service delivery across London&apos;s main airports and corporate routes. It is positioned
                  for clients who prioritise reliability and planning over marketplace-style flexibility.
                </p>
                <p className="mt-4">
                  The service is typically used in airport and corporate travel contexts where timing,
                  coordination, and driver presentation are expected as part of the booking.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">How the service works</h2>
                <p className="mt-4">
                  Bookings are handled directly through a dispatcher, with journeys planned in advance and
                  adjusted in real time when required.
                </p>
                <p className="mt-4">
                  Vehicles are either owned or contracted under a single operating standard, with clearly
                  defined vehicle classes, wait times, and service expectations.
                </p>
                <p className="mt-4">
                  This structure supports consistency across airport pickups, corporate schedules, and
                  multi-stop itineraries.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">Coverage</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    Greater London and all major airports (Heathrow, Gatwick, Stansted, Luton, London
                    City)
                  </li>
                  <li>Home Counties and longer-distance journeys by arrangement</li>
                  <li>Corporate and event travel across central London and key venues</li>
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">When it is used</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Airport transfers with meet and greet and flight tracking</li>
                  <li>Corporate travel including executive schedules and roadshows</li>
                  <li>Events and fixed-time journeys where coordination and presentation matter</li>
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">Editorial note</h2>
                <p className="mt-4">
                  This profile is part of an independent editorial programme. It reflects observed service
                  structure, positioning, and typical use cases.
                </p>
                <p className="mt-4">
                  It is not a ranking or endorsement and should be considered alongside direct
                  verification of licensing, insurance, and contractual terms.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">What works well</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Clear positioning within London&apos;s executive chauffeur segment</li>
                  <li>Consistent airport coverage across multiple hubs</li>
                  <li>Structured booking process suited to corporate and pre-planned travel</li>
                  <li>Standardised service expectations across vehicles and drivers</li>
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">What to consider</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Not a substitute for verifying licensing, insurance, and operator credentials</li>
                  <li>Less suited to purely on-demand or app-based booking expectations</li>
                  <li>Complex or highly customised itineraries may require direct coordination</li>
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">Best suited for</h2>
                <p className="mt-4">
                  Clients who require a London chauffeur service with a structured, relationship-led
                  approach, particularly for airport-heavy and corporate travel.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">Common uses</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Corporate arrivals and departures</li>
                  <li>Multi-day roadshows</li>
                  <li>Event transport and scheduled collections</li>
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">Less suited for</h2>
                <p className="mt-4">
                  Situations that rely purely on instant booking apps without pre-arranged chauffeur
                  service or planning.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">Context</h2>
                <p className="mt-4">
                  This profile sits within broader editorial coverage on this site of chauffeur services,
                  airport transfers, and executive ground transport in London.
                </p>
                <p className="mt-4">
                  Related guides and comparisons provide additional context on pricing, service models, and
                  operator differences across the market.
                </p>
              </section>

              <section>
                <h2 className="editorial-label">Official website</h2>
                <p className="mt-4">
                  <a
                    href="https://trouv.co.uk"
                    target="_blank"
                    rel="noopener"
                    className="font-medium text-ink underline underline-offset-4"
                  >
                    https://trouv.co.uk
                  </a>
                </p>
              </section>
            </div>
          </article>

          <div className="max-w-content mx-auto">
            <RecommendedChauffeurServices rows={recommended} />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <article className="max-w-content mx-auto">
          <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/companies" className="hover:text-ink">
                  Recognised operators
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{op.name}</li>
            </ol>
          </nav>

          <header className="mt-10 max-w-readable">
            <p className="editorial-label">Market context, not a rating</p>
            <h1 className="font-display mt-6 text-display-lg font-medium text-ink">{op.name}</h1>
            <p className="mt-4 text-lg font-medium leading-snug text-ink-muted">{op.tagline}</p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="editorial-label">Overview</h2>
                <p className="mt-4 text-base leading-[1.85] text-ink-muted">{op.overview}</p>
              </section>

              <section>
                <h2 className="editorial-label">Service model</h2>
                <p className="mt-4 text-base leading-[1.85] text-ink-muted">{op.serviceModel}</p>
              </section>

              <section>
                <h2 className="editorial-label">Locations &amp; coverage</h2>
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {op.locationsCovered.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-ink-subtle">·</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">Typical use cases</h2>
                <ul className="mt-4 space-y-3 text-ink-muted">
                  {op.typicalUseCases.map((x) => (
                    <li key={x} className="border-l-2 border-line pl-4 leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border border-line bg-paper-warm p-6 sm:p-8">
                <h2 className="editorial-label">Editorial notes</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{op.editorialNotes}</p>
              </section>

              <section>
                <h2 className="editorial-label">Editorial perspective</h2>
                <p className="mt-4 text-sm text-ink-subtle">
                  Observations phrased for buyers, not as a scorecard against other brands.
                </p>
                <div className="mt-6 space-y-6 text-ink-muted">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                      Strengths we observe
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {op.editorialPerspective.strengths.map((x) => (
                        <li key={x} className="leading-relaxed">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                      Limitations to weigh
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {op.editorialPerspective.limitations.map((x) => (
                        <li key={x} className="leading-relaxed">
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <span className="font-medium text-ink">Best suited for:</span> {op.editorialPerspective.bestSuitedFor}
                  </p>
                  <div>
                    <span className="font-medium text-ink">Commonly used for:</span>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {op.editorialPerspective.commonlyUsedFor.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <span className="font-medium text-ink">Less suited for:</span>{' '}
                    {op.editorialPerspective.lessSuitedFor}
                  </p>
                </div>
              </section>

              <section>
                <h2 className="editorial-label">Fit &amp; trade-offs</h2>
                <p className="mb-4 text-sm text-ink-subtle">
                  Observations about where the model tends to shine or constrain, not scored against
                  other brands.
                </p>
                <ul className="space-y-3 text-ink-muted">
                  {op.tradeoffs.map((x) => (
                    <li key={x} className="leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>
              </section>
              <ClusterLinks type="companies" />
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
              <div className="sticky top-24 space-y-8">
                {op.officialWebsiteUrl ? (
                  <div className="border border-line bg-surface p-6">
                    <p className="editorial-label">Official website</p>
                    <a
                      href={op.officialWebsiteUrl}
                      target="_blank"
                      rel="noopener"
                      className="mt-3 block text-sm font-medium text-ink underline underline-offset-4"
                    >
                      {op.officialWebsiteUrl.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                    <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
                      External link for convenience. Booking, terms, and licensing remain with the
                      operator.
                    </p>
                  </div>
                ) : (
                  <div className="border border-line bg-surface p-6">
                    <p className="editorial-label">On-platform context</p>
                    <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
                      We keep this profile on-platform on purpose. For terms, TfL licensing, and
                      booking paths, reach the operator through your usual verification channels.
                    </p>
                  </div>
                )}

                <div>
                  <p className="editorial-label">Related editorial</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li>
                      <Link href="/guides/chauffeur-services-london" className="link-underline text-ink">
                        Chauffeur services in London (guide)
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/chauffeur-service-types-london" className="link-underline text-ink">
                        Chauffeur service types in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides/professional-chauffeur-standards" className="link-underline text-ink">
                        Professional chauffeur standards
                      </Link>
                    </li>
                    <li>
                      <Link href="/comparisons/uber-vs-chauffeur-london" className="link-underline text-ink">
                        Uber vs chauffeur in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/comparisons/ride-hailing-vs-executive-chauffeur" className="link-underline text-ink">
                        Ride-hailing vs executive chauffeur
                      </Link>
                    </li>
                  </ul>
                </div>

                <Link href="/companies" className="btn-secondary block w-full text-center text-[0.65rem]">
                  All recognised operators
                </Link>
                <Link href="/featured" className="btn-secondary block w-full text-center text-[0.65rem]">
                  Editorial programme
                </Link>
                <p className="text-xs leading-relaxed text-ink-subtle">
                  Chauffeurs in London does not operate these services. This page is descriptive context
                  for readers only.
                </p>
              </div>
            </aside>
          </div>
        </article>

        <div className="max-w-content mx-auto">
          <RecommendedChauffeurServices rows={recommended} />
        </div>
      </main>
      <Footer />
    </>
  );
}
