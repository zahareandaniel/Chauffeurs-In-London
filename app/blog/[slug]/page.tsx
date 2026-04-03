import { supabase } from '@/lib/supabase';
import { estimateReadTime } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ArticleEndmatter from '@/components/editorial/ArticleEndmatter';
import ArticleContextualLinks from '@/components/editorial/ArticleContextualLinks';
import ArticleAside from '@/components/editorial/ArticleAside';
import { showArticleContextualLinks } from '@/lib/editor-picks';
import BlogCard from '@/components/blog/BlogCard';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import RecognisedProvidersArticle from '@/components/editorial/RecognisedProvidersArticle';
import Image from 'next/image';
import { articleCoverAbsoluteUrl, articleCoverSrc } from '@/lib/article-cover';
import { siteUrl } from '@/lib/site-config';

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

  const appUrl = siteUrl();
  const ogImage = articleCoverAbsoluteUrl(
    { slug: article.slug, cover_image_url: article.cover_image_url },
    appUrl,
  );

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || '',
    alternates: {
      canonical: `${appUrl.replace(/\/$/, '')}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || '',
      url: `${appUrl.replace(/\/$/, '')}/blog/${article.slug}`,
      images: [{ url: ogImage }],
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
  const appUrl = siteUrl().replace(/\/$/, '');
  const heroSrc = articleCoverSrc(article);
  const heroAbsolute = articleCoverAbsoluteUrl(article, appUrl);

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.meta_title || article.title,
    description: article.meta_description || article.excerpt || '',
    image: heroAbsolute,
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

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${appUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: `${appUrl}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${appUrl}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <article className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-ink">
                Journal
              </Link>
            </li>
            {article.category && (
              <>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={`/blog?category=${encodeURIComponent(article.category)}`}
                    className="hover:text-ink"
                  >
                    {article.category}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden>/</li>
            <li className="max-w-[14rem] truncate text-ink sm:max-w-none">{article.title}</li>
          </ol>
        </nav>

        <header className="mt-10 max-w-readable xl:max-w-none">
          {article.category && <span className="badge-muted">{article.category}</span>}
          <h1 className="font-display mt-6 text-display-lg font-medium leading-[1.12] text-ink lg:text-[2.35rem]">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-subtle">
            {publishedDate && <time dateTime={article.published_at ?? undefined}>{publishedDate}</time>}
            <span aria-hidden>·</span>
            <span>{readTime} min read</span>
            <span aria-hidden>·</span>
            <span className="text-ink-muted">Chauffeurs in London · editorial</span>
          </div>
        </header>

        <div className="relative mt-12 aspect-[21/9] max-h-[26rem] w-full overflow-hidden bg-paper-warm sm:aspect-[2/1]">
          <Image src={heroSrc} alt={article.title} fill className="object-cover" priority />
        </div>

        <div className="mt-14 grid gap-12 xl:grid-cols-[minmax(0,1fr)_16.5rem] xl:gap-14 2xl:grid-cols-[minmax(0,1fr)_17.5rem] 2xl:gap-16">
          <div className="min-w-0">
            <div className="max-w-readable">
              <ArticleRenderer content={article.content} />
            </div>

            <div className="mt-12 max-w-readable">
              <RecognisedProvidersArticle />
            </div>

            {showArticleContextualLinks(article.category) && (
              <div className="mt-12 max-w-readable">
                <ArticleContextualLinks category={article.category} />
              </div>
            )}

            <div className="max-w-readable">
              <ArticleEndmatter currentSlug={article.slug} />
            </div>
          </div>

          <ArticleAside category={article.category} readTime={readTime} articleSlug={article.slug} />
        </div>

        {related && related.length > 0 && (
          <section className="mt-24 border-t border-line pt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl font-medium text-ink">
              Further reading · {article.category}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted">
              Same topic, different angles, cross-linked for readers building a briefing pack.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <BlogCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}
      </article>
      <Footer />
    </>
  );
}
