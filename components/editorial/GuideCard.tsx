import Link from 'next/link';
import type { PillarGuide } from '@/lib/pillar-content';

type Props = { guide: PillarGuide };

export default function GuideCard({ guide }: Props) {
  return (
    <article className="flex h-full flex-col border border-line bg-surface p-6">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-subtle">
        {guide.category} · {guide.readMinutes} min
      </span>
      <h2 className="font-display mt-4 text-xl font-semibold text-ink">
        <Link href={guide.href} className="hover:text-accent">
          {guide.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{guide.description}</p>
      <Link href={guide.href} className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-ink">
        Read guide
      </Link>
    </article>
  );
}
