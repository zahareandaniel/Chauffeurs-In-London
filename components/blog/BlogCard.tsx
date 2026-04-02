import Link from 'next/link';
import Image from 'next/image';
import { Article, estimateReadTime } from '@/lib/supabase';
import { articleCoverSrc } from '@/lib/article-cover';

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
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
    <article className="group bg-white border border-gray-100 hover:border-gold/30 transition-colors duration-200 overflow-hidden">
      <div className="relative w-full h-52 overflow-hidden bg-navy/5">
        <Image
          src={coverSrc}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-3">
          {article.category && (
            <span className="category-tag">{article.category}</span>
          )}
          <span className="text-xs text-navy/40 font-body ml-auto">{readTime} min read</span>
        </div>

        {/* Title */}
        <h2 className="font-display text-navy text-xl font-semibold leading-snug mb-2 group-hover:text-gold transition-colors">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-navy/60 text-sm leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-navy/40 font-body">{date}</span>
          <Link
            href={`/blog/${article.slug}`}
            className="text-gold text-sm font-semibold font-body hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
