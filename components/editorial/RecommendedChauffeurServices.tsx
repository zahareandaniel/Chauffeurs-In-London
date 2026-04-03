import Link from 'next/link';
import type { RecommendedServiceRow } from '@/lib/market-operators';

type Props = {
  rows: RecommendedServiceRow[];
};

export default function RecommendedChauffeurServices({ rows }: Props) {
  return (
    <section
      className="mt-16 border-t border-line pt-16"
      aria-labelledby="recommended-chauffeur-services-heading"
    >
      <h2 id="recommended-chauffeur-services-heading" className="editorial-label">
        Recommended chauffeur services
      </h2>
      <p className="mt-4 max-w-measure text-sm leading-relaxed text-ink-muted">
        A short, rotating mix for readers who want named next steps without a leaderboard. Trouv
        Chauffeurs sits on our editorial programme alongside a few widely referenced market brands.
        Profiles stay on-site; official websites are linked from each profile where relevant.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rows.map((row) => (
          <li key={row.href} className="flex flex-col border border-line bg-surface p-5">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
              {row.programmeLabel}
            </span>
            <Link
              href={row.href}
              className="font-display mt-3 text-lg font-medium text-ink hover:opacity-70"
            >
              {row.name}
            </Link>
            <p className="mt-2 flex-1 text-sm text-ink-muted">{row.line}</p>
            <Link
              href={row.href}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
            >
              Open profile →
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link href="/companies" className="btn-primary text-[0.65rem]">
          Explore chauffeur services in London
        </Link>
        <Link href="/featured" className="text-sm font-medium text-ink underline underline-offset-4">
          Editorial programme
        </Link>
        <Link href="/methodology" className="text-sm font-medium text-ink underline underline-offset-4">
          How companies are selected
        </Link>
      </div>
    </section>
  );
}
