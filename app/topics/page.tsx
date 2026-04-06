import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { JOURNAL_TOPICS } from '@/lib/journal-taxonomy';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Topics',
  description:
    'Editorial topics covering London chauffeurs: airports, corporate travel, weddings, events, and industry analysis, curated by the Chauffeurs in London desk.',
};

export default function TopicsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-section sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <header className="max-w-readable">
            <p className="editorial-label">Journal taxonomy</p>
            <h1 className="font-display mt-6 text-display-xl font-medium text-ink">Topics</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {SITE.name} is organised like a publication, not a tag cloud. Each topic collects guides
              written to the same editorial bar: factual, selective, and useful to buyers who cannot
              afford surprises on the road.
            </p>
          </header>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNAL_TOPICS.map((topic) => (
              <article
                key={topic.category}
                className="group flex flex-col border border-line bg-surface p-8 transition-colors hover:border-ink/15"
              >
                <h2 className="font-display text-xl font-medium text-ink">
                  <Link href={`/blog?category=${encodeURIComponent(topic.category)}`} className="hover:opacity-75">
                    {topic.category}
                  </Link>
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{topic.dek}</p>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                  <Link
                    href={`/blog?category=${encodeURIComponent(topic.category)}`}
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-ink"
                  >
                    Open archive →
                  </Link>
                  {topic.guideSectionId && (
                    <Link
                      href={`/guides#${topic.guideSectionId}`}
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle hover:text-ink"
                    >
                      Guides hub
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20 border-t border-line pt-16">
            <p className="editorial-label">Discover</p>
            <h2 className="font-display mt-4 text-2xl font-medium text-ink">Beyond the journal</h2>
            <p className="mt-4 max-w-measure text-sm text-ink-muted">
              Operator profiles, comparison hubs, and the standards we use before anything is
              published under our name.
            </p>
            <ul className="mt-8 flex flex-wrap gap-4">
              <li>
                <Link href="/chauffeur-services" className="btn-secondary text-[0.65rem]">
                  Chauffeur services
                </Link>
              </li>
              <li>
                <Link href="/featured" className="btn-secondary text-[0.65rem]">
                  Featured operators
                </Link>
              </li>
              <li>
                <Link href="/guides" className="btn-secondary text-[0.65rem]">
                  Guides index
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
