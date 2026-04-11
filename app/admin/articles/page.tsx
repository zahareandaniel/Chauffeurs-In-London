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
    <div className="min-h-screen bg-paper">
      {/* Admin header */}
      <div className="flex items-center justify-between border-b border-line bg-ink px-6 py-4">
        <span className="font-display text-white text-lg font-semibold">
          Chauffeurs in London · Admin
        </span>
        <Link href="/" className="text-white/60 text-sm hover:text-white">
          ← View site
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-semibold text-ink">Articles</h1>
          <Link href="/admin/articles/new" className="btn-primary">
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
                  ? 'border-b-2 border-accent text-accent'
                  : 'text-ink/50 hover:text-ink'
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
          <div className="py-16 text-center text-ink/40">
            <p className="font-display text-2xl mb-2">No articles yet</p>
            <p className="text-sm">
              <Link href="/admin/articles/new" className="text-accent hover:underline">
                Create your first article →
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
