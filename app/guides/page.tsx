import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { GUIDE_HUBS } from '@/lib/guide-hubs';

export const metadata: Metadata = {
  title: 'Guides index',
  description:
    'Editorial hubs for Heathrow, Gatwick, London City, corporate travel, weddings, and chauffeur industry context — structured for readers and search.',
};

export default function GuidesIndexPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <p className="editorial-label">Navigation</p>
          <h1 className="font-display mt-6 text-display-xl font-medium text-ink">Guides index</h1>
          <p className="mt-8 max-w-measure text-lg text-ink-muted">
            Hubs group related journal pieces so you can move from airport context to operator
            standards without hunting through an unstructured archive.
          </p>
          <div className="mt-16 space-y-16">
            {GUIDE_HUBS.map((hub) => (
              <section key={hub.id} id={hub.id} className="scroll-mt-28 border-t border-line pt-16 first:border-0 first:pt-0">
                <h2 className="font-display text-2xl font-medium text-ink">{hub.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">{hub.description}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {hub.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group flex items-start justify-between gap-4 border border-line bg-white p-5 transition-shadow hover:shadow-sm"
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
