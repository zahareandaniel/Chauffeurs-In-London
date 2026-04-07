import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleLayout from '@/components/editorial/ArticleLayout';
import RelatedLinks from '@/components/editorial/RelatedLinks';
import ClusterLinks from '@/components/editorial/ClusterLinks';
import CategorySponsorBlock from '@/components/commercial/CategorySponsorBlock';

export const metadata: Metadata = {
  title: 'Professional chauffeur standards',
  description:
    'TfL licensing context, vehicle presentation, and operational norms that define professional chauffeur service in London.',
};

export default function ProfessionalChauffeurStandardsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ArticleLayout
              kicker="Standards"
              title="Professional chauffeur standards"
              intro={
                <>
                  “Professional” is an abused word in private hire marketing. In London it should at
                  minimum connect to licensing reality, vehicle condition, punctuality behaviour, and the
                  clarity of what a booking includes. This guide sets expectations for readers evaluating
                  suppliers without pretending to be legal advice.
                </>
              }
            >
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Licensing and compliance</h2>
                <p className="mt-4">
                  TfL-licensed private hire vehicles and drivers are table stakes for lawful pre-booked
                  work. Executive marketing does not replace those checks. Buyers should confirm operator
                  credentials as they would for any high-stakes category: operator licence, driver licence,
                  vehicle suitability, and insurance appropriate to hire-and-reward. Our pages do not
                  audit individual documents; they contextualise market participants editorially.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Vehicle presentation and conduct</h2>
                <p className="mt-4">
                  Professional chauffeur service usually implies clean, well-presented vehicles matched to
                  the booked class, and drivers who understand meet-and-greet choreography, luggage
                  handling, and discretion. Standards vary by house style; what matters is that the
                  contract or confirmation states them. Vague promises are a poor substitute for written
                  scope on waits, substitutions, and dress expectations.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Reliability and communication</h2>
                <p className="mt-4">
                  Serious desks monitor inbound flights where relevant, communicate terminal changes, and
                  expose a single point of contact when plans shift. App marketplaces optimise different
                  metrics. Understanding that distinction is central to{' '}
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

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Where to read further</h2>
                <p className="mt-4">
                  Market structure sits in{' '}
                  <Link
                    href="/guides/chauffeur-services-london"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    chauffeur services in London
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/guides/chauffeur-service-types-london"
                    className="font-medium text-ink underline underline-offset-2"
                  >
                    chauffeur service types in London
                  </Link>
                  . Company positioning for recognised operators is on{' '}
                  <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                    the company index
                  </Link>
                  .
                </p>
              </section>

              <RelatedLinks
                links={[
                  { href: '/guides/executive-transport-london', label: 'Executive transport in London' },
                  { href: '/comparisons/uber-vs-chauffeur-london', label: 'Uber vs chauffeur in London' },
                  { href: '/comparisons/wheely-vs-chauffeur-london', label: 'Wheely vs chauffeur in London' },
                  { href: '/editorial-standards', label: 'Editorial standards' },
                ]}
              />
              <ClusterLinks type="guides" />
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
