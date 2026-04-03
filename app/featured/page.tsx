import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import FeaturedCompanyCard from '@/components/editorial/FeaturedCompanyCard';
import Link from 'next/link';
import { getFeaturedCompanies, TROUV_SLUG } from '@/lib/featured-companies';

export const metadata: Metadata = {
  title: 'Featured operators',
  description:
    'Editorial profiles of selected London chauffeur operators. Inclusion is curated against published standards — not sold as directory placement.',
};

export default function FeaturedPage() {
  const companies = [...getFeaturedCompanies()].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Editor&apos;s desk</p>
          <h1 className="font-display mt-6 text-display-xl font-medium text-ink">
            Featured operators
          </h1>
          <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-muted">
            Each profile is researched and written for readers evaluating ground transport in London.
            Sample entries demonstrate layout; live partners are labelled clearly. Nothing here is a
            pay-to-list placement.
          </p>
          <div className="mt-6 max-w-measure space-y-4 border-l-2 border-ink pl-6 text-sm text-ink-muted">
            <p>
              For a reader-facing view of the same shortlist (with extra navigation copy), open{' '}
              <Link href="/chauffeur-services" className="font-medium text-ink underline underline-offset-2">
                chauffeur services in London
              </Link>
              . Profiles such as{' '}
              <Link href={`/featured/${TROUV_SLUG}`} className="font-medium text-ink underline underline-offset-2">
                Trouv Chauffeurs
              </Link>{' '}
              sit on identical templates to sample entries.
            </p>
            <p>
              For methodology and how to request consideration, see{' '}
              <Link href="/about" className="font-medium text-ink underline underline-offset-2">
                editorial standards
              </Link>{' '}
              and{' '}
              <Link href="/get-featured" className="font-medium text-ink underline underline-offset-2">
                request a feature
              </Link>
              .
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {companies.map((c) => (
              <FeaturedCompanyCard key={c.slug} company={c} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
