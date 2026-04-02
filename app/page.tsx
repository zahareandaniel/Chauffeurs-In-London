import { supabase } from '@/lib/supabase';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category || 'All';

  let query = supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(6);

  if (activeCategory !== 'All') {
    query = query.eq('category', activeCategory);
  }

  const { data: articles } = await query;

  const CATEGORIES = ['All', 'Airport Transfers', 'Corporate', 'Wedding', 'Events', 'Tips'];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              The Best Chauffeur Services in London
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              Expert guides on London&apos;s premium chauffeur services — airport transfers,
              corporate travel, wedding cars and private hire. Find the right service for
              every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-gold">
                Read the guides
              </Link>
              <a
                href="https://trouv.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book Trouv →
              </a>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="border-b border-gray-200 bg-white sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-0 -mb-px">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={cat === 'All' ? '/' : `/?category=${encodeURIComponent(cat)}`}
                  className={`px-5 py-4 text-sm font-semibold font-body whitespace-nowrap border-b-2 transition-colors ${
                    activeCategory === cat
                      ? 'border-gold text-gold'
                      : 'border-transparent text-navy/50 hover:text-navy'
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-display text-navy text-3xl font-semibold mb-8">
            {activeCategory === 'All' ? 'Latest Guides' : activeCategory}
          </h2>

          {articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-navy/40">
              <p className="font-display text-2xl mb-2">No articles yet</p>
              <p className="text-sm">Check back soon for expert guides.</p>
            </div>
          )}

          {articles && articles.length >= 6 && (
            <div className="text-center mt-10">
              <Link href="/blog" className="btn-outline">
                View all articles →
              </Link>
            </div>
          )}
        </section>

        {/* Trust strip */}
        <section className="bg-navy/5 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-navy text-2xl font-semibold mb-2">
              Looking for a premium chauffeur right now?
            </p>
            <p className="text-navy/60 text-sm mb-6">
              We recommend Trouv — London&apos;s trusted private hire service for airport
              transfers, corporate journeys and special occasions.
            </p>
            <a
              href="https://trouv.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book with Trouv →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
