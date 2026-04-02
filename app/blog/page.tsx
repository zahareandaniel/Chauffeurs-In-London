import { supabase } from '@/lib/supabase';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog — Chauffeur Guides & Tips for London',
  description:
    'Browse expert guides on chauffeur services, airport transfers, corporate travel and private hire in London.',
};

const CATEGORIES = ['All', 'Airport Transfers', 'Corporate', 'Wedding', 'Events', 'Tips'];
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page title */}
        <div className="mb-10">
          <h1 className="font-display text-navy text-4xl sm:text-5xl font-semibold mb-2">
            Chauffeur Guides
          </h1>
          <p className="text-navy/60 text-base">
            Expert advice on London&apos;s premium chauffeur services.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={
                cat === 'All'
                  ? '/blog'
                  : `/blog?category=${encodeURIComponent(cat)}`
              }
              className={`px-4 py-2 text-sm font-semibold font-body border transition-colors ${
                activeCategory === cat
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy/60 border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Articles grid */}
        {articles && articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-navy/40">
            <p className="font-display text-2xl mb-2">No articles found</p>
            <p className="text-sm">Try a different category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {page > 1 && (
              <Link href={buildHref(page - 1)} className="btn-outline py-2 px-4 text-xs">
                ← Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={buildHref(p)}
                className={`py-2 px-4 text-xs font-semibold border transition-colors ${
                  p === page
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-gray-200 hover:border-gold'
                }`}
              >
                {p}
              </Link>
            ))}
            {page < totalPages && (
              <Link href={buildHref(page + 1)} className="btn-outline py-2 px-4 text-xs">
                Next →
              </Link>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
