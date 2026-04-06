import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import RelatedLinks from '@/components/editorial/RelatedLinks';

export const metadata: Metadata = {
  title: 'Chauffeur service types in London',
  description:
    'How platform, large-scale, private chauffeur, and ride-hail models differ in London: use cases, trade-offs, and procurement language, without ranking operators.',
};

export default function ChauffeurServiceTypesLondonPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <article className="max-w-editorial mx-auto">
          <p className="editorial-label">Market guide</p>
          <h1 className="font-display mt-6 text-display-lg font-semibold text-ink">
            Chauffeur service types in London
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            Buyers rarely fail because they lack vehicles. They fail because they treat every option as
            if it were the same product. This guide names structural shapes you will see in London, with
            neutral framing so you can match the model to the job.
          </p>

          <div className="mt-14 space-y-14 text-base leading-[1.85] text-ink-muted">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Platform-based chauffeur apps</h2>
              <p className="mt-4">
                Platform models put a technology product in front of the traveller. Pricing, account
                structure, and how supply is matched are central. Examples include{' '}
                <Link href="/companies/uber-executive" className="font-medium text-ink underline underline-offset-2">
                  Uber
                </Link>
                ,{' '}
                <Link href="/companies/bolt" className="font-medium text-ink underline underline-offset-2">
                  Bolt
                </Link>
                ,{' '}
                <Link href="/companies/wheely" className="font-medium text-ink underline underline-offset-2">
                  Wheely
                </Link>
                , and{' '}
                <Link href="/companies/blacklane" className="font-medium text-ink underline underline-offset-2">
                  Blacklane
                </Link>
                . The shared trait is booking through an app or central account rather than a single named
                garage line, even when presentation targets executive expectations.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> Speed and repeatability for
                individuals and travel managers can be high. Bespoke choreography may be thinner unless
                negotiated explicitly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Large established operators</h2>
              <p className="mt-4">
                Volume private hire operators run dense fleets, dispatch, and corporate billing.{' '}
                <Link
                  href="/companies/addison-lee"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Addison Lee
                </Link>{' '}
                is the London reference many procurement teams already hold. The model excels when you
                need concurrent cars, airport turns, or a house account that behaves like managed PHV.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> Scale can add or reduce edge
                variance depending on account rules. Buyers who want a single human owner on every
                itinerary may still prefer smaller desks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Private chauffeur companies</h2>
              <p className="mt-4">
                Private desks such as{' '}
                <Link
                  href="/companies/trouv-chauffeurs"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Trouv Chauffeurs
                </Link>{' '}
                and{' '}
                <Link href="/companies/ichauffeur" className="font-medium text-ink underline underline-offset-2">
                  iChauffeur
                </Link>{' '}
                sell planning, presentation, and named accountability. Brokered programmes such as{' '}
                <Link href="/companies/savoya" className="font-medium text-ink underline underline-offset-2">
                  Savoya
                </Link>{' '}
                sit adjacent when travel offices import a managed category across cities.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> Higher expectations on detail
                should be matched by written scope on waits, substitutions, and billing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Ride-hailing as a separate tier</h2>
              <p className="mt-4">
                Open-pool ride-hail is its own category: matching economics, broad supply, and service
                design centred on trip completion rather than arrival rituals. It belongs in policy
                conversations as distinct from chauffeur, not as a cheaper twin. See{' '}
                <Link
                  href="/comparisons/ride-hailing-vs-executive-chauffeur"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  ride-hailing vs executive chauffeur
                </Link>{' '}
                and{' '}
                <Link
                  href="/comparisons/uber-vs-chauffeur-london"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Uber vs chauffeur in London
                </Link>
                .
              </p>
            </section>

            <section className="border border-line bg-paper-warm p-8">
              <h2 className="font-display text-xl font-semibold text-ink">How we write about operators</h2>
              <p className="mt-4">
                Context pages under{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  companies
                </Link>{' '}
                describe positioning, not league tables. Selection criteria are on{' '}
                <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
                  methodology
                </Link>
                ; editorial rules on{' '}
                <Link href="/editorial-standards" className="font-medium text-ink underline underline-offset-2">
                  editorial standards
                </Link>
                .
              </p>
            </section>
          </div>

          <RelatedLinks
            title="Continue reading"
            links={[
              {
                href: '/guides/chauffeur-services-london',
                label: 'Chauffeur services in London',
                description: 'Market map for executive ground transport.',
              },
              {
                href: '/comparisons/blacklane-vs-private-chauffeur',
                label: 'Blacklane vs private chauffeur',
                description: 'Platform vs local desk procurement fit.',
              },
              {
                href: '/comparisons/wheely-vs-chauffeur-london',
                label: 'Wheely vs chauffeur in London',
                description: 'Premium app vs relationship-led service.',
              },
            ]}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
