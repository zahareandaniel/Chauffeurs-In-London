import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import GuideCard from '@/components/editorial/GuideCard';
import { PILLAR_GUIDES } from '@/lib/pillar-content';

export const metadata: Metadata = {
  title: 'London Chauffeur Market Guides',
  description:
    'Pillar market guides plus editorial hubs for airports, corporate travel, weddings, and journal pieces on London executive transport.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndexPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Guides</p>
          <h1 className="font-display mt-6 text-display-xl font-semibold text-ink">Market guides</h1>
          <p className="mt-8 max-w-editorial text-lg text-ink-muted">
            Pillar explainers interpret how London executive ground transport is bought and structured;
            hubs below group related journal entries for airport and events readers.
          </p>

          <section className="mt-14" aria-labelledby="pillar-guides-heading">
            <h2 id="pillar-guides-heading" className="font-display text-xl font-semibold text-ink">
              Pillar guides
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {PILLAR_GUIDES.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
            <p className="mt-8 text-sm text-ink-muted">
              For comparisons alongside guides, open the{' '}
              <Link href="/comparisons" className="font-medium text-ink underline underline-offset-2">
                comparisons index
              </Link>
              . Editorial rules are on{' '}
              <Link href="/editorial-standards" className="font-medium text-ink underline underline-offset-2">
                editorial standards
              </Link>
              .
            </p>
          </section>

          <section className="mt-14 border border-line bg-surface p-6 sm:p-8" aria-labelledby="guides-cluster-heading">
            <h2 id="guides-cluster-heading" className="font-display text-xl font-semibold text-ink">
              Authority cluster map
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
              This hub anchors the market-knowledge cluster. It links outward to model comparisons, company
              context, and editorial methodology so readers can move from fundamentals to decisions.
            </p>
            <p className="mt-5 text-sm text-ink-muted">
              Continue to{' '}
              <Link href="/comparisons" className="font-medium text-ink underline underline-offset-2">
                comparisons
              </Link>
              ,{' '}
              <Link href="/insights" className="font-medium text-ink underline underline-offset-2">
                insights
              </Link>
              , and{' '}
              <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                company context
              </Link>
              .
            </p>
          </section>

          <div className="mt-20 space-y-16 border-t border-line pt-16">
            {GUIDE_HUBS.map((hub) => (
              <section key={hub.id} id={hub.id} className="scroll-mt-28 border-t border-line pt-16 first:border-0 first:pt-0">
                <h2 className="font-display text-2xl font-medium text-ink">{hub.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">{hub.description}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {hub.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex items-start justify-between gap-4 border border-line bg-surface p-5 transition-colors hover:border-ink/15"
                      >
                        <span className="font-medium text-ink">{l.label}</span>
                        <span className="text-ink-subtle transition-transform group-hover:translate-x-0.5" aria-hidden>
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
