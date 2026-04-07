import { supabase } from '@/lib/supabase';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JOURNAL_CATEGORIES } from '@/lib/guide-hubs';
import { getTopicByCategory } from '@/lib/journal-taxonomy';
import EditorsPicksSection from '@/components/editorial/EditorsPicksSection';
import { getEditorsPicks } from '@/lib/editor-picks';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Journal: Chauffeur and Executive Travel Analysis',
  description:
    'Guides and analysis on London chauffeurs, airport transfers, executive travel, and events, edited as long-form journalism, not SEO filler.',
  alternates: { canonical: '/blog' },
};

const PAGE_SIZE = 10;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string };
}) {
  const activeCategory = searchParams.category || 'All';
  const page = Math.max(1, parseInt(searchParams.page || '1', 10));
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from('articles')
    .select('*', { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(from, to);

  if (activeCategory !== 'All') {
    query = query.eq('category', activeCategory);
  }

  const { data: articles, count } = await query;
  const totalPages = Math.ceil((count || 0) / PAGE_SIZE);
  const topicMeta = activeCategory !== 'All' ? getTopicByCategory(activeCategory) : undefined;
  const editorsPicks = activeCategory !== 'All' ? getEditorsPicks() : null;

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (activeCategory !== 'All') params.set('category', activeCategory);
    if (p > 1) params.set('page', String(p));
    const qs = params.toString();
    return `/blog${qs ? `?${qs}` : ''}`;
  };

  return (
    <>
      <Header />
      <main className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <header className="max-w-3xl">
          <p className="editorial-label">Archive</p>
          <h1 className="font-display mt-5 text-display-xl font-medium text-ink">Journal</h1>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Essays and guides on how premium ground transport in London actually works, written for
            readers who brief boards, not for bots.
          </p>
        </header>

        <div className="mt-12 border border-line bg-surface p-4 sm:p-6">
          <p className="editorial-label mb-4">Filter by topic</p>
          <div className="flex flex-wrap gap-2">
            {JOURNAL_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeCategory === cat
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-paper text-ink-muted hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </Link>
            ))}
            <Link
              href="/topics"
              className="border border-dashed border-ink/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted hover:border-ink hover:text-ink"
            >
              Topic index
            </Link>
          </div>
          {topicMeta && (
            <p className="mt-6 max-w-3xl border-t border-line pt-6 text-sm leading-relaxed text-ink-muted">
              <strong className="font-medium text-ink">{topicMeta.category}.</strong> {topicMeta.dek}
            </p>
          )}
        </div>

        {editorsPicks && (
          <div className="mt-12 border border-line bg-paper-warm p-8 lg:p-10">
            <EditorsPicksSection picks={editorsPicks} />
          </div>
        )}

        {articles && articles.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center">
            <p className="font-display text-2xl text-ink">No pieces in this filter</p>
            <p className="mt-2 text-sm text-ink-muted">
              Clear the topic filter or try another from the{' '}
              <Link href="/topics" className="underline underline-offset-2">
                topics page
              </Link>
              .
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-16 flex flex-wrap justify-center gap-2">
            {page > 1 && (
              <Link href={buildHref(page - 1)} className="btn-secondary py-2 text-[0.65rem]">
                Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={buildHref(p)}
                className={`min-w-[2.5rem] border px-3 py-2 text-center text-xs font-semibold ${
                  p === page
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-surface text-ink-muted hover:border-ink'
                }`}
              >
                {p}
              </Link>
            ))}
            {page < totalPages && (
              <Link href={buildHref(page + 1)} className="btn-secondary py-2 text-[0.65rem]">
                Next
              </Link>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
