import Link from 'next/link';
import type { FeaturedCompany } from '@/lib/featured-companies';

export default function EditorsPicksSection({
  picks,
  className = '',
}: {
  picks: FeaturedCompany[];
  className?: string;
}) {
  return (
    <section className={className} aria-labelledby="editors-picks-heading">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="editorial-label">Shortlist</p>
          <h2 id="editors-picks-heading" className="font-display mt-3 text-2xl font-medium text-ink sm:text-display-lg">
            Recommended chauffeur services
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-muted">
            Operators we profile to the same layout and editorial standard. Order rotates, with no fixed
            ranking on this desk. We do not link to their websites; profiles stay on this site.
          </p>
        </div>
        <Link href="/chauffeur-services" className="btn-secondary shrink-0 self-start text-[0.65rem] sm:self-auto">
          Explore chauffeur companies
        </Link>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {picks.map((company) => (
          <li key={company.slug}>
            <article className="flex h-full flex-col border border-line bg-surface p-6 transition-shadow hover:shadow-sm">
              <div className="flex flex-wrap gap-1.5">
                {company.badges.slice(0, 2).map((b) => (
                  <span key={b} className="badge-muted text-[0.6rem]">
                    {b}
                  </span>
                ))}
              </div>
              <h3 className="font-display mt-4 text-lg font-medium leading-snug text-ink">
                <Link href={`/featured/${company.slug}`} className="hover:opacity-70">
                  {company.name}
                </Link>
              </h3>
              <p className="mt-1 text-xs text-ink-subtle">{company.location}</p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-ink-muted line-clamp-4">
                {company.tagline}
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <Link
                  href={`/featured/${company.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-ink"
                >
                  Profile →
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
