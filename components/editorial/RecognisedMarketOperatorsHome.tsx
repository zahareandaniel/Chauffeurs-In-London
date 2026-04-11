import Link from 'next/link';
import { getMarketOperators } from '@/lib/market-operators';
import { MarketOperatorHomeCard } from '@/components/editorial/MarketOperatorHomeCard';

export default function RecognisedMarketOperatorsHome() {
  const operators = [...getMarketOperators()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8" aria-labelledby="recognised-market-heading">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="editorial-label">Market literacy</p>
            <h2 id="recognised-market-heading" className="font-display mt-4 text-display-lg font-medium text-ink">
              Recognised chauffeur &amp; transport services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Brands readers already encounter in RFPs, travel policy, and everyday London movement.
              These are contextual profiles: how each model tends to behave, not a leaderboard and not
              affiliate placement. Every card opens an on-platform brief. We do not send you to
              operator websites from here. Selection standards for the separate featured programme sit on the{' '}
              <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
                methodology page
              </Link>
              .
            </p>
          </div>
          <Link href="/companies" className="btn-secondary shrink-0 self-start text-[0.65rem] lg:self-auto">
            All market context pages
          </Link>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {operators.map((op) => (
            <li key={op.slug}>
              <MarketOperatorHomeCard operator={op} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
