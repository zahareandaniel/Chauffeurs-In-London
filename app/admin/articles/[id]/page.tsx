import { getAdminClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ArticleForm from '@/components/admin/ArticleForm';

export const dynamic = 'force-dynamic';

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const supabase = getAdminClient();
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !article) notFound();

  return (
    <div className="min-h-screen bg-paper">
      <div className="flex items-center justify-between border-b border-line bg-ink px-6 py-4">
        <span className="font-display text-white text-lg font-semibold">
          Chauffeurs in London · Admin
        </span>
        <Link href="/admin/articles" className="text-white/60 text-sm hover:text-white">
          ← Back to articles
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-semibold text-ink">Edit Article</h1>
          {article.status === 'published' && (
            <Link
              href={`/blog/${article.slug}`}
              target="_blank"
              className="text-sm text-accent hover:underline"
            >
              View live →
            </Link>
          )}
        </div>
        <ArticleForm article={article} mode="edit" />
      </div>
    </div>
  );
}
