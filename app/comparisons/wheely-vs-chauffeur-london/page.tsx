import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleLayout from '@/components/editorial/ArticleLayout';
import RelatedLinks from '@/components/editorial/RelatedLinks';
import ClusterLinks from '@/components/editorial/ClusterLinks';

export const metadata: Metadata = {
  title: 'Wheely vs chauffeur in London',
  description:
    'Editorial comparison of Wheely’s premium app-led model and relationship-led London chauffeur desks: booking, standards, and fit.',
};

export default function WheelyVsChauffeurLondonPage() {
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
              <li className="text-ink">Wheely vs chauffeur</li>
            </ol>
          </nav>

          <ArticleLayout
            kicker="Editorial comparison"
            title="Wheely vs chauffeur in London"
            intro={
              <>
                This comparison sits between mass ride-hail and white-glove programme desks.{' '}
                <Link href="/companies/wheely" className="font-medium text-ink underline underline-offset-2">
                  Wheely
                </Link>{' '}
                productises premium PHV through an app. A London chauffeur desk productises planning and
                named accountability. Both can be correct on different legs of the same week.
              </>
            }
          >
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Service model</h2>
              <p className="mt-4">
                Wheely’s model is technology-first: you choose a class, confirm in-app, and supply
                responds through partner drivers. Chauffeur desks route work through humans who rewrite
                plans when flights slip. That difference matters most when the traveller cannot absorb
                variance quietly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Vehicles and presentation</h2>
              <p className="mt-4">
                Wheely targets presentation-conscious buyers who still want self-serve booking. Chauffeur
                operators typically sell explicit vehicle grades and wait policies as part of a quoted
                itinerary. Neither removes the need to confirm details for client-critical runs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Booking and reliability</h2>
              <p className="mt-4">
                Apps excel at speed. Desks excel at procedural safety nets. Dynamic supply versus
                dispatcher-led planning is the trade-off in plain terms, not a moral story about brands.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Use case fit</h2>
              <p className="mt-4">
                Prefer app-led premium when the traveller accepts marketplace mechanics and the cost of
                variance is manageable. Prefer a chauffeur desk when someone’s standing in arrivals with a
                name board and the schedule cannot absorb improvisation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Editorial perspective</h2>
              <p className="mt-4">
                Wheely is a recognised participant in the premium app tier. Chauffeur desks remain the
                structural answer when choreography is non-negotiable. Read{' '}
                <Link href="/companies/wheely" className="font-medium text-ink underline underline-offset-2">
                  Wheely market context
                </Link>
                ,{' '}
                <Link
                  href="/companies/trouv-chauffeurs"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Trouv Chauffeurs
                </Link>
                , and{' '}
                <Link href="/guides/chauffeur-service-types-london" className="font-medium text-ink underline underline-offset-2">
                  service types guide
                </Link>{' '}
                before you shortlist.
              </p>
              <p className="mt-4">
                Explore recognised chauffeur operators in London via the{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  company index
                </Link>
                .
              </p>
            </section>

            <RelatedLinks
              links={[
                { href: '/comparisons/uber-vs-chauffeur-london', label: 'Uber vs chauffeur in London' },
                { href: '/comparisons/blacklane-vs-private-chauffeur', label: 'Blacklane vs private chauffeur' },
                { href: '/guides/professional-chauffeur-standards', label: 'Professional chauffeur standards' },
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
