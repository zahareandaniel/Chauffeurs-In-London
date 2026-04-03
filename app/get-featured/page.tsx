import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import GetFeaturedForm from '@/components/forms/GetFeaturedForm';

export const metadata: Metadata = {
  title: 'Request a feature',
  description:
    'Apply for editorial consideration as a featured chauffeur operator on Chauffeurs in London. Selective process; not pay-to-list.',
};

export default function GetFeaturedPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <p className="editorial-label">Inclusion</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">
            Request editorial consideration
          </h1>
          <p className="mt-8 text-base leading-relaxed text-ink-muted">
            We maintain a short list of featured operators with long-form profiles. Spots are limited,
            review is manual, and we prioritise companies that already demonstrate the presentation
            and operational seriousness described on our{' '}
            <Link href="/about" className="text-ink underline underline-offset-2">
              standards page
            </Link>
            .
          </p>
          <div className="mt-10 space-y-6 text-sm text-ink-muted">
            <p>
              <strong className="text-ink">Suitable applicants</strong> typically operate executive
              or premium vehicles, cover at least one London airport with professional meet processes,
              and can point to a coherent commercial website and booking path.
            </p>
            <p>
              <strong className="text-ink">Process</strong>: you submit context; we review publicly
              available material; if there is a fit we may request a short call or follow-up. We do
              not charge for editorial profiles.
            </p>
            <p>
              <strong className="text-ink">Declines</strong> are not public. Volume may slow
              responses.
            </p>
          </div>
          <GetFeaturedForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
