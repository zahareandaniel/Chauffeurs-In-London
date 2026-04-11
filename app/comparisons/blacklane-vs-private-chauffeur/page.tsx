import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleLayout from '@/components/editorial/ArticleLayout';
import RelatedLinks from '@/components/editorial/RelatedLinks';
import ClusterLinks from '@/components/editorial/ClusterLinks';

export const metadata: Metadata = {
  title: 'Blacklane vs private chauffeur',
  description:
    'How global platform booking compares with local private chauffeur desks for London executive transport: procurement, routing, and accountability.',
};

export default function BlacklaneVsPrivateChauffeurPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-editorial mx-auto">
          <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/comparisons" className="hover:text-ink">
                  Comparisons
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Blacklane vs private chauffeur</li>
            </ol>
          </nav>

          <ArticleLayout
            kicker="Editorial comparison"
            title="Blacklane vs private chauffeur"
            intro={
              <>
                <Link href="/companies/blacklane" className="font-medium text-ink underline underline-offset-2">
                  Blacklane
                </Link>{' '}
                aggregates chauffeur-style supply behind a central product. A private London chauffeur
                company sells a local brand, dispatcher relationships, and route instincts that global
                products may generalise. The question is which layer your itinerary needs.
              </>
            }
          >
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Procurement and workflow</h2>
              <p className="mt-4">
                Platforms win when finance wants repeatability across cities and travellers already book
                inside a familiar interface. Private desks win when the day is brittle and you need a
                planner who answers the phone, not only a help centre.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Routing and execution</h2>
              <p className="mt-4">
                Product rules simplify forecasting. Local dispatch can bend routes when roads or schedules
                shift. Neither removes partner execution at the kerb: the platform routes it, and the desk
                negotiates it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Accountability</h2>
              <p className="mt-4">
                Both models should expose escalation paths. Buyers should read cancellation, substitution,
                and wait policies before client-critical work, regardless of brand colour.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Editorial perspective</h2>
              <p className="mt-4">
                Blacklane is a useful reference for “platform chauffeur”. Private operators remain the right
                mental model when the itinerary is London-specific and high-touch. Compare alongside{' '}
                <Link href="/companies/addison-lee" className="font-medium text-ink underline underline-offset-2">
                  Addison Lee
                </Link>{' '}
                for volume PHV and{' '}
                <Link
                  href="/companies/trouv-chauffeurs"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Trouv Chauffeurs
                </Link>{' '}
                for private-desk context.
              </p>
              <p className="mt-4">
                Continue to{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  recognised chauffeur operators in London
                </Link>
                .
              </p>
            </section>

            <RelatedLinks
              links={[
                { href: '/comparisons/wheely-vs-chauffeur-london', label: 'Wheely vs chauffeur in London' },
                { href: '/guides/executive-transport-london', label: 'Executive transport in London' },
                { href: '/guides/chauffeur-services-london', label: 'Chauffeur services in London' },
              ]}
            />
            <ClusterLinks type="comparisons" />
          </ArticleLayout>
        </div>
      </main>
      <Footer />
    </>
  );
}
