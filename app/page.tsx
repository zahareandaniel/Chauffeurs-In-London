import { supabase } from '@/lib/supabase';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedCompanyCard from '@/components/editorial/FeaturedCompanyCard';
import EditorsPicksSection from '@/components/editorial/EditorsPicksSection';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import { getFeaturedCompanies } from '@/lib/featured-companies';
import { getEditorsPicks } from '@/lib/editor-picks';
import { GUIDE_HUBS } from '@/lib/guide-hubs';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Home',
  description: `${SITE.descriptor}. Curated journal, featured operators, and airport & executive travel guides for London.`,
};

export default async function HomePage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(9);

  /** Alphabetical so no operator is implied “first” after the rotating picks strip */
  const companiesDisplay = [...getFeaturedCompanies()].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const editorsPicks = getEditorsPicks();
  const [lead, ...rest] = articles ?? [];

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="editorial-label max-w-measure">{SITE.descriptor}</p>
            <h1 className="font-display mt-8 max-w-[20ch] text-display-xl font-medium text-ink">
              The London chauffeur desk
            </h1>
            <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-muted sm:text-xl">
              Independent guides on executive ground transport — written for readers who need
              clarity, and for operators who want to be seen alongside a credible editorial standard.
              We publish deeply; we feature selectively.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/blog" className="btn-primary">
                Open the journal
              </Link>
              <Link href="/get-featured" className="btn-secondary">
                Request a feature
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper-warm px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="editorial-label">Why the platform exists</p>
              <h2 className="font-display mt-4 text-display-lg font-medium text-ink">
                Authority without noise
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-sm leading-relaxed text-ink-muted sm:text-base">
              <p>
                Most chauffeur content online is either thin SEO or disguised advertising. This
                project sits between those poles: a publication-level treatment of airport
                transfers, corporate travel, and event transport — with room to profile operators
                who meet an explicit editorial bar.
              </p>
              <p>
                Being featured here is deliberate. We explain how companies are considered, we
                separate editorial profiles from generic listings, and we keep the visual and verbal
                tone closer to a travel journal than a lead-gen funnel.
              </p>
              <Link href="/about" className="inline-block text-sm font-semibold text-ink underline underline-offset-4">
                Read our selection framework →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-line px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <EditorsPicksSection picks={editorsPicks} />
          </div>
        </section>

        <section className="px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="editorial-label">Editor&apos;s desk</p>
                <h2 className="font-display mt-3 text-display-lg font-medium text-ink">
                  Featured operators
                </h2>
                <p className="mt-3 max-w-xl text-sm text-ink-muted">
                  Long-form profiles — not directory rows. New partners are added only after editorial
                  review.
                </p>
              </div>
              <Link href="/featured" className="btn-secondary shrink-0 self-start sm:self-auto">
                View all profiles
              </Link>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {companiesDisplay.map((c) => (
                <FeaturedCompanyCard key={c.slug} company={c} />
              ))}
            </div>
          </div>
        </section>

        {lead && (
          <section className="border-t border-line bg-paper px-4 py-section sm:px-6 lg:px-8">
            <div className="max-w-content mx-auto">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <div>
                  <p className="editorial-label">Latest from the journal</p>
                  <h2 className="font-display mt-3 text-display-lg font-medium text-ink">
                    Guides &amp; analysis
                  </h2>
                </div>
                <Link href="/blog" className="link-underline text-sm font-semibold">
                  Browse the archive →
                </Link>
              </div>
              <div className="mt-14 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <BlogCard article={lead} featured />
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  {rest.slice(0, 2).map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
              {rest.length > 2 && (
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.slice(2, 5).map((article) => (
                    <BlogCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="border-t border-line px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto">
            <p className="editorial-label">Content hubs</p>
            <h2 className="font-display mt-3 text-display-lg font-medium text-ink">
              Airport, city &amp; industry
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink-muted">
              Crawlable hubs that tie guides together — built for readers first, structured so search
              engines understand topical depth.
            </p>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {GUIDE_HUBS.map((hub) => (
                <div
                  key={hub.id}
                  id={hub.id}
                  className="scroll-mt-28 border border-line bg-white p-8 lg:p-10"
                >
                  <h3 className="font-display text-xl font-medium text-ink">{hub.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{hub.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {hub.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="link-underline text-sm font-medium">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/guides" className="btn-secondary">
                Full guides index
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-ink text-paper px-4 py-section sm:px-6 lg:px-8">
          <div className="max-w-content mx-auto text-center">
            <p className="editorial-label text-paper/50">Inclusion</p>
            <h2 className="font-display mx-auto mt-6 max-w-xl text-display-lg font-medium text-paper">
              Built so operators want the association
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-paper/70">
              We invest in layout, typography, and methodology copy so a feature feels like a
              serious profile — not a purchased badge. If that matches how you want your brand to
              appear to executive clients, start a conversation with the editorial desk.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/get-featured"
                className="inline-flex border border-paper bg-paper px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper/90"
              >
                Request consideration
              </Link>
              <Link
                href="/contact"
                className="inline-flex border border-white/30 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
