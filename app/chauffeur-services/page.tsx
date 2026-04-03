import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FeaturedCompanyCard from '@/components/editorial/FeaturedCompanyCard';
import { TROUV_SLUG } from '@/lib/featured-companies';
import { getEditorsPicks } from '@/lib/editor-picks';

export const metadata: Metadata = {
  title: 'Chauffeur services in London · featured shortlist',
  description:
    'Editorial shortlist of London chauffeur and private-hire operators. Compare profiles on equal terms, with no paid ranking.',
};

export default function ChauffeurServicesPage() {
  const picksOrder = getEditorsPicks();

  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Discovery</p>
          <h1 className="font-display mt-6 text-display-xl font-medium text-ink">
            Chauffeur services in London
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              Use this page to compare operators we have profiled under the same editorial template.
              If you need an{' '}
              <Link href={`/featured/${TROUV_SLUG}`} className="link-underline font-medium text-ink">
                airport chauffeur service
              </Link>{' '}
              with structured meet-and-greet, or a desk that handles executive itineraries end to end,
              work through the shortlist below, then open each full profile before you book.
            </p>
            <p>
              For background reading first, see our journal on{' '}
              <Link href="/blog?category=Airport%20Transfers" className="link-underline font-medium text-ink">
                airport transfers
              </Link>{' '}
              and{' '}
              <Link href="/blog?category=Corporate" className="link-underline font-medium text-ink">
                corporate hire
              </Link>
              .
            </p>
            <p>
              To{' '}
              <Link href={`/featured/${TROUV_SLUG}`} className="link-underline font-medium text-ink">
                book a chauffeur
              </Link>
              , use the website links on live operator profiles. This desk does not take booking
              commission.
            </p>
          </div>

          <section className="mt-16" aria-labelledby="shortlist-heading">
            <h2 id="shortlist-heading" className="editorial-label">
              Featured operator shortlist
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ink-muted">
              Order rotates weekly so no company holds a fixed primary slot. Layout and depth are
              identical for every card.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {picksOrder.map((c) => (
                <FeaturedCompanyCard key={c.slug} company={c} />
              ))}
            </div>
            <p className="mt-12 text-center text-sm text-ink-muted">
              <Link href="/featured" className="font-medium text-ink underline underline-offset-4">
                Editorial featured directory (same companies, desk framing) →
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
