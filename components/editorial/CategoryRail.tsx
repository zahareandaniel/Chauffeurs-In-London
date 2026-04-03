import Link from 'next/link';
import { JOURNAL_TOPICS } from '@/lib/journal-taxonomy';

/** Homepage + cross-links: editorial topic strips */
export default function CategoryRail() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="max-w-content mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="editorial-label text-center">Browse by topic</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {JOURNAL_TOPICS.map((t) => (
            <li key={t.category}>
              <Link
                href={`/blog?category=${encodeURIComponent(t.category)}`}
                className="inline-flex border border-line bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-ink hover:bg-paper-warm hover:text-ink"
              >
                {t.category}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/topics"
              className="inline-flex border border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-ink-muted"
            >
              All topics →
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
