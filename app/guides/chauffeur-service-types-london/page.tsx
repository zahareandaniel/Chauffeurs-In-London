import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Chauffeur service types in London',
  description:
    'How platform, large-scale, and private chauffeur models differ in London: use cases, trade-offs, and procurement language, without ranking operators.',
};

export default function ChauffeurServiceTypesLondonPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <article className="max-w-measure mx-auto">
          <p className="editorial-label">Market guide</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">
            Chauffeur service types in London
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            Buyers rarely fail because they lack vehicles. They fail because they treat every option as
            if it were the same product. This guide names four structural shapes you will see in London,
            with neutral framing so you can match the model to the job.
          </p>

          <div className="mt-14 space-y-14 text-base leading-[1.85] text-ink-muted">
            <section>
              <h2 className="font-display text-xl font-medium text-ink">Platform-based services</h2>
              <p className="mt-4">
                Platform models (whether ride-hail scale or chauffeur-style booking layers) put a
                technology product in front of the traveller. Pricing, account structure, and how
                supply is matched are central. Examples readers often mention include{' '}
                <Link href="/companies/uber" className="font-medium text-ink underline underline-offset-2">
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
                . Each sits in a different price and presentation band; the shared trait is booking
                through an app or central account rather than a single named garage line.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> Speed and repeatability for
                individuals and travel managers can be high. Bespoke choreography (named dispatcher,
                flexible wait rules, wardrobe and meet-and-greet detail) may be thinner unless you
                negotiate it explicitly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">Large-scale operators</h2>
              <p className="mt-4">
                Volume private hire operators run dense fleets, dispatch, and corporate billing.{' '}
                <Link
                  href="/companies/addison-lee"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  Addison Lee
                </Link>{' '}
                is the London example most procurement teams already recognize. The model excels when you
                need many concurrent cars, airport turns, or a house account that behaves like managed
                PHV rather than boutique chauffeur.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> Scale can flatten variance or
                add it at the edge of the network, depending on how tight your account rules are. Buyers
                who want a single human owner on every itinerary may still drift toward smaller desks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">Private chauffeur companies</h2>
              <p className="mt-4">
                Private chauffeur desks (for example{' '}
                <Link href="/featured/trouv" className="font-medium text-ink underline underline-offset-2">
                  Trouv Chauffeurs
                </Link>
                , on our editorial programme, or{' '}
                <Link href="/companies/ichauffeur" className="font-medium text-ink underline underline-offset-2">
                  iChauffeur
                </Link>
                , as market context) tend to sell relationship, planning, and presentation as part of
                the fee. The point is not “luxury language”. The point is that someone answers the phone
                when the schedule breaks and the client is already in the terminal.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Trade-offs.</span> You may pay more per hour and
                you should still verify licensing and terms like any other category. The upside is
                legibility for high-stakes arrivals, boards, and events where variance is expensive.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">Parallel app economies (Bolt)</h2>
              <p className="mt-4">
                Where travel policy allows more than one ride-hail label,{' '}
                <Link href="/companies/bolt" className="font-medium text-ink underline underline-offset-2">
                  Bolt
                </Link>{' '}
                is the other major app-shaped choice many London travellers already know. It belongs in
                the same procurement conversation as{' '}
                <Link href="/companies/uber" className="font-medium text-ink underline underline-offset-2">
                  Uber
                </Link>
                : on-demand matching, not a substitute for contracted chauffeur when name boards and
                wait windows are fixed. The editorial point is category behaviour, not picking a winner.
              </p>
            </section>

            <section className="border border-line bg-paper-warm p-8">
              <h2 className="font-display text-xl font-medium text-ink">How we write about operators</h2>
              <p className="mt-4">
                Context pages under{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  recognised operators
                </Link>{' '}
                describe market structure. Featured profiles follow{' '}
                <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
                  selection criteria
                </Link>{' '}
                that favour reader clarity over volume of listings.
              </p>
            </section>

            <nav className="border-t border-line pt-10">
              <p className="editorial-label">Continue</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/comparisons/uber-vs-chauffeur-london"
                    className="link-underline font-medium text-ink"
                  >
                    Uber vs chauffeur in London
                  </Link>
                </li>
                <li>
                  <Link href="/blog/heathrow-airport-transfers-complete-guide" className="link-underline font-medium text-ink">
                    Heathrow chauffeur transfers (journal guide)
                  </Link>
                </li>
                <li>
                  <Link href="/chauffeur-services" className="link-underline font-medium text-ink">
                    Featured operator shortlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
