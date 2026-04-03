import Link from 'next/link';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import { getTopicByCategory } from '@/lib/journal-taxonomy';

type Props = {
  category: string | null;
  readTime: number;
  /** Article slug — excludes current post from related hub links */
  articleSlug: string;
};

export default function ArticleAside({ category, readTime, articleSlug }: Props) {
  const topic = category ? getTopicByCategory(category) : undefined;
  const hubId = topic?.guideSectionId;
  const hub = hubId ? GUIDE_HUBS.find((h) => h.id === hubId) : undefined;
  const currentPath = `/blog/${articleSlug}`;
  const relatedInHub =
    hub?.links.filter((l) => l.href !== currentPath).slice(0, 4) ?? [];

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start" aria-label="Article context">
      <div className="border border-line bg-surface p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <p className="editorial-label">Article</p>
        <dl className="mt-4 space-y-3 text-sm">
          {category && (
            <div>
              <dt className="text-ink-subtle">Topic</dt>
              <dd className="mt-1 font-medium text-ink">
                <Link href={`/blog?category=${encodeURIComponent(category)}`} className="link-underline">
                  {category}
                </Link>
              </dd>
            </div>
          )}
          <div>
            <dt className="text-ink-subtle">Reading time</dt>
            <dd className="mt-1 font-medium text-ink">{readTime} minutes</dd>
          </div>
        </dl>
        <Link
          href="/blog"
          className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted hover:text-ink"
        >
          ← Journal archive
        </Link>
      </div>

      {relatedInHub.length > 0 && hub && (
        <div className="mt-6 border border-line bg-paper-warm p-6">
          <p className="editorial-label">Related guides</p>
          <p className="mt-2 font-display text-base font-medium text-ink">{hub.title}</p>
          <ul className="mt-4 space-y-3 text-sm">
            {relatedInHub.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline text-ink-muted hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/guides#${hub.id}`}
            className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-ink"
          >
            Hub index →
          </Link>
        </div>
      )}

      <div className="mt-6 border border-line bg-surface p-6">
        <p className="editorial-label">Operators</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Compare editorial profiles on equal terms — shortlist updated on a rotating basis.
        </p>
        <Link href="/chauffeur-services" className="btn-secondary mt-4 w-full text-center text-[0.65rem]">
          View chauffeur services
        </Link>
      </div>
    </aside>
  );
}
