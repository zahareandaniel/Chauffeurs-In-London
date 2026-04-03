import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the editorial desk for Chauffeurs in London — reader notes, corrections, and operator inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-measure mx-auto">
          <p className="editorial-label">Desk</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">Contact</h1>
          <p className="mt-8 text-base leading-relaxed text-ink-muted">
            For corrections, reader feedback, media, or commercial context unrelated to driver
            recruitment, use the email below. We aim to read everything; response time varies.
          </p>
          <div className="mt-12 border border-line bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              Email
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-3 inline-block font-display text-xl text-ink underline underline-offset-4"
            >
              {SITE.contactEmail}
            </a>
            <p className="mt-6 text-sm text-ink-muted">
              For operator inclusion requests, the{' '}
              <a href="/get-featured" className="text-ink underline underline-offset-2">
                request a feature
              </a>{' '}
              flow helps us triage faster.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
