import Link from 'next/link';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import RecommendedChauffeurServices from '@/components/editorial/RecommendedChauffeurServices';
import { getConversionRecommendations } from '@/lib/market-operators';

type Props = {
  currentSlug: string;
};

export default function ArticleEndmatter({ currentSlug }: Props) {
  const airportHub = GUIDE_HUBS.find((h) => h.id === 'airport-transfers');
  const pathSuffix = `/blog/${currentSlug}`;
  const relatedHubLinks =
    airportHub?.links.filter((l) => l.href !== pathSuffix).slice(0, 4) ?? [];

  const recommended = getConversionRecommendations({ seed: currentSlug });

  return (
    <div className="mt-16 space-y-12 border-t border-line pt-16">
      <section aria-label="Further reading and transfer context">
        {relatedHubLinks.length > 0 && (
          <>
            <h2 className="editorial-label">Airport &amp; transfer context</h2>
            <ul className="mt-4 space-y-3">
              {relatedHubLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-sm font-medium text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className={`text-sm text-ink-muted ${relatedHubLinks.length > 0 ? 'mt-6' : ''}`}>
          Read{' '}
          <Link href="/guides/chauffeur-service-types-london" className="font-medium text-ink underline underline-offset-2">
            chauffeur service types in London
          </Link>
          , the{' '}
          <Link href="/comparisons/uber-vs-chauffeur-london" className="font-medium text-ink underline underline-offset-2">
            Uber vs chauffeur comparison
          </Link>
          , and{' '}
          <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
            recognised market operators
          </Link>
          .
        </p>
      </section>

      <RecommendedChauffeurServices rows={recommended} />

      <aside className="border border-line bg-paper-warm p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
          Editorial independence
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Market context pages describe how brands are generally understood; they are not
          endorsements. Featured profiles follow the desk&apos;s{' '}
          <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
            selection methodology
          </Link>
          . Broader policy sits on the{' '}
          <Link href="/editorial-standards" className="font-medium text-ink underline underline-offset-2">
            standards page
          </Link>
          .
        </p>
      </aside>
    </div>
  );
}
