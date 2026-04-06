import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import RecommendedChauffeurServices from '@/components/editorial/RecommendedChauffeurServices';
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
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
              <div className="sticky top-24 space-y-8">
                <div className="border border-line bg-surface p-6">
                  <p className="editorial-label">No outbound link</p>
                  <p className="mt-3 text-xs leading-relaxed text-ink-subtle">
                    We keep market context on-platform on purpose. When you need terms, licensing, or
                    booking paths, use search or your procurement desk to reach the operator directly.
                    That keeps this site editorial rather than referral-shaped.
                  </p>
                </div>

                <div>
                  <p className="editorial-label">Related editorial</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li>
                      <Link href="/guides/chauffeur-service-types-london" className="link-underline text-ink">
                        Chauffeur service types in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/comparisons/uber-vs-chauffeur-london" className="link-underline text-ink">
                        Uber vs chauffeur in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/methodology" className="link-underline text-ink">
                        How companies are selected
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/heathrow-airport-transfers-complete-guide" className="link-underline text-ink">
                        Heathrow transfers (journal)
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
