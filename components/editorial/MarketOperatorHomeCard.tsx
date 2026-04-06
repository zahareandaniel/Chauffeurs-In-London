import Link from 'next/link';
import type { MarketOperator } from '@/lib/market-operators';
import { MarketOperatorMark } from '@/components/editorial/MarketOperatorMark';

export function MarketOperatorHomeCard({ operator }: { operator: MarketOperator }) {
  return (
    <article className="flex h-full flex-col border border-line bg-surface p-6 transition-colors hover:border-ink/15">
      <div className="flex items-start gap-4">
        <MarketOperatorMark name={operator.name} />
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-medium text-ink">
            <Link href={`/companies/${operator.slug}`} className="hover:opacity-75">
              {operator.name}
            </Link>
          </h2>
        </div>
      </div>
      <p className="mt-4 flex-1 text-xs leading-relaxed text-ink-muted">{operator.cardLine}</p>
      <Link
        href={`/companies/${operator.slug}`}
        className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink"
      >
        Context profile →
      </Link>
    </article>
  );
}
