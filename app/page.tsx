import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CompanyCard from '@/components/editorial/CompanyCard';
import GuideCard from '@/components/editorial/GuideCard';
import ComparisonCard from '@/components/editorial/ComparisonCard';
import FeaturedPartnerStrip from '@/components/commercial/FeaturedPartnerStrip';
import { SITE } from '@/lib/site-config';
import { getHomepageRecognisedOperators } from '@/lib/market-operators';
import { PILLAR_GUIDES, PILLAR_COMPARISONS } from '@/lib/pillar-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Ground Transport in London',
  description:
    'Independent editorial coverage of London executive ground transport: guides, comparisons, and recognised operators without directory noise.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const operators = getHomepageRecognisedOperators();
  const guides = PILLAR_GUIDES.slice(0, 4);
  const comparisons = PILLAR_COMPARISONS.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="hero-rule border-b border-line bg-paper">
          <div className="max-w-content mx-auto px-4 py-section sm:px-6 lg:px-8">
            <div className="max-w-4xl border-l-[3px] border-accent pl-6 sm:pl-8">
              <h1 className="font-display text-display-2xl font-semibold tracking-tight text-ink">
                The reference point for executive ground transport in London.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                Independent editorial coverage of the chauffeur market, service standards, and premium
                mobility.
              </p>
              <p className="mt-10">
                <Link href="/insights" className="link-underline text-sm font-semibold">
                  Start with the insights hub
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-surface px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-editorial mx-auto space-y-6 text-base leading-[1.85] text-ink-muted">
            <p className="editorial-label">Platform</p>
            <p>
              {SITE.name} is written for operators calibrating their market position, corporate travel
              managers defending policy, executive assistants handling arrivals, concierge and hotel teams
              managing guests, and luxury brand leads coordinating road transport around events. The work
              is analytical and commercially literate: how models differ, where risk sits, and what
              serious procurement looks like.
            </p>
            <p>
              <Link href="/guides/chauffeur-services-london" className="font-medium text-ink underline underline-offset-2">
                Learn how the market works
              </Link>{' '}
              in the first pillar guide, or open the{' '}
              <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                company index
              </Link>{' '}
              for recognised participants.
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <h2 className="font-display text-display-lg font-semibold text-ink">
              Recognised operators in this market
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
              The platform covers established service models and recognised participants in London&apos;s
              executive transport market. Cards link to on-site context, not rankings.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {operators.map((op) => (
                <CompanyCard key={op.slug} operator={op} />
              ))}
            </div>
            <p className="mt-10">
              <Link href="/companies" className="link-underline text-sm font-semibold text-ink">
                View recognised operators
              </Link>
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-surface px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <h2 className="font-display text-display-lg font-semibold text-ink">Market guides</h2>
            <p className="mt-4 max-w-2xl text-sm text-ink-muted">
              Structured explainers on how the category is organised and bought.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {guides.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
            <p className="mt-10">
              <Link href="/guides" className="link-underline text-sm font-semibold text-ink">
                Guides index
              </Link>
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <h2 className="font-display text-display-lg font-semibold text-ink">Comparisons</h2>
            <p className="mt-4 max-w-2xl text-sm text-ink-muted">
              Editorial framing of model differences, not consumer scorecards.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {comparisons.map((c) => (
                <ComparisonCard key={c.slug} comparison={c} />
              ))}
            </div>
            <p className="mt-10">
              <Link href="/comparisons" className="link-underline text-sm font-semibold text-ink">
                Comparisons index
              </Link>
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-surface px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-editorial mx-auto">
            <h2 className="font-display text-display-lg font-semibold text-ink">Editorial discipline</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Coverage is selective. Company pages describe market fit and trade-offs. They are not open
              listings, and recognition is not sold as a directory product. Comparisons explain service
              classes rather than declaring winners. When commercial formats launch, they will carry
              clear labels.
            </p>
            <p className="mt-6">
              <Link href="/editorial-standards" className="link-underline text-sm font-semibold text-ink">
                Read editorial standards
              </Link>
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Working with this platform</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                For brands and operators evaluating category presence, media adjacency, or partner
                formats, we maintain a selective conversation. No self-serve rate card. Fit and disclosure
                come first.
              </p>
              <Link href="/advertise" className="btn-secondary mt-6 inline-flex text-[0.65rem]">
                Advertise enquiries
              </Link>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Editorial review</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Companies seeking an editorial assessment of fit may request consideration. Inclusion is
                not transactional. We publish only where the desk sees reader value.
              </p>
              <Link href="/get-featured" className="btn-secondary mt-6 inline-flex text-[0.65rem]">
                Request editorial review
              </Link>
            </div>
          </div>
        </section>

        <FeaturedPartnerStrip />
      </main>
      <Footer />
    </>
  );
}
