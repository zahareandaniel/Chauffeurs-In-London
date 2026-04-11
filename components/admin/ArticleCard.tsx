import Link from 'next/link';
import { Article } from '@/lib/supabase';
import StatusBadge from './StatusBadge';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const date = new Date(article.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="bg-white border border-gray-200 p-5 hover:border-accent/40 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <StatusBadge status={article.status} />
            {article.category && (
              <span className="text-xs text-ink/50 font-body">{article.category}</span>
            )}
          </div>
          <h3 className="font-display text-ink text-lg font-semibold truncate">
            {article.title}
          </h3>
          {article.focus_keyword && (
            <p className="text-xs text-ink/40 font-body mt-0.5">
              Keyword: <span className="text-ink/60">{article.focus_keyword}</span>
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-ink/40 font-body hidden sm:block">{date}</span>
          <Link
            href={`/admin/articles/${article.id}`}
            className="btn-outline text-xs py-2 px-4"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
