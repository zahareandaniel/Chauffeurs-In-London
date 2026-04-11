import type { ReactNode } from 'react';
import Link from 'next/link';
const TROUV_PROFILE = '/companies/trouv-chauffeurs';

const profile = (anchor: ReactNode) => (
  <Link href={TROUV_PROFILE} className="link-underline font-medium text-ink">
    {anchor}
  </Link>
);

type Props = { category: string | null };

/**
 * Contextual internal links for SEO, always alongside medium-neutral shortlist links.
 * Trouv profile is one destination among many on /chauffeur-services. Copy stays non-exclusive.
 */
export default function ArticleContextualLinks({ category }: Props) {
  const cat = category?.toLowerCase() ?? '';

  if (cat.includes('airport')) {
    return (
      <div className="max-w-measure border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          When you need an {profile(<>airport chauffeur service</>)} with disciplined meet-and-greet,
          use the same criteria this guide describes. Then compare several desks on our{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            chauffeur company shortlist
          </Link>
          , including {profile(<>Trouv Chauffeurs</>)} alongside other featured operators.
        </p>
      </div>
    );
  }

  if (cat.includes('corporate')) {
    return (
      <div className="max-w-measure border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          Corporate buyers shortlisting {profile(<>chauffeur service London</>)} operators should read
          full profiles on coverage, escalation, and presentation, not landing blurbs alone. For an
          airport-heavy reference desk, see {profile(<>Trouv Chauffeurs</>)}. Then{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            view available chauffeur companies
          </Link>{' '}
          on the same terms as every other name on the page.
        </p>
      </div>
    );
  }

  if (cat.includes('wedding') || cat.includes('event')) {
    return (
      <div className="max-w-measure border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
        <p>
          Occasion runs deserve the same briefing discipline as airports. Many readers {profile(<>book a chauffeur</>)}{' '}
          via our rotating shortlist.{' '}
          <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
            Explore chauffeur services
          </Link>{' '}
          to line up vehicles before you speak to venues or photographers.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-measure border border-line bg-paper-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
      <p>
        To act on this piece, open our{' '}
        <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
          featured operator directory
        </Link>
        . For desks with strong London airport coverage, the profile for {profile(<>Trouv Chauffeurs</>)} is
        cited here only as one option among several, never an exclusive recommendation.
      </p>
    </div>
  );
}
