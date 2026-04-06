import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleLayout from '@/components/editorial/ArticleLayout';
import RelatedLinks from '@/components/editorial/RelatedLinks';

export const metadata: Metadata = {
  title: 'Ride-hailing vs executive chauffeur',
  description:
    'A framework for London travel buyers: when app-led ride-hail fits, when executive chauffeur contracts fit, and how to explain the difference internally.',
};

export default function RideHailingVsExecutiveChauffeurPage() {
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
              <li className="text-ink">Ride-hailing vs executive chauffeur</li>
            </ol>
          </nav>

          <ArticleLayout
            kicker="Editorial comparison"
            title="Ride-hailing vs executive chauffeur"
            intro={
              <>
                Ride-hailing is built for throughput and coverage. Executive chauffeur is built for plans
                that do not survive variance. In London both coexist in almost every large organisation;
                policy should describe the job before it names a vendor.
              </>
            }
          >
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Throughput versus choreography</h2>
              <p className="mt-4">
                Apps match trips; chauffeur contracts choreograph days. If your risk is “we might wait ten
                extra minutes”, ride-hail is often sufficient. If your risk is “the investor sees the
                wrong car”, you are in a different category. See{' '}
                <Link href="/companies/uber-executive" className="font-medium text-ink underline underline-offset-2">
                  Uber
                </Link>{' '}
                and{' '}
                <Link href="/companies/bolt" className="font-medium text-ink underline underline-offset-2">
                  Bolt
                </Link>{' '}
                for marketplace context.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Drivers, vehicles, and presentation</h2>
              <p className="mt-4">
                Marketplaces tolerate variance by design; chauffeur desks narrow it with stated grades
                and behaviour norms. Neither replaces your obligation to verify licensing and insurance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Booking and liability shapes</h2>
              <p className="mt-4">
                Ride-hail pricing reacts to demand; chauffeur programmes often quote structured fees that
                finance teams can budget against. The right choice is seldom “cheaper”; it is whether the
                pricing shape matches the trip’s political cost.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Editorial perspective</h2>
              <p className="mt-4">
                Treat ride-hail and chauffeur as two service classes, not as a purity contest. Pair this
                piece with{' '}
                <Link
                  href="/comparisons/uber-vs-chauffeur-london"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Uber vs chauffeur in London
                </Link>{' '}
                and{' '}
                <Link
                  href="/guides/professional-chauffeur-standards"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  professional chauffeur standards
                </Link>
                .
              </p>
              <p className="mt-4">
                Explore{' '}
                <Link href="/companies/wheely" className="font-medium text-ink underline underline-offset-2">
                  Wheely
                </Link>{' '}
                and{' '}
                <Link href="/companies/blacklane" className="font-medium text-ink underline underline-offset-2">
                  Blacklane
                </Link>{' '}
                when the traveller needs app speed with tighter presentation bands, then return to the{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  company index
                </Link>
                .
              </p>
            </section>

            <RelatedLinks
              links={[
                { href: '/guides/chauffeur-service-types-london', label: 'Chauffeur service types in London' },
                { href: '/guides/chauffeur-services-london', label: 'Chauffeur services in London' },
                { href: '/comparisons/wheely-vs-chauffeur-london', label: 'Wheely vs chauffeur in London' },
              ]}
            />
          </ArticleLayout>
        </div>
      </main>
      <Footer />
    </>
  );
}
