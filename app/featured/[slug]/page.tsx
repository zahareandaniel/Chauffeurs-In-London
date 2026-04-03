import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { getCompanyBySlug, getFeaturedCompanies } from '@/lib/featured-companies';
import { siteUrl } from '@/lib/site-config';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getFeaturedCompanies().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const company = getCompanyBySlug(params.slug);
  if (!company) return {};
  const base = siteUrl().replace(/\/$/, '');
  return {
    title: `${company.name} — featured operator profile`,
    description: company.editorialSummary,
    alternates: { canonical: `${base}/featured/${company.slug}` },
    openGraph: {
      title: `${company.name} | Featured operator`,
      description: company.editorialSummary,
      url: `${base}/featured/${company.slug}`,
      type: 'article',
    },
  };
}

export default function CompanyProfilePage({ params }: Props) {
  const company = getCompanyBySlug(params.slug);
  if (!company) notFound();

  const isSample = company.badges.some((b) => b.toLowerCase().includes('sample'));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${company.name} — featured chauffeur operator (editorial)`,
    description: company.editorialSummary,
    author: { '@type': 'Organization', name: 'Chauffeurs in London' },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <article className="max-w-content mx-auto">
          <nav className="text-xs text-ink-subtle" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/featured" className="hover:text-ink">
                  Featured operators
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{company.name}</li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-wrap gap-2">
            {company.badges.map((b) => (
              <span key={b} className="badge-muted">
                {b}
              </span>
            ))}
          </div>

          <header className="mt-6 max-w-measure">
            <h1 className="font-display text-display-lg font-medium text-ink">{company.name}</h1>
            <p className="mt-2 text-sm text-ink-subtle">{company.location}</p>
            <p className="mt-6 text-lg font-medium leading-snug text-ink-muted">{company.tagline}</p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="editorial-label">Overview</h2>
                <p className="mt-4 text-base leading-[1.8] text-ink-muted">{company.overview}</p>
              </section>

              <section>
                <h2 className="editorial-label">Locations covered</h2>
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {company.locationsCovered.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-ink-subtle">·</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="editorial-label">Airport expertise</h2>
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {company.airportExpertise.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-ink-subtle">·</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </section>

              {company.specialisms.map((s) => (
                <section key={s.title}>
                  <h2 className="editorial-label">{s.title}</h2>
                  <p className="mt-4 text-base leading-[1.8] text-ink-muted">{s.body}</p>
                </section>
              ))}

              <section className="border border-line bg-paper-warm p-6 sm:p-8">
                <h2 className="editorial-label">Editorial notes</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{company.editorialNotes}</p>
              </section>

              <section>
                <h2 className="editorial-label">Why they stand out</h2>
                <ul className="mt-4 space-y-3 text-ink-muted">
                  {company.whyTheyStandOut.map((x) => (
                    <li key={x} className="border-l-2 border-ink pl-4 leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="editorial-label">Service focus</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    {company.serviceFocus.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  {company.websiteUrl && !isSample && (
                    <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                      Visit website
                    </a>
                  )}
                  <Link href="/get-featured" className="btn-secondary text-center">
                    Apply for a profile
                  </Link>
                </div>
                <p className="text-xs leading-relaxed text-ink-subtle">{company.methodologyNote}</p>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
