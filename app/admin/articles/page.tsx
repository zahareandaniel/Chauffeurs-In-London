import { getAdminClient } from '@/lib/supabase';
import Link from 'next/link';
import ArticleCard from '@/components/admin/ArticleCard';

export const dynamic = 'force-dynamic';

export default async function AdminArticlesPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const supabase = getAdminClient();
  const statusFilter = searchParams.status || 'all';

  let query = supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (statusFilter !== 'all') {
    query = query.eq('status', statusFilter);
  }

  const { data: articles, error } = await query;

  return (
    <div className="min-h-screen bg-cream">
      {/* Admin header */}
      <div className="bg-navy px-6 py-4 flex items-center justify-between">
        <span className="font-display text-white text-lg font-semibold">
          Chauffeurs in London · Admin
        </span>
        <Link href="/" className="text-white/60 text-sm hover:text-white">
          ← View site
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-navy text-3xl font-semibold">Articles</h1>
          <Link href="/admin/articles/new" className="btn-gold">
            + New Article
          </Link>
        </div>

        {/* Status tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200">
          {['all', 'draft', 'published'].map((tab) => (
            <Link
              key={tab}
              href={`/admin/articles?status=${tab}`}
              className={`px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                statusFilter === tab
                  ? 'border-b-2 border-gold text-gold'
                  : 'text-navy/50 hover:text-navy'
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm mb-6">
            Error loading articles: {error.message}
          </div>
        )}

        {articles && articles.length > 0 ? (
          <div className="space-y-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-navy/40">
            <p className="font-display text-2xl mb-2">No articles yet</p>
            <p className="text-sm">
              <Link href="/admin/articles/new" className="text-gold hover:underline">
                Create your first article →
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
