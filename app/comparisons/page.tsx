import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ComparisonCard from '@/components/editorial/ComparisonCard';
import { PILLAR_COMPARISONS } from '@/lib/pillar-content';

export const metadata: Metadata = {
  title: 'Chauffeur and Ride-Hail Comparisons',
  description:
    'Editorial comparisons of chauffeur, ride-hail, and platform models in London, written for procurement and travel audiences.',
  alternates: { canonical: '/comparisons' },
};

export default function ComparisonsIndexPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Editorial</p>
          <h1 className="font-display mt-6 text-display-xl font-semibold text-ink">Comparisons</h1>
          <p className="mt-6 max-w-editorial text-lg text-ink-muted">
            Model-level framing for London executive ground transport. Each piece links onward to guides
            and company context; none carries booking or affiliate calls to action.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLAR_COMPARISONS.map((c) => (
              <ComparisonCard key={c.slug} comparison={c} />
            ))}
          </div>
          <p className="mt-12 text-sm text-ink-muted">
            For market structure before you compare brands, start with{' '}
            <Link href="/guides/chauffeur-service-types-london" className="font-medium text-ink underline underline-offset-2">
              chauffeur service types in London
            </Link>{' '}
            and{' '}
            <Link href="/guides/chauffeur-services-london" className="font-medium text-ink underline underline-offset-2">
              chauffeur services in London
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
