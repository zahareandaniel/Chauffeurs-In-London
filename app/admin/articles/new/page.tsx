import Link from 'next/link';
import ArticleForm from '@/components/admin/ArticleForm';

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-navy px-6 py-4 flex items-center justify-between">
        <span className="font-display text-white text-lg font-semibold">
          Chauffeurs in London — Admin
        </span>
        <Link href="/admin/articles" className="text-white/60 text-sm hover:text-white">
          ← Back to articles
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-display text-navy text-3xl font-semibold mb-8">New Article</h1>
        <ArticleForm mode="create" />
      </div>
    </div>
  );
}
