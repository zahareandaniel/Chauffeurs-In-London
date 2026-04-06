import Link from 'next/link';
import type { MarketOperator } from '@/lib/market-operators';

type Props = { operator: MarketOperator };

export default function CompanyCard({ operator }: Props) {
  return (
    <article className="flex flex-col border border-line bg-surface p-6 lg:p-8">
      <h2 className="font-display text-xl font-semibold text-ink">
        <Link href={`/companies/${operator.slug}`} className="hover:text-accent">
          {operator.name}
        </Link>
      </h2>
      <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
        Recognised operator
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{operator.cardLine}</p>
      <Link
        href={`/companies/${operator.slug}`}
        className="mt-6 link-underline text-xs font-semibold uppercase tracking-[0.12em] text-ink"
      >
        Profile
      </Link>
    </article>
  );
}
