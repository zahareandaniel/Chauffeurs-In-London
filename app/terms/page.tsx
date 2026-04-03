import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Terms of use for Chauffeurs in London.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-measure mx-auto prose prose-sm">
          <h1 className="font-display text-display-lg font-medium text-ink">Terms of use</h1>
          <p className="text-ink-muted">
            Content is for general information and editorial purposes. It is not legal, financial,
            or insurance advice. Operator features are editorial profiles, not certifications.
          </p>
          <p className="text-ink-muted">
            You agree not to misuse the site or attempt to interfere with its operation. We may
            update these terms; continued use constitutes acceptance of the current version. Replace
            with your jurisdiction-specific legal draft as needed.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
