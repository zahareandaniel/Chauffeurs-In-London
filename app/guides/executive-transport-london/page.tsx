import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleLayout from '@/components/editorial/ArticleLayout';
import RelatedLinks from '@/components/editorial/RelatedLinks';
import CategorySponsorBlock from '@/components/commercial/CategorySponsorBlock';

export const metadata: Metadata = {
  title: 'Executive transport in London',
  description:
    'How corporate travel desks, EAs, and events teams buy executive ground transport in London: policy, risk, and service design.',
};

export default function ExecutiveTransportLondonPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ArticleLayout
              kicker="Buyers guide"
              title="Executive transport in London"
              intro={
                <>
                  Executive transport is a category judged on what happens when something goes wrong: a
                  late inbound, a terminal change, or a client who needs fifteen extra minutes. London adds
                  congestion, airport complexity, and high expectations on presentation. This guide is for
                  people who sign off spend and reputation, not for brochure browsing.
                </>
              }
            >
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">How programmes think</h2>
                <p className="mt-4">
                  Strong programmes name allowable models: which app tiers are permitted, when a booked
                  chauffeur is mandatory, and how invoices reconcile. They also name forbidden shortcuts
                  when client-facing work is involved. That discipline matters because the underlying
                  products differ: marketplace throughput versus accountable desks. Without policy
                  language, travellers revert to habit, and habit is not always aligned with risk.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Airports and fixed-time events</h2>
                <p className="mt-4">
                  Airports reward advance planning: terminal detail, realistic buffers, and explicit wait
                  rules. Events reward patience and communication, especially where road closures or venue
                  stands change on the day. Buyers should read operator scope against those stresses, not
                  against glossy fleet photography alone. Start from{' '}
                  <Link
                    href="/guides/chauffeur-services-london"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    chauffeur services in London
                  </Link>{' '}
                  for market composition, then compare models in{' '}
                  <Link
                    href="/comparisons/blacklane-vs-private-chauffeur"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    Blacklane vs private chauffeur
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/comparisons/wheely-vs-chauffeur-london"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    Wheely vs chauffeur
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Recognised supply</h2>
                <p className="mt-4">
                  When you move from framework to names, use{' '}
                  <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                    company context pages
                  </Link>{' '}
                  to understand how a participant is positioned: platform, volume operator, private desk, or
                  brokered programme. None of those labels is inherently superior; fit depends on route,
                  account governance, and how your organisation handles disruption.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Editorial perspective</h2>
                <p className="mt-4">
                  The desk treats executive transport as operational risk management dressed as
                  hospitality. If a supplier cannot explain waits, substitutions, and escalation paths in
                  plain language, the buyer should treat that as signal, not snobbery.
                </p>
              </section>

              <RelatedLinks
                links={[
                  {
                    href: '/guides/professional-chauffeur-standards',
                    label: 'Professional chauffeur standards',
                  },
                  {
                    href: '/guides/chauffeur-service-types-london',
                    label: 'Chauffeur service types in London',
                  },
                  {
                    href: '/comparisons/ride-hailing-vs-executive-chauffeur',
                    label: 'Ride-hailing vs executive chauffeur',
                  },
                ]}
              />
            </ArticleLayout>
          </div>
          <aside className="mt-12 lg:col-span-4 lg:mt-0">
            <CategorySponsorBlock />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
