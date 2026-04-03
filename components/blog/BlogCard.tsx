import Link from 'next/link';
import Image from 'next/image';
import { Article, estimateReadTime } from '@/lib/supabase';
import { articleCoverSrc } from '@/lib/article-cover';

interface BlogCardProps {
  article: Article;
  /** Larger typography for homepage lead */
  featured?: boolean;
}

export default function BlogCard({ article, featured }: BlogCardProps) {
  const readTime = estimateReadTime(article.content);
  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const coverSrc = articleCoverSrc(article);

  return (
    <article className="group card-editorial flex flex-col overflow-hidden bg-surface">
      <Link href={`/blog/${article.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-paper-warm">
        <Image
          src={coverSrc}
          alt={article.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
          {article.category ? <span>{article.category}</span> : <span>Journal</span>}
          <span>{readTime} min</span>
        </div>
        <h2
          className={`font-display mt-4 font-medium tracking-tight text-ink group-hover:opacity-70 ${
            featured ? 'text-2xl sm:text-[1.75rem] leading-snug' : 'text-xl leading-snug'
          }`}
        >
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        {article.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
        )}
        <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
          <time className="text-xs text-ink-subtle" dateTime={article.published_at ?? undefined}>
            {date}
          </time>
          <Link
            href={`/blog/${article.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
