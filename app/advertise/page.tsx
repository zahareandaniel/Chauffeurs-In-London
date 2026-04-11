import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import CategorySponsorBlock from '@/components/commercial/CategorySponsorBlock';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Advertise',
  description:
    'Audience, positioning, and future advertising and sponsorship formats for Chauffeurs in London, an independent editorial platform on executive ground transport.',
};

export default function AdvertisePage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-editorial mx-auto">
          <p className="editorial-label">Media positioning</p>
          <h1 className="font-display mt-6 text-display-lg font-semibold text-ink">
            Working with {SITE.name}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            This is an independent editorial property on the chauffeur and executive transport market
            in London. The readership includes operators, corporate travel buyers, executive assistants,
            concierge teams, hospitality groups, and luxury brand event leads: people who steward
            vehicles, timing, and presentation under scrutiny.
          </p>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8 space-y-10 text-base leading-[1.85] text-ink-muted">
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Why this audience matters</h2>
                <p className="mt-4">
                  Ground transport decisions sit at the intersection of compliance, guest experience,
                  and brand risk. Readers here are not browsing for coupons. They are calibrating
                  suppliers, policies, and service tiers. That makes the context relevant for automotive,
                  mobility, insurance, hospitality, and premium service brands, provided partnerships are
                  transparent and consistent with editorial tone.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">Future formats</h2>
                <p className="mt-4">
                  The platform is structured for category sponsorships, clearly labelled partner
                  placements, sponsored editorial with byline discipline, and selective brand
                  integrations. Nothing in this list is active as a self-serve product. Conversations
                  start with fit and disclosure standards, not rate cards.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold text-ink">How we approach partnerships</h2>
                <p className="mt-4">
                  We prioritise credibility over fill rate. Commercial work must read honestly beside
                  independent coverage, with labels readers can see at a glance. We do not sell
                  undisclosed paid rankings or imitate editorial voice in advertising units.
                </p>
              </section>

              <div className="border border-line bg-paper-warm p-8">
                <h2 className="font-display text-xl font-semibold text-ink">Send an enquiry</h2>
                <p className="mt-4 text-sm">
                  For a private discussion of audience, guidelines, and timing, write via our contact
                  route. Include your organisation, market, and what you are trying to achieve. We reply
                  selectively.
                </p>
                <Link href="/contact" className="btn-secondary mt-6 inline-flex text-[0.65rem]">
                  Send an enquiry
                </Link>
              </div>
            </div>
            <aside className="mt-12 lg:col-span-4 lg:mt-0">
              <CategorySponsorBlock />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
