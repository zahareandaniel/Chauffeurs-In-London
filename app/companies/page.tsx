import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { getMarketOperators } from '@/lib/market-operators';
import { MarketOperatorHomeCard } from '@/components/editorial/MarketOperatorHomeCard';

export const metadata: Metadata = {
  title: 'Recognised market operators',
  description:
    'Editorial context on major chauffeur and ground-transport brands referenced across our London guides. Not rankings, not paid listings.',
};

export default function CompaniesIndexPage() {
  const operators = [...getMarketOperators()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <section className="border-b border-line pb-14" aria-labelledby="selection-overview-heading">
            <p className="editorial-label">Before you browse</p>
            <h2 id="selection-overview-heading" className="font-display mt-4 text-2xl font-medium text-ink">
              How companies are selected
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              <p>
                This area is not an open directory. These pages describe brands many buyers already
                encounter so our journalism can use precise language about market structure. Nothing
                here implies pay-to-list, league tables, or affiliate placement.
              </p>
              <p>
                Editorial features on the programme follow a published bar: service consistency,
                operational clarity, market presence, legible service models, and fit for executive and
                airport travel.{' '}
                <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
                  Read the full methodology
                </Link>
                .
              </p>
            </div>
          </section>

          <p className="editorial-label mt-14">Market context</p>
          <h1 className="font-display mt-6 text-display-xl font-medium text-ink">
            Recognised chauffeur &amp; transport services
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              These pages exist so our guides can name real market structures without pretending the
              industry is only boutique operators. Nothing here is a league table: we describe how each
              model tends to behave, where it fits, and what buyers should verify themselves.
            </p>
            <p>
              For long-form profiles of operators on our{' '}
              <Link href="/featured" className="font-medium text-ink underline underline-offset-2">
                editorial programme
              </Link>
              {' '}
              (deeper layouts than market context alone). For model comparisons, see{' '}
              <Link href="/comparisons" className="font-medium text-ink underline underline-offset-2">
                comparisons
              </Link>
              .
            </p>
            <p>
              For how models differ (platform, scale, private chauffeur), start with{' '}
              <Link
                href="/guides/chauffeur-service-types-london"
                className="font-medium text-ink underline underline-offset-2"
              >
                chauffeur service types in London
              </Link>{' '}
              and{' '}
              <Link
                href="/guides/chauffeur-services-london"
                className="font-medium text-ink underline underline-offset-2"
              >
                chauffeur services in London
              </Link>
              .
            </p>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {operators.map((op) => (
              <li key={op.slug}>
                <MarketOperatorHomeCard operator={op} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
