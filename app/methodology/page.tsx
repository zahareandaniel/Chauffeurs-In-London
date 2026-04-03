import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'How companies are selected',
  description:
    'How Chauffeurs in London selects featured operators and frames market context pages. Not an open directory, not pay-to-list.',
};

const CRITERIA = [
  {
    title: 'Service consistency',
    body: 'Public materials, booking paths, and stated scope should read as coherent. We look for operators whose story matches how a serious buyer would test them on the first journey.',
  },
  {
    title: 'Operational clarity',
    body: 'Airports, waits, cancellations, and escalation should be describable in plain English. Confusion in the contract layer is a signal, even when branding is polished.',
  },
  {
    title: 'Market presence',
    body: 'We note where a desk is structurally visible: geography, account use, and the kinds of buyers who already hold them in mind. Presence is context, not a score.',
  },
  {
    title: 'Service model fit',
    body: 'App-led, platform, volume PHV, or relationship chauffeur: each model behaves differently. We select features when the model is legible and useful to readers learning the category.',
  },
  {
    title: 'Executive and airport travel',
    body: 'Much of our readership lives at airports, board schedules, and fixed-time venues. Features tend to align with that workload, without pretending every operator fits every brief.',
  },
];

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-measure mx-auto">
          <p className="editorial-label">Transparency</p>
          <h1 className="font-display mt-6 text-display-lg font-medium text-ink">
            How companies are selected
          </h1>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>
              {SITE.name} is not an open directory. Editorial features are chosen case by case, and
              market context pages exist so we can speak accurately about how the industry is shaped,
              not so every brand gets a turnkey listing.
            </p>
            <p>
              Nothing here is pay-to-list. If an operator appears on the featured programme, it is because
              the desk believes the profile adds reader value under the criteria below. If a name is
              absent, that is not automatically a criticism: timing, fit, and editorial capacity all
              matter.
            </p>
          </div>

          <div className="mt-16 space-y-12 text-sm leading-[1.85] text-ink-muted sm:text-base">
            <section>
              <h2 className="font-display text-xl font-medium text-ink">Selection criteria we use</h2>
              <ul className="mt-8 space-y-10">
                {CRITERIA.map((c) => (
                  <li key={c.title} className="border-l-2 border-line pl-6">
                    <h3 className="font-display text-lg font-medium text-ink">{c.title}</h3>
                    <p className="mt-3">{c.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-line bg-paper-warm p-8">
              <h2 className="font-display text-xl font-medium text-ink">Market context vs features</h2>
              <p className="mt-4">
                Recognised operators under{' '}
                <Link href="/companies" className="font-medium text-ink underline underline-offset-2">
                  market context
                </Link>{' '}
                are reference pages. Featured profiles on the{' '}
                <Link href="/featured" className="font-medium text-ink underline underline-offset-2">
                  editorial programme
                </Link>{' '}
                follow the methodology on this page. Same site, different depth and bar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink">Further reading</h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link href="/guides/chauffeur-service-types-london" className="link-underline font-medium text-ink">
                    Chauffeur service types in London
                  </Link>
                </li>
                <li>
                  <Link href="/comparisons/uber-vs-chauffeur-london" className="link-underline font-medium text-ink">
                    Uber vs chauffeur in London (editorial comparison)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="link-underline font-medium text-ink">
                    Broader editorial standards
                  </Link>
                </li>
                <li>
                  <Link href="/get-featured" className="link-underline font-medium text-ink">
                    Request editorial consideration
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
