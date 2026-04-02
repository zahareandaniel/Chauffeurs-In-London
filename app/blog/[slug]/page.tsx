import { supabase } from '@/lib/supabase';
import { estimateReadTime } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import TrouvCTA from '@/components/blog/TrouvCTA';
import BlogCard from '@/components/blog/BlogCard';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: article } = await supabase
    .from('articles')
    .select('title, meta_title, meta_description, cover_image_url, slug')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  if (!article) return {};

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://chauffeursinlondon.com';

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || '',
    alternates: {
      canonical: `${appUrl}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || '',
      url: `${appUrl}/blog/${article.slug}`,
      images: article.cover_image_url ? [{ url: article.cover_image_url }] : [],
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  if (!article) notFound();

  // Related articles (same category, excluding current)
  const { data: related } = article.category
    ? await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .eq('category', article.category)
        .neq('id', article.id)
        .limit(3)
    : { data: [] };

  const readTime = estimateReadTime(article.content);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://chauffeursinlondon.com';

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  // JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.meta_title || article.title,
    description: article.meta_description || article.excerpt || '',
    image: article.cover_image_url || '',
    author: {
      '@type': 'Organization',
      name: 'Chauffeurs in London',
      url: appUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chauffeurs in London',
      url: appUrl,
    },
    datePublished: article.published_at || article.created_at,
    dateModified: article.updated_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${appUrl}/blog/${article.slug}`,
    },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article header */}
        <article>
          <header className="mb-8">
            {article.category && (
              <span className="category-tag mb-4 inline-block">{article.category}</span>
            )}
            <h1 className="font-display text-navy text-4xl sm:text-5xl font-semibold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-navy/40 font-body">
              {publishedDate && <span>{publishedDate}</span>}
              <span>·</span>
              <span>{readTime} min read</span>
            </div>
          </header>

          {/* Cover image */}
          {article.cover_image_url && (
            <div className="relative w-full h-64 sm:h-80 mb-10 overflow-hidden">
              <Image
                src={article.cover_image_url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article body */}
          <ArticleRenderer content={article.content} />

          {/* Trouv CTA */}
          <TrouvCTA />
        </article>

        {/* Related articles */}
        {related && related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="font-display text-navy text-2xl font-semibold mb-6">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <BlogCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
