import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Editorial standards',
  description:
    'How Chauffeurs in London selects featured operators, maintains editorial independence, and approaches guides on executive travel.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-measure mx-auto">
          <p className="editorial-label">Transparency</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">
            Editorial standards
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            {SITE.name} is an editorial publication about premium ground transport in and around
            London. We are not a regulator, broker, or paid directory. What we are is selective about
            voice, structure, and who we profile.
          </p>

          <div className="mt-16 space-y-12 text-sm leading-[1.85] text-ink-muted sm:text-base">
            <section>
              <h2 className="font-display text-xl font-medium text-ink">What we publish</h2>
              <p className="mt-4">
                Long-form guides (airports, corporate travel, events, market context), comparison
                pieces where they help readers decide, and occasional operator features written to the
                same standard as the rest of the desk — fact-led tone, clear limitations, no
                guarantee language.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">How features are chosen</h2>
              <p className="mt-4">
                A feature is not an endorsement of every future journey. We look for public-facing
                evidence of operational seriousness: clarity of offer, professional presentation,
                breadth where relevant, and alignment with how executive buyers actually buy
                chauffeur services. We may decline or withdraw profiles as the market changes.
              </p>
              <ul className="mt-6 space-y-3 border-l-2 border-line pl-6">
                {[
                  'Professionalism in communications and stated service scope',
                  'Consistency of brand and vehicle positioning vs. claims made',
                  'Reputation signals we can reasonably observe without inside data',
                  'Suitability for the readership (corporate, airport-heavy, event-led)',
                  'Willingness to work with fact-checked editorial copy',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">
                Independence &amp; named operators
              </h2>
              <p className="mt-4">
                Guides sometimes name{' '}
                <Link href="/featured/trouv" className="text-ink underline underline-offset-2">
                  Trouv Chauffeurs
                </Link>{' '}
                — or others on the shortlist — where a concrete example helps readers act on the
                topic. That does not convert this site into a single-brand funnel: featured operators
                are assessed under the criteria above, not sponsorship tiers, and we do not sell
                placement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">What we do not claim</h2>
              <p className="mt-4">
                We do not perform licensing audits, mystery-shop every journey, or verify insurance
                documents. Readers should satisfy themselves on TfL licensing, terms, and insurance as
                they would with any operator. Our role is editorial clarity, not certification.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">Common questions</h2>
              <dl className="mt-6 space-y-8">
                <div>
                  <dt className="font-medium text-ink">Do you charge for featured profiles?</dt>
                  <dd className="mt-2 text-ink-muted">
                    No. Editorial features are not sold as a directory product. We may still say no
                    if the fit is not right.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Is a feature an endorsement?</dt>
                  <dd className="mt-2 text-ink-muted">
                    It is an editorial assessment based on public information and desk research — not
                    a guarantee of service quality on every journey.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">How long does review take?</dt>
                  <dd className="mt-2 text-ink-muted">
                    Variable. We prioritise serious submissions with clear service scope; bulk or
                    low-effort inquiries may not receive a reply.
                  </dd>
                </div>
              </dl>
            </section>

            <section className="border border-line bg-paper-warm p-8">
              <h2 className="font-display text-xl font-medium text-ink">Work with the desk</h2>
              <p className="mt-4">
                If your company fits the London chauffeur market at a premium standard, you can open
                a conversation. We reply to serious inquiries; we do not guarantee inclusion.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/get-featured" className="btn-primary">
                  Request a feature
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
