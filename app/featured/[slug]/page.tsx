import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { getCompanyBySlug, getFeaturedCompanies, TROUV_SLUG } from '@/lib/featured-companies';
import { siteUrl } from '@/lib/site-config';
import RecommendedChauffeurServices from '@/components/editorial/RecommendedChauffeurServices';
import { getConversionRecommendations } from '@/lib/market-operators';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getFeaturedCompanies().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const company = getCompanyBySlug(params.slug);
  if (!company) return {};
  const base = siteUrl().replace(/\/$/, '');
  return {
    title: `${company.name}, featured operator profile`,
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

  const recommended = getConversionRecommendations({
    omitTrouv: company.slug === TROUV_SLUG,
    seed: `featured-${company.slug}`,
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${company.name}, featured chauffeur operator (editorial)`,
    description: company.editorialSummary,
    author: { '@type': 'Organization', name: 'Chauffeurs in London' },
    ...(company.websiteUrl
      ? {
          about: {
            '@type': 'Organization',
            name: company.name,
            url: company.websiteUrl,
          },
        }
      : {}),
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
                {company.websiteUrl ? (
                  <div className="border border-line bg-surface p-6">
                    <p className="editorial-label">Official site</p>
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener"
                      className="mt-3 inline-flex text-sm font-medium text-ink underline underline-offset-4"
                    >
                      {company.websiteUrl.replace(/^https?:\/\/(www\.)?/, '')} ↗
                    </a>
                    <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
                      Partner link to the operator’s official site. Booking, terms, and licensing remain
                      with the operator.
                    </p>
                  </div>
                ) : (
                  <div className="border border-line bg-paper-warm p-5">
                    <p className="editorial-label">Editorial only</p>
                    <p className="mt-2 text-xs leading-relaxed text-ink-subtle">
                      This desk does not link to this operator’s website. When you are ready to engage or
                      book, find the operator through search or your travel desk and confirm licensing
                      and terms there.
                    </p>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <Link href="/get-featured" className="btn-secondary text-center">
                    Apply for a profile
                  </Link>
                </div>
                <div>
                  <p className="editorial-label">Related editorial</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    <li>
                      <Link href="/guides/chauffeur-service-types-london" className="link-underline text-ink">
                        Chauffeur service types in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/comparisons/uber-vs-chauffeur-london" className="link-underline text-ink">
                        Uber vs chauffeur in London
                      </Link>
                    </li>
                    <li>
                      <Link href="/companies" className="link-underline text-ink">
                        Recognised market operators
                      </Link>
                    </li>
                    <li>
                      <Link href="/methodology" className="link-underline text-ink">
                        How companies are selected
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="text-xs leading-relaxed text-ink-subtle">{company.methodologyNote}</p>
              </div>
            </aside>
          </div>
        </article>

        <div className="max-w-content mx-auto">
          <RecommendedChauffeurServices rows={recommended} />
        </div>
      </main>
      <Footer />
    </>
  );
}
