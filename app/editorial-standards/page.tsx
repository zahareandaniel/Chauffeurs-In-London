import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import RelatedLinks from '@/components/editorial/RelatedLinks';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Editorial standards',
  description:
    'What this platform covers, how companies are assessed, and how editorial independence is maintained for London executive transport coverage.',
  alternates: { canonical: '/editorial-standards' },
};

export default function EditorialStandardsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <article className="max-w-editorial mx-auto">
          <p className="editorial-label">Authority</p>
          <h1 className="font-display mt-6 text-display-lg font-semibold text-ink">
            Editorial standards
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            {SITE.name} interprets the London chauffeur and executive ground transport market for
            operators, travel desks, executive assistants, hospitality teams, and event planners. This is
            not an open directory, not a regulator, and not a booking service. Inclusion reflects
            editorial judgment and market relevance, not payment.
          </p>

          <div className="mt-14 space-y-12 text-base leading-[1.85] text-ink-muted">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">What this platform covers</h2>
              <p className="mt-4">
                Market guides on how services are structured, comparisons that explain fit rather than
                declaring winners, and{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  company context pages
                </Link>{' '}
                for recognised participants. We write for readers who need to brief boards, refine
                policy, or shortlist suppliers without recycled “luxury” clichés.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Criteria for inclusion</h2>
              <p className="mt-4">
                A profile or mention is not a verdict on every future journey. We look for coherent
                public positioning, operational seriousness, and usefulness to the readership. We may
                decline, defer, or withdraw coverage as facts change. Detailed selection notes live on{' '}
                <Link href="/methodology" className="font-medium text-ink underline underline-offset-2">
                  methodology
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Comparisons and company pages</h2>
              <p className="mt-4">
                Comparisons frame service classes and procurement trade-offs. Company pages describe
                how a participant is positioned in the market, with strengths and limitations stated
                in plain editorial language. Where an official website link appears, it is disclosed as
                reader convenience; the platform does not take booking commission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Independence</h2>
              <p className="mt-4">
                Recognition is not bought through directory fees. Commercial formats such as category
                sponsorship or partner placements, when introduced, will be labelled. Until then, the
                desk remains editorial-first.{' '}
                <Link href="/companies/trouv-chauffeurs" className="font-medium text-ink underline underline-offset-2">
                  Trouv Chauffeurs
                </Link>{' '}
                appears where a concrete London example helps readers connect guidance to a named desk,
                under the same analytical rules as other recognised operators.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Editorial enquiries</h2>
              <p className="mt-4">
                For corrections, source queries, or editorial discussion, use{' '}
                <Link href="/contact" className="font-medium text-ink underline underline-offset-2">
                  contact the desk
                </Link>
                . We do not publish unsolicited promotional copy as editorial articles.
              </p>
            </section>
          </div>

          <RelatedLinks
            title="Related"
            links={[
              { href: '/guides', label: 'Market guides index', description: 'Pillar guides and hubs.' },
              { href: '/companies', label: 'Recognised operators', description: 'Company context pages.' },
              {
                href: '/methodology',
                label: 'Methodology',
                description: 'How assessment and updates work.',
              },
            ]}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
