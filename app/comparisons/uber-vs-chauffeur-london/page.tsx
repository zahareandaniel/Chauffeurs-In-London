import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import RecommendedChauffeurServices from '@/components/editorial/RecommendedChauffeurServices';
import { getConversionRecommendations } from '@/lib/market-operators';

export const metadata: Metadata = {
  title: 'Uber vs chauffeur in London',
  description:
    'Editorial comparison of app-led ride platforms and dedicated chauffeur desks in London: booking, reliability, pricing, flexibility, and service level, without slating brands.',
};

export default function UberVsChauffeurLondonPage() {
  const recommended = getConversionRecommendations({ seed: 'uber-vs-chauffeur' });

  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <article className="max-w-measure mx-auto">
          <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/guides" className="hover:text-ink">
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Uber vs chauffeur</li>
            </ol>
          </nav>

          <p className="editorial-label mt-10">Editorial comparison</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">
            Uber vs chauffeur in London
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            This is not a verdict on a single company. It is a comparison between two recurring ways
            people move in the capital: app-led platforms with wide supply, and relationship-led
            chauffeur desks built around planned arrivals, waits, and presentation. Most frequent
            travellers use both at different moments; the question is which one matches a given leg.
          </p>

          <div className="mt-14 space-y-12 text-base leading-[1.85] text-ink-muted">
            <section>
              <h2 className="font-display text-xl font-medium text-ink">1. Introduction</h2>
              <p className="mt-4">
                <Link href="/companies/uber" className="font-medium text-ink underline underline-offset-2">
                  Uber
                </Link>{' '}
                stands in here as the familiar marketplace model: matching, tiers, and supply that
                shifts with demand. Chauffeur, in the sense we use on this site, usually means a booked,
                accountable car with norms around dress, meet-and-greet, and how long the driver will
                hold. A concrete editorial example of that desk-led shape is{' '}
                <Link href="/featured/trouv" className="font-medium text-ink underline underline-offset-2">
                  Trouv Chauffeurs
                </Link>
                ; other operators sit on the same spectrum with different coverage maps.
              </p>
              <p className="mt-4">
                For platform-style chauffeur booking (different from open ride-hail) see context pages
                for{' '}
                <Link href="/companies/blacklane" className="font-medium text-ink underline underline-offset-2">
                  Blacklane
                </Link>{' '}
                and{' '}
                <Link href="/companies/wheely" className="font-medium text-ink underline underline-offset-2">
                  Wheely
                </Link>
                . They share “book through a product” DNA with Uber but target different presentation
                and procurement paths.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">2. What each service is</h2>
              <p className="mt-4">
                <span className="font-medium text-ink">Uber (and similar marketplaces).</span>{' '}
                On-demand matching via an app; economics reflect availability and distance; the unit of
                service is typically a completed trip rather than a managed itinerary.
              </p>
              <p className="mt-4">
                <span className="font-medium text-ink">Chauffeur desk.</span> Usually advance booking, a
                stated vehicle class, and human coordination when flights or meetings move. The unit
                of service is closer to “the day’s ground plan” than to a single hop.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">3. Key differences</h2>
              <ul className="mt-6 space-y-6">
                <li className="border-l-2 border-line pl-5">
                  <p className="font-medium text-ink">Booking experience</p>
                  <p className="mt-2">
                    Uber optimises for self-serve speed. Chauffeur desks optimise for confirming waits,
                    terminals, and name-board detail before the traveller lands.
                  </p>
                </li>
                <li className="border-l-2 border-line pl-5">
                  <p className="font-medium text-ink">Reliability</p>
                  <p className="mt-1">
                    Uber’s strength is broad supply; variance between drivers is inherent. Chauffeur’s
                    strength is procedural: when something breaks, you call one desk, not a ticket queue.
                  </p>
                </li>
                <li className="border-l-2 border-line pl-5">
                  <p className="font-medium text-ink">Pricing structure</p>
                  <p className="mt-2">
                    Marketplace trips respond to demand. Chauffeur fees are often quoted as fixed or
                    time-based programmes, which helps finance teams compare apples to apples on
                    high-stakes days.
                  </p>
                </li>
                <li className="border-l-2 border-line pl-5">
                  <p className="font-medium text-ink">Flexibility</p>
                  <p className="mt-1">
                    Uber wins on instant changes for informal legs. Chauffeur wins when the itinerary is
                    fragile and you need someone to hold the plan together across delays.
                  </p>
                </li>
                <li className="border-l-2 border-line pl-5">
                  <p className="font-medium text-ink">Level of service</p>
                  <p className="mt-2">
                    Presentation, luggage handling, and client-facing choreography are design centres for
                    chauffeur. Throughput and coverage are design centres for mass-market apps. Neither is
                    trivial; they aim at different jobs.
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">4. When to use each</h2>
              <p className="mt-4">
                Use an app marketplace when the trip is personal, short, flexible, and the cost of
                variance is low. Use a chauffeur desk when someone’s reputation is in the vehicle:
                board arrivals, investor collections, weddings, and airport meets where lateness
                propagates through a whole schedule.
              </p>
              <p className="mt-4">
                A mixed week is normal: app for a dinner hop, chauffeur for the Heathrow inbound when
                the terminal and wait rules have to be right.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">5. Conclusion</h2>
              <p className="mt-4">
                Neither model replaces the other. For premium use (fixed time, visible client, low
                tolerance for chaos), a chauffeur relationship is usually the structurally safer tool
                because the product is aligned with planning, not only matching. For informal movement,
                apps remain efficient. Your procurement should name the job before it names the brand.
              </p>
              <p className="mt-4">
                Go deeper on shapes of supply in{' '}
                <Link
                  href="/guides/chauffeur-service-types-london"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  chauffeur service types in London
                </Link>
                , and read airport-specific framing in{' '}
                <Link
                  href="/blog/heathrow-airport-transfers-complete-guide"
                  className="font-medium text-ink underline underline-offset-2"
                >
                  our Heathrow journal guide
                </Link>
                .
              </p>
            </section>
          </div>

          <RecommendedChauffeurServices rows={recommended} />
        </article>
      </main>
      <Footer />
    </>
  );
}
