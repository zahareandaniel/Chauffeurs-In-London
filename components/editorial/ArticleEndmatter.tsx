import Link from 'next/link';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import { getRecommendedForArticle } from '@/lib/editor-picks';
import { isEditorialSampleCompany } from '@/lib/featured-companies';

type Props = {
  currentSlug: string;
};

export default function ArticleEndmatter({ currentSlug }: Props) {
  const airportHub = GUIDE_HUBS.find((h) => h.id === 'airport-transfers');
  const pathSuffix = `/blog/${currentSlug}`;
  const relatedHubLinks =
    airportHub?.links.filter((l) => l.href !== pathSuffix).slice(0, 4) ?? [];

  const recommended = getRecommendedForArticle();

  return (
    <div className="mt-16 space-y-12 border-t border-line pt-16">
      {relatedHubLinks.length > 0 && (
        <section aria-labelledby="related-guides-heading">
          <h2 id="related-guides-heading" className="editorial-label">
            Airport &amp; transfer context
          </h2>
          <ul className="mt-4 space-y-3">
            {relatedHubLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-sm font-medium text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="recommended-services-heading">
        <h2 id="recommended-services-heading" className="editorial-label">
          Recommended chauffeur services
        </h2>
        <p className="mt-4 max-w-measure text-sm leading-relaxed text-ink-muted">
          A rotating shortlist of operators we profile in full. None of these placements is purchased;
          layout and depth are the same for every entry.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {recommended.map((c) => (
            <li
              key={c.slug}
              className="flex flex-col border border-line bg-surface p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <Link
                  href={`/featured/${c.slug}`}
                  className="font-display text-lg font-medium text-ink hover:opacity-70"
                >
                  {c.name}
                </Link>
                <p className="mt-1 text-xs text-ink-subtle">{c.location}</p>
                <p className="mt-2 text-sm text-ink-muted">{c.editorialSummary}</p>
              </div>
              <div className="mt-4 flex shrink-0 gap-3 sm:mt-0 sm:flex-col sm:items-end">
                <Link
                  href={`/featured/${c.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                >
                  Profile
                </Link>
                {c.websiteUrl && !isEditorialSampleCompany(c) && (
                  <a
                    href={c.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-subtle hover:text-ink"
                  >
                    Website ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/chauffeur-services" className="btn-primary text-[0.65rem]">
            Find a chauffeur for your journey
          </Link>
          <Link
            href="/chauffeur-services"
            className="text-sm font-medium text-ink underline underline-offset-4"
          >
            Explore chauffeur services
          </Link>
          <Link href="/featured" className="text-sm font-medium text-ink underline underline-offset-4">
            View all featured profiles
          </Link>
        </div>
      </section>

      <aside className="border border-line bg-paper-warm p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
          Editorial independence
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Guides may name individual operators where it helps readers take the next step. That does
          not override our selection methodology or create pay-to-play slots on this site.{' '}
          <Link href="/about" className="font-medium text-ink underline underline-offset-2">
            How we select features
          </Link>
          .
        </p>
      </aside>
    </div>
  );
}
