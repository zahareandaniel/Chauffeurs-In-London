import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Industry Insights: Executive Transport London',
  description:
    'Industry-level editorial analysis on London executive ground transport: procurement, operating models, and service standards.',
  alternates: { canonical: '/insights' },
};

const CLUSTERS = [
  {
    title: 'Chauffeur vs alternatives',
    description:
      'Model-level comparisons that explain where chauffeur services differ from ride-hailing and platform-led options.',
    links: [
      { href: '/comparisons/uber-vs-chauffeur-london', label: 'Uber vs chauffeur in London' },
      { href: '/comparisons/blacklane-vs-private-chauffeur', label: 'Blacklane vs private chauffeur' },
      { href: '/comparisons/ride-hailing-vs-executive-chauffeur', label: 'Ride-hailing vs executive chauffeur' },
      { href: '/comparisons/wheely-vs-chauffeur-london', label: 'Wheely vs chauffeur in London' },
    ],
  },
  {
    title: 'Chauffeur market knowledge',
    description:
      'Foundational explainers for buyers and assistants who need operational clarity before selecting providers.',
    links: [
      { href: '/guides/chauffeur-services-london', label: 'What chauffeur services in London include' },
      { href: '/guides/chauffeur-service-types-london', label: 'Service model types in London' },
      { href: '/guides/professional-chauffeur-standards', label: 'Professional chauffeur standards' },
      { href: '/guides/executive-transport-london', label: 'Executive transport planning in London' },
    ],
  },
  {
    title: 'Companies and market participants',
    description:
      'Editorial profiles and neutral company context pages used as references across guides and comparisons.',
    links: [
      { href: '/companies', label: 'Recognised companies index' },
      { href: '/featured', label: 'Featured editorial profiles' },
      { href: '/methodology', label: 'How companies are assessed' },
      { href: '/editorial-standards', label: 'Editorial standards and disclosure' },
    ],
  },
] as const;

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Editorial</p>
          <h1 className="font-display mt-6 text-display-xl font-semibold text-ink">Industry insights</h1>
          <p className="mt-6 max-w-editorial text-lg text-ink-muted">
            This section clarifies how London executive ground transport works at category level. It is
            built as a reference layer: structure first, brand mentions second.
          </p>

          <div className="mt-14 space-y-10">
            {CLUSTERS.map((cluster) => (
              <section key={cluster.title} className="border border-line bg-surface p-7 sm:p-9">
                <h2 className="font-display text-2xl font-medium text-ink">{cluster.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">{cluster.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {cluster.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between border border-line bg-paper p-4 text-sm font-medium text-ink transition-colors hover:border-ink/20"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden className="text-ink-subtle transition-transform group-hover:translate-x-0.5">
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
