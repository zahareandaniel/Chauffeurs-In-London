import Link from 'next/link';

type Props = { category: string | null };

/**
 * Discrete internal links for SEO intent — profile + shortlist; anchor variety by category.
 * Renders only when topic aligns (see showArticleContextualLinks).
 */
export default function ArticleContextualLinks({ category }: Props) {
  const cat = category?.toLowerCase() ?? '';

  if (cat.includes('airport')) {
    return (
      <div className="max-w-measure rounded-sm border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          When you need an{' '}
          <Link href="/featured/trouv" className="link-underline font-medium text-ink">
            airport chauffeur service
          </Link>{' '}
          with meet-and-greet discipline, compare several shortlist profiles — starting with the same
          editorial criteria we use in this guide. Our{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            featured operator directory
          </Link>{' '}
          lists everyone on equal terms.
        </p>
      </div>
    );
  }

  if (cat.includes('corporate')) {
    return (
      <div className="max-w-measure rounded-sm border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          For teams shortlisting a{' '}
          <Link href="/featured/trouv" className="link-underline font-medium text-ink">
            chauffeur service in London
          </Link>
          , we keep long-form profiles alongside these guides. Use them to sanity-check coverage,
          presentation standards, and how each desk describes escalation — then{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            view available chauffeur companies
          </Link>{' '}
          on one page.
        </p>
      </div>
    );
  }

  if (cat.includes('wedding') || cat.includes('event')) {
    return (
      <div className="max-w-measure rounded-sm border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          Occasion transport should be briefed as carefully as airport work. Readers often{' '}
          <Link href="/featured/trouv" className="link-underline font-medium text-ink">
            find a chauffeur for your journey
          </Link>{' '}
          through the same shortlist we use for executive travel —{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            explore chauffeur services
          </Link>{' '}
          to compare operators before you commit.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-measure rounded-sm border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
      <p>
        If you are ready to act on this guide, our desk keeps a neutral{' '}
        <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
          chauffeur company shortlist
        </Link>
        . For operators with broad London airport coverage, see the profile for{' '}
        <Link href="/featured/trouv" className="link-underline font-medium text-ink">
          Trouv Chauffeurs
        </Link>{' '}
        alongside other featured services.
      </p>
    </div>
  );
}
