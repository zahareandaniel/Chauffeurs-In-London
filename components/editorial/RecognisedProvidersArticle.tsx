import Link from 'next/link';
import { getMarketOperators } from '@/lib/market-operators';
import { MarketOperatorMark } from '@/components/editorial/MarketOperatorMark';

/** In-article block: five recognised operators, equal treatment, internal links only */
export default function RecognisedProvidersArticle() {
  const operators = [...getMarketOperators()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section
      className="border border-line bg-paper-warm px-5 py-8 sm:px-8 sm:py-10"
      aria-labelledby="recognised-providers-article-heading"
    >
      <h2 id="recognised-providers-article-heading" className="editorial-label">
        Recognised providers in London &amp; global markets
      </h2>
      <p className="mt-4 max-w-readable text-sm leading-relaxed text-ink-muted">
        Major brands structurally shape how buyers think about ground transport, from global platforms
        to app-led premium tiers. We name them here so guides stay anchored in the real market.
        Profiles are descriptive, not ranked. For how these shapes differ, see{' '}
        <Link href="/guides/chauffeur-service-types-london" className="font-medium text-ink underline underline-offset-2">
          chauffeur service types in London
        </Link>{' '}
        and the{' '}
        <Link href="/comparisons/uber-vs-chauffeur-london" className="font-medium text-ink underline underline-offset-2">
          Uber vs chauffeur comparison
        </Link>
        .
      </p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {operators.map((op) => (
          <li key={op.slug} className="border border-line bg-surface p-5">
            <div className="flex items-start gap-3">
              <MarketOperatorMark name={op.name} />
              <div className="min-w-0">
                <h3 className="font-display text-base font-medium text-ink">
                  <Link href={`/companies/${op.slug}`} className="hover:opacity-75">
                    {op.name}
                  </Link>
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{op.cardLine}</p>
                <Link
                  href={`/companies/${op.slug}`}
                  className="mt-3 inline-block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink"
                >
                  Profile →
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
