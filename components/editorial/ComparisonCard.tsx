import Link from 'next/link';
import type { PillarComparison } from '@/lib/pillar-content';

type Props = { comparison: PillarComparison };

export default function ComparisonCard({ comparison }: Props) {
  return (
    <article className="flex h-full flex-col border border-line bg-surface p-6">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
        {comparison.category} · {comparison.readMinutes} min
      </span>
      <h2 className="font-display mt-4 text-xl font-semibold text-ink">
        <Link href={comparison.href} className="hover:text-accent">
          {comparison.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{comparison.description}</p>
      <Link href={comparison.href} className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-ink">
        Read comparison
      </Link>
    </article>
  );
}
