import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy overview for Chauffeurs in London.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-measure mx-auto prose prose-sm">
          <h1 className="font-display text-display-lg font-medium text-ink">Privacy</h1>
          <p className="text-ink-muted">
            This site is primarily editorial. We do not operate a logged-in consumer service on this
            domain. Forms that open your email client do not store submissions on our servers by
            default.
          </p>
          <p className="text-ink-muted">
            Hosting and analytics providers used by your deployment may process technical data (e.g.
            IP, device) under their policies. Replace this page with counsel-approved text before
            scaling marketing data collection.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
